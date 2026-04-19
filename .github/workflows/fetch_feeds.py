import json, re, urllib.request, xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime

FEEDS = [
    {"id": "sciencedaily",  "label": "ScienceDaily",            "url": "https://www.sciencedaily.com/rss/mind_brain.xml",             "count": 6},
    {"id": "neuronews",     "label": "Neuroscience News",       "url": "https://neurosciencenews.com/feed/",                          "count": 6},
    {"id": "bps",           "label": "BPS Research Digest",     "url": "https://www.bps.org.uk/research-digest/feed",                 "count": 6},
    {"id": "hbr",           "label": "Harvard Business Review", "url": "http://feeds.harvardbusiness.org/harvardbusiness",            "count": 6},
    {"id": "lse",           "label": "LSE Business Review",     "url": "https://blogs.lse.ac.uk/businessreview/feed/",               "count": 6},
    {"id": "bbc",           "label": "BBC Business",            "url": "https://feeds.bbci.co.uk/news/business/rss.xml",             "count": 6},
]

MEDIA_NS   = 'http://search.yahoo.com/mrss/'
ATOM_NS    = 'http://www.w3.org/2005/Atom'
CONTENT_NS = 'http://purl.org/rss/1.0/modules/content/'
DC_NS      = 'http://purl.org/dc/elements/1.1/'

def clean(text):
    if not text:
        return ''
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text[:240]

def fmt_date(s):
    if not s:
        return ''
    try:
        return parsedate_to_datetime(s).strftime('%-d %b %Y')
    except Exception:
        pass
    try:
        return datetime.strptime(s[:10], '%Y-%m-%d').strftime('%-d %b %Y')
    except Exception:
        pass
    return s[:10]

def extract_image(item, desc_html):
    for el in item.findall(f'{{{MEDIA_NS}}}content'):
        medium = el.get('medium', '')
        ctype  = el.get('type', '')
        url    = el.get('url', '')
        if url and (medium == 'image' or ctype.startswith('image/')):
            return url
    el = item.find(f'{{{MEDIA_NS}}}content')
    if el is not None:
        url = el.get('url', '')
        if url:
            return url
    el = item.find(f'{{{MEDIA_NS}}}thumbnail')
    if el is not None:
        url = el.get('url', '')
        if url:
            return url
    el = item.find('enclosure')
    if el is not None:
        ctype = el.get('type', '')
        url   = el.get('url', '')
        if url and ctype.startswith('image/'):
            return url
    if desc_html:
        m = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', desc_html, re.IGNORECASE)
        if m:
            return m.group(1)
    return ''

def fetch(feed):
    req = urllib.request.Request(
        feed['url'],
        headers={'User-Agent': 'Mozilla/5.0 (compatible; BeyondLimitsFeed/1.0)'}
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            raw = r.read()
    except Exception as e:
        print(f"  FAILED {feed['label']}: {e}")
        return []
    try:
        root = ET.fromstring(raw)
    except ET.ParseError as e:
        print(f"  PARSE ERROR {feed['label']}: {e}")
        return []

    items = []

    for item in root.findall('.//item')[:feed['count']]:
        g        = lambda t: (item.findtext(t) or '').strip()
        desc_raw = item.findtext(f'{{{CONTENT_NS}}}encoded') or g('description') or ''
        image    = extract_image(item, desc_raw)
        items.append({
            'source':  feed['label'],
            'feedId':  feed['id'],
            'title':   g('title') or 'Untitled',
            'link':    g('link') or g('guid') or '#',
            'date':    fmt_date(g('pubDate') or item.findtext(f'{{{DC_NS}}}date') or ''),
            'excerpt': clean(desc_raw),
            'image':   image,
        })

    if not items:
        for entry in root.findall(f'{{{ATOM_NS}}}entry')[:feed['count']]:
            g        = lambda t: (entry.findtext(f'{{{ATOM_NS}}}{t}') or '').strip()
            lnk      = (entry.find(f'{{{ATOM_NS}}}link[@rel="alternate"]')
                        or entry.find(f'{{{ATOM_NS}}}link'))
            href     = lnk.get('href', '#') if lnk is not None else '#'
            desc_raw = g('summary') or g('content')
            image    = extract_image(entry, desc_raw)
            items.append({
                'source':  feed['label'],
                'feedId':  feed['id'],
                'title':   g('title') or 'Untitled',
                'link':    href,
                'date':    fmt_date(g('published') or g('updated')),
                'excerpt': clean(desc_raw),
                'image':   image,
            })

    print(f"  OK {feed['label']}: {len(items)} articles, {sum(1 for i in items if i['image'])} with images")
    return items

all_articles = []
for f in FEEDS:
    print(f"Fetching {f['label']}...")
    all_articles.extend(fetch(f))

output = {
    'updated':  datetime.now(timezone.utc).strftime('%d %b %Y, %H:%M UTC'),
    'articles': all_articles
}

with open('feeds.json', 'w', encoding='utf-8') as fh:
    json.dump(output, fh, ensure_ascii=False, indent=2)

print(f"\nDone. {len(all_articles)} total articles written to feeds.json")

import json, urllib.request, xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime

FEEDS = [
    {"id": "breakthrough",  "label": "Breakthrough Moments",    "url": "https://mariafuentesbreakthroughcoaching.substack.com/feed",  "count": 6},
    {"id": "sciencedaily",  "label": "ScienceDaily",            "url": "https://www.sciencedaily.com/rss/mind_brain.xml",             "count": 6},
    {"id": "neuronews",     "label": "Neuroscience News",       "url": "https://neurosciencenews.com/feed/",                          "count": 6},
    {"id": "bps",           "label": "BPS Research Digest",     "url": "https://www.bps.org.uk/research-digest/feed",                 "count": 6},
    {"id": "hbr",           "label": "Harvard Business Review", "url": "http://feeds.harvardbusiness.org/harvardbusiness",            "count": 6},
    {"id": "lse",           "label": "LSE Business Review",     "url": "https://blogs.lse.ac.uk/businessreview/feed/",               "count": 6},
    {"id": "bbc",           "label": "BBC Business",            "url": "https://feeds.bbci.co.uk/news/business/rss.xml",             "count": 6},
]

NS = {
    'content': 'http://purl.org/rss/1.0/modules/content/',
    'dc':      'http://purl.org/dc/elements/1.1/',
}

def clean(text):
    if not text:
        return ''
    import re
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text[:240]

def fmt_date(s):
    if not s:
        return ''
    try:
        dt = parsedate_to_datetime(s)
        return dt.strftime('%-d %b %Y')
    except Exception:
        pass
    try:
        return datetime.strptime(s[:10], '%Y-%m-%d').strftime('%-d %b %Y')
    except Exception:
        pass
    return s[:10]

def fetch(feed):
    req = urllib.request.Request(
        feed['url'],
        headers={'User-Agent': 'Mozilla/5.0 (compatible; BeyondLimitsFeed/1.0)'}
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            xml = r.read()
    except Exception as e:
        print(f"  FAILED {feed['label']}: {e}")
        return []
    try:
        root = ET.fromstring(xml)
    except ET.ParseError as e:
        print(f"  PARSE ERROR {feed['label']}: {e}")
        return []

    items = []
    for item in root.findall('.//item')[:feed['count']]:
        g = lambda t: (item.findtext(t) or '').strip()
        desc = g('description') or item.findtext('content:encoded', namespaces=NS) or ''
        items.append({
            'source':  feed['label'],
            'feedId':  feed['id'],
            'title':   g('title') or 'Untitled',
            'link':    g('link') or g('guid') or '#',
            'date':    fmt_date(g('pubDate') or item.findtext('dc:date', namespaces=NS) or ''),
            'excerpt': clean(desc),
        })

    if not items:
        atom_ns = 'http://www.w3.org/2005/Atom'
        for entry in root.findall(f'{{{atom_ns}}}entry')[:feed['count']]:
            g = lambda t: (entry.findtext(f'{{{atom_ns}}}{t}') or '').strip()
            lnk = entry.find(f'{{{atom_ns}}}link[@rel="alternate"]') or entry.find(f'{{{atom_ns}}}link')
            href = lnk.get('href', '#') if lnk is not None else '#'
            items.append({
                'source':  feed['label'],
                'feedId':  feed['id'],
                'title':   g('title') or 'Untitled',
                'link':    href,
                'date':    fmt_date(g('published') or g('updated')),
                'excerpt': clean(g('summary') or g('content')),
            })

    print(f"  OK {feed['label']}: {len(items)} articles")
    return items

all_articles = []
for f in FEEDS:
    print(f"Fetching {f['label']}...")
    all_articles.extend(fetch(f))

output = {
    'updated': datetime.now(timezone.utc).strftime('%d %b %Y, %H:%M UTC'),
    'articles': all_articles
}

with open('feeds.json', 'w', encoding='utf-8') as fh:
    json.dump(output, fh, ensure_ascii=False, indent=2)

print(f"\nDone. {len(all_articles)} total articles written to feeds.json")

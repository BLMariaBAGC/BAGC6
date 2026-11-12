(function(){var K='__cbCupboard27';if(window[K])return;window[K]=1;
var IMG='__IMG__';var IMO='__IMO__';
var U='https://www.mariafuentes.co.uk/';
// name,url, object box x0,y0,x1,y1 (px in 1199x1312 image), label centre x, label y
var ITEMS=[
['Resilience & Well-being',U+'resilience/',[375,238,485,398],418,404,'Resilience'],
['Communication & Influence',U+'communication/',[552,208,642,402],608,404,'Communication'],
['Science & Neuroscience',U+'science-neuroscience/',[740,243,912,408],826,404,'Science'],
['Productivity & Time',U+'productivity-time/',[362,458,452,618],407,626,'Productivity'],
['Business & Strategy',U+'business-strategy/',[576,422,664,618],620,626,'Business'],
['Performance & Mindset',U+'performance-mindset/',[795,452,912,618],853,626,'Mindset'],
['Emotional Intelligence',U+'emotional-intelligence/',[338,690,474,842],392,846,'Emotional<br>Intelligence'],
['Lifestyle',U+'lifestyle/',[498,650,658,846],590,850,'Lifestyle'],
['Creativity',U+'creativity/',[752,682,948,838],850,850,'Creativity']];
var IW=1199,IH=1312;
var ov=null,isOpen=false,sel=null;
function touch(){try{return matchMedia('(hover: none)').matches}catch(e){return false}}
function setPl(t){var p=document.getElementById('cb-pl');if(p)p.innerHTML=t}
function pick(a){if(sel)sel.classList.remove('sel');sel=a;a.classList.add('sel');setPl(a.getAttribute('data-n')+' <small>\u2022 tap again to open</small>')}
try{var f=document.createElement('link');f.rel='stylesheet';f.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&display=swap';document.head.appendChild(f)}catch(e){}
var css='#cb-ov{position:fixed;left:0;top:0;right:0;bottom:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;background:rgba(3,10,12,.78);opacity:0;transition:opacity .4s;font-family:"Cormorant Garamond",Georgia,serif;-webkit-tap-highlight-color:transparent}'
+'#cb-ov.on{opacity:1}'
+'#cb{position:relative;transform:scale(.88) translateY(24px);opacity:0;transition:transform .7s cubic-bezier(.2,.8,.2,1),opacity .5s;border-radius:calc(var(--u)*26);box-shadow:0 30px 90px rgba(0,0,0,.7),0 0 0 calc(var(--u)*3) rgba(240,208,122,.55)}'
+'#cb-ov.on #cb{transform:none;opacity:1}'
+'#cb{perspective:1700px}'
+'#cb .cb-pic{position:absolute;left:0;top:0}'
+'.cb-door{position:absolute;top:'+(120/1312*100)+'%;height:'+(950/1312*100)+'%;background-image:url(__DOORS__);background-repeat:no-repeat;background-size:calc(var(--u)*1199) calc(var(--u)*1312);transition:transform 1.25s cubic-bezier(.55,0,.2,1),opacity .5s .85s;backface-visibility:hidden;-webkit-backface-visibility:hidden;z-index:3;pointer-events:none}'
+'.cb-dl{left:'+(300/1199*100)+'%;width:'+(373/1199*100)+'%;background-position:calc(var(--u)*-300) calc(var(--u)*-120);transform-origin:0 50%}'
+'.cb-dr{left:'+(673/1199*100)+'%;width:'+(327/1199*100)+'%;background-position:calc(var(--u)*-673) calc(var(--u)*-120);transform-origin:100% 50%}'
+'#cb.open .cb-dl{transform:rotateY(-104deg);opacity:0}#cb.open .cb-dr{transform:rotateY(104deg);opacity:0}'
+'.cb-hot{pointer-events:none}#cb.ready .cb-hot{pointer-events:auto}'
+'.cb-lab{opacity:0;transform:translateX(-50%) translateY(6px);transition:opacity .6s,transform .6s;pointer-events:none}#cb.ready .cb-lab{opacity:1;transform:translateX(-50%)}'
+'#cb .cb-pic{display:block;width:100%;height:100%;border-radius:inherit;user-select:none;-webkit-user-drag:none}'
+'#cb .cb-glow{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;pointer-events:none;background:linear-gradient(105deg,transparent 35%,rgba(255,240,200,.35) 50%,transparent 65%);transform:translateX(-120%);opacity:0}'
+'#cb-ov.on .cb-glow{animation:cbsweep 1.4s .5s ease-out 1}'
+'@keyframes cbsweep{0%{transform:translateX(-120%);opacity:1}100%{transform:translateX(120%);opacity:0}}'
+'.cb-hot{position:absolute;display:block;border-radius:calc(var(--u)*18);cursor:pointer;outline:none;transition:box-shadow .25s,background .25s}'
+'.cb-hot.sel,.cb-hot:hover,.cb-hot:focus-visible{background:rgba(255,224,150,.16);box-shadow:0 0 calc(var(--u)*34) rgba(255,214,120,.8),inset 0 0 calc(var(--u)*20) rgba(255,230,170,.35)}'
+'.cb-lab{position:absolute;white-space:nowrap;padding:calc(var(--u)*3) max(3px,calc(var(--u)*10));border-radius:calc(var(--u)*14);background:linear-gradient(#f0dca0,#bd9650);color:#2b1a0c;font-weight:700;font-size:max(7px,calc(var(--u)*21));line-height:1.05;text-align:center;letter-spacing:0;box-shadow:0 calc(var(--u)*3) calc(var(--u)*7) rgba(0,0,0,.55),inset 0 0 0 1px rgba(90,58,20,.45)}'
+'.cb-plaque{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(var(--u)*72);padding:calc(var(--u)*7) calc(var(--u)*42);border-radius:calc(var(--u)*10);background:linear-gradient(#f0dca0,#b78d45);color:#2b1a0c;font-weight:700;letter-spacing:.2em;text-transform:uppercase;font-size:calc(var(--u)*34);box-shadow:0 calc(var(--u)*5) calc(var(--u)*12) rgba(0,0,0,.6),inset 0 0 0 calc(var(--u)*2) rgba(90,58,20,.5);white-space:nowrap;pointer-events:none}'
+'.cb-plaque small{font-size:.6em;letter-spacing:.08em;text-transform:none;opacity:.85}'
+'.cb-x{position:absolute;right:calc(var(--u)*-12);top:calc(var(--u)*-12);width:max(34px,calc(var(--u)*64));height:max(34px,calc(var(--u)*64));border-radius:50%;border:0;padding:0;cursor:pointer;z-index:5;box-shadow:0 4px 12px rgba(0,0,0,.6);background:#c8211a url(__X__) center/cover}'
+'.cb-x{touch-action:manipulation}.cb-x:after{content:"";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}.cb-x:hover{filter:brightness(1.15)}';
function fit(){var cb=ov.querySelector('#cb');var w=Math.min(innerWidth*.94,innerHeight*.92*IW/IH,820);var h=w*IH/IW;cb.style.width=w+'px';cb.style.height=h+'px';cb.style.setProperty('--u',(w/IW)+'px')}
function build(){
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 ov=document.createElement('div');ov.id='cb-ov';ov.setAttribute('role','dialog');ov.setAttribute('aria-label','My Articles topics');
 var h='<div id="cb"><img class="cb-pic" alt="" draggable="false" src="'+IMO+'"><div class="cb-door cb-dl"></div><div class="cb-door cb-dr"></div><div class="cb-glow"></div>';
 for(var i=0;i<ITEMS.length;i++){var it=ITEMS[i],b=it[2];
  h+='<a class="cb-hot" role="link" tabindex="0" aria-label="'+it[0].replace('&','and')+'" data-u="'+it[1]+'" data-n="'+it[0].replace('&','&amp;')+'" style="left:'+(b[0]/IW*100)+'%;top:'+(b[1]/IH*100)+'%;width:'+((b[2]-b[0])/IW*100)+'%;height:'+((b[3]-b[1])/IH*100)+'%"></a>';
  h+='<span class="cb-lab" style="left:'+(it[3]/IW*100)+'%;top:'+(it[4]/IH*100)+'%">'+it[5]+'</span>';
  }
 h+='<div class="cb-plaque" id="cb-pl">My Articles</div><button class="cb-x" aria-label="Close" type="button"></button></div>';
 ov.innerHTML=h;document.body.appendChild(ov);
 ov.addEventListener('click',function(e){e.stopPropagation();var t=e.target;if(t===ov||(t.closest&&t.closest('.cb-x'))){close();return}var a=t.closest&&t.closest('.cb-hot');if(a){go(a.getAttribute('data-u'))}},true);
 ['pointerdown','mousedown','touchstart'].forEach(function(ev){ov.addEventListener(ev,function(e){var t=e.target;if(t&&t.closest&&t.closest('.cb-x')){e.stopPropagation();if(e.cancelable)e.preventDefault();close()}},true)});
 ov.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){var a=e.target.closest&&e.target.closest('[data-u]');if(a){e.preventDefault();go(a.getAttribute('data-u'))}}});
 ov.addEventListener('mouseover',function(e){var a=e.target.closest&&e.target.closest('.cb-hot');if(a&&!touch())setPl(a.getAttribute('data-n'))});
 ov.addEventListener('mouseout',function(e){var a=e.target.closest&&e.target.closest('.cb-hot');if(a&&!touch())setPl('My Articles')});
 addEventListener('resize',function(){if(isOpen)fit()});
}
function go(u){try{window.open(u,'_blank','noopener')}catch(e){location.href=u}}
function open(){if(isOpen)return;if(!ov)build();isOpen=true;ov.style.display='flex';fit();var cb=ov.querySelector('#cb');cb.classList.remove('open','ready');setTimeout(function(){if(isOpen)ov.classList.add('on')},30);setTimeout(function(){if(isOpen)cb.classList.add('open')},750);setTimeout(function(){if(isOpen)cb.classList.add('ready')},1500)}
function close(){if(!ov||!isOpen)return;isOpen=false;var c2=ov.querySelector('#cb');c2.classList.remove('open','ready');if(sel){sel.classList.remove('sel');sel=null}setPl('My Articles');ov.classList.remove('on');setTimeout(function(){if(!isOpen)ov.style.display='none'},450)}
window.__cbOpen=open;window.__cbClose=close;
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&isOpen)close()});
function menuImg(){
 var list=document.querySelectorAll('img'),best=null;
 for(var i=0;i<list.length;i++){var im=list[i],p=im.closest&&im.closest('[data-element-id]');
  if(/explore-(menu|board)/.test(im.src||'')||(p&&p.getAttribute('data-element-id')==='image-1794427654677-84')||(im.naturalWidth===2398&&im.naturalHeight===1750)){
   var r=im.getBoundingClientRect();if(r.width>50&&r.height>50&&getComputedStyle(im).visibility!=='hidden'){best=im;break}}}
 return best}

var MU='https://blmariabagc.github.io/BAGC6/soundscape-sync.html?cat=Classical%201&v=3',mov=null,mfr=null,mgot=0,mTimer=null,mOpen=false,mMini=false,mList=false,mGone=0;
function mfit(){if(!mfr)return;var w=Math.min(innerWidth*.92,460);mfr.style.width=w+'px';mfr.style.height=Math.round(w*(mMini?58:(mList?400:240))/514)+'px'}
function buildMusic(){
 var st=document.createElement('style');st.textContent='#mu-ov{position:fixed;right:16px;bottom:16px;z-index:2147482000;display:none;opacity:0;transition:opacity .3s;-webkit-tap-highlight-color:transparent}#mu-ov.on{opacity:1}#mu-box{position:relative;border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.55)}#mu-grip{height:22px;border-radius:14px 14px 0 0;background:linear-gradient(#1d3b3f,#12282b);color:#bfe0c4;font:600 11px/22px Georgia,serif;letter-spacing:.14em;text-transform:uppercase;padding:0 40px 0 12px;cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none}#mu-fr{display:block;border:0;background:transparent;border-radius:0 0 14px 14px;max-width:92vw}.mu-x{position:absolute;right:4px;top:-3px;width:28px;height:28px;border-radius:50%;border:0;padding:0;cursor:pointer;z-index:5;background:#c8211a url(__X__) center/cover;touch-action:manipulation}.mu-x:after{content:"";position:absolute;left:-8px;top:-8px;right:-8px;bottom:-8px}';document.head.appendChild(st);
 mov=document.createElement('div');mov.id='mu-ov';mov.setAttribute('role','dialog');mov.setAttribute('aria-label','Music Player');
 mov.innerHTML='<div id="mu-box"><div id="mu-grip">Music Player</div><iframe id="mu-fr" title="Soundscape" allow="autoplay" src="'+MU+'"></iframe><button class="mu-x" type="button" aria-label="Close"></button></div>';
 document.body.appendChild(mov);mfr=mov.querySelector('#mu-fr');mfit();
 var x=mov.querySelector('.mu-x');
 ['pointerdown','mousedown','touchstart','pointerup','mouseup','touchend'].forEach(function(ev){x.addEventListener(ev,function(e){e.stopPropagation()})});
 x.addEventListener('click',function(e){e.stopPropagation();e.preventDefault();closeMusic()});
 var g=mov.querySelector('#mu-grip'),drag=null;
 g.addEventListener('pointerdown',function(e){var r=mov.getBoundingClientRect();drag={dx:e.clientX-r.left,dy:e.clientY-r.top};mov.style.left=r.left+'px';mov.style.top=r.top+'px';mov.style.right='auto';mov.style.bottom='auto';try{g.setPointerCapture(e.pointerId)}catch(_){}e.stopPropagation()});
 g.addEventListener('pointermove',function(e){if(!drag)return;var r=mov.getBoundingClientRect();mov.style.left=Math.max(0,Math.min(innerWidth-r.width,e.clientX-drag.dx))+'px';mov.style.top=Math.max(0,Math.min(innerHeight-r.height,e.clientY-drag.dy))+'px'});
 g.addEventListener('pointerup',function(e){drag=null;try{g.releasePointerCapture(e.pointerId)}catch(_){}e.stopPropagation()});
 addEventListener('message',function(e){if(!mfr||e.source!==mfr.contentWindow||!e.data)return;if(e.data.ss==='hello')mgot=0;if(e.data.ss==='state'){mgot=1;mMini=!!e.data.mini;mfit()}if(e.data.ss==='list'){mList=!!e.data.open;mfit()}});
 mTimer=setInterval(function(){if(!mgot&&mfr&&mfr.contentWindow){try{mfr.contentWindow.postMessage({ss:'allow'},'*')}catch(e){}}},700);
 addEventListener('resize',mfit);
}
function openMusic(){if(!mov)buildMusic();mOpen=true;mov.style.display='block';mfit();setTimeout(function(){if(mOpen)mov.classList.add('on')},30)}
function closeMusic(){if(!mov||!mOpen)return;mOpen=false;try{mfr.contentWindow.postMessage({ss:'pause'},'*')}catch(e){}mov.classList.remove('on');mov.style.display='none'}
function stopMusic(){if(!mov)return;mOpen=false;clearInterval(mTimer);try{mov.remove()}catch(e){}mov=null;mfr=null;mgot=0;mMini=false;mList=false}
/* leaving this scene ends the pop-up player, like the top player */
setInterval(function(){if(!mov)return;var im=menuImg();var here=!!(im&&im.getClientRects().length);if(here){mGone=0}else if(++mGone>=2){mGone=0;stopMusic()}},1000);
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&mOpen)closeMusic()});window.__muOpen=openMusic;window.__muClose=closeMusic;
try{var jd=document.createElement('style');jd.textContent='@keyframes jdSpin{to{transform:rotate(360deg)}}@keyframes jdGlow{0%,100%{box-shadow:0 0 14px 3px rgba(170,120,255,.55),0 0 34px 10px rgba(90,150,255,.30)}50%{box-shadow:0 0 22px 7px rgba(215,165,255,.85),0 0 58px 20px rgba(110,170,255,.50)}}[data-element-id="image-1794390026735-82"]{border-radius:50%!important;animation:jdGlow 3.6s ease-in-out infinite}[data-element-id="image-1794390026735-82"] img{animation:jdSpin 48s linear infinite;border-radius:50%}@media(prefers-reduced-motion:reduce){[data-element-id="image-1794390026735-82"] img{animation:none}}';document.head.appendChild(jd)}catch(e){}
var TILES={art: [0.0781, 0.3476, 0.2213, 0.4733], feed: [0.3653, 0.6347, 0.2213, 0.4733], books: [0.6524, 0.9219, 0.2213, 0.4733], pod: [0.0781, 0.236, 0.4946, 0.792], music: [0.2496, 0.4075, 0.4946, 0.792], xmas: [0.421, 0.579, 0.4946, 0.792], dream: [0.5925, 0.7504, 0.4946, 0.792], break: [0.764, 0.9219, 0.4946, 0.792]};
function inTile(x,y){var im=menuImg();if(!im)return null;var r=im.getBoundingClientRect(),fx=(x-r.left)/r.width,fy=(y-r.top)/r.height;for(var k in TILES){var t=TILES[k];if(fx>=t[0]&&fx<=t[1]&&fy>=t[2]&&fy<=t[3])return k}return null}
var TOUCH=false;try{TOUCH=matchMedia('(hover: none)').matches||(navigator.maxTouchPoints>0&&Math.min(screen.width,screen.height)<820)}catch(e){}
function fire(id){var el=document.querySelector('[data-element-id="'+id+'"]');if(!el)return false;var r=el.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2,o={bubbles:true,cancelable:true,clientX:x,clientY:y,pointerId:1,isPrimary:true,button:0,pointerType:'mouse',view:window};
 if(TOUCH){try{var ot={bubbles:true,cancelable:true,clientX:x,clientY:y,pointerId:7,isPrimary:true,button:0,pointerType:'touch',view:window};el.dispatchEvent(new PointerEvent('pointerdown',ot));try{var th=new Touch({identifier:7,target:el,clientX:x,clientY:y,pageX:x,pageY:y});el.dispatchEvent(new TouchEvent('touchstart',{bubbles:true,cancelable:true,touches:[th],targetTouches:[th],changedTouches:[th]}));el.dispatchEvent(new TouchEvent('touchend',{bubbles:true,cancelable:true,touches:[],targetTouches:[],changedTouches:[th]}))}catch(e2){}el.dispatchEvent(new PointerEvent('pointerup',ot));el.dispatchEvent(new MouseEvent('click',o));return true}catch(e){}}
 ['pointerdown','mousedown','pointerup','mouseup','click'].forEach(function(t){el.dispatchEvent(t.indexOf('pointer')===0?new PointerEvent(t,o):new MouseEvent(t,o))});return true}
var ROOM='https://go.rippily.com/wave/ddd2feb5/9a0ebc82';
/* if the scene has not changed shortly after asking, load it directly */
function sceneCheck(sid){setTimeout(function(){if(menuImg()){try{location.href=ROOM+'?scene='+sid}catch(e){}}},1600)}
function feedShown(){var f=document.querySelector('iframe[src*="news-feed"]');if(!f)return false;var n=f;while(n&&n!==document.body){var cs=getComputedStyle(n);if(cs.display==='none'||cs.visibility==='hidden'||parseFloat(cs.opacity)<0.05)return false;n=n.parentElement}var r=f.getBoundingClientRect();return r.width>100&&r.height>100}
function feedTop(){var f=document.querySelector('iframe[src*="news-feed"]');var el=f?(f.closest('[data-element-id]')||f):null;if(!el)return;try{el.scrollIntoView({behavior:'auto',block:'start'});var sc=document.scrollingElement;if(sc&&sc.scrollTop>40)sc.scrollTop-=40}catch(e){}}
var SCR='.scroll-area,.mobile-layout,.pinch-zoom-container,.scene-clip';
function toTop(){try{var l=document.querySelectorAll(SCR);for(var i=0;i<l.length;i++){if(l[i].scrollTop>0)l[i].scrollTop=0}}catch(e){}}
function atTop(){var l=document.querySelectorAll(SCR);for(var i=0;i<l.length;i++)if(l[i].scrollTop>2)return false;return true}
function shown(id){var el=document.querySelector('[data-element-id="'+id+'"]');if(!el)return false;var cs=getComputedStyle(el);return cs.visibility!=='hidden'&&cs.display!=='none'&&el.getBoundingClientRect().width>1}
/* once the Christmas scene is showing: top of the scene, music on, cross layer visible */
function xmasStart(){var n=0;var t=setInterval(function(){n++;if(shown('image-1794317642543-49')){clearInterval(t);toTop();fire('image-1794317642543-49');setTimeout(toTop,300)}else if(n>=20)clearInterval(t)},200)}
function goXmas(){toTop();var w=0;var t0=setInterval(function(){w++;toTop();if(atTop()||w>=8){clearInterval(t0);setTimeout(function(){fire('image-1794316473945-44');xmasStart()},200)}},80)}
/* the tree at the top of the room: same music and cross layer */
document.addEventListener('click',function(e){if(e.__cbFire||!e.isTrusted)return;var ids=['image-1794316473945-44','image-1794316554413-45'];for(var i=0;i<ids.length;i++){if(!shown(ids[i]))continue;var r=document.querySelector('[data-element-id="'+ids[i]+'"]').getBoundingClientRect();if(e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom){xmasStart();return}}},true);
function topThen(id){toTop();var w=0;var t0=setInterval(function(){w++;toTop();if(atTop()||w>=8){clearInterval(t0);setTimeout(function(){fire(id);[300,800,1500,2500].forEach(function(d){setTimeout(toTop,d)})},200)}},80)}
function goDream(){toTop();var w=0;var t0=setInterval(function(){w++;toTop();if(atTop()||w>=8){clearInterval(t0);setTimeout(function(){fire('image-1794390026735-82')},250)}},80)}
var bkov=null,bkOpen=false;
function openBooks(u){u=u||'https://emb.fouita.com/widget/0x339a34/ftanosiob';
 if(!bkov){var st=document.createElement('style');st.textContent='#bk-ov{position:fixed;left:0;top:0;right:0;bottom:0;z-index:2147483000;display:none;align-items:center;justify-content:center;background:rgba(3,10,12,.78);opacity:0;transition:opacity .35s;-webkit-tap-highlight-color:transparent}#bk-ov.on{opacity:1}#bk-box{position:relative;width:min(94vw,1150px);height:min(88vh,900px);border-radius:14px;background:#487f88;box-shadow:0 30px 90px rgba(0,0,0,.7),0 0 0 2px rgba(240,208,122,.55)}#bk-fr{display:block;width:100%;height:100%;border:0;border-radius:14px;background:#487f88}.bk-x{position:absolute;right:-10px;top:-10px;width:40px;height:40px;border-radius:50%;border:0;padding:0;cursor:pointer;z-index:5;box-shadow:0 4px 12px rgba(0,0,0,.6);background:#c8211a url(__X__) center/cover;touch-action:manipulation}.bk-x:after{content:"";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}@media(max-width:600px){.bk-x{right:4px;top:4px}}';document.head.appendChild(st);
  bkov=document.createElement('div');bkov.id='bk-ov';bkov.setAttribute('role','dialog');bkov.setAttribute('aria-label','Recommended Books');
  bkov.innerHTML='<div id="bk-box"><iframe id="bk-fr" title="Recommended Books" src="https://emb.fouita.com/widget/0x339a34/ftanosiob"></iframe><button class="bk-x" type="button" aria-label="Close"></button></div>';
  document.body.appendChild(bkov);
  bkov.addEventListener('click',function(e){e.stopPropagation();if(e.target===bkov||(e.target.closest&&e.target.closest('.bk-x')))closeBooks()},true);}
 var fr=bkov.querySelector('#bk-fr');if(fr.getAttribute('src')!==u)fr.setAttribute('src',u);bkOpen=true;bkov.style.display='flex';setTimeout(function(){if(bkOpen)bkov.classList.add('on')},30)}
function closeBooks(){if(!bkov||!bkOpen)return;bkOpen=false;bkov.classList.remove('on');setTimeout(function(){if(!bkOpen)bkov.style.display='none'},380)}
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&bkOpen)closeBooks()});window.__bkOpen=openBooks;
/* lamp flame on the Journal of Dreams bar (Nebula) */
try{var jf=document.createElement('style');jf.textContent='.jf-wrap{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);aspect-ratio:1717/426;pointer-events:none;z-index:3;overflow:hidden}.jf-flame{position:absolute;left:94.23%;top:75.6%;width:1.25%;aspect-ratio:1/2.7;margin:-1.7% 0 0 -.625%;border-radius:50% 50% 46% 46%/62% 62% 38% 38%;background:radial-gradient(ellipse at 50% 62%,rgba(255,252,230,.95),rgba(255,206,100,.75) 42%,rgba(255,150,40,0) 74%);mix-blend-mode:screen;filter:blur(.5px);transform-origin:50% 92%;animation:jfFl 1.9s infinite}.jf-glow{position:absolute;left:94.23%;top:75.6%;width:26%;aspect-ratio:1;margin:-13% 0 0 -13%;background:radial-gradient(circle,rgba(255,196,96,.40),rgba(255,165,64,.15) 38%,rgba(255,150,40,0) 68%);mix-blend-mode:screen;animation:jfGl 2.7s infinite}@keyframes jfFl{0%{transform:scale(1,1) skewX(0);opacity:.85}12%{transform:scale(.92,1.12) skewX(-3deg);opacity:1}25%{transform:scale(1.05,.94) skewX(2deg);opacity:.7}38%{transform:scale(.96,1.08) skewX(-1deg);opacity:.95}52%{transform:scale(1.04,.9) skewX(3deg);opacity:.65}66%{transform:scale(.94,1.14) skewX(-2deg);opacity:1}80%{transform:scale(1.02,.97) skewX(1deg);opacity:.8}100%{transform:scale(1,1) skewX(0);opacity:.85}}@keyframes jfGl{0%,100%{opacity:.75;transform:scale(1)}18%{opacity:1;transform:scale(1.05)}33%{opacity:.6;transform:scale(.97)}51%{opacity:.95;transform:scale(1.04)}70%{opacity:.55;transform:scale(.96)}86%{opacity:.9;transform:scale(1.02)}}@media(prefers-reduced-motion:reduce){.jf-flame,.jf-glow{animation:none}}';document.head.appendChild(jf);
setInterval(function(){var el=document.querySelector('[data-element-id="image-1794389512290-74"]');if(el&&!el.querySelector('.jf-wrap')){var w=document.createElement('div');w.className='jf-wrap';w.innerHTML='<div class="jf-glow"></div><div class="jf-flame"></div>';el.appendChild(w)}},1200)}catch(e){}
/* the papyrus scrolls open big, with a cross to close */
var SCROLLS=['image-1771419771529-43','image-1794389552467-75'],lbov=null,lbOpen=false;
function openScroll(src){
 if(!lbov){var st=document.createElement('style');st.textContent='#lb-ov{position:fixed;left:0;top:0;right:0;bottom:0;z-index:2147483000;display:none;align-items:center;justify-content:center;background:rgba(3,10,12,.8);opacity:0;transition:opacity .3s;-webkit-tap-highlight-color:transparent}#lb-ov.on{opacity:1}#lb-box{position:relative;transform:scale(.9);transition:transform .45s cubic-bezier(.2,.8,.2,1)}#lb-ov.on #lb-box{transform:none}#lb-img{display:block;width:min(92vw,1300px);max-height:86vh;object-fit:contain;filter:drop-shadow(0 20px 50px rgba(0,0,0,.6))}.lb-x{position:absolute;right:6px;top:-6px;width:40px;height:40px;border-radius:50%;border:0;padding:0;cursor:pointer;z-index:5;box-shadow:0 4px 12px rgba(0,0,0,.6);background:#c8211a url(__X__) center/cover;touch-action:manipulation}.lb-x:after{content:"";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}';document.head.appendChild(st);
  lbov=document.createElement('div');lbov.id='lb-ov';lbov.setAttribute('role','dialog');
  lbov.innerHTML='<div id="lb-box"><img id="lb-img" alt=""><button class="lb-x" type="button" aria-label="Close"></button></div>';document.body.appendChild(lbov);
  lbov.addEventListener('click',function(e){e.stopPropagation();if(e.target===lbov||(e.target.closest&&e.target.closest('.lb-x')))closeScroll()},true)}
 lbov.querySelector('#lb-img').src=src;lbOpen=true;lbov.style.display='flex';setTimeout(function(){if(lbOpen)lbov.classList.add('on')},30)}
function closeScroll(){if(!lbov||!lbOpen)return;lbOpen=false;lbov.classList.remove('on');setTimeout(function(){if(!lbOpen)lbov.style.display='none'},330)}
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lbOpen)closeScroll()});
document.addEventListener('click',function(e){if(!e.isTrusted||lbOpen||isOpen||bkOpen)return;if(document.getElementById('jod-wrap'))return;var t=e.target;if(t&&t.closest&&t.closest('#mu-ov,#cb-ov,#bk-ov,#lb-ov,button,a,input'))return;for(var i=0;i<SCROLLS.length;i++){if(!shown(SCROLLS[i]))continue;var el=document.querySelector('[data-element-id="'+SCROLLS[i]+'"]'),im=el.querySelector('img');if(!im)continue;var r=im.getBoundingClientRect();if(e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom){openScroll(im.currentSrc||im.src);return}}},true);
setInterval(function(){for(var i=0;i<SCROLLS.length;i++){var el=document.querySelector('[data-element-id="'+SCROLLS[i]+'"]');if(el&&el.style.cursor!=='zoom-in')el.style.cursor='zoom-in'}},1500);
var lastAct=0,tapS=null;
/* phones: some taps never become a click, so a short tap on a tile counts too */
document.addEventListener('pointerdown',function(e){if(e.isTrusted)tapS={x:e.clientX,y:e.clientY,t:Date.now()}},true);
document.addEventListener('pointerup',function(e){if(!e.isTrusted||!tapS)return;var s=tapS;tapS=null;if(Math.abs(e.clientX-s.x)>12||Math.abs(e.clientY-s.y)>12||Date.now()-s.t>600)return;var x=e.clientX,y=e.clientY,t=e.target;if(!inTile(x,y))return;setTimeout(function(){if(Date.now()-lastAct<600)return;onClick({clientX:x,clientY:y,target:t,stopPropagation:function(){},preventDefault:function(){}})},160)},true);
try{var po=document.createElement('style');po.textContent='[data-element-id="image-il3x0xmc4gtb9nj7"],[data-element-id="image-gy1bk6vg0p6nrivg"],[data-element-id="image-0m0l7y3toudl9dx1"],[data-element-id="image-o4s97qp4hz795db4"]{pointer-events:none!important}';document.head.appendChild(po)}catch(e){}
function onClick(e){if(lbOpen||document.getElementById('jod-wrap'))return;if(ov&&ov.contains(e.target))return;if(bkov&&bkov.contains(e.target))return;if(bkOpen)return;if(mov&&mov.contains(e.target))return;if(isOpen||e.__cbFire)return;var k=inTile(e.clientX,e.clientY);if(!k)return;e.stopPropagation();e.preventDefault();if(Date.now()-lastAct<700)return;lastAct=Date.now();if(k==='art')open();else if(k==='music')openMusic();else if(k==='books'){if(TOUCH)openBooks();else{topThen('image-1771422212214-64');setTimeout(function(){if(menuImg())openBooks()},2200)}}else if(k==='pod')go('https://open.spotify.com/show/7txiovdzPARhjm18NwMUYj');else if(k==='xmas')goXmas();else if(k==='dream')goDream();else if(k==='break')go('https://mariafuentesbreakthroughcoaching.substack.com/archive');else if(k==='feed'){if(!feedShown())fire('image-1771420876007-53');[700,1500].forEach(function(d){setTimeout(feedTop,d)})}}
var lastCur=0;document.addEventListener('mousemove',function(e){if(isOpen)return;var t=Date.now();if(t-lastCur<80)return;lastCur=t;var on=!!inTile(e.clientX,e.clientY);if(on!==document.__cbCur){document.__cbCur=on;document.documentElement.style.cursor=on?'pointer':''}},true);
document.addEventListener('click',onClick,true);
var lastCur=0;document.addEventListener('mousemove',function(e){if(isOpen)return;var t=Date.now();if(t-lastCur<80)return;lastCur=t;var on=inTile(e.clientX,e.clientY);if(on!==document.__cbCur){document.__cbCur=on;document.documentElement.style.cursor=on?'pointer':''}},true);
})();

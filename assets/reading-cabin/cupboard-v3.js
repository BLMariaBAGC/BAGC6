(function(){var K='__cbCupboard3';if(window[K])return;window[K]=1;
var IMG='https://cdn.jsdelivr.net/gh/BLMariaBAGC/BAGC6@cc3d0721891e6376caaf84126ffc28ce97d91973/assets/reading-cabin/cupboard.jpg';
var U='https://www.mariafuentes.co.uk/';
// name,url, object box x0,y0,x1,y1 (px in 1199x1312 image), label centre x, label y
var ITEMS=[
['Resilience & Well-being',U+'resilience/',[375,238,485,398],430,418],
['Communication & Influence',U+'communication/',[552,208,642,402],597,418],
['Science & Neuroscience',U+'science-neuroscience/',[740,243,912,408],826,418],
['Productivity & Time',U+'productivity-time/',[362,458,452,618],407,640],
['Business & Strategy',U+'business-strategy/',[576,422,664,618],620,640],
['Performance & Mindset',U+'performance-mindset/',[795,452,912,618],853,640],
['Emotional Intelligence',U+'emotional-intelligence/',[338,690,474,842],406,862],
['Lifestyle',U+'lifestyle/',[498,650,658,846],578,862],
['Creativity',U+'creativity/',[752,682,948,838],850,862]];
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
+'#cb .cb-pic{display:block;width:100%;height:100%;border-radius:inherit;user-select:none;-webkit-user-drag:none}'
+'#cb .cb-glow{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;pointer-events:none;background:linear-gradient(105deg,transparent 35%,rgba(255,240,200,.35) 50%,transparent 65%);transform:translateX(-120%);opacity:0}'
+'#cb-ov.on .cb-glow{animation:cbsweep 1.4s .5s ease-out 1}'
+'@keyframes cbsweep{0%{transform:translateX(-120%);opacity:1}100%{transform:translateX(120%);opacity:0}}'
+'.cb-hot{position:absolute;display:block;border-radius:calc(var(--u)*18);cursor:pointer;outline:none;transition:box-shadow .25s,background .25s}'
+'.cb-hot.sel,.cb-hot:hover,.cb-hot:focus-visible{background:rgba(255,224,150,.16);box-shadow:0 0 calc(var(--u)*34) rgba(255,214,120,.8),inset 0 0 calc(var(--u)*20) rgba(255,230,170,.35)}'
+'.cb-lab{position:absolute;transform:translateX(-50%);width:calc(var(--u)*150);box-sizing:border-box;text-align:center;white-space:normal;padding:calc(var(--u)*4) calc(var(--u)*6);border-radius:calc(var(--u)*8);background:linear-gradient(#ecd496,#bd9650);color:#2b1a0c;font-weight:700;font-size:calc(var(--u)*22);line-height:1.05;box-shadow:0 calc(var(--u)*3) calc(var(--u)*7) rgba(0,0,0,.55),inset 0 0 0 1px rgba(90,58,20,.45);cursor:pointer}'
+'.cb-plaque{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(var(--u)*72);padding:calc(var(--u)*7) calc(var(--u)*42);border-radius:calc(var(--u)*10);background:linear-gradient(#f0dca0,#b78d45);color:#2b1a0c;font-weight:700;letter-spacing:.2em;text-transform:uppercase;font-size:calc(var(--u)*34);box-shadow:0 calc(var(--u)*5) calc(var(--u)*12) rgba(0,0,0,.6),inset 0 0 0 calc(var(--u)*2) rgba(90,58,20,.5);white-space:nowrap;pointer-events:none}'
+'.cb-plaque small{font-size:.6em;letter-spacing:.08em;text-transform:none;opacity:.85}'
+'.cb-x{position:absolute;right:calc(var(--u)*-12);top:calc(var(--u)*-12);width:max(34px,calc(var(--u)*64));height:max(34px,calc(var(--u)*64));border-radius:50%;border:0;padding:0;cursor:pointer;z-index:5;box-shadow:0 4px 12px rgba(0,0,0,.6);background:#c8211a url(https://cdn.jsdelivr.net/gh/BLMariaBAGC/BAGC6@85a50600d691bbdf87d466da1a03c4664d9fb6c9/assets/reading-cabin/buttons/close-x.jpg) center/cover}'
+'.cb-x:hover{transform:scale(1.1)}';
function fit(){var cb=ov.querySelector('#cb');var w=Math.min(innerWidth*.94,innerHeight*.92*IW/IH,820);var h=w*IH/IW;cb.style.width=w+'px';cb.style.height=h+'px';cb.style.setProperty('--u',(w/IW)+'px')}
function build(){
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 ov=document.createElement('div');ov.id='cb-ov';ov.setAttribute('role','dialog');ov.setAttribute('aria-label','My Articles topics');
 var h='<div id="cb"><img class="cb-pic" alt="" draggable="false" src="'+IMG+'"><div class="cb-glow"></div>';
 for(var i=0;i<ITEMS.length;i++){var it=ITEMS[i],b=it[2];
  h+='<a class="cb-hot" role="link" tabindex="0" aria-label="'+it[0].replace('&','and')+'" data-u="'+it[1]+'" data-n="'+it[0].replace('&','&amp;')+'" style="left:'+(b[0]/IW*100)+'%;top:'+(b[1]/IH*100)+'%;width:'+((b[2]-b[0])/IW*100)+'%;height:'+((b[3]-b[1])/IH*100)+'%"></a>';
  }
 h+='<div class="cb-plaque" id="cb-pl">My Articles</div><button class="cb-x" aria-label="Close" type="button"></button></div>';
 ov.innerHTML=h;document.body.appendChild(ov);
 ov.addEventListener('click',function(e){e.stopPropagation();var t=e.target;if(t===ov||(t.closest&&t.closest('.cb-x'))){close();return}var a=t.closest&&t.closest('.cb-hot');if(a){if(touch()&&sel!==a){pick(a);return}go(a.getAttribute('data-u'))}},true);
 ov.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){var a=e.target.closest&&e.target.closest('[data-u]');if(a){e.preventDefault();go(a.getAttribute('data-u'))}}});
 ov.addEventListener('mouseover',function(e){var a=e.target.closest&&e.target.closest('.cb-hot');if(a&&!touch())setPl(a.getAttribute('data-n'))});
 ov.addEventListener('mouseout',function(e){var a=e.target.closest&&e.target.closest('.cb-hot');if(a&&!touch())setPl('My Articles')});
 addEventListener('resize',function(){if(isOpen)fit()});
}
function go(u){try{window.open(u,'_blank','noopener')}catch(e){location.href=u}}
function open(){if(isOpen)return;if(!ov)build();isOpen=true;ov.style.display='flex';fit();setTimeout(function(){if(isOpen)ov.classList.add('on')},30)}
function close(){if(!ov||!isOpen)return;isOpen=false;if(sel){sel.classList.remove('sel');sel=null}setPl('My Articles');ov.classList.remove('on');setTimeout(function(){if(!isOpen)ov.style.display='none'},450)}
window.__cbOpen=open;window.__cbClose=close;
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&isOpen)close()});
function menuImg(){
 var list=document.querySelectorAll('img'),best=null;
 for(var i=0;i<list.length;i++){var im=list[i],p=im.closest&&im.closest('[data-element-id]');
  if(/explore-menu/.test(im.src||'')||(p&&p.getAttribute('data-element-id')==='image-1794427654677-84')||(im.naturalWidth===2398&&im.naturalHeight===1750)){
   var r=im.getBoundingClientRect();if(r.width>50&&r.height>50&&getComputedStyle(im).visibility!=='hidden'){best=im;break}}}
 return best}
function inTile(x,y){var im=menuImg();if(!im)return false;var r=im.getBoundingClientRect(),fx=(x-r.left)/r.width,fy=(y-r.top)/r.height;return fx>=.048&&fx<=.344&&fy>=.278&&fy<=.491}
function onClick(e){if(ov&&ov.contains(e.target))return;if(isOpen)return;if(inTile(e.clientX,e.clientY)){e.stopPropagation();e.preventDefault();open()}}
document.addEventListener('click',onClick,true);
var lastCur=0;document.addEventListener('mousemove',function(e){if(isOpen)return;var t=Date.now();if(t-lastCur<80)return;lastCur=t;var on=inTile(e.clientX,e.clientY);if(on!==document.__cbCur){document.__cbCur=on;document.documentElement.style.cursor=on?'pointer':''}},true);
})();

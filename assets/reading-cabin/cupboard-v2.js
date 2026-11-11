(function(){var K='__cbCupboard1';if(window[K])return;window[K]=1;
var B='https://cdn.jsdelivr.net/gh/BLMariaBAGC/BAGC6@74057438d476695afe2b67b164424614fe9b288c/assets/reading-cabin/cupboard/';
var G='https://beyondlimitsnew.s3.eu-west-1.amazonaws.com/1.+RIPPILY/READING+CABIN/Globe.png';
var U='https://www.mariafuentes.co.uk/';
var ITEMS=[
['mic.webp','Communication & Influence',U+'communication/'],
['brain.webp','Science & Neuroscience',U+'science-neuroscience/'],
['candle.webp','Resilience & Well-being',U+'resilience/'],
['chess.webp','Business & Strategy',U+'business-strategy/'],
['comp.webp','Performance & Mindset',U+'performance-mindset/'],
['hour.webp','Productivity & Time',U+'productivity-time/'],
['stones.webp','Emotional Intelligence',U+'emotional-intelligence/'],
[G,'Lifestyle',U+'lifestyle/'],
['crane.webp','Creativity',U+'creativity/']];
var ov=null,isOpen=false;
try{var f=document.createElement('link');f.rel='stylesheet';f.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&display=swap';document.head.appendChild(f)}catch(e){}
var css='#cb-ov{position:fixed;left:0;top:0;right:0;bottom:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;background:rgba(4,12,14,.74);opacity:0;transition:opacity .35s;perspective:1800px;font-family:"Cormorant Garamond",Georgia,serif;-webkit-tap-highlight-color:transparent}'
+'#cb-ov.on{opacity:1}'
+'#cb{position:relative;width:min(94vw,700px);max-height:94vh;transform:scale(.86) translateY(30px);opacity:0;transition:transform .6s cubic-bezier(.2,.8,.2,1),opacity .4s;transform-style:preserve-3d}'
+'#cb-ov.on #cb{transform:none;opacity:1}'
+'.cb-frame{position:relative;border-radius:16px;padding:clamp(12px,3vw,22px);background:linear-gradient(135deg,#6b4527 0%,#3f2814 55%,#5a3a20 100%);box-shadow:0 30px 80px rgba(0,0,0,.65),inset 0 0 0 2px #a67c4a,inset 0 0 0 5px #3a2312,inset 0 2px 8px rgba(255,220,160,.25)}'
+'.cb-title{text-align:center;color:#f1dfb0;font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-size:clamp(12px,2.8vw,17px);padding:0 0 clamp(8px,2vw,14px);text-shadow:0 2px 3px rgba(0,0,0,.6)}'
+'.cb-in{border-radius:8px;overflow:hidden;background:radial-gradient(ellipse at 50% 20%,#17454a 0%,#0b2a2d 60%,#061a1c 100%);box-shadow:inset 0 0 40px rgba(0,0,0,.75),inset 0 0 0 2px #2a1a0d}'
+'.cb-row{position:relative;display:grid;grid-template-columns:repeat(3,1fr);padding:clamp(6px,1.6vw,12px) clamp(4px,1.2vw,10px) 0}'
+'.cb-row:after{content:"";position:absolute;left:0;right:0;bottom:0;height:clamp(8px,1.8vw,13px);background:linear-gradient(#a9794a,#6a4528 55%,#3f2814);box-shadow:0 -3px 8px rgba(0,0,0,.5)}'
+'.cb-cell{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;cursor:pointer;padding:0 2px clamp(10px,2.2vw,16px);text-decoration:none;color:inherit;outline:none;border:0;background:none;font:inherit;transition:transform .25s}'
+'.cb-cell:hover,.cb-cell:focus-visible{transform:translateY(-4px)}'
+'.cb-cell:hover .cb-obj,.cb-cell:focus-visible .cb-obj{filter:drop-shadow(0 0 14px rgba(255,214,130,.85))}'
+'.cb-obj{height:clamp(62px,min(16vh,19vw),118px);width:auto;max-width:88%;object-fit:contain;filter:drop-shadow(0 8px 6px rgba(0,0,0,.55));transition:filter .25s;pointer-events:none}'
+'.cb-lab{margin-top:clamp(5px,1.2vw,9px);padding:clamp(2px,.6vw,4px) clamp(5px,1.4vw,10px);border-radius:5px;background:linear-gradient(#e9cf8f,#bf9a55);color:#2b1a0c;font-weight:700;font-size:clamp(10px,2.5vw,15px);line-height:1.1;text-align:center;box-shadow:0 2px 4px rgba(0,0,0,.5),inset 0 0 0 1px rgba(90,58,20,.5)}'
+'.cb-x{position:absolute;right:-10px;top:-10px;width:clamp(34px,8vw,44px);height:clamp(34px,8vw,44px);border-radius:50%;border:2px solid #fff;background:radial-gradient(circle at 35% 30%,#ff6b60,#c3170d 70%);color:#fff;font:700 clamp(20px,5vw,26px)/1 Arial,sans-serif;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.6);z-index:5;display:flex;align-items:center;justify-content:center;padding:0}'
+'.cb-x:hover{transform:scale(1.1)}'
+'.cb-door{position:absolute;top:0;bottom:0;width:50.2%;z-index:4;background:linear-gradient(135deg,#6f4a2a,#412913 60%,#5a3a20);box-shadow:inset 0 0 0 2px #a67c4a,inset 0 0 0 5px #3a2312,inset 0 0 40px rgba(0,0,0,.4);transition:transform 1s cubic-bezier(.6,0,.25,1);backface-visibility:visible;border-radius:16px}'
+'.cb-door:after{content:"";position:absolute;left:12%;right:12%;top:8%;bottom:8%;border-radius:8px;box-shadow:inset 0 0 0 2px rgba(166,124,74,.7),inset 0 0 18px rgba(0,0,0,.45)}'
+'.cb-door:before{content:"";position:absolute;top:50%;width:14px;height:14px;margin-top:-7px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fbe7a8,#a67c2a);box-shadow:0 2px 4px rgba(0,0,0,.6);z-index:2}'
+'.cb-dl{left:0;transform-origin:0 50%;border-top-right-radius:0;border-bottom-right-radius:0}.cb-dl:before{right:12px}'
+'.cb-dr{right:0;transform-origin:100% 50%;border-top-left-radius:0;border-bottom-left-radius:0}.cb-dr:before{left:12px}'
+'#cb.open .cb-dl{transform:rotateY(-112deg)}#cb.open .cb-dr{transform:rotateY(112deg)}'
+'@media(max-width:520px){.cb-lab{min-height:2.5em;display:flex;align-items:center;justify-content:center;width:96%;box-sizing:border-box}}';
function build(){
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 ov=document.createElement('div');ov.id='cb-ov';ov.setAttribute('role','dialog');ov.setAttribute('aria-label','My Articles topics');
 var h='<div id="cb"><div class="cb-frame"><button class="cb-x" aria-label="Close" type="button">&times;</button><div class="cb-title">My Articles</div><div class="cb-in">';
 for(var r=0;r<3;r++){h+='<div class="cb-row">';for(var c=0;c<3;c++){var it=ITEMS[r*3+c];var src=/^https?:/.test(it[0])?it[0]:B+it[0];h+='<a class="cb-cell" role="link" tabindex="0" data-u="'+it[2]+'" aria-label="'+it[1]+'"><img class="cb-obj" alt="" src="'+src+'" draggable="false"><span class="cb-lab">'+it[1].replace('&','&amp;')+'</span></a>'}h+='</div>'}
 h+='</div><div class="cb-door cb-dl"></div><div class="cb-door cb-dr"></div></div></div>';
 ov.innerHTML=h;document.body.appendChild(ov);
 ov.addEventListener('click',function(e){e.stopPropagation();if(e.target===ov||(e.target.closest&&e.target.closest('.cb-x'))){close();return}var a=e.target.closest&&e.target.closest('.cb-cell');if(a){go(a.getAttribute('data-u'))}},true);
 ov.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){var a=e.target.closest&&e.target.closest('.cb-cell');if(a){e.preventDefault();go(a.getAttribute('data-u'))}}});
}
function go(u){try{window.open(u,'_blank','noopener')}catch(e){location.href=u}}
function open(){if(isOpen)return;if(!ov)build();isOpen=true;ov.style.display='flex';var cb=ov.querySelector('#cb');cb.classList.remove('open');setTimeout(function(){if(isOpen)ov.classList.add('on')},30);setTimeout(function(){if(isOpen)cb.classList.add('open')},550)}
function close(){if(!ov||!isOpen)return;var cb=ov.querySelector('#cb');cb.classList.remove('open');isOpen=false;setTimeout(function(){ov.classList.remove('on');setTimeout(function(){if(!isOpen)ov.style.display='none'},400)},500)}
window.__cbOpen=open;window.__cbClose=close;
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&isOpen)close()});
function menuImg(){
 var list=document.querySelectorAll('img'),best=null;
 for(var i=0;i<list.length;i++){var im=list[i],p=im.closest&&im.closest('[data-element-id]');
  if(/explore-menu/.test(im.src||'')||(p&&p.getAttribute('data-element-id')==='image-1794427654677-84')||(im.naturalWidth===2398&&im.naturalHeight===1750)){
   var r=im.getBoundingClientRect();if(r.width>50&&r.height>50&&getComputedStyle(im).visibility!=='hidden'){best=im;break}}}
 return best}
function inTile(x,y){var im=menuImg();if(!im)return false;var r=im.getBoundingClientRect(),fx=(x-r.left)/r.width,fy=(y-r.top)/r.height;return fx>=.048&&fx<=.344&&fy>=.278&&fy<=.491}
function onClick(e){
 if(ov&&ov.contains(e.target))return;
 if(isOpen)return;
 if(inTile(e.clientX,e.clientY)){e.stopPropagation();e.preventDefault();open()}
}
var lastCur=0;document.addEventListener('mousemove',function(e){if(isOpen)return;var t=Date.now();if(t-lastCur<80)return;lastCur=t;var on=inTile(e.clientX,e.clientY);if(on!==document.__cbCur){document.__cbCur=on;document.documentElement.style.cursor=on?'pointer':''}},true);
document.addEventListener('click',onClick,true);
})();

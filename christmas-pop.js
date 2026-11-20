/* Full-screen opener for the Christmas tiles (Advent calendar and Father Christmas gift).
   Based on pop-exercise.js. Set window.__xmasPop = [{alt:'<image name>', src:'<page url>', title:'...'}, ...]
   before loading. A tile matches by its image alt text, or by data-element-id if "btn" is given. */
(function(){
  var L=window.__xmasPop;if(!L||!L.length||window.__xmasLoop)return;window.__xmasLoop=1;
  var vv=window.visualViewport,cur=null;
  function fit(){
    if(!cur)return;
    var w=cur.w.style;
    w.top=(vv?vv.offsetTop:0)+'px';w.left=(vv?vv.offsetLeft:0)+'px';
    w.width=(vv?vv.width:window.innerWidth)+'px';w.height=(vv?vv.height:window.innerHeight)+'px';
  }
  if(vv){vv.addEventListener('resize',fit);vv.addEventListener('scroll',fit)}
  function close(){if(cur){cur.w.remove();cur=null}document.removeEventListener('keydown',key,true)}
  function key(e){if(e.key==='Escape')close()}
  function open(C){
    if(cur)return;
    var w=document.createElement('div');
    w.style.cssText='position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:2147483000;background:radial-gradient(ellipse at 50% 30%,#24485c 0%,#102532 55%,#0a1620 100%);display:flex;flex-direction:column';
    var b=document.createElement('button');
    b.type='button';b.title='Close';b.setAttribute('aria-label','Close '+(C.title||'page'));b.innerHTML='&times;';
    b.style.cssText='position:absolute;top:14px;right:14px;z-index:2;width:38px;height:38px;padding:0;border-radius:50%;border:2px solid #f6d98a;background:rgba(20,50,35,.92);color:#f6d98a;font:400 26px/34px Georgia,serif;text-align:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.4)';
    b.addEventListener('click',close);
    var f=document.createElement('iframe');
    f.title=C.title||'Christmas';f.src=C.src+(C.src.indexOf('?')<0?'?':'&')+'t='+Math.floor(Date.now()/300000);f.setAttribute('allow','autoplay; clipboard-write; fullscreen');
    f.style.cssText='flex:1;width:100%;height:100%;border:0;display:block';
    w.appendChild(b);w.appendChild(f);document.body.appendChild(w);
    cur={w:w};fit();document.addEventListener('keydown',key,true);
  }
  function hit(C,x,y,t){
    var ids=C.btn?String(C.btn).split(','):[],els=[],i,j;
    try{els=document.elementsFromPoint(x,y)}catch(e){}
    if(t)els.unshift(t);
    for(j=0;j<els.length;j++){
      var el=els[j];if(!el||!el.closest)continue;
      for(i=0;i<ids.length;i++)if(el.closest('[data-element-id="'+ids[i].trim()+'"]'))return true;
    }
    return false;
  }
  var last=0,sx=0,sy=0;
  function tryOpen(e,x,y){
    if(cur||Date.now()-last<600)return;
    for(var i=0;i<L.length;i++)if(hit(L[i],x,y,e.target)){last=Date.now();open(L[i]);return}
  }
  document.addEventListener('pointerdown',function(e){sx=e.clientX;sy=e.clientY},true);
  document.addEventListener('pointerup',function(e){
    if(Math.abs(e.clientX-sx)>12||Math.abs(e.clientY-sy)>12)return;
    tryOpen(e,e.clientX,e.clientY);
  },true);
  document.addEventListener('click',function(e){tryOpen(e,e.clientX,e.clientY)},true);
})();

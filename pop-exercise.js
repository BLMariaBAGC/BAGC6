/* Full-screen exercise opener for a tile that has no Rippily layer.
   Set window.__popCfg = {btn:'<tile element id>', src:'<exercise url>', title:'...'} before loading. */
(function(){
  var C=window.__popCfg;if(!C||window.__popLoop)return;window.__popLoop=1;
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
  function open(){
    if(cur)return;
    var w=document.createElement('div');
    w.style.cssText='position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:2147483000;background:#0e2a2a;display:flex;flex-direction:column';
    var b=document.createElement('button');
    b.type='button';b.title='Close';b.setAttribute('aria-label','Close '+(C.title||'exercise'));b.innerHTML='&times;';
    b.style.cssText='position:absolute;top:18px;right:max(12px,calc(50% - 560px));z-index:2;width:36px;height:36px;padding:0;border-radius:50%;border:2px solid #f5ecd7;background:rgba(31,95,95,.92);color:#f5ecd7;font:400 24px/32px Georgia,serif;text-align:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.35)';
    b.addEventListener('click',close);
    var f=document.createElement('iframe');
    f.title=C.title||'Exercise';f.src=C.src;f.setAttribute('allow','autoplay; microphone; clipboard-write; fullscreen');
    f.style.cssText='flex:1;width:100%;height:100%;border:0;display:block';
    w.appendChild(b);w.appendChild(f);document.body.appendChild(w);
    cur={w:w};fit();document.addEventListener('keydown',key,true);
  }
  document.addEventListener('click',function(e){
    var t=e.target&&e.target.closest&&e.target.closest('[data-element-id="'+C.btn+'"]');
    if(t)open();
  },true);
})();

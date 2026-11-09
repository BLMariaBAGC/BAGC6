/* Soundscape host helper: lets the player fold to one line and open bigger.
   Loaded by the Soundscape embed in each Rippily room. Edit here, not in the rooms. */
(function(){
  if(window.__ssLoop)return;window.__ssLoop=1;
  var base=null,st=false,W=34,fr=null,got=0;
  function ok(){return window.innerWidth>=600}
  function host(){return fr?fr.closest('[data-element-id]'):null}
  function put(){
    var h=host();if(!h)return;
    if(!base){
      var w=parseFloat(h.style.width);
      if(!(w>0))return;
      base={left:parseFloat(h.style.left),width:w,ar:h.style.aspectRatio};
    }
    var l,w2,ar;
    if(st){l=base.left;w2=base.width;ar='514 / 58'}
    else{l=Math.max(0,base.left+base.width-W);w2=W;ar=base.ar}
    if(parseFloat(h.style.left)!==l||parseFloat(h.style.width)!==w2||h.style.aspectRatio!==ar){
      h.style.transition='left .35s ease,width .35s ease,aspect-ratio .35s ease';
      h.style.left=l+'%';h.style.width=w2+'%';h.style.aspectRatio=ar;
    }
  }
  function back(){
    var h=host();
    if(h&&base){h.style.left=base.left+'%';h.style.width=base.width+'%';h.style.aspectRatio=base.ar}
  }
  window.addEventListener('message',function(e){
    if(!fr||e.source!==fr.contentWindow||!e.data)return;
    if(e.data.ss==='hello'){got=0}
    if(e.data.ss==='state'&&ok()){got=1;st=!!e.data.mini;put()}
  });
  window.addEventListener('resize',function(){if(!ok())back()});
  setInterval(function(){
    var f=document.getElementById('ss-frame');
    if(f!==fr){fr=f;base=null;got=0}
    if(!fr||!ok())return;
    if(!got&&fr.contentWindow){fr.contentWindow.postMessage({ss:'allow'},'*')}
    if(got)put(); /* re-apply if the room reset the size, e.g. after the red cross and trumpet */
  },700);
})();

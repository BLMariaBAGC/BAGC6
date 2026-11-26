/* Reading Cabin: one gentle sparkle on each library object, plus a short pulse on the
   "scroll down" arrow so visitors know there is more below.
   Sparkles ignore clicks (pointer-events:none), so the objects still work as before. */
(function(){
  if(window.__rcSparkles)return;window.__rcSparkles=1;
  var IDS=(window.__rcSparkleIds||[]);
  var ARROW=window.__rcArrowId||'';
  var css=document.createElement('style');
  css.textContent=
    '@keyframes rcTwinkle{0%,100%{opacity:.15;transform:scale(.55) rotate(0deg)}45%{opacity:1;transform:scale(1) rotate(20deg)}60%{opacity:.9;transform:scale(.9) rotate(25deg)}}'+
    '.rc-spark{position:absolute;top:-6%;right:-6%;width:max(9px,calc(36px * var(--rck,.7)));height:max(9px,calc(36px * var(--rck,.7)));pointer-events:none;z-index:50;animation:rcTwinkle 2.8s ease-in-out infinite;filter:drop-shadow(0 0 4px rgba(255,236,170,.95))}'+
    '@keyframes rcPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.22)}}'+
    '.rc-pulse{animation:rcPulse 1.1s ease-in-out 6}';
  document.head.appendChild(css);
  var SVG='<svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" fill="#fff6d0"/><circle cx="12" cy="12" r="2.4" fill="#ffffff"/></svg>';
  function apply(){
    IDS.forEach(function(id,i){
      var el=document.querySelector('[data-element-id="'+id+'"]');
      if(!el||el.querySelector(':scope > .rc-spark'))return;
      var s=document.createElement('span');s.className='rc-spark';s.innerHTML=SVG;
      s.style.animationDelay=(i*0.37%2.8).toFixed(2)+'s';
      el.appendChild(s);
    });
  }
  var pulsed=false;
  function pulse(){
    if(pulsed||!ARROW)return;
    var a=document.querySelector('[data-element-id="'+ARROW+'"]');
    if(!a)return;pulsed=true;
    var t=a.firstElementChild||a;t.classList.add('rc-pulse');
    setTimeout(function(){t.classList.remove('rc-pulse')},7000);
  }
  /* Welcome pop-up: shows once per visit in the middle of the screen, wherever Rippily has
     scrolled the visitor to. Two buttons: go to the top of the library, or go to the green
     "Explore the Reading Cabin" board. The X does the same as "Explore the cabin". */
  var W=window.__rcWelcome||{};
  var hideOld=W.hide||[];
  if(hideOld.length){var h=document.createElement('style');h.textContent=hideOld.map(function(id){return '[data-element-id="'+id+'"]'}).join(',')+'{display:none!important}';document.head.appendChild(h)}
  /* "fade" = make invisible but keep clickable (for star overlays that also carry an action). */
  var fadeIds=W.fade||[];
  if(fadeIds.length){var f=document.createElement('style');f.textContent=fadeIds.map(function(id){return '[data-element-id="'+id+'"] img'}).join(',')+'{opacity:0!important}';document.head.appendChild(f)}
  var wcss=document.createElement('style');
  wcss.textContent=
    '.rc-wel{position:fixed;inset:0;z-index:2147482000;display:flex;align-items:center;justify-content:center;background:rgba(6,20,26,.55);opacity:0;transition:opacity .5s ease;padding:16px;box-sizing:border-box}'+
    '.rc-wel.on{opacity:1}'+
    '.rc-wel-box{position:relative;width:min(92vw,760px);text-align:center}'+
    '.rc-wel-box img.rc-parch{width:100%;height:auto;display:block;filter:drop-shadow(0 10px 28px rgba(0,0,0,.45))}'+
    '.rc-wel-x{position:absolute;top:4%;right:3%;width:clamp(34px,5vw,48px);height:clamp(34px,5vw,48px);border:0;padding:0;background:none;cursor:pointer}'+
    '.rc-wel-x img{width:100%;height:100%;border-radius:50%;display:block}'+
    '.rc-wel-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:clamp(8px,2vw,18px)}'+
    '.rc-wel-btns button{font:600 clamp(14px,1.6vw,18px)/1.2 Georgia,serif;letter-spacing:.04em;padding:12px 22px;border-radius:999px;cursor:pointer;border:2px solid #d9b45a;box-shadow:0 4px 14px rgba(0,0,0,.35)}'+
    '.rc-b1{background:#f6e7c4;color:#1f4a3f}'+
    '.rc-b2{background:#1f4a3f;color:#f6e7c4}';
  document.head.appendChild(wcss);
  var shown=false;
  function sa(){return document.querySelector('.scroll-area')}
  function scroller(){var x=sa();if(x&&x.scrollHeight>x.clientHeight+5)return x;return null}
  function glideTo(y){var s=scroller();if(s){try{s.scrollTo({top:y,behavior:'smooth'})}catch(e){s.scrollTop=y}return}
    var c=W.board&&document.querySelector('[data-element-id="'+W.board+'"]');c=c&&c.offsetParent;if(c)try{c.scrollIntoView({behavior:'smooth',block:'start'})}catch(e){}}
  function toBoard(){
    var s=scroller(),b=W.board&&document.querySelector('[data-element-id="'+W.board+'"]');
    if(!b){glideTo(0);return}
    if(s){var y=b.getBoundingClientRect().top-s.getBoundingClientRect().top+s.scrollTop-20;try{s.scrollTo({top:Math.max(0,y),behavior:'smooth'})}catch(e){s.scrollTop=y}return}
    try{b.scrollIntoView({behavior:'smooth',block:'start'})}catch(e){b.scrollIntoView()}
  }
  /* Small "Map of the cabin" thumbnail beside the top parchment. Click = glide to the green board. */
  var tcss=document.createElement('style');
  tcss.textContent=
    '.rc-map{position:absolute;z-index:60;cursor:pointer;border:0;padding:0;background:none;text-align:center;transition:transform .25s ease}'+
    '.rc-map:hover{transform:translateY(-3px) scale(1.04)}'+
    '.rc-map img{display:block;width:100%;height:auto;border-radius:calc(10px * var(--rck,.7));border:max(1px,calc(4px * var(--rck,.7))) solid #d9b45a;box-shadow:0 6px 18px rgba(0,0,0,.45)}'+
    '.rc-map span{display:inline-block;margin-top:calc(8px * var(--rck,.7));padding:calc(5px * var(--rck,.7)) calc(16px * var(--rck,.7));border-radius:999px;background:#1f4a3f;color:#f6e7c4;border:max(1px,calc(3px * var(--rck,.7))) solid #d9b45a;font:600 max(7px,calc(21px * var(--rck,.7)))/1.2 Georgia,serif;letter-spacing:.03em;white-space:nowrap}';
  document.head.appendChild(tcss);
  function placeMap(){
    if(!W.board)return;
    var b=document.querySelector('[data-element-id="'+W.board+'"]');
    if(!b||!b.offsetParent)return;
    var P=b.offsetParent,m=P.querySelector(':scope > .rc-map');
    if(!m){
      var src=(b.querySelector('img')||{}).src;if(!src)return;
      m=document.createElement('button');m.type='button';m.className='rc-map';m.setAttribute('aria-label','Map of the cabin: go to the Explore the Reading Cabin board');
      m.innerHTML='<img alt="" src="'+src+'"><span>Map of the cabin</span>';
      var mx=0,my=0,mt=0,fired=0;
      function go(e){if(Date.now()-fired<700)return;fired=Date.now();if(e){e.stopPropagation();if(e.cancelable)e.preventDefault()}toBoard()}
      m.addEventListener('pointerdown',function(e){mx=e.clientX;my=e.clientY;mt=Date.now();e.stopPropagation()},true);
      m.addEventListener('pointerup',function(e){if(Math.abs(e.clientX-mx)<14&&Math.abs(e.clientY-my)<14&&Date.now()-mt<900)go(e)},true);
      m.addEventListener('touchend',function(e){go(e)},{passive:false});
      m.addEventListener('click',go);
      P.appendChild(m);
    }
    /* Only in the Reading Cabin: hide when the board belongs to a scene that is not showing. */
    m.style.display=getComputedStyle(b).visibility==='hidden'?'none':'';
    /* Centred at the top of the room (canvas is 1920 wide). */
    var k=P.offsetWidth/1920,w=(W.mapW||240)*k;document.documentElement.style.setProperty('--rck',k.toFixed(3));
    m.style.width=w+'px';
    m.style.left=((P.offsetWidth-w)/2)+'px';
    m.style.top=((W.mapTop||105)*k)+'px';
  }
  setInterval(placeMap,400);
  function showWelcome(){
    if(shown)return;shown=true;
    var o=document.createElement('div');o.className='rc-wel';o.setAttribute('role','dialog');o.setAttribute('aria-label','Welcome to the Reading Cabin');
    o.innerHTML='<div class="rc-wel-box"><img class="rc-parch" alt="Every object holds a story. Hover or click to discover what it reveals." src="'+W.img+'">'+
      '<button class="rc-wel-x" type="button" aria-label="Close"><img alt="" src="'+W.x+'"></button>'+
      '<div class="rc-wel-btns"><button type="button" class="rc-b1">Explore the cabin</button><button type="button" class="rc-b2">See everything in one place</button></div></div>';
    function close(then){o.classList.remove('on');setTimeout(function(){o.remove()},450);then()}
    o.querySelector('.rc-wel-x').onclick=function(){close(toBoard)};
    o.querySelector('.rc-b1').onclick=function(){close(function(){glideTo(0)})};
    o.querySelector('.rc-b2').onclick=function(){close(toBoard)};
    document.body.appendChild(o);requestAnimationFrame(function(){o.classList.add('on')});
  }
  /* Show as soon as the visitor is inside the Reading Cabin (no waiting for Rippily's scroll:
     the pop-up is fixed to the screen, so it does not matter where the room scrolls to). */
  var t0=Date.now();
  var wTimer=setInterval(function(){
    if(shown||Date.now()-t0>120000){clearInterval(wTimer);return}
    var mark=W.board&&document.querySelector('[data-element-id="'+W.board+'"]');
    if(!mark||!mark.getBoundingClientRect().width||getComputedStyle(mark).visibility==='hidden')return;
    if(/Join the Ripple/.test(document.body.innerText.slice(0,4000)))return;
    showWelcome();
  },120);
  apply();pulse();setInterval(function(){apply();pulse()},1000);
})();

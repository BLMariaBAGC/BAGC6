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
    '.rc-spark{position:absolute;top:-6%;right:-6%;width:26px;height:26px;pointer-events:none;z-index:50;animation:rcTwinkle 2.8s ease-in-out infinite;filter:drop-shadow(0 0 4px rgba(255,236,170,.95))}'+
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
  apply();pulse();setInterval(function(){apply();pulse()},1000);
})();

(function(){
  var figs=[],idx=0;
  var lb=document.getElementById('lb'),im=document.getElementById('lb-img'),
      cap=document.getElementById('lb-cap');
  function show(i){
    if(!figs.length)return;
    idx=(i+figs.length)%figs.length;
    var f=figs[idx];
    im.src=f.querySelector('img').src;
    var c=f.querySelector('figcaption');
    cap.textContent=(c?c.textContent:'')+'  ('+(idx+1)+'/'+figs.length+')';
    lb.classList.add('on');
  }
  document.addEventListener('click',function(e){
    var f=e.target.closest('figure');
    if(f&&f.querySelector('img')){
      figs=Array.prototype.slice.call(document.querySelectorAll('figure'));
      show(figs.indexOf(f));return;
    }
    if(e.target.id==='lb-x'||e.target.id==='lb'){lb.classList.remove('on');}
    if(e.target.id==='lb-prev'){show(idx-1);}
    if(e.target.id==='lb-next'){show(idx+1);}
  });
  document.addEventListener('keydown',function(e){
    if(!lb.classList.contains('on'))return;
    if(e.key==='Escape')lb.classList.remove('on');
    if(e.key==='ArrowLeft')show(idx-1);
    if(e.key==='ArrowRight')show(idx+1);
  });
  // click-to-load YouTube
  document.addEventListener('click',function(e){
    var v=e.target.closest('.vid');
    if(!v||v.dataset.on)return;
    v.dataset.on='1';
    v.innerHTML='<iframe src="https://www.youtube.com/embed/'+v.dataset.yt+
      '?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" '+
      'allowfullscreen title="專案影片"></iframe>';
  });
})();


  function startAnim(animSection, animType, animContainer){
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const introanim = entry.target.querySelector(`.${animSection}`);
    
        if (entry.isIntersecting) {
         introanim.classList.add(`${animType}`);
          return;
        }
  
        introanim.classList.remove(`${animType}`);
      });
    });
  
    observer.observe(document.querySelector(`.${animContainer}`));
    }

  startAnim('introanim', 'anim1', 'introanimcont');
  startAnim('teamanim', 'anim1', 'teamanimcont');

  startAnim('spcltnganim', 'anim2', 'spcltnganimcont');
  
  startAnim('commitanim', 'anim1', 'commitanimcont');
  startAnim('introanim', 'anim1', 'introanimcont');
  startAnim('introanim', 'anim1', 'introanimcont');
  startAnim('introanim', 'anim1', 'introanimcont');


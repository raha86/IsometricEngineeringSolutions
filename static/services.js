
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

startAnim('civildomainanim', 'anim1', 'civildomainanimcont');

startAnim('civillist1', 'anim3', 'civillistcont1');
startAnim('civillist2', 'anim3', 'civillistcont2');
startAnim('civillist3', 'anim3', 'civillistcont3');
startAnim('civillist4', 'anim3', 'civillistcont4');
startAnim('civillist5', 'anim3', 'civillistcont5');

startAnim('arcdomainanim', 'anim1', 'arcdomainanimcont');

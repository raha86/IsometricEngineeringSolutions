// to show and hide the project list
function tblVisibility(){

    let tblbtntxt = document.querySelector('.tblbtntxt')
    let sectable = document.querySelector('.sectable');
    
    if(sectable.style.display === 'block'){
        sectable.style.display = 'none';
        tblbtntxt.innerHTML = 'Click to view our project list';   
    }else{
        sectable.style.display = 'block';
        tblbtntxt.innerHTML = 'Click to hide';
    }
}
const tblbtn = document.querySelector('.tblbtn');
tblbtn.addEventListener('click', tblVisibility);

// to show and hide the images 
function imgVisibility(){
    console.log("clicked");
    let imgbtntxt = document.querySelector('.imgbtntxt');
    let eximg = document.querySelector('.eximg');
    
    if(eximg.style.display === 'block'){
        eximg.style.display = 'none';
        imgbtntxt.innerHTML = 'Click to view images';
    }else{
        eximg.style.display = 'block';
        imgbtntxt.innerHTML = 'Click to hide';
    }
}
const imgbtn = document.querySelector('.imgbtn');
imgbtn.addEventListener('click', imgVisibility);


 // scrollToTopBtn visibility
 window.addEventListener('scroll', ()=>{
  console.log("scroll");
  let y = window.scrollY;
  let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
  if(y > innerHeight){
    // scrollToTopBtn.style.display = 'block';
    scrollToTopBtn.style.right = '15px';
  }else{
    scrollToTopBtn.style.right = '-40px';
  }
})

let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
let rootElement = document.documentElement;
scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
  console.log("top");
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

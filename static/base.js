// to show and hide the hamburger menu for clicking the hamburger icon 
function myFunction() {
    var displayMenu = document.getElementById("navmenu");
    if (displayMenu.style.height === "200px") {
      displayMenu.style.height = "0";
    } else {
      displayMenu.style.height = "200px";
    }
  }



// to hide the hamburger menu for clicking outside and reset the display property over changing window width
  let windowWidth = matchMedia("(max-width : 1000px)");
  windowWidth.addEventListener('change', handleDeviceChange);
  console.log("change");
  function handleDeviceChange(e){
    if(e.matches){
      let navmenu = document.getElementById('navmenu');
      let hamburger = document.getElementById("hamburger");
      navmenu.style.height = '0px';
      document.addEventListener('mouseup', function(event) {
        if(e.matches){
          // this if statement is to avoid conflict between (hiding navmenu in small window) and (event listener of outside click in large window)
          if (!navmenu.contains(event.target) && !hamburger.contains(event.target) && navmenu.style.height === '200px') {
              navmenu.style.height = '0';
          }
        }
      });
    }
    else{
      if(!e.matches){
        //this if statement is avoid conflict between (from large window) and (to small window) which was creating navmenu visible before clicking button 
        navmenu.style.height = '0px';
      }
    }
  }
  handleDeviceChange(windowWidth);



  // scrollToTopBtn visibility
  window.addEventListener('scroll', ()=>{
    console.log("scroll");
    let y = window.scrollY;
    let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
    if(y > innerHeight){
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


//to show and hide contacthead on scroll
var prevScrollpos = window.pageYOffset;
var currentScrollPos = window.pageYOffset - 1;

window.addEventListener('scroll', ()=>{
  var currentScrollPos = window.pageYOffset;
  let contacthead = document.getElementById('contacthead');
  let navbar = document.getElementById('navbar');
  let contactheadWidth = matchMedia("(max-width : 800px)");
  if(contactheadWidth.matches){
      if(prevScrollpos > currentScrollPos){
        contacthead.style.top = '0px';
        navbar.style.top = '40px';
      }else{
        contacthead.style.top = '-40px';
        navbar.style.top = '0px';
      }
      prevScrollpos = currentScrollPos;
  }else{
    contacthead.style.top = '0px';
    navbar.style.top = '40px';
  }

  })
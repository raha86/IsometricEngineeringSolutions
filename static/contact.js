// to start animation when content is visible 
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

  startAnim('contactimganim', 'anim1', 'contactimganimcont');


  const btnemail = document.getElementById('btnemail');
    btnemail.addEventListener('click', function(e){
    e.preventDefault();

    const query = document.querySelector('.myform');
    const name = query.name.value; 
    const phone = query.phone.value;
    const email = query.email.value;
    const subjectEmail = query.subject.value;
    const message = query.message.value;

    const formValidity = formValidation(name, phone, email, subjectEmail, message);

    if(formValidity){

      let bodyEmail = formatDoc(name, phone, email, message);
      postEmail(subjectEmail, bodyEmail);

    }
    else{
      let alertBox = document.querySelector('.alertBox');
      alertBox.style.display = 'block';
      
      return false;
    }

  });

  function formValidation(name, phone, email, subjectEmail, message){

    let validName, validPhone, validEmail, validSubject, validMessage;
    let elements = document.querySelector('.myform');

    validName = /^[a-zA-Z]([a-zA-Z ]){5,49}$/.test(name);
    validPhone = /^(91){0,1}[0-9]{10}$/.test(phone); 
    validEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    validSubject = /^\w([\w\W]){9,100}$/.test(subjectEmail);
    validMessage = /^\w([\w\W]){100,3000}$/.test(message);
    
    if(!validName){
      elements.name.classList.add('invalid'); 
    }else{
      elements.name.classList.remove('invalid');  
    }
    
    if(!validPhone){
      elements.phone.classList.add('invalid'); 
    }else{
      elements.phone.classList.remove('invalid');  
    }

    if(!validEmail){
      elements.email.classList.add('invalid');  
    }else{
      elements.email.classList.remove('invalid');  
    }

    if(!validSubject){
      elements.subject.classList.add('invalid');  
    }else{
      elements.subject.classList.remove('invalid');  
    }

    if(!validMessage){
      elements.message.classList.add('invalid');  
    }else{
      elements.message.classList.remove('invalid');  
    } 

    if(validName && validPhone && validEmail && validSubject && validMessage){
      return true;
    }
    // else{
    //   let alertBox = document.querySelector('.alertBox');
    //   alertBox.style.display = 'block';
      
    //   return false;
    // }
  }

  function formatDoc(name, phone, email, message){
      
      let formattedDoc = `Name : ${name}, %0D%0A Phone no : ${phone}, %0D%0A Email id : ${email}, %0D%0A Message : ${message}`;
      return formattedDoc; 

  }

  function postEmail(subjectEmail, bodyEmail){

    const reciever = 'isometricengineerings@gmail.com';
    window.open(`mailto:${reciever}?subject=${subjectEmail}&body=${bodyEmail}`);
  }

  let closeAlert = document.querySelector('.closeAlert');
  closeAlert.addEventListener('click', ()=>{
    let alertBox = document.querySelector('.alertBox');
      alertBox.style.display = 'none';
  })
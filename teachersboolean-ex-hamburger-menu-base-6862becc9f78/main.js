let openingButton = document.querySelector('.header-right > a');

openingButton.addEventListener("click", function(){
    let elementList = document.querySelector(".hamburger-menu");
    elementList.style.display = 'inline-block';
  });

  let closingButton = document.querySelector('.close');

  closingButton.addEventListener("click", function(){
    let elementList = document.querySelector(".hamburger-menu");
    elementList.style.display = 'none';
  });

  



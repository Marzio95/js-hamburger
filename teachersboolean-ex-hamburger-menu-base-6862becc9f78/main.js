let solution = document.querySelector('.header-right > a');

solution.addEventListener("click", function(){
    let elementList = document.querySelector(".hamburger-menu");
    elementList.style.display = 'inline-block';
  });

  let closingButton = document.querySelector('.close');

  closingButton.addEventListener("click", function(){
    let elementList = document.querySelector(".hamburger-menu");
    elementList.style.display = 'none';
  });

  



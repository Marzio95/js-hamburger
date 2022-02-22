let element = document.querySelector('header-right > a');

// solution.addEventListener('click', 
//  function add() {
//     let elementList = document.getElementsByClassName('hamburger-menu');
//     elementList.style.display = 'inline-block'; 
// } );



element.addEventListener("click", function(){
    let elementList = document.getElementsByClassName("hamburger-menu");
    elementList.style.display = 'inline-block';
  });
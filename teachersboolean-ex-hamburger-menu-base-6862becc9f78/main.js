let solution = document.querySelector('header-right > a');

// solution.addEventListener('click', 
//  function add() {
//     let elementList = document.getElementsByClassName('hamburger-menu');
//     elementList.style.display = 'inline-block'; 
// } );



solution.addEventListener("click", function(){
    let elementList = document.getElementsByClassName("hamburger-menu");
    elementList.style.display = 'inline-block';
  });
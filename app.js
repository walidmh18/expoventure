// first animation ---


const viclogo = document.querySelector('.vicLogo')
const presents = document.querySelector('.presents')
const expoventure = document.querySelector('.expoventure')

const screenHeight = screen.height

addEventListener('scroll', ()=>{
   console.log(window.scrollY , screenHeight);


   let Y = window.scrollY;
   

   if (Y >= 0 && Y <=screenHeight* 0.7 ) {
      viclogo.style.opacity = 1;
      presents.style.opacity = 0;
      expoventure.style.opacity = 0;
   } else if(Y >=screenHeight * 0.9 && Y <=screenHeight * 1.6 ) {
      viclogo.style.opacity = 0;
      presents.style.opacity = 1;
      expoventure.style.opacity = 0;
   } else if(Y >=screenHeight * 1.8 && Y <=screenHeight * 2.5 ) {
      viclogo.style.opacity = 0;
      presents.style.opacity = 0;
      expoventure.style.opacity = 1;
   } else {
      viclogo.style.opacity = 0;
      presents.style.opacity = 0;
      expoventure.style.opacity = 0;
   }
})
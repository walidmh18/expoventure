// first animation ---


const viclogo = document.querySelector('.vicLogo')
const presents = document.querySelector('.presents')
const expoventure = document.querySelector('.expoventure')

const screenHeight = screen.height

const socials = [...document.querySelectorAll('#present .presentItemContainer .socials a')]

for (let i = 0; i < socials.length; i++) {
   socials[i].style.transition = `opacity 0.3s ${(i+1)*0.1}s , scale 0.3s ${(i+1)*0.1}s , color 0.3s`

   
}



addEventListener('scroll', ()=>{
   // console.log(window.scrollY , screenHeight);


   let Y = window.scrollY;
   
   if (Y>=0) {
      socials.forEach(s=>{
         s.style.opacity = 1
         s.style.scale = 1

      })
   }

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


// scroll down animation ---
const animContainer = document.querySelector('.scrolldownanimation')
let svgContainer = document.querySelector('.bodymovinanim');
    let animItem = lottie.loadAnimation({
      container: animContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: "./assets/scroll down/scrollDown.json"
    });

// header ---


const secondPY = document.querySelector('#secondP').offsetTop

const header = document.querySelector('header')

const headerH = header.offsetHeight;

[...document.querySelectorAll('#secondP section .sectionTitle')].forEach(section=>{
   section.style.marginTop = 0.7*headerH +'px'
})

const present = document.querySelector('#present')
const navLinks = [...document.querySelectorAll('.navlink')]
const eventSection = document.querySelector('#event')
const countdownSection = document.querySelector('#countdown')
const registerSection = document.querySelector('#register')
const faqSection = document.querySelector('#faq')
const screenH = screen.height;

const navbar = document.querySelector('nav.right')


addEventListener('scroll', () => {
   let Y = scrollY;
   // console.log(Y);
   if (Y >= secondPY) {
      header.style.boxShadow = '0 20px 30px #17a2b811 ';
   } else {
      header.style.boxShadow = '0  0 #17a2b811 ';

   }

   // console.log(navLinks);
   Y = Y - present.offsetHeight
   // console.log(Y , eventSection.offsetTop , eventSection.offsetTop + eventSection.offsetHeight );
   if (Y>= eventSection.offsetTop - 10 && Y<= eventSection.offsetTop + eventSection.offsetHeight ) {
      navLinks[0].classList.add('active')
      navLinks[1].classList.remove('active')
      navLinks[2].classList.remove('active')
      navLinks[3].classList.remove('active')
      // console.log('object');

   } else if (Y>= countdownSection.offsetTop - 10 && Y<= countdownSection.offsetTop + countdownSection.offsetHeight) {
      navLinks[1].classList.add('active')
      navLinks[0].classList.remove('active')
      navLinks[2].classList.remove('active')
      navLinks[3].classList.remove('active')
   } else if (Y>= registerSection.offsetTop - 10 && Y<= registerSection.offsetTop + registerSection.offsetHeight ) {
      navLinks[2].classList.add('active')
      navLinks[1].classList.remove('active')
      navLinks[0].classList.remove('active')
      navLinks[3].classList.remove('active')
   } else if (Y>= faqSection.offsetTop - 10 && Y<= faqSection.offsetTop + faqSection.offsetHeight ) {
      navLinks[3].classList.add('active')
      navLinks[1].classList.remove('active')
      navLinks[2].classList.remove('active')
      navLinks[0].classList.remove('active')
   } 
})



   navLinks.forEach(n=>{
      n.addEventListener('click', () => {
         navToggle()
      })
   })
      // mobile navbar 
      function navToggle() {
         navbar.classList.toggle('active')
         
      }



// countdown ---

const regStartDate = new Date('03-05-2024 09:00:00').getTime();
const regEndDate = new Date('03-15-2024 09:00:00').getTime();
const eventDay = new Date('03-23-2024 09:00:00').getTime();

const phases = [...document.querySelectorAll('.phase')]
const phasesIcons = [...document.querySelectorAll('.phase i')]
const countdownTitle = document.querySelector('.countdownTitle')
const actionBtn = document.querySelector('#countdown .actionBtn')

function getrem(d) {





   let currT = Date.now();
   let dT = d
   let diff =( dT-currT)/1000
   let rem = {days: 0, hours:0,minutes:0,seconds:0}


   rem.days = Math.floor(diff/(3600*24))
   let x = Math.floor(diff) % (3600*24) 
   rem.hours = Math.floor(x/3600)
   let y = Math.floor(x) % 3600
   rem.minutes = Math.floor(y/60)
   rem.seconds = Math.floor(y%60)


   return rem;
}


const days = document.querySelector('#countdown .days')
const hours = document.querySelector('#countdown .hours')
const minutes = document.querySelector('#countdown .minutes')
const seconds = document.querySelector('#countdown .seconds')

function updateCountdown(rem) {
   days.innerHTML = rem.days
   hours.innerHTML = rem.hours
   minutes.innerHTML = rem.minutes
   seconds.innerHTML = rem.seconds
}

setInterval(() => {
   let currT = Date.now()

  
   if (currT <= regStartDate) {
      // announcement
      let o = getrem(regStartDate)
      updateCountdown(o)

    

   } else if(currT > regStartDate && currT <= regEndDate){
      // registration
      let o = getrem(regEndDate)
      updateCountdown(o)
      
    

   } else if (currT > regEndDate && currT <= eventDay) {
      // dday countdown
      let o = getrem(eventDay)
      updateCountdown(o)


      
   } else if(currT > eventDay){
      // event ended
      let o = getrem(currT)
      updateCountdown(o)
      
     
   }
   
}, 1000);



let currT = Date.now()

  
if (currT <= regStartDate) {
   // announcement
   

   phases[0].classList.add('current')
   phases[1].classList.add('coming')
   phases[2].classList.add('coming')

   phasesIcons[0].classList.add('fa-circle')
   phasesIcons[1].classList.add('fa-clock')
   phasesIcons[2].classList.add('fa-clock')

   countdownTitle.innerHTML = 'Registrations start in ...'

   actionBtn.innerHTML = 'Reserve Now'

} else if(currT > regStartDate && currT <= regEndDate){
   // registration
   
   
   phases[0].classList.add('passed')
   phases[1].classList.add('current')
   phases[2].classList.add('coming')

   phasesIcons[0].classList.add('fa-circle-check')
   phasesIcons[1].classList.add('fa-circle')
   phasesIcons[2].classList.add('fa-clock')

   countdownTitle.innerHTML = 'Registrations end in ...'
   actionBtn.innerHTML = 'Register Now'

} else if (currT > regEndDate && currT <= eventDay) {
   // dday countdown
   


   phases[0].classList.add('passed')
   phases[1].classList.add('passed')
   phases[2].classList.add('current')


   phasesIcons[0].classList.add('fa-circle-check')
   phasesIcons[1].classList.add('fa-circle-check')
   phasesIcons[2].classList.add('fa-circle')

   countdownTitle.innerHTML = 'The event takes place in ...'
   actionBtn.innerHTML = 'Join as spectator'

} else if(currT > eventDay){
   // event ended
   
   
   phases[0].classList.add('passed')
   phases[1].classList.add('passed')
   phases[2].classList.add('passed')

   phasesIcons[0].classList.add('fa-circle-check')
   phasesIcons[1].classList.add('fa-circle-check')
   phasesIcons[2].classList.add('fa-circle-check')

   countdownTitle.innerHTML = 'The event has ended'
   actionBtn.innerHTML = 'View Highlights'
}





// FAQ ---



const faqs = [...document.querySelectorAll('#faq .faq')]

faqs.forEach(f=>{
   let a = f.querySelector('.answer')
   let t = f.querySelector('.answer p')
   console.log(t.offsetHeight);

   if (f.classList.contains('active')) {
      a.style.height =  `${t.offsetHeight}px`
   }



})

function togglefaq(e) {
   if(e.classList.contains('active')){
      e.classList.remove('active')
      e.querySelector('.answer').style.height = '0'
   } else {
      faqs.forEach(f=>{
         f.classList.remove('active')
         f.querySelector('.answer').style.height = '0'

      })
      let a = e.querySelector('.answer')
      let t = e.querySelector('.answer p')
      a.style.height = `${t.offsetHeight}px`
      e.classList.add('active')
      
   }
}
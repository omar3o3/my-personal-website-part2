
const aboutMe = document.querySelector(".secondZone");


function hideAboutMe() {
  aboutMe.classList.toggle('hide');
}

const selfie = document.querySelector('#selfie');
let timesClicked = 0;

// function funnyAlert (){
//   let timesClicked = 0;
//   while (timesClicked = 1){
//     return alert('Ouch, that hurt.');
//     timesClicked++;
//     console.log(timesClicked);
//   }
// }


function funnyAlert (){
  while (timesClicked = 1){
    return alert('Ouch, that hurt.');
    timesClicked++;
    console.log(timesClicked);
  } if (timesClicked > 1){
    return alert('Please stop hitting me.');
    timesClicked++;
    console.log(timesClicked);
  }
  // timesClicked++;
  // console.log(timesClicked);
}


// function funnyAlert (){
//   if (timesClicked === 1){
//     return alert('Ouch, that hurt.');
//     timesClicked++;
//   } else if (timesClicked > 1){
//     return alert('Please stop doing that.');
//   }
//   timesClicked++;
// }

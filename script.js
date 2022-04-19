
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
  console.log(timesClicked);
  while (timesClicked <= 1){
    timesClicked++;
    return alert('Ouch, that hurt.');
    console.log(timesClicked);
  } if (timesClicked > 1){
    timesClicked++;
    return alert('Please stop hitting me.');
    // let timesClicked = 0;
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

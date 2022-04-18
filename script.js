
const aboutMe = document.querySelector(".secondZone");


function hideAboutMe() {
  aboutMe.classList.toggle('hide');
}

let timesClicked = 0;

function funnyAlert(){
  timesClicked++;
  if (timesClicked === 1){
    alert('Ouch, that hurt!');
  } else if (timesClicked > 1){
    alert('Please stop doing that');
  }
}

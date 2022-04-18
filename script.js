
const aboutMe = document.querySelector(".secondZone");


function hideAboutMe() {
  aboutMe.classList.toggle('hide');
}

const selfie = document.querySelector('img#selfie')
let timesClicked = 0;

selfie.addEventListener('click', function (e) {
  timesClicked++;
  if (timesClicked === 1){
    alert('Ouch, that hurt')};
  if (timesClicked > 1){
    alert('Please stop doing that')};
})


// let timesClicked = 0;
//
// function funnyAlert(){
//   timesClicked++;
//   if (timesClicked === 1){
//     alert('Ouch, that hurt!');
//   } else if (timesClicked > 1){
//     alert('Please stop doing that');
//   }
// }


// selfie.addEventListener('keydown', function (e) {
//   if (event.key === "ArrowLeft"){
//     const leftNumbers = selfie.style.left.replace('px', '');
//     const left = parseInt(leftNumbers, 10);
//
//     selfie.style.left = `${left - 1}%`;
//   }
// });

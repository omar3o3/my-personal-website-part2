// let aboutMe = document.getElementsByClassName("secondZone");

const aboutMe = document.querySelector(".secondZone");
// const isHidden = true;

// function hideAboutMe() {
//   if (isHidden){
//     aboutMe.style.display = "block";
//     isHidden = false;
//   } else {
//     aboutMe.style.display = "none";
//     isHidden = true;
//   }
// }

function hideAboutMe() {
  aboutMe.classList.toggle('hide')
}

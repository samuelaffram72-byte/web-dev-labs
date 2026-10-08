//const zipPattern = /^\d{5}$/;
//const isValidZip = zipPattern.test(zipInput.Value);
//console.log(isValidZip); //true or false//

const zipInput = document.getElementById("zip"); // match your input's id
const zipPattern = /^\d{5}$/;

zipInput.addEventListener("input", () => {
  const isValidZip = zipPattern.test(zipInput.value);
  console.log(isValidZip); // true or false
});


const name = "Ada";
let labsCompleted = 6;
let isEnabled = false;

labsCompleted = labsCompleted + 1;
console.log(`${name} has completed ${labsCompleted} labs.`);

const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
let likes = 0;

likeBtn.addEventListener("click", function() {
    likes = likes + 1;
    likeCount.textContent = `${likes} likes`;
});

const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});
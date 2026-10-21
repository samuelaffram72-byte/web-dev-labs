//Samuel Affram - Lab 9

//console.log("1. Starting");

//setTimeout(function() {
    //console.log("2. This runs later");

//}, 1000);

//console.log("3. This runs immediately");

const zipInput = document.getElementById("zip");
const zipPattern = /^\d{5}$/;

zipInput.addEventListener("input", () => {
  const isValidZip = zipPattern.test(zipInput.value);
  console.log(isValidZip);
});


const name = "Samuel Affram";
let labsCompleted = 8;
let isEnabled = false;

labsCompleted = labsCompleted + 1;
console.log(`${name} has completed ${labsCompleted} labs.`);

const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
let likes = 0;

function incrementLikes(){
    likes = likes + 1;
    updateLikeDisplay();
}

const likeMessage = document.querySelector("#like-message");

function updateLikeDisplay(count) {
    likeCount.textContent = `${count} likes`;

    if (count >= 10) {
        likeMessage.textContent = "Wow, thanks for all the likes!";
    } else if (count >= 5) {
        likeMessage.textContent = "Glad you like it!";
    } else {
        likeMessage.textContent = "";
    }
}


if (likeBtn) {
    likeBtn.addEventListener("click", function() {
        counter.increment();
    });
} else {
    console.warn("like-btn not found on this page");
}

const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});

const goals = ["HTML", "CSS", "JavaScript", "Git"];
const goalsList = document.querySelector("#goals-list");

goals.forEach(function(goal) {
    const item = document.createElement("li");
    item.textContent = goal;
    goalsList.appendChild(item);
});

function createLikeCounter() {
    let likes = 0; //private, in other words not public

    return {
        increment() {
            likes++;
            updateLikeDisplay(likes);
        },
        getLikes() { return likes; }
    }; 
}

const counter = createLikeCounter();

function getGreetingAfterDelay() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Hello from the future!");
        }, 800);
    });
}
//getGreetingAfterDelay().then(function(message) {
 //   console.log(message);
//});

async function showGreeting() {
    const message = await getGreetingAfterDelay();
    console.log(message);
}

showGreeting();

const factBtn = document.querySelector("#fact-btn");
const factDisplay = document.querySelector("#fact-display");

async function loadFact() {
    factDisplay.textContent = "Loading...";
    try{
        const response = await fetch("https://catfact.ninja/fact");
        if(!response.ok){
            throw new Error("Server responded with an error");
        }
        const data = await response.json();
        factDisplay.textContent = data.fact;
    } catch(error){
        factDisplay.textContent = "Couldn't load a fact right now. Try again";
        console.error(error);
    }

}

factBtn.addEventListener("click", loadFact);
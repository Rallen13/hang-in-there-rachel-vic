// query selector variables go here 👇
var posterImg = document.querySelector(".poster-img")
var posterTitle = document.querySelector(".poster-title")
var posterQuote = document.querySelector(".poster-quote")

var mainPosterSection = document.querySelector(".main-poster")
var posterFormSection = document.querySelector(".poster-form")
var savedPostersSection = document.querySelector(".saved-posters")

var savePosterButton = document.querySelector(".save-poster")
var showSavedButton = document.querySelector(".show-saved")
var showRandomButton = document.querySelector(".show-random")
var showFormButton = document.querySelector(".show-form")
var makePosterButton = document.querySelector(".make-poster")
var showMainButton = document.querySelector(".show-main")
var backToMainButton = document.querySelector(".back-to-main")

var posterImageUrlInput = document.querySelector('#poster-image-url')
var posterTitleInput = document.querySelector('#poster-title')
var posterQuoteInput = document.querySelector('#poster-quote')



// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
window.addEventListener('load', generateRandomPoster)

showRandomButton.addEventListener('click', generateRandomPoster)

showFormButton.addEventListener('click', toggleFormAndMain)

showMainButton.addEventListener('click', toggleFormAndMain)

showSavedButton.addEventListener('click', toggleSavedAndMain)

backToMainButton.addEventListener('click', toggleSavedAndMain)

savePosterButton.addEventListener('click', saveCurrentPoster)

makePosterButton.addEventListener('click', function(event) {
  event.preventDefault()
  createPoster()
}, true)

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function saveCurrentPoster() {
var savedPostersGrid = document.querySelector('.saved-posters-grid')
  if (!posterSavedAlready()) {
    savedPosters.push(currentPoster)
    savedPostersGrid.appendChild(generateMiniPosterHTML())
  }
}

function posterSavedAlready() {
  for (var i = 0; i < savedPosters.length; i++) {
    if (savedPosters[i] === currentPoster) {
      return true
    }
  }
  return false
}

function generateMiniPosterHTML() {
  var currentPosterDIV = document.createElement('div')
  currentPosterDIV.setAttribute('id', currentPoster.id)
  currentPosterDIV.setAttribute('class', 'mini-poster')

  currentPosterDIV.innerHTML = `
    <img src="${currentPoster.imageURL}" alt="nothin' to see here">
    <h2>${currentPoster.title}</h2>
    <h4>${currentPoster.quote}</h4>
  `
  currentPosterDIV.addEventListener('dblclick', deleteSavedPoster)

  return currentPosterDIV;
}

function setMainPoster(imageURL, title, quote) {
  currentPoster = new Poster(imageURL, title, quote)

  posterImg.src = currentPoster.imageURL
  posterTitle.innerText = currentPoster.title
  posterQuote.innerText = currentPoster.quote
}

function generateRandomPoster() {
  var imageURL = images[getRandomIndex(images)]
  var title = titles[getRandomIndex(titles)]
  var quote = quotes[getRandomIndex(quotes)]

  setMainPoster(imageURL, title, quote)
}

function toggleFormAndMain() {
  posterFormSection.classList.toggle("hidden")
  mainPosterSection.classList.toggle("hidden")
}

function toggleSavedAndMain() {
  savedPostersSection.classList.toggle("hidden")
  mainPosterSection.classList.toggle("hidden")
}

function resetForm() {
  posterImageUrlInput.value = null
  posterTitleInput.value = null
  posterQuoteInput.value = null
}

function createPoster() {
  if (emptyInputs()) {
    alert('You didn\'t complete the form!')
    return
  }

  var imageURL = posterImageUrlInput.value
  var title = posterTitleInput.value
  var quote = posterQuoteInput.value

  images.push(imageURL)
  titles.push(title)
  quotes.push(quote)

  setMainPoster(imageURL, title, quote)
  resetForm()
  toggleFormAndMain()
}

function emptyInputs() {
  var imgMissing = posterImageUrlInput.value.length === 0
  var titleMissing = posterTitleInput.value.length === 0
  var quoteMissing = posterQuoteInput.value.length === 0

  return imgMissing || titleMissing || quoteMissing
}

function deleteSavedPoster(event) {
  for (var i = 0; i < savedPosters.length; i++) {
    if (savedPosters[i].id == event.currentTarget.id) {
      savedPosters.splice(i, 1)
    }
  }
  event.currentTarget.remove()
}

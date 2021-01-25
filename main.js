// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

window.addEventListener('DOMContentLoaded', {

})

function onLikeClick(like) {
  let promise = mimicServerCall()
  promise.then(() => {
    like.textContent === FULL_HEART ? EMPTY_HEART : FULL_HEART
  }).catch((error) => {
    let errorElement = document.getElementById('modal')
    errorElement.className = ''
    setTimeout(() => {errorElement.querySelector('h2').textContent = error.message}, 500)
  })
}

function addLikeListener() {
  let likes = document.getElementsByClassName('like-glyph')
  likes.forEach(like => {
    like.addEventListener('click', () => onLikeClick(like))
  })
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

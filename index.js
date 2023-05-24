import { dogs, dogsArray } from './data.js';
import Dog from './Dog.js'

document.getElementById("accept-button").addEventListener('click', yes);
document.getElementById("reject-button").addEventListener('click', no);

const cardDiv = document.getElementById('card');
let currentDog = getNewDog();

// returns the current dog object
function getNewDog() {
    const currentDogData = dogs[dogsArray.shift()];
    return currentDogData ? new Dog(currentDogData) : {};
}

// renders the dog profile to the page using the current dog object
function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml();
}

// if dog is liked
function yes() {
    if(!currentDog.hasBeenSwiped) {
        const badge = document.createElement('img');
        badge.setAttribute('src', '/images/badge-like.png');
        badge.setAttribute('class', 'badge');
        cardDiv.prepend(badge);
        currentDog.setMatchStatus(true);
        changeProfile();
    } 
}

// if dog is rejected
function no() {
    if(!currentDog.hasBeenSwiped) {
        const badge = document.createElement('img');
        badge.setAttribute('src', '/images/badge-nope.png');
        badge.setAttribute('class', 'badge');
        cardDiv.prepend(badge);
        currentDog.setMatchStatus(false);
        changeProfile();
    }
}

// change to next dog profile
function changeProfile() {
    if(dogsArray.length) {
        setTimeout(() => {
            currentDog = getNewDog();
            render();
        }, 1500);
    }
    else {
        document.body.innerHTML = `
            <div class="container">
                <div class="end-screen">
                    <h1>That's all the dogs in your area! 🐶</h1>
                </div>
            </div>
        `
    }
}

render();
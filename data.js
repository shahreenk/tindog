const dogs = {
    rex: {
        name: "Rex",
        avatar: "images/dog-rex.jpg",
        age: 25,
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    bella: {
        name: "Bella",
        avatar: "images/dog-bella.jpg",
        age: 43,
        bio: "Yup, that's my owner. U can meet him if you want",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    teddy: {
        name: "Teddy",
        avatar: "images/dog-teddy.jpg",
        age: 30,
        bio: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    kenzie: {
        name: "Kenzie",
        avatar: "images/dog-kenzie.jpg",
        age: 18,
        bio: "My nickname is Gillette because I'm the best a man can get",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    oscar: {
        name: "Oscar",
        avatar: "images/dog-oscar.jpg",
        age: 21,
        bio: "Professional cuddler looking for my big spoon",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    romeo: {
        name: "Romeo",
        avatar: "images/dog-romeo.jpg",
        age: 33,
        bio: "Looking for my paw-fect match",
        hasBeenSwiped: false,
        hasBeenLiked: false
    }
}

const dogsArray = Object.keys(dogs);

export { dogs, dogsArray };
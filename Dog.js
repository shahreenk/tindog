class Dog {
    constructor(dogData) {
        Object.assign(this, dogData)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool;
        this.hasBeenSwiped = true;
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this;
        return `
            <div class="dog-info">
                <h3><span>${name}, ${age}</span></h3>
                <div class="dog-bio"><span>${bio}</span></div>
            </div>
            <img class="dog-img" src="${avatar}">
        `
    }
}

export default Dog;
class Hero {
    constructor(name = "", totalCoins = 0, status = "Small", hasStar = false) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;

    }
    setName(name) {
        this.name = name;

    }

    gotHit() {
        if (this.status === "Powered Up") {
            return this.status = "Big"
        } else if (this.status === "Big") {
            return this.status = "Small"
        } else if (this.status === "Small") {
            this.status = "Dead"
        }
    }
    gotPowerup() {
        if (this.status === "Small") {
            return this.status = "Big"
        } else if (this.status === "Big") {
            return this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            return this.hasStar = "You get a Star"
        }
    }
    addCoin() {
        this.totalCoins++
            return this.totalCoins;
    }
    print() {
        console.log(`Name: ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`Total Coins: ${this.totalCoins}`)
        console.log(`${this.hasStar}`)
    }

}

function getRandomNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomRange() {
    switch (getRandomNum(3)) {
        case 0:
            hero.gotHit();
            break;
        case 1:
            hero.gotPowerup();
            break;
        case 2:
            hero.addCoin()
            break;
    }
}

const namePicked = ["Mario", "Luigi"][getRandomNum(2)];
const hero = new Hero()
hero.setName(namePicked);

let gameInterval = setInterval(() => {
    randomRange()
    if (hero.status === "Dead") {
        clearInterval(gameInterval);
        console.log(`You DIED!`);
        hero.print();
        console.log(`You collected ${ hero.totalCoins } coins.`);
        return;
    }
    hero.print();
}, 3000);
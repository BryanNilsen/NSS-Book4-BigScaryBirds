// Your job is to create a large, flightless bird class that defines the properties of a feathered terror. It should have the following properties:
// height
// flightless (should always be true)
// isExtinct
// name
// running speed
// toString -- This will be a method that outputs a description of the bird based on some of its properties. Example output: "The Cassowary is a big, scary bird that stands up to 6 ft and can run up to 30 mph!"
// Create at least 3 instances of the class. Visit the Wikipedia list of the largest birds in the world for inspiration.


class BigScaryBird {

    constructor (props) {
        this.name = props.name
        this.height = props.height
        this.flightless = true
        this.isExtinct = props.isExtinct
        this.runningSpeed = props.runningSpeed
    }

    toString () {
        let extinct ="";
        if(this.isExtinct === true){
           extinct = "extinct";
        } else {
            extinct = "not extinct";
        }
        return `The ${this.name} is a flightless bird that is ${this.height} tall, is ${extinct} and runs at a rate of ${this.runningSpeed}.`
    }
}

// const kiwi = new BigScaryBird({
//     name: "kiwi",
//     height: "16 inches",
//     isExtinct: false,
//     runningSpeed: "unknown miles per hour"
// })


const kiwiProperties = {
    name: "kiwi",
    height: "16 inches",
    isExtinct: false,
    runningSpeed: "unknown miles per hour"
}

const emu = new BigScaryBird({
    name: "emu",
    height: "1.9 meters",
    isExtinct: false,
    runningSpeed: "31 miles per hour"
})

const elephantBird = new BigScaryBird({
    name: "elephant bird",
    height: "3 meters",
    isExtinct: true,
    runningSpeed: "78 miles per hour (wild guess)"
})

const kiwi = new BigScaryBird(kiwiProperties)

console.log(kiwi)
console.log(kiwi.toString())
console.log(emu.toString())
console.log(elephantBird.toString())
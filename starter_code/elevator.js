class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = null;
    this.waitingList = [];
    this.passengers = [];
    this.timer = {};
  }

  start() {
     this.timer = setInterval(()=> {
      if (this.requests[0] > this.floor) {
        this.floorUp();
        this.update();
      } else if (this.requests[0] < this.floor){
        this.floorDown();
        this.update();
      } else if (this.requests[0] === this.floor){
        this.update();
      }
    }, 1000);
  }

  stop() {
    if (this.requests.length === 0) {
      this.direction = null;
    }
    clearInterval(this.timer);
  }

  update() {
    this.log();
    this._passengersEnter();
    this._passengersLeave();
  }

  _passengersEnter() {
    while (this.requests[0] === this.floor && this.requests.length>0) {
      this.passengers.push(this.waitingList[0]); //add someone who is waiting to the passenger list
      let person = this.waitingList.shift(); // remove the person from the waitlist
      this.requests.push(person.destinationFloor); // add their destination to the queue
      this.requests.shift(); // remove their current request from the queue
      console.log(person.name + " has entered the elevator");
    }
    return;
  }
  _passengersLeave() {
    // if(this.requests.length===0){
    //   return;
    // }
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].destinationFloor === this.floor) {
        let person = this.passengers.splice(i, 1);
        console.log(person[0].name + " has left the elevator");
      }

    }
  }

  floorUp() {
    this.direction = "up";
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
    }
    return this.floor;
  }

  floorDown() {
    this.direction = "down";
    if (this.floor > 0) {
      this.floor--;
    }
    return this.floor;
  }

  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
  }

  log() {
    console.log("Direction: " + this.direction + "| Floor: " + this.floor);
  }

}




module.exports = Elevator;

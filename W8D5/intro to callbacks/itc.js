class Clock {
    constructor() {
        // 1. Create a Date object.
        this.dateObject = new Date();
        // 2. Store the hours, minutes, and seconds.

        // this.dateObject.setHours();
        // this.dateObject.setMinutes();
        // this.dateObject.setSeconds();

        // this.hours = dateObject.getHours();
        // this.minutes = dateeObject.getMinutes();
        // this.seconds = dateObject.getSeconds();

        this.hours = this.dateObject.getHours();
        this.minutes = this.dateObject.getMinutes();
        this.seconds = this.dateObject.getSeconds();
        // 3. Call printTime.
        this.printTime();

        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this), 1000);

    }

    printTime() {
        // Format the time in HH:MM:SS
        let hours = this.hours;
        let minutes = this.minutes;
        let seconds = this.seconds;
        let time = `${hours}:${minutes}:${seconds}`;
        // Use console.log to print it.
        console.log(time);
    }

    _tick() {
        // 1. Increment the time by one second.
        this.seconds = (this.seconds + 1)%60;
        if (this.seconds === 0) this.minutes = (this.minutes + 1) % 60;
        if (this.seconds === 0 && this.minutes === 0) this.hours = (this.hours + 1) % 24;
        // 2. Call printTime.
        this.printTime();

    }
}

const clock = new Clock();
import { makeAutoObservable } from 'mobx';

export default class CounterStore {
    title = 'Counter store';
    count = 25;
    events: string[] = [
        `'Initial account is ${this.count}`
    ]

    constructor() {
        makeAutoObservable(this)
    }

    increment = (amount = 1) => {
        this.count += amount;
        this.events.push(`Incremented by ${amount} - count is now ${this.count}`);
    }

    decrement = (amount = 1) => {
        this.count -= amount;
        this.events.push(`Decrement by ${amount} - count is now ${this.count}`);
    }

    get eventCount() {
        return this.events.length;
    }
}
"use strict";
class Customer {
    name;
    constructor(name) {
        this.name = name;
    }
    annouce() {
        return "Hello, My name is " + this.name;
    }
}
let firstCustomer = new Customer("satish yadav");
let newMessage = firstCustomer.annouce();
let webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
//# sourceMappingURL=basic.js.map
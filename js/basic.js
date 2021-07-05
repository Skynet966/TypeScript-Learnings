class Customer {
    constructor(name) {
        this.name = name;
    }
    annouce() {
        return "Hello, my name is " + this.name;
    }
}
//create a new instance
let firstCustomer = new Customer("satish yadav");
let newMessage = firstCustomer.annouce();
//Change the text on the page
let webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;

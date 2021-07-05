class Customer{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    annouce():string {
        return "Hello, my name is " + this.name;
    }
}

//create a new instance
let firstCustomer:Customer = new Customer("satish yadav");
let newMessage: string = firstCustomer.annouce();

//Change the text on the page
let webHeading = document.querySelector('h1');
webHeading!.textContent=newMessage;
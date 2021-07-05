var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
    }
    Customer.prototype.annouce = function () {
        return "Hello, my name is " + this.name;
    };
    return Customer;
}());
//create a new instance
var firstCustomer = new Customer("Satish Yadav");
var newMessage = firstCustomer.annouce();
//Change the text on the page
var webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;

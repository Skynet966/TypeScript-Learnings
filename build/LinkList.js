"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            var tail = this.head;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = node;
        }
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var node = this.head;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index not found!');
    };
    LinkedList.prototype.compare = function (leftIndex) {
        if (!this.head) {
            throw new Error('List is empty!');
        }
        return this.at(leftIndex).data > this.at(leftIndex + 1).data;
    };
    LinkedList.prototype.swap = function (leftIndex) {
        if (!this.head) {
            throw new Error('List is empty!');
        }
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(leftIndex + 1);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    LinkedList.prototype.printData = function () {
        if (!this.head) {
            console.log('List is empty!');
        }
        var node = this.head;
        var list = 'START-->';
        while (node) {
            list += "[" + node.data + "]-->";
            node = node.next;
        }
        console.log(list + 'END');
    };
    return LinkedList;
}());
exports.default = LinkedList;
//# sourceMappingURL=LinkList.js.map
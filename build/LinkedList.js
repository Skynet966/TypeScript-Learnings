"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = __importDefault(require("./Sorter"));
var Node = (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
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
}(Sorter_1.default));
exports.default = LinkedList;
//# sourceMappingURL=LinkedList.js.map
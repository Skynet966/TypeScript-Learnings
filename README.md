# TypeScript-Learnings

This is a basic plus project to understand more advanced concepts in categorize manner and take a deep look inside typescript.

#### Run cmd: node ./build/<filename>.js

## Project Description

In this project we learn about **Classes, Interfaces, Tuples and more**. We also did **Type annotation and Inference** with **Typed Arrays** to explore more about typescript.

### Decorators

- Functions that can be used to modify/change/anything different properties/methods in the class

- Not the same as Javascript decorators

- Used inside/on classes only

- Understanding the order in which decorators are ran are the key to understand them

- Experimental!

#### Decorator Evaluation

There is a well defined order to how decorators applied to various declarations inside of a class are applied:

1. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
2. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
3. Parameter Decorators are applied for the constructor.
4. Class Decorators are applied for the class.

#### Decorators on a property, method and accessor.

- First argument is the **prototype** of the object.

- Second argument is the **key of the property/method/accessor** on the object.

- Third argument is the **property descriptor**

- Decorators are applied when the code for this class is ran. (not when an instance is created)

##### Property Descriptor for Methods

| Descriptor Properties | Description                                                     |
| --------------------- | --------------------------------------------------------------- |
| writable              | Whether or not this property can be changed                     |
| enumerable            | Whether or not this property get looped over by a 'for....in'   |
| value                 | Hold the Current Value of the feild on which descriptor called  |
| configurable          | Property definition can be changed and property can be deleted. |

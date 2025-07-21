<small>
  

  # 📌 Notes on `abstract` Classes and Methods in TypeScript

## ✅ What is `abstract`?

* An `abstract` class **cannot be instantiated**.
* It serves as a **base class** and is meant to be **extended**.
* It can have **abstract methods** that must be implemented in derived classes.

---

## 📦 Syntax:

```ts
abstract class Animal {
  abstract makeSound(): void; // No body

  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}
```

---

## 🧪 Usage:

```ts
const a = new Animal(); // ❌ Error: Cannot create an instance of an abstract class

const dog = new Dog();  // ✅
dog.makeSound();        // Woof!
dog.move();             // Moving...
```

---

## 🔥 Use Cases:

* Designing **blueprints** or **contracts** for subclasses.
* Ensuring certain methods are **always implemented** in derived classes.

---

## ❗ Key Points:

* `abstract` methods **do not have a body** in the base class.
* Derived classes **must** implement all abstract methods.
* Non-abstract methods **can be inherited as is**.

---

✅ **Remember:** `abstract` = **template/blueprint** — can't create directly, only extend!


</small>
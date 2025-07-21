<small># 📌 Notes on `static` in TypeScript

## ✅ What is `static`?

* `static` members (properties or methods) belong to the **class itself**, not to instances of the class.
* They can be accessed **without creating an object** of the class.

---

## 📦 Syntax:

```ts
class MyClass {
  static count: number = 0;

  static greet() {
    return "Hello from static method";
  }
}
```

---

## 🧪 Usage:

```ts
console.log(MyClass.count);      // ✅ Accessing static property
console.log(MyClass.greet());    // ✅ Calling static method

const obj = new MyClass();
// obj.count ❌ Invalid - static members are not accessible through instances
```

---

## 🚀 Use Cases:

* Keeping count of instances created.
* Utility/helper methods like `Math.random()`.
* Configuration/data that applies to the entire class.

---

## ❗ Key Points:

* No `this` keyword for static members (use class name instead).
* Cannot access instance members inside static methods directly.

---

## 📚 Example:

```ts
class User {
  static totalUsers = 0;

  constructor(public name: string) {
    User.totalUsers++;
  }

  static getTotalUsers() {
    return `Total users: ${User.totalUsers}`;
  }
}

const u1 = new User("Anand");
const u2 = new User("Neha");

console.log(User.getTotalUsers()); // Total users: 2
```

---

✅ **Remember:** `static` means **shared by class, not individual instances!**
</small>
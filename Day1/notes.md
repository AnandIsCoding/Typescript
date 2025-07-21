1st :  initialize node project  npm init -y
2nd :  npm install typescript
3rd :  npx tsc --init

compiling : npx tsc -b (converting js file to js file  && a new file file.js will be created that will be executed later)
node index.js (created file)

combined : npx tsc -b && node index.js

'rootDir' : './src'
'outDir' : './outputJs'

create ts files in rootDir
now to run 🔥  node dist/node.js

npx tsc -b && node dist/index.js

npx tsc --watch ( jo bhi file src k andar bnega sab compile hota rahega, n dist me ata jayega )





any : it turn off type checking

---
---
---
---
---








# OOP Access Modifiers: public, private, protected

Object-Oriented Programming (OOP) uses **access modifiers** to restrict or allow access to class members (properties and methods). These help enforce encapsulation and control how data is accessed or modified.

## 1. `public`

* Accessible from **anywhere**: inside the class, outside the class, or from inherited classes.
* Default modifier if none is specified.

```ts
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public move() {
    console.log(`${this.name} moves`);
  }
}

const cat = new Animal("Cat");
console.log(cat.name); // Accessible
cat.move();            // Accessible
```

## 2. `private`

* Accessible **only within the class** that defines it.
* Not accessible from outside or subclasses.

```ts
class Animal {
  private secret: string = "hidden";

  showSecret() {
    console.log(this.secret);
  }
}

const dog = new Animal();
dog.showSecret();     // Allowed
// dog.secret;        // Error: Property 'secret' is private
```

## 3. `protected`

* Accessible **within the class** and **in derived (child) classes**.
* Not accessible outside the class hierarchy.

```ts
class Animal {
  protected sound: string = "generic sound";
}

class Dog extends Animal {
  bark() {
    console.log(this.sound); // Allowed
  }
}

const pet = new Dog();
// pet.sound;          // Error: Property 'sound' is protected
```

## Summary Table

| Modifier    | Same Class | Subclass | Outside Class |
| ----------- | ---------- | -------- | ------------- |
| `public`    | ✅          | ✅        | ✅             |
| `private`   | ✅          | ❌        | ❌             |
| `protected` | ✅          | ✅        | ❌             |

---

Let me know if you want examples in Java, Python, or C++ as well.

----
----
----
----

# TypeScript: Types vs Interfaces

## 🔸 Type Aliases (`type`)

`type` allows you to define custom types. It can represent:

* primitives
* unions/intersections
* function signatures
* object structures

### ✅ Example:

```ts
// Union
type Status = 'success' | 'error' | 'loading';

// Object type
type User = {
  name: string;
  age: number;
};

// Function type
type Greet = (name: string) => string;
```

### 🔹 Features of `type`:

* Can use union `|`, intersection `&`
* Cannot be re-opened/merged later
* Works well with complex combinations

---

## 🔸 Interfaces (`interface`)

`interface` is used to define object structures, often preferred in OOP-style codebases.

### ✅ Example:

```ts
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}
```

### 🔹 Features of `interface`:

* Supports `extends` for inheritance
* Can be merged (reopened)
* Great for class-based object-oriented programming

---

## 🔁 Common Use Cases

| Use Case              | Prefer `type`       | Prefer `interface` |
| --------------------- | ------------------- | ------------------ |
| Union or intersection | ✅                   | ❌                  |
| Object with methods   | ✅                   | ✅                  |
| Extending for class   | ✅ (but less common) | ✅                  |
| Merging declarations  | ❌                   | ✅                  |

---

## 🔍 Example: Combining both

```ts
type ID = string | number;

interface Person {
  id: ID;
  name: string;
}
```

---

## ✅ Summary

* Use `type` for flexibility (unions, primitives, etc.)
* Use `interface` for object-oriented patterns and when extending multiple structures
* Both are powerful tools and often interchangeable for objects



------
-----
------
------


TS can sum  string + string
Ts can sum  number + number
TS can sum  string + number

but

Ts can't sum   ( number | string ) + ( number | string )
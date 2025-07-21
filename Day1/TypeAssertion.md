<small>

 📌 Notes on Type Assertion & Type Casting in TypeScript

## ✅ What is Type Assertion?

* Tells TypeScript the **specific type** of a value.
* No runtime effect — just helps the compiler.

---

## 📦 Syntax:

Two ways:

```ts
let value: any = "hello";
let strLength: number = (value as string).length;

// or using angle bracket
let strLength2: number = (<string>value).length;
```

---

## 🚀 When to Use:

* When you're confident about the type.
* Useful when dealing with DOM, API data, `any` or `unknown`.

---

## ❗ Rules:

* Type assertions **don't convert** the type.
* They only tell the compiler what type you believe it to be.

---

## 🧪 Example with DOM:

```ts
const input = document.getElementById("name") as HTMLInputElement;
console.log(input.value);
```

---

✅ **Remember:** Type Assertion ≠ Type Conversion. It’s just a hint to the TypeScript compiler.
</small>
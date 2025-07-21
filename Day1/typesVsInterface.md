<small>
    # Type vs Interface in TypeScript

In TypeScript, both `type` and `interface` are used to define custom types. However, there are some key differences between them.

---

## 1. **Declaration Syntax**

```ts
// Type
type User = {
  name: string;
  age: number;
};

// Interface
interface User {
  name: string;
  age: number;
}
```

---

## 2. **Extending Types**

* **Interface**: Can be extended using `extends` keyword (supports multiple inheritance).
* **Type**: Can also extend using intersections (`&`), but not with `extends` keyword.

```ts
// Interface Extension
interface Person {
  name: string;
}
interface Employee extends Person {
  salary: number;
}

// Type Intersection
type Person = {
  name: string;
};
type Employee = Person & {
  salary: number;
};
```

---

## 3. **Merging**

* **Interface** supports declaration merging.
* **Type** does not support declaration merging.

```ts
interface Box {
  height: number;
}
interface Box {
  width: number;
}
// Result: Box has both height and width

// type Box = { height: number; };
// type Box = { width: number; }; // ❌ Error: Duplicate identifier
```

---

## 4. **Use Cases**

| Feature                      | `interface`     | `type`             |
| ---------------------------- | --------------- | ------------------ |
| Object type declaration      | ✅ Yes           | ✅ Yes              |
| Union and intersection types | ❌ No            | ✅ Yes              |
| Declaration merging          | ✅ Yes           | ❌ No               |
| Implements in classes        | ✅ Yes           | ✅ Yes              |
| Extending existing types     | ✅ Yes (extends) | ✅ Yes (& operator) |

---

## 5. **Recommendation**

* Use `interface` for **object shapes**, especially when working with **class-based OOP** or when extending types.
* Use `type` for **unions, intersections, primitives, tuples**, and more complex combinations.

> ✅ They can often be used interchangeably, but understanding their strengths helps in choosing the right one for your context.

---

</small>
<small># TypeScript Special Types: Notes and Comparison

## 1. `any`

* **Description**: Allows any value; disables type checking.
* **Usage**: Use when migrating JS to TS or if type is truly dynamic.
* **Example**:

  ```ts
  let data: any;
  data = 5;
  data = "text"; // No error
  ```

📝 **Note**: Avoid overusing `any`. It removes type safety.

---

## 2. `unknown`

* **Description**: Like `any` but safer. Cannot access properties or call until type-checked.
* **Usage**: When you don’t know the type yet but want safety.
* **Example**:

  ```ts
  let value: unknown = "hello";

  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  ```

📝 **Note**: Prefer `unknown` over `any` for safety.

---

## 3. `never`

* **Description**: Represents values that never occur (e.g., throw errors or infinite loops).
* **Usage**: Used in functions that never return.
* **Example**:

  ```ts
  function throwError(msg: string): never {
    throw new Error(msg);
  }
  ```

📝 **Note**: Common in exhaustive `switch` statements.

---

## 4. `void`

* **Description**: Used for functions that return nothing.
* **Usage**: Typically used in event handlers or loggers.
* **Example**:

  ```ts
  function logMessage(): void {
    console.log("Logging...");
  }
  ```

📝 **Note**: `void` is not the same as `undefined` but often used similarly.

---

## 5. `null` and `undefined`

* **Description**: Represent empty or missing values.
* **Usage**: Enable `strictNullChecks` to manage them safely.
* **Example**:

  ```ts
  let name: string | null = null;
  let age: number | undefined;
  ```

📝 **Note**: Use union types (`| null | undefined`) when needed.

---

## Quick Comparison Table

| Type        | Allows Anything | Type-Safe | Use Case Example               |
| ----------- | --------------- | --------- | ------------------------------ |
| `any`       | ✅               | ❌         | Legacy code, quick prototyping |
| `unknown`   | ✅               | ✅         | User inputs, APIs              |
| `never`     | ❌               | ✅         | Error-throwing, infinite loops |
| `void`      | ❌               | ✅         | Functions without return       |
| `null`      | ❌               | ✅         | Optional values                |
| `undefined` | ❌               | ✅         | Uninitialized values           |

---

## Best Practices

* ✅ Prefer `unknown` over `any`.
* ⚠️ Avoid `any` in production code.
* 🧠 Use `never` for exhaustive checks in union types.
* 🚫 Do not assign `null`/`undefined` unless necessary or allowed by the type.

-----
-----

: number aise dena is called type anotation 
</small>
<small>## Access Modifiers in TypeScript

### 🔓 `public` — "Open for All"

- **Accessible anywhere** — inside the class, outside the class, and in child classes.
- **Default** if you don’t mention anything.

🧠 **Think:** "Public park — anyone can enter."

```ts
public name: string;
```

---

### 🔒 `private` — "My Secret"

- **Accessible only inside the same class**.
- **Not accessible** from outside or child classes.

🧠 **Think:** "Private diary — only I can read it."

```ts
private age: number;
```

---

### 🛡️ `protected` — "Family Secret"

- **Accessible in the class and its child classes** (subclasses).
- **Not accessible from outside** the class hierarchy.

🧠 **Think:** "Protected treasure — only I and my kids can access it."

```ts
protected salary: number;
```

---

### 🔁 Quick Comparison Table

| Keyword     | Inside Class | Subclass | Outside Class |
| ----------- | ------------ | -------- | ------------- |
| `public`    | ✅ Yes       | ✅ Yes   | ✅ Yes        |
| `private`   | ✅ Yes       | ❌ No    | ❌ No         |
| `protected` | ✅ Yes       | ✅ Yes   | ❌ No         |

---

✅ **Tip to Remember**:
**Public is for all, Private is for self, Protected is for family.**
</small>

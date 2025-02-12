❌ Bad Code:
```javascript
function sum(){ return a+b; }
```

🔍 Issues:
* ❌ `a` and `b` are not defined within the function scope, leading to undefined behavior.
* ❌ The function does not accept any arguments, limiting its reusability.

✅ Recommended Fix:

```javascript
function sum(a, b) {
return a + b;
}
```

💡 Improvements:

* ✔ The function now accepts `a` and `b` as arguments, making it reusable with different values.
* ✔ No longer relies on variables from the outer scope.
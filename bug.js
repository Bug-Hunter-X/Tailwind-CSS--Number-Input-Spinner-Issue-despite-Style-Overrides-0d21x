```javascript
// In your main app.js or similar file where you initialize Tailwind:
import './input.css'; // Make sure to import your custom styles after the main Tailwind stylesheet

// ... rest of your app.js ...
```

```css
/* input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Your custom styles override Tailwind's defaults */
input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
```
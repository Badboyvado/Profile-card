# 📘 Profile Card Component

A small, accessible, and responsive **Profile Card** built with plain **HTML, CSS, and JavaScript**.
This project demonstrates semantic markup, accessibility best practices, and clean frontend structure.

---
live demo 
https://profile-card-habeeb-taiwo.vercel.app/
----
screenshot
<img src="image/Screenshot 2026-04-17 173529.png"/>

## 🚀 Features

* Semantic HTML (`article`, `section`, `nav`, `figure`)
* Fully responsive (mobile → desktop)
* Accessible (ARIA, keyboard navigation, screen reader support)
* Live updating **epoch time (milliseconds)**
* Clean and maintainable structure
* Includes required `data-testid` attributes for testing

---

## 📂 Project Structure

```
profile-card/
│── index.html
│── styles.css
│── script.js
│── README.md
```

---

## ▶️ How to Run Locally

### Option 1 — Open directly

1. Download or clone the repository

   ```
   git clone <your-repo-url>
   ```
2. Navigate into the project folder
3. Open `index.html` in your browser

---

### Option 2 — Use Live Server (recommended)

If you're using VS Code:

1. Install **Live Server** extension
2. Right-click `index.html`
3. Click **"Open with Live Server"**

---

## 🧪 Testing Notes

All required elements include `data-testid` attributes to support automated testing.

### Required Test IDs

| Element                | data-testid                |
| ---------------------- | -------------------------- |
| Profile card container | `test-profile-card`        |
| Name                   | `test-user-name`           |
| Bio                    | `test-user-bio`            |
| Time (ms)              | `test-user-time`           |
| Avatar                 | `test-user-avatar`         |
| Social links container | `test-user-social-links`   |
| Social links (example) | `test-user-social-twitter` |
| Hobbies list           | `test-user-hobbies`        |
| Dislikes list          | `test-user-dislikes`       |

---

## ⏱ Time Behavior

* Uses `Date.now()` to display **current epoch time in milliseconds**
* Updates every **1000ms (1 second)**
* Includes `aria-live="polite"` so screen readers are notified of updates

---

## ♿ Accessibility Notes

* Avatar includes meaningful `alt` text
* Sections are properly labeled using `aria-labelledby`
* Time updates are announced using `aria-live`
* All links are keyboard accessible and focusable
* Visible focus styles are included
* Color contrast meets WCAG AA standards

---

## 📱 Responsiveness

* Mobile: stacked layout
* Tablet/Desktop: avatar positioned beside content
* Flexible layout prevents breaking with long text

---

## 🔗 Social Links Behavior

* Open in a new tab using:

  ```
  target="_blank" rel="noopener noreferrer"
  ```

---

## 🛠 Tech Stack

* HTML5
* CSS3 (Flexbox)
* Vanilla JavaScript

---

## 💡 Possible Improvements

* Add dark mode toggle
* Replace static data with dynamic data source
* Add image upload support
* Convert into reusable component/module

---

## 👨‍💻 Author

Habeeb Taiwo

---

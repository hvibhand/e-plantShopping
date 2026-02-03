# Paradise Nursery (e-plantShopping)

A small **React + Vite** shopping demo for a plant nursery store.  
It includes a landing page, a categorized product grid, and a Redux-powered cart with quantity controls and totals.

---

## Demo Features

### Landing Page
- Full-screen landing page with background image
- “Get Started” button to enter the shop
- About Us section on the landing screen

### Product Catalog
- Products displayed in a responsive grid
- Products grouped by categories (e.g., Air Purifying, Aromatic, Medicinal, etc.)
- Add-to-cart button
  - Disables after adding the item (prevents duplicates)

### Cart
- Cart icon in the header with a **live item count badge**
- Cart view supports:
  - Increase/decrease quantity
  - Delete item
  - Per-item subtotal
  - Grand total amount
- Actions:
  - Continue Shopping (returns to products)
  - Checkout (placeholder action)

---

## Tech Stack

- **React** (UI)
- **Vite** (build tool / dev server)
- **Redux Toolkit** + **react-redux** (state management for cart)
- **CSS** (custom styling)

> Note: React Router is not currently used for navigation in this version.  
> The app switches views using the component state (landing ↔ product list/cart).

---

## Getting Started

### 1) Install dependencies
```bash
npm install
```
### 2) Start the dev server
```bash
npm run dev
```
### 3) Build for production
```bash
npm run build
```
### 4) Preview the production build
```bash
npm run preview
```
---

## Project Structure (src)
```text
src/
AboutUs.jsx, AboutUs.css        # About section shown on landing page
App.jsx, App.css                # Landing page + view switching
ProductList.jsx, ProductList.css# Product catalog + navbar/cart badge
CartItem.jsx, CartItem.css      # Cart UI and quantity controls
CartSlice.jsx                   # Redux Toolkit slice (add/remove/update + selectors)
store.js                        # Redux store setup
main.jsx                        # React entry + Redux Provider
index.css                       # Global styles (currently minimal)
assets/                         # Static assets (e.g., react.svg)
```
---

## State Management (Redux)

The cart is stored in Redux as an array of items:

- Each item follows the shape:
  - `name`
  - `image`
  - `cost` (string like `"$15"`)
  - `quantity`

The slice includes:
- Reducers:
  - `addItem`
  - `removeItem`
  - `updateQuantity`
- Selectors:
  - `selectCartItems`
  - `selectCartCount` (sum of quantities)
  - `selectCartTotal` (sum of item totals)

---

## Notes / Known Improvements

If you’d like to extend this project, good next steps would be:
- Add **React Router** routes for Landing / Products / Cart
- Persist cart to `localStorage`
- Add search/filter/sort for products
- Improve accessibility (keyboard navigation, focus styles, aria labels)
- Add tests (e.g., React Testing Library)

---

## License

This project is for learning/demo purposes. Check the repository license file for details.
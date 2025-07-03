# Food Order Website

## Overview

The **Food Order Website** is an online platform designed to provide users with a seamless experience for browsing, selecting, and ordering food from a variety of categories. This system aims to enhance user convenience by offering a responsive and intuitive interface with features such as menu browsing, cart management, order summary, and checkout.

---
## Admin Access
To access the admin panel and manage products, use the following credentials:

- **Username**: admin@example.com
- **Password**: admin123


## Intended Use

The system is designed for the following user groups:

- **Customers**: Browse products, add items to the cart, and complete purchases.
- **Administrators**: Manage products, orders, inventory, and user accounts (Only frontend).


---

## Project Scope

### Product Overview

The **Online Shopping Cart** is a web-based application built using React, designed to facilitate seamless online shopping by allowing users to browse products, add items to their cart, and complete purchases.

### Features and Functionalities

## Functionalities

- **Homepage**: Displays featured food items, categories, and a carousel.
- **Search**: Users can search products by name.
- **Filtering**: Filters food by category (Pizza, Burger, etc.).
- **Sorting**: Sort products by price (Low to High, High to Low).
- **Cart System**: Users can add/remove items, view cart summary, and proceed to checkout.
- **Checkout**: Simple checkout system showing order summary.
- **Responsive Design**: Mobile-friendly layout.
- **Dark Mode**: Toggle between dark and light themes.
- **Admin Panel**: Allows the admin to add/remove products with details (name, price, category, restaurant, image).

### Target Audience

- Online shoppers looking for a seamless purchasing experience.
- Retailers seeking an efficient e-commerce platform to manage their products.

### Limitations and Constraints

- The initial version will support only web-based platforms.
- Limited to frontend development using React without backend integration.

### Success Criteria

- User-friendly interface and smooth shopping experience.
- Efficient inventory and order management.

---

## Requirements Mapping

### **Business Requirements (BR)** and **Functional Requirements (FR)** Mapping

| **Business Requirement ID** | **Business Requirement Description** | **Functional Requirement ID** | **Functional Requirement Description** | **Test Criteria** |
|-----------------------------|--------------------------------------|-------------------------------|----------------------------------------|------------------|
| **BR-1** | Provide an intuitive homepage with food categories | **FR-1** | Display homepage with featured food items and categories | Verify homepage loads with correct food items and layout |
| **BR-2** | Allow users to browse food items | **FR-2** | Show menu page with food items, images, and descriptions | Verify menu page displays all food items properly |
| **BR-3** | Enable users to filter and search food items | **FR-3** | Implement search bar for finding food items | Verify search results display correct items |
| **BR-3** | Enable users to filter and search food items | **FR-4** | Implement category-based filtering | Verify filtering displays only selected category items |
| **BR-4** | Allow users to add food items to the cart | **FR-5** | Add "Add to Cart" button for each item | Verify items can be added to the cart |
| **BR-4** | Allow users to view and modify the cart | **FR-6** | Display cart page with selected items, quantity, and total price | Verify cart updates correctly when adding/removing items |
| **BR-4** | Allow users to clear cart if needed | **FR-7** | Implement "Clear Cart" button | Verify all items are removed when clearing the cart |
| **BR-5** | Provide a simple checkout process (without backend) | **FR-8** | Display order summary before placing an order | Verify order summary matches cart items |
| **BR-6** | Show static order confirmation message | **FR-9** | Display "Order Placed" message after checkout | Verify confirmation message appears correctly |
| **BR-7** | Ensure the website is responsive | **FR-10** | Implement mobile-friendly design | Verify UI works on mobile, tablet, and desktop |
| **BR-7** | Provide a dark mode option | **FR-11** | Implement dark mode toggle | Verify UI switches between light and dark mode |
| **BR-8** | Provide static informational pages | **FR-12** | Create "About Us" page | Verify About Us page displays correct information |
| **BR-8** | Provide contact details for users | **FR-13** | Create "Contact Us" page with dummy details | Verify contact details are visible on the page |

---

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: React Router
- **Assets**: Images stored in public folder, Product images preloaded via local storage


---



## Project Structure
src/
│
├── assets/ # Static files like images
│ ├── dummy-products/ # Product images
│ └── carousel-images/ # Carousel images
│ └── icons/ #  images
│
├── components/ # Reusable components like Header, Footer, ProductCard, Carousel
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── ProductCard.jsx
│ └── Carousel.jsx
│ └── CartItem.jsx
│
├── pages/ # Page components
│ ├── HomePage.jsx # Homepage displaying products and filters
│ ├── CartPage.jsx # Shopping cart page
│ ├── CheckoutPage.jsx # Order summary and checkout page
│ ├── AdminDashboard.jsx # Admin panel to manage products
│ ├── AdminLoginPage.jsx # login for Admin
│ ├── AboutUsPage.jsx # About us page
│ └── ContactUsPage.jsx # Contact us page
│
├── styles/ # CSS files (Tailwind & custom styles)
│ ├── index.css # Global styles
│ 
│
├── App.jsx # Main app component where routing happens
├── index.js # Entry point for the app
└── .gitignore # Git ignore file


## Setup Instructions
### Prerequisites:
- **Node.js**: Ensure that you have **Node.js** and **npm** (Node Package Manager) installed.

### Steps to Run the Project:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/product-list.git
cd product-list
```

### 2. Install dependencies
```bash
npm install
```
### 3. Run the development server
```bash
npm run dev
```
 ### 4. Open in browser
```bash
Go to: http://localhost:5173
```


###  Testing 

The website has been tested for:

Basic functionality: Browsing products, searching, filtering, adding/removing from the cart, and checkout.

Responsive design on mobile and desktop.

Admin panel for managing products.

Testing Notes:
Check if all products are visible immediately when the page is loaded.

Ensure the cart functionality works properly, including the adding and removing of products.

Validate that the dark/light mode toggle works across pages.

4. **Deployed on**



Vercel:https://food-order-website-virid.vercel.app/

GitHub Pages: https://github.com/sooryashibu/food-order-website


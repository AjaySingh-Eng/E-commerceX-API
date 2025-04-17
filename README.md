# 🛍️ E-commerceX-API

**E-commerceX-API** is a scalable, Firebase-integrated eCommerce backend and frontend solution designed for modern retail platforms. Built using **Next.js** and **Firebase**, it supports high concurrency and real-time product, customer, and order management.

---

## 🚀 Features

- ✅ **JWT-based User Authentication** via Firebase Auth (Email/Password, Google Sign-in)
- 📦 **Product Management** with full CRUD operations
- 🔍 **Search, Filter & Sort** for products
- 🛒 **Cart System** with quantity control and real-time sync
- 📄 **Order Management** with Firestore backend
- 📊 Real-time database with **Firebase Firestore**
- 🌈 Responsive frontend built using **Tailwind CSS**
- 🔐 Secured API endpoints
- 🧠 Smart architecture to support future features like recommendations, coupons, payments, etc.

---

## 📂 Tech Stack

| Technology     | Role                          |
|----------------|-------------------------------|
| Next.js        | Full-stack React framework     |
| Firebase       | Backend as a Service (BaaS)    |
| Firestore      | NoSQL Realtime DB              |
| Firebase Auth  | Authentication & JWT           |
| Tailwind CSS   | UI Styling                     |
| Vercel / Firebase Hosting | Deployment Platform |

---

## 📁 Folder Structure
/src /app /[routes] /components /ui /lib /hooks /public /firebase.json /README.md

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/E-commerceX-API.git
cd E-commerceX-API
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Run the Development Server
```bash
npm run dev
```
Access the app at: http://localhost:9002/

---

🔐 Firebase Setup
Go to Firebase Console

Create a project and add Firebase to your web app

Enable Authentication (Email/Password, Google)

Create Firestore Database

Configure your Firebase SDK in the .env.local file:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```
📦 Deployment
You can deploy the app using:

Firebase Hosting:
```bash
firebase deploy
```
Vercel (preferred for SSR + CI/CD):

Push the code to GitHub

Connect repo on vercel.com

Add environment variables in project settings

Deploy 🚀

---

### 🧪 API Overview
The project includes REST API routes for:

## Products

- GET /api/products — list all products

- POST /api/products — add a new product

- PUT /api/products/:id — update a product

- DELETE /api/products/:id — delete a product

## Customers

- GET /api/customers

- POST /api/customers

- Orders

- GET /api/orders

- POST /api/orders

---

### ✅ To Do
- Payment Integration (Razorpay/Stripe)

- Product Reviews & Ratings

- Coupon System

- Admin Dashboard

 ---

 👨‍💻 Author
### Ajay Kumar Singh

- [GitHub](https://github.com/AjaySingh-Eng)
- [LinkedIn](https://www.linkedin.com/in/ajay-singh-b087b4304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)


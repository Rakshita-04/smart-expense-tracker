###  💰Smart Expense Tracker

[![Vercel Deploy](https://vercelbadge.vercel.app/api/Rakshita-04/smart-expense-tracker)](https://smart-expense-tracker-smoky.vercel.app)  
[![GitHub Stars](https://img.shields.io/github/stars/Rakshita-04/smart-expense-tracker?style=flat&color=yellow)](https://github.com/Rakshita-04/smart-expense-tracker/stargazers)  
[![GitHub Forks](https://img.shields.io/github/forks/Rakshita-04/smart-expense-tracker?style=flat&color=blue)](https://github.com/Rakshita-04/smart-expense-tracker/network/members)  

A modern web application to track, categorize, and analyze your expenses with ease. Stay financially organized with insightful analytics and a clean, responsive design.

### 🔗Live Demo
[smart-expense-tracker-smoky.vercel.app](https://smart-expense-tracker-smoky.vercel.app)


### 📖Project Description  

**Smart Expense Tracker** helps users manage their **personal finances** by recording, categorizing, and analyzing expenses. With an interactive dashboard, filtering options, and visual charts, users can gain insights into their spending patterns and make smarter financial decisions.  

Whether it’s daily coffee runs, monthly subscriptions, or overall budget planning, **Smart Expense Tracker** makes money management simple, secure, and accessible from anywhere.  


### ✨Features  

- ➕ **Add & Manage Expenses** – Record expenses with category, amount, and description  
- 📊 **Dashboard Overview** – Get a snapshot of your spending habits  
- 📅 **Filters** – View expenses by date and category  
- 📈 **Visual Analytics** – Interactive charts to track trends  
- 🔐 **Authentication** – Secure login & personalized accounts  
- 📱 **Responsive UI** – Optimized for desktop and mobile  
- ☁️ **Cloud Deployment** – Hosted on **Vercel** for fast access

## 🛠️ Tech Stack  

- **Languages:** TypeScript,CSS,JavaScript
- **Framework:** Next.js ⚛  
- **Styling:** Tailwind CSS  
- **State Management:** React Hooks  
- **Database :** Local JSON
- **Deployment:** Vercel


### ⚙️Installation & Setup  

1. **Clone the repository**  

```bash
git clone https://github.com/Rakshita-04/smart-expense-tracker.git
cd smart-expense-tracker
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
   npm run dev
```

4. ** Build for production **
```bash
npm run build
npm start
```

### 🚀Deployment

This project is deployed on Vercel. To deploy your own instance:

- Push the project to GitHub
- Go to Vercel and import your repo  
- Add environment variables in the Vercel dashboard  
- Deploy with a single click
- ## 📂 Project Structure
<details>
<summary>Click to expand 📁</summary>

```plaintext
Smart-Expense-Tracker
├── app/ # Next.js App Router (layout, pages, etc.)
│ ├── api/ # API routes (backend logic if used)
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout
│ └── page.tsx # Main landing page
├── components/ # Reusable UI components
│ └── ui/ # ShadCN/UI based components (buttons, cards, forms, etc.)
├── data/ # Static JSON data (expenses.json, users.json)
├── hooks/ # Custom React hooks
├── lib/ # Utility functions
├── public/ # Public assets (logos, images, placeholders)
├── styles/ # Styling files (Tailwind + CSS)
├── .gitignore # Git ignore rules
├── components.json # ShadCN components config
├── next.config.mjs # Next.js configuration
├── package.json # Dependencies & scripts
├── tsconfig.json # TypeScript configuration
├── tailwind.config.ts # Tailwind CSS config
└── README.md # Documentation


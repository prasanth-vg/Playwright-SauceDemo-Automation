# Playwright SauceDemo Automation

A professional UI test automation framework built using **Playwright with TypeScript** for automating the SauceDemo application.

This project demonstrates practical automation concepts including **Page Object Model (POM), Custom Fixtures, reusable page components, XPath/CSS locators, environment-based configuration, and Playwright Test**.

---

## 📌 Project Objectives

The objective of this project is to build a maintainable and scalable Playwright automation framework following real-world QA automation practices.

Key areas covered:

- Playwright UI automation
- TypeScript
- Page Object Model (POM)
- Custom Playwright Fixtures
- Reusable page components
- CSS and XPath locators
- Test steps and assertions
- Environment-based configuration
- Multi-browser execution
- Git & GitHub integration
- Jenkins CI execution

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Playwright | UI test automation |
| TypeScript | Programming language |
| Node.js | Runtime environment |
| Playwright Test | Test execution and assertions |
| Page Object Model | Maintainable test architecture |
| Custom Fixtures | Reusable test dependencies |
| XPath / CSS | Element identification |
| dotenv | Environment configuration |
| Git | Version control |
| GitHub | Source code repository |
| Jenkins | CI/CD execution |

---

## 📂 Project Structure

```text
Playwright-SauceDemo-Automation
│
├── fixtures
│   └── CustomFixtures.ts
│
├── pages
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── ProductLandingPage.ts
│   ├── AddToCartPage.ts
│   └── CheckoutPage.ts
│
├── tests
│   ├── LoginTest.spec.ts
│   ├── AddToCartTest.spec.ts
│   └── CheckoutTest.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json

 Automated Modules

 1. Login

- Navigate to SauceDemo
- Enter username and password
- Perform login
- Verify successful navigation to the products page

 2. Add to Cart

- Add products to the shopping cart
- Verify shopping cart badge count
- Navigate to the shopping cart
- Verify selected products
- Remove products from the cart
- Validate updated cart count

 3. Checkout

- Fill customer information
- Continue to checkout overview
- Verify selected product
- Complete the order
- Verify order confirmation message
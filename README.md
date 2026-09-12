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

 🧪 Automated Modules

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

🏗️ Framework Design

The framework follows the Page Object Model (POM) design pattern.

Test Layer
    ↓
Custom Fixtures
    ↓
Page Objects
    ↓
Base Page
    ↓
Playwright
Page Objects

Application-specific locators and actions are maintained inside page classes instead of placing them directly inside test cases.

Custom Fixtures

Playwright custom fixtures are used to initialize and provide page objects directly to test cases.

This helps keep the tests clean, readable, and reusable.

⚙️ Environment Configuration

Environment-specific values are maintained outside the source code using a .env file.

Example:

BASE_URL=https://www.saucedemo.com/
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce

The .env file is intentionally excluded from GitHub using .gitignore.

No credentials or secrets are stored in this repository.

▶️ Installation

Clone the repository:

git clone https://github.com/prasanth-vg/Playwright-SauceDemo-Automation.git

Navigate to the project:

cd Playwright-SauceDemo-Automation

Install dependencies:

npm install

Create a .env file in the project root and add the required environment variables.

Install Playwright browsers:

npx playwright install
▶️ Running Tests

Run the complete test suite:

npx playwright test

Run tests in Chromium:

npx playwright test --project=chromium

Run a specific test file:

npx playwright test tests/LoginTest.spec.ts

Run tests in headed mode:

npx playwright test --headed

Run tests in debug mode:

npx playwright test --debug
🌐 Browser Coverage

The Playwright configuration supports:

Chromium
Firefox
WebKit

Running:

npx playwright test

executes the configured browser projects.

📊 Test Report

After test execution, open the Playwright HTML report using:

npx playwright show-report
🔄 CI/CD

The project is maintained in GitHub and is intended to be integrated with Jenkins for continuous integration and automated test execution.

Planned CI workflow:

Developer
    ↓
Git
    ↓
GitHub
    ↓
Jenkins
    ↓
Install Dependencies
    ↓
Run Playwright Tests
    ↓
Generate Test Report

Environment variables and credentials should be supplied securely through the CI environment rather than committed to source control.

📌 Current Automation Scope

The current framework covers the following SauceDemo workflows:

Login
Product navigation
Add to Cart
Cart validation
Product removal
Checkout
Checkout validation
Order confirmation

The framework will continue to evolve as additional Playwright automation concepts are practiced and integrated.

👨‍💻 Author

Prasanth V G

QA Lead | Software Test Automation

Areas of interest:

Selenium WebDriver
Java
Playwright
TypeScript
API Automation
Git & GitHub
CI/CD

📄 License

This project is created for learning, practice, and automation framework demonstration purposes.
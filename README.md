# Sunflower Assignment Automation Framework

This repository contains an end-to-end (E2E) automation testing suite built with Playwright and TypeScript for the Sunflower Assignment. The framework implements a robust Page Object Model (POM) architecture with custom fixtures to ensure highly stable, maintainable, and parallelizable test execution.

---

## 🛠️ Getting Started

### Prerequisites
Ensure you have Node.js installed on your machine (v18+ recommended).

### Installation
1. Clone the repository and check out the test branch:
```bash
git clone https://github.com/adizait/sunflower-assignment.git
cd sunflower-assignment
git checkout feat/test
```

2. Install dependencies:
```bash
npm i
```

3. Install Playwright browser binaries:
```bash
npx playwright install
```

---

## 🧪 Running Tests

### Open Playwright UI Mode
Great for local development, debugging, and time-travel execution:
```bash
npx playwright test --ui
```

### Run Tests Headlessly (CI Mode)
Executes all E2E specs in the background:
```bash
npx playwright test
```

### Show Last Test Report
View HTML test execution details, screenshots, and trace logs:
```bash
npx playwright show-report
```

---

## 📂 Project Structure

```text
├── consts/            # Test data, configuration constants, and static values
├── e2e/               # Core end-to-end feature spec files (*.spec.ts)
├── fixtures/          # Custom Playwright fixtures extending the base test context
├── models/            # Data models, interfaces, or classes (e.g., User classes)
├── pages/             # Page Object Model files defining selectors and actions
├── utils/             # Reusable helper functions and custom utility scripts
├── .gitignore         # Workspace rules for ignoring dependencies and reports
├── package.json       # Project scripts and managed npm package dependencies
├── playwright.config.ts # Global Playwright execution configurations
└── tsconfig.json      # TypeScript compiler specifications
```

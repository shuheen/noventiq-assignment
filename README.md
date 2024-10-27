
# Noventiq Assignment

This project is a React-based application developed with Vite and TypeScript. It includes key dependencies and configurations for routing, internationalization, testing, linting, and styling with Tailwind CSS.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Features](#features)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Contributing](#contributing)

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/novetiq-assignment.git
   cd novetiq-assignment
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
To run the application locally, use:
```bash
npm run dev
```

This command will start the Vite development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure
```plaintext
├── public               # Static assets
├── src                  # Application source code
│   ├── components       # Shared components
│   ├── locales          # Translation file for supported languages
│   ├── pages            # Application pages
│   ├── providers        # Context Providers
│   ├── tests            # Test Cases
│   ├── types            # Typings
│   ├── index.css        # Global CSS
│   ├── App.tsx          # Main Page
│   └── main.tsx          # Application entry point
├── package.json
└── README.md            # Project documentation
```

## Scripts

| Command           | Description                               |
|-------------------|-------------------------------------------|
| `npm run dev`     | Run the application in development mode   |
| `npm run build`   | Build the application for production      |
| `npm run lint`    | Run ESLint on the project files           |
| `npm run preview` | Preview the production build              |
| `npm run test`    | Run the test suite                        |
| `npm run watch`   | Watch for changes and rerun tests         |
| `npm run format`  | Format code with Prettier                 |

## Features

- **Routing**: Handled by React Router DOM
- **Internationalization**: Implemented with Context API
- **Form Validation**: Utilities included for input validation
- **Testing**: Configured with Jest and Testing Library
- **CSS Styling**: Integrated Tailwind CSS for utility-based styling

## Dependencies

- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-router-dom`: ^6.27.0
- `i18next`: ^23.16.4
- `i18next-browser-languagedetector`: ^8.0.0
- `react-i18next`: ^15.1.0

## Dev Dependencies

- `typescript`: ^5.6.3
- `jest`: ^29.7.0
- `ts-jest`: ^29.2.5
- `@testing-library/react`: ^16.0.1
- `eslint`: ^9.13.0
- `prettier`: 3.3.3
- `tailwindcss`: ^3.4.14

## Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/FeatureName`)
3. Commit your changes (`git commit -m 'Add some FeatureName'`)
4. Push to the branch (`git push origin feature/FeatureName`)
5. Open a pull request

---

This project is part of the Noventiq assignment and follows best practices for TypeScript, testing, and modern React development.

---

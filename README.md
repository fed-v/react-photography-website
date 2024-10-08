# React photography website

This is a simple React portfolio website to demo animations using Framer Motion. Key features include:

* Content and Route Animations: Smooth, interactive animations for content and route transitions powered by Framer Motion.

* Custom Cursor Management: A global cursor state management system using the React Context API, enabling dynamic cursor effects based on mouse movement and viewport size. Cursor appearance changes on hover, with automatic disabling on mobile devices for a seamless user experience.

* CSS Variables: Utilizes CSS variables for scalable and maintainable styling, following modern best practices in CSS architecture.

* Accessible Navigation: keyboard navigation and ARIA attributes to the mobile navigation to significantly improve accessibility.

* Dockerfile to efficiently build the development environment.

## Tech Stack
[![My Skills](https://skillicons.dev/icons?i=react,html,css,tailwind,docker)](https://skillicons.dev)


# Screen captures

![Homepage screen capture](home.png?raw=true "Homepage screen capture")

![Homepage screen capture](contact.png?raw=true "Homepage screen capture")

## Getting Started

Install all dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

Next, run your development server:

```bash
npm start
```

## Docker

Create and start the development container:

  ```bash
  docker compose up --build -d
  ```
  
Stop and remove the development container:

  ```bash
  docker compose down
  ```

## Further reading

For more information about React, checkout the documentation: https://react.dev/learn

For more information on Framer Motion documentation: https://www.framer.com/motion/

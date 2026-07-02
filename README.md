# Jukal Adhitya - 3D Interactive Portfolio

A modern, high-performance, and visually stunning personal portfolio website built with React, Vite, and Three.js. It features smooth 3D interactive graphics, premium glassmorphism styling, a dynamic mouse-glow effect, and an optimized dark/light theme.

## 🚀 Tech Stack

- **Core**: React.js & Vite
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations**: Framer Motion
- **Interactivity**: `react-parallax-tilt` (3D parallax hover effects)
- **Icons**: Lucide React
- **Styling**: Custom CSS variables, responsive design, and CSS Glassmorphism

---

## ✨ Features

- **Interactive 3D Background**: Particle systems and objects that respond smoothly to mouse movements.
- **Dynamic Mouse Glow**: A custom radial glow effect follows the user's cursor across the interface.
- **Glassmorphism UI**: Beautiful semi-transparent panels with borders, blur backdrops, and active shadow glows.
- **Theme Toggle**: Perfectly tailored light and dark modes with smooth transitions.
- **Fully Responsive**: Optimized experience across mobile, tablet, and desktop devices.
- **Detailed Sections**:
  - **Hero**: Clean, engaging landing space with 3D elements.
  - **About Me**: Brief bio, core experience, and key statistics.
  - **Experience**: Timeline of professional and internship experience (e.g., Ford Motor, SRM Technologies).
  - **Projects**: Interactive project showcases.
  - **Skills**: Categorized skills list utilizing 3D tilt cards.
  - **Certifications & Awards**: Oracle Certifications, NPTEL awards, and hackathon accomplishments.
  - **Contact**: Interactive footer and connection details.

---

## 📂 Folder Structure

```text
Portfolio/
├── public/                 # Static assets (images, certificates, resume)
│   ├── favicon.svg         # Browser tab icon
│   └── ...                 # Resume PDF, certificates, and media assets
├── src/
│   ├── components/         # Modular React components
│   │   ├── About.jsx       # About Me card layout & statistics
│   │   ├── Background3D.jsx# Three.js 3D interactive particle background
│   │   ├── Certificates.jsx# Certifications & awards display
│   │   ├── Contact.jsx     # Contact & links section
│   │   ├── Experience.jsx  # Interactive professional timeline
│   │   ├── Hero.jsx        # Engaging home landing section
│   │   ├── Navbar.jsx      # Sticky navigation bar with blur effect
│   │   ├── Projects.jsx    # Projects display grid
│   │   ├── Skills.jsx      # Skills grid using 3D parallax tilt cards
│   │   └── ThemeToggle.jsx # Slide toggle for dark/light mode
│   ├── context/
│   │   └── ThemeContext.jsx# React Context provider for theme state
│   ├── App.jsx             # Main layout setup and mouse-glow listener
│   ├── index.css           # Global custom CSS, glassmorphism & color variables
│   └── main.jsx            # Entry script to mount React App
├── index.html              # Core HTML structure
├── netlify.toml            # Netlify build configurations
├── package.json            # Scripts & project dependencies
└── vite.config.js          # React Vite configurations
```

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JukalAdhitya/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the Vite development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Building for Production

To create a production-ready bundle in the `dist` directory:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## ☁️ Deployment

This project is configured for continuous deployment on **Netlify** using git integration. 

The build settings are pre-configured in the `netlify.toml` file:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Base Directory**: Root

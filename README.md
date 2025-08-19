# Kevin Chris Durango - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my skills, experience, and projects as a Junior Web Developer.

## 🌟 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Sections**:
  - Hero section with call-to-action buttons
  - About me with skills highlights
  - Skills showcase with proficiency levels
  - Professional experience timeline
  - Featured projects with detailed descriptions
  - Contact form with validation
- **Performance Optimized**: Fast loading times and smooth scrolling
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with custom properties, Flexbox, Grid
- **Icons**: React Icons, Lucide React
- **Font**: Inter (Google Fonts)
- **Form Handling**: FormSubmit.co (no backend required)

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.17.0 or higher)
- npm (v11.2.0 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dev-portfolio.git
cd dev-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
vercel
```

3. Follow the prompts to configure your deployment.

### Deploy to GitHub Pages

1. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/dev-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Configure Vite for GitHub Pages by updating `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/dev-portfolio/",
});
```

4. Deploy:

```bash
npm run deploy
```

### Deploy to Netlify

1. Build the project:

```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

Or use Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📧 Contact Form Setup

The contact form uses [FormSubmit.co](https://formsubmit.co/) for handling form submissions without a backend. To customize:

1. Replace `kchris.kd@gmail.com` in `src/components/Contact.jsx` with your email
2. Optional: Set up custom confirmation page or redirect

## 🎨 Customization

### Colors

The color scheme is defined in CSS custom properties in `src/index.css`:

- `--primary-color`: Main brand color
- `--secondary-color`: Secondary brand color
- `--accent-color`: Accent color for highlights

### Content

Update the following files to customize content:

- `src/components/Hero.jsx`: Personal information and intro
- `src/components/About.jsx`: Biography and education
- `src/components/Skills.jsx`: Technical skills and proficiency
- `src/components/Experience.jsx`: Work experience
- `src/components/Projects.jsx`: Portfolio projects
- `src/components/Contact.jsx`: Contact information

### Fonts

The project uses Inter font from Google Fonts. To change:

1. Update the font link in `index.html`
2. Update the font-family in `src/index.css`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About

**Kevin Chris L. Durango**

- Email: kchris.kd@gmail.com
- Phone: +63 965 779 8825
- Location: Philippines

Junior Web Developer with experience in React, PHP, MySQL, and modern web technologies. Passionate about creating innovative web solutions and contributing to dynamic development teams.

---

Built with ❤️ using React and Vite+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

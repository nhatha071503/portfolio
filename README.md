# Sarah Chen - Professional Portfolio

A modern, responsive portfolio website showcasing my work as a Senior Frontend Developer and UI/UX Designer.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects and smooth animations
- **Responsive**: Optimized for all devices from mobile to desktop
- **Performance**: Fast loading with optimized assets and code splitting
- **Accessibility**: WCAG compliant with proper semantic HTML and keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and semantic markup

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: CSS3 with custom properties, Flexbox, Grid
- **Build Tool**: Webpack 5
- **Testing**: Jest, React Testing Library
- **Development**: Hot reload, ESLint, Prettier

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About.jsx       # About section with highlights
│   ├── ContactForm.jsx # Contact form with validation
│   ├── Experience.jsx  # Professional timeline
│   ├── Hero.jsx        # Landing section
│   ├── Navbar.jsx      # Navigation component
│   ├── ProjectCard.jsx # Project showcase cards
│   ├── Skills.jsx      # Technical skills grid
│   └── ...
├── data/               # Static data
│   ├── experience.js   # Work experience data
│   └── projects.js     # Portfolio projects
├── pages/              # Main application pages
│   └── App.jsx         # Root component
├── styles/             # Styling
│   └── main.css        # Main stylesheet
└── index.jsx           # Application entry point
```

## 🎨 Design Features

- **Dark Theme**: Modern dark color scheme with blue/purple accents
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Smooth Animations**: CSS transitions and keyframe animations
- **Interactive Elements**: Hover states, focus indicators, and micro-interactions
- **Typography**: Inter font family for optimal readability

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Run tests**:
   ```bash
   npm test
   ```

## 📧 Contact Form Setup

The contact form is configured to work with any backend endpoint. Update the `CONTACT_ENDPOINT` in `src/config.js`:

```javascript
export default {
  CONTACT_ENDPOINT: 'https://your-api-endpoint.com/contact'
};
```

## 🔧 Customization

### Personal Information
Update personal details in:
- `src/components/Hero.jsx` - Name, title, and introduction
- `src/components/About.jsx` - About section content
- `src/data/experience.js` - Work experience
- `src/data/projects.js` - Portfolio projects

### Styling
Customize colors and design in `src/styles/main.css`:
- CSS custom properties for colors
- Component-specific styles
- Responsive breakpoints

### Content
- Replace placeholder images with your own
- Update social media links in footer
- Modify skills and technologies

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: WebP format with fallbacks
- **Caching**: Service worker for offline functionality

## 🌐 Deployment

The portfolio is optimized for deployment on:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the build output

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Please feel free to:
- Report bugs
- Suggest enhancements
- Submit pull requests

---

**Built with ❤️ by Sarah Chen**

*Available for new opportunities - let's build something amazing together!*
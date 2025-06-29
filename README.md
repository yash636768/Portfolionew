# Yash Pratap Singh - Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean and professional design with dark/light mode toggle
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Typewriter Effect**: Dynamic text animation in the hero section
- **Interactive Components**: Hover effects and smooth transitions
- **Download Resume**: Direct PDF download functionality
- **Social Links**: Integration with GitHub, LinkedIn, and LeetCode

## 🛠️ Technologies Used

- **React 19.1.0** - Frontend framework
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 12.19.1** - Animation library
- **React Icons 5.5.0** - Icon library
- **AOS (Animate On Scroll) 2.3.4** - Scroll animations
- **Swiper 11.2.8** - Touch slider
- **React Vertical Timeline Component 3.5.3** - Timeline component

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Build

To create a production build:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🚀 Deployment on Netlify

### Method 1: Drag and Drop (Recommended)

1. Run the build command:
```bash
npm run build
```

2. Go to [Netlify](https://netlify.com) and sign up/login
3. Drag and drop the `build` folder to the Netlify dashboard
4. Your site will be deployed automatically

### Method 2: Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: `18` (or higher)

### Method 3: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build your project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=build
```

## ⚙️ Configuration Files

### netlify.toml
This file is already configured for Netlify deployment:
```toml
[build]
  publish = "build"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### _redirects
Located in `public/_redirects` for client-side routing support.

## 🔧 Troubleshooting

### Common Issues:

1. **Build Fails**: Make sure all dependencies are installed with `npm install`
2. **Routing Issues**: The `_redirects` file handles client-side routing
3. **Node Version**: Ensure Node.js version 18 or higher is used
4. **Missing Files**: Verify all assets (images, PDFs) are in the correct locations

### Environment Variables:
If you need to add environment variables, create a `.env` file in the root directory:
```env
REACT_APP_API_URL=your_api_url
REACT_APP_GA_TRACKING_ID=your_ga_id
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── _redirects
│   ├── resume.pdf
│   └── images/
├── src/
│   ├── components/
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Certifications.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── images/
│   ├── App.js
│   └── index.js
├── netlify.toml
├── tailwind.config.js
└── package.json
```

## 🎨 Customization

### Colors and Styling
- Edit `tailwind.config.js` for theme customization
- Modify `src/App.css` for custom styles
- Update component files for specific styling changes

### Content
- Update personal information in component files
- Replace images in `src/images/` and `public/` directories
- Modify social links in the Hero component

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **GitHub**: [yash636768](https://github.com/yash636768)
- **LinkedIn**: [Yash Pratap Singh](https://linkedin.com/in/yash-pratap-singh-9012362a8/)
- **LeetCode**: [yash70077](https://leetcode.com/yash70077) 
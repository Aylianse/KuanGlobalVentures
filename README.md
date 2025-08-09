# Kuan Global Ventures - Consultancy Website

A modern, elegant, and engaging consultancy website built with Next.js, featuring structured components, smooth animations, image-driven design, and SEO best practices.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Image-Driven Design**: High-quality imagery with overlays and focus areas
- **Contact Form**: Functional contact form with validation and submission feedback
- **Component-Based**: Modular, reusable components for maintainability

## 📋 Pages & Content

### 1. Home Page
- Hero section with captivating tagline and background image
- Short "About Us" overview with link to full page
- Services overview (Kudos Consultancy & SkillForge Placements)
- Impact statistics and testimonials
- Call-to-action sections

### 2. About Us Page
- **About**: Company journey and story
- **Vision**: Long-term goals and aspirations
- **Mission**: Immediate goals and core values
- **Message**: Leadership message to clients

### 3. Services Page
- **Kudos Consultancy**: Recruitment services
- **SkillForge Placements**: Training & placement services
- Detailed service descriptions with features and benefits
- Process workflow and why choose us sections

### 4. Contact Us Page
- Contact form (Name, Email, Subject, Message)
- Contact information and business hours
- Location map placeholder
- FAQ section
- Call-to-action for consultation booking

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd KuanGlobalventures
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
KuanGlobalventures/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── services/
│   │   └── page.tsx        # Services page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Footer component
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── README.md              # Project documentation
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0c4a6e)
- **Secondary**: Gray scale (#f8fafc to #0f172a)
- **Accent**: White and gray variations

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)

### Components
- **Buttons**: Primary and secondary variants with hover effects
- **Cards**: Hover animations and shadow effects
- **Sections**: Consistent padding and spacing
- **Animations**: Fade-in, slide-up, and stagger effects

## 🔧 Customization

### Replacing Images
The website uses placeholder images from Unsplash. To replace them:

1. **Hero Images**: Update URLs in `app/page.tsx`
2. **About Images**: Update URLs in `app/about/page.tsx`
3. **Services Images**: Update URLs in `app/services/page.tsx`

### Updating Content
- **Company Information**: Update in `app/layout.tsx` metadata
- **Contact Details**: Update in `components/Footer.tsx` and `app/contact/page.tsx`
- **Services**: Modify service data in `app/services/page.tsx`

### Adding Google Maps
Replace the map placeholder in `app/contact/page.tsx` with actual Google Maps iframe:

```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **AWS Amplify**: Connect repository and deploy
- **Traditional hosting**: Build with `npm run build` and upload `out/` folder

## 📈 SEO Features

- **Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Ready for schema markup
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Image Optimization**: Next.js Image component with alt text

## 🔄 Future Enhancements

- [ ] Blog/News section
- [ ] Client testimonials carousel
- [ ] Service booking system
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced contact form with file upload
- [ ] Analytics integration

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: info@kuanglobalventures.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion** # KuanGlobalVentures
# KuanGlobalVentures

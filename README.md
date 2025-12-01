# onealhtml - Developer Portfolio

A cyberpunk-inspired developer portfolio featuring a Matrix-style rain animation, glitch effects, and glassmorphism design. Built with Next.js 14, React 18, and TypeScript.

## 🚀 Modern Stack

- **Next.js 14** - App Router with server and client components
- **React 18** - Latest React features with hooks
- **TypeScript** - Full type safety
- **CSS Modules** - Scoped styling with custom animations
- **Tailwind CSS 4** - Utility-first CSS framework

## ✨ Features

- **Matrix Rain Animation** - Canvas-based falling Japanese characters
- **Glitch Text Effects** - Cyberpunk-style text animations
- **Typing Animation** - Smooth typing/deleting effect for roles
- **Glassmorphism UI** - Modern frosted glass design for links and cards
- **Responsive Design** - Works perfectly on all devices
- **SEO Optimized** - Meta tags, Open Graph, and Twitter Cards
- **Performance Optimized** - Lazy loading, React.memo, and efficient re-renders

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles and CSS variables
│   └── favicon.ico         # Site favicon
├── components/
│   ├── MatrixRain.tsx      # Matrix animation canvas
│   ├── GlitchText.tsx      # Reusable glitch text component
│   ├── TypingAnimation.tsx # Typing effect component
│   ├── SocialLinks.tsx     # Social media links
│   └── SoundCloudEmbed.tsx # Music player embed
├── hooks/
│   ├── useMatrixRain.ts    # Matrix canvas animation logic
│   ├── useTypingEffect.ts  # Typing animation logic
│   └── useWindowSize.ts    # Responsive window size hook
└── types/                  # TypeScript type definitions
```

## 🎨 Components

### MatrixRain
Canvas-based Matrix digital rain effect with Japanese katakana characters. Automatically adjusts to window size and uses requestAnimationFrame for smooth 60fps animation.

### GlitchText
Reusable text component with cyberpunk glitch effects using CSS animations and pseudo-elements.

### TypingAnimation
Dynamic typing effect that cycles through different role titles with smooth typing and deleting animations.

### SocialLinks
Glassmorphic link buttons with hover effects for LinkedIn, GitHub, Twitter, and Email.

### SoundCloudEmbed
Embedded SoundCloud player with custom styling to match the cyberpunk theme.

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd onealhtml-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

### Other Platforms
- **Netlify**: Works out of the box
- **AWS Amplify**: Configure with `amplify.yml`
- **Docker**: Build with the included Next.js optimizations

## 🎨 Customization

### Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --primary-color: #0f0;      /* Main green color */
  --bg-color: #000;           /* Background */
  --text-color: #fff;         /* Text color */
  --font-size-title: 5em;     /* Title size */
}
```

### Content
Update text and links in `src/app/page.tsx`:
- Change the name in `<GlitchText text="onealhtml" />`
- Update roles in the `words` array
- Modify social links in `src/components/SocialLinks.tsx`

### Animations
Adjust timing and effects in component CSS modules:
- `MatrixRain.module.css` - Canvas styles
- `GlitchText.module.css` - Glitch animations
- `TypingAnimation.module.css` - Typing effects

## 📝 Migration Notes

This project was migrated from a static HTML/CSS/JS site to Next.js 14 with the following improvements:

1. ✅ Component-based architecture for better maintainability
2. ✅ TypeScript for type safety and better DX
3. ✅ Custom React hooks for reusable logic
4. ✅ CSS Modules for scoped styling
5. ✅ SEO optimization with Next.js Metadata API
6. ✅ Performance optimization with lazy loading and memoization
7. ✅ Better accessibility with proper ARIA labels

Original files are preserved in the `old-site/` directory.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**onealhtml**
- LinkedIn: [@onealhtml](https://www.linkedin.com/in/onealhtml)
- GitHub: [@onealhtml](https://github.com/onealhtml)
- Email: onealhtml@icloud.com

---

Built with ❤️ and ☕ using Next.js


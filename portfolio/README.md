# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio template features a clean design, smooth animations, and is fully customizable.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations and transitions
- 📝 Easy to customize
- 🔍 SEO friendly
- ♿ Accessibility features
- 📬 Contact form
- 🔗 Social media integration

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

1. Update your personal information in the components:
   - `src/components/Hero.tsx`: Update name, role, and description
   - `src/components/About.tsx`: Update about text, skills, and experience
   - `src/components/Contact.tsx`: Update contact information and social links

2. Replace the profile image:
   - Add your profile image to the `public` directory
   - Update the image path in `src/components/Hero.tsx`

### Projects

1. Update your projects in `src/components/Projects.tsx`:
   - Modify the `projects` array with your project information
   - Add project images to the `public/projects` directory
   - Update project links and descriptions

### Styling

1. Colors and theme:
   - The website uses Tailwind CSS for styling
   - Customize colors in `tailwind.config.js`
   - Modify animations in `src/app/globals.css`

2. Fonts:
   - The website uses Inter font by default
   - To change the font, update the font import in `src/app/layout.tsx`

## Deployment

The easiest way to deploy your portfolio is using the [Vercel Platform](https://vercel.com).

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Vercel will detect Next.js and set up the build configuration automatically

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by modern portfolio trends
- Icons from [Heroicons](https://heroicons.com/)
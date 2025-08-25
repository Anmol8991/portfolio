# Netflix-Style Portfolio - Anmol Arora

A creative, Netflix-inspired portfolio website built with React, TypeScript, and Vite. This application presents professional information in an engaging, interactive format that mimics the Netflix user experience.

## 🎯 Overview

This portfolio showcases Anmol Arora's professional experience, skills, projects, and personal interests through an innovative Netflix-style interface. Users can navigate through different "profiles" (recruiter, developer, stalker) to view tailored content, just like Netflix's profile selection system.

## ✨ Features

### 🎬 Netflix-Style Experience

- **Animated Netflix Title Screen**: Interactive logo with sound effects and smooth animations
- **Profile Selection**: Choose between different viewing modes (recruiter, developer, stalker)
- **Browse Interface**: Netflix-style "Who's Watching?" profile selection screen
- **Responsive Design**: Optimized for all device sizes

### 📱 Profile-Based Content

- **Recruiter Profile**: Professional experience, work permit status, and career highlights
- **Developer Profile**: Technical skills, projects, and development expertise
- **Stalker Profile**: Personal interests, music preferences, and reading habits

### 🗂️ Content Sections

- **Work Experience**: Detailed timeline of professional roles and achievements
- **Skills**: Technical skills organized by categories with descriptions
- **Projects**: Portfolio of development projects with technologies used
- **Certifications**: Professional certifications and achievements
- **Blogs**: Written content and articles
- **Music**: Personal music preferences and favorites
- **Reading**: Books and reading materials
- **Contact Information**: Professional contact details and social links
- **Work Permit**: Visa status and work authorization details

### 🎨 Interactive Elements

- **Smooth Navigation**: React Router with scroll-to-top functionality
- **Animated Components**: CSS animations and transitions
- **Responsive Layout**: Mobile-first design approach
- **Context Management**: React Context for profile state management

## 🛠️ Technology Stack

### Frontend

- **React 18.3.1**: Modern React with hooks and functional components
- **TypeScript 4.9.5**: Type-safe development
- **Vite 7.1.2**: Fast build tool and development server
- **React Router DOM 6.27.0**: Client-side routing
- **React Icons 4.10.1**: Icon library
- **React Vertical Timeline Component 3.6.0**: Timeline visualization

### Development Tools

- **@vitejs/plugin-react**: Vite plugin for React
- **vite-plugin-svgr**: SVG support in React
- **TypeScript**: Static type checking
- **ESLint**: Code linting and formatting

## 📁 Project Structure

```
netflix_portfolio/
├── public/                    # Static assets
│   ├── assets/
│   │   ├── images/           # Images and media files
│   │   │   ├── profile/      # Profile pictures
│   │   │   ├── projects/     # Project screenshots
│   │   │   ├── music/        # Music album covers
│   │   │   └── companies/    # Company logos
│   ├── Anmol-Arora-resume.pdf
│   └── favicon.ico
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── NavBar.tsx       # Navigation component
│   │   ├── ProfileCard.tsx  # Profile selection cards
│   │   ├── PlayButton.tsx   # Interactive play button
│   │   └── ScrollToTop.tsx  # Scroll to top functionality
│   ├── contexts/            # React Context providers
│   │   └── ProfileContext.tsx
│   ├── data/               # JSON data files
│   │   ├── config.json     # Main configuration
│   │   ├── projects.json   # Project data
│   │   ├── skills.json     # Skills data
│   │   ├── experience.json # Work experience data
│   │   ├── music.json      # Music preferences
│   │   └── blog.json       # Blog content
│   ├── pages/              # Main page components
│   │   ├── WorkExperience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── ContactMe.tsx
│   │   ├── Music.tsx
│   │   ├── Reading.tsx
│   │   ├── Blogs.tsx
│   │   ├── Certifications.tsx
│   │   └── WorkPermit.tsx
│   ├── profilePage/        # Profile page components
│   │   ├── profilePage.tsx
│   │   ├── ProfileBanner.tsx
│   │   └── TopPicksRow.tsx
│   ├── browse/             # Browse page components
│   │   └── browse.tsx
│   ├── services/           # Data services
│   │   └── dataService.js
│   ├── App.tsx             # Main application component
│   ├── NetflixTitle.tsx    # Netflix-style title screen
│   ├── Layout.tsx          # Layout wrapper
│   └── types.ts            # TypeScript type definitions
├── package.json
├── vite.config.ts
├── tsconfig.json
└── index.html
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd netflix_portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (Vite's default port)

### Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## 🎨 Customization

### Adding New Content

1. **Update JSON files** in `src/data/` directory
2. **Create new page components** in `src/pages/` if needed
3. **Add routes** in `src/App.tsx`
4. **Update types** in `src/types.ts` if adding new data structures

### Styling

- CSS files are co-located with their respective components
- Global styles are in `src/index.css`
- Netflix-style animations are in `src/NetflixTitle.css`

### Profile Configuration

- Profile-specific content is managed through the `ProfileContext`
- Different profiles can show different content based on user type
- Profile images and configurations are in `src/data/image.json`

## 📊 Data Management

The application uses JSON files for content management:

- **config.json**: Main configuration including personal info, education, and contact details
- **projects.json**: Portfolio projects with descriptions and technologies
- **skills.json**: Technical skills organized by categories
- **experience.json**: Work experience timeline
- **music.json**: Music preferences and favorites
- **blog.json**: Blog posts and articles
- **image.json**: Image configurations for different components

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_API_URL=your_api_url_here
VITE_GA_TRACKING_ID=your_google_analytics_id
```

### Vite Configuration

The `vite.config.ts` file includes:

- React plugin configuration
- SVG support via `vite-plugin-svgr`
- Path aliases for cleaner imports
- Development server settings

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1920px and above)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🎵 Audio Features

- Netflix-style sound effects on title screen
- Audio controls and management
- Browser compatibility for audio playback

## 🔍 SEO & Analytics

- Meta tags for social sharing
- Google Analytics integration
- Semantic HTML structure
- Open Graph tags for LinkedIn sharing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 👤 Author

**Anmol Arora**

- Email: anmol.arora8991@gmail.com
- LinkedIn: [Anmol Arora](https://www.linkedin.com/in/anmol-arora-572945188/)
- GitHub: [Anmol8991](https://github.com/Anmol8991)

## 🙏 Acknowledgments

- Netflix for the UI/UX inspiration
- React and Vite communities for excellent tooling
- All contributors and supporters

---

**Note**: This is a personal portfolio project showcasing creative web development skills through a Netflix-inspired interface. The application demonstrates modern React development practices, TypeScript implementation, and responsive design principles.

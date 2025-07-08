# JavaScript Tutorial Application

## Overview

This is a full-stack JavaScript tutorial application built with React and Express. The application provides an interactive learning experience for JavaScript fundamentals through code examples, interactive exercises, and a comprehensive tutorial structure. It uses a modern tech stack with TypeScript, Tailwind CSS, and shadcn/ui components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for database operations
- **Session Management**: PostgreSQL session store (connect-pg-simple)

### UI/UX Design
- **Component Library**: shadcn/ui (Radix UI primitives)
- **Design System**: "New York" style with neutral base colors
- **Theme**: GitHub-inspired color palette with light/dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Tutorial System
- **Interactive Examples**: Code execution with real-time output
- **Syntax Highlighting**: Prism.js integration for code blocks
- **Progress Tracking**: Visual progress indicators and section completion
- **Navigation**: Smooth scrolling navigation with table of contents
- **Mobile Support**: Responsive design with mobile menu

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Schema Location**: `shared/schema.ts` using Drizzle ORM
- **Migration System**: Drizzle Kit for database migrations

### Storage Layer
- **Interface**: `IStorage` abstraction for data operations
- **Implementation**: Memory storage for development, PostgreSQL for production
- **Operations**: CRUD operations for user management

## Data Flow

1. **Frontend Requests**: React components use React Query for API calls
2. **API Routing**: Express routes handle `/api/*` endpoints
3. **Data Processing**: Business logic in route handlers
4. **Storage Operations**: Database operations through storage interface
5. **Response**: JSON responses back to frontend components

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL serverless
- **Authentication**: Express sessions with PostgreSQL store
- **UI Components**: Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS
- **Development**: Vite with React plugin

### Third-Party Services
- **Syntax Highlighting**: Prism.js CDN
- **Development Tools**: Replit integration for development environment

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Features**: Hot module replacement, error overlay, development banner
- **Database**: Uses `DATABASE_URL` environment variable

### Production Build
- **Frontend**: Vite builds to `dist/public`
- **Backend**: esbuild bundles server to `dist/index.js`
- **Command**: `npm run build && npm start`

### Database Management
- **Migrations**: `npm run db:push` applies schema changes
- **Configuration**: `drizzle.config.ts` for database setup

## User Preferences

Preferred communication style: Simple, everyday language.

## GitHub Pages Deployment

The project is now configured for automatic GitHub Pages deployment:

### Files Created for GitHub Pages:
- `.github/workflows/deploy.yml` - GitHub Actions workflow for automatic deployment
- `vite.gh-pages.config.ts` - Vite configuration optimized for GitHub Pages
- `client/src/App.github.tsx` - Simplified app component without backend dependencies
- `client/src/main.github.tsx` - Entry point for GitHub Pages build
- `client/index.github.html` - HTML template with SEO optimization
- `README.md` - Comprehensive documentation with deployment instructions
- `DEPLOYMENT-GUIDE.md` - Step-by-step deployment guide

### Deployment Process:
1. User creates GitHub repository (public)
2. Uploads project files including the `.github/workflows/deploy.yml`
3. Enables GitHub Pages with "GitHub Actions" source
4. Push to main branch triggers automatic build and deployment
5. Site becomes available at `https://username.github.io/repo-name/`

### Technical Implementation:
- Uses CodeMirror editor for professional JavaScript editing experience
- Syntax highlighting with dark theme
- Real-time code execution in browser using eval() with console capture
- Responsive design with Tailwind CSS
- No backend dependencies in GitHub Pages version
- SEO optimized with proper meta tags and Open Graph

## Changelog

Changelog:
- July 08, 2025. Initial setup
- July 08, 2025. Added professional CodeMirror code editor with syntax highlighting
- July 08, 2025. Implemented real JavaScript code execution with console output
- July 08, 2025. Created complete GitHub Pages deployment configuration
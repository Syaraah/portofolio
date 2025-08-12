# Overview

This is a full-stack web application built with React/TypeScript frontend and Express.js backend, designed as a personal portfolio website with contact and comment functionality. The application features a modern developer portfolio with sections for About, Skills, Portfolio projects, Contact form, and visitor comments. It uses a PostgreSQL database for data persistence and implements a clean, responsive design using shadcn/ui components and Tailwind CSS.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation for type-safe forms
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL via Neon Database serverless connection
- **API Design**: RESTful API endpoints for comments and contact messages
- **Validation**: Zod schemas shared between frontend and backend
- **Development Setup**: Hot reload with Vite integration in development mode

## Data Storage Solutions
- **Database**: PostgreSQL with three main tables:
  - `users`: User authentication (prepared for future use)
  - `comments`: Visitor comments with approval system
  - `contact_messages`: Contact form submissions
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL with connection pooling

## Authentication and Authorization
- **Current State**: Basic user schema implemented but not actively used
- **Comment Moderation**: Comments have an approval system (isApproved field)
- **Future Ready**: Infrastructure in place for user authentication when needed

## Development and Deployment
- **Development**: Vite dev server with Express API integration
- **Build Process**: Separate builds for frontend (Vite) and backend (esbuild)
- **Environment**: Environment variables for database configuration
- **Replit Integration**: Configured for Replit deployment with specific plugins and error handling

The architecture follows a clear separation between frontend and backend with shared TypeScript types and validation schemas. The application is designed to be easily deployable on Replit while maintaining good development practices and type safety throughout the stack.
# Sharafat Karim - Portfolio

A modern, responsive personal portfolio website built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/).

## 🚀 Features

-   **Modern Tech Stack**: Built with Next.js (App Router), React, and TypeScript.
-   **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop.
-   **Animations**: Smooth page transitions and element animations powered by Framer Motion.
-   **UI Components**: Accessible and customizable components built using Radix UI primitives and styled with Tailwind CSS.
-   **Dark Mode**: Includes theme support (Light/Dark) via `next-themes`.
-   **Dynamic Content**: Data-driven sections for Projects, Education, and Skills.

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Motion](https://motion.dev/) (Framer Motion)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **UI Primitives**: [Radix UI](https://www.radix-ui.com/)
-   **Forms**: React Hook Form + Zod
-   **Package Manager**: [pnpm](https://pnpm.io/)

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18 or higher recommended)
-   [pnpm](https://pnpm.io/) (recommended package manager)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/SharafatKarim/SharafatKarim.github.io
    cd SharafatKarim.github.io
    ```

2.  Install dependencies:

    ```bash
    pnpm install
    ```

### Running the Development Server

Start the local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create an optimized production build:

```bash
pnpm build
```

After building, you can start the production server:

```bash
pnpm start
```

## 📂 Project Structure

```
portfolio-v0/
├── app/                # Next.js App Router pages and layouts
├── components/         # React components (UI, specific sections like Hero, About)
├── data/               # Static data files (projects, skills, education)
├── lib/                # Utility functions
├── public/             # Static assets (images, icons)
└── ...
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).

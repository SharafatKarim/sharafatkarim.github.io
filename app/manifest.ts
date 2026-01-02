import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Md Sharafat Karim - Developer Portfolio',
    short_name: 'Sharafat Portfolio',
    description: "Computer Science & Engineering student at PSTU. There's no end to EXPLORATION! Portfolio showcasing projects, education, and tools.",
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}

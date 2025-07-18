import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Smart Expense Tracker ',
  description: 'A full-stack web app for tracking daily expenses with real-time updates, interactive charts, and a modern animated UI using React and Node.js.',
  generator: 'React.js, Tailwind CSS, JavaScript, Node.js, Express.js, Chart.js, framer-motion',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

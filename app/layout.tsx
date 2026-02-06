import type { Metadata } from 'next'
import './globals.css'
import Background from '@/components/Background'
import EasterEggs from '@/components/EasterEggs'

export const metadata: Metadata = {
  title: 'Mustejab Khan | QA Engineer & Automation Specialist',
  description:
    'Results-oriented QA Engineer with 5+ years of experience in automation, API testing, performance testing, and CI/CD pipelines. Team lead at Dassault Systèmes.',
  keywords: [
    'QA Engineer',
    'Automation',
    'Performance Testing',
    'API Testing',
    'SDLC',
    'Selenium',
    'JMeter',
    'Postman',
  ],
  authors: [{ name: 'Mustejab Khan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Mustejab Khan | QA Engineer & Automation Specialist',
    description:
      'Results-oriented QA Engineer with 5+ years of experience in automation, API testing, and performance testing.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mustejab_pf/favicon.ico" />
      </head>
      <body className="antialiased relative">
        <Background />
        <EasterEggs />
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BootstrapClient from '@/components/BootstrapClient'

export const metadata: Metadata = {
  title: 'TerribleSoft™ — Enterprise Solutions You Can Almost Use',
  description: 'TerribleSoft™ - Enterprise software solutions for modern businesses. ClusterFox™ cluster management. PayRollPro™ payroll.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

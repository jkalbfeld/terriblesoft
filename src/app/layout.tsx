import type { Metadata } from 'next';
import BootstrapClient from '@/components/BootstrapClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'TerribleSoft™ — Enterprise Solutions You Can Almost Use',
  description: 'TerribleSoft™ - Enterprise software solutions for modern businesses. ClusterFox™ cluster management. PayRollPro™ payroll. [KEYWORDS: enterprise software, cluster management, payroll, HR, best enterprise software 2024, ClusterFox review]',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
  );
}

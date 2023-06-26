import { Footer } from '@/components/Footer';
import './globals.css';
import { Navbar } from '@/components/Navbar';
export const metadata = {
  title: 'Flexxible',
  description: 'Showcase and discover projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main>
          {children}
        </main> 
        <Footer></Footer>
        </body>
    </html>
  )
}

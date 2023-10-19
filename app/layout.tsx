import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/provider/modal-provider'
import { ToastProvider } from '@/provider/toast-provider'
import { ThemeProvider } from '@/provider/theme-providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'E-Commerce Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
          >
        <ToastProvider />
        <ModalProvider />
        {children}
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  )
}

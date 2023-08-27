'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@material-tailwind/react"
import { Provider } from 'react-redux'
import { store } from '@/stores'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </Provider>
    </ThemeProvider>
  )
}

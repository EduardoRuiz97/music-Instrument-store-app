import { ReduxProvider } from '@/redux/provider';
import '../styles/globals.css';

export const metadata = {
  title: 'Melody Mart',
  icons: {
    icon: [
      '/favicon.ico?=v4',
    ],
    apple: [
      '/apple-touch-icon.png?=v4',
    ],
    shortcut: [
      '/apple-touch-icon.png',
    ]
  },
  manifest: '/site.webmanifest'
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <head>
          <link rel='icon' href='/favicon.ico' />
        </head>

        <body>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </body>
    </html>
  )
}

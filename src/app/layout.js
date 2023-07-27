import { ReduxProvider } from '@/redux/provider';
import '../styles/globals.css';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </body>
    </html>
  )
}

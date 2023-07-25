import '../styles/globals.css';
import store from '@/store';
import { Provider } from 'react-redux';
import Layout from '@/components/Layout/Layout';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}

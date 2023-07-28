
import Layout from '@/components/Layout/Layout';

export const metadata = {
  title: 'Melody Mart - Home',
  description: 'Melody Mart Home Page',
}

export default async function RootLayout({ children }) {

  return (
    <Layout >
      {children}
    </Layout>
  )
};



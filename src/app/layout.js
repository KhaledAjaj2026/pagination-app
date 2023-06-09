import styles from '../../styles/Home.module.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={styles.body_style}>{children}</body>
    </html>
  )
}

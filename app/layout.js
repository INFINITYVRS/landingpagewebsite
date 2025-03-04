import "./globals.css"

export const metadata = {
  title: "About Us | Kineton",
  description: "Learn about Kineton and our mission to navigate the digital landscape for success",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stream World',
  description: 'Stream World entertainment catalog',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}

import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' });
const baiJamjuree = Bai_Jamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' });

export const metadata = {
  title: 'Time Capsule',
  description: 'A time capsule for the future. Build with reactjs, nextjs, tailwindcss, and typescript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body 
      className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100 `}>{children}
      </body>
    </html>
  )
}

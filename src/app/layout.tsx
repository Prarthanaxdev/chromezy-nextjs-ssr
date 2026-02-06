import { Sora, Inter } from 'next/font/google';
import NavBar from '../components/layout/navBar';
import ScrollBallImage from '../components/layout/scrollBallImage';
import ScrollTriangleImage from '../components/layout/scrollTriangleImage';
import ScrollWhiteBall from '../components/layout/scrollWhiteBall';
import '../globals.css';

const SoraFont = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--SoraFont',
});

const InterFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--InterFont',
});

export const metadata = {
  title: 'Chromezy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body
        className={`h-full overflow-x-hidden bg-[#151A2C] bg-[url(/images/background.png)] bg-contain font-sora text-white ${SoraFont.variable} ${InterFont.variable} antialiased`}
        id="Home"
      >
        <NavBar />
        <ScrollBallImage />
        <ScrollTriangleImage />
        <ScrollWhiteBall />
        {children}
      </body>
    </html>
  );
}

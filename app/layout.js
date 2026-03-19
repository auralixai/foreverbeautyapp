import './globals.css';
import Navbar from './components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white antialiased font-sans">
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}

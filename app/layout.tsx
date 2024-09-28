
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import { PageProvider } from "./PageContext";



const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "WeCOMMERCE",
  description: "online store for everyone",
};

export const viewport: Viewport = {
  themeColor: '#A3E635',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <PageProvider>
          {children}
          <ToastContainer />
        </PageProvider>
      </body>
    </html>
  );
}
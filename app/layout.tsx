export const dynamic = 'force-dynamic'
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { PageProvider } from "./PageContext";
import Head from 'next/head';  


const poppins = Poppins({
  subsets: ['latin'],
  weight: [ "100", '200' , '300',  '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "WeCOMMERCE",
  description: "online store for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <meta name="theme-color" content="#4CAF50" /> {/* Add this line */}
      </Head>
      <body className={poppins.className}>
      <PageProvider>
      {children}
      </PageProvider>
      </body>
    </html>
  );
}

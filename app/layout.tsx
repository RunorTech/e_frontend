export const dynamic = 'force-dynamic'
import type { Metadata, Viewport  } from "next";
import { Poppins } from "next/font/google";
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
  themeColor: '#32CD32',
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
        </PageProvider>
      </body>
    </html>
  );
}


{/* <meta name="apple-mobile-web-app-capable" content="yes" /> */}
{/* <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> */}
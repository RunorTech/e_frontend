import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: '#000111',
}

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
      <>
        {children}
      </>
    );
  }
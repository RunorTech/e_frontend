import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: '#000223',
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
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: '#131630dc',
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
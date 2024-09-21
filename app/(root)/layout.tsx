import NavBar from "@/components/NavBar";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
import Footer from "./component/Footer";
import Header from "./component/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        

      </head>
      <body>
      <Header/>
        {children}
        <Footer/>
      </body>
</html>
);
}











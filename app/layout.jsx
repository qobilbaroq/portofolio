import "./globals.css";
import "lenis/dist/lenis.css";

export const metadata = {
  title: "Baroq | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

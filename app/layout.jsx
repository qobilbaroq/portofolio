import {  Work_Sans} from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata = {
  title: "Baroq | portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

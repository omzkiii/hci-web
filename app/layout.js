import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    <Navbar/>
    <div className="bg-white text-black font-rye min-h-screen flex flex-col">
      {children}
    </div>
    </body>
    </html>
  );
}
//{{backgroundImage: 'url(https://www.ancient-origins.net/sites/default/files/field/image/Prometheus-giving-man-fire-Greek-mythology.jpg)', backgroundPosition: 'top', backgroundSize: '100vw 60vh'}}

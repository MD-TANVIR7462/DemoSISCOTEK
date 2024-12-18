import "./globals.css";
import { Inter } from "next/font/google";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { MouseFollower } from "@/components/ui/mouse-follower";
import { Navbar } from "@/components/Shared/navbar";
import { Footer } from "@/components/Shared/footer";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <MouseFollower />
        <BackgroundEffects />
        <Navbar />
        <div className="bg-gray-900"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}

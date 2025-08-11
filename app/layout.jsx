import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Oluwashola || MrOLU - Creative Frontend Developer",
  description:
    "I am a creative frontend developer with a passion for building elegant digital experiences.",
  manifest: "/manifest.json",
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  themeColor: "#00ff99",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable} suppressHydrationWarning={true}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

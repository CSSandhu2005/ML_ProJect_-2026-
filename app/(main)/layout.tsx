import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/mini-navbar";
import Demo from "@/components/demo";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ML Project",
  description: "Your AI powered app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full overflow-x-hidden",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        "dark",
      )}
    >
      <body className="flex flex-col overflow-x-hidden">
        <ClerkProvider>
          <Navbar />
          <main>{children}</main>
          <Demo />
        </ClerkProvider>
      </body>
    </html>
  );
}

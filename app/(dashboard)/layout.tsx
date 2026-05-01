import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SessionNavBar } from "@/components/ui/sidebar";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/"); // or wherever your SignInButton is
  }

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
      <body className="flex h-screen w-screen flex-row">
        <SessionNavBar />
        <main className="flex h-screen grow flex-col overflow-hidden pl-12">
          {children}
        </main>
      </body>
    </html>
  );
}

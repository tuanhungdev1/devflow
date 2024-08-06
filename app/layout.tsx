import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "DevFlow is the go-to platform for developers and tech enthusiasts seeking answers to coding challenges, expert advice, and the latest technology trends. Our community-driven site provides a rich resource of Q&A forums, tutorials, and industry insights. Connect with professionals and hobbyists, enhance your skills, and stay updated with the evolving tech landscape. DevFlow—your destination for coding solutions and knowledge sharing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} font-sans`}>
          <h1 className="font-bold">Hello</h1>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

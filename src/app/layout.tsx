"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LangContext } from "@/context";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raven Studio",
  description:
    "Raven Studio is a creative software development studio based in Shanghai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <LangContext.Provider
          value={
            typeof window !== "undefined"
              ? window.location?.pathname === "/cn"
                ? "cn"
                : "en"
              : "en"
          }
        >
          <Navbar />
          {children}
        </LangContext.Provider>
        <Analytics />
      </body>
    </html>
  );
}

"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LangContext } from "@/context";

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
      </body>
    </html>
  );
}

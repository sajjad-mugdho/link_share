import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import AuthProvider from "@/app/auth/Provider";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kahf",
  description: "Link Sharing app by @_sajjad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={instrumentSans.className}>
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}

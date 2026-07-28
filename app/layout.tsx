import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "陳嘉娜｜顧問師",
  description: "專業、認真的顧問師陳嘉娜個人電子名片。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto, Abhaya_Libre } from "next/font/google";
import "./globals.css";
import "./saintia-product-design.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const abhayaLibre = Abhaya_Libre({
  variable: "--font-abhaya-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "圣娅医疗美容医院 | 专业与温度相遇于圣娅",
  description: "上海圣娅医疗美容医院，专业医疗团队与安心服务。",
  icons: {
    icon: "/sites/lsmedical-com-my-17d4a969/root-8a5edab2/images/favicon-cropped-ls-main-logo-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${roboto.variable} ${abhayaLibre.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}

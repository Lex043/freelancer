import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const helveticaNeue = localFont({
  src: [
    {
      path: './fonts/HelveticaNeueLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueBold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica', // Define a CSS variable
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Freelancer - Create, Innovate, Connect",
  description: "A Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.variable} antialiased font-helvetica`}
      >
        {children}
      </body>
    </html>
  );
}

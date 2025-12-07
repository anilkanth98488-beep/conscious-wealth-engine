import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Deva Protocol",
  description: "Conscious Wealth Engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

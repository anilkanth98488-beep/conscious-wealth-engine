// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Deva Protocol',
  description: 'The World’s First AI for Financial Clarity & Cosmic Awareness.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

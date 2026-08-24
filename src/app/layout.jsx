import AppProviders from '@app/providers';
import '../styles/app.css';
import AppLayout from '@components/AppLayout';

export const metadata = {
  title: "Drive X Store",
  description:
    "Drive X is a gaming marketplace for buying and selling game accounts, items, and digital gaming products.",

  keywords: [
    "Drive X",
    "Drive X Store",
    "game accounts",
    "game items",
    "gaming marketplace",
    "digital game store",
  ],

  openGraph: {
    title: "Drive X Store",
    description:
      "A trusted gaming marketplace for game accounts, items, and digital gaming products.",
    type: "website",
    siteName: "Drive X Store",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drive X Store",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Drive X Store",
    description:
      "Shop game accounts, items, and digital gaming products at Drive X Store.",
    images: ["/images/og-image.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body data-transition-phase="idle" data-theme="dark">
        <AppProviders>
          <AppLayout>
            {children}
          </AppLayout>
        </AppProviders>
      </body>
    </html>
  );
}

import { AppProviders } from '@app/providers';
import '../styles/app.css';
import AppLayout from '@components/AppLayout';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body data-transition-phase="idle" data-theme="dark">
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
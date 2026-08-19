import { Preloader } from '@features/animations/utils/pageLoader';
import { HeaderClient } from '@components/layout/HeaderClient';
import { FooterClient } from '@components/layout/FooterClient';
import { NewsletterPopupClient } from '@features/newsletters/NewsletterPopupClient';


export default function AppLayout({ children }) {
  return (
    <>
      <Preloader />
      <HeaderClient />
      {children}
      <FooterClient />
      <NewsletterPopupClient />
    </>
  );
}

import { Preloader } from '@features/animations/utils/pageLoader';
import { HeaderClient } from '@components/layout/HeaderClient';
import { FooterClient } from '@components/layout/FooterClient';
import { NewsletterPopupClient } from '@features/newsletters/NewsletterPopupClient';
import { LazyCustomCursor } from '@components/ui/LazyCustomCursor';
import { GridOverlay } from '@components/ui/GridOverlay';
import { PageTransitionOverlay } from '@features/transitions/components/PageTransitionOverlay';
import { LazyPageTransitionRectangles } from '@features/transitions/LazyPageTransitionRectangles';
import { PageTransitionScrollLock } from '@features/transitions/PageTransitionScrollLock';
import { getHeaderData } from '@lib/sanity/queries/HeaderData';


export default async function AppLayout({ children }) {
  const headerData = await getHeaderData();

  return (
    <>
      <Preloader />
      <PageTransitionScrollLock />
      <PageTransitionOverlay />
      <LazyPageTransitionRectangles />
      <GridOverlay />
      <LazyCustomCursor>
        <HeaderClient
          navItems={headerData?.navItems}
          headerCta={headerData?.headerCta}
          flyout={headerData?.flyout}
          spotsRemaining={headerData?.spotsRemaining}
        />
        <main className="relative z-[1]">
          {children}
        </main>
        <FooterClient />
        <NewsletterPopupClient />
      </LazyCustomCursor>
    </>
  );
}
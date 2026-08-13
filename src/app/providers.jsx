"use client";

import { LenisProvider } from '@providers/LenisProvider';
import PreloaderProvider from '@providers/PreloaderProvider';
import { PageTransitionProvider } from '@providers/PageTransitionProvider';
import { PageEnterProvider } from '@providers/PageEnterProvider';
import { ModalProvider } from '@providers/ModalProvider';
import { ScrambleGroupProvider } from '@providers/ScrambleGroupProvider';
import { FooterVisibilityProvider as FooterProvider } from '@providers/FooterProvider';
import { LazyAnalytics } from '@lib/analytics/LazyAnalytics';

export function AppProviders({ children }) {
  return (
    <LenisProvider>
      <PreloaderProvider>
        <PageTransitionProvider>
          <PageEnterProvider>
            <ModalProvider>
              <ScrambleGroupProvider>
                <FooterProvider>
                  <LazyAnalytics>
                    {children}
                  </LazyAnalytics>
                </FooterProvider>
              </ScrambleGroupProvider>
            </ModalProvider>
          </PageEnterProvider>
        </PageTransitionProvider>
      </PreloaderProvider>
    </LenisProvider>
  );
}
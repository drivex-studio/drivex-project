# drivex-project

current structure:

├── README.md
├── env.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── public
│   ├── fonts
│   │   ├── AktivGroteskCorp-Regular.woff2
│   │   ├── GeistMono-Medium.woff2
│   │   └── GeistMono[wght].woff2
│   └── images
│       └── input-ezgif.com-crop.jpg
└── src
    ├── app
    │   ├── layout.jsx
    │   ├── not-found.jsx
    │   ├── page.jsx
    │   └── providers.jsx
    ├── components
    │   ├── AppLayout.jsx
    │   ├── layout
    │   │   ├── FooterClient.jsx
    │   │   ├── HeaderClient.jsx
    │   │   └── NavigationFlyout.jsx
    │   ├── sections
    │   │   ├── IndexedGridSectionClient.jsx
    │   │   ├── StatsComponentClient.jsx
    │   │   ├── TabsClient.jsx
    │   │   ├── contents
    │   │   │   ├── ContactAsciiImage.jsx
    │   │   │   ├── HeroSectionContent.jsx
    │   │   │   └── LogoSectionContent.jsx
    │   │   └── hero
    │   │       ├── HeroAsciiArt.jsx
    │   │       ├── HeroParallax.jsx
    │   │       ├── HeroScrollPush.jsx
    │   │       └── HeroTextOnly.jsx
    │   ├── theme
    │   │   └── SyncBodyTheme.js
    │   ├── ui
    │   │   ├── CustomCursor.jsx
    │   │   ├── GridOverlay.jsx
    │   │   ├── Input.jsx
    │   │   ├── LazyCustomCursor.js
    │   │   ├── MenuButton.jsx
    │   │   ├── Slider.jsx
    │   │   └── SliderNavigation.jsx
    │   └── utilities
    │       ├── ButtonGroup.jsx
    │       ├── GoodFellaWatermark.jsx
    │       ├── HeaderLogo.jsx
    │       ├── SpotsBadge.jsx
    │       └── getLogoSizeVars.js
    ├── features
    │   ├── animations
    │   │   ├── components
    │   │   │   ├── AnimatedButton.jsx
    │   │   │   ├── AnimatedHeadline.jsx
    │   │   │   ├── AnimatedLink.jsx
    │   │   │   ├── AnimatedProse.jsx
    │   │   │   ├── AnimatedText.jsx
    │   │   │   ├── ScrambleText.jsx
    │   │   │   └── ScrollAnimatedHeadline.jsx
    │   │   ├── hooks
    │   │   │   ├── useDualLayerScramble.js
    │   │   │   └── useScrambleGroup.js
    │   │   └── utils
    │   │       └── pageLoader.js
    │   ├── ascii
    │   │   ├── components
    │   │   │   ├── AsciiCanvas.jsx
    │   │   │   ├── AsciiEffectPass.jsx
    │   │   │   ├── AsciiImage.jsx
    │   │   │   ├── AsciiTypewriter.jsx
    │   │   │   ├── DemandFrameloop.jsx
    │   │   │   └── HoverImage.jsx
    │   │   ├── effects
    │   │   │   └── AsciiEffect.js
    │   │   └── utils
    │   │       ├── asciiDebug.js
    │   │       ├── computeContentBounds.js
    │   │       └── imageUtils.js
    │   ├── newsletters
    │   │   ├── NewsletterForm.jsx
    │   │   ├── NewsletterPopupClient.jsx
    │   │   ├── forms
    │   │   │   └── FormHoneypot.jsx
    │   │   └── useSpamPrevention.js
    │   ├── parallaxs
    │   │   └── InnerParallax.jsx
    │   └── transitions
    │       ├── LazyPageTransitionRectangles.jsx
    │       ├── PageTransitionScrollLock.js
    │       └── components
    │           ├── PageTransitionOverlay.jsx
    │           └── PageTransitionRectangles.jsx
    ├── lib
    │   ├── analytics
    │   │   ├── LazyAnalytics.jsx
    │   │   ├── components
    │   │   │   └── linkedinTracking.jsx
    │   │   ├── index.js
    │   │   └── utils
    │   │       └── posthog.js
    │   ├── sanity
    │   │   ├── client.js
    │   │   ├── components
    │   │   │   ├── ExternalVideo.jsx
    │   │   │   ├── Image.jsx
    │   │   │   ├── SanityButton.jsx
    │   │   │   ├── SanityImage.jsx
    │   │   │   ├── SanityLink.jsx
    │   │   │   ├── SanityMedia.jsx
    │   │   │   ├── SanityRichText.jsx
    │   │   │   └── SanityVideo.jsx
    │   │   ├── queries
    │   │   │   └── HeaderData.js
    │   │   └── utils
    │   │       ├── responsive.js
    │   │       ├── run.js
    │   │       └── sanity-imageutils.js
    │   └── vendor.js
    ├── providers
    │   ├── FooterProvider.jsx
    │   ├── LenisProvider.jsx
    │   ├── ModalProvider.jsx
    │   ├── PageEnterProvider.jsx
    │   ├── PageTransitionProvider.jsx
    │   ├── PostHogProvider.jsx
    │   └── PreloaderProvider.jsx
    ├── shared
    │   ├── constants
    │   │   ├── NavScroll.js
    │   │   ├── constants.js
    │   │   ├── navigation.jsx
    │   │   └── screens.js
    │   ├── contexts
    │   │   └── ScrambleContext.jsx
    │   ├── hooks
    │   │   ├── useAsciiDelay.js
    │   │   ├── useIdleGSAP.js
    │   │   ├── useIsTouchDevice.js
    │   │   ├── useIsoLayoutEffect.js
    │   │   ├── useModal.js
    │   │   ├── useMotionValueEvent.js
    │   │   ├── useMousePosition.js
    │   │   ├── usePageEnter.js
    │   │   └── usePageTransition.js
    │   └── utils
    │       └── easings.js
    └── styles
        └── app.css

42 directories, 111 files
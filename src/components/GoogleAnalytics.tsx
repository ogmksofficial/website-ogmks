'use client';

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

  return <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}

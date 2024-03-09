import type { NextRequest, NextFetchEvent } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { AppConfig } from './utils/AppConfig';

const intlMiddleware = createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

// This function can be exported and used in pages or API routes that require middleware
export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // Execute next-intl middleware for internationalization
  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

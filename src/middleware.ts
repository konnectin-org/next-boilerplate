import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { AppConfig } from './utils/AppConfig';

const intlMiddleware = createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // Execute next-intl middleware for internationalization
  const response = intlMiddleware(req);
  
  // Check for authToken in cookies
  const authToken = req.cookies.get('authToken');
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;

  // If authToken does not exist and path includes '/dashboard', redirect to sign-in
  if (!authToken && req.nextUrl.pathname.includes('/dashboard')) {
    return NextResponse.redirect(`${baseUrl}/${req.nextUrl.locale}/signin`);
  }

  return response;
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
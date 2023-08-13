import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';

import { DEFAULT_LOCALE, LOCALES } from '@intl';

// Attempt to find a locale to match the request or fallback to the default.
function getLocale(request: NextRequest) {
  const headers = request.headers;
  // @ts-ignore - the types don't match because of library differences, but for our needs they're compatible.
  const languages = new Negotiator({ headers }).languages(LOCALES);
  return match(languages, LOCALES, DEFAULT_LOCALE);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname.
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = LOCALES.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale.
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    );
  }
}

export const config = {
  matcher: ['/((?!_next).*)'],
};

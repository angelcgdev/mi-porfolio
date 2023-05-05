import { NextRequest, NextResponse } from "next/server";
import { i18n, Locale } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
const { locales } = i18n;
function getLocale(request: NextRequest): Locale | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale) as Locale;
}

export function middleware(request: NextRequest) {
  // check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // redirect if there is no locale
  if (pathnameMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // skip all internal paths (_next)
    "/((?!_next).*)",
    //optional: only run on root (/)url
    // '/'
  ],
};

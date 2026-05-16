import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const SUPPORTED_LOCALES = ["de", "en"];

export function useLanguage() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();

  const currentLocale = SUPPORTED_LOCALES.find(locale => pathname.startsWith(`/${locale}`)) || "de";

  const switchTo = (locale: string) => {
    if (locale === currentLocale) return;

    let newPath = pathname;
    const regex = new RegExp(`^/(${SUPPORTED_LOCALES.join('|')})(/|$)`);
    
    if (regex.test(pathname)) {
      newPath = pathname.replace(regex, `/${locale}$2`);
    } else {
      newPath = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
    }

    const search = searchParams ? searchParams.toString() : "";
    const target = search ? `${newPath}?${search}` : newPath;

    router.push(target);
  };

  return { currentLocale, switchTo, locales: SUPPORTED_LOCALES };
}
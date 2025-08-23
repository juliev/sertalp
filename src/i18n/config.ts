export enum Locale {
    en = 'en',
    pt = 'pt',
    uk = 'uk',
}

export const locales = Object.values(Locale); // Use this for runtime checks if needed
export const defaultLocale = Locale.en;

export function isValidLocale(locale: Locale) {
    return locales.includes(locale);
}

export const localeNames: Record<Locale, string> = {
    [Locale.en]: 'English',
    [Locale.pt]: 'Português',
    [Locale.uk]: 'Українська',
};

export const localeFlags: Record<Locale, string> = {
    [Locale.en]: '🇺🇸',
    [Locale.pt]: '🇵🇹',
    [Locale.uk]: '🇺🇦',
};

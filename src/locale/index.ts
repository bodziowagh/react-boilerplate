import { LABELS as en } from "./en/index";

export interface Locale {   // TODO: react-intl-redux doesn't provide types (verify)
    locale: string;
    messages: any;
}

export enum SupportedLocales {
    EN = "en"
};

export const locales: Locale[] = [{
    locale: SupportedLocales.EN,
    messages: en
}];

export function getInitialLocale() {
    return locales.find((lang: Locale) => lang.locale === SupportedLocales.EN);
}

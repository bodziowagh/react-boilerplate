import { LABELS as en } from "./en/index";
import { Locale } from "react-intl";

export enum SupportedLocales {
    EN = "en"
};

export const locales: Locale[] = [{
    locale: SupportedLocales.EN,
    fields: en
}];

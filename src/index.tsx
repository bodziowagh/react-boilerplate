import * as React from "react";
import * as ReactDOM from "react-dom";
import { IntlProvider, addLocaleData } from "react-intl";

import "./styles/main.scss";

import { App } from "./script/App";
import { locales, SupportedLocales } from "./locale/index";

// addLocaleData(locales);

ReactDOM.render(
    <IntlProvider
        locale={ SupportedLocales.EN }
        messages={ locales[0].fields }
    >
        <App />
    </IntlProvider>,
    document.getElementById("app")
);

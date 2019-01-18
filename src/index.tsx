import * as React from "react";
import * as ReactDOM from "react-dom";
import { IntlProvider, addLocaleData } from "react-intl";

import "./styles/main.scss";

import { App } from "./script/App";
import { locales, SupportedLocales } from "./locale/index";
import { Provider } from "react-redux";
import { store } from "./redux/store";

addLocaleData(locales);

ReactDOM.render(
    <Provider store={ store }>
        <IntlProvider
            locale={ SupportedLocales.EN }
            messages={ locales[0].fields }
        >
            <App />
        </IntlProvider>
    </Provider>,
    document.getElementById("app")
);

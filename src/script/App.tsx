import React from "react";
import { FormattedMessage } from "react-intl";
import { LOCALE_LABELS } from "../locale/labels/index";
import { Example } from "./components/example";

export class App extends React.Component<{}> {

    render() {
        return (
            <div className="example-app">
                Hello! Put your stuff here.

                <FormattedMessage id={ LOCALE_LABELS.EXAMPLE_LABEL } />

                <Example />
            </div>
        );
    }
}

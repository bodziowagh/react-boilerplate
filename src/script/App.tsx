import React from "react";
import { FormattedMessage } from "react-intl";
import { LOCALE_LABELS } from "../locale/labels/index";

export class App extends React.Component<{}> {

    render() {
        return (
            <div className="example-app">
                Hello! Put your stuff here.

                <FormattedMessage id={ LOCALE_LABELS.EXAMPLE_LABEL } />
            </div>
        );
    }
}

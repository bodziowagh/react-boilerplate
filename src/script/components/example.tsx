import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { StateShape } from "../../redux/store";
import { ExampleStateShape } from "../../redux/example/reducer";

interface ExampleProps {
    example: ExampleStateShape;
}

function mapStateToProps(state: StateShape): ExampleProps {
    return {
        example: state.example
    };
}

export const Example = connect(
    mapStateToProps
)(
    class Example extends Component<ExampleProps> {

        render() {
            const {
                example: { exampleText }
            } = this.props;

            return (
                <div>
                    { exampleText }
                </div>
            )
        }
    }
);

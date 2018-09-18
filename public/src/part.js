import { html } from './html.js';
export class Part {
    constructor(props) {
        this.props = props;
    }
    render() {
        return html.div({ class: 'part' },
            html.div({ class: 'part_title' }, this.props.name),
            html.div({ class: 'part_features' },
                this.props.features.map(feature => {
                    return new Feature(feature);
                })
            )
        );
    }
}
export class Feature {
    constructor(props) {
        this.props = props;
    }
    getClassState(state){
        if (state === 0) {
            return `feature_title---state-ok`;
        } else if (state === 1) {
            return `feature_title--state-warning`;
        }
        else {
            return `feature_title--state-error`;
        }
    }
    render() {
        return html.div({ class: 'part_feature' },
            html.div({ class: `feature_title,${this.getClassState(this.props.state)}`}, this.props.name),
            html.div({ class: 'feature_control' },
                new ControlHeader(),
                html.div({ class: 'feature_control_body' },
                    this.props.controls.map(control => {
                        return new Control(control);
                    })
                )
            )
        );
    }
}
export class Control {
    constructor(props) {
        this.props = props;
    }
    getClassState(state) {
        if (state === 0) {
            return `feature_control_column--state-ok`;
        } else if (state === 1) {
            return `feature_control_column--state-warning`;
        }
        else {
            return `feature_control_column--state-error`;
        }
    }
    render() {
        return html.div({ class: 'feature_control_body_row' },
            html.div({ class: 'feature_control_column' },
                html.span(null, `${this.props.name} : `)
            ),
            html.div({ class: 'feature_control_column,feature_control_column--right' },
                html.span(null, `${this.props.dev}`)
            ),
            html.div({ class: 'feature_control_column,feature_control_column--200,feature_control_column--right' },
                html.span(null, `${this.props.devOutTotal}`)
            ),
            html.div({ class: `feature_control_column,feature_control_column-state,${this.getClassState(this.props.state)}`},
            )
        );
    }
}

export class ControlHeader {
    render() {
        return html.div({ class: 'feature_control_header' },

            html.div({ class: 'feature_control_column' },
                html.span(null, 'Control')),
            html.div({ class: 'feature_control_column,feature_control_column--right' },
                html.span(null, 'Dev')),
            html.div({ class: 'feature_control_column,feature_control_column--200,feature_control_column--right' },
                html.span(null, 'Dev Out Total')),
          
        );
    }
}
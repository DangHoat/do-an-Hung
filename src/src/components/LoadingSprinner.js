import React from "react";

import {
    Spinner
} from "reactstrap";

class LoadingSprinner extends React.Component {
    render() {
        return (
            this.props.type
                ?
                <div className={"text-align-center " + returnWhenThisNull(this.props.className, "")}>
                    <Spinner color="info" size={this.props.size||""}/>
                </div>
                :
            <div className={"text-align-center " + this.props.className||""}>
                <Spinner color="info" type="grow" size={this.props.size||""}/>
                <Spinner color="danger" type="grow" size={this.props.size||""}/>
                <Spinner color="success" type="grow" size={this.props.size||""}/>
            </div>
        )
    }
}

export default LoadingSprinner;
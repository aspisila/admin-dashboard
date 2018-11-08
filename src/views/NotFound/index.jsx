/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

class NotFound extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader color="primary">
                    <h4>Simple Page</h4>
                    <p>
                        Here is a subtitle for this table
                    </p>
                </CardHeader>
                <CardBody>
                    <p>Under development...</p>
                </CardBody>
            </Card>
        )
    }
}

export default NotFound;
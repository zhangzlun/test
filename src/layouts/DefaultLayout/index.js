import React, {Component, Fragment} from 'react';
import compose from 'recompose/compose';
import withWidth from "@material-ui/core/withWidth";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import PageBody from "../../components/PageBody";

class DefaultLayout extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let {outsideBody, children, className} = this.props;

        return (
            <Fragment>

                <TopNav/>

                {children}

                <Footer/>

            </Fragment>
        )
    }
}

export default compose(
    // withStyles(styles),
    withWidth()
)(DefaultLayout);

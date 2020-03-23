import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    pagebody: {
        clear: "both",
        padding: "1px",
        margin: "0 auto 100px",
        ...theme.innerBlock,

        '&::after': {
            clear: "both",
            height: 0,
            visibility: "hidden",
            fontSize: 0,
            display: "block",
            content: "' '"
        }
    }
}));

export default function PageBody({children}) {
    const classes = useStyles();

    return (<div className={classes.pagebody}>{children}</div>)

}

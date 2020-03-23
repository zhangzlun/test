import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    sidecol: {
        float: "right",
        width: "200px"
    }
}));


export default
function Sidecol({children}) {
    const classes = useStyles();

    return( <div className={classes.sidecol}>{children}</div>)

}

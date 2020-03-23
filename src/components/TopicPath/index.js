import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    topicPath: {
        clear: "both",
        margin: "20px auto",
        padding: "12px 0 0 0",
        ...theme.innerBlock
    }

}));

export default function TopicPath() {

    const classes = useStyles();

    return (
        <div className={classes.topicPath}>

        </div>
    )
}
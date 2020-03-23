import React from 'react';
import {makeStyles} from "@material-ui/core";
import PageBody from "../PageBody";

const useStyles = makeStyles(theme => ({
    maincol: {
        float: "left",
        width: "700px"
    },
    maincolAuto: {
        float: "left",
        width: "100%"
    }
}));


export default function Maincol({children, isMaxWidth = true}) {
    const classes = useStyles();

    return (
        <div className={isMaxWidth? classes.maincol: classes.maincolAuto}>
            {children}
        </div>)

}

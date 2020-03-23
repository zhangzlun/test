import React from 'react';
import {makeStyles} from "@material-ui/core";
import BoxHomeContact from "../../../../components/BoxHomeContact";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    footerA: {
        color: '#000',
        background: "#f2f2f2",
        padding: "30px 0 20px"

    },
    footerInner:theme.innerBlock,
    footerB: {
        height: "30px",
        lineHeight: "32px",
        color: "#FFF",
        textAlign: "center",
        backgroundColor: theme.mainColor
    },
}));


export default function Footer() {

    const classes = useStyles();

    return (
        <div className="footer">
            <div className={classes.footerA}>
                <div className={classes.footerInner}>
                    <BoxHomeContact/>
                </div>
            </div>
            <div className={classes.footerB}>
                <div className={`${classes.footerInner}`}>
                    Copyright © 2019. 株式会社往来情報サービス All Rights Reserved.
                </div>
            </div>
        </div>
    )
};

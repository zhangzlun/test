import React from 'react';
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({

    boxH1Ttl:{
        clear: "both",
        width: "700px",
        margin: "0 auto 60px",
        height: "200px",
        overflow: "hidden",
        position: "relative",

        "& img" : {
            position: "absolute",
            top: "10%",
            transform: "translateY(-50%)"
        }
    },


    boxH1TtlNc:{
        clear: "both",
        width: "100%",
        margin: "0 auto 60px",
        overflow: "hidden",

    },
    imgbox:{
        width: "100%"
    }

}));

export default function BoxH1Tt1(props) {

    const classes = useStyles();
    const {title, src, isCon = true}  = props;

    return(
        <div className={isCon ? classes.boxH1Ttl : classes.boxH1TtlNc}>
            <img className={classes.imgbox} src={src}  height="200" alt={title} />
        </div>
    )
}

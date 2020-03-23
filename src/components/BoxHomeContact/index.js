import React from 'react';
import {makeStyles} from "@material-ui/core";
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({

    boxHomeContact: {
        clear: "both",
        padding: "20px 23px",
        margin: "0 auto 10px",
        background: "#f2f2f2",


        "& h2": {
            margin: "0 0 10px",
            lineHeight: 1,
            fontSize: "1.2rem"
        },
        "& h3" : {
            fontSize: "71.4%",
            fontWeight: "bold",
            color: "#333"
        },
        "& .tel" : {
            margin: "-5px 0 5px",
            fontSize: "171.4%",
            fontFamily: "\"Times New Roman\", Times, serif",
            lineHeight: 1.4
        },
        "& .btnth":{
            margin: "5px 0 0 0"
        },
        "& .btnth a":{
            display: "block",
            width: "155px",
            padding: "8px 0 8px 40px",
            fontSize: "78.5%",
            fontWeight: "bold",
            color: "#FFF",
            background: `${theme.mainColor} url(/common/img/ico_arrow_blackwhit_mini.gif) no-repeat 11px 10px;`
        }

    }

}));


export default function BoxHomeContact(props) {

    const classes = useStyles();
    return (

        <div className={classes.boxHomeContact}>

            <h2>Contact</h2>
            <h3>電話でのお問い合わせ</h3>
            <div className={`tel`}>045-875-5818
                <span style={{    fontSize: "20px", fontWeight:"600"}}>（代表）</span></div>
            <h3>メールでのお問い合わせ</h3>
            <div className={`btnth`}>
                <Link to={`/Contact`}>お問い合わせ</Link>
            </div>

        </div>
    )

}

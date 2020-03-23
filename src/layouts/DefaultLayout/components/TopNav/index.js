import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';



let dataList = [
    ["ホーム", "Home"],
    ["会社概要", "Company"],
    ["事業内容", "Service"],
    ["採用情報", "Recruit"],
    ["お問い合わせ", "Contact"]
];


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    header: {
        height: "auto",

        "& li": {
            margin: "0 10px"
        }
    },
    headerInner: theme.innerBlock,
    headerBar: {
        background: "#28334a",
        height: "3px",
        width: "100%"
    },
    headerText: {
        margin: "0 60px",

        "& li": {
            fontWeight: "600"
        }
    },
    inmhs: {
        height: "70px"
    }
}));


export default function TopNav() {

    const classes = useStyles();

    return (
        <div className={classes.header}>

            <div className={classes.headerInner}>

                <nav className="navbar navbar-expand-lg navbar-light">

                    <Link className="navbar-brand" to="/">
                        <img className={classes.inmhs} src="images/IMG_9257.png" alt="logo"/>
                    </Link>

                    <button className="navbar-toggler" type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className={`collapse navbar-collapse ${classes.headerText}`} id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {
                                dataList.map(value => (
                                    <li className="nav-item active">
                                        <Link to={`/${value[1]}`} className="nav-link" href="#">
                                            {value[0]}
                                            <span className="sr-only">(current)</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </nav>

            </div>

            <div className={classes.headerBar}/>

        </div>
    )
}

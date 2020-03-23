import React from 'react';
import {makeStyles} from "@material-ui/core";
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    lnav: {
        margin: "0 0 40px",

        "& h2": {
            margin: "0 0 25px",
            fontSize: "142.8%",
            lineHeight: "1"
        },

        "& .fas": {
            margin: "0 10px 0 0 "
        },

        "& li": {
            margin: "0 0 10px",
            lineHeight: 1.25
        },

        "& li a": {
            color: "#000",
            display: "block",
            padding: "5px 0 5px 10px"
        },

        "& li.current a": {
            color: "#FFF",
            background: "#000"
        }
    }
}));

export default function LNav(props) {
    const classes = useStyles();
    const {title, data, children} = props;

    return (
        <div className={classes.lnav}>
            <h2>{title}</h2>
            <ul>
                {
                    children ? children : data.map(value => (
                        <li>
                            <Link to={value.url}>
                                <i className="fas fa-horizontal-rule fa-xs"/>{value.name}
                            </Link>
                        </li>) )
                }
            </ul>
        </div>
    )
}


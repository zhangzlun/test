import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  boxHomeSolution: {
    clear: "both",
    width: "100%",
    padding: "30px 0",
    margin: "0 0 40px",
    background: "#e5e5e5",

    "& ul": {
      [theme.breakpoints.down("md")]: {
        padding: "0 1rem"
      }
    },

    "& li.child1": {
      margin: "0 3rem 0 0 ",
      float: "left",
      width: "145px",
      height: "97px",
      position: "relative",
      [theme.breakpoints.down("md")]: {
        width: "90%",
        height: "7rem",
        margin: ".4rem 0",
        padding: "1rem .2rem 0"
      }
    }
  },
  boxHomeSolutionInner: theme.innerBlock,

  btnServices: {
    display: "inline-block",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    },
    "& .icon": {
      display: "inline-block",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
        display: "block",
        fontSize: "1rem"
      }
    },
    "& .title": {
      // display: "inline-block"
    },
    "& .title .her": {
      display: "inline-block",
      margin: "0 0 0 .5rem",
      color: "#000"
    },
    "& .herEn": {
      fontSize: ".85rem",
      [theme.breakpoints.down("md")]: {
        fontSize: ".8rem"
      }
    },
    "& .moro": {
      background: theme.mainColor,
      color: "#FFF",
      fontSize: ".6rem",
      padding: "2px 5px",
      width: "100%",

      position: "absolute",
      bottom: 0,
      [theme.breakpoints.down("md")]: {
        width: "100%"
      }
    }
  }
}));

function ServicesBlock(props) {
  const { classes, icon, title } = props;

  return (
    <li className="child1">
      <Link to="/Service">
        <div className={classes.btnServices}>
          <div className="title">
            <div className="icon">
              <i className={`fad ${icon} fa-2x`} />
            </div>
            {/*<h5 className="her">{}</h5>*/}
          </div>
          <span className="herEn">{title}</span>
          <div className="moro">> More</div>
        </div>
      </Link>
    </li>
  );
}

export default function Solution(props) {
  const { list } = props;
  const classes = useStyles();

  return (
    <div className={`boxHomeSolution ${classes.boxHomeSolution}`}>
      <div className={classes.boxHomeSolutionInner}>
        <ul>
          <Grid container spacing={0}>
            {list.map(value => (
              <Grid justify="center" item xs={6} lg={"auto"}>
                <ServicesBlock classes={classes} {...value} />
              </Grid>
            ))}
          </Grid>
        </ul>
      </div>
    </div>
  );
}

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: `"メイリオ", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif`

    }
}));


export default function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            className={classes.root}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}
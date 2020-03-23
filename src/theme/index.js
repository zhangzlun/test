// Material helpers
import { createMuiTheme } from '@material-ui/core';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
    zIndex: {
        appBar: 1200,
        drawer: 1100
    },
    mainColor: "#28334a",
    fontFamily: `"メイリオ", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif`,
    innerBlock:{
        width: "auto",
        margin: "0 auto",
        [defaultTheme.breakpoints.up('md')]: {
            width: "960px",
        },
    }
});

export default theme;

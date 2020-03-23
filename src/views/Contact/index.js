import React  from 'react';
import DefaultLayout from "../../layouts/DefaultLayout";
import TopicPath from "../../components/TopicPath";
import PageBody from "../../components/PageBody";
import Maincol from "../../components/Maincol";
import LNav from "../../components/LNav";
import BoxHomeContact from "../../components/BoxHomeContact";
import Sidecol from "../../components/Sidecol";
import BoxH1Tt1 from "../../components/BoxH1Ttl";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {a11yProps} from "../../util/tool";
import TabPanel from "../../components/TabPanel";
import {makeStyles, useTheme} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor:"#1b62e1",
        display: 'flex',
        height: 224,
    },
    tabs: {
        // borderBottom: `1px solid ${theme.palette.divider}`,
        textAlign: "left",
        centered :false,
        left: 0
    },
    indicator:{
        left: 0,
        backgroundColor: "#28334a"
    },
    scroller: {
        display:"flex",
        justifyContent: "center"
    },
    wrapper: {

        // alignItems: "end "
    }
}));
export default function Contact() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <DefaultLayout>

            <TopicPath/>

            <PageBody>

                <Maincol  isMaxWidth={false}>

                    <BoxH1Tt1
                        src="images/問い合わせ_深灰_改良.png"
                        isCon={false}
                    />

                    <div>
                        <Tabs
                            orientation={matches? "horizontal": "vertical"}
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}
                            indicatorColor={"primary"}
                            classes={{
                                indicator: classes.indicator,
                                scroller: classes.scroller
                            }}
                        >
                            <Tab  classes={{
                                wrapper: classes.wrapper
                            }} label="お問い合わせ" {...a11yProps(0)} />
                        </Tabs>
                    </div>

                    <TabPanel value={value} index={0}>

                        <h2 style={{    borderBottom:" 1px solid #dee2e6", margin: "0 0 10px 0"}}>お問い合わせ</h2>

                        <div className="mb1em">
                            <p>弊社および弊社サービスへのご質問や資料請求などはこちらで承っております。<br/>
                                ご不明点がございましたら、お電話でも承っておりますので、お気軽にお問い合わせください。<br/>
                                （土日祝は休業日とさせていただいております）。</p>
                        </div>

                        <table className="table">
                            <tr>
                                <th width="120" scope="row">電話</th>
                                <td>045-875-5818( 代表 )</td>
                            </tr>
                            <tr>
                                <th>E-mail</th>
                                <td>hr＠alis.co.jp</td>
                            </tr>
                        </table>

                    </TabPanel>





                </Maincol>


            </PageBody>
        </DefaultLayout>
    )
}

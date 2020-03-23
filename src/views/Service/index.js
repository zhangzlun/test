import React from 'react';
import {DefaultLayout} from "../../layouts";
import './index.css';
import Grid from '@material-ui/core/Grid';
import Maincol from "../../components/Maincol";
import PageBody from "../../components/PageBody";
import BoxH1Tt1 from "../../components/BoxH1Ttl";
import TopicPath from "../../components/TopicPath";
import {makeStyles, useTheme} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {a11yProps} from "../../util/tool";
import TabPanel from "../../components/TabPanel";


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
        [theme.breakpoints.down('md')]: {
            display: "flex",
            justifyContent: "center"
        },
    }
}));

export default
function Service() {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (

        <DefaultLayout>

            <TopicPath/>

            <PageBody>

                <Maincol
                isMaxWidth={false}>

                    <BoxH1Tt1
                        src="images/事業内容_深灰_改良.png"
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
                            }} label="事業内容" {...a11yProps(0)} />
                        </Tabs>
                    </div>


                    <TabPanel value={value} index={0}>
                        <h2>事業内容</h2>
                        <hr/>
                        <div className="card card-icon mb-3">

                            <div className="row no-gutters">

                                <div className={`col-md-2 card-imgicon ${classes.wrapper}`}>
                                    <div className="card-imgicon-radius">
                                        <i className="fad fa-code fa-3x imgicon-radius-icon"></i>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">システム・ソフトウェア受託開発事業</h5>
                                        <p className="card-text">弊社は
                                            、お客様のニーズに応える最適のシステムを造ることに注力し、開発経験が豊富な技術者を中心に、高生産性、高品質のサービスを提供しております。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card card-icon mb-3">
                            <div className="row no-gutters">
                                <div className={`col-md-2 card-imgicon ${classes.wrapper}`}>
                                    <div className="card-imgicon-radius">
                                        <i className="fad fa-hands-helping fa-3x imgicon-radius-icon"></i>
                                    </div>

                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">SES（システムエンジニアリングサービス）事業</h5>
                                        <p className="card-text">お客様のシステム開発による各レベルの人材需要に応じて、適切なエンジニア・プログラマの派遣サービスを提供しております。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card card-icon mb-3">
                            <div className="row no-gutters">
                                <div className={`col-md-2 card-imgicon ${classes.wrapper}`}>
                                    <div className="card-imgicon-radius">

                                        <i className="fad fa-wrench fa-3x imgicon-radius-icon"></i>
                                    </div>

                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">システム運用・保守事業</h5>
                                        <p className="card-text">サーバー・ネットワークや汎用機の運用保守、開発保守など、幅広い技術スキルを擁しております。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card card-icon mb-3">
                            <div className="row no-gutters">
                                <div className={`col-md-2 card-imgicon ${classes.wrapper}`}>
                                    <div className="card-imgicon-radius">
                                        <i className="fad fa-cogs fa-3x imgicon-radius-icon"></i>
                                    </div>

                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">RPA（ロボットによる業務自動化）事業</h5>
                                        <p className="card-text">最新テクノロジーであるRPA・AI技術を駆使し、お客様の事務処理効率化をコンサルから設計・開発・導入までトータルに支援しております。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card card-icon mb-3">
                            <div className="row no-gutters">
                                <div className={`col-md-2 card-imgicon ${classes.wrapper}`}>
                                    <div className="card-imgicon-radius">
                                        <i className="fad fa-browser fa-3x imgicon-radius-icon"></i>
                                    </div>

                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">製品等開発</h5>
                                        <p className="card-text">個人・企業向けのソフトウェア製品等を開発中でございます。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </TabPanel>



                </Maincol>

            </PageBody>

        </DefaultLayout>
    )
}

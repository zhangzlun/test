import React  from 'react';
import DefaultLayout from "../../layouts/DefaultLayout";
import TopicPath from "../../components/TopicPath";
import PageBody from "../../components/PageBody";
import Maincol from "../../components/Maincol";
import LNav from "../../components/LNav";
import BoxHomeContact from "../../components/BoxHomeContact";
import Sidecol from "../../components/Sidecol";
import BoxH1Tt1 from "../../components/BoxH1Ttl";
import TabPanel from "../../components/TabPanel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {a11yProps} from "../../util/tool";
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

export default function Recruit() {

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

                <Maincol   isMaxWidth={false}>

                    <BoxH1Tt1
                        src="images/採用情報_深灰_改良.png"
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
                            }} label="採用情報" {...a11yProps(0)} />
                        </Tabs>
                    </div>

                    <TabPanel value={value} index={0}>

                        <h2 >採用情報</h2>

                        <table className="table">
                            <tr >
                                <th width="120" scope="row">募集職種</th>
                                <td>プロジェクトマネージャー(PM)<br/>
                                    プロジェクトリーダー(PL)<br/>
                                    システムエンジニア(SE)<br/>
                                    プログラマー(PG)<br/>
                                </td>
                            </tr>
                            <tr>
                                <th>雇用形態</th>
                                <td>正社員<br/>
                                    契約社員<br/>
                                    個人事業主
                                </td>
                            </tr>
                            <tr>
                                <th>待 遇</th>
                                <td>能力、経験により優遇</td>
                            </tr>
                            <tr>
                                <th>諸 手 当</th>
                                <td>交通費支給、時間外勤務手当支給</td>
                            </tr>
                            <tr>
                                <th>紹 介 金</th>
                                <td>友達を弊社に紹介することで試用期間後5～10万円をあなたへプレゼント！</td>
                            </tr>
                            <tr>
                                <th>福利厚生</th>
                                <td>社会保険完備</td>
                            </tr>
                            <tr>
                                <th>休 暇</th>
                                <td>完全週休２日制(土、日)<br/>
                                    祝日、夏季・年末年始休暇、特別休暇
                                </td>
                            </tr>
                            <tr>
                                <th>昇給・賞与</th>
                                <td>昇給：年1回<br/>
                                    賞与：実績に応じて考慮
                                </td>
                            </tr>
                            <tr>
                                <th>勤 務 地</th>
                                <td>本社所在地または顧客先</td>
                            </tr>
                            <tr>
                                <th>応募資格</th>
                                <td>・システム開発経験一年以上の方<br/>
                                    ・責任を有し、勤務が良い方<br/>
                                    ※ 年齢／学歴／開発言語不問<br/>
                                </td>
                            </tr>
                            <tr>
                                <th>応募方法</th>
                                <td>Email：hr＠alis.co.jp<br/>
                                    電話 ：045-875-5818（代表）<br/>
                                    携帯 ：090-7178-8668（全年無休）
                                </td>
                            </tr>
                        </table>

                    </TabPanel>


                </Maincol>

            </PageBody>

        </DefaultLayout>
    )
}

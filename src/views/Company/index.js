import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import DefaultLayout from "../../layouts/DefaultLayout";
import PageBody from "../../components/PageBody";
import Maincol from "../../components/Maincol";
import TabPanel from "../../components/TabPanel";
import BoxH1Tt1 from "../../components/BoxH1Ttl";
import TopicPath from "../../components/TopicPath";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {a11yProps} from "../../util/tool";


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
    }
}));


function Company({width}) {

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
                    isMaxWidth={false}
                >

                    <BoxH1Tt1
                        src="images/会社概要_深灰_改良.png"
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
                            }} label="社名由来" {...a11yProps(0)} />
                            <Tab classes={{
                                wrapper: classes.wrapper
                            }} label="経営ビジョン" {...a11yProps(1)} />
                            <Tab classes={{
                                wrapper: classes.wrapper
                            }} label="理念" {...a11yProps(2)} />
                            <Tab classes={{
                                wrapper: classes.wrapper
                            }}  label="我々にできること" {...a11yProps(3)} />
                            <Tab classes={{
                                wrapper: classes.wrapper
                            }}  label="会社情報" {...a11yProps(4)} />
                        </Tabs>
                    </div>

                    <TabPanel value={value} index={0}>
                        <h2>社名由来</h2>
                        <hr/>
                        <strong>「オーライ（ALRIGHT）」と「オーライ（往来）」</strong><br/><br/>
                        お客様、社員に社名通り、安心「オーライ（ALRIGHT）」を提供でき、そして、情報だけでなく、気持ちが「オーライ（往来）」する会社です。
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <h2>経営ビジョン</h2>
                        <hr/>
                        いつでもお客様に、「満足」・「安心」を感じていただけるよう、常に「真摯」・「誠実」な態度で業務に取り組むとともに、これらを実現する社員の育成に尽力します。
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <h2>理念</h2>
                        <hr/>
                        「感謝」の気持ちを第一に、常に「技術力」・「生産性」向上に努め、新しいALRIGHT（価値）を創造します。
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <h2>我々にできること</h2>
                        <hr/>
                        <h5> <strong>オーライ</strong>ワン（ALRIGHT Ⅰ）<br/><br/></h5>
                        <h6> <strong>お客様</strong>に安心感を与えること<br/></h6>
                        様々なニーズや問題に対して解決へと導く事ができるようにIT全般の技術プロを目指しています。
                        お客様にとって上質で安心できるサービスを提供します。<br/><br/>
                        <br/>


                        <h5><strong>オーライ</strong>ツー（ALRIGHT Ⅱ）<br/><br/></h5>
                        <h6> <strong>社員</strong>の成長に心掛けていくこと<br/></h6>
                        社員の人格・個性を大切にし、人権尊重の雰囲気に溢れた企業文化の構築に努めています。
                        人を育て、一人一人が能力を最大限に発揮できる環境を創ります。<br/><br/>
                        <br/>


                        <h5><strong>オーライ</strong>スリー（ALRIGHT Ⅲ）<br/><br/></h5>
                        <h6>企業市民として、<strong>社会</strong>に貢献すること<br/></h6>
                        地域社会の一員として、自社を成長させながら、「新しいALRIGHT（価値）を創造し、社会に貢献する」
                        という精神をもとに、持続可能な社会の実現に力を注いでいます。<br/>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <h2>会社情報</h2>

                        <table className="table">
                            <tr>
                                <th width="130" scope="row">会社名</th>
                                <td>
                                    <ul>
                                        <li>株式会社往来情報サービス</li>
                                        <li>（英字表記： Alright Information Services, Ltd.）</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <th >設立日</th>
                                <td>令和元年8月8日</td>
                            </tr>

                            <tr>
                                <th  scope="row">資本金</th>
                                <td>200万</td>
                            </tr>

                            <tr>
                                <th >代表取締役社長</th>
                                <td><p style={{fontSize:"10px"}}>ライ 　シコウ</p>雷　志鋼</td>
                            </tr>

                            <tr>
                                <th>事業内容</th>
                                <td>
                                    <ul>
                                        <li>・コンピュータのソフトウェアの企画、研究、開発、保守</li>
                                        <li>・コンピュータ関連の人材派遣、技術支援</li>
                                        <li>・コンピュータ関連の人材育成、能力開発に関する教育及び研修</li>
                                        <li>・アウトソーシング事業の受託及び請負</li>
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <th>所在地</th>
                                <td>〒222-0021 神奈川県横浜市港北区篠原北一丁目15-4-1</td>
                            </tr>

                            <tr>
                                <th>電話</th>
                                <td>045-875-5818( 代表 )</td>
                            </tr>

                            <tr>
                                <th>主要取引銀行</th>
                                <td>みずほ銀行　芝支店<br/>
                                    横浜信用金庫　新横浜支店<br/>
                                    楽天銀行
                                </td>
                            </tr>

                            <tr>
                                <th>顧問税理士</th>
                                <td>堀口成剛税理士事務所</td>
                            </tr>
                            <tr>
                                <th>顧問社労士</th>
                                <td>社会保険労務士法人プレジール・コンサルティング</td>

                            </tr>

                        </table>
                    </TabPanel>
                </Maincol>

            </PageBody>

        </DefaultLayout>
    )
}

export default withWidth()(Company)

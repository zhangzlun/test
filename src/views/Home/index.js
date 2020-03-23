import React, {Fragment} from 'react';
import './index.css';
import {makeStyles} from "@material-ui/core";

import {DefaultLayout} from "../../layouts";
import {Link} from 'react-router-dom';
import News from "./components/News";
import Carousel from "./components/Carousel";
import PageBody from "../../components/PageBody";
import Solution from "./components/Solution";
import Maincol from "../../components/Maincol";
import Sidecol from "../../components/Sidecol";
import BoxHomeContact from "../../components/BoxHomeContact";

const useStyles = makeStyles(theme => (
    {
        root: {
            flexGrow: 1,
            // [theme.breakpoints.between('lg')]: {
            //     backgroundColor: "#333",
            // },
        }
    }
));

let data = [
    {
        icon: "fa-code",
        title: "システム・ソフトウェア受託開発事業",
        text: "弊社は 、お客様のニーズに応える最適のシステムを造ることに注力し、開発経験が豊富な技術者を中心に、高生産性、高品質のサービスを提供しております。"
    },
    {
        icon: "fa-hands-helping",
        title: "SES（システムエンジニアリングサービス）事業",
        text: "お客様のシステム開発による各レベルの人材需要に応じて、適切なエンジニア・プログラマの派遣サービスを提供しております。"
    },
    {
        icon: "fa-wrench",
        title: "システム運用・保守事業",
        text: "サーバー・ネットワークや汎用機の運用保守、開発保守など、幅広い技術スキルを擁しております。"
    },
    {
        icon: "fa-cogs",
        title: "RPA（ロボットによる業務自動化）事業",
        text: "最新テクノロジーであるRPA・AI技術を駆使し、お客様の事務処理効率化をコンサルから設計・開発・導入までトータルに支援しております。"
    },
    {
        icon: "fa-browser",
        title: "製品等開発",
        text: "個人・企業向けのソフトウェア製品等を開発中でございます"
    }
];


function Home() {

    const classes = useStyles();

    return (
        <DefaultLayout className={classes.root}>

            <Carousel/>

            <Solution
                list={data}
            />

            <PageBody>

                <Maincol
                    isMaxWidth={false}
                >
                    <News/>
                </Maincol>

            </PageBody>

        </DefaultLayout>
    );

}


export default Home;

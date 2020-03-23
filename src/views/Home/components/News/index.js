import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  boxHomeInfo: {
    padding: "0 15px",

    "& h2": {
      float: "left",
      margin: "0 0 40px 0"
    },
    "& .list": {
      clear: "both"
    },

    "& .list li": {
      margin: "0 0 20px",
      fontSize: "92.9%"
    },
    "& .date": {
      float: "left",
      width: " 140px",
      [theme.breakpoints.down("md")]: {
        width: "30%"
      }
    },
    "& .cate": {
      float: "left",
      width: "100px",
      margin: "0 20px 0 0",
      padding: "1px 0 0",
      fontSize: "78.6%",
      textAlign: "center",
      background: "#e5e5e5",
      [theme.breakpoints.down("md")]: {
        width: "15%"
      }
    },
    "& .ttl": {
      margin: "0 0 0 260px",
      lineHeight: "1.6",
      [theme.breakpoints.down("md")]: {
        margin: "0 0 0 51%"
      }
    }
  }
}));

let data = [
  {
    cate: "お知らせ",
    date: "2020年02月07日",
    ttl:
      "新型コロナウイルス感染防止のため、社員にマスクと消毒剤を配布しました。"
  },
  {
    cate: "お知らせ",
    date: "2020年02月03日",
    ttl:
      "新型コロナウイルス感染防止のため、日本語教育と技術勉強会を一時的に停止しました。"
  },
  {
    cate: "お知らせ",
    date: "2020年01月23日",
    ttl: "新年会を開催しました。"
  },
  {
    cate: "お知らせ",
    date: "2020年12月09日",
    ttl: "忘年会を開催しました。"
  },
  {
    cate: "お知らせ",
    date: "2019年10月10日",
    ttl: "新入社員向けITエンジニア研修開始（第一期 JavaWeb編）"
  },
  {
    cate: "お知らせ",
    date: "2019年10月01日",
    ttl: "新入社員向け日本語教育開始（第一期）"
  },
  {
    cate: "お知らせ",
    date: "2019年10月01日",
    ttl: "会社設立懇親会を開催しました。"
  },
  {
    cate: "お知らせ",
    date: "2019年08月08日",
    ttl: "株式会社往来情報サービス本社を設立しました。"
  }
];

export default function News() {
  const classes = useStyles();

  return (
    <div className={classes.boxHomeInfo}>
      <h2>Information</h2>
      <ul className="nav" />
      <ul className="list list_All">
        {data.map(value => (
          <li>
            <div className="date">{value.date}</div>
            <div className="cate">{value.cate}</div>
            <a>
              <div className="ttl">{value.ttl}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

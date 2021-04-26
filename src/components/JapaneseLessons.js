import { useEffect, useState } from "react";
import { toHiragana, toKatakana } from "wanakana";
import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import Button from "./button/CopyButton";
import CopyButton from "./button/CopyButton";
import ArticleItem from "../entity/ArticleItem";

const lessons = [
  {
    title: "FOOD - 1",
    articles: [
      {
        title: "Kanji",
        items: [
          new ArticleItem("茶", "cha(ちゃ)"),
          new ArticleItem("お茶", "ocha(おちゃ)", "🍵 tea (green)"),
          new ArticleItem("ご飯", "gohan(ごはん)", "🍙 riz"),
          new ArticleItem("食べ", "tabe(たべ)", "eat"),
          new ArticleItem("飲", "no(の) ??", ""),
          new ArticleItem("肉", "niku(にく)", "🥩 meat"),
          new ArticleItem("魚", "sakana(さかな", "🐟 fish"),
          new ArticleItem("野菜", "yasai(やさい)", "🥕 vegetables"),
          new ArticleItem("水", "mizu(みず)", "🌊 water"),
        ],
      },
      {
        title: "Lesson",
        items: [
          new ArticleItem("それは", "soreha", "that('s)"),
          new ArticleItem("あれ", "are", "that (one over there (far))"),
          new ArticleItem("それが", "sore", "that (one)"),
          new ArticleItem("これは", "kore", "this (one)"),
          new ArticleItem("どれ", "dore", "which"),
          new ArticleItem("食べません", "tabemasen", "do not eat"),
          new ArticleItem("食べます", "tabemasu", "do eat"),
          new ArticleItem("飲みません", "nomimasen", "do not drink"),
        ],
      },
      {
        title: "Lesson",
        items: [
          new ArticleItem(
            "これは水ですか",
            "koreha mizu desuka",
            "is this water ?"
          ),
          new ArticleItem(
            "これをください",
            "korewo kudasai",
            "this one please"
          ),
          new ArticleItem(
            "これは何ですか？",
            "korewa nandesuka",
            "what is this ?"
          ),
          new ArticleItem(
            "ご飯は食べません",
            "gohan ha tabemasen",
            "i do not eat rice"
          ),
          new ArticleItem("お茶を飲みます", "ochawo nomimasu", "i drink tea"),
          new ArticleItem(
            "どれが水ですか",
            "dorega mizu desuka",
            "Which is water ?"
          ),
          new ArticleItem("いただきます", "itadakimasu", "let's eat (polite)"),
          new ArticleItem(
            "ごちそうさまでした",
            "gochiso osamadeshita",
            "thank you for the meal"
          ),
        ],
      },
    ],
  },
];

export { lessons };

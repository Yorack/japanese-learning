import { useEffect, useState } from "react";
import { toHiragana, toKatakana } from "wanakana";
import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import Button from "./button/CopyButton";
import CopyButton from "./button/CopyButton";
import ArticleItem from "../entity/ArticleItem";

const lessons = [
  {
    title: "INTRO - 1",
    articles: [
      {
        title: "Kanji",
        items: [
          new ArticleItem("出身", "shusshin(しゅっしん)", "(i) am from"),
          new ArticleItem(
            "人",
            "jin (じん)",
            "Ne s'utilise pas seul mais en mode pay + 人"
          ),
          new ArticleItem("本", "hon (ほん)"),
          new ArticleItem("中国", "chuugouku (ちゅうごく)", "China"),
          new ArticleItem("何人", "nanin"),
          new ArticleItem("言い", "ii"),
          new ArticleItem("中村", "nakamura (なかむら)"),
          new ArticleItem("村", "mura (むら)"),
          new ArticleItem("中", "naka (なか) ?"),
          new ArticleItem("学生", "gakusei", "student"),
          new ArticleItem("私", "watashi", "i"),
          new ArticleItem("何", "nani (なに)"),
          new ArticleItem("話せ", "hanase (はなせ)", "can speak"),
          new ArticleItem("日本", "nihon (にほん)", "Japan"),
          new ArticleItem("日本語", "nihongo", "Japanese (speaking / word)"),
          new ArticleItem("英語", "eigo	(えいご)", "english (speaking / word)"),
          new ArticleItem("語", "go ?"),
          new ArticleItem("茂", "shigeru (Male name) しげる", ""),
          new ArticleItem("田中", "tanaka (family name)", ""),
          new ArticleItem("本田", "honda (family name)", ""),
        ],
      },
      {
        title: "Lesson",
        items: [
          new ArticleItem("です", "desu", "(i) am"),
          new ArticleItem(
            "ですか",
            "desuka",
            "are (you/we/they) ? (for a question)"
          ),
          new ArticleItem(
            "はいお願いします",
            "hai onegaishimasu",
            "Yes, please."
          ),
          new ArticleItem("いいえ", "iie", "NO"),
          new ArticleItem("ではありません", "dehaarimasen", "(i) am not"),
          new ArticleItem("私も", "watashi mo", "i am ALSO"),
          new ArticleItem("話せます", "hanasemasu", "(i) can speak"),
          new ArticleItem("話せません", "hanasemasen", "(i) can't speak"),
          new ArticleItem("気", "ki (き)", "NA"),
          new ArticleItem("元気", "genki (げんき)", "well"),
          new ArticleItem("と", "to", "and ()"),
          new ArticleItem("もちろんです", "mochiron desu", "of course"),
          new ArticleItem("ええ", "ee", "yes"),
          new ArticleItem("名前", "namae(なまえ)", "name"),
          new ArticleItem("何ですか？", "nan desuka", "What ?"),
          new ArticleItem("あの", "ano", "uhm (honomatopé :D )"),
          new ArticleItem("僕", "boku (ぼく)", "NA"),
          new ArticleItem("僕は", "bokuha (ぼくは)", "I (le pronom)"),
        ],
      },
      {
        title: "PHRASE",
        items: [
          new ArticleItem(
            "マリアと言います",
            "maria toiimasu",
            "my name is maria"
          ),
          new ArticleItem(
            "英語と日本語が話せます",
            "eigo to nihongo ga hanase masu",
            "i can speak english and japanses"
          ),
          new ArticleItem("ええ、元気です", "ee, genki desu", "yes i am well"),
        ],
      },
    ],
  },
  {
    title: "FOOD - 1",
    articles: [
      {
        title: "Kanji / vocabulary",
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
          new ArticleItem("りんご", "ringo", "🍏 apple"),
        ],
      },
      {
        title: "Pronoum ?",
        items: [
          new ArticleItem("それ", "sore", "that (one)"),
          new ArticleItem("あれ", "are", "that (one over there (far))"),
          new ArticleItem("これ", "kore", "this (one)"),
          new ArticleItem("どれ", "dore", "which"),
        ],
      },
      {
        title: "Eat or drink",
        items: [
          new ArticleItem("食べます", "tabemasu", "do eat"),
          new ArticleItem("食べません", "tabemasen", "do not eat"),
          new ArticleItem("飲みません", "nomimasu", "do drink"),
          new ArticleItem("飲みません", "nomimasen", "do not drink"),
        ],
      },
      {
        title: "Phrase",
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
          new ArticleItem(
            "それは何ですか？",
            "soreha nandesuka",
            "What is that ?"
          ),
          new ArticleItem(
            "お水をください",
            "o mizu wo kudasai",
            "Water please"
          ),
          new ArticleItem("ください", "kudasai", "please"), // todo highlight ?
        ],
      },
    ],
  },
];

export { lessons };

import ArticleItem from "../entity/ArticleItem";
import ArticleItemKanji from "../entity/ArticleItemKanji";

const lessons = [
  {
    title: "Intro- 1",
    articles: [
      {
        title: "Kanji",
        items: [
          new ArticleItem("出身", "shusshin(しゅっしん)", "(i) am from"),
          new ArticleItem(
            "人",
            "hito (ひと)",
            "Ne s'utilise pas seul mais en mode pay + 人"
          ),
          new ArticleItem("本", "hon (ほん)"),
          new ArticleItem("中国", "chuugouku (ちゅうごく)", "China"),
          new ArticleItem("何人", "nanjin"),
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
        title: "Phrase",
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
    title: "Food- 1",
    articles: [
      {
        title: "Kanji / Vocabulary",
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
        title: "EatOrDrink",
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
  {
    title: "Time- 1",
    articles: [
      {
        title: "Kanji / Vocabulary",
        items: [
          new ArticleItem("時", "ji(じ)", "time"),
          new ArticleItem("分", "fun (pun avec chiffre ?)", "part of minute"),
          new ArticleItem("今", "ima(いま)", "now, right now"),
          new ArticleItem("四", "yon(よん)", "4"),
          new ArticleItem("五", "go", "5"),
          new ArticleItem("六", "roku(ろく)", "6"),
          new ArticleItem("七", "nana(なな)", "7"),
          new ArticleItem("八", "hatchi(はち)", "8"),
          new ArticleItem("九", "kyuu(きゅう)", "9"),
          new ArticleItem("十", "juu(じゅう)", "10"),
          new ArticleItem("半", "han(はん)", "30 as in 9:30"),
        ],
      },
      {
        title: "Kanji / Vocabulary",
        items: [
          new ArticleItem("ゼロ", "", "Zero - 0"),
          new ArticleItem("ちょうど", "choudo", "exactly, sharp"),
          new ArticleItem("何時", "nanji", "What time..."),
        ],
      },
      {
        title: "Phrase",
        items: [
          new ArticleItem("二時二分です", "ni ji ni fun desu", "it is 2:02"),
          new ArticleItem(
            "今、何時ですか？",
            "ima, nanji desuka ?",
            "What time is it now ?"
          ),
          new ArticleItem(
            "今は二時です",
            "ima ha ni ji desu",
            "It is two o'clock right now."
          ),
        ],
      },
    ],
  },
  {
    title: "Routines- 1",
    articles: [
      {
        title: "Kanji",
        items: [
          new ArticleItem("学", "ga?", ""),
          new ArticleItem("行", "i ?", "Go"),
          new ArticleItem("校", "ko", "School"),
          new ArticleItem("午", "ご (go)", "Noon"),
          new ArticleItem("後", "go ?", "After"),
          new ArticleItem("会", "kai", ""),
          new ArticleItem("社", "cha", ""),
          new ArticleItem("朝", "あさ (asa)", ""),
          new ArticleItem("毎朝", "まいあさ (maiasa)", " every morning"),
          new ArticleItem("毎日", "(mainichi)", " every day"),
          new ArticleItem("毎", "まい", "every, each, per"),
          new ArticleItem("日", "hi ?", "the day, the sun"),
        ],
      },
      {
        title: "Vocabulary",
        items: [
          new ArticleItem("学校", "がっこう (gakkou)", "school"),
          new ArticleItem("会社", "かいしゃ (kaicha)", "company, office"),
          new ArticleItem("午後", "gogo", "afternoon (P.M)"),
          new ArticleItem("午前", "ごぜん(gozen)", "morning (A.M)"),
          new ArticleItem("行きます", "ikimasu", "go, will go, am going"),
          new ArticleItem(
            "行きません",
            "ikimasen",
            "do NOT (go, will go, am going)"
          ),
          new ArticleItem("に", "ni", "(particule) to, at, in"),
          new ArticleItem("ごろ", "goro", "around, about"),
          new ArticleItem("寝ます", "nemasu", "go to sleep"),
          new ArticleItem("起きます", "okimasu", "get up, wake up"),
          new ArticleItem("起きません", "okimasen", "not get up, not wake up"),
          new ArticleItem("午前零時", "gozenneji", "12 am"),
        ],
      },
      {
        title: "Phrase",
        items: [
          new ArticleItem("行きます", "i ki ma su", "i go, i will go"),
          new ArticleItem(
            "学校に行きません",
            "gako ni ikimasen",
            "i do not go to school"
          ),
          new ArticleItem(
            "学校に行",
            "gako nii ",
            "Here the に indicate the direction 'to' and the '行' the action to 'go' so to go 'nii' i guess"
          ),
          new ArticleItem(
            "九時ごろに学校へ行きます",
            "kuji goro ni gakohe ikimasu",
            "i go to school at around 9"
          ),
          new ArticleItem(
            "私は毎日りんごを食べます",
            "watashiha mai nichi ringo tabemasu ",
            "i eat apple every day"
          ),
          new ArticleItem("", "", ""),
          new ArticleItem("", "", ""),
        ],
      },
    ],
  },
  {
    title: "Home- 1",
    articles: [
      {
        title: "Kanji",
        items: [
          new ArticleItemKanji(
            "台所",
            "だいどころ",
            "kitchen",
            "pedestal + place"
          ),
          new ArticleItemKanji("所", "ところ", "place ?"),
          new ArticleItemKanji("部屋", "へや", "room", "division + dwelling"),
          new ArticleItemKanji("風呂", "ふろ", "bath", "wind + spine"),
          new ArticleItemKanji("庭", "にわ", "yard, garden"),
          new ArticleItemKanji("家", "いえ", "house"),
          new ArticleItemKanji("窓", "まど", "window"),
          new ArticleItemKanji("猫", "ねこ", "cat"),
          new ArticleItemKanji("犬", "いぬ", "dog"),
          new ArticleItemKanji("鳥", "とり", "bird"),
          new ArticleItemKanji("椅子", "いす", "chair", "chair + small thing"),
          new ArticleItemKanji("子", "ko", ""),
          new ArticleItemKanji("机", "つくえ", "desk"),
          new ArticleItemKanji("寝室", "shinshitsu", "bedroom"),
        ],
      },
      {
        title: "Vocabulary",
        items: [
          new ArticleItem(
            "あります",
            "arimasu",
            "there is, there are => used for inanimate objects, like books, rooms, televisions, and apples."
          ),
          new ArticleItem(
            "います ",
            "imasu",
            "there is, there are  => used for animate objects, like people, cats, dogs, and other animals."
          ),
          new ArticleItem("テーブル ", "taburu", "table"),
          new ArticleItem("ペット ", "petto", "pet"),
          new ArticleItem("トイレ ", "toire", "bathroom"),
          new ArticleItem("あそこです ", "asokodesu", "over there, there"),
          new ArticleItem("子犬 ", "ko inu", "pupy"),
          new ArticleItem("子猫 ", "ko neko", "chatons !"),
        ],
      },
      {
        title: "Phrase",
        items: [
          new ArticleItem(
            "鳥が二羽います",
            "tori ga niwo imasu",
            "there are two birds."
          ),
          new ArticleItem("どこですか", "", "where is ..."),
          new ArticleItem("テーブルはどこですか", "", "where is the table "),
          new ArticleItem(
            "トイレはどこですか",
            "toire ha doko desuka",
            "Where is the toilets ? ⭐⭐⭐⭐"
          ),
          new ArticleItem(
            "部屋はどこですか",
            "eya ha doko desuka",
            "Where is the room? ⭐⭐⭐⭐"
          ),
          new ArticleItem(
            "ここはどこですか",
            "koko ha doko desuka",
            "Where is this place"
          ),
          new ArticleItem(
            "家はここです",
            "ie ha koko desu",
            "the house is over there"
          ),
          new ArticleItem(
            "あそこにあります",
            "a so ko ni a ri ma su",
            "it is over there"
          ),
          new ArticleItem(
            "トイレはあそこです",
            "",
            "the toilets are over there"
          ),
          new ArticleItem("", "", ""),
        ],
      },
      {
        title: "Counting羽",
        items: [
          new ArticleItem("羽", "wo", "counting word for bird/rabbit"),
          new ArticleItem("一羽", "いちわ", "(counting) 1 bird"),
          new ArticleItem("二羽", "にわ", "(counting) 2 bird"),
          new ArticleItem("三羽", "さんわ", "(counting) 3 bird"),
          new ArticleItem("四羽", "よんわ", "(counting) 4 bird"),
          new ArticleItem("五羽", "ごわ", "(counting) 5 bird"),
          new ArticleItem("六羽", "ろくわ", "(counting) 6 bird"),
          new ArticleItem("七羽", "しちわ or ななわ", "(counting) 7 bird"),
          new ArticleItem("八羽", "はちわ", "(counting) 8 bird"),
          new ArticleItem("九羽", "きゅうわ", "(counting) 9 bird"),
          new ArticleItem("十羽", "じゅうわ", "(1counting) 0 bird"),
        ],
      },
    ],
  },
  {
    title: "Intro- 3",
    articles: [
      {
        title: "Kanji",
        items: [
          new ArticleItem("住み", "sumi", ""),
          new ArticleItem("東京", "とうきょう(tokyo)", "NOM DE VILLE"),
          new ArticleItem("京都", "きょうと (kyoto)", "NOM DE VILLE"),
          new ArticleItem("大阪", "おおさか (oosaka)", "NOM DE VILLE"),
          new ArticleItem("六歳", "ろくさい (rokusai)", ""),
          new ArticleItem("歳", "さい  (sai)", "years old"),
          new ArticleItem(
            "留学生",
            "りゅうがく (ryuugaku)",
            "foreign exchange student"
          ),
          new ArticleItem("留", "りゅう(ryuu)", "foreign ??"),
          new ArticleItem("外", "soto?", ""),
          new ArticleItem("外国人", "gaikokujin?", "foreigner ??"),
          new ArticleItem("年生", "nensei?", "grade, year(in school i guess)"),
          new ArticleItem("小学生", "chogaku?", "elementary school"),
          new ArticleItem("中学生", "chugaku?", "middle school"),
          new ArticleItem("高校", "こうこう(koko)", "high school"),
          new ArticleItem("大学生", "daigakusei", "university student"),
          new ArticleItem("違い", "ちがい(chigai)", "the difference ?"),
          new ArticleItem("直美", "なおみ(naomi)", "nom | prenom ?"),
          new ArticleItem("健太", "けんた(kenta)", "nom | prenom ?"),
          new ArticleItem("申し", "もうし(moushi)", "??"),
          new ArticleItem(
            "と申します",
            "ともうします(tomoushimasu)",
            "my name ??"
          ),
          new ArticleItem("大きい", "おおきい(ookii)", "??"),
        ],
      },
      {
        title: "Vocabulary",
        items: [
          new ArticleItem("住んでいません", "sundeimasen", "doesn't live (in)"),
          new ArticleItem("住んでいます", "sundeimasu", "do live (in)"),
          new ArticleItem("place+に", "ni", "in"),
          new ArticleItem("と申します", "tomoshimasu", "my name is"),
          new ArticleItem(
            "end of phrase + よ",
            "yo",
            "to emphase something like 'you know', 'won't you'"
          ),
          new ArticleItem(
            "違います",
            "chigaimasu",
            "is not right, is not correct"
          ),
          new ArticleItem(
            "中学生たち",
            "chugakuseitachi",
            "middle school studentS"
          ),
          new ArticleItem(
            "学生たち",
            "gakuseitachi",
            "studentS (plural it seems)"
          ),
          new ArticleItem(
            "たち",
            "tachi",
            "seems to indicate a plural ending (plural it seems)"
          ),
        ],
      },
      {
        title: "Phrase",
        items: [
          new ArticleItem("二十一歳です", "nijuuisaidesu", "i am 22"),
          new ArticleItem("そうです", "soudesu", "that's right"),
          new ArticleItem("ごめんね", "gomene", "sorry"),
          new ArticleItem(
            "違いは何ですか",
            "chigaihanandesuka",
            "What is the difference ?"
          ),
          new ArticleItem(
            "健太は東京に住んでいます",
            "kentaha tokyoni sundeimasu",
            "kenta lives in (particule 'ni') tokyo"
          ),
          new ArticleItem(
            "田中と申します",
            "tanaka to moushimasu",
            "my name is tanaka"
          ),
          new ArticleItem(
            "phraqe + (yo + ne)",
            "yo + ne",
            "a question (like with the ka)"
          ),
        ],
      },
    ],
  },
  {
    title: "Counting",
    articles: [
      {
        title: "Vocabulary",
        items: [
          new ArticleItem("いくつ", "ikutsu", "how many..."),
          new ArticleItem("卵", "たまご(tamago)", "eggs"),
        ],
      },
      {
        title: "counting",
        columns: ["Number", "Form of つ", "Form of 個"],
        description: (
          <p>
            The Japanese language uses special counting words to count things,
            actions, and events. <br />
            Below is a table for つ(tsu) and 個(こ・ko)、the counting words
            introduced in this lesson.
            <li>つ is a counter that can be used for anything</li>
            <li>
              個 is restricted to physical objects that are relatively small and
              round.,
            </li>
          </p>
        ),
        items: [
          new ArticleItem("１・一・いち", "一つ・ひとつ", "一個・いっこ"),
          new ArticleItem("２・二・に", "二つ・ふたつ", "二個・にこ"),
          new ArticleItem("３・三・さん", "三つ・みっつ", "三個・さんこ"),
          new ArticleItem("４・四・よん", "四つ・よっつ", "四個・よんこ"),
          new ArticleItem("５・五・ご", "五つ・いつつ", "五個・ごこ"),
          new ArticleItem("６・六・ろく", "六つ・むっつ", "六個・ろっこ"),
          new ArticleItem("７・七・なな", "七つ・ななつ", "七個・ななこ"),
          new ArticleItem("８・八・はち", "八つ・やっつ", "八個・はっこ"),
          new ArticleItem("９・九・きゅう", "九つ・ここのつ", "九個・きゅうこ"),
          new ArticleItem("１０・十・じゅう", "十・とお", "十個・じゅっこ"),
        ],
      },
      {
        title: "Phrase",
        items: [
          new ArticleItem(
            "部屋には机いくつありますか",
            "へやにはつくえいくつありますか",
            "How many desks are in the room?"
          ),
        ],
      },
    ],
  },
  {
    title: "family - 1",
    articles: [
      {
        title: "Vocabulary",
        columns: ["meaning", "Honorific Form", "Personal Form"],
        items: [
          new ArticleItem(
            "Older Brother",
            "お兄さん (おにいさん)",
            "兄 (あに)"
          ),
          new ArticleItem("Older Sister", "お姉さん (おねえさん)", "姉 (あね)"),
          new ArticleItem(
            "Younger Brother",
            "弟さん (おとうとさん)",
            "弟 (おとうと)"
          ),
          new ArticleItem(
            "Younger Sister",
            "妹さん (いもうとさん)",
            "妹 (いもうと)"
          ),
          new ArticleItem("Child", "お子さん (おこさん)", "子供 (こども)"),
          new ArticleItem(
            "Parents",
            "ご両親 (ごりょうしん)",
            "両親 (りょうしん)"
          ),
          new ArticleItem("Father", "お父さん (おとうさん)", "父 (ちち)"),
          new ArticleItem("Mother", "お母さん (おかあさん)", "母 (はは)"),
          new ArticleItem(
            "Grandfather",
            "お祖父さん (おじいさん)",
            "祖父 (そふ)"
          ),
          new ArticleItem(
            "Grandmother",
            "お祖母さん (おばあさん)",
            "祖母 (そぼ)"
          ),
          new ArticleItem(
            "Uncle Older than Parent",
            "伯父さん (おじさん)",
            "伯父 (おじ)"
          ),
          new ArticleItem(
            "Aunt Older than Parent",
            "伯母さん (おばさん)",
            "伯母 (おば)"
          ),
          new ArticleItem(
            "Uncle Younger than Parent",
            "叔父さん (おじさん)",
            "叔父 (おじ)"
          ),
          new ArticleItem(
            "Aunt Younger than Parent",
            "叔母さん (おばさん)",
            "叔母 (おば)"
          ),
          new ArticleItem("Husband", "ご主人 (ごしゅじん)", "夫 (おっと)"),
          new ArticleItem("Wife", "奥さん (おくさん)", "妻 (つま)"),
        ],
      },
    ],
  },

  {
    title: "EmptyBufferLesson",
    articles: [
      {
        title: "Kanji",
        items: [new ArticleItem("", "", "")],
      },
      {
        title: "Vocabulary",
        items: [new ArticleItem("", "", "")],
      },
      {
        title: "Phrase",
        items: [new ArticleItem("", "", "")],
      },
    ],
  },
];

export { lessons };

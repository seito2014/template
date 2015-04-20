#フロント向けREADME

##使用ツール
EJS
gulp
webpack
Sass
bower

##まず最初にすること
1. "npm i"でgulpが動くようにする

2. "bower i"でjsライブラリをインストールする

##gulpコマンド(pc/sp)

+ gulp/gulp sp  
一括コンパイル＆watch  
※このときscsslint,spriteタスクは走りません。別途実行してください。

+ gulp ejs-pc/gulp ejs-sp  
htmlコンパイル

+ gulp style-pc/gulp style-sp  
cssコンパイル

+ gulp style-pc --min/gulp style-sp --min  
cssをmin化してコンパイル

+ gulp script-pc/gulp script-sp  
webpack,jsコンパイル

+ gulp script-pc --min/gulp script-sp --min  
webpack,jsをmin化してコンパイル

+ gulp copy-pc/gulp copy-sp  
lib/,font/内にあるデータをdivからpublicへ移動＆jslint(jsのバリデート)を作動

+ gulp image-pc/gulp image-sp  
image/内にある画像データの移動、画像圧縮

+ gulp scsslint-pc/gulp scsslint-sp
scsslint(scssのバリデート)を作動

+ gulp htmlhint-pc/gulp htmlhint-sp
htmlhint(htmlのバリデート)を作動

+ gulp sprite-pc/gulp sprite-sp  
スプライト画像を生成する。具体的には以下の内容を行います。  
1./sprite/src　にある画像をスプライト化して、 /sprite/dist　にsprite.pngとして出力  
2./sass/sprite/　に、1で出力したsprite.pngに対応したsprite.scssを出力  
※このタスクではスプライト画像は1つしか生成できません（sprite.png）。これ以外にも用意したい場合は手動で用意する必要があります。

##コーディングルール
作業完了前に、scsslint-pc/gulp scsslint-sp　を実行してscsslintにかけるようお願いします。  
主なルールは以下のとおりです。

+ scssネスト階層：4（やむを得ない場合は除く）

+ クラス名：チェインケースのみ

+ body：各ページにそれそれ「.page-xxx」クラス名をつける

+ id：スタイルをつける目的での使用→☓、jsによる使用→○
 
+ class：jsを利用する目的で使う場合のみ、他の作業者にわかるよう「.js-」プレフィックスをお付けください。

+ インデント：TAB

+ SMACSS,OOCSSに沿ったコーディング

それ以外のルールはscsslint実行時にチェックしてください。

##アイコン、スプライトについて
なるべくsprite.png,_sprite.scssにまとめるのが好ましいですが、1枚にまとめるのは限界もあるので、必要があれば別ファイルで用意するようお願いします。  
ちなみに、以下のデータは分割して運用することが決定しています。  

【SP】
.category-icon.png/_category-icon.scss ... デザインデータの作り方上、spriteSsmithを受け付けないため。

##使用フォント

+ Miso ... http://www.fontsquirrel.com/fonts/miso

+ Sacramento ... http://www.google.com/fonts/specimen/Sacramento

##scss

+ base ... サイト全体に関わる、土台的なスタイル

+ layout ... header,footer,mainなど、レイアウトに関わるスタイル

+ module ... サイト全体で使いまわすパーツや要素のまとまりに関わるスタイル

+ global ... グループ会社の関連サイト全体で共通のスタイル

+ sprite ... gulpタスクで自動生成するスプライト画像に関わるスタイル

+ _common.scss ... moduleと呼んでいいのか、layoutと呼んでいいのか曖昧で、サイト全体で使いまわす大きな要素のまとまりに関わるスタイル

+ _hoge.scss ... 各ページにおける、モジュール間のmarginのみを記述するスタイル。

+ style1.scss ... module/以外のscssをimportするファイル

+ style2.scss ... module/のscssをimportするファイル

※style1.scss,style2.scssはできれば1つにまとめるのが好ましいですが、cssが巨大すぎるとIE9以下で閲覧不可能になるため分けています。

##git運用

+ HTML-master ... 納品用ブランチ。プライム様にお渡しするデータ

+ HTML-release ... 納品準備ブランチ。納品に含めないデータの削除、データの圧縮などはここで行う

+ HTML-develop ... 作業者全員の静的データの開発ブランチ

+ feature/ ... 各機能、部分ごとに作業者が開発を行うブランチ

##その他

footer最下部部分はマイナビ様関連サイト共通フッターです。
この部分のhtmlタグは共通化しています。タグはejs/footer内の該当コメント部分に記述しています。これに関しては編集しないでください。
また、スタイルはscss/global　内にあります。これに関しては何らかの不具合がある場合のみ編集可能です。
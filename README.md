#プライム様向けREADME

##ディレクトリ構成につきまして
組み込みいただくhtml,css,js,画像,フォントデータは以下のディレクトリにあります。  

+ PC ... app/pc/public

+ SP ... app/sp/public

##bodyクラス
全ページのbodyタグに、各ページに対応したクラス「.page-xxx」を付与しています。  
組み込み時にはこれをお付けいただくよう、よろしくお願い致します。  
例1）index.html　→ .page-index  
例2）primary-category.html　→ .page-primary-category  

##h1タグの扱いに関しまして
HTML5の標準仕様に基づき、全見出しタグをh1で設定しています。  
また、ヘッダーのテキスト「働く女性の恋愛と幸せな人生のガイド」はほとんどのページでh1で囲っていますが、記事詳細ページのみpタグにする予定です。  
(これは、SEOを考慮して記事タイトルのテキストの見出しランクをあげるためです)

##広告ページに関しまして
広告が入るページのejs,htmlはPC,SPともに「adsense.ejs,adsense.html」です。  
また、テストで実際に現行サイトの広告htmlを入れたものが「adsense-sample1.html, adsense-sample2.html」となります。  
これら広告ページは、javascriptに関しては他のページと全く同じものを読み込ませていますが、cssに関しては他のページと異なり、「style-adsense.css」という広告ページ専用のスタイルを読み込ませています。  
また、htmlに関しても見た目は他のページと同じですが、html構造は異なります。  
広告コンテンツのcssに関してはこれまでもこれからもその都度別の作業者が個々に用意すると思われますが、その際スタイルのバッティングを回避するためにこのような実装を指定ます。  
お手数をお掛けしますが、以上の点を考慮して実装していただきますよう、何とそよろしくお願いいたします。

##記事ページに関しまして
SEOを考慮すると、記事のタイトル部分を見出しランク１に設定すべきと考えてそのようにいたしました。  
そのため、entry-outline.html,entry.html(PC,SP共に)のみ、ヘッダーの「働く女性の恋愛と幸せな人生のガイド」テキスト部分をh1ではなくpタグに変えています。  
組み込み時にもそうなるようお願いいたします。

##jQueryに関しまして
バージョンはマイナビ様の規定に沿って、1.8.2を使用しています。  
また、当初はローディングスピードを配慮して</body>タグの直前で読み込ませていましたが、それよりももっと上部でjQueryを必要とするjsファイルが読み込まれているページが一部あったため、<head>〜</head>内で読み込ませることにしました。  
組み込み時にもそうなるようお願いいたします。

##メインコンテンツ横幅670pxのコンテンツページに関しまして
本サイトのメインコンテンツ部分の横幅は648pxですが、一部どうしても670pxで対応しなければいけないページが存在するため、それ用のテンプレートを2パターン用意しました。  
それぞれ以下のように対応しています。  

###static.html  
現行サイトでURLに"/static"が含まれているページのテンプレート。  
bodyに振られているクラスが"page-static"であること以外は、広告ページ（adsense.html）と同じ構成になっています。  
広告ページと同様、javascriptに関しては他のページと全く同じものを読み込ませていますが、cssに関しては他のページと異なり、「style-adsense.css」という広告ページ専用のスタイルを読み込ませています。  
また、htmlに関しても見た目は他のページと同じですが、html構造は異なります。  
実際に現行サイトのコンテンツを入れてテストした、static-sample1.html, static-sample2.htmlを用意しましたので、参考にしてください。

###entry-special.html  
現行サイトでURLに"/tu"が含まれているページのテンプレート。  
記事ページ（entry.html）と似たような構成になっています。  
bodyに"page-entry-special"クラスを振っていただければ、メインコンテンツ部分が670pxになり、また通常の記事ページで実装されている見出しのスタイルを一部無効化します。（スタイルがバッティングするのを防ぐため）  
実際に現行サイトのコンテンツを入れてテストした、entry-special-sample1.html, entry-special-sample2.htmlを用意しましたので、参考にしてください。

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

+ scssネスト階層：4

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
#Template
自作のフロントコーディングテンプレ

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

+ gulp script-pc/gulp script-sp  
webpack,jsコンパイル

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

+ gulp iconfont-pc/gulp iconfont-sp
Web fontを生成する。具体的には以下の内容を行います。  
1./iconfont/src　にあるSVG画像をフォント化して、 /iconfont/dist　に各種fontデータとして出力  
2./sass/iconfont/　に、1で出力したフォントデータに対応したiconfont.scssを出力
※このタスクではデフォルトではフォントデータは1つしか生成できません。複数用意したい場合はカスタマイズする必要があります。

+ gulp style-min-pc/ gulp style-min-sp
+ gulp script-min-pc/ gulp script-min-sp
+ gulp image-min-pc/ gulp image-min-sp
css,js,画像を圧縮してrelease/に出力する

+ gulp release/ gulp release-sp
css,js,画像圧縮を一括で行い、release/に出力する

##アイコン、スプライトについて
なるべくsprite.png,_sprite.scssにまとめるのが好ましいですが、1枚にまとめるのは限界もあるので、必要があれば別ファイルで用意するようお願いします。  
ちなみに、以下のデータは分割して運用することが決定しています。  

##git運用

+ hotfix ... 緊急修正用ブランチ。リリース後に発生してしまった不具合は個々で解消する 

+ master ... 納品用ブランチ。

+ release ... 納品準備ブランチ。納品に含めないデータの削除、データの圧縮などはここで行う

+ develop ... 作業者全員の静的データの開発ブランチ

+ feature/ ... 各機能、部分ごとに作業者が開発を行うブランチ

##コーディングルール

###基本
+ ネストはなるべく避ける
+ インデントは決まりはないが、プロジェクト内で一貫して揃える
+ シングルではなく、マルチクラスコーディングする前提考える
+ SMACSS,OOCSSに基づく
+ 各ページのbodyにそれそれ「.page-xxx」クラス名をつける

###クラス名

####クラス基本ルール
+ 単語の区切はハイフン（クラス名は統一したい）
+ 大文字、アンダーバー禁止（クラス名は統一したい）
+ id禁止（jsのフックとしてのみ使う）
+ 略称禁止（意味がわからなくなるため）

####@extend
@extendは依存関係がややこしくなるため、使わないようお願いします。

####クラス名は、親クラスの名前を中に含める「継承クラス」を用いて命名していただきたく思います。
```ex
<aside class="card">
	<div class="card-thumbnail">
		<img class="card-thumbnail-image" src="" alt="">
	</div>
	<h1 class="card-heading">Card heading</h1>
</aside>
```
これはクラスのバッティングを防ぐのと、HTML構造を明確にするためです。

####セレクタの指定
子孫セレクタの指定は使わないようお願いします。
（スタイルのバッティングを防ぐため）
小セレクタなどの使用はOKです。
☓`.card-thumbnail img`
◯`.card-thumbnail > img`


###CSSのカテゴライズ

####tool
関数を設定します。
mixin,animationの@keyframesなど。

####setting
変数を設定するCSSです。
color,font-family,その他数字などを設定します。

####base
Webサイト全体の基本となるCSS。
reset.css,normlize.cssのほか、デフォルトのリンクカラーやフォントサイズ、行間などがふくまれます。

####page
モジュール同士の間のmarginをページ単位で指定したい場合はここで指定を行います。
その際、bodyにクラス`.page-foo(ページ名)`を付与してそれに依存する形でスタイルを指定してください。

例）
```_index.scss
.page-index {
	.slider {margin-bottom: 30px;}
	.navigation {margin-bottom: 20px;}
	.article-list {margin-bottom: 30px;}
	.news-list {margin-bottom: 30px;}
}
```

####layout
ヘッダー、フッター、メインカラム、サイドバーなど、レイアウトを決定する「枠」を設定します。
これに該当するCSSは、プレフィックス `.l-`つけてください。

例）
```layout/_header.scss
.l-header {...}
```
```layout/_main.scss
.l-main {...}
```
```layout/_sidebar.scss
.l-sidebar {...}
```

####module
その他、サイトを構成する部品となる要素全て。

####utility
汎用性があり、使いまわせるCSSおよびクラス。
ただし、このクラスにはそれとわかるようプレフィックス`.u-`をつけてください。
また、このutilityのみ、略称OKとします。

例）
```
.u-mb10 {margin-bottom: 10px;}
.u-clearfix {/*clearfixの記述は長いので省略*/}
```

####library
もし外部のCSSを使う場合（プラグインに含まれるCSS,bootstrap,グリッドシステムなど）はこちらへ入れてください。

###ディレクトリ構成

```
+-tool/
 |-_mixin.scss
 |-_animation.scss
+-setting/
 |-_color.scss
 |-_font.scss
 |-_config.scss
+-base/
 |-_reset.scss
 |-_generic.scss
+-page/
 |-_index.scss
 |-_about.scss
 |-_contact.scss
+-layout/
 |-_header.scss
 |-_footer.scss
+-module/
 |-_button.scss
 |-_card.scss
 |-_container.scss
 |-_gallery.scss
 |-...etc
+-utility
 |-_utility.scss
+-library
 |-_grid.scss
 |-_bxslider.scss

main.scss
```

もしIE9以下の4095問題が発生した場合は、main.scssをmain1.scss,main2.scssの2つに分割してください。

###その他

####margin
module自体にmarginは付けないでください。
moduleを他のページでも使いまわそうとした際にmarginが設定されていると意図しない間隔ができてしまいます。
module同士の間隔を開けるためのmarginは「utility」または「page」を使ってください

####数字
line-height,font-size,widthなどはなるべく相対値を使うといいです。
相対値であれば、異なるシーンでも柔軟に設定され、指定が楽になります。
（※これは推奨項目であり、絶対ではありません）

```
.card {
	line-height: 1.6;
	font-size: 1.6rem;
	width: 100%;
}
```







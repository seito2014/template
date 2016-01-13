#Template

##git

+ master ... 開発＆納品ブランチ。基本的にはほとんどここで開発

##まず最初にすること
1. "npm i"でgulpが動くようにする

##使用ツール

+ EJS
+ gulp
+ webpack
+ Sass
+ bower

##フォルダ構成（全体）

```
+-app/ ... 開発データ
+-style-guide/ ... スタイルガイドジェネレーターfrontnoteを使って生成されるhtmlや関連データの出力先
+-gulp/ ... gulpタスクとその関連データ
+-node_modules/
```

###app/

```
+-pc/
 |-dev/ ...開発用ディレクトリ。ejsやsass、分割されたjsなど、ここで編集する。
  |-ejs/ ...ejsを収納
   |-layout/ ...header,footerなどのレイアウト部分を収納
   |-module/ ...複数のページで使いまわすモジュールを収納
  |-font/...webfontを収納
  |-image/...画像を収納
  |-js/ ... 自作のjsを収納
  |-lib/ ...JSプラグインを収納
  |-sass/ ...Sassを収納。
 |-public/ ...コンパイル後の出力先。変換されたhtml,css,結合されたjsなどを出力。
 |-release/ ...データ圧縮後の出力先。gulp releaseタスクでCSS,JSのmin化、画像圧縮などが行われたデータを出力。
+-sp/
```

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
2./sass/sprite/　に、1で出力したsprite.pngに対応した_sprite.scssを出力  
※このタスクではスプライト画像は1つしか生成できません（sprite.png）。これ以外にも用意したい場合は手動で用意する必要があります。

+ gulp style-min-pc/ gulp style-min-sp
+ gulp script-min-pc/ gulp script-min-sp
+ gulp image-min-pc/ gulp image-min-sp
css,js,画像を圧縮してrelease/に出力する

+ gulp release-pc/ gulp release-sp
css,js,画像圧縮を一括で行い、release/に出力する

##コーディングルール

###基本
+ ネストはなるべく避ける
+ インデントは決まりはないが、プロジェクト内で一貫して揃える
+ シングルではなく、マルチクラスコーディングする前提考える
+ SMACSS,OOCSSに基づく

###クラス名

####クラス基本ルール
+ 単語の区切はハイフン（クラス名は統一したい）
+ 大文字、アンダーバー禁止（クラス名は統一したい）
+ id禁止（jsのフックとしてのみ使う）
+ 略称禁止（意味がわからなくなるため）

####extend
Sassのextendは依存関係がややこしくなるため、使わないようお願いします。
例外として、以下の場合のみ使用許可します。

###プレフィックス

+ layout = "l-"
+ utility = "u-"
+ margin = "m-"
+ JSのフックに使うID,クラス = "js-"
+ JSの操作によってスタイルを変える場合のクラス = "is-"

###CSSのカテゴライズ

####setting
変数を設定するCSSです。
color,font-family,その他数字などを設定します。

####tool
関数を設定します。
mixin,animationの@keyframesなど。

####base
Webサイト全体の基本となるCSS。
reset.css,normlize.cssのほか、デフォルトのリンクカラーやフォントサイズ、行間などがふくまれます。

####layout
ヘッダー、フッター、メインカラム、サイドバーなど、レイアウトを決定する「枠」を設定します。
これに該当するCSSは、プレフィックス `.l-`つけてください。

例）  
layout/_header.scss  

```
.l-header {...}
```

layout/_main.scss  

```
.l-main {...}
```

layout/_sidebar.scss  

```
.l-sidebar {...}
```

####module
その他、サイトを構成する部品となる要素全て。

####utility
+ utility ... 汎用性があり、使いまわせるCSSおよびクラス。
+ margin ... Block間のmarginをとるためのスタイル。本サイトは4の倍数が基本になっているので、4の倍数ごとのクラスが用意されています。

#####例
```
.m-top1 {
    margin-top: 4px;
}
.m-top2 {
    margin-top: 8px;
}
.m-top3 {
    margin-top: 12px;
}
```

####library
もし外部のCSSを使う場合（プラグインに含まれるCSS,bootstrap,グリッドシステムなど）はこちらへ入れてください。

###ディレクトリ構成

ディレクトリ構成はSMACSSやITCSS(https://speakerdeck.com/dafed/managing-css-projects-with-itcss)に影響を受けています。

```
+-1-setting/  
 |-_color.scss  
 |-_font.scss  
 |-_config.scss 
+-2-tool/  
 |-_mixin.scss  
 |-_animation.scss 
+-3-base/  
 |-_reset.scss  
 |-_generic.scss
+-4-layout/  
 |-_header.scss  
 |-_footer.scss
+-5-module/
 |-_button.scss  
 |-_card.scss  
 |-_container.scss  
 |-_gallery.scss  
 |-...etc  
+-6-utility
 |-_utility.scss
 |-_margin.scss
+-7-library  
 |-_bxslider.scss  
  
style.scss
```

もしIE9以下の4095問題が発生した場合は、style.scssをstyle1.scss,style2.scssの2つに分割してください。

###その他

####JSの扱い
LIGの基本ルールに従い、記述は純粋なJSの書き方をするものとします。  
TypeScriptなどのAltJSは使用を禁止します。  
また、JSファイルは以下の3パターンに分けてコーディングします。  

app.js ... LIGがコーディングする、複数ページで使うことを前提としたJSをまとめたファイル。 全ページに読み込ませる。  
library.js ... 複数ページで使うことを前提とした外部ライブラリをまとめたJSファイル。全ページに読み込ませる。
xxx.js ... (xxxには各ページの名前が入ります。)各ページ固有で使うJSファイル。固有のページにだけ読み込ませる。

####数字
line-height,font-size,widthなどはなるべく相対値を使うといいです。
相対値であれば、異なるシーンでも柔軟に設定され、指定が楽になります。
（※これは推奨項目であり、絶対ではありません）

```
. card {
	line-height: 1.6;
	font-size: 1.6rem;
	width: 100%;
}
```

####extend
Sassのextendは依存関係がややこしくなるため、使わないようお願いします。
例外として、以下の場合のみ使用許可します。

+ 記事ページ(artice.html)の記事内のセレクタにスタイルをあてたい場合
+ _utill.scss内のクラス

##アイコン、スプライトについて
なるべくsprite.png,_b-sprite.scssにまとめるのが好ましいですが、1枚にまとめるのは限界もあるので、必要があれば別ファイルで用意するようお願いします。  
ちなみに、以下のデータは分割して運用することが決定しています。

##git運用

+ hotfix ... 緊急修正用ブランチ。リリース後に発生してしまった不具合は個々で解消する 

+ master ... 納品用ブランチ。

+ release ... 納品準備ブランチ。納品に含めないデータの削除、データの圧縮などはここで行う

+ develop ... 作業者全員の静的データの開発ブランチ

+ feature/ ... 各機能、部分ごとに作業者が開発を行うブランチ

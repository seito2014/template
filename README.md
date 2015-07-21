#Template
自作のフロントコーディングテンプレ。  
使用するにはNode.js(v0.10.25推奨)が必要です。  

##まず最初にすること
1. "npm i"でgulpが動くようにする
2. "bower i"でjsライブラリをインストールする

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
+-bower_components/ ... bowserでインストールしたJSプラグインの保存先
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
  |-lib/ ...JSプラグインを収納。bower,webpackが使えない場合にはここに置いておく。
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

##JSプラグインについて
外部のJSプラグインを用いる際は極力bowerで入れ、webpackを使ってください。
プラグインによってはwebpackが動かないなどの問題があるかもしれません。
その場合はlib/フォルダに該当のjsプラグインを保存し、普通に読み込ませてください。

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

###クラス名

####クラス基本ルール
+ 単語の区切はハイフン（クラス名は統一したい）
+ 大文字、アンダーバー禁止（クラス名は統一したい）
+ id禁止（jsのフックとしてのみ使う）
+ 略称禁止（意味がわからなくなるため）

####extend
Sassのextendは依存関係がややこしくなるため、使わないようお願いします。

####継承クラス
クラス名は、親クラスの名前を中に含める「継承クラス」を用いて命名していただきたく思います。
```ex
<aside class="card">
	<div class="card-thumbnail">
		<img class="card-thumbnail-image" src="" alt="">
	</div>
	<h1 class="card-heading">Card heading</h1>
</aside>
```
これはクラスのバッティングを防ぐのと、HTML構造を明確にするためです。

また、バリエーション違いをつくるためのクラス（Modifier,スキン, サブモジュールに該当するもの）にもこのルールは適応してください。
```ex
<aside class="card card-type-a">...</aside>
<aside class="card card-type-b">...</aside>
```

####ステート
ステートはJavaScriptの操作によって見た目が変わるスタイルのことを指します。
タブボタンのアクティブ状態のときのクラスや、エラー状態のinputなどに用います。

```ex
<ul class="tab">
	<li class="tab-item is-active">
		<a class="tab-link" href="">Tab1</a>
	</li>
	<li class="tab-item">
		<a class="tab-link" href="">Tab2</a>
	</li>
	<li class="tab-item">
		<a class="tab-link" href="">Tab3</a>
	</li>
</ul>
```
```ex
<input class="input is-error" type="text">
```

このクラスを以下の点に注意して使用してください。
#####クラス名にはプレフィックス`.is-`を用いる
#####!importantを使用してもOK
#####単独では使わず、複数クラスでのみ用いる
◯ `.tab-link.is-active {...}`  
☓ `..is-active {...}`

####セレクタの指定
子孫セレクタの指定は使わないようお願いします。
（スタイルのバッティングを防ぐため）
小セレクタなどの使用はOKです。
☓`.card-thumbnail img`  
◯`.card-thumbnail > img`

####JSのフック
JavaScriptのフックにはid,またはプレフィックス`.js-`を含むクラスを用いてください。
また、これらのid,クラスはJSのフックにのみ用いてください。
役割を明確に分けるため、スタイルはあてないでください。

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

ディレクトリ構成はSMACSSやITCSS(https://speakerdeck.com/dafed/managing-css-projects-with-itcss)に影響を受けています。

```
+-1-tool/  
 |-_mixin.scss  
 |-_animation.scss  
+-2-setting/  
 |-_color.scss  
 |-_font.scss  
 |-_config.scss  
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
+-7-library  
 |-_grid.scss  
 |-_bxslider.scss  
  
style.scss
```

もしIE9以下の4095問題が発生した場合は、style.scssをstyle1.scss,style2.scssの2つに分割してください。

###その他

####margin
module自体にmarginは付けないでください。  
moduleを他のページでも使いまわそうとした際にmarginが設定されていると意図しない間隔ができてしまいます。  
module同士の間隔を開けるためのmarginは「utility」またはOOCSSライクな書き方で指定してください。  
(utilityはキリの良い数字の場合、OOCSSライクな書き方はキリの悪い数字、と分けるといいです。）

#####例）

```
<div class="main-slider main-slider-layout">  
	...  
</div>
  
<section class="section section-layout">  
    ...  
</section>  
  
<footer class="footer u-mt50">  
    ...  
</footer>
```

_main-slider.scss

```
.main-slider {

	&.main-slider-layout {
		margin-bottom: 22px;	
	}
}
```

_section.scss

```
.section {
	
	&.section-layout {
		margin-bottom: 53px;
	}
}
```

_utility.scss

```
.u-mt50 {
	margin-top: 50px;
}
```

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
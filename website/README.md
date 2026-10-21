# HARADA — Our wedding

参列者のみなさまへ、写真・音楽・動画をまとめて案内する静的ウエディングサイトです。

- 提案サイト名：**HARADA — Our wedding**（原田家のウエディングアーカイブ）
- 白を基調に、オリーブ色 `#66735d` をアクセントにしています。
- ゴシック体：Helvetica Neue / Arial / ヒラギノ角ゴ / 游ゴシック / メイリオ。端末のフォントを使用します。
- 公開予定：**2026年11月3日 13:00（日本時間）**。公開操作・公開予約は行っていません。
- Googleドライブ、曲名・配信リンク、動画、支給写真はすべて準備中です。現状の本文・構成・画像は仮です。
- HTML5 / CSS / 少量のJavaScript。ビルド、npm、CMS、ログイン機能は不要です。

## ファイル構成

```text
website/
├── wedding.html                 ウエディングトップ
├── music.html                   挙式・披露宴の曲
├── background-music.html        待合室・歓談の曲
├── movie.html                   式で使用した動画
├── .nojekyll                    GitHub PagesのJekyll処理を使用しないための空ファイル
├── README.md                    この説明書
├── ASSETS.md                    素材の出典・サービス・生成画像のプロンプト
├── QA.md                        確認した範囲と未確認事項
└── assets/
    ├── css/style.css            全ページ共通スタイル
    ├── js/config.js             共有フォルダ・配信・動画URLの設定
    ├── js/main.js               メニュー・設定済みリンク・任意のMP4表示
    ├── images/
    │   ├── wedding-flowers.webp 仮写真：白い花
    │   ├── ceremony.webp        仮写真：チャペル
    │   ├── reception.webp       仮写真：テーブル
    │   ├── album-1.svg ～ album-4.svg  オリジナルの仮ジャケット
    │   └── favicon.svg          Hのオリジナルアイコン
    └── videos/                 任意のMP4・字幕ファイルの配置先
```

`index.html` はご指定どおり制作対象外です。今回の入口は **wedding.html** です。将来の総合トップを妨げるリダイレクトやルート固定パスは追加していません。空の `videos/` フォルダはZIPやアップロード方法によって省略されます。MP4を使う際に作成してください。

## まず表示する

ZIPを展開し、`wedding.html` をブラウザーで開きます。4ページとメニューは通常のHTMLリンクなので、そのまま移動できます。MP4や字幕の確認には、HTTPのローカルサーバーまたは公開後のURLを使ってください。

Pythonがある場合は、`website` フォルダをターミナルで開いて次のコマンドでも確認できます。閲覧者や公開時にはPythonは不要です。

```sh
python -m http.server 8000 --bind 127.0.0.1
```

表示先：`http://127.0.0.1:8000/wedding.html`

## 文章・サイト名を変更する

各HTMLをテキストエディターで編集します。保存後、ブラウザーを再読み込みしてください。

| 変更箇所 | 編集する場所 |
| --- | --- |
| メインメッセージ、写真共有の案内 | wedding.html |
| 挙式・披露宴のシーン名、曲名、アーティスト名、順序 | music.html の `track-list` 内 |
| 待合室・歓談のシーン名、曲名、アーティスト名、順序 | background-music.html の `track-list` 内 |
| 動画タイトル・説明・順序 | movie.html の `film-card` 内 |
| サイト名、共通ヘッダー・フッター | **4つのHTMLすべて**の該当テキスト |
| タブのタイトル・検索用説明文 | 各HTMLの `title` と `meta name="description"` |
| 配色 | style.css の先頭 `:root` 内 |
| フォント | style.css の `body` 内 `font-family` |

今回の構成では、共通ヘッダー・フッターをHTML内に記載しています。変更時は4ページに同じ内容を反映します。

曲の行は `li class="track"` のまとまりです。追加・削除・並べ替え時は、表示番号 `track-number` と必要に応じて `ol` の `start` も更新します。シーン一覧は仮案であり、実際のプログラムを表していません。

## Googleドライブ・曲・動画のリンクを設定する

`assets/js/config.js` の `links` にある空の引用符へ、**確認済みの https:// URL** を入力します。

```js
// 形式の例です。実在する共有フォルダのURLに置き換えてください。
"photoFolder": "https://drive.google.com/drive/folders/ここを実際のIDに変更"
```

空欄の間は、クリックできない「準備中」の表示になります。URLを設定するとリンクに変わり、別タブで開きます。URLを推測して埋める処理や、未設定の `#` リンクはありません。JavaScriptを無効にすると準備中表示のままです。JavaScriptなしでも有効にしたいリンクは、HTML側で通常の `<a href="...">` に変更してください。

| 設定キー | 対応箇所 |
| --- | --- |
| photoFolder | wedding.html のGoogleドライブ共有フォルダ |
| weddingPlaylist | music.html の全曲プレイリスト |
| backgroundPlaylist | background-music.html の全曲プレイリスト |
| wedding01 / 02 / 03 | 挙式：入場 / 誓いのシーン / 退場（すべて仮） |
| wedding04 / 05 / 06 / 07 / 08 | 披露宴：新郎新婦入場 / 乾杯 / ケーキ / お色直し入場 / 結び・退場（すべて仮） |
| background01 / 02 / 03 | 待合室BGMの1〜3曲目（仮） |
| background04 / 05 / 06 / 07 / 08 | 歓談BGMの1〜5曲目（仮） |
| film01 / 02 / 03 | オープニング / プロフィール / エンドロール（仮） |

配信サービスは指定していません。選んだサービスの正規の曲・プレイリストURLを登録できます。プレイリストが不要な場合は、各曲ページの `playlist-note` ブロックを削除できます。外部動画URLを設定した場合は外部ページへ移動する方式です。埋め込みプレイヤーを自動で追加しません。

**設定後は、周囲の「準備中」の説明文や仮原稿もHTMLで更新してください。** 例：各ページ上部の `draft-notice`、曲名、構成確認用リストの注意書き、動画ページの案内。写真共有ブロック直下の公開状態の一文だけは、URL登録時に自動で更新します。

### Googleドライブの準備

共有フォルダを作成し、想定する参列者が閲覧・アップロードできる権限を確認してください。共有フォルダの「リンクをコピー」で得たURLを設定します。閲覧のみの権限ではアップロードできません。アップロードはGoogleドライブ上で行い、このサイトに写真を送信・保存する機能はありません。必要な権限やGoogleアカウントへのログインを含め、公開前に別アカウント・スマートフォンで実際に確認してください。

参考：[Google ドライブのファイルを共有する（Google公式）](https://support.google.com/drive/answer/2494822?hl=ja)

### 自分のMP4ファイルを直接置く場合（任意）

1. `assets/videos/` に、英数字・ハイフンのファイル名でMP4を置きます。
2. `config.js` の `videos` の該当項目を編集します。

```js
film01: {
  src: "assets/videos/opening.mp4",
  label: "オープニング",
  captions: "assets/videos/opening-ja.vtt"
}
```

`captions` は任意です。字幕がないときは空欄にします。動画の内容に応じた字幕を用意してください。標準の動画プレイヤーとファイルを開くリンクが表示され、自動再生はしません。`links.film01` も設定すると、下のリンクはその外部ページが優先されます。相対パスは `assets/videos/` 内のMP4・VTTを使用してください。動画によっては圧縮やブラウザー対応形式への変換が必要です。

## 写真・ジャケットを変更する

同じ名前のWebP画像に置き換える方法が簡単です。縦横1536×1024前後の横長画像を推奨します。写真が縦長の場合も枠に合わせてトリミング表示します。主役の位置はCSSの `object-position` で調整できます。

JPG・PNGを使う場合は、HTML中の `src` を新しいファイル名へ変更してください。MP4を使う場合、ポスター画像は同じ `film-poster` 内の `img` から自動で引き継ぎます。

- 花：wedding.html / movie.html
- チャペル：wedding.html / music.html / movie.html
- テーブル：wedding.html / background-music.html / movie.html
- ジャケット：各曲の `img class="album-art"` の `src`

画像を差し替えたら `alt` を実際の写真の説明へ変更し、`AI生成の仮画像`、`figcaption`、`image-note` の仮素材表示も更新します。曲名が隣にあるジャケット画像は装飾扱いとして `alt=""` にしています。実際のアルバム画像を使用する場合は、その配信サービス・権利者の利用条件を確認してください。

## GitHub Pagesへの公開（ビルド不要）

GitHubアカウント・公開先リポジトリは未指定のため、接続・アップロードはしていません。

1. GitHub上で公開先リポジトリを作成するか、既存のものを開きます。
2. `website` **フォルダの中身**を公開元の `main` ブランチ直下へアップロードします。フォルダ構造と `.nojekyll` を維持してください。
3. リポジトリの **Settings → Pages** を開きます。
4. **Source: Deploy from a branch**、**Branch: main**、**Folder: /(root)** を選んで保存します。
5. GitHubが示す公開URLに `/wedding.html` を付けて確認します。

プロジェクトリポジトリのURL例：

```text
https://YOUR-NAME.github.io/YOUR-REPOSITORY/wedding.html
```

さらにサブフォルダへ置いた場合の例：

```text
https://YOUR-NAME.github.io/YOUR-REPOSITORY/celebration/wedding.html
```

全リンク・素材パスは相対指定なので、4ページと `assets` を一緒に移動すればサブディレクトリにも対応します。Pagesのブランチ公開元として選べるフォルダは、ルートまたは `/docs` です。任意のサブフォルダ自体をPages設定で公開元に選ぶのではなく、選択した公開元の中に配置します。

**今回はindex.htmlを含めていないため、ルートURLは入口として使わず、参列者には必ず `/wedding.html` まで含むURLを共有してください。** 将来 `index.html` を追加するときは、そこから `wedding.html` へのリンクを作れます。

GitHub Pagesは通常インターネットに公開され、今回のサイトに参列者だけに限定する認証はありません。Googleドライブの写真へのアクセス範囲は、Googleドライブ側の設定で管理してください。

公開予定の2026年11月3日13:00（日本時間）に向け、素材・URLを事前に確認してください。公開操作や反映には時間差があるため、この納品物に時刻どおりの公開を保証する機能はありません。公開前にPagesを有効化すると、その時点からアクセス可能になる場合があります。

公式手順：[GitHub Pagesサイトを作成する](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)、[公開元を設定する](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 公開前の差し替えチェック

- サイト名・原稿・シーン・曲順を確定する。
- 写真と代替テキストを支給素材に差し替える。
- GoogleドライブURLを設定し、別アカウントから閲覧・アップロードする。
- 配信リンクと動画を設定し、実機で再生する。
- `仮` / `準備中` / `AI GENERATED` / `制作プレビュー` を全ファイル検索し、不要になった表示を更新する。
- 4ページの `draft-notice` を最終状態に更新するか削除する。
- 確定したブラウザー・iPhone・Android等で表示を最終確認する。
- `/wedding.html` を含む公開URLを共有する。

## 素材・確認記録

写真3点はimagegenの内蔵ツールで生成した仮素材、SVGはこのサイト用のオリジナルです。外部フォント・CDN・ライブラリは読み込んでいません。出典・生成プロンプトは [ASSETS.md](ASSETS.md)、検証範囲は [QA.md](QA.md) を参照してください。

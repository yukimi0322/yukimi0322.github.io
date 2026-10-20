# こもれび — 個人サイトのサンプル

GitHub Pagesで公開できる、シンプルな日本語のWebページです。
文章・色・フォント・レイアウトはサンプルなので、自由に変更してください。

## ファイル

- `index.html`：ページ本体。デザイン用のCSSもこのファイル内に含めています。
- `README.md`：この説明書。トップページとして表示されるのは `index.html` です。

インストールやビルドは不要です。外部フォント・画像・スクリプトへの依存もありません。

## パソコンで確認する

`index.html` をダブルクリックして、ブラウザで開きます。
編集後はファイルを保存して、ブラウザを再読み込みしてください。
ブラウザの幅を狭くすると、スマホ向けの配置も確認できます。

## GitHub Pagesで公開する

1. GitHubの無料アカウントを作成し、メールアドレスを確認します。
2. 「＋」→「New repository」を選びます。
3. リポジトリ名を `ユーザー名.github.io` にします。`ユーザー名` は自分のGitHubユーザー名に置き換えてください。
4. 「Public」を選び、「Add README」をオンにしてリポジトリを作成します。
5. 「Add file」→「Upload files」で、この2つのファイルをアップロードします。ZIPのままではなく、ファイルを直接アップロードしてください。
6. `index.html` がリポジトリ直下（README.mdと同じ階層）にあることを確認し、「Commit changes」で保存します。
7. 「Settings」→「Pages」を開き、次の設定で保存します。

   | 項目 | 設定 |
   | --- | --- |
   | Source | Deploy from a branch |
   | Branch | main |
   | Folder | / (root) |

8. 最大10分ほど待ち、Pages設定画面の「Visit site」から確認します。

公開URLは `https://ユーザー名.github.io/` になります。
変更するときは、修正したファイルを同じリポジトリに再アップロードして保存します。

## 色・フォント・文章を変更する

`index.html` をメモ帳などのテキストエディタで開きます。保存するときはUTF-8を使用し、ファイル名が `index.html.txt` にならないようにしてください。

ファイルの最初のほうにある `:root` の値で、主な色とフォントを変更できます。

```css
:root {
  --background: #f8f6f0; /* ページの背景 */
  --surface: #eeeee4;    /* 動画スペースの背景 */
  --text: #303b32;       /* 本文の文字色 */
  --muted: #62695e;      /* 補足文の文字色 */
  --accent: #526c48;     /* リンクやアクセントの色 */
  --line: #d9ddcf;       /* 区切り線 */
  --font: "Yu Gothic", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}
```

大きな見出しとロゴには、別途 `h1` と `.brand` に明朝体を指定しています。それらも変える場合は各 `font-family` を変更してください。
指定したフォントが閲覧者の端末にない場合は、次に指定したフォントで表示されます。

文章はHTML内の日本語を書き換えます。サイト名を変える場合は `<title>`、ヘッダーの「こもれび」、フッターも変更してください。

## YouTube動画を追加する

現在は動画を読み込まない案内スペースになっています。
`index.html` 内の `<div class="video-placeholder">` から対応する `</div>` までを、次のコードに置き換えます。

```html
<iframe
  class="video-frame"
  src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
  title="お気に入りのYouTube動画"
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>
```

`VIDEO_ID` は、動画URLの `watch?v=` の後にある動画IDに置き換えてください。
YouTube側で埋め込みが許可されている動画を使い、公開サイトで再生を確認してください。

## 検索への掲載について

各ページの検索掲載を避けるため、次の指定を入れています。

```html
<meta name="robots" content="noindex, nofollow">
```

これは対応する検索エンジンへの指定で、閲覧制限や限定公開ではありません。
URLを知った人は誰でもアクセスでき、無料利用の公開リポジトリからもファイルの内容を閲覧できます。
検索への掲載を希望する場合は、このmetaタグを削除してください。

## 参考

- [GitHub Pagesのクイックスタート](https://docs.github.com/ja/pages/quickstart)
- [GitHub Pagesの公開元設定](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Googleのnoindexに関する説明](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=ja)

# 素材と外部サービス

## 同梱素材

| ファイル | 出典・扱い |
| --- | --- |
| wedding-flowers.webp | OpenAI imagegen内蔵ツールで今回生成した白い花の仮写真 |
| ceremony.webp | 同ツールで今回生成した架空のチャペルの仮写真 |
| reception.webp | 同ツールで今回生成した架空のテーブルの仮写真 |
| album-1.svg〜album-4.svg | このサイト用に作成したオリジナルSVG。実在のアルバムアートではありません |
| favicon.svg | このサイト用に作成したオリジナルSVG |

写真は実際の会場・結婚式・参列者を撮影したものではありません。画面に「仮画像」「AI GENERATED」、代替テキストに「AI生成の仮画像」と表示しています。支給写真に差し替える際に、この表示も更新してください。WebPへの変換・圧縮のみをローカルで行っています。画像編集や生成に外部API用のキー・CLIは使用していません。

## 外部サービス・実行時の依存

サイト表示時に外部フォント、CDN、解析、Cookie、ライブラリを読み込む処理はありません。現状では外部リンクもすべて未設定です。Googleドライブはユーザー指定の写真共有先として、URLを登録した後にだけリンクします。音楽・動画のサービスは未指定で、契約・接続・アカウント作成はしていません。

Googleドライブの権限・容量等は使用アカウントの契約と設定に従います。曲・動画は、掲載するサービスの利用条件と素材の利用権限を確認して登録してください。音源・実在のジャケット・動画素材は同梱していません。

公開先はユーザー指定のGitHub Pagesを想定しています。GitHubの利用条件とアカウントプランに従います。公開操作は未実施です。

## デザイン参考

- [岩間瞳オフィシャルサイト](https://iwamahitomi.com/)：ユーザー指定。明るい背景、余白と写真の配置の方向性を参照しました。文章・画像・コードの転載はありません。
- ユーザー添付のレイアウト参考画像：曲のシーン別リストとページ構成の方向性のみ参照しました。参考画像内の曲・会場・日付は実際の情報として使用していません。参考画像自体は納品素材に含めていません。

## 生成プロンプト

すべて内蔵imagegenツールを使用。画像生成日：2026年10月21日。以下が最終プロンプトです。

### wedding-flowers.webp

```text
Use case: photorealistic-natural. Asset type: temporary photograph for an elegant Japanese wedding memories website, landscape 1536x1024. Primary request: editorial still life of delicate white cosmos, small white garden roses and airy olive green foliage in a clear glass vase on a white linen wedding table beside a softly folded ivory napkin and a clear water glass. Natural afternoon window light, gentle shadows, muted olive and ivory palette, subtle film grain, calm refined atmosphere, fine realistic petals. Composition: airy, asymmetrical, vase centered toward the right with a quiet out of focus neutral light background, foreground linen texture. No people, no venue branding, no lettering, no watermark. This is an illustrative placeholder, not an actual wedding photograph.
```

### ceremony.webp

```text
Use case: photorealistic-natural. Asset type: illustrative placeholder landscape wedding website photograph 1536x1024. A small elegant white chapel seen from a side angle in a lush green garden, soft sunlight through olive trees, empty scene, refined natural editorial photography, soft ivory whites and muted sage foliage, subtle film grain, no signage, no people, no text, no watermark. Fictional place, not a real venue.
```

### reception.webp

```text
Use case: photorealistic-natural. Asset type: illustrative placeholder landscape wedding website photograph 1536x1024. Close editorial detail of a long empty wedding reception dining table with white linen, delicate white flowers and olive branches, clear wine glasses and small candles in warm late afternoon light. Natural understated refined wedding style, muted olive and cream colors, shallow depth of field, fine grain, no people, no text, no watermark, no logos. Fictional wedding setting.
```


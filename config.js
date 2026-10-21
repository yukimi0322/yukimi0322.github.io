/* 空の引用符内にURLを入れるだけで「準備中」がリンクに変わります。
 * https:// で始まる、確認済みの共有・配信ページURLを設定してください。
 * ファイルを保存し、ブラウザーを再読み込みすると反映されます。
 * サイト上の仮原稿や準備中という説明文は、各HTMLで別途更新してください。
 */
window.WEDDING_CONFIG = {
  links: {
    "photoFolder": "",
    "weddingPlaylist": "",
    "backgroundPlaylist": "",
    "wedding01": "",
    "wedding02": "",
    "wedding03": "",
    "wedding04": "",
    "wedding05": "",
    "wedding06": "",
    "wedding07": "",
    "wedding08": "",
    "background01": "",
    "background02": "",
    "background03": "",
    "background04": "",
    "background05": "",
    "background06": "",
    "background07": "",
    "background08": "",
    "film01": "",
    "film02": "",
    "film03": ""
},
  // 外部動画URLは上のfilm01〜03へ。自前のMP4を置く場合だけ以下を使用します。
  // 例: film01: { src: "assets/videos/opening.mp4", label: "オープニング", captions: "assets/videos/opening-ja.vtt" }
  videos: {
    film01: { src: "", label: "オープニング", captions: "" },
    film02: { src: "", label: "プロフィール", captions: "" },
    film03: { src: "", label: "エンドロール", captions: "" }
  }
};

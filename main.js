/* 必要な機能だけを追加。HTMLの本文・ナビゲーションはJSなしでも表示されます。 */
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const mobile = window.matchMedia('(max-width: 700px)');
  const setMenu = (open, restoreFocus = false) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    nav.classList.toggle('is-open', open);
    if (restoreFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (event) => {
    if (mobile.matches && event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', (event) => {
    if (mobile.matches && !event.target.closest('.header-inner')) setMenu(false);
  });
  mobile.addEventListener('change', () => setMenu(false));
  setMenu(false);

  const config = window.WEDDING_CONFIG || {};
  // 空のURLはリンクにせず、準備中の表示を保ちます。
  // 外部リンクは https:// のみ。相対パスは動画ファイルの設定で利用できます。
  const validExternal = (value) => {
    if (typeof value !== 'string' || !value.trim()) return null;
    try {
      const url = new URL(value);
      return url.protocol === 'https:' ? url.href : null;
    } catch { return null; }
  };
  document.querySelectorAll('[data-link]').forEach((slot) => {
    const key = slot.dataset.link;
    const url = validExternal(config.links?.[key]);
    if (!url) return;
    const link = document.createElement('a');
    link.className = slot.className.replace('pending-link', '').trim() + ' active-link';
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${slot.dataset.label}（別タブで開く）`);
    const label = document.createElement('span');
    label.textContent = slot.dataset.label;
    const arrow = document.createElement('span');
    arrow.className = 'external-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    link.append(label, arrow);
    slot.replaceWith(link);
    if (key === 'photoFolder') {
      const note = document.querySelector('.share-copy > .help-text');
      if (note) note.textContent = 'Google ドライブを別タブで開きます。';
    }
  });

  // MP4を直接配置する場合だけ使用。空欄では動画要素を生成しません。
  document.querySelectorAll('[data-video]').forEach((poster) => {
    const media = config.videos?.[poster.dataset.video];
    if (!media?.src) return;
    const src = media.src;
    if (!/^(assets\/videos\/[a-zA-Z0-9_./-]+\.mp4|https:\/\/[^\s]+)$/i.test(src) || src.includes('..')) return;
    const video = document.createElement('video');
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.poster = poster.querySelector('img').getAttribute('src');
    video.setAttribute('aria-label', media.label || 'ウエディング動画');
    video.src = src;
    if (media.captions && /^assets\/videos\/[a-zA-Z0-9_-]+\.vtt$/i.test(media.captions)) {
      const track = document.createElement('track');
      track.kind = 'captions'; track.srclang = 'ja'; track.label = '日本語';
      track.src = media.captions; track.default = true; video.append(track);
    }
    video.append(document.createTextNode('動画を再生できない場合は、下の動画リンクをご利用ください。'));
    poster.replaceChildren(video);
    const card = poster.closest('.film-card');
    const slot = card.querySelector('.pending-link[data-link]');
    if (slot) {
      const link = document.createElement('a');
      link.className = 'button button-outline active-link';
      link.href = src; link.textContent = '動画ファイルを開く ↗';
      link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', '動画ファイルを開く（別タブで開く）');
      slot.replaceWith(link);
    }
  });
})();

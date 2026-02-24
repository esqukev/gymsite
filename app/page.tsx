"use client";

import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────────────────
   GLOBAL STYLES  –  Gymbox DNA:
   · Condensed / display brutalism  (Bebas Neue + Barlow Condensed)
   · Dead-black #090909 background
   · Neon green #4FBC01 as pure accent – used sparingly
   · Type-first layout — no glassmorphism, no blobs
   · Editorial grid-breaking with oversized type
   · Hover = colour inversion / underline slash / top-border reveal
   · Sections alternate #090909 / #111 / #0d0d0d
───────────────────────────────────────────────────────────────────────── */
const Styles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700&family=Barlow:wght@300;400;500&display=swap');

    *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
    html { scroll-behavior:smooth; }

    :root {
      --g:   #4FBC01;
      --y:   #D3E639;
      --bk:  #090909;
      --bk2: #111111;
      --bk3: #0d0d0d;
      --w:   #FEFEFE;
      --mu:  rgba(254,254,254,.42);
    }

    body {
      background:var(--bk);
      color:var(--w);
      font-family:'Barlow',sans-serif;
      font-weight:400;
      overflow-x:hidden;
    }

    /* Bola decorativa que sigue al cursor (encima, no reemplaza) */
    #cur {
      width:10px; height:10px; border-radius:50%;
      background:var(--g); position:fixed; pointer-events:none;
      z-index:9999; transform:translate(-50%,-50%);
      transition:width .15s,height .15s,background .2s,opacity .2s;
      mix-blend-mode:difference;
      opacity:.85;
    }
    #cur.big { width:38px; height:38px; background:transparent; border:1px solid var(--g); mix-blend-mode:normal; opacity:1; }

    ::-webkit-scrollbar { width:3px; }
    ::-webkit-scrollbar-track { background:var(--bk); }
    ::-webkit-scrollbar-thumb { background:var(--g); }

    .disp {
      font-family:'Bebas Neue',sans-serif;
      letter-spacing:.03em;
      line-height:.9;
    }
    .cond {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:700;
      text-transform:uppercase;
      letter-spacing:.08em;
    }
    .tag-lbl {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:600; font-size:.63rem;
      letter-spacing:.25em; text-transform:uppercase;
      color:var(--g);
    }

    nav {
      position:fixed; top:0; left:0; right:0; z-index:800;
      height:64px; display:flex; align-items:center;
      padding:0 40px;
      transition:background .35s,border-color .35s;
    }
    nav.solid {
      background:rgba(9,9,9,.96);
      backdrop-filter:blur(12px);
      border-bottom:1px solid rgba(79,188,1,.14);
    }
    .n-logo {
      font-family:'Bebas Neue',sans-serif;
      font-size:1.9rem; letter-spacing:.1em;
      color:var(--w); text-decoration:none; margin-right:auto;
    }
    .n-logo em { font-style:normal; color:var(--g); }
    .n-links { display:flex; gap:28px; list-style:none; margin-right:32px; }
    .n-links a {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:600; font-size:.76rem;
      letter-spacing:.15em; text-transform:uppercase;
      color:var(--mu); text-decoration:none;
      transition:color .2s;
    }
    .n-links a:hover { color:var(--w); }
    .n-btn {
      font-family:'Bebas Neue',sans-serif;
      font-size:1rem; letter-spacing:.1em;
      color:var(--bk); background:var(--g);
      padding:10px 26px; text-decoration:none; border:none;
      transition:background .2s;
    }
    .n-btn:hover { background:var(--y); }

    .hero {
      min-height:100vh; position:relative; overflow:hidden;
      display:flex; flex-direction:column; justify-content:flex-end;
      padding:0 40px 80px;
    }
    .hero-grid {
      position:absolute; inset:0;
      background-image:
        linear-gradient(rgba(79,188,1,.03) 1px,transparent 1px),
        linear-gradient(90deg,rgba(79,188,1,.03) 1px,transparent 1px);
      background-size:80px 80px;
    }
    .hero-slash {
      position:absolute; top:0; right:0; bottom:0; width:40%;
      clip-path:polygon(20% 0,100% 0,100% 100%,0 100%);
      background:repeating-linear-gradient(
        -45deg,rgba(79,188,1,.022) 0,rgba(79,188,1,.022) 1px,transparent 1px,transparent 26px
      );
      border-left:1px solid rgba(79,188,1,.06);
    }
    .hero-vline { position:absolute; top:0; left:0; width:3px; height:50%; background:var(--g); }
    .hero-vline-b { position:absolute; bottom:0; right:0; width:3px; height:30%; background:var(--g); }

    .hero-content { position:relative; z-index:2; max-width:1240px; margin:0 auto; width:100%; }
    .hero-eyebrow { display:flex; align-items:center; gap:14px; margin-bottom:28px; animation:fadeUp .7s .2s both; }
    .hero-eyebrow-line { width:40px; height:1px; background:var(--g); }

    .hero-title {
      font-size:clamp(5.5rem,16vw,15rem);
      line-height:.88; animation:fadeUp .85s .35s both;
    }
    .ht-ghost { display:block; -webkit-text-stroke:1px rgba(254,254,254,.11); color:transparent; }
    .ht-solid { display:block; }
    .ht-green { display:block; color:var(--g); }

    .hero-bottom {
      display:flex; align-items:flex-end; justify-content:space-between;
      flex-wrap:wrap; gap:28px;
      margin-top:52px; animation:fadeUp .85s .55s both;
    }
    .hero-desc { font-size:.98rem; color:var(--mu); line-height:1.8; max-width:400px; font-weight:300; }
    .hero-ctas { display:flex; gap:12px; flex-wrap:wrap; }

    .hero-scr {
      position:absolute; bottom:28px; left:50%; transform:translateX(-50%);
      display:flex; flex-direction:column; align-items:center; gap:10px; z-index:2;
      animation:fadeUp .8s 1.1s both;
    }
    .scr-txt { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:.56rem; letter-spacing:.3em; text-transform:uppercase; color:rgba(254,254,254,.28); }
    .scr-ln { width:1px; height:52px; background:linear-gradient(to bottom,var(--g),transparent); position:relative; overflow:hidden; }
    .scr-dot { position:absolute; width:100%; height:28%; background:var(--w); animation:scrDrop 2s ease-in-out infinite; }
    @keyframes scrDrop { 0%{top:0;opacity:1} 100%{top:130%;opacity:0} }

    .mq { overflow:hidden; background:var(--g); padding:12px 0; }
    .mq-inner { display:flex; width:max-content; animation:mq 20s linear infinite; }
    .mq-item { display:inline-flex; align-items:center; gap:22px; padding:0 28px; font-family:'Bebas Neue',sans-serif; font-size:1.1rem; letter-spacing:.1em; color:var(--bk); }
    .mq-dot { width:4px; height:4px; border-radius:50%; background:rgba(0,0,0,.22); }
    @keyframes mq { from{transform:translateX(0)} to{transform:translateX(-50%)} }

    .btn-solid { font-family:'Bebas Neue',sans-serif; font-size:1.05rem; letter-spacing:.1em; color:var(--bk); background:var(--g); padding:15px 42px; border:none; text-decoration:none; display:inline-block; transition:background .2s,transform .15s; }
    .btn-solid:hover { background:var(--y); transform:translateY(-2px); }
    .btn-line { font-family:'Bebas Neue',sans-serif; font-size:1.05rem; letter-spacing:.1em; color:var(--w); background:transparent; padding:14px 42px; border:1px solid rgba(254,254,254,.22); text-decoration:none; display:inline-block; transition:border-color .2s,color .2s; }
    .btn-line:hover { border-color:var(--g); color:var(--g); }

    .sec { padding:110px 40px; }
    .max { max-width:1240px; margin:0 auto; }
    .sec-hdr { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:56px; }

    .about-sec { background:var(--bk2); }
    .about-grid { display:grid; grid-template-columns:1fr 1fr; }
    .ab-vis { position:relative; min-height:620px; background:var(--bk3); overflow:hidden; }
    .ab-vis-inner { position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
      background:repeating-linear-gradient(-45deg,rgba(79,188,1,.025) 0,rgba(79,188,1,.025) 1px,transparent 1px,transparent 20px); }
    .ab-big { font-family:'Bebas Neue',sans-serif; font-size:22rem; color:var(--g); opacity:.035; line-height:1; user-select:none; }
    .ab-badge { position:absolute; bottom:36px; left:36px; background:var(--g); padding:10px 20px; }
    .ab-badge span { font-family:'Bebas Neue',sans-serif; font-size:1.9rem; color:var(--bk); letter-spacing:.06em; }
    .ab-badge small { display:block; font-family:'Barlow Condensed',sans-serif; font-size:.6rem; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:rgba(0,0,0,.55); }
    .ab-yr { position:absolute; top:50%; right:0; transform:translateY(-50%) rotate(90deg); font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:.62rem; letter-spacing:.3em; text-transform:uppercase; color:rgba(79,188,1,.35); white-space:nowrap; }

    .ab-copy { padding:80px 64px; display:flex; flex-direction:column; justify-content:center; }
    .ab-h2 { font-size:clamp(2.8rem,5.5vw,5.2rem); margin-bottom:24px; }
    .ab-p { font-size:.97rem; color:var(--mu); line-height:1.82; margin-bottom:40px; font-weight:300; }
    .ab-val { display:flex; gap:20px; padding:18px 0; border-bottom:1px solid rgba(255,255,255,.06); }
    .ab-num { font-family:'Bebas Neue',sans-serif; font-size:2.5rem; color:rgba(79,188,1,.14); line-height:1; flex-shrink:0; width:48px; }
    .ab-vt { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:.95rem; letter-spacing:.08em; text-transform:uppercase; margin-bottom:5px; }
    .ab-vd { font-size:.84rem; color:var(--mu); line-height:1.7; font-weight:300; }
    .ab-stats { display:flex; gap:40px; padding-top:40px; border-top:1px solid rgba(255,255,255,.07); }
    .ab-sn { font-family:'Bebas Neue',sans-serif; font-size:3rem; line-height:1; color:var(--g); }
    .ab-sl { font-size:.75rem; color:var(--mu); margin-top:4px; letter-spacing:.05em; line-height:1.4; white-space:pre-line; }

    .cl-sec { background:var(--bk); }
    .cl-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:2px; }
    .cl-card { position:relative; overflow:hidden; aspect-ratio:3/4; background:var(--bk2); }
    .cl-bg { position:absolute; inset:0; transition:transform .65s ease; }
    .cl-card:hover .cl-bg { transform:scale(1.06); }
    .cl-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(9,9,9,.93) 0%,rgba(9,9,9,.2) 55%,transparent 100%); transition:background .4s; }
    .cl-card:hover .cl-ov { background:linear-gradient(to top,rgba(9,9,9,.97) 0%,rgba(9,9,9,.55) 60%,rgba(9,9,9,.15) 100%); }
    .cl-body { position:absolute; bottom:0; left:0; right:0; padding:28px 22px; }
    .cl-ico { width:34px; height:34px; border:1px solid rgba(79,188,1,.35); display:flex; align-items:center; justify-content:center; color:var(--g); font-size:.9rem; margin-bottom:10px; opacity:0; transform:translateY(8px); transition:opacity .35s,transform .35s; }
    .cl-card:hover .cl-ico { opacity:1; transform:none; }
    .cl-name { font-family:'Bebas Neue',sans-serif; font-size:2rem; letter-spacing:.04em; line-height:1; }
    .cl-cnt { font-size:.7rem; color:var(--mu); margin-top:5px; letter-spacing:.12em; text-transform:uppercase; font-family:'Barlow Condensed',sans-serif; font-weight:500; }
    .cl-arr { display:flex; align-items:center; gap:8px; font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:.72rem; letter-spacing:.15em; text-transform:uppercase; color:var(--g); margin-top:12px; opacity:0; transform:translateX(-10px); transition:opacity .3s,transform .3s; }
    .cl-card:hover .cl-arr { opacity:1; transform:none; }
    .cl-n { position:absolute; top:18px; left:18px; font-family:'Bebas Neue',sans-serif; font-size:.9rem; color:rgba(254,254,254,.18); letter-spacing:.06em; }

    .tr-sec { background:var(--bk2); }
    .tr-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; }
    .tr-card { position:relative; overflow:hidden; aspect-ratio:2/3; background:var(--bk3); transition:transform .35s; }
    .tr-card:hover { transform:translateY(-8px); box-shadow:0 24px 60px rgba(0,0,0,.55), 0 0 28px rgba(79,188,1,.08); }
    .tr-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:var(--g); transform:scaleX(0); transform-origin:left; transition:transform .4s ease; z-index:3; }
    .tr-card:hover::before { transform:scaleX(1); }
    .tr-vis { width:100%; height:100%; display:flex; align-items:center; justify-content:center; position:relative; }
    .tr-pat { position:absolute; inset:0; background:repeating-linear-gradient(45deg,rgba(79,188,1,.025) 0,rgba(79,188,1,.025) 1px,transparent 1px,transparent 16px); }
    .tr-ini { font-family:'Bebas Neue',sans-serif; font-size:6rem; color:var(--g); opacity:.065; position:relative; z-index:1; letter-spacing:.06em; }
    .tr-info { position:absolute; bottom:0; left:0; right:0; padding:26px 20px; background:linear-gradient(to top,rgba(9,9,9,.97) 0%,rgba(9,9,9,.38) 68%,transparent 100%); }
    .tr-sp { font-family:'Barlow Condensed',sans-serif; font-size:.62rem; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:var(--g); margin-bottom:5px; }
    .tr-nm { font-family:'Bebas Neue',sans-serif; font-size:1.65rem; letter-spacing:.04em; line-height:1; }
    .tr-bio { font-size:.79rem; color:var(--mu); margin-top:8px; line-height:1.6; max-height:0; overflow:hidden; transition:max-height .4s ease; }
    .tr-card:hover .tr-bio { max-height:80px; }
    .tr-socs { display:flex; gap:7px; margin-top:12px; opacity:0; transform:translateY(6px); transition:opacity .3s .1s,transform .3s .1s; }
    .tr-card:hover .tr-socs { opacity:1; transform:none; }
    .tr-sb { width:28px; height:28px; border:1px solid rgba(79,188,1,.3); display:flex; align-items:center; justify-content:center; color:var(--g); font-size:.6rem; font-family:'Barlow Condensed',sans-serif; font-weight:700; letter-spacing:.06em; transition:background .2s,color .2s; }
    .tr-sb:hover { background:var(--g); color:var(--bk); }

    .gl-sec { background:var(--bk); }
    .gl-grid { display:grid; grid-template-columns:repeat(12,1fr); gap:4px; margin-top:56px; }
    .gi { overflow:hidden; position:relative; background:var(--bk2); }
    .gi-a { grid-column:span 5; aspect-ratio:4/5; }
    .gi-b { grid-column:span 4; aspect-ratio:16/9; }
    .gi-c { grid-column:span 3; aspect-ratio:16/9; }
    .gi-d { grid-column:span 3; aspect-ratio:4/3; }
    .gi-e { grid-column:span 4; aspect-ratio:4/3; }
    .gi-in { width:100%; height:100%; transition:transform .65s ease; display:flex; align-items:center; justify-content:center; }
    .gi:hover .gi-in { transform:scale(1.06); }
    .gi-word { font-family:'Bebas Neue',sans-serif; font-size:6rem; color:var(--g); opacity:.04; letter-spacing:.08em; }
    .gi-dark { position:absolute; inset:0; background:rgba(9,9,9,0); transition:background .4s; }
    .gi:hover .gi-dark { background:rgba(9,9,9,.32); }
    .gi-lbl { position:absolute; bottom:0; left:0; right:0; padding:14px 18px; background:linear-gradient(to top,rgba(9,9,9,.85),transparent); font-family:'Bebas Neue',sans-serif; font-size:1.2rem; letter-spacing:.08em; color:var(--y); opacity:0; transition:opacity .3s; }
    .gi:hover .gi-lbl { opacity:1; }

    .ts-sec { background:var(--bk2); }
    .ts-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; }
    .ts-card { padding:40px 34px; background:var(--bk3); position:relative; overflow:hidden; transition:background .3s; }
    .ts-card::before { content:''; position:absolute; left:0; top:0; bottom:0; width:0; background:var(--g); transition:width .4s ease; }
    .ts-card:hover { background:#141414; }
    .ts-card:hover::before { width:3px; }
    .ts-qq { font-family:'Bebas Neue',sans-serif; font-size:4rem; color:var(--g); opacity:.14; line-height:.8; margin-bottom:10px; }
    .ts-txt { font-size:.88rem; color:rgba(254,254,254,.58); line-height:1.82; font-style:italic; margin-bottom:26px; }
    .ts-aut { display:flex; align-items:center; gap:12px; }
    .ts-av { width:36px; height:36px; background:var(--g); display:flex; align-items:center; justify-content:center; font-family:'Bebas Neue',sans-serif; font-size:1.1rem; color:var(--bk); flex-shrink:0; }
    .ts-nm { font-weight:600; font-size:.86rem; }
    .ts-hd { font-size:.74rem; color:var(--mu); }
    .ts-stars { display:flex; gap:3px; margin-bottom:14px; }
    .star { color:var(--y); font-size:.82rem; }

    .cta-band { position:relative; overflow:hidden; padding:100px 40px; text-align:center; border-top:1px solid rgba(79,188,1,.1); border-bottom:1px solid rgba(79,188,1,.1); }
    .cta-band-glow { position:absolute; inset:0; background:radial-gradient(ellipse 55% 80% at 50% 50%,rgba(79,188,1,.065) 0%,transparent 70%); }
    .cta-title { font-size:clamp(4rem,10vw,9rem); line-height:.9; position:relative; z-index:1; }
    .cta-title em { font-style:normal; color:var(--g); }
    .cta-sub { font-size:.97rem; color:var(--mu); margin:20px auto 40px; max-width:460px; line-height:1.78; position:relative; z-index:1; font-weight:300; }

    .pr-sec { background:var(--bk2); }
    .pr-hdr { text-align:center; margin-bottom:60px; }
    .pr-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; max-width:860px; margin:0 auto; }
    .p-card { background:var(--bk3); padding:52px 46px; position:relative; overflow:hidden; transition:background .3s; }
    .p-card.hot { background:#0c1a00; box-shadow:inset 0 0 0 1px rgba(79,188,1,.32); }
    .p-card:not(.hot):hover { background:#161616; }
    .p-hot { position:absolute; top:0; right:0; background:var(--g); padding:6px 18px; font-family:'Bebas Neue',sans-serif; font-size:.92rem; letter-spacing:.1em; color:var(--bk); }
    .p-period { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:.68rem; letter-spacing:.22em; text-transform:uppercase; color:var(--mu); margin-bottom:18px; }
    .p-amt { font-family:'Bebas Neue',sans-serif; font-size:5.5rem; line-height:1; color:var(--w); display:flex; align-items:flex-start; gap:4px; }
    .p-amt sup { font-size:2rem; margin-top:14px; }
    .p-mo { font-size:.78rem; color:var(--mu); margin-top:6px; }
    .p-div { height:1px; background:rgba(255,255,255,.07); margin:26px 0; }
    .p-feat { display:flex; align-items:center; gap:12px; font-size:.87rem; color:rgba(254,254,254,.64); margin-bottom:11px; }
    .p-ck { color:var(--g); flex-shrink:0; }

    .ct-sec { background:var(--bk); }
    .ct-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }
    .ct-h2 { font-size:clamp(3rem,7vw,6rem); margin-bottom:22px; }
    .ct-p { font-size:.94rem; color:var(--mu); line-height:1.82; margin-bottom:42px; font-weight:300; }
    .ct-dt { display:flex; gap:14px; align-items:center; margin-bottom:22px; }
    .ct-ico { width:40px; height:40px; border:1px solid rgba(79,188,1,.22); display:flex; align-items:center; justify-content:center; color:var(--g); flex-shrink:0; }
    .ct-lbl { font-size:.6rem; letter-spacing:.2em; text-transform:uppercase; color:var(--mu); }
    .ct-val { font-size:.9rem; margin-top:2px; }
    .ct-map { margin-top:34px; height:200px; border:1px solid rgba(79,188,1,.1); background:var(--bk3); position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center; }
    .ct-map-grid { position:absolute; inset:0; background-image:linear-gradient(rgba(79,188,1,.038) 1px,transparent 1px),linear-gradient(90deg,rgba(79,188,1,.038) 1px,transparent 1px); background-size:28px 28px; }
    .ct-pin { position:relative; z-index:1; display:flex; flex-direction:column; align-items:center; gap:8px; }
    .ct-dot { width:14px; height:14px; border-radius:50%; background:var(--g); box-shadow:0 0 0 7px rgba(79,188,1,.18),0 0 30px rgba(79,188,1,.35); animation:ping 2s ease-in-out infinite; }
    @keyframes ping { 0%,100%{box-shadow:0 0 0 7px rgba(79,188,1,.18),0 0 30px rgba(79,188,1,.35)} 50%{box-shadow:0 0 0 16px rgba(79,188,1,.06),0 0 50px rgba(79,188,1,.25)} }
    .ct-loclbl { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.1em; color:var(--g); }
    .ct-form { display:flex; flex-direction:column; gap:15px; }
    .cf-f { display:flex; flex-direction:column; gap:6px; }
    .cf-l { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:.63rem; letter-spacing:.22em; text-transform:uppercase; color:var(--g); }
    .cf-i,.cf-t { background:rgba(255,255,255,.042); border:1px solid rgba(255,255,255,.09); color:var(--w); font-family:'Barlow',sans-serif; font-size:.9rem; padding:14px 16px; outline:none; transition:border-color .3s,box-shadow .3s; resize:none; }
    .cf-i:focus,.cf-t:focus { border-color:var(--g); box-shadow:0 0 0 3px rgba(79,188,1,.07); }
    .cf-t { min-height:110px; }

    .fab { position:fixed; bottom:28px; right:28px; z-index:700; width:52px; height:52px; background:var(--g); border:none; display:flex; align-items:center; justify-content:center; color:var(--bk); box-shadow:0 0 28px rgba(79,188,1,.38); transition:background .2s,transform .2s; font-size:1.25rem; }
    .fab:hover { background:var(--y); transform:scale(1.07); }
    .ch-win { position:fixed; bottom:92px; right:28px; z-index:699; width:330px; background:var(--bk2); border:1px solid rgba(79,188,1,.18); display:flex; flex-direction:column; box-shadow:0 40px 80px rgba(0,0,0,.75); animation:chatIn .25s ease; }
    @keyframes chatIn { from{opacity:0;transform:translateY(10px) scale(.98)} to{opacity:1;transform:none} }
    .ch-hd { display:flex; align-items:center; gap:10px; padding:14px 16px; background:rgba(79,188,1,.07); border-bottom:1px solid rgba(79,188,1,.1); }
    .ch-av { width:32px; height:32px; background:var(--g); display:flex; align-items:center; justify-content:center; font-family:'Bebas Neue',sans-serif; font-size:.9rem; color:var(--bk); flex-shrink:0; }
    .ch-nm { font-family:'Bebas Neue',sans-serif; font-size:.95rem; letter-spacing:.06em; }
    .ch-st { font-size:.62rem; color:var(--g); letter-spacing:.1em; text-transform:uppercase; margin-top:1px; }
    .ch-cl { margin-left:auto; background:none; border:none; color:var(--mu); font-size:1rem; transition:color .2s; }
    .ch-cl:hover { color:var(--w); }
    .ch-msgs { height:255px; overflow-y:auto; padding:14px; display:flex; flex-direction:column; gap:10px; }
    .ch-msgs::-webkit-scrollbar { width:2px; }
    .ch-msgs::-webkit-scrollbar-thumb { background:var(--g); }
    .m-b { max-width:84%; font-size:.81rem; line-height:1.55; padding:10px 13px; align-self:flex-start; background:rgba(79,188,1,.09); border-left:2px solid var(--g); color:rgba(254,254,254,.85); }
    .m-u { max-width:84%; font-size:.81rem; line-height:1.55; padding:10px 13px; align-self:flex-end; background:rgba(255,255,255,.07); border-right:2px solid rgba(255,255,255,.18); }
    .ch-row { display:flex; gap:8px; padding:10px 12px; border-top:1px solid rgba(255,255,255,.05); }
    .ch-in { flex:1; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.08); color:var(--w); font-family:'Barlow',sans-serif; font-size:.81rem; padding:9px 12px; outline:none; transition:border-color .3s; }
    .ch-in:focus { border-color:var(--g); }
    .ch-sn { width:36px; height:36px; background:var(--g); border:none; flex-shrink:0; display:flex; align-items:center; justify-content:center; color:var(--bk); transition:background .2s; font-size:1rem; }
    .ch-sn:hover { background:var(--y); }

    footer { background:var(--bk); border-top:2px solid var(--g); padding:64px 40px 40px; }
    .ft-top { display:grid; grid-template-columns:1.5fr 1fr 1fr; gap:60px; padding-bottom:48px; border-bottom:1px solid rgba(255,255,255,.06); }
    .ft-logo { font-family:'Bebas Neue',sans-serif; font-size:3.2rem; letter-spacing:.08em; color:var(--w); display:block; margin-bottom:12px; }
    .ft-logo em { font-style:normal; color:var(--g); }
    .ft-tag { font-size:.87rem; color:var(--mu); line-height:1.72; max-width:240px; font-weight:300; }
    .ft-col-h { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:.66rem; letter-spacing:.24em; text-transform:uppercase; color:var(--g); margin-bottom:18px; }
    .ft-links { list-style:none; display:flex; flex-direction:column; gap:10px; }
    .ft-links a { font-size:.85rem; color:var(--mu); text-decoration:none; transition:color .2s; }
    .ft-links a:hover { color:var(--w); }
    .ft-soc { display:flex; gap:10px; margin-top:22px; }
    .fsb { width:36px; height:36px; border:1px solid rgba(255,255,255,.1); display:flex; align-items:center; justify-content:center; color:var(--mu); font-size:.72rem; font-family:'Barlow Condensed',sans-serif; font-weight:700; letter-spacing:.08em; transition:border-color .2s,color .2s; }
    .fsb:hover { border-color:var(--g); color:var(--g); }
    .ft-bot { display:flex; justify-content:space-between; align-items:center; padding-top:26px; flex-wrap:wrap; gap:12px; }
    .ft-copy { font-size:.7rem; color:rgba(254,254,254,.2); letter-spacing:.05em; }

    .rv { opacity:0; transform:translateY(26px); transition:opacity .8s ease,transform .8s ease; }
    .rv.in { opacity:1; transform:none; }
    .rl { opacity:0; transform:translateX(-26px); transition:opacity .8s ease,transform .8s ease; }
    .rl.in { opacity:1; transform:none; }
    .rr { opacity:0; transform:translateX(26px); transition:opacity .8s ease,transform .8s ease; }
    .rr.in { opacity:1; transform:none; }

    @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }

    @media(max-width:960px){
      nav { padding:0 20px; }
      .n-links { display:none; }
      .sec { padding:72px 20px; }
      .hero { padding:0 20px 60px; }
      .about-grid { grid-template-columns:1fr; }
      .ab-vis { min-height:300px; }
      .ab-copy { padding:44px 24px; }
      .cl-grid { grid-template-columns:1fr 1fr; }
      .tr-grid { grid-template-columns:1fr 1fr; }
      .ts-grid { grid-template-columns:1fr; }
      .pr-grid { grid-template-columns:1fr; max-width:400px; margin:0 auto; }
      .ct-grid { grid-template-columns:1fr; gap:48px; }
      .gl-grid { grid-template-columns:1fr 1fr; }
      .gi-a { grid-column:span 2; }
      .gi-b,.gi-c,.gi-d,.gi-e { grid-column:span 1; }
      footer { padding:48px 20px 32px; }
      .ft-top { grid-template-columns:1fr; gap:36px; }
    }
  `}} />
);

const CLASSES = [
  { name: "Fuerza", cnt: "8 · semana", ico: "🏋️", g: "linear-gradient(160deg,#060e00,#0d1900,#090909)" },
  { name: "Fight", cnt: "6 · semana", ico: "🥊", g: "linear-gradient(160deg,#0e0600,#1a0c00,#090909)" },
  { name: "Funcional", cnt: "10 · semana", ico: "⚡", g: "linear-gradient(160deg,#050d00,#0e1800,#090909)" },
  { name: "Ride", cnt: "5 · semana", ico: "🚴", g: "linear-gradient(160deg,#00070e,#001018,#090909)" },
  { name: "Holístico", cnt: "4 · semana", ico: "🧘", g: "linear-gradient(160deg,#05000f,#0d0018,#090909)" },
  { name: "Cardio", cnt: "7 · semana", ico: "🔥", g: "linear-gradient(160deg,#0e0200,#1a0400,#090909)" },
  { name: "Rhythm", cnt: "3 · semana", ico: "🎵", g: "linear-gradient(160deg,#0a0500,#160b00,#090909)" },
  { name: "Aerial", cnt: "2 · semana", ico: "🎪", g: "linear-gradient(160deg,#00090d,#001218,#090909)" },
];

const TRAINERS = [
  { nm: "Marcos Ruiz", sp: "Powerlifting & Fuerza", bio: "Campeón nacional. 12 años formando atletas.", ini: "MR", g: "linear-gradient(160deg,#060e00,#0c1800,#090909)" },
  { nm: "Valeria Ossa", sp: "Hipertrofia & Composición", bio: "Coach certificada NSCA. Especialista en transformación.", ini: "VO", g: "linear-gradient(160deg,#0a0b00,#131800,#090909)" },
  { nm: "Daniel Ford", sp: "CrossFit & Funcional", bio: "Ex atleta profesional. Programas para todos los niveles.", ini: "DF", g: "linear-gradient(160deg,#050e00,#0c1800,#090909)" },
  { nm: "Sofía Méndez", sp: "Wellness & Movilidad", bio: "Fisioterapeuta deportiva. El movimiento sin dolor.", ini: "SM", g: "linear-gradient(160deg,#07090a,#0e1200,#090909)" },
];

const TESTI = [
  { txt: "En 3 meses cambié completamente mi físico. El plan semi-personalizado es simplemente una locura.", aut: "Carlos M.", hd: "@carlosmfit", ini: "C" },
  { txt: "Los coaches no son instructores comunes. Entienden tu cuerpo y explican el porqué de cada movimiento.", aut: "Daniela R.", hd: "@danielarfit", ini: "D" },
  { txt: "La comunidad es increíble. Entras solo y en una semana tienes personas que te empujan a ser mejor.", aut: "Juan P.", hd: "@juanpower", ini: "J" },
  { txt: "El programa de fuerza rompió todos mis records en menos de 8 semanas. Resultados reales, sin excusas.", aut: "Miguel A.", hd: "@miguelathletic", ini: "M" },
  { txt: "El salto vs un gym normal es brutal. Equipment, ambiente — se nota que aquí saben lo que hacen.", aut: "Valeria S.", hd: "@valssfit", ini: "V" },
  { txt: "Con la guía nutricional perdí 12kg en 4 meses sin sacrificar músculo. La combinación perfecta.", aut: "Roberto K.", hd: "@robertok", ini: "R" },
];

const GALLERY = [
  { lbl: "Sala de Pesas", cls: "gi-a", g: "linear-gradient(160deg,#060e00,#0c1700,#090909)" },
  { lbl: "Zona Cardio", cls: "gi-b", g: "linear-gradient(160deg,#0a0d00,#131700,#090909)" },
  { lbl: "Box Funcional", cls: "gi-c", g: "linear-gradient(160deg,#050c00,#0e1600,#090909)" },
  { lbl: "Área Recovery", cls: "gi-d", g: "linear-gradient(160deg,#030710,#060e18,#090909)" },
  { lbl: "Equipamiento Pro", cls: "gi-e", g: "linear-gradient(160deg,#0a0800,#160f00,#090909)" },
];

const REPLIES = [
  "¡Bienvenido a FFO! 💪 ¿En qué puedo ayudarte hoy?",
  "Tenemos clases de Fuerza, Funcional, Fight, Ride y más. ¿Qué tipo de entreno buscas?",
  "Para transformación, recomendamos coaching semi-personalizado + nutrición. ¿Quieres saber más?",
  "Puedes agendar una evaluación gratuita de 45 min con uno de nuestros coaches.",
  "¡Listo! Un coach se pondrá en contacto en menos de 24 horas. 🚀",
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv,.rl,.rr");
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useCursor() {
  useEffect(() => {
    const cur = document.getElementById("cur");
    if (!cur) return;
    const mv = (e: MouseEvent) => {
      cur.style.left = e.clientX + "px";
      cur.style.top = e.clientY + "px";
    };
    const on = () => cur.classList.add("big");
    const off = () => cur.classList.remove("big");
    window.addEventListener("mousemove", mv);
    document.querySelectorAll("a,button,.cl-card,.tr-card,.gi,.ts-card,.p-card").forEach((el) => {
      el.addEventListener("mouseenter", on);
      el.addEventListener("mouseleave", off);
    });
    return () => {
      window.removeEventListener("mousemove", mv);
    };
  }, []);
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) setActive(true);
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!active) return;
    let n = 0;
    const step = Math.max(1, Math.ceil(to / 55));
    const t = setInterval(() => {
      n = Math.min(n + step, to);
      setV(n);
      if (n >= to) clearInterval(t);
    }, 22);
    return () => clearInterval(t);
  }, [active, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const linkId = (l: string) => l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return (
    <nav className={solid ? "solid" : ""}>
      <a href="#top" className="n-logo">FF<em>O</em></a>
      <ul className="n-links">
        {["Clases", "Trainers", "Galería", "Membresías", "Contacto"].map((l) => (
          <li key={l}>
            <a href={`#${linkId(l)}`}>{l}</a>
          </li>
        ))}
      </ul>
      <a href="#membresias" className="n-btn">Únete</a>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid" />
      <div className="hero-slash" />
      <div className="hero-vline" />
      <div className="hero-vline-b" />
      <div className="hero-content">
        <div className="hero-eyebrow">
          <div className="hero-eyebrow-line" />
          <span className="tag-lbl">Gym Premium · Musculación · Comunidad</span>
        </div>
        <h1 className="hero-title disp">
          <span className="ht-ghost">FORJA</span>
          <span className="ht-solid">TU</span>
          <span className="ht-green">MEJOR</span>
          <span className="ht-solid">VERSIÓN</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-desc">
            FFO no es solo un gimnasio — es la comunidad donde la disciplina se convierte en identidad. Coaches de élite, equipamiento de primer nivel, resultados reales.
          </p>
          <div className="hero-ctas">
            <a href="#membresias" className="btn-solid">Prueba gratis</a>
            <a href="#clases" className="btn-line">Ver clases</a>
          </div>
        </div>
      </div>
      <div className="hero-scr">
        <span className="scr-txt">Scroll</span>
        <div className="scr-ln"><div className="scr-dot" /></div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Fuerza", "Comunidad", "Élite", "Musculación", "Disciplina", "Resultados", "FFO Gym", "500+ Miembros"];
  return (
    <div className="mq">
      <div className="mq-inner">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="mq-item">{it}<span className="mq-dot" /></span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="about-sec" id="nosotros">
      <div className="about-grid">
        <div className="ab-vis rl">
          <div className="ab-vis-inner"><span className="ab-big">12</span></div>
          <div className="ab-badge">
            <small>Años de</small>
            <span>Excelencia</span>
          </div>
          <span className="ab-yr">EST. 2012 · FFO GYM · ÉLITE</span>
        </div>
        <div className="ab-copy">
          <span className="tag-lbl rv">Sobre FFO</span>
          <h2 className="ab-h2 disp rv">
            MÁS QUE<br />UN GYM.<br /><em style={{ fontStyle: "normal", color: "var(--g)" }}>UN MOVIMIENTO.</em>
          </h2>
          <p className="ab-p rv">
            FFO emergió con una sola misión: crear el entorno más serio para quienes se toman en serio su cuerpo y su mente. No vendemos membresías genéricas — construimos atletas. Cada coach, programa y metro cuadrado está diseñado para que superes tu versión anterior.
          </p>
          {[
            { n: "01", t: "Comunidad Real", d: "Un entorno donde todos se empujan mutuamente. Sin egos, solo resultados." },
            { n: "02", t: "Disciplina Científica", d: "Metodología basada en periodización y evidencia que convierte hábitos en resultados." },
            { n: "03", t: "Alto Rendimiento", d: "Equipamiento de clase mundial y protocolos diseñados por campeones." },
          ].map((v) => (
            <div key={v.n} className="ab-val rv">
              <span className="ab-num">{v.n}</span>
              <div>
                <div className="ab-vt">{v.t}</div>
                <p className="ab-vd">{v.d}</p>
              </div>
            </div>
          ))}
          <div className="ab-stats rv">
            {[
              { to: 500, su: "+", lbl: "Miembros\nActivos" },
              { to: 12, su: "", lbl: "Años de\nExcelencia" },
              { to: 98, su: "%", lbl: "Retención\nAnual" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="ab-sn"><Counter to={s.to} suffix={s.su} /></div>
                <div className="ab-sl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Classes() {
  return (
    <section className="cl-sec sec" id="clases">
      <div className="max">
        <div className="sec-hdr">
          <div>
            <span className="tag-lbl rv">Clases</span>
            <h2 className="disp rv" style={{ fontSize: "clamp(3rem,7vw,6rem)", marginTop: 12 }}>
              70+ CLASES.<br /><span style={{ color: "var(--g)" }}>7 CATEGORÍAS.</span>
            </h2>
          </div>
          <a href="#contacto" className="btn-solid rv">Ver horario</a>
        </div>
        <div className="cl-grid rv">
          {CLASSES.map((c, i) => (
            <div key={c.name} className="cl-card">
              <div
                className="cl-bg"
                style={{
                  background: c.g,
                  backgroundImage: `${c.g},repeating-linear-gradient(-45deg,rgba(79,188,1,.022) 0,rgba(79,188,1,.022) 1px,transparent 1px,transparent 18px)`,
                }}
              />
              <div className="cl-ov" />
              <span className="cl-n">0{i + 1}</span>
              <div className="cl-body">
                <div className="cl-ico">{c.ico}</div>
                <div className="cl-name">{c.name}</div>
                <div className="cl-cnt">{c.cnt}</div>
                <div className="cl-arr">Ver clases →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trainers() {
  return (
    <section className="tr-sec sec" id="trainers">
      <div className="max">
        <div className="sec-hdr">
          <div>
            <span className="tag-lbl rv">El Equipo</span>
            <h2 className="disp rv" style={{ fontSize: "clamp(3rem,7vw,6rem)", marginTop: 12 }}>
              COACHES<br /><span style={{ color: "var(--g)" }}>ÉLITE</span>
            </h2>
          </div>
          <p className="rv" style={{ maxWidth: 300, fontSize: ".94rem", color: "var(--mu)", lineHeight: 1.78, fontWeight: 300 }}>
            Profesionales certificados con resultados probados — cada uno especializado para llevarte exactamente a donde quieres llegar.
          </p>
        </div>
        <div className="tr-grid">
          {TRAINERS.map((t, i) => (
            <div key={t.nm} className="tr-card rv" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="tr-vis" style={{ background: t.g }}>
                <div className="tr-pat" />
                <span className="tr-ini">{t.ini}</span>
              </div>
              <div className="tr-info">
                <div className="tr-sp">{t.sp}</div>
                <div className="tr-nm disp">{t.nm}</div>
                <div className="tr-bio">{t.bio}</div>
                <div className="tr-socs">
                  {["IG", "TW", "YT"].map((s) => <div key={s} className="tr-sb">{s}</div>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gl-sec sec" id="galeria">
      <div className="max">
        <div className="sec-hdr">
          <div>
            <span className="tag-lbl rv">Instalaciones</span>
            <h2 className="disp rv" style={{ fontSize: "clamp(3rem,7vw,6rem)", marginTop: 12 }}>
              EL ESPACIO<br /><span style={{ color: "var(--g)" }}>QUE MERECES</span>
            </h2>
          </div>
          <a href="#contacto" className="btn-line rv">Agenda visita</a>
        </div>
        <div className="gl-grid rv">
          {GALLERY.map((it) => (
            <div key={it.lbl} className={`gi ${it.cls}`}>
              <div className="gi-in" style={{ background: it.g }}>
                <span className="gi-word">FFO</span>
              </div>
              <div className="gi-dark" />
              <div className="gi-lbl">{it.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="ts-sec sec">
      <div className="max">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="tag-lbl rv">Resultados Reales</span>
          <h2 className="disp rv" style={{ fontSize: "clamp(3rem,7vw,6rem)", marginTop: 12 }}>
            LO QUE DICEN<br /><span style={{ color: "var(--g)" }}>NUESTROS ATLETAS</span>
          </h2>
        </div>
        <div className="ts-grid">
          {TESTI.map((t, i) => (
            <div key={t.aut} className="ts-card rv" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="ts-stars">{Array.from({ length: 5 }).map((_, j) => <span key={j} className="star">★</span>)}</div>
              <div className="ts-qq">&quot;</div>
              <p className="ts-txt">{t.txt}</p>
              <div className="ts-aut">
                <div className="ts-av disp">{t.ini}</div>
                <div>
                  <div className="ts-nm">{t.aut}</div>
                  <div className="ts-hd">{t.hd}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <div className="cta-band">
      <div className="cta-band-glow" />
      <h2 className="cta-title disp rv">EMPIEZA<br /><em>HOY</em></h2>
      <p className="cta-sub rv">La primera sesión de evaluación es gratuita. Sin compromisos — solo tú, un coach y un plan real para llegar a tu meta.</p>
      <div style={{ display: "flex", gap: 14, justifyContent: "center", position: "relative", zIndex: 1 }} className="rv">
        <a href="#contacto" className="btn-solid">Prueba gratis</a>
        <a href="#membresias" className="btn-line">Ver planes</a>
      </div>
    </div>
  );
}

function Pricing() {
  const plans = [
    { period: "Plan Mensual", price: "49", mo: "/mes", hot: false, feats: ["Acceso ilimitado al gym", "Clases grupales incluidas", "App FFO & seguimiento", "Vestuarios premium"] },
    { period: "Plan Anual", price: "39", mo: "/mes · Facturado anualmente", hot: true, feats: ["Todo lo del plan mensual", "Evaluación física gratuita", "1 sesión personal/mes", "Nutrición básica incluida", "Prioridad en reserva de clases"] },
  ];
  return (
    <section className="pr-sec sec" id="membresias">
      <div className="max">
        <div className="pr-hdr">
          <span className="tag-lbl rv">Membresías</span>
          <h2 className="disp rv" style={{ fontSize: "clamp(3rem,7vw,6rem)", marginTop: 12 }}>
            ELIGE TU<br /><span style={{ color: "var(--g)" }}>PLAN</span>
          </h2>
          <p className="rv" style={{ color: "var(--mu)", marginTop: 14, fontSize: ".95rem", lineHeight: 1.75, fontWeight: 300 }}>Sin contratos trampa. Sin cargos ocultos. Solo entrenamiento de verdad.</p>
        </div>
        <div className="pr-grid">
          {plans.map((p) => (
            <div key={p.period} className={`p-card rv ${p.hot ? "hot" : ""}`}>
              {p.hot && <div className="p-hot">Mejor Valor</div>}
              <div className="p-period">{p.period}</div>
              <div className="p-amt disp"><sup>$</sup>{p.price}</div>
              <div className="p-mo">{p.mo}</div>
              <div className="p-div" />
              {p.feats.map((f) => (
                <div key={f} className="p-feat"><span className="p-ck">✓</span>{f}</div>
              ))}
              <div style={{ marginTop: 32 }}>
                <a href="#contacto" className={p.hot ? "btn-solid" : "btn-line"} style={{ display: "block", textAlign: "center" }}>Comenzar Ahora</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", msg: "" });
  const [sent, setSent] = useState(false);
  const setField = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));
  return (
    <section className="ct-sec sec" id="contacto">
      <div className="max">
        <div className="ct-grid">
          <div>
            <span className="tag-lbl rl">Contacto</span>
            <h2 className="ct-h2 disp rl">DA EL<br /><span style={{ color: "var(--g)" }}>PRIMER<br />PASO</span></h2>
            <p className="ct-p rl">Agenda tu evaluación gratuita de 45 minutos. Un coach revisará tus objetivos y condición física para diseñar un plan real.</p>
            {[
              { ico: "📍", lbl: "Ubicación", val: "Av. Principal 1234, Ciudad" },
              { ico: "🕐", lbl: "Horarios", val: "Lun–Vie 5:30–23:00 · Sáb–Dom 7:00–21:00" },
              { ico: "📞", lbl: "Teléfono", val: "+1 (555) 000-0000" },
              { ico: "✉️", lbl: "Email", val: "info@ffogym.com" },
            ].map((d) => (
              <div key={d.lbl} className="ct-dt rl">
                <div className="ct-ico">{d.ico}</div>
                <div><div className="ct-lbl">{d.lbl}</div><div className="ct-val">{d.val}</div></div>
              </div>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 32 }} className="rl ft-soc">
              <a href="https://www.facebook.com/FitnessforoneS.A" target="_blank" rel="noopener noreferrer" className="fsb" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/ffo_gym" target="_blank" rel="noopener noreferrer" className="fsb" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@ffo_gym" target="_blank" rel="noopener noreferrer" className="fsb" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
            </div>
            <div className="ct-map rl">
              <div className="ct-map-grid" />
              <div className="ct-pin">
                <div className="ct-dot" />
                <div className="ct-loclbl">FFO GYM · CENTRO</div>
              </div>
            </div>
          </div>
          <div className="rr">
            {sent ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <div className="disp" style={{ fontSize: "5rem", color: "var(--g)", lineHeight: 0.9 }}>LISTO</div>
                <div className="cond" style={{ fontSize: "1rem", marginTop: 16, color: "var(--mu)" }}>Te contactaremos en menos de 24 horas</div>
              </div>
            ) : (
              <form className="ct-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <h3 className="disp" style={{ fontSize: "2.2rem", marginBottom: 8 }}>
                  AGENDA TU<br /><span style={{ color: "var(--g)" }}>EVALUACIÓN GRATIS</span>
                </h3>
                {[
                  { l: "Nombre completo", k: "name" as const, t: "text" as const },
                  { l: "Email", k: "email" as const, t: "email" as const },
                  { l: "Teléfono", k: "phone" as const, t: "tel" as const },
                ].map((f) => (
                  <div key={f.k} className="cf-f">
                    <label className="cf-l">{f.l}</label>
                    <input className="cf-i" type={f.t} required value={form[f.k]} onChange={setField(f.k)} />
                  </div>
                ))}
                <div className="cf-f">
                  <label className="cf-l">Mensaje (opcional)</label>
                  <textarea className="cf-t" value={form.msg} onChange={setField("msg")} />
                </div>
                <button type="submit" className="btn-solid" style={{ width: "100%", marginTop: 8, textAlign: "center" }}>
                  Enviar Solicitud →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<{ f: string; t: string }[]>([{ f: "b", t: REPLIES[0] }]);
  const [inp, setInp] = useState("");
  const [ri, setRi] = useState(1);
  const bot = useRef<HTMLDivElement>(null);
  const send = () => {
    if (!inp.trim()) return;
    setMsgs((m) => [...m, { f: "u", t: inp }]);
    setInp("");
    setTimeout(() => {
      setMsgs((m) => [...m, { f: "b", t: REPLIES[ri % REPLIES.length] }]);
      setRi((i) => i + 1);
    }, 650);
  };
  useEffect(() => {
    bot.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);
  return (
    <>
      {open && (
        <div className="ch-win">
          <div className="ch-hd">
            <div className="ch-av disp">FFO</div>
            <div><div className="ch-nm">FFO Asistente</div><div className="ch-st">● En línea</div></div>
            <button type="button" className="ch-cl" onClick={() => setOpen(false)} aria-label="Cerrar">✕</button>
          </div>
          <div className="ch-msgs">
            {msgs.map((m, i) => <div key={i} className={m.f === "b" ? "m-b" : "m-u"}>{m.t}</div>)}
            <div ref={bot} />
          </div>
          <div className="ch-row">
            <input className="ch-in" placeholder="Escribe tu mensaje..." value={inp} onChange={(e) => setInp(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} />
            <button type="button" className="ch-sn" onClick={send} aria-label="Enviar">→</button>
          </div>
        </div>
      )}
      <button type="button" className="fab" onClick={() => setOpen((o) => !o)} aria-label="Chat">{open ? "✕" : "💬"}</button>
    </>
  );
}

function Footer() {
  const linkId = (l: string) => l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return (
    <footer>
      <div className="ft-top">
        <div>
          <span className="ft-logo">FF<em>O</em></span>
          <p className="ft-tag">Forja · Fuerza · Obsesión<br />El gym donde los resultados no son opcionales.</p>
          <div className="ft-soc">
            <a href="https://www.facebook.com/FitnessforoneS.A" target="_blank" rel="noopener noreferrer" className="fsb" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/ffo_gym" target="_blank" rel="noopener noreferrer" className="fsb" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@ffo_gym" target="_blank" rel="noopener noreferrer" className="fsb" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div className="ft-col-h">Navegación</div>
          <ul className="ft-links">
            {["Clases", "Trainers", "Galería", "Membresías", "Contacto"].map((l) => (
              <li key={l}><a href={`#${linkId(l)}`}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="ft-col-h">Información</div>
          <ul className="ft-links">
            {["Sobre FFO", "Política de Privacidad", "Términos y Condiciones", "Trabaja con Nosotros", "Blog"].map((l) => (
              <li key={l}><a href="#top">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="ft-bot">
        <span className="ft-copy">® 2025 FFO GYM · Todos los derechos reservados.</span>
        <span className="ft-copy">Diseñado para quienes no se conforman.</span>
      </div>
    </footer>
  );
}

export default function FFOGym() {
  useReveal();
  useCursor();
  return (
    <>
      <Styles />
      <div id="cur" />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Classes />
      <Trainers />
      <Gallery />
      <Testimonials />
      <CTABand />
      <Pricing />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  );
}

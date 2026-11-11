(function () {
  var S = window.SITE;
  var CLEAN = document.body.getAttribute("data-mode") === "clean"; // clean = no contact / no other platforms
  var $ = function (s) { return document.querySelector(s); };
  var PAGE = 24, shown = PAGE, cat = "all", lang = "en", list = [];

  function pad(n) { return ("00" + n).slice(-3); }
  function src(n, t) { return "assets/img/work/w" + pad(n) + (t ? "_t" : "") + ".jpg"; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ----- gallery model ----- */
  var catOf = {};
  ["maps", "brand", "functional", "storage", "light"].forEach(function (c) {
    S.gallery.cats[c].forEach(function (n) { if (!(n in catOf)) catOf[n] = c; });
  });
  var all = [];
  for (var i = 0; i < S.gallery.total; i++) if ((S.gallery.exclude || []).indexOf(i) < 0) all.push({ n: i, c: catOf[i] || "gifts" });
  var feat = S.gallery.featured;
  all.sort(function (a, b) {
    var fa = feat.indexOf(a.n), fb = feat.indexOf(b.n);
    if (fa < 0) fa = 999 + a.n; if (fb < 0) fb = 999 + b.n;
    return fa - fb;
  });

  function setList() { list = all.filter(function (x) { return cat === "all" || x.c === cat; }); }

  function renderGallery() {
    var T = S[lang].work; setList();
    var cats = ["all", "light", "storage", "gifts", "brand", "functional", "maps"].filter(function (c) {
      return c === "all" || all.some(function (x) { return x.c === c; });
    });
    $("#filters").innerHTML = cats.map(function (c) {
      return '<button class="chip' + (c === cat ? " on" : "") + '" data-cat="' + c + '">' + esc(T.cats[c]) + "</button>";
    }).join("");
    $("#grid").innerHTML = list.slice(0, shown).map(function (x, k) {
      return '<button class="tile" data-i="' + k + '"><img loading="lazy" src="' + src(x.n, 1) + '" alt="' + esc(T.alt) + '"></button>';
    }).join("");
    $("#more").style.display = shown < list.length ? "" : "none";
    $("#more").textContent = T.more;
  }

  /* ----- render all text ----- */
  function render() {
    var T = S[lang];
    document.documentElement.lang = lang; document.documentElement.dir = T.dir;
    document.title = (lang === "ar" ? "أحمد حاج مواس" : "Ahmed Haj Mawas") + " — " + T.hero.role;
    $("#langBtn").textContent = T.langName;

    $("#nav").innerHTML = ["work", "services", "process", "about", "journey"].concat(CLEAN ? [] : ["contact"]).map(function (k) {
      return '<a href="#' + k + '">' + T.nav[k] + "</a>";
    }).join("");

    $("#hero").innerHTML =
      '<div class="hero-text"><span class="badge">' + esc(T.hero.badge) + "</span><h1>" + T.hero.title + "</h1><p class=lead>" + esc(T.hero.lead) + "</p>" +
      '<div class="btns"><a class="btn pri" href="#work">' + esc(T.hero.cta1) + "</a>" + (CLEAN ? "" : '<a class="btn" href="#contact">' + esc(T.hero.cta2) + "</a>") + "</div>" +
      '<div class="stats">' + T.stats.map(function (s) { return "<div><b>" + esc(s.n) + "</b><span>" + esc(s.l) + "</span></div>"; }).join("") + "</div></div>" +
      '<div class="hero-card"><img src="assets/img/profile.jpg" alt="' + esc(lang === "ar" ? "أحمد حاج مواس" : "Ahmed Haj Mawas") + '"><div><b>' +
      (lang === "ar" ? "أحمد حاج مواس" : "Ahmed Haj Mawas") + "</b><span>" + esc(T.hero.role) + "</span><em>" + esc(T.hero.tag) + "</em></div></div>";

    $("#workHead").innerHTML = "<p class=kick>" + esc(T.work.kicker) + "</p><h2>" + esc(T.work.title) + "</h2><p class=lead>" + esc(T.work.lead) + "</p>";
    $("#workNote").textContent = T.work.note;

    $("#servicesBody").innerHTML = "<p class=kick>" + esc(T.services.kicker) + "</p><h2>" + esc(T.services.title) + "</h2><div class=cards>" +
      T.services.items.map(function (it, k) { return '<div class="card"><i>' + (k + 1) + "</i><h3>" + esc(it[0]) + "</h3><p>" + esc(it[1]) + "</p></div>"; }).join("") + "</div>" +
      '<div class="pills"><span class=pl>' + esc(T.services.files) + "</span>" + ["DXF", "SVG", "CDR", "AI", "PDF", "JPG"].map(function (x) { return "<span class=pill>" + x + "</span>"; }).join("") +
      '<span class=pl>' + esc(T.services.tools) + "</span>" + ["CorelDRAW", "RDWorks", "Illustrator", "Photoshop", "Inkscape"].map(function (x) { return "<span class=pill>" + x + "</span>"; }).join("") + "</div>";

    $("#processBody").innerHTML = "<p class=kick>" + esc(T.process.kicker) + "</p><h2>" + esc(T.process.title) + "</h2><p class=lead>" + esc(T.process.lead) + "</p>" +
      '<div class="steps">' + T.process.steps.map(function (s, k) { return '<div class="step"><b>0' + (k + 1) + "</b><h3>" + esc(s[0]) + "</h3><p>" + esc(s[1]) + "</p></div>"; }).join("") + "</div>" +
      '<div class="slides">' + T.process.slides.map(function (s) { return '<figure><img loading="lazy" src="assets/img/slides/' + s.img + '" alt="' + esc(s.cap) + '"><figcaption>' + esc(s.cap) + "</figcaption></figure>"; }).join("") + "</div>";

    var C = T.case;
    $("#caseBody").innerHTML = '<div><p class=kick>' + esc(C.kicker) + "</p><h2>" + esc(C.title) + '</h2><p class="meta">' + esc(C.meta) + "</p><ul>" +
      C.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + '</ul></div><blockquote>“' + esc(C.quote) + "”<cite>★★★★★ " + esc(C.quoteBy) + "</cite></blockquote>";

    var A = T.about;
    $("#aboutBody").innerHTML = "<p class=kick>" + esc(A.kicker) + "</p><h2>" + esc(A.title) + '</h2><div class="two"><div><p>' + esc(A.p1) + "</p><p>" + esc(A.p2) + "</p><p>" + esc(A.p3) + '</p><p class="small">' + esc(A.langs) + "</p></div>" +
      '<div><h3>' + esc(A.timelineTitle) + '</h3><ol class="tl">' + A.timeline.map(function (r) { return "<li><time>" + esc(r[0]) + "</time><b>" + esc(r[1]) + "</b><span>" + esc(r[2]) + "</span></li>"; }).join("") + "</ol></div></div>";

    var K = T.skills;
    $("#skillsBody").innerHTML = "<p class=kick>" + esc(K.kicker) + "</p><h2>" + esc(K.title) + '</h2><div class="cards sk">' +
      K.groups.map(function (g) { return '<div class="card"><h3>' + esc(g[0]) + "</h3><div class=pills>" + g[1].map(function (x) { return "<span class=pill>" + esc(x) + "</span>"; }).join("") + "</div></div>"; }).join("") + "</div>";

    var J = T.journey;
    $("#journeyBody").innerHTML = "<p class=kick>" + esc(J.kicker) + "</p><h2>" + esc(J.title) + "</h2><p class=lead>" + esc(J.lead) + '</p><div class="log">' +
      S.updates.map(function (u) { var c = u[lang] || u.en; return '<div class="entry"><time>' + esc(u.date) + '</time><div><span class="tag ' + u.type + '">' + esc(J.types[u.type] || u.type) + "</span><h3>" + esc(c.t) + "</h3><p>" + esc(c.d) + "</p></div></div>"; }).join("") + "</div>";

    var sec = $("#contact");
    if (CLEAN) { sec.style.display = "none"; }
    else {
      var L = S.links, P = T.contact, b = "";
      if (L.email) b += '<a class="btn pri" href="mailto:' + esc(L.email) + '">' + esc(P.email) + ": " + esc(L.email) + "</a>";
      if (L.cv) b += '<a class="btn" href="' + esc(L.cv) + '" target="_blank" rel="noopener">' + esc(P.cv) + "</a>";
      var plat = [];
      if (L.linkedin) plat.push(["LinkedIn", L.linkedin]);
      if (L.upwork) plat.push(["Upwork", L.upwork]);
      if (L.fiverrProfile) plat.push(["Fiverr", L.fiverrProfile]);
      (L.fiverr || []).forEach(function (f, k) { plat.push(["Fiverr" + (L.fiverr.length > 1 ? " " + (k + 1) : "") + " — " + f[lang], f.url]); });
      ["khamsat:خمسات:Khamsat", "mostaql:مستقل:Mostaql", "baeed:بعيد:Baeed", "golance:Golance:Golance", "contra:Contra:Contra"].forEach(function (s) {
        var p = s.split(":"); if (L[p[0]]) plat.push([lang === "ar" ? p[1] : p[2], L[p[0]]]);
      });
      sec.innerHTML = '<div class="wrap"><p class=kick>' + esc(P.kicker) + "</p><h2>" + esc(P.title) + "</h2><p class=lead>" + esc(P.lead) + '</p><div class="btns">' + b + "</div>" +
        (plat.length ? '<p class="pl">' + esc(P.elsewhere) + '</p><div class="plat">' + plat.map(function (p) { return '<a class="pill link" href="' + esc(p[1]) + '" target="_blank" rel="noopener">' + esc(p[0]) + " ↗</a>"; }).join("") + "</div>" : "") + "</div>";
    }
    $("#foot").textContent = T.footer;
    renderGallery();
  }

  /* ----- events ----- */
  document.addEventListener("click", function (e) {
    var t = e.target.closest("button,a"); if (!t) return;
    if (t.id === "langBtn") { lang = lang === "en" ? "ar" : "en"; try { localStorage.setItem("lang", lang); } catch (x) {} render(); }
    else if (t.classList.contains("chip")) { cat = t.getAttribute("data-cat"); shown = PAGE; renderGallery(); }
    else if (t.id === "more") { shown += PAGE; renderGallery(); }
    else if (t.classList.contains("tile")) { openBox(+t.getAttribute("data-i")); }
  });

  var cur = 0, box = $("#box");
  function openBox(i) { cur = i; box.classList.add("open"); document.body.classList.add("lock"); showBox(); }
  function showBox() { $("#boxImg").src = src(list[cur].n, 0); $("#boxCount").textContent = (cur + 1) + " / " + list.length; }
  function closeBox() { box.classList.remove("open"); document.body.classList.remove("lock"); }
  function step(d) { cur = (cur + d + list.length) % list.length; showBox(); }
  $("#boxClose").onclick = closeBox; $("#boxPrev").onclick = function () { step(-1); }; $("#boxNext").onclick = function () { step(1); };
  box.addEventListener("click", function (e) { if (e.target === box) closeBox(); });
  document.addEventListener("keydown", function (e) {
    if (!box.classList.contains("open")) return;
    var rtl = document.documentElement.dir === "rtl";
    if (e.key === "Escape") closeBox();
    if (e.key === "ArrowRight") step(rtl ? -1 : 1);
    if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
  });

  /* ----- start ----- */
  try { var q = new URLSearchParams(location.search).get("lang"); lang = q === "ar" || q === "en" ? q : (localStorage.getItem("lang") || "en"); } catch (x) {}
  if (lang !== "ar") lang = "en";
  render();
})();

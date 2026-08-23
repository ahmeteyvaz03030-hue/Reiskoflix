// ---------- Çevrimdışı yedek film listesi (API anahtarı yokken gösterilir) ----------
const FALLBACK_ITEMS = [
  {
    key: "odyssey",
    mediaType: "movie",
    tmdbId: null,
    title: "The Odyssey",
    year: 2026,
    genreLabel: "Macera",
    rating: 8.5,
    trailerKey: "iZETrTGhMDo",
    icon: "⚔️",
    gradient: "linear-gradient(150deg, #f5c060 0%, #7a4a12 60%, #2b1a06 100%)",
    poster: null,
    backdrop: null,
    overview: "Christopher Nolan'ın IMAX ile çekilen destansı uyarlaması: Truva Savaşı'nın ardından Kral Odysseus, evine ve ailesine dönmek için tehlikelerle dolu efsanevi bir yolculuğa çıkar."
  },
  {
    key: "hailmary",
    mediaType: "movie",
    tmdbId: null,
    title: "Project Hail Mary",
    year: 2026,
    genreLabel: "Bilim Kurgu",
    rating: 8.2,
    trailerKey: "m08TxIsFTRI",
    icon: "🚀",
    gradient: "linear-gradient(150deg, #4facfe 0%, #1e3a8a 55%, #0b1029 100%)",
    poster: null,
    backdrop: null,
    overview: "Bir fen bilgisi öğretmeni olan Ryland Grace, hafızasını kaybetmiş şekilde Dünya'dan ışık yılları uzaktaki bir uzay gemisinde uyanır ve insanlığı kurtaracak imkansız bir görevle yüzleşir."
  },
  {
    key: "avatar3",
    mediaType: "movie",
    tmdbId: null,
    title: "Avatar: Fire and Ash",
    year: 2025,
    genreLabel: "Bilim Kurgu",
    rating: 8.0,
    trailerKey: "nb_fFj_0rq8",
    icon: "🔥",
    gradient: "linear-gradient(150deg, #ff7e5f 0%, #7c1d3f 55%, #1a0b2e 100%)",
    poster: null,
    backdrop: null,
    overview: "Pandora'da Jake Sully ve ailesi, Kızıl İnsanlar olarak bilinen yeni ve acımasız bir Na'vi klanıyla karşı karşıya gelir. Serinin en görkemli ve karanlık bölümü."
  },
  {
    key: "zootopia2",
    mediaType: "movie",
    tmdbId: null,
    title: "Zootopia 2",
    year: 2025,
    genreLabel: "Animasyon",
    rating: 7.8,
    trailerKey: "3u1CzhhvGec",
    icon: "🦊",
    gradient: "linear-gradient(150deg, #43e97b 0%, #2563eb 55%, #1e1b4b 100%)",
    poster: null,
    backdrop: null,
    overview: "Dedektif ikilisi Judy Hopps ve Nick Wilde, Zootopia'nın en gizemli davasını çözmek için şehrin daha önce görmedikleri köşelerine iner."
  },
  {
    key: "wickedfg",
    mediaType: "movie",
    tmdbId: null,
    title: "Wicked: For Good",
    year: 2025,
    genreLabel: "Müzikal",
    rating: 7.9,
    trailerKey: "N-R_GTvJqh0",
    icon: "🧙‍♀️",
    gradient: "linear-gradient(150deg, #34d399 0%, #be185d 60%, #1e1033 100%)",
    poster: null,
    backdrop: null,
    overview: "Elphaba ve Glinda'nın hikayesinin büyülü final perdesi: Oz diyarında dostluk, güç ve kader arasında verilen destansı mücadele son buluyor."
  },
  {
    key: "superman25",
    mediaType: "movie",
    tmdbId: null,
    title: "Superman",
    year: 2025,
    genreLabel: "Süper Kahraman",
    rating: 7.3,
    trailerKey: "2woCZg5QdVE",
    icon: "🦸",
    gradient: "linear-gradient(150deg, #60a5fa 0%, #b91c1c 60%, #0b1029 100%)",
    poster: null,
    backdrop: null,
    overview: "James Gunn'ın yeniden hayal ettiği DC evreninde, hem bir Kryptonlu hem de bir Kansas'lı olarak insanlığa ve kendi doğruluğuna inancını koruyan bir Superman."
  },
  {
    key: "mi8",
    mediaType: "movie",
    tmdbId: null,
    title: "Mission: Impossible – The Final Reckoning",
    year: 2025,
    genreLabel: "Aksiyon",
    rating: 7.6,
    trailerKey: "MtrMxywpuLU",
    icon: "🕶️",
    gradient: "linear-gradient(150deg, #94a3b8 0%, #7f1d1d 60%, #0a0a0f 100%)",
    poster: null,
    backdrop: null,
    overview: "Ethan Hunt ve ekibi, dünyayı tehdit eden yapay zeka silahına karşı son ve en tehlikeli görevlerinde tüm gücüyle mücadele eder."
  },
  {
    key: "dune2",
    mediaType: "movie",
    tmdbId: null,
    title: "Dune: Part Two",
    year: 2024,
    genreLabel: "Bilim Kurgu",
    rating: 8.5,
    trailerKey: "jk4NU_lSjk8",
    icon: "🏜️",
    gradient: "linear-gradient(150deg, #f0a869 0%, #8a4b12 55%, #241505 100%)",
    poster: null,
    backdrop: null,
    overview: "Paul Atreides, Fremenlerle birleşerek ailesini yok edenlerden intikam almak için Arrakis çölünde bir isyanın liderliğine yükselir."
  },
  {
    key: "deadpool3",
    mediaType: "movie",
    tmdbId: null,
    title: "Deadpool & Wolverine",
    year: 2024,
    genreLabel: "Aksiyon",
    rating: 7.7,
    trailerKey: "73_1biulkYk",
    icon: "🗡️",
    gradient: "linear-gradient(150deg, #ef4444 0%, #1f2937 60%, #0a0a0f 100%)",
    poster: null,
    backdrop: null,
    overview: "Wade Wilson, çok evrenli bir krizi önlemek için isteksiz bir Wolverine ile güç birliği yapar. Marvel tarihinin en çılgın ve komik ikilisi."
  },
  {
    key: "insideout2",
    mediaType: "movie",
    tmdbId: null,
    title: "Inside Out 2",
    year: 2024,
    genreLabel: "Animasyon",
    rating: 7.6,
    trailerKey: "7WMArR7tWho",
    icon: "🧠",
    gradient: "linear-gradient(150deg, #fbbf24 0%, #ec4899 55%, #4c1d95 100%)",
    poster: null,
    backdrop: null,
    overview: "Riley ergenliğe adım atarken zihninde yeni duygular belirir: Kaygı, Kıskançlık, Can Sıkıntısı ve Utanç, Sevinç'in düzenini alt üst eder."
  },
  {
    key: "moana2",
    mediaType: "movie",
    tmdbId: null,
    title: "Moana 2",
    year: 2024,
    genreLabel: "Macera",
    rating: 6.7,
    trailerKey: "r__ksbieeR8",
    icon: "🌊",
    gradient: "linear-gradient(150deg, #22d3ee 0%, #0369a1 55%, #082f49 100%)",
    poster: null,
    backdrop: null,
    overview: "Moana, beklenmedik bir çağrı alır ve Maui ile birlikte uzak denizlerin ötesindeki unutulmuş adaları keşfetmek için tehlikeli bir yolculuğa çıkar."
  }
];

// ---------- Durum ----------
let currentProfile = null;
let activeFilter = "all";
const supportsHoverTilt = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// ---------- TMDB entegrasyonu: API anahtarı varsa TÜM film & dizi kataloğu ----------
const TMDB_KEY_STORAGE = "reiskoflix_tmdb_key";
const TMDB_BASE = "https://api.themoviedb.org/3";
const IMG_W500 = "https://image.tmdb.org/t/p/w500";
const IMG_W1280 = "https://image.tmdb.org/t/p/w1280";
const TMDB_LANG = "tr-TR";

// Eski sürümden kalan tekil-poster önbelleğini temizle (artık kullanılmıyor)
localStorage.removeItem("reiskoflix_tmdb_cache");

const CATALOG_ROWS = [
  { title: "Trend Olanlar", path: "/trending/all/week", multi: true },
  { title: "Popüler Filmler", path: "/movie/popular", mediaType: "movie" },
  { title: "Popüler Diziler", path: "/tv/popular", mediaType: "tv" },
  { title: "En Çok Beğenilen Filmler", path: "/movie/top_rated", mediaType: "movie" },
  { title: "En Çok Beğenilen Diziler", path: "/tv/top_rated", mediaType: "tv" },
  { title: "Vizyondaki Filmler", path: "/movie/now_playing", mediaType: "movie" },
  { title: "Şu An Yayınlanan Diziler", path: "/tv/on_the_air", mediaType: "tv" },
  { title: "Yakında Vizyonda", path: "/movie/upcoming", mediaType: "movie" }
];

let genreMap = {};
let catalogCache = null;
let catalogLoadingPromise = null;

function getTmdbKey() {
  return localStorage.getItem(TMDB_KEY_STORAGE) || "";
}

async function tmdbGet(path, params = {}) {
  const qs = new URLSearchParams({
    api_key: getTmdbKey(),
    language: TMDB_LANG,
    include_adult: "false",
    ...params
  });
  const res = await fetch(`${TMDB_BASE}${path}?${qs.toString()}`);
  if (!res.ok) throw new Error(`TMDB HTTP ${res.status}`);
  return res.json();
}

async function loadGenreMaps() {
  try {
    const [movieG, tvG] = await Promise.all([
      tmdbGet("/genre/movie/list"),
      tmdbGet("/genre/tv/list")
    ]);
    const map = {};
    (movieG.genres || []).forEach(g => { map[g.id] = g.name; });
    (tvG.genres || []).forEach(g => { if (!map[g.id]) map[g.id] = g.name; });
    genreMap = map;
  } catch {
    genreMap = {};
  }
}

function normalizeTmdbItem(raw, mediaType) {
  const title = mediaType === "movie" ? raw.title : raw.name;
  const dateStr = mediaType === "movie" ? raw.release_date : raw.first_air_date;
  const genreNames = (raw.genre_ids || []).map(id => genreMap[id]).filter(Boolean).slice(0, 2);
  return {
    key: `${mediaType}-${raw.id}`,
    mediaType,
    tmdbId: raw.id,
    title: title || "Bilinmeyen",
    year: dateStr ? dateStr.slice(0, 4) : "—",
    rating: raw.vote_average ? Math.round(raw.vote_average * 10) / 10 : 0,
    overview: raw.overview || "Bu içerik için açıklama bulunamadı.",
    genreLabel: genreNames.length ? genreNames.join(", ") : (mediaType === "movie" ? "Film" : "Dizi"),
    poster: raw.poster_path ? `${IMG_W500}${raw.poster_path}` : null,
    backdrop: raw.backdrop_path ? `${IMG_W1280}${raw.backdrop_path}` : null,
    icon: mediaType === "movie" ? "🎬" : "📺",
    gradient: mediaType === "movie"
      ? "linear-gradient(150deg, #7c3aed 0%, #3730a3 55%, #0a0a0f 100%)"
      : "linear-gradient(150deg, #ec4899 0%, #831843 55%, #0a0a0f 100%)",
    trailerKey: null
  };
}

async function loadCatalog() {
  await loadGenreMaps();
  const pages = [1, 2];
  const rowResults = await Promise.all(CATALOG_ROWS.map(async cfg => {
    try {
      const pageResults = await Promise.all(pages.map(p => tmdbGet(cfg.path, { page: p })));
      let items = [];
      pageResults.forEach(pr => {
        (pr.results || []).forEach(raw => {
          const mt = cfg.multi ? raw.media_type : cfg.mediaType;
          if (mt !== "movie" && mt !== "tv") return;
          items.push(normalizeTmdbItem(raw, mt));
        });
      });
      const seen = new Set();
      items = items.filter(it => (seen.has(it.key) ? false : (seen.add(it.key), true)));
      return { title: cfg.title, items };
    } catch (err) {
      console.warn("TMDB satırı yüklenemedi:", cfg.title, err);
      return { title: cfg.title, items: [] };
    }
  }));

  const rows = rowResults.filter(r => r.items.length > 0);
  const heroPool = rowResults[0].items.filter(it => it.backdrop);
  const hero = heroPool[0] || rows.flatMap(r => r.items).find(it => it.backdrop) || null;

  catalogCache = { rows, hero };
  return catalogCache;
}

function ensureCatalog() {
  if (catalogCache) return Promise.resolve(catalogCache);
  if (catalogLoadingPromise) return catalogLoadingPromise;
  catalogLoadingPromise = loadCatalog().finally(() => { catalogLoadingPromise = null; });
  return catalogLoadingPromise;
}

async function fetchTrailerKey(item) {
  if (item.trailerKey) return item.trailerKey;
  if (!item.tmdbId) return null;
  try {
    let data = await tmdbGet(`/${item.mediaType}/${item.tmdbId}/videos`, { language: TMDB_LANG });
    let vids = data.results || [];
    if (!vids.length) {
      data = await tmdbGet(`/${item.mediaType}/${item.tmdbId}/videos`, { language: "en-US" });
      vids = data.results || [];
    }
    const found = vids.find(v => v.site === "YouTube" && v.type === "Trailer") ||
      vids.find(v => v.site === "YouTube" && v.type === "Teaser") ||
      vids.find(v => v.site === "YouTube");
    item.trailerKey = found ? found.key : "";
    return item.trailerKey;
  } catch {
    return null;
  }
}

function getAllKnownItems() {
  const arr = [...FALLBACK_ITEMS];
  if (catalogCache) {
    catalogCache.rows.forEach(r => arr.push(...r.items));
    if (catalogCache.hero && !arr.some(i => i.key === catalogCache.hero.key)) {
      arr.push(catalogCache.hero);
    }
  }
  return arr;
}

function updatePosterButtonState() {
  document.getElementById("posterSettingsBtn").classList.toggle("is-active", !!getTmdbKey());
}

// ---------- İzlenme durumu (profile özel) ----------
function watchedKey(profile) {
  return `reiskoflix_watched_${profile}`;
}

function getWatched() {
  try {
    return JSON.parse(localStorage.getItem(watchedKey(currentProfile))) || [];
  } catch {
    return [];
  }
}

function isWatched(key) {
  return getWatched().includes(key);
}

function toggleWatched(key) {
  const list = getWatched();
  const idx = list.indexOf(key);
  if (idx >= 0) list.splice(idx, 1);
  else list.push(key);
  localStorage.setItem(watchedKey(currentProfile), JSON.stringify(list));
}

// ---------- Profil seçimi ----------
document.querySelectorAll(".profile-card").forEach(card => {
  card.addEventListener("click", () => {
    currentProfile = card.dataset.profile;
    document.getElementById("profileScreen").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("profileScreen").classList.add("hidden");
      document.getElementById("app").classList.remove("hidden");
      enterApp();
    }, 250);
  });
});

document.getElementById("switchProfileBtn").addEventListener("click", () => {
  document.getElementById("app").classList.add("hidden");
  const ps = document.getElementById("profileScreen");
  ps.classList.remove("hidden");
  ps.style.opacity = "1";
  activeFilter = "all";
  document.getElementById("searchInput").value = "";
});

function enterApp() {
  document.getElementById("profileAvatarMini").textContent = currentProfile.charAt(0).toUpperCase();
  document.getElementById("profileNameLabel").textContent = currentProfile;
  document.getElementById("profileAvatarMini").style.background = currentProfile === "Reiskoflix"
    ? "linear-gradient(145deg, #ff2d3d, #8a0007)"
    : "linear-gradient(145deg, #a78bfa, #4c1d95)";
  updatePosterButtonState();
  renderHero();
  renderRows();
}

// ---------- Hero ----------
function renderHeroLoading() {
  document.getElementById("heroMedia").style.background = "linear-gradient(150deg, #3730a3 0%, #0a0a0f 100%)";
  document.getElementById("heroMedia").style.backgroundImage = "";
  document.getElementById("heroTitle").textContent = "Yükleniyor...";
  document.getElementById("heroMeta").innerHTML = "";
  document.getElementById("heroDesc").textContent = "TMDB kataloğu getiriliyor, birkaç saniye sürebilir...";
  document.getElementById("heroPlayBtn").onclick = null;
  document.getElementById("heroInfoBtn").onclick = null;
}

function renderHeroEmpty() {
  document.getElementById("heroMedia").style.background = "linear-gradient(150deg, #3730a3 0%, #0a0a0f 100%)";
  document.getElementById("heroMedia").style.backgroundImage = "";
  document.getElementById("heroTitle").textContent = "İçerik bulunamadı";
  document.getElementById("heroMeta").innerHTML = "";
  document.getElementById("heroDesc").textContent = "TMDB API anahtarı geçersiz olabilir. Lütfen 🖼️ butonundan kontrol et.";
  document.getElementById("heroPlayBtn").onclick = null;
  document.getElementById("heroInfoBtn").onclick = null;
}

function renderHeroFromItem(item) {
  if (!item) { renderHeroEmpty(); return; }
  document.getElementById("heroMedia").style.background = item.gradient;
  document.getElementById("heroMedia").style.backgroundImage = item.backdrop
    ? `linear-gradient(to right, rgba(10,10,15,0.35), rgba(10,10,15,0.05)), url(${item.backdrop})`
    : "";
  document.getElementById("heroTitle").textContent = item.title;
  document.getElementById("heroDesc").textContent = item.overview;
  document.getElementById("heroMeta").innerHTML = `
    <span class="rating-pill">★ ${item.rating || "—"}</span>
    <span>${item.year}</span>
    <span>${item.mediaType === "tv" ? "Dizi" : "Film"} · ${item.genreLabel}</span>
  `;
  document.getElementById("heroPlayBtn").onclick = () => openModal(item);
  document.getElementById("heroInfoBtn").onclick = () => openModal(item);
}

function renderHero() {
  if (getTmdbKey()) {
    if (catalogCache) {
      renderHeroFromItem(catalogCache.hero);
    } else {
      renderHeroLoading();
      ensureCatalog().then(() => renderHero()).catch(() => renderHeroEmpty());
    }
    return;
  }
  renderHeroFromItem(FALLBACK_ITEMS[0]);
}

// ---------- Satırları oluştur ----------
function renderRows() {
  const wrap = document.getElementById("rowsWrap");

  if (activeFilter === "watched") {
    wrap.innerHTML = "";
    const watchedIds = getWatched();
    const seen = new Set();
    const watchedItems = getAllKnownItems().filter(it => {
      if (!watchedIds.includes(it.key) || seen.has(it.key)) return false;
      seen.add(it.key);
      return true;
    });
    wrap.appendChild(buildGridSection("İzlenenler", watchedItems, "Henüz izlenmiş olarak işaretlenen içerik yok."));
    return;
  }

  if (getTmdbKey()) {
    if (!catalogCache) {
      wrap.innerHTML = `<p class="empty-msg">📡 TMDB kataloğu yükleniyor, birkaç saniye sürebilir...</p>`;
      ensureCatalog().then(() => { if (activeFilter === "all") renderRows(); });
      return;
    }
    wrap.innerHTML = "";
    if (catalogCache.rows.length === 0) {
      wrap.innerHTML = `<p class="empty-msg">İçerik yüklenemedi. Lütfen 🖼️ butonundan TMDB API anahtarını kontrol et.</p>`;
      return;
    }
    catalogCache.rows.forEach(row => wrap.appendChild(buildRowSection(row.title, row.items)));
    return;
  }

  wrap.innerHTML = "";
  const genres = [...new Set(FALLBACK_ITEMS.map(m => m.genreLabel))];
  genres.forEach(genre => {
    const list = FALLBACK_ITEMS.filter(m => m.genreLabel === genre);
    wrap.appendChild(buildRowSection(genre, list));
  });
}

function buildRowSection(title, items) {
  const section = document.createElement("section");
  section.className = "row";
  section.innerHTML = `<h2 class="row-title">${title}</h2><div class="row-track"></div>`;
  const track = section.querySelector(".row-track");
  items.forEach(it => track.appendChild(buildCard(it)));
  return section;
}

function buildGridSection(title, items, emptyMsg) {
  const section = document.createElement("section");
  section.className = "row";
  section.innerHTML = `<h2 class="row-title">${title}</h2>`;
  if (items.length === 0) {
    const p = document.createElement("p");
    p.className = "empty-msg";
    p.textContent = emptyMsg;
    section.appendChild(p);
    return section;
  }
  const grid = document.createElement("div");
  grid.className = "grid";
  items.forEach(it => grid.appendChild(buildCard(it)));
  section.appendChild(grid);
  return section;
}

// ---------- Kart oluşturma + 3D tilt ----------
function buildCard(item) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.id = item.key;

  const watched = isWatched(item.key);
  const posterHtml = item.poster ? `<img class="poster-img" alt="" loading="lazy">` : "";

  card.innerHTML = `
    <div class="card-poster" style="background:${item.gradient}">
      ${posterHtml}
      <span class="card-icon">${item.icon}</span>
      <span class="card-poster-title">${item.title}</span>
      <span class="card-year">${item.year}</span>
      <span class="card-badge-rating">★ ${item.rating || "—"}</span>
      ${watched ? `<span class="card-watched-badge">✓ İzlendi</span>` : ""}
      <div class="card-overlay">
        <span class="card-overlay-title">${item.mediaType === "tv" ? "Dizi" : "Film"} · ${item.genreLabel}</span>
        <button class="mini-btn watch-toggle ${watched ? "watched-on" : ""}" title="İzlendi olarak işaretle">✓</button>
      </div>
    </div>
  `;

  if (item.poster) {
    const posterBox = card.querySelector(".card-poster");
    const img = posterBox.querySelector(".poster-img");
    img.addEventListener("load", () => posterBox.classList.add("has-image"));
    img.addEventListener("error", () => img.remove());
    img.src = item.poster;
  }

  // 3D tilt efekti (sadece gerçek fare ile, dokunmatik cihazlarda devre dışı)
  if (supportsHoverTilt) {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -6;
      const rotateY = ((x - cx) / cx) * 6;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`;
      card.querySelector(".card-poster").style.setProperty("--mx", `${(x / rect.width) * 100}%`);
      card.querySelector(".card-poster").style.setProperty("--my", `${(y / rect.height) * 100}%`);
    });
    card.addEventListener("mouseenter", () => {
      card.style.zIndex = "5";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)";
      card.style.zIndex = "";
    });
  }

  card.querySelector(".watch-toggle").addEventListener("click", e => {
    e.stopPropagation();
    toggleWatched(item.key);
    const btn = e.currentTarget;
    btn.classList.toggle("watched-on");
    const badge = card.querySelector(".card-watched-badge");
    if (isWatched(item.key)) {
      if (!badge) {
        const span = document.createElement("span");
        span.className = "card-watched-badge";
        span.textContent = "✓ İzlendi";
        card.querySelector(".card-poster").appendChild(span);
      }
    } else if (badge) {
      badge.remove();
    }
    if (activeFilter === "watched") renderRows();
  });

  card.addEventListener("click", () => openModal(item));

  return card;
}

// ---------- Modal ----------
function trailerIframeHtml(item) {
  return `<iframe src="https://www.youtube.com/embed/${item.trailerKey}?autoplay=1&rel=0" title="${item.title} fragman" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
}

function openModal(item) {
  document.getElementById("modalTitle").textContent = item.title;
  document.getElementById("modalMeta").innerHTML = `
    <span class="rating-pill">★ ${item.rating || "—"}</span>
    <span>${item.year}</span>
    <span class="genre-tag">${item.mediaType === "tv" ? "Dizi" : "Film"} · ${item.genreLabel}</span>
  `;
  document.getElementById("modalDesc").textContent = item.overview;

  const videoBox = document.getElementById("modalVideo");
  if (item.trailerKey) {
    videoBox.innerHTML = trailerIframeHtml(item);
  } else if (item.tmdbId) {
    videoBox.innerHTML = `<div class="video-loading">Fragman aranıyor...</div>`;
    fetchTrailerKey(item).then(key => {
      const stillOpen = !document.getElementById("modalOverlay").classList.contains("hidden");
      const stillSameItem = document.getElementById("modalTitle").textContent === item.title;
      if (!stillOpen || !stillSameItem) return;
      videoBox.innerHTML = key
        ? trailerIframeHtml(item)
        : `<div class="video-loading">Bu içerik için fragman bulunamadı.</div>`;
    });
  } else {
    videoBox.innerHTML = `<div class="video-loading">Fragman bulunamadı.</div>`;
  }

  const watchBtn = document.getElementById("modalWatchBtn");
  function refreshWatchBtn() {
    const w = isWatched(item.key);
    watchBtn.textContent = w ? "✓ İzlendi olarak işaretlendi" : "İzlendi olarak işaretle";
    watchBtn.classList.toggle("is-watched", w);
  }
  refreshWatchBtn();
  watchBtn.onclick = () => {
    toggleWatched(item.key);
    refreshWatchBtn();
    renderRows();
  };

  document.getElementById("modalOverlay").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
  document.getElementById("modalVideo").innerHTML = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target.id === "modalOverlay") closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// ---------- Nav filtre ----------
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    activeFilter = link.dataset.filter;
    document.getElementById("searchInput").value = "";
    document.getElementById("searchResultsWrap").classList.add("hidden");
    document.getElementById("rowsWrap").classList.remove("hidden");
    document.getElementById("hero").classList.remove("hidden");
    renderRows();
  });
});

// ---------- Arama (API anahtarı varsa tüm TMDB kataloğunda canlı arama) ----------
const searchInput = document.getElementById("searchInput");
let searchDebounceTimer = null;
let searchToken = 0;

searchInput.addEventListener("input", () => {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(runSearch, 350);
});

function showGridMessage(grid, text) {
  grid.innerHTML = "";
  const p = document.createElement("p");
  p.className = "empty-msg";
  p.textContent = text;
  grid.appendChild(p);
}

function runSearch() {
  const q = searchInput.value.trim();
  const heroEl = document.getElementById("hero");
  const rowsWrap = document.getElementById("rowsWrap");
  const resultsWrap = document.getElementById("searchResultsWrap");
  const grid = document.getElementById("searchGrid");

  if (!q) {
    resultsWrap.classList.add("hidden");
    rowsWrap.classList.remove("hidden");
    heroEl.classList.remove("hidden");
    return;
  }

  heroEl.classList.add("hidden");
  rowsWrap.classList.add("hidden");
  resultsWrap.classList.remove("hidden");

  const myToken = ++searchToken;

  if (getTmdbKey()) {
    showGridMessage(grid, "Aranıyor...");
    tmdbGet("/search/multi", { query: q })
      .then(data => {
        if (myToken !== searchToken) return;
        const results = (data.results || [])
          .filter(r => r.media_type === "movie" || r.media_type === "tv")
          .map(r => normalizeTmdbItem(r, r.media_type));
        if (results.length === 0) {
          showGridMessage(grid, `"${q}" için sonuç bulunamadı.`);
        } else {
          grid.innerHTML = "";
          results.forEach(it => grid.appendChild(buildCard(it)));
        }
      })
      .catch(() => {
        if (myToken !== searchToken) return;
        showGridMessage(grid, "Arama başarısız oldu. TMDB API anahtarını kontrol et.");
      });
    return;
  }

  const ql = q.toLowerCase();
  const matches = FALLBACK_ITEMS.filter(m =>
    m.title.toLowerCase().includes(ql) || m.genreLabel.toLowerCase().includes(ql)
  );
  if (matches.length === 0) {
    showGridMessage(grid, `"${q}" için sonuç bulunamadı.`);
  } else {
    grid.innerHTML = "";
    matches.forEach(m => grid.appendChild(buildCard(m)));
  }
}

// ---------- Navbar scroll efekti ----------
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 40) {
    nav.style.background = "rgba(8,8,12,0.96)";
  } else {
    nav.style.background = "linear-gradient(to bottom, rgba(5,5,8,0.95), rgba(5,5,8,0.4))";
  }
});

// ---------- TMDB API anahtarı ayar modalı ----------
const posterModalOverlay = document.getElementById("posterModalOverlay");
const tmdbKeyInput = document.getElementById("tmdbKeyInput");
const posterStatusMsg = document.getElementById("posterStatusMsg");

function showPosterStatus(msg, isError) {
  posterStatusMsg.textContent = msg;
  posterStatusMsg.className = "poster-status " + (isError ? "err" : "ok");
}

document.getElementById("posterSettingsBtn").addEventListener("click", () => {
  tmdbKeyInput.value = getTmdbKey();
  posterStatusMsg.textContent = "";
  posterStatusMsg.className = "poster-status";
  posterModalOverlay.classList.remove("hidden");
});

document.getElementById("posterModalClose").addEventListener("click", () => {
  posterModalOverlay.classList.add("hidden");
});
posterModalOverlay.addEventListener("click", e => {
  if (e.target === posterModalOverlay) posterModalOverlay.classList.add("hidden");
});

document.getElementById("tmdbKeySave").addEventListener("click", async () => {
  const key = tmdbKeyInput.value.trim();
  if (!key) {
    showPosterStatus("Lütfen bir API anahtarı gir.", true);
    return;
  }
  showPosterStatus("Kontrol ediliyor...", false);
  try {
    const res = await fetch(`${TMDB_BASE}/configuration?api_key=${key}`);
    if (!res.ok) throw new Error("invalid key");
    localStorage.setItem(TMDB_KEY_STORAGE, key);
    catalogCache = null;
    showPosterStatus("Anahtar kaydedildi! Tüm film ve dizi kataloğu yükleniyor...", false);
    updatePosterButtonState();
    renderHero();
    renderRows();
    setTimeout(() => posterModalOverlay.classList.add("hidden"), 900);
  } catch {
    showPosterStatus("Anahtar geçersiz görünüyor, lütfen kontrol et.", true);
  }
});

document.getElementById("tmdbKeyRemove").addEventListener("click", () => {
  localStorage.removeItem(TMDB_KEY_STORAGE);
  catalogCache = null;
  tmdbKeyInput.value = "";
  updatePosterButtonState();
  showPosterStatus("Anahtar kaldırıldı.", false);
  renderHero();
  renderRows();
});

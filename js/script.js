// ---------- Film verileri (gerçek 2024-2026 filmleri, gerçek YouTube fragman ID'leri) ----------
const MOVIES = [
  {
    id: "odyssey",
    title: "The Odyssey",
    year: 2026,
    genre: "Macera",
    rating: 8.5,
    trailer: "iZETrTGhMDo",
    icon: "⚔️",
    gradient: "linear-gradient(150deg, #f5c060 0%, #7a4a12 60%, #2b1a06 100%)",
    desc: "Christopher Nolan'ın IMAX ile çekilen destansı uyarlaması: Truva Savaşı'nın ardından Kral Odysseus, evine ve ailesine dönmek için tehlikelerle dolu efsanevi bir yolculuğa çıkar."
  },
  {
    id: "hailmary",
    title: "Project Hail Mary",
    year: 2026,
    genre: "Bilim Kurgu",
    rating: 8.2,
    trailer: "m08TxIsFTRI",
    icon: "🚀",
    gradient: "linear-gradient(150deg, #4facfe 0%, #1e3a8a 55%, #0b1029 100%)",
    desc: "Bir fen bilgisi öğretmeni olan Ryland Grace, hafızasını kaybetmiş şekilde Dünya'dan ışık yılları uzaktaki bir uzay gemisinde uyanır ve insanlığı kurtaracak imkansız bir görevle yüzleşir."
  },
  {
    id: "avatar3",
    title: "Avatar: Fire and Ash",
    year: 2025,
    genre: "Bilim Kurgu",
    rating: 8.0,
    trailer: "nb_fFj_0rq8",
    icon: "🔥",
    gradient: "linear-gradient(150deg, #ff7e5f 0%, #7c1d3f 55%, #1a0b2e 100%)",
    desc: "Pandora'da Jake Sully ve ailesi, Kızıl İnsanlar olarak bilinen yeni ve acımasız bir Na'vi klanıyla karşı karşıya gelir. Serinin en görkemli ve karanlık bölümü."
  },
  {
    id: "zootopia2",
    title: "Zootopia 2",
    year: 2025,
    genre: "Animasyon",
    rating: 7.8,
    trailer: "3u1CzhhvGec",
    icon: "🦊",
    gradient: "linear-gradient(150deg, #43e97b 0%, #2563eb 55%, #1e1b4b 100%)",
    desc: "Dedektif ikilisi Judy Hopps ve Nick Wilde, Zootopia'nın en gizemli davasını çözmek için şehrin daha önce görmedikleri köşelerine iner."
  },
  {
    id: "wickedfg",
    title: "Wicked: For Good",
    year: 2025,
    genre: "Müzikal",
    rating: 7.9,
    trailer: "N-R_GTvJqh0",
    icon: "🧙‍♀️",
    gradient: "linear-gradient(150deg, #34d399 0%, #be185d 60%, #1e1033 100%)",
    desc: "Elphaba ve Glinda'nın hikayesinin büyülü final perdesi: Oz diyarında dostluk, güç ve kader arasında verilen destansı mücadele son buluyor."
  },
  {
    id: "superman25",
    title: "Superman",
    year: 2025,
    genre: "Süper Kahraman",
    rating: 7.3,
    trailer: "2woCZg5QdVE",
    icon: "🦸",
    gradient: "linear-gradient(150deg, #60a5fa 0%, #b91c1c 60%, #0b1029 100%)",
    desc: "James Gunn'ın yeniden hayal ettiği DC evreninde, hem bir Kryptonlu hem de bir Kansas'lı olarak insanlığa ve kendi doğruluğuna inancını koruyan bir Superman."
  },
  {
    id: "mi8",
    title: "Mission: Impossible – The Final Reckoning",
    year: 2025,
    genre: "Aksiyon",
    rating: 7.6,
    trailer: "MtrMxywpuLU",
    icon: "🕶️",
    gradient: "linear-gradient(150deg, #94a3b8 0%, #7f1d1d 60%, #0a0a0f 100%)",
    desc: "Ethan Hunt ve ekibi, dünyayı tehdit eden yapay zeka silahına karşı son ve en tehlikeli görevlerinde tüm gücüyle mücadele eder."
  },
  {
    id: "dune2",
    title: "Dune: Part Two",
    year: 2024,
    genre: "Bilim Kurgu",
    rating: 8.5,
    trailer: "jk4NU_lSjk8",
    icon: "🏜️",
    gradient: "linear-gradient(150deg, #f0a869 0%, #8a4b12 55%, #241505 100%)",
    desc: "Paul Atreides, Fremenlerle birleşerek ailesini yok edenlerden intikam almak için Arrakis çölünde bir isyanın liderliğine yükselir."
  },
  {
    id: "deadpool3",
    title: "Deadpool & Wolverine",
    year: 2024,
    genre: "Aksiyon",
    rating: 7.7,
    trailer: "73_1biulkYk",
    icon: "🗡️",
    gradient: "linear-gradient(150deg, #ef4444 0%, #1f2937 60%, #0a0a0f 100%)",
    desc: "Wade Wilson, çok evrenli bir krizi önlemek için isteksiz bir Wolverine ile güç birliği yapar. Marvel tarihinin en çılgın ve komik ikilisi."
  },
  {
    id: "insideout2",
    title: "Inside Out 2",
    year: 2024,
    genre: "Animasyon",
    rating: 7.6,
    trailer: "7WMArR7tWho",
    icon: "🧠",
    gradient: "linear-gradient(150deg, #fbbf24 0%, #ec4899 55%, #4c1d95 100%)",
    desc: "Riley ergenliğe adım atarken zihninde yeni duygular belirir: Kaygı, Kıskançlık, Can Sıkıntısı ve Utanç, Sevinç'in düzenini alt üst eder."
  },
  {
    id: "moana2",
    title: "Moana 2",
    year: 2024,
    genre: "Macera",
    rating: 6.7,
    trailer: "r__ksbieeR8",
    icon: "🌊",
    gradient: "linear-gradient(150deg, #22d3ee 0%, #0369a1 55%, #082f49 100%)",
    desc: "Moana, beklenmedik bir çağrı alır ve Maui ile birlikte uzak denizlerin ötesindeki unutulmuş adaları keşfetmek için tehlikeli bir yolculuğa çıkar."
  }
];

// ---------- Durum ----------
let currentProfile = null;
let activeFilter = "all";

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

function isWatched(id) {
  return getWatched().includes(id);
}

function toggleWatched(id) {
  const list = getWatched();
  const idx = list.indexOf(id);
  if (idx >= 0) list.splice(idx, 1);
  else list.push(id);
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
  renderHero();
  renderRows();
}

// ---------- Hero ----------
function renderHero() {
  const featured = MOVIES[0];
  document.getElementById("heroMedia").style.background = featured.gradient;
  document.getElementById("heroTitle").textContent = featured.title;
  document.getElementById("heroDesc").textContent = featured.desc;
  document.getElementById("heroMeta").innerHTML = `
    <span class="rating-pill">★ ${featured.rating}</span>
    <span>${featured.year}</span>
    <span>${featured.genre}</span>
  `;
  document.getElementById("heroPlayBtn").onclick = () => openModal(featured);
  document.getElementById("heroInfoBtn").onclick = () => openModal(featured);
}

// ---------- Satırları oluştur ----------
function renderRows() {
  const wrap = document.getElementById("rowsWrap");
  wrap.innerHTML = "";

  if (activeFilter === "watched") {
    const watchedIds = getWatched();
    const watchedMovies = MOVIES.filter(m => watchedIds.includes(m.id));
    wrap.appendChild(buildGridSection("İzlenenler", watchedMovies, "Henüz izlenmiş olarak işaretlenen film yok."));
    return;
  }

  const genres = [...new Set(MOVIES.map(m => m.genre))];
  genres.forEach(genre => {
    const list = MOVIES.filter(m => m.genre === genre);
    wrap.appendChild(buildRowSection(genre, list));
  });
}

function buildRowSection(title, movies) {
  const section = document.createElement("section");
  section.className = "row";
  section.innerHTML = `<h2 class="row-title">${title}</h2><div class="row-track"></div>`;
  const track = section.querySelector(".row-track");
  movies.forEach(m => track.appendChild(buildCard(m)));
  return section;
}

function buildGridSection(title, movies, emptyMsg) {
  const section = document.createElement("section");
  section.className = "row";
  section.innerHTML = `<h2 class="row-title">${title}</h2>`;
  if (movies.length === 0) {
    const p = document.createElement("p");
    p.className = "empty-msg";
    p.textContent = emptyMsg;
    section.appendChild(p);
    return section;
  }
  const grid = document.createElement("div");
  grid.className = "grid";
  movies.forEach(m => grid.appendChild(buildCard(m)));
  section.appendChild(grid);
  return section;
}

// ---------- Kart oluşturma + 3D tilt ----------
function buildCard(movie) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.id = movie.id;

  const watched = isWatched(movie.id);

  card.innerHTML = `
    <div class="card-poster" style="background:${movie.gradient}">
      <span class="card-icon">${movie.icon}</span>
      <span class="card-poster-title">${movie.title}</span>
      <span class="card-year">${movie.year}</span>
      <span class="card-badge-rating">★ ${movie.rating}</span>
      ${watched ? `<span class="card-watched-badge">✓ İzlendi</span>` : ""}
      <div class="card-overlay">
        <span class="card-overlay-title">${movie.genre}</span>
        <button class="mini-btn watch-toggle ${watched ? "watched-on" : ""}" title="İzlendi olarak işaretle">✓</button>
      </div>
    </div>
  `;

  // 3D tilt efekti
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -10;
    const rotateY = ((x - cx) / cx) * 10;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.06,1.06,1.06)`;
    card.querySelector(".card-poster").style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    card.querySelector(".card-poster").style.setProperty("--my", `${(y / rect.height) * 100}%`);
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)";
  });

  card.querySelector(".watch-toggle").addEventListener("click", e => {
    e.stopPropagation();
    toggleWatched(movie.id);
    const btn = e.currentTarget;
    btn.classList.toggle("watched-on");
    const badge = card.querySelector(".card-watched-badge");
    if (isWatched(movie.id)) {
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

  card.addEventListener("click", () => openModal(movie));

  return card;
}

// ---------- Modal ----------
function openModal(movie) {
  document.getElementById("modalTitle").textContent = movie.title;
  document.getElementById("modalMeta").innerHTML = `
    <span class="rating-pill">★ ${movie.rating}</span>
    <span>${movie.year}</span>
    <span class="genre-tag">${movie.genre}</span>
  `;
  document.getElementById("modalDesc").textContent = movie.desc;
  document.getElementById("modalVideo").innerHTML =
    `<iframe src="https://www.youtube.com/embed/${movie.trailer}?autoplay=1&rel=0" title="${movie.title} fragman" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;

  const watchBtn = document.getElementById("modalWatchBtn");
  function refreshWatchBtn() {
    const w = isWatched(movie.id);
    watchBtn.textContent = w ? "✓ İzlendi olarak işaretlendi" : "İzlendi olarak işaretle";
    watchBtn.classList.toggle("is-watched", w);
  }
  refreshWatchBtn();
  watchBtn.onclick = () => {
    toggleWatched(movie.id);
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

// ---------- Arama ----------
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
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

  const matches = MOVIES.filter(m =>
    m.title.toLowerCase().includes(q) ||
    m.genre.toLowerCase().includes(q)
  );

  grid.innerHTML = "";
  if (matches.length === 0) {
    grid.innerHTML = `<p class="empty-msg">"${searchInput.value}" için sonuç bulunamadı.</p>`;
  } else {
    matches.forEach(m => grid.appendChild(buildCard(m)));
  }
});

// ---------- Navbar scroll efekti ----------
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 40) {
    nav.style.background = "rgba(8,8,12,0.96)";
  } else {
    nav.style.background = "linear-gradient(to bottom, rgba(5,5,8,0.95), rgba(5,5,8,0.4))";
  }
});

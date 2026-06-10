const campsites = [
  {
    name: "Bintudoh Greenspring Resort Brunei",
    source: "Google",
    url: "https://www.google.com/maps/search/?api=1&query=Bintudoh%20Greenspring%20Resort%20Brunei",
    area: "Jalan Bukit Sulang",
    mood: "Resort camp",
    effort: "Check booking",
    tags: ["forest", "family", "stay"],
    summary: "A resort-hotel style nature stay from your Google result list, useful for gentler camping weekends and family trips."
  },
  {
    name: "Peliunan Park",
    source: "Google",
    url: "https://www.google.com/maps/search/?api=1&query=Peliunan%20Park%20Brunei",
    area: "Kampong Peliunan",
    mood: "Outdoor park",
    effort: "Check access",
    tags: ["water", "family"],
    summary: "A nature and outdoor park lead in Temburong, best treated as a day-camp or picnic-style option until facilities are confirmed."
  },
  {
    name: "Sumbiling Eco Village",
    source: "Google",
    url: "https://www.google.com/maps/search/?api=1&query=Sumbiling%20Eco%20Village%20Brunei",
    area: "Batang Duri, Temburong",
    mood: "Eco village stay",
    effort: "Check booking",
    tags: ["forest", "water", "family", "stay"],
    summary: "A Temburong eco-stay lead from your Google result list, with cabin-style accommodation and rainforest surroundings."
  },
  {
    name: "Luagan Lalak Forest Recreation Park",
    source: "Public info",
    url: "https://www.google.com/maps/search/?api=1&query=Luagan%20Lalak%20Forest%20Recreation%20Park",
    area: "Labi, Belait",
    mood: "Wetland boardwalk",
    effort: "Check rules",
    tags: ["forest", "water", "family"],
    summary: "A freshwater swamp and recreation forest with boardwalk scenery, gazebos, and picnic-style facilities."
  },
  {
    name: "Sungai Basong Recreational Park",
    source: "Public info",
    url: "https://www.google.com/maps/search/?api=1&query=Sungai%20Basong%20Recreational%20Park",
    area: "Tutong",
    mood: "Lakeside camping",
    effort: "Check permit",
    tags: ["water", "family"],
    summary: "A Tutong recreation park noted for outdoor activities, lakes, cultural houses, and camping-friendly open space."
  },
  {
    name: "Ulu Temburong National Park",
    source: "Public info",
    url: "https://www.google.com/maps/search/?api=1&query=Ulu%20Temburong%20National%20Park",
    area: "Temburong",
    mood: "Rainforest trip",
    effort: "Book tour",
    tags: ["forest", "water", "stay"],
    summary: "Brunei's Green Jewel, usually visited through arranged tours and longboat access rather than casual drive-in camping."
  },
  {
    name: "Bukit Shahbandar Forest Recreation Park",
    source: "Public info",
    url: "https://www.google.com/maps/search/?api=1&query=Bukit%20Shahbandar%20Forest%20Recreation%20Park",
    area: "Jerudong",
    mood: "Hillside base",
    effort: "Check rules",
    tags: ["forest", "family"],
    summary: "A popular forest recreation park near Jerudong, better for hiking and group outdoor days unless camping permission is confirmed."
  },
  {
    name: "Muara Beach",
    source: "Local lead",
    url: "https://www.google.com/maps/search/?api=1&query=Muara%20Beach%20Brunei",
    area: "Muara",
    mood: "Beach camp",
    effort: "Check rules",
    tags: ["water", "family"],
    summary: "A coastal campsite lead for sea breeze, open sand, and simple group outings near Muara."
  },
  {
    name: "Berakas Forest Reserve Campsite",
    source: "Local lead",
    url: "https://www.google.com/maps/search/?api=1&query=Berakas%20Forest%20Reserve%20Campsite",
    area: "Berakas",
    mood: "Forest campsite",
    effort: "Check permit",
    tags: ["forest", "family"],
    summary: "A forest reserve campsite lead with shaded surroundings and easy access from the Brunei-Muara area."
  },
  {
    name: "Pantai Seri Kenangan",
    source: "Local lead",
    url: "https://www.google.com/maps/search/?api=1&query=Pantai%20Seri%20Kenangan%20Tutong",
    area: "Tutong",
    mood: "Beach park",
    effort: "Check rules",
    tags: ["water", "family"],
    summary: "A well-known Tutong beach park lead for relaxed coastal camping, picnics, and sunset trips."
  },
  {
    name: "Belait Beach",
    source: "Local lead",
    url: "https://www.google.com/maps/search/?api=1&query=Belait%20Beach%20Brunei",
    area: "Belait",
    mood: "Coastal camp",
    effort: "Check access",
    tags: ["water", "family"],
    summary: "A Belait coastal lead for groups looking for open beach space and a quieter west-side outing."
  },
  {
    name: "Taman Batang Duri",
    source: "Local lead",
    url: "https://www.google.com/maps/search/?api=1&query=Taman%20Batang%20Duri%20Temburong",
    area: "Batang Duri, Temburong",
    mood: "Riverside park",
    effort: "Check access",
    tags: ["forest", "water", "family"],
    summary: "A Temburong park lead near Batang Duri, useful for riverside nature days and campsite scouting."
  },
  {
    name: "Tasik Arrurbada",
    source: "Local lead",
    url: "https://www.google.com/maps/search/?api=1&query=Tasik%20Arrurbada%20Mukim%20Labu%20Temburong",
    area: "Mukim Labu, Temburong",
    mood: "Lakeside nature",
    effort: "Check access",
    tags: ["water", "forest", "family"],
    summary: "A Mukim Labu lake lead for nature trips, waterside scenery, and campsite scouting in Temburong."
  },
  {
    name: "Taman Aie Tenab",
    source: "Local lead",
    url: "https://www.google.com/maps/search/?api=1&query=Taman%20Aie%20Tenab%20Pondok%20Peranginan%20Selapon%20Temburong",
    area: "Selapon, Temburong",
    mood: "Nature retreat",
    effort: "Check access",
    tags: ["forest", "water", "family"],
    summary: "A Selapon nature lead near Pondok Peranginan Selapon, suitable for checking picnic, rest, and camping access."
  },
  {
    name: "Wasai Wong Kadir",
    source: "Local lead",
    url: "https://www.google.com/maps/search/?api=1&query=Wasai%20Wong%20Kadir%20Kg%20Labi%20Belait",
    area: "Kg Labi, Belait",
    mood: "Waterfall trail",
    effort: "Check trail",
    tags: ["forest", "water"],
    summary: "A Kg Labi waterfall lead for forest outings and campsite scouting around Belait's interior."
  }
];

const grid = document.querySelector("#campsite-grid");
const searchInput = document.querySelector("#site-search");
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
let activeFilter = "all";

function renderCards() {
  const query = searchInput.value.trim().toLowerCase();
  const matches = campsites.filter((site) => {
    const searchable = `${site.name} ${site.source} ${site.area} ${site.mood} ${site.summary} ${site.tags.join(" ")}`.toLowerCase();
    const matchesSearch = !query || searchable.includes(query);
    const matchesFilter = activeFilter === "all" || site.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  if (!matches.length) {
    grid.innerHTML = `<div class="empty-state">No campsite leads match this view yet.</div>`;
    return;
  }

  grid.innerHTML = matches
    .map(
      (site) => `
        <article class="site-card">
          <div>
            <div class="card-top">
              <span class="source-badge">${site.source}</span>
              <span class="tag">${site.area}</span>
            </div>
            <h3>${site.name}</h3>
            <p>${site.summary}</p>
            <ul class="meta-list">
              <li><span>Mood</span><strong>${site.mood}</strong></li>
              <li><span>Planning status</span><strong>${site.effort}</strong></li>
            </ul>
            <div class="tag-row">
              ${site.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
          <a class="text-link" href="${site.url}" target="_blank" rel="noreferrer">View source</a>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderCards();
  });
});

searchInput.addEventListener("input", renderCards);
renderCards();

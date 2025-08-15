/* Basic interactivity for Solution Hub */
const byId = (id) => document.getElementById(id);

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('site-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Demo data for solutions (you can edit or replace with your own)
const SOLUTIONS = [
  {
    id: 'focus-bursts',
    title: 'Beat Distractions with 25‑Minute Focus Bursts',
    excerpt: 'Use the Pomodoro-style method to regain focus at work or study.',
    category: 'Productivity',
    tags: ['focus', 'study', 'work'],
    popularity: 98,
    updated: '2025-07-20'
  },
  {
    id: 'whatsapp-storage',
    title: 'Free Up WhatsApp Storage Without Deleting Chats',
    excerpt: 'Clean media, clear cache, and keep your important messages.',
    category: 'Tech',
    tags: ['android', 'ios', 'storage'],
    popularity: 120,
    updated: '2025-06-02'
  },
  {
    id: 'healthy-morning',
    title: 'A 10‑Minute Morning Routine for More Energy',
    excerpt: 'Light movement, hydration, and sunlight to kickstart your day.',
    category: 'Health',
    tags: ['habits', 'wellness'],
    popularity: 75,
    updated: '2025-04-12'
  },
  {
    id: 'budget-101',
    title: 'Simple 50/30/20 Budget Setup',
    excerpt: 'Control spending with a quick plan that actually sticks.',
    category: 'Finance',
    tags: ['money', 'planning'],
    popularity: 65,
    updated: '2025-05-28'
  },
  {
    id: 'email-zero',
    title: 'Inbox to Zero in 15 Minutes',
    excerpt: 'Triage, template, and archive like a pro.',
    category: 'Productivity',
    tags: ['email', 'work'],
    popularity: 89,
    updated: '2025-01-19'
  },
  {
    id: 'water-tracker',
    title: 'Drink More Water: A Simple Tracker System',
    excerpt: 'Tiny habits + visual cues to hit your daily target.',
    category: 'Life',
    tags: ['habits', 'tracking'],
    popularity: 44,
    updated: '2025-02-06'
  }
];

// Render cards
function cardTemplate(item) {
  return `
    <article class="card" data-id="${item.id}" data-category="${item.category}" data-popularity="${item.popularity}" data-updated="${item.updated}" data-tags="${item.tags.join(',')}">
      <h3>${item.title}</h3>
      <p>${item.excerpt}</p>
      <div class="badges">
        <span class="badge">${item.category}</span>
        ${item.tags.slice(0,3).map(t=>`<span class="badge">#${t}</span>`).join('')}
      </div>
    </article>
  `;
}

function renderList(targetEl, items) {
  targetEl.innerHTML = items.map(cardTemplate).join('');
}

// Populate index popular list (top 3 by popularity)
const popularList = byId('popular-list');
if (popularList) {
  const top = [...SOLUTIONS].sort((a,b)=> b.popularity - a.popularity).slice(0,3);
  renderList(popularList, top);
}

// Populate solutions with search/filter/sort
const listEl = byId('solutions-list');
const searchEl = byId('search');
const catEl = byId('category');
const sortEl = byId('sort');

function applyFilters() {
  let items = [...SOLUTIONS];

  const q = (searchEl?.value || '').toLowerCase().trim();
  const cat = (catEl?.value || '').trim();
  const sort = (sortEl?.value || 'latest');

  if (q) {
    items = items.filter(it =>
      it.title.toLowerCase().includes(q) ||
      it.excerpt.toLowerCase().includes(q) ||
      it.tags.some(t => t.toLowerCase().includes(q))
    );
  }
  if (cat) {
    items = items.filter(it => it.category === cat);
  }
  if (sort === 'latest') {
    items.sort((a,b)=> new Date(b.updated) - new Date(a.updated));
  } else if (sort === 'popular') {
    items.sort((a,b)=> b.popularity - a.popularity);
  } else if (sort === 'az') {
    items.sort((a,b)=> a.title.localeCompare(b.title));
  }

  if (listEl) renderList(listEl, items);
}

if (listEl) {
  applyFilters();
  [searchEl, catEl, sortEl].forEach(el => el && el.addEventListener('input', applyFilters));
}

// Contact: mailto helper
const mailBtn = document.getElementById('mailto');
if (mailBtn) {
  const email = 'pradipgavakar8041@gmail.com'; // TODO: replace with your real email
  mailBtn.href = `mailto:${email}?subject=Solution%20Request&body=Hi%20Solution%20Hub%20Team%2C%0D%0A%0D%0ATopic%3A%20%0D%0AWhat%20have%20you%20already%20tried%3F%3A%20%0D%0ADeadline%20(if%20any)%3A%20%0D%0A%0D%0AThanks!`;
}

// Prevent default form submit (demo only)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! This demo form needs a service like Formspree when hosted on GitHub Pages. For now, use the Email button.');
  });
}

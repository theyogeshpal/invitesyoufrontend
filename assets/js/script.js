const API_BASE = (window.__ENV__ && window.__ENV__.API_URL)
    ? window.__ENV__.API_URL
    : ((window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        ? 'http://localhost:5000/api'
        : `${window.location.origin}/api`);

// ─── THEME ROTATION (Purple Modern Palette) ───────────────
const themes = [
    { name: "Royal Purple", primary: "#7C3AED", secondary: "#A855F7", accent: "#F59E0B", background: "#FAF5FF" },
    { name: "Deep Violet", primary: "#6D28D9", secondary: "#8B5CF6", accent: "#EC4899", background: "#F5F3FF" },
    { name: "Plum Luxe", primary: "#581C87", secondary: "#7E22CE", accent: "#F43F5E", background: "#FAF5FF" },
    { name: "Amethyst Glow", primary: "#6B21A8", secondary: "#9333EA", accent: "#EAB308", background: "#FDF4FF" }
];

function applyTheme(theme) {
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--bg-theme', theme.background);
}

function initTheme() {
    try {
        const sessionKey = 'session_theme_set';
        const localKey = 'last_theme_index';
        let themeIndex = 0;
        if (!sessionStorage.getItem(sessionKey)) {
            let lastIndex = localStorage.getItem(localKey);
            if (lastIndex !== null) {
                themeIndex = (parseInt(lastIndex, 10) + 1) % themes.length;
            }
            localStorage.setItem(localKey, themeIndex);
            sessionStorage.setItem(sessionKey, 'true');
        } else {
            let lastIndex = localStorage.getItem(localKey);
            if (lastIndex !== null) themeIndex = parseInt(lastIndex, 10);
        }
        applyTheme(themes[themeIndex]);
    } catch (e) {
        applyTheme(themes[0]);
    }
}
initTheme();

// ─── INSTANT FALLBACK DIGITAL CARDS (Zero-delay load) ──────
const FALLBACK_CARDS = [
    {
        _id: 'fb-1',
        title: 'Divine Temple Cinematic Card',
        tier: 'Platinum',
        category: 'Wedding',
        badge: 'Bestseller',
        price: 3999,
        discountedPrice: 4999,
        demoUrl: 'view.html?tmpl=t1&event=Wedding&names=Kabir+%26+Ananya&date=2026-12-18&time=19:00&vname=The+Leela+Palace&vaddr=Udaipur,+Rajasthan&sub=Royal+Heritage+Celebration',
        imageBack: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=380&q=75',
        imageFront: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=380&q=75',
        features: ['Interactive 3D Envelope', 'Background Music', 'RSVP via WhatsApp', 'Google Maps Navigation'],
        whatsappMsg: 'Hi! I want to order the "Divine Temple Cinematic Card" digital invitation.'
    },
    {
        _id: 'fb-2',
        title: 'Royal Traditional Shlok Card',
        tier: 'Platinum',
        category: 'Wedding',
        badge: 'Trending',
        price: 3499,
        discountedPrice: 4499,
        demoUrl: 'view.html?tmpl=t1&event=Wedding&names=Pooja+%26+Arvind&date=2026-11-20&time=19:00&vname=Utsav+Marriage+Hall&vaddr=Banda+Road,+Uttar+Pradesh&sub=A+Sacred+Union+of+Hearts',
        imageBack: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=380&q=75',
        imageFront: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=380&q=75',
        features: ['Vedic Shlokas & Mantras', 'Gold Foil Theme', 'Multi-day Event Itinerary', 'Google Maps Link'],
        whatsappMsg: 'Hi! I want to order the "Royal Traditional Shlok Card" digital invitation.'
    },
    {
        _id: 'fb-3',
        title: 'Royal Punjabi Anand Karaj',
        tier: 'Platinum',
        category: 'Wedding',
        badge: 'Featured',
        price: 3999,
        discountedPrice: 4999,
        demoUrl: 'view.html?tmpl=t2&event=Wedding&names=Manpreet+%26+Jaspreet&date=2026-11-22&time=10:00&vname=Grand+Gurudwara+Sahib&vaddr=Amritsar,+Punjab&sub=Satnam+Waheguru+•+Anand+Karaj',
        imageBack: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=380&q=75',
        imageFront: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=380&q=75',
        features: ['Ik Onkar Wax Seal', 'Velvet Burgundy Theme', 'Event Itinerary Cards', 'Google Maps Location'],
        whatsappMsg: 'Hi! I want to order the "Royal Punjabi Anand Karaj" digital invitation.'
    },
    {
        _id: 'fb-4',
        title: 'Elegant Ring Ceremony Card',
        tier: 'Gold',
        category: 'Engagement',
        badge: 'Popular',
        price: 2499,
        discountedPrice: 2999,
        demoUrl: 'view.html?tmpl=t2&event=Engagement&names=Rohan+%26+Meera&date=2026-12-05&time=18:30&vname=Taj+Santacruz&vaddr=Mumbai,+Maharashtra&sub=Together+We+Begin+Our+Forever',
        imageBack: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=380&q=75',
        imageFront: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=380&q=75',
        features: ['Rose Gold Sparkles', 'Interactive Envelope Open', 'Save to Google Calendar', 'Direct RSVP'],
        whatsappMsg: 'Hi! I want to order the "Elegant Ring Ceremony Card" digital invitation.'
    },
    {
        _id: 'fb-5',
        title: 'Magical Kids Birthday Bash',
        tier: 'Gold',
        category: 'Birthday',
        badge: 'New',
        price: 1999,
        discountedPrice: 2499,
        demoUrl: 'view.html?tmpl=t4&event=Birthday&names=Aarav%27s+5th+Birthday&date=2026-10-15&time=17:00&vname=Funky+Monkey+Playzone&vaddr=Bandra+West,+Mumbai&sub=Join+us+for+Fun,+Games+%26+Cake!',
        imageBack: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=380&q=75',
        imageFront: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=380&q=75',
        features: ['Celebration Chimes & Music', 'Party Confetti Effect', 'Live Countdown Timer', 'Venue Map'],
        whatsappMsg: 'Hi! I want to order the "Magical Kids Birthday Bash" digital invitation.'
    },
    {
        _id: 'fb-6',
        title: 'Minimalist Baby Shower Card',
        tier: 'Silver',
        category: 'Baby Shower',
        badge: 'Classic',
        price: 1299,
        discountedPrice: 1799,
        demoUrl: 'view.html?tmpl=t3&event=Baby+Shower&names=Baby+Kapoor&date=2026-11-30&time=16:00&vname=The+Verandah+Lawn&vaddr=Vasant+Kunj,+New+Delhi&sub=Celebrating+a+Little+Bundle+of+Joy',
        imageBack: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=380&q=75',
        imageFront: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=380&q=75',
        features: ['Botanical Emerald Theme', 'Audio Chime Player', 'Venue Location Pins', 'WhatsApp RSVP'],
        whatsappMsg: 'Hi! I want to order the "Minimalist Baby Shower Card" digital invitation.'
    }
];

function getCachedTemplates() {
    try {
        const raw = localStorage.getItem('typwrite_cached_templates');
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
    } catch (e) {}
    return FALLBACK_CARDS;
}

// Fast fetch with AbortController timeout (so network never hangs)
async function fetchTemplatesFast() {
    try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 2500); // 2.5s max
        const res = await fetch(`${API_BASE}/templates`, { signal: controller.signal });
        clearTimeout(timer);
        if (!res.ok) return null;
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
            localStorage.setItem('typwrite_cached_templates', JSON.stringify(data));
            return data;
        }
    } catch (e) {
        // Silently use cached/fallback data
    }
    return null;
}

// ─── HELPERS ─────────────────────────────────────────────
function tierBadgeHTML(tier) {
    const t = tier || 'Gold';
    if (t === 'Platinum') return `<i class="far fa-gem"></i> Platinum`;
    if (t === 'Gold') return `<i class="fas fa-trophy" style="color:#ffd700"></i> Gold`;
    return `<i class="fas fa-medal" style="color:#b0bec5"></i> Silver`;
}

function getDemoUrl(t) {
    if (t.demoUrl && t.demoUrl.trim()) {
        const u = t.demoUrl.trim();
        if (u.startsWith('http://') || u.startsWith('https://')) return u;
        return u.replace(/^\/?/, '');
    }
    return `view.html?tmpl=t1&event=${encodeURIComponent(t.category || 'Wedding')}&names=${encodeURIComponent(t.title || 'Digital Card')}`;
}

function getWhatsAppOrderUrl(t, demoUrl) {
    const fullDemoUrl = demoUrl.startsWith('http')
        ? demoUrl
        : `${window.location.origin}/${demoUrl.replace(/^\/?/, '')}`;

    const defaultMsg = `Hi Typwrite! I want to order the "${t.title}" digital invitation card.\nCard Demo: ${fullDemoUrl}\nPrice: ₹${t.price}\nPlease share next steps!`;
    const baseMsg = t.whatsappMsg ? `${t.whatsappMsg}\nDemo: ${fullDemoUrl}` : defaultMsg;
    const phone = (window.__ENV__ && window.__ENV__.WHATSAPP_NUMBER) || '917817095043';
    return `https://wa.me/${phone}?text=${encodeURIComponent(baseMsg)}`;
}

function buildTemplateCard(t) {
    const tierLower = (t.tier || 'gold').toLowerCase();
    const categoryLower = (t.category || 'wedding').toLowerCase();
    const demoUrl = getDemoUrl(t);
    const waUrl = getWhatsAppOrderUrl(t, demoUrl);

    const featuresList = (Array.isArray(t.features) && t.features.length)
        ? t.features.slice(0, 3)
        : ['Envelope Animation', 'Music Chimes', 'RSVP & Maps'];

    const featureIcons = {
        'envelope': 'fa-envelope-open-text',
        'music': 'fa-music',
        'rsvp': 'fa-check-circle',
        'map': 'fa-map-marker-alt',
        'location': 'fa-map-marker-alt',
        'timer': 'fa-clock',
        'countdown': 'fa-clock',
        'shlok': 'fa-om',
        'video': 'fa-video'
    };

    const featuresHtml = featuresList.map(f => {
        const fLower = f.toLowerCase();
        let icon = 'fa-sparkles';
        for (const [k, v] of Object.entries(featureIcons)) {
            if (fLower.includes(k)) { icon = v; break; }
        }
        return `<span class="tc-feature-pill"><i class="fas ${icon}"></i> ${f}</span>`;
    }).join('');

    return `
        <div class="template-card-new" data-tier="${tierLower}" data-category="${categoryLower}">
            <div class="tc-image-wrapper">
                <span class="tc-badge-left">${tierBadgeHTML(t.tier)}</span>
                <span class="tc-badge-right">${(t.category || 'EVENT').toUpperCase()}</span>
                ${t.badge ? `<span class="tc-badge-badge">${t.badge}</span>` : ''}
                <div class="tc-phones">
                    <div class="tc-phone back">
                        <img src="${t.imageBack || t.imageFront}" alt="${t.title}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&amp;fit=crop&amp;w=350&amp;q=70';">
                    </div>
                    <div class="tc-phone front">
                        <img src="${t.imageFront || t.imageBack}" alt="${t.title}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&amp;fit=crop&amp;w=350&amp;q=70';">
                    </div>
                </div>
            </div>
            <div class="tc-details">
                <h3 title="${t.title}">${t.title}</h3>
                <div class="tc-features-pills">
                    ${featuresHtml}
                </div>
                <div class="tc-price-row">
                    <div class="tc-price">
                        <strong>₹${Number(t.price || 0).toLocaleString('en-IN')}</strong>
                        ${t.discountedPrice ? `<del>₹${Number(t.discountedPrice).toLocaleString('en-IN')}</del>` : ''}
                    </div>
                </div>
                <div class="tc-actions-grid">
                    <a href="${demoUrl}" target="_blank" class="tc-demo-btn" title="View interactive digital card demo">
                        <i class="fas fa-play-circle"></i> Live Demo
                    </a>
                    <a href="${waUrl}" target="_blank" class="tc-whatsapp-btn" title="Order this card on WhatsApp">
                        <i class="fab fa-whatsapp"></i> Order Card
                    </a>
                </div>
            </div>
        </div>`;
}

// ─── INSTANT LOAD FOR HOME PAGE (0ms render + background sync) ──
function loadHomeTemplates() {
    const grid = document.getElementById('home-template-grid');
    if (!grid) return;

    // STEP 1: Render cached/fallback cards immediately with 0 delay
    const initial = getCachedTemplates();
    grid.innerHTML = initial.slice(0, 6).map(buildTemplateCard).join('');
    initTabFilter(grid);

    // STEP 2: Background revalidate from API without blocking UI
    fetchTemplatesFast().then(fresh => {
        if (fresh && fresh.length) {
            grid.innerHTML = fresh.slice(0, 6).map(buildTemplateCard).join('');
            initTabFilter(grid);
        }
    });
}

// ─── INSTANT LOAD FOR TEMPLATES PAGE (0ms render + background sync) ─
function loadAllTemplates() {
    const grid = document.getElementById('templates-grid');
    if (!grid) return;

    // STEP 1: Render cached/fallback cards immediately
    const initial = getCachedTemplates();
    grid.innerHTML = initial.map(buildTemplateCard).join('');
    initTabFilter(grid);

    // STEP 2: Background revalidate from API
    fetchTemplatesFast().then(fresh => {
        if (fresh && fresh.length) {
            grid.innerHTML = fresh.map(buildTemplateCard).join('');
            initTabFilter(grid);
        }
    });
}

// ─── TAB FILTER LOGIC ────────────────────────────────────
function initTabFilter(grid) {
    const tabs = document.querySelectorAll('.t-tab');
    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.onclick = () => {
            tabs.forEach(t => t.classList.remove('active-tab', 'active-platinum'));
            const filter = (tab.getAttribute('data-filter') || 'all').toLowerCase();
            if (filter === 'platinum') {
                tab.classList.add('active-platinum');
            } else {
                tab.classList.add('active-tab');
            }
            const cards = grid.querySelectorAll('.template-card-new');
            cards.forEach(card => {
                const cTier = (card.getAttribute('data-tier') || '').toLowerCase();
                const cCat = (card.getAttribute('data-category') || '').toLowerCase();
                const match = filter === 'all' || cTier === filter || cCat === filter || cCat.includes(filter);
                card.style.display = match ? 'block' : 'none';
                card.style.opacity = match ? '1' : '0';
            });
        };
    });
}

// ─── FAST SEARCH FILTER ──────────────────────────────────
function initSearch() {
    const searchInputs = document.querySelectorAll('.search-box input');
    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const grids = [document.getElementById('home-template-grid'), document.getElementById('templates-grid')];
            grids.forEach(grid => {
                if (!grid) return;
                const cards = grid.querySelectorAll('.template-card-new');
                cards.forEach(card => {
                    const text = card.textContent.toLowerCase();
                    const match = !query || text.includes(query);
                    card.style.display = match ? 'block' : 'none';
                    card.style.opacity = match ? '1' : '0';
                });
            });
        });
    });
}

// ─── DOM READY ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Instant execution
    loadHomeTemplates();
    loadAllTemplates();
    initSearch();

    // Accordion
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        if (header) {
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                accordionItems.forEach(accItem => {
                    accItem.classList.remove('active');
                    const icon = accItem.querySelector('i');
                    if (icon) { icon.classList.remove('fa-minus'); icon.classList.add('fa-plus'); }
                });
                if (!isActive) {
                    item.classList.add('active');
                    const icon = item.querySelector('i');
                    if (icon) { icon.classList.remove('fa-plus'); icon.classList.add('fa-minus'); }
                }
            });
        }
    });

    // Navbar scroll shadow
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.style.boxShadow = window.scrollY > 10 ? '0 4px 6px -1px rgba(0, 0, 0, 0.05)' : 'none';
        }, { passive: true });
    }

    // Mobile menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('mobile-active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    // Swiper 3D
    if (typeof Swiper !== 'undefined' && document.querySelector('.swiper-3d-container')) {
        try {
            new Swiper('.swiper-3d-container', {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                initialSlide: 2,
                loop: true,
                coverflowEffect: { rotate: 20, stretch: 0, depth: 250, modifier: 1, slideShadows: true },
                autoplay: { delay: 3200, disableOnInteraction: false }
            });
        } catch (e) {}
    }
});

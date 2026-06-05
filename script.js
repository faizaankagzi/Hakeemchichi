/* ══════════════════════════════════
   HAKEEM CHICHI — PRODUCT DATA & LOGIC
══════════════════════════════════ */

const PRODUCTS = [
  // Hair Care
  { id:1, name:'Zulfee Hair Tonic', category:'Hair Care', price:450, rating:4.8, reviews:312, emoji:'🌿', badge:'Bestseller',
    desc:'Reduces hair fall & promotes thick, lustrous hair growth. Enriched with Amla, Bhringraj and rare Unani herbs.',
    benefits:['Reduces hair fall in 4–6 weeks','Promotes new hair growth','Nourishes scalp & roots','100% natural, no chemicals'],
    image:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80' },
  { id:2, name:'Herbal Amla Hair Oil', category:'Hair Care', price:280, rating:4.6, reviews:198,  emoji:'🫙',
    desc:'Cold-pressed Amla oil blended with traditional Unani herbs for deep nourishment and shine.',
    benefits:['Conditions hair from root to tip','Prevents premature greying','Adds natural shine','Suitable for all hair types'],
    image:'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80' },
  { id:3, name:'Herbal Mehndi', category:'Hair Care', price:180, rating:4.5, reviews:421, emoji:'🌱',
    desc:'Pure natural henna blended with conditioning herbs for vibrant colour and hair strength.',
    benefits:['Natural hair colouring','Strengthens hair shaft','Conditions & adds body','Free from PPD & chemicals'],
    image:'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400&q=80' },

  // Digestive Health
  { id:4, name:'Sat Isabgol (Isabgol Husk)', category:'Digestive Health', price:250, rating:4.7, reviews:534, emoji:'🌾', badge:'Top Rated',
    desc:'Premium quality psyllium husk — natural relief from constipation, acidity and irritable bowel.',
    benefits:['Relieves constipation naturally','Soothes IBS symptoms','Lowers cholesterol','High dietary fibre'],
    image:'https://images.unsplash.com/photo-1611073615830-9b6b26e91a97?w=400&q=80' },
  { id:5, name:'Harde Murabba', category:'Digestive Health', price:350, rating:4.8, reviews:267, emoji:'🍯', badge:'Bestseller',
    desc:'Haritaki (Terminalia chebula) preserved in natural sugar syrup — a complete digestive tonic.',
    benefits:['Improves digestion & absorption','Relieves chronic constipation','Detoxifies the colon','Rich in antioxidants'],
    image:'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=400&q=80' },
  { id:6, name:'Bel Murabba', category:'Digestive Health', price:320, rating:4.6, reviews:183, emoji:'🫐',
    desc:'Bael fruit murabba — an ancient Ayurvedic remedy for digestive disorders and gut health.',
    benefits:['Treats chronic diarrhoea','Heals intestinal inflammation','Rich in natural pectin','Cooling and soothing effect'],
    image:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
  { id:7, name:'Digestive Sharbat', category:'Digestive Health', price:220, rating:4.4, reviews:156, emoji:'🍹',
    desc:'A refreshing herbal drink that aids digestion, cools the body and relieves acidity.',
    benefits:['Instant relief from acidity','Cools the digestive system','Improves appetite','Pleasant taste, all-natural'],
    image:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },

  // Immunity
  { id:8, name:'Chyawanprash', category:'Immunity', price:550, rating:4.9, reviews:628, emoji:'🫙', badge:'Bestseller',
    desc:'Traditional Chyawanprash with 40+ herbs including Amla, Ashwagandha and Giloy — the ultimate immunity booster.',
    benefits:['Boosts natural immunity','Rich in Vitamin C','Improves stamina & energy','Suitable for all ages'],
    image:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80' },
  { id:9, name:'Raahat-e-Qulb Sharbat', category:'Immunity', price:380, rating:4.7, reviews:201, emoji:'💚',
    desc:'Heart & immunity tonic — a blend of precious herbs known in Unani medicine as the "Comfort of the Heart".',
    benefits:['Strengthens heart function','Improves blood circulation','Reduces stress & fatigue','Natural adaptogenic blend'],
    image:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },

  // Men's Health
  { id:10, name:'Majun Arad Khurma', category:"Men's Health", price:400, rating:4.6, reviews:289, emoji:'💪',
    desc:'A classic Unani formulation for male vitality, stamina and reproductive health.',
    benefits:['Enhances vitality & stamina','Supports hormonal balance','Nourishes nervous system','Traditional Unani formula'],
    image:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
  { id:11, name:'Herbal Va-Har Tablet', category:"Men's Health", price:320, rating:4.5, reviews:142, emoji:'🌿',
    desc:'Pain relief and joint support tablets formulated from organic herbs. Anti-inflammatory formula.',
    benefits:['Relieves joint and muscle pain','Reduces inflammation','Improves mobility','No synthetic painkillers'],
    image:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80' },

  // Women's Health
  { id:12, name:'Gulkand (Rose Petal Preserve)', category:"Women's Health", price:290, rating:4.8, reviews:374, emoji:'🌹', badge:'New',
    desc:'Premium Gulkand from fresh rose petals — cooling, beautifying, and deeply nourishing.',
    benefits:['Improves skin glow & complexion','Cools the body in summer','Relieves menstrual discomfort','Rich in natural antioxidants'],
    image:'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400&q=80' },
  { id:13, name:'Herbal Face Pack', category:"Women's Health", price:195, rating:4.5, reviews:267, emoji:'✨',
    desc:'Multi-herb face pack with Chandan, Multani Mitti and rare botanicals for glowing, clear skin.',
    benefits:['Deep cleanses pores','Brightens complexion','Controls oil & acne','Natural, chemical-free'],
    image:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80' },

  // Infant Care
  { id:14, name:'Baby Massage Oil', category:'Infant Care', price:220, rating:4.7, reviews:198, emoji:'👶',
    desc:'Gentle herbal massage oil for infants — strengthens bones, promotes healthy development.',
    benefits:['Strengthens bones and muscles','Improves sleep quality','Natural and baby-safe','Soothing herbal scent'],
    image:'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&q=80' },

  // Raw Herbs
  { id:15, name:'Ashwagandha Root Powder', category:'Raw Herbs', price:280, rating:4.7, reviews:312, emoji:'🌾', badge:'Bestseller',
    desc:'Pure Withania somnifera root powder — the most revered adaptogen in Ayurveda.',
    benefits:['Reduces stress & cortisol','Improves sleep quality','Enhances physical performance','Supports thyroid health'],
    image:'https://images.unsplash.com/photo-1611073615830-9b6b26e91a97?w=400&q=80' },
  { id:16, name:'Amla Murabba', category:'Raw Herbs', price:310, rating:4.6, reviews:245, emoji:'🍀',
    desc:'Indian Gooseberry preserved in natural sugar — the richest natural source of Vitamin C.',
    benefits:['Highest natural Vitamin C','Supports immune function','Improves eyesight','Anti-ageing properties'],
    image:'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=400&q=80' },
  { id:17, name:'Milk Masala', category:'Raw Herbs', price:160, rating:4.5, reviews:428, emoji:'🥛',
    desc:'A blend of 12 premium herbs and spices for nourishing milk — traditional bedtime tonic.',
    benefits:['Enhances milk nutrition','Improves sleep & relaxation','Strengthens bones','Delicious traditional flavour'],
    image:'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=400&q=80' },

  // Skin Care
  { id:18, name:'Herbal Plain Mehndi', category:'Skin Care', price:120, rating:4.4, reviews:387, emoji:'🌿',
    desc:'Pure, chemical-free henna for intricate mehndi designs — rich colour and long-lasting.',
    benefits:['Deep, rich colour','Chemical and PPD free','Conditions skin','Fine-sieved, smooth paste'],
    image:'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400&q=80' },
];

const CATEGORIES = [
  { name:'Hair Care', icon:'💆', count: PRODUCTS.filter(p=>p.category==='Hair Care').length },
  { name:'Digestive Health', icon:'🫁', count: PRODUCTS.filter(p=>p.category==='Digestive Health').length },
  { name:'Immunity', icon:'🛡️', count: PRODUCTS.filter(p=>p.category==='Immunity').length },
  { name:"Men's Health", icon:'💪', count: PRODUCTS.filter(p=>p.category==="Men's Health").length },
  { name:"Women's Health", icon:'🌸', count: PRODUCTS.filter(p=>p.category==="Women's Health").length },
  { name:'Infant Care', icon:'👶', count: PRODUCTS.filter(p=>p.category==='Infant Care').length },
  { name:'Raw Herbs', icon:'🌾', count: PRODUCTS.filter(p=>p.category==='Raw Herbs').length },
  { name:'Skin Care', icon:'✨', count: PRODUCTS.filter(p=>p.category==='Skin Care').length },
];

/* ── STATE ── */
let cart = [];
let activeCategory = 'All';
let sortMode = 'default';
let filteredProducts = [...PRODUCTS];

/* ══════════════════════════════════
   INIT
══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderBestsellers();
  renderCategories();
  renderShopSidebar();
  renderShopGrid(PRODUCTS);
});

/* ══════════════════════════════════
   SECTION NAVIGATION
══════════════════════════════════ */
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) { el.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + id);
  });
}

function toggleMobileMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}

/* ══════════════════════════════════
   RENDER BESTSELLERS (Home)
══════════════════════════════════ */
function renderBestsellers() {
  const bestsellers = PRODUCTS.filter(p => p.badge === 'Bestseller').slice(0, 4);
  const grid = document.getElementById('bestsellersGrid');
  if (!grid) return;
  grid.innerHTML = bestsellers.map(p => productCardHTML(p)).join('');
}

/* ══════════════════════════════════
   RENDER CATEGORIES (Home)
══════════════════════════════════ */
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="category-card" onclick="filterByRemedy('${c.name}')">
      <div class="cat-icon">${c.icon}</div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count} product${c.count !== 1 ? 's' : ''}</div>
    </div>
  `).join('');
}

/* ══════════════════════════════════
   SHOP SIDEBAR CATEGORIES
══════════════════════════════════ */
function renderShopSidebar() {
  const list = document.getElementById('catList');
  if (!list) return;
  const allCats = ['All', ...CATEGORIES.map(c => c.name)];
  list.innerHTML = allCats.map(c => `
    <li class="${c === activeCategory ? 'active' : ''}" onclick="setCategory('${c}')">${c}</li>
  `).join('');
}

function setCategory(cat) {
  activeCategory = cat;
  renderShopSidebar();
  filterProducts();
}

/* ══════════════════════════════════
   FILTER & SORT
══════════════════════════════════ */
function filterProducts() {
  const searchVal = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const maxPrice = parseInt(document.getElementById('priceRange')?.value || 1000);
  const minRating = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || 0);

  document.getElementById('priceVal').textContent = maxPrice;

  filteredProducts = PRODUCTS.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchVal) || p.category.toLowerCase().includes(searchVal);
    const matchPrice = p.price <= maxPrice;
    const matchRating = p.rating >= minRating;
    return matchCat && matchSearch && matchPrice && matchRating;
  });

  applySortAndRender();
}

function sortProducts(val) {
  sortMode = val;
  applySortAndRender();
}

function applySortAndRender() {
  let sorted = [...filteredProducts];
  if (sortMode === 'price-low') sorted.sort((a,b) => a.price - b.price);
  else if (sortMode === 'price-high') sorted.sort((a,b) => b.price - a.price);
  else if (sortMode === 'rating') sorted.sort((a,b) => b.rating - a.rating);
  renderShopGrid(sorted);
}

/* ══════════════════════════════════
   RENDER SHOP GRID
══════════════════════════════════ */
function renderShopGrid(products) {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  if (products.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-light);padding:2rem;grid-column:1/-1">No products found. Try adjusting your filters.</p>';
    return;
  }
  grid.innerHTML = products.map(p => productCardHTML(p)).join('');
}

/* ══════════════════════════════════
   PRODUCT CARD HTML
══════════════════════════════════ */
function productCardHTML(p) {
  const inCart = cart.find(c => c.id === p.id);
  return `
    <div class="product-card">
      <div class="product-img" onclick="showProductDetail(${p.id})" style="cursor:pointer">
        <img src="${p.image}" alt="${p.name}" loading="lazy"
             onerror="this.style.display='none';this.parentElement.innerHTML='<span style=\\"font-size:4rem\\">${p.emoji}</span>'" />
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name" onclick="showProductDetail(${p.id})" style="cursor:pointer">${p.name}</div>
        <div class="product-desc">${p.desc.slice(0,75)}…</div>
        <div class="product-rating">
          <span class="stars-small">${starsHTML(p.rating)}</span>
          <span>${p.rating}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">₹${p.price}</div>
          <button class="btn-add ${inCart ? 'added' : ''}" onclick="addToCart(${p.id}, this)">
            ${inCart ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ══════════════════════════════════
   PRODUCT DETAIL
══════════════════════════════════ */
function showProductDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const layout = document.getElementById('pdLayout');
  layout.innerHTML = `
    <div class="pd-img-block">
      <img src="${p.image}" alt="${p.name}"
           onerror="this.style.display='none';this.parentElement.innerHTML='<span style=\\"font-size:8rem\\">${p.emoji}</span>'" />
    </div>
    <div class="pd-info">
      <div class="pd-category">${p.category}</div>
      <h2 class="pd-name">${p.name}</h2>
      <div class="pd-rating">
        <span style="color:var(--gold);font-size:1.1rem">${starsHTML(p.rating)}</span>
        <span style="font-weight:700">${p.rating}</span>
        <span style="color:var(--text-light);font-size:0.85rem">(${p.reviews} reviews)</span>
      </div>
      <div class="pd-price">₹${p.price}</div>
      <div class="pd-desc">${p.desc}</div>
      <ul class="pd-benefits">${p.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
      <div class="pd-actions">
        <div class="pd-qty">
          <button onclick="changeQty(this,-1)">−</button>
          <span id="pdQty">1</span>
          <button onclick="changeQty(this,1)">+</button>
        </div>
        <button class="btn-primary" onclick="addToCartFromDetail(${id})">Add to Cart →</button>
      </div>
      <p style="font-size:0.78rem;color:var(--text-light);margin-top:0.75rem">🚚 Free delivery on orders above ₹499 &nbsp;|&nbsp; ✅ GMP Certified &nbsp;|&nbsp; 🔄 7-day returns</p>
    </div>
  `;
  showSection('product-detail');
}

function changeQty(btn, delta) {
  const span = document.getElementById('pdQty');
  let val = parseInt(span.textContent) + delta;
  if (val < 1) val = 1;
  if (val > 10) val = 10;
  span.textContent = val;
}

function addToCartFromDetail(id) {
  const qty = parseInt(document.getElementById('pdQty').textContent);
  for (let i = 0; i < qty; i++) addToCart(id);
}

/* ══════════════════════════════════
   FILTER BY REMEDY (from remedies page)
══════════════════════════════════ */
function filterByRemedy(cat) {
  activeCategory = cat;
  renderShopSidebar();
  filterProducts();
  showSection('shop');
}

/* ══════════════════════════════════
   CART
══════════════════════════════════ */
function addToCart(id, btn) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty += 1; }
  else { cart.push({ ...p, qty: 1 }); }
  updateCartUI();
  if (btn) { btn.textContent = '✓ Added'; btn.classList.add('added'); }
  // Flash cart icon
  const icon = document.getElementById('cart-icon');
  icon.style.transform = 'scale(1.2)';
  setTimeout(() => icon.style.transform = '', 200);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function changeCartQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cartCount').textContent = count;
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById('cartTotal').textContent = total;
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  if (cart.length === 0) {
    itemsEl.innerHTML = '<p class="empty-cart">Your cart is empty 🌿</p>';
    footerEl.style.display = 'none';
  } else {
    itemsEl.innerHTML = cart.map(c => `
      <div class="cart-item">
        <span class="cart-item-emoji">${c.emoji}</span>
        <div class="cart-item-info">
          <div class="cart-item-name">${c.name}</div>
          <div class="cart-item-price">₹${c.price} × ${c.qty} = ₹${c.price * c.qty}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeCartQty(${c.id},-1)">−</button>
          <span>${c.qty}</span>
          <button class="qty-btn" onclick="changeCartQty(${c.id},1)">+</button>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${c.id})">🗑</button>
      </div>
    `).join('');
    footerEl.style.display = 'block';
  }
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}

/* ══════════════════════════════════
   CHECKOUT
══════════════════════════════════ */
function checkout() {
  toggleCart();
  const modal = document.getElementById('checkoutModal');
  const summary = document.getElementById('orderSummaryModal');
  const total = cart.reduce((s,c) => s + c.price * c.qty, 0);
  summary.innerHTML = cart.map(c => `
    <div class="order-summary-item"><span>${c.name} × ${c.qty}</span><span>₹${c.price * c.qty}</span></div>
  `).join('') + `
    <div class="order-summary-total"><span>Total</span><span>₹${total}</span></div>
  `;
  document.getElementById('checkoutStep1').style.display = 'block';
  document.getElementById('checkoutStep2').style.display = 'none';
  modal.style.display = 'flex';
}

function closeCheckout() {
  document.getElementById('checkoutModal').style.display = 'none';
}

function placeOrder() {
  document.getElementById('checkoutStep1').style.display = 'none';
  document.getElementById('checkoutStep2').style.display = 'block';
  cart = [];
  updateCartUI();
}

/* ══════════════════════════════════
   CONTACT FORM
══════════════════════════════════ */
function submitContact(e) {
  e.preventDefault();
  alert('✅ Message sent! We will contact you within 24 hours.');
  e.target.reset();
}

function subscribeNewsletter() {
  alert('✅ Thank you for subscribing! You will receive updates on new products and offers.');
}

/* ══════════════════════════════════
   HELPERS
══════════════════════════════════ */
function starsHTML(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

/* Close modals on Escape */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeCheckout();
    if (document.getElementById('cartSidebar').classList.contains('open')) toggleCart();
  }
});

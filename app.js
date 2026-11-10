const products = [
  {
    id: 1,
    title: 'Apple iPhone 15 Pro Max 256GB',
    category: 'electronics',
    price: 999,
    oldPrice: 1199,
    badge: 'Verified',
    seller: 'NorthPeak Tech',
    location: 'Dublin, IE',
    rating: 4.9,
    reviews: 1884,
    image:
      'https://images.unsplash.com/photo-1695048133142-1d1e14ba3b5d?auto=format&fit=crop&w=900&q=80',
    shipping: 'Free shipping'
  },
  {
    id: 2,
    title: 'Premium Leather Office Chair',
    category: 'home',
    price: 219,
    oldPrice: 299,
    badge: 'Top rated',
    seller: 'UrbanNest',
    location: 'Cork, IE',
    rating: 4.8,
    reviews: 624,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    shipping: '2-day delivery'
  },
  {
    id: 3,
    title: 'Nike Air Max Pulse Running Shoe',
    category: 'fashion',
    price: 149,
    oldPrice: 189,
    badge: 'Trending',
    seller: 'Stride Studio',
    location: 'Galway, IE',
    rating: 4.7,
    reviews: 901,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    shipping: 'Free returns'
  },
  {
    id: 4,
    title: 'The Modern Dining Set - 4 Chairs',
    category: 'home',
    price: 499,
    oldPrice: 649,
    badge: 'New',
    seller: 'Harbor & Co',
    location: 'Limerick, IE',
    rating: 4.9,
    reviews: 452,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    shipping: 'Local pickup'
  },
  {
    id: 5,
    title: 'Canon EOS R10 Mirrorless Camera',
    category: 'electronics',
    price: 899,
    oldPrice: 1099,
    badge: 'Hot deal',
    seller: 'LensLogic',
    location: 'Dublin, IE',
    rating: 4.8,
    reviews: 760,
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    shipping: 'Free shipping'
  },
  {
    id: 6,
    title: 'Vintage Vinyl Record Collection',
    category: 'collectibles',
    price: 189,
    oldPrice: 249,
    badge: 'Rare find',
    seller: 'RetroQueue',
    location: 'Waterford, IE',
    rating: 5.0,
    reviews: 205,
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80',
    shipping: 'Insured post'
  },
  {
    id: 7,
    title: 'Cycling Pro Bike Bundle',
    category: 'sports',
    price: 820,
    oldPrice: 960,
    badge: 'Limited',
    seller: 'Summit Ride',
    location: 'Kerry, IE',
    rating: 4.7,
    reviews: 312,
    image:
      'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=900&q=80',
    shipping: 'Free setup'
  },
  {
    id: 8,
    title: 'Tesla Model Y Accessories Pack',
    category: 'motors',
    price: 320,
    oldPrice: 420,
    badge: 'Best seller',
    seller: 'VoltGarage',
    location: 'Dublin, IE',
    rating: 4.9,
    reviews: 1450,
    image:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80',
    shipping: 'Express courier'
  },
  {
    id: 9,
    title: 'Aroma Diffuser & Essential Oil Set',
    category: 'home',
    price: 64,
    oldPrice: 89,
    badge: 'Popular',
    seller: 'Bloom & Calm',
    location: 'Dublin, IE',
    rating: 4.8,
    reviews: 642,
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    shipping: 'Free shipping'
  },
  {
    id: 10,
    title: 'Sony WH-1000XM5 Headphones',
    category: 'electronics',
    price: 329,
    oldPrice: 399,
    badge: 'Editor choice',
    seller: 'Audio Harbor',
    location: 'Belfast, UK',
    rating: 4.9,
    reviews: 1180,
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    shipping: 'Free shipping'
  },
  {
    id: 11,
    title: 'Classic Mountain Jacket',
    category: 'fashion',
    price: 110,
    oldPrice: 149,
    badge: 'Seasonal',
    seller: 'Northline Outdoor',
    location: 'Donegal, IE',
    rating: 4.6,
    reviews: 411,
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    shipping: 'Easy returns'
  },
  {
    id: 12,
    title: 'Antique Brass Lamp',
    category: 'collectibles',
    price: 240,
    oldPrice: 300,
    badge: 'Collector pick',
    seller: 'Elm & Brass',
    location: 'Kilkenny, IE',
    rating: 4.9,
    reviews: 274,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    shipping: 'White glove delivery'
  }
];

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const categoryButtons = document.querySelectorAll('.category-btn');

const state = {
  category: 'all',
  query: '',
  sort: 'featured'
};

function formatPrice(value) {
  return `€${value}`;
}

function getFilteredProducts() {
  let filtered = [...products];

  if (state.category !== 'all') {
    filtered = filtered.filter((product) => product.category === state.category);
  }

  if (state.query.trim()) {
    const q = state.query.toLowerCase();
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(q) ||
      product.seller.toLowerCase().includes(q) ||
      product.location.toLowerCase().includes(q)
    );
  }

  switch (state.sort) {
    case 'low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      filtered.sort((a, b) => b.rating * 10 + b.reviews - (a.rating * 10 + a.reviews));
      break;
  }

  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();

  productGrid.innerHTML = filtered
    .map(
      (product) => `
        <article class="product-card" aria-label="${product.title}">
          <div class="product-image">
            <img src="${product.image}" alt="${product.title}" />
            <span class="product-badge">${product.badge}</span>
            <button class="product-favorite" type="button" aria-label="Save ${product.title}">♡</button>
          </div>
          <div class="product-body">
            <div class="product-meta">
              <span>${product.location}</span>
              <span>${product.shipping}</span>
            </div>
            <h3 class="product-title">${product.title}</h3>
            <p class="product-seller">Sold by ${product.seller}</p>
            <div class="price-line">
              <strong>${formatPrice(product.price)}</strong>
              <span>${formatPrice(product.oldPrice)}</span>
            </div>
            <div class="product-footer">
              <div class="product-rating">★★★★★ ${product.rating}</div>
              <button class="product-cart" type="button">Add</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; background: rgba(255,255,255,0.85); border: 1px solid rgba(17,24,39,0.06); border-radius: 22px; padding: 48px 20px; text-align: center;">
        <h3 style="margin: 0 0 10px; font-size: 1.7rem; letter-spacing: -0.05em;">No items match your search</h3>
        <p style="margin: 0; color: #6b7280;">Try another keyword or switch category.</p>
      </div>
    `;
  }
}

searchInput.addEventListener('input', (event) => {
  state.query = event.target.value;
  renderProducts();
});

sortSelect.addEventListener('change', (event) => {
  state.sort = event.target.value;
  renderProducts();
});

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.category = button.dataset.category;
    categoryButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderProducts();
  });
});

renderProducts();


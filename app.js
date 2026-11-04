/* LUMEN BOUTIQUE — WhatsApp enquiry-based shopping (no payment or stock backend) */
const PHONE = '440000000000';
const PRODUCTS = [
 {
  "id": "abstract-belted-dress",
  "name": "Monochrome Abstract Dress",
  "category": "dresses",
  "categoryLabel": "DRESSES",
  "photo": "assets/dress-01.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "A black-and-white abstract pattern with a belted silhouette. Ask about sizing and the matching scarf.",
  "imagePosition": "50% 40%"
 },
 {
  "id": "olive-embellished-dress",
  "name": "Olive Embellished Dress",
  "category": "abayas",
  "categoryLabel": "MODEST WEAR",
  "photo": "assets/dress-04.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "Olive tones with a colourful embellished front. Message the boutique for sizes and available pieces.",
  "imagePosition": "50% 35%"
 },
 {
  "id": "black-floral-abaya",
  "name": "Colourful Floral Abaya",
  "category": "abayas",
  "categoryLabel": "ABAYAS",
  "photo": "assets/abaya-02.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "Bright floral detailing against black for a statement modest look. Enquire about the exact pieces shown."
 },
 {
  "id": "mustard-trim-dress",
  "name": "Mustard Detail Dress",
  "category": "dresses",
  "categoryLabel": "DRESSES",
  "photo": "assets/dress-03.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "A warm mustard shade with colourful detailing at the neckline and cuffs. Ask us about fit and sizing."
 },
 {
  "id": "stone-zip-neck-dress",
  "name": "Stone Zip-Neck Dress",
  "category": "dresses",
  "categoryLabel": "DRESSES",
  "photo": "assets/dress-06.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "A simple stone-toned long dress with a zip neckline. Message us for the current size selection."
 },
 {
  "id": "olive-scallop-dress",
  "name": "Olive Scallop-Detail Dress",
  "category": "dresses",
  "categoryLabel": "DRESSES",
  "photo": "assets/dress-05.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "An olive-toned style with a scalloped front and decorative fastenings. Confirm sizing with the boutique."
 },
 {
  "id": "embroidered-abaya",
  "name": "Embroidered Abaya Dress",
  "category": "abayas",
  "categoryLabel": "ABAYAS",
  "photo": "assets/abaya-01.jpg",
  "tag": "FEATURED",
  "description": "Elegant modest dress with beautiful embroidered detailing."
 },
 {
  "id": "gowns-dresses",
  "name": "Gowns & Occasion Dresses",
  "category": "dresses",
  "categoryLabel": "DRESSES & GOWNS",
  "photo": "assets/dress-02.jpg",
  "tag": "COLLECTION",
  "description": "Discover colours and styles for everyday and special moments."
 },
 {
  "id": "wedding-rose-gold",
  "name": "Rose & Gold Wedding Gowns",
  "category": "wedding",
  "categoryLabel": "WEDDING & OCCASION",
  "photo": "assets/gown-02.jpg",
  "tag": "OCCASION EDIT",
  "description": "A rose-toned occasion look with gold detailing. Ask about the dress, matching veil and available sizes.",
  "imagePosition": "50% 28%"
 },
 {
  "id": "wedding-blush-lilac",
  "name": "Blush & Lilac Wedding Gowns",
  "category": "wedding",
  "categoryLabel": "WEDDING & OCCASION",
  "photo": "assets/gown-01.jpg",
  "tag": "OCCASION EDIT",
  "description": "Delicate blush and lilac tones with gold embellishment. Message us for the available styles and sizing.",
  "imagePosition": "50% 18%"
 },
 {
  "id": "wedding-sage-gold",
  "name": "Sage & Gold Wedding Gowns",
  "category": "wedding",
  "categoryLabel": "WEDDING & OCCASION",
  "photo": "assets/gown-03.jpg",
  "tag": "OCCASION EDIT",
  "description": "A statement sage-green occasion look with ornate gold detailing. Confirm the available set with the boutique.",
  "imagePosition": "50% 22%"
 },
 {
  "id": "ochre-rose-occasion-fabric",
  "name": "Ochre & Rose Occasion Fabrics",
  "category": "fabrics",
  "categoryLabel": "FABRICS & TEXTILES",
  "photo": "assets/fabric-11.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "Warm ochre, rose and gold-toned detailing. Ask about fabric lengths, colours and which pieces are included.",
  "photos": [
   "assets/fabric-11.jpg",
   "assets/fabric-10.jpg"
  ]
 },
 {
  "id": "plum-pink-occasion-fabric",
  "name": "Plum & Pink Occasion Fabrics",
  "category": "fabrics",
  "categoryLabel": "FABRICS & TEXTILES",
  "photo": "assets/fabric-12.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "Deep plum patterns paired with bright pink accents. Ask about fabric lengths, colours and which pieces are included."
 },
 {
  "id": "magenta-gold-occasion-fabric",
  "name": "Magenta & Gold Occasion Fabrics",
  "category": "fabrics",
  "categoryLabel": "FABRICS & TEXTILES",
  "photo": "assets/fabric-08.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "Rich magenta and violet with gold-toned floral details. Ask about fabric lengths, colours and which pieces are included."
 },
 {
  "id": "champagne-occasion-fabric",
  "name": "Champagne Occasion Fabrics",
  "category": "fabrics",
  "categoryLabel": "FABRICS & TEXTILES",
  "photo": "assets/fabric-04.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "Soft neutral tones with ornate gold-toned embellishment. Ask about fabric lengths, colours and which pieces are included."
 },
 {
  "id": "teal-gold-occasion-fabric",
  "name": "Teal & Gold Occasion Fabrics",
  "category": "fabrics",
  "categoryLabel": "FABRICS & TEXTILES",
  "photo": "assets/fabric-13.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "Deep teal florals, delicate gold-toned lines and decorative details. Ask about fabric lengths, colours and which pieces are included."
 },
 {
  "id": "blossom-print-fabrics",
  "name": "Blossom Print Fabrics",
  "category": "fabrics",
  "categoryLabel": "FABRICS & TEXTILES",
  "photo": "assets/fabric-01.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "Floral prints shown in soft lilac, pink and dark colourways. Ask about fabric lengths, colours and which pieces are included."
 },
 {
  "id": "maple-print-fabrics",
  "name": "Maple Leaf Print Fabrics",
  "category": "fabrics",
  "categoryLabel": "FABRICS & TEXTILES",
  "photo": "assets/fabric-09.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "Layered leaf patterns in red, rose and golden tones. Ask about fabric lengths, colours and which pieces are included."
 },
 {
  "id": "colour-bloom-fabrics",
  "name": "Colour Bloom Print Fabrics",
  "category": "fabrics",
  "categoryLabel": "FABRICS & TEXTILES",
  "photo": "assets/fabric-05.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "Expressive clustered patterns in warm, red and green colourways. Ask about fabric lengths, colours and which pieces are included."
 },
 {
  "id": "bold-floral-fabrics",
  "name": "Bold Floral Print Fabrics",
  "category": "fabrics",
  "categoryLabel": "FABRICS & TEXTILES",
  "photo": "assets/fabric-02.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "Large floral patterns in olive, red and blue colourways. Ask about fabric lengths, colours and which pieces are included."
 },
 {
  "id": "garden-print-fabrics",
  "name": "Garden Print Fabrics",
  "category": "fabrics",
  "categoryLabel": "FABRICS & TEXTILES",
  "photo": "assets/fabric-07.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "Delicate botanical patterns in contrasting colourways. Ask about fabric lengths, colours and which pieces are included."
 },
 {
  "id": "fan-leaf-fabrics",
  "name": "Fan Leaf Print Fabrics",
  "category": "fabrics",
  "categoryLabel": "FABRICS & TEXTILES",
  "photo": "assets/fabric-06.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "Sweeping leaf patterns in olive, gold and red tones. Ask about fabric lengths, colours and which pieces are included."
 },
 {
  "id": "botanical-print-fabrics",
  "name": "Botanical Print Fabrics",
  "category": "fabrics",
  "categoryLabel": "FABRICS & TEXTILES",
  "photo": "assets/fabric-03.jpg",
  "tag": "BOUTIQUE EDIT",
  "description": "Leafy designs in coral, teal and yellow-violet colourways. Ask about fabric lengths, colours and which pieces are included."
 },
 {
  "id": "crossbody-bag",
  "name": "Patterned Crossbody Bag",
  "category": "bags",
  "categoryLabel": "BAGS & ACCESSORIES",
  "photo": "assets/bag-01.jpg",
  "tag": "FEATURED",
  "description": "A patterned crossbody accessory from our boutique selection."
 },
 {
  "id": "handbags",
  "name": "Handbags & Accessories",
  "category": "bags",
  "categoryLabel": "BAGS & ACCESSORIES",
  "photo": "assets/bag-02.jpg",
  "tag": "COLLECTION",
  "description": "Finishing touches and practical pieces for your look."
 },
 {
  "id": "perfume-collection",
  "name": "Amber Noir Eau de Parfum · 100ml",
  "category": "fragrance",
  "categoryLabel": "EAU DE PARFUM",
  "photo": "assets/fragrance-01.jpg",
  "tag": "FRAGRANCE",
  "description": "Amber Noir Eau de Parfum, 100ml. Message us to confirm the current price and availability.",
  "imageFit": "contain"
 },
 {
  "id": "bakhoor-collection",
  "name": "Oud Blend",
  "category": "fragrance",
  "categoryLabel": "BAKHOOR & HOME FRAGRANCE",
  "photo": "assets/fragrance-02.jpg",
  "tag": "OUD BLEND",
  "description": "Explore oud and home fragrance. Ask about the blend, pack size and the items available separately."
 },
 {
  "id": "home-gifts",
  "name": "Homeware & Gifts",
  "category": "home",
  "categoryLabel": "HOME & GIFTS",
  "photo": "assets/home-01.jpg",
  "tag": "GIFT INSPIRATION",
  "description": "Thoughtful home accessories and gifting inspiration. Ask which individual pieces are currently available."
 },
 {
  "id": "kitchen-essentials",
  "name": "Kitchen & Home Essentials",
  "category": "home",
  "categoryLabel": "KITCHEN & HOME",
  "photo": "assets/home-02.jpg",
  "tag": "COLLECTION",
  "description": "Everyday kitchen and serving essentials. Message us for the current selection; items are enquired about individually.",
  "imageFit": "contain"
 },
 {
  "id": "woven-rugs",
  "name": "Woven Rugs & Kilims",
  "category": "rugs",
  "categoryLabel": "WOVEN RUGS",
  "photo": "assets/rug-01.jpg",
  "tag": "STYLE INSPIRATION",
  "description": "Discover traditional patterns for your home. Illustrative image; ask us for photos, sizes and prices of current stock.",
  "imagePosition": "50% 50%"
 }
];
const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];
function icon(name) {return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;}
function safeRead(key, fallback){try{const data=JSON.parse(localStorage.getItem(key));return data ?? fallback;}catch{return fallback;}}
function safeSave(key,value){try{localStorage.setItem(key,JSON.stringify(value));}catch{}}
let cart=safeRead('lumen_cart_v2',{});
let favorites=safeRead('lumen_favorites_v2',[]);
if(typeof cart !== 'object' || cart===null || Array.isArray(cart))cart={};
if(!Array.isArray(favorites))favorites=[];
let currentFilter='all';let currentSearch='';let toastTimer;
function waLink(message){return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;}
function whatsappOrder(product){const msg=`Hello Lumen Boutique! I'm interested in: ${product.name}. Could you please confirm the current price, availability, and how to order?`;window.open(waLink(msg),'_blank','noopener,noreferrer');}
function renderProducts(){
 const filtered=PRODUCTS.filter(p=>(currentFilter==='all'||p.category===currentFilter)&&`${p.name} ${p.description} ${p.categoryLabel}`.toLowerCase().includes(currentSearch.toLowerCase()));
 $('#results-count').textContent=`${filtered.length} ${filtered.length===1?'piece / collection':'pieces / collections'}`;
 $('#no-products').hidden=filtered.length!==0;
 $('#products-grid').innerHTML=filtered.map(p=>`<article class="product"><div class="product-photo"><img src="${p.photo}" alt="${p.name}" loading="lazy" style="object-fit:${p.imageFit || 'cover'};object-position:${p.imagePosition || 'center'}"><button class="product-photo-button" data-view="${p.id}" aria-label="View photos of ${p.name}">View photos</button><span class="product-tag">${p.tag}</span><button class="save-button ${favorites.includes(p.id)?'saved':''}" data-fav="${p.id}" aria-label="${favorites.includes(p.id)?'Remove':'Save'} ${p.name} ${favorites.includes(p.id)?'from':'to'} favourites" aria-pressed="${favorites.includes(p.id)}">${icon('heart')}</button></div><div class="product-body"><span class="product-category">${p.categoryLabel}</span><h3 class="product-name">${p.name}</h3><p class="product-description">${p.description}</p><p class="product-price">Enquire for price <span class="currency-label">Price</span></p><div class="product-buttons"><a href="${waLink(`Hello Lumen Boutique! I'm interested in: ${p.name}. Could you confirm the current price and availability?`)}" target="_blank" rel="noopener noreferrer" class="product-buy" aria-label="Buy ${p.name} on WhatsApp">Buy on WhatsApp ${icon('up-right')}</a><button class="product-add" aria-label="Add ${p.name} to bag" title="Add to bag" data-add="${p.id}">${icon('bag')}</button></div></div></article>`).join('');
}
function openPhoto(id){
 const p=PRODUCTS.find(item=>item.id===id);if(!p)return;
 $('#photo-title').textContent=p.name;
 $('#photo-images').innerHTML=(p.photos||[p.photo]).map((photo,i)=>`<figure><img src="${photo}" alt="${p.name}${i?' — alternate view':''}">${p.photos?`<figcaption>${i?'Alternate view':'Front view'}</figcaption>`:''}</figure>`).join('');
 $('#photo-enquire').href=waLink(`Hello Lumen Boutique! I'm interested in: ${p.name}. Could you confirm the current price and availability?`);
 $('#photo-dialog').showModal();
}
function setFilter(f){currentFilter=f;currentSearch='';$('#site-search').value='';$$('.filter').forEach(btn=>{const active=btn.dataset.filter===f;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});renderProducts();}
function updateCart(){
 const entries=Object.entries(cart).filter(([id,qty])=>PRODUCTS.some(p=>p.id===id)&&Number.isInteger(qty)&&qty>0);
 const total=entries.reduce((sum,[,qty])=>sum+qty,0);
 $('#cart-count').textContent=total;$('#drawer-count').textContent=`(${total})`;
 $('#checkout-whatsapp').disabled=total===0;
 $('#checkout-whatsapp').style.opacity=total?1:.48;
 if(total===0){$('#cart-items').innerHTML=`<div class="empty-cart">${icon('bag')}<h3>Your bag is empty</h3><p>Browse the collection and add your favourites.<br>We'll help you order on WhatsApp.</p></div>`;return;}
 $('#cart-items').innerHTML=entries.map(([id,qty])=>{const p=PRODUCTS.find(x=>x.id===id);return `<div class="cart-item"><img src="${p.photo}" alt="${p.name}"><div><h3 class="cart-item-title">${p.name}</h3><span class="cart-item-sub">PRICE ON ENQUIRY</span><div class="cart-qty-row"><div class="qty-controls"><button aria-label="Remove one ${p.name}" data-quantity="${id}" data-delta="-1">${icon('minus')}</button><span>${qty}</span><button aria-label="Add one ${p.name}" data-quantity="${id}" data-delta="1">${icon('plus')}</button></div><button class="remove-item" data-remove="${id}" aria-label="Remove ${p.name} from bag">${icon('trash')}</button></div></div></div>`;}).join('');
 safeSave('lumen_cart_v2',cart);
}
function addToCart(id){if(!PRODUCTS.some(p=>p.id===id))return;cart[id]=Math.min((cart[id]||0)+1,99);updateCart();showToast('Added to your bag');}
function showToast(message){const toast=$('#toast');toast.textContent=message;toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),2500);}
function openPanel(type){$('#overlay').hidden=false;const panel=type==='cart'?$('#cart-panel'):$('#mobile-panel');panel.classList.add('open');panel.setAttribute('aria-hidden','false');document.body.classList.add('lock');(type==='cart'?$('#close-cart'):$('#menu-close')).focus();}
function closePanels(){const wasOpen=$('#cart-panel').classList.contains('open')||$('#mobile-panel').classList.contains('open');$$('.cart-panel,.mobile-panel').forEach(p=>{p.classList.remove('open');p.setAttribute('aria-hidden','true');});$('#overlay').hidden=true;document.body.classList.remove('lock');if(wasOpen)$('#open-cart').focus({preventScroll:true});}
function checkout(){const entries=Object.entries(cart).filter(([id,n])=>n>0&&PRODUCTS.some(p=>p.id===id));if(!entries.length)return;const lines=entries.map(([id,qty],i)=>`${i+1}. ${PRODUCTS.find(p=>p.id===id).name} (Qty: ${qty})`);const msg=`Hello Lumen Boutique! I'd like to enquire about these items from your website:\n\n${lines.join('\n')}\n\nCould you please confirm prices, availability and how to complete my order? Thank you!`;window.open(waLink(msg),'_blank','noopener,noreferrer');}
function init(){
 $('#close-photo').addEventListener('click',()=>$('#photo-dialog').close());
 $('#photo-dialog').addEventListener('click',e=>{if(e.target===$('#photo-dialog'))$('#photo-dialog').close();});
 renderProducts();updateCart();$('#year').textContent=new Date().getFullYear();
 $('#filters').addEventListener('click',e=>{const btn=e.target.closest('[data-filter]');if(btn)setFilter(btn.dataset.filter);});
 $('#products-grid').addEventListener('click',e=>{const view=e.target.closest('[data-view]');if(view){openPhoto(view.dataset.view);return;}const add=e.target.closest('[data-add]');if(add){addToCart(add.dataset.add);return;}const fav=e.target.closest('[data-fav]');if(fav){const id=fav.dataset.fav;favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];safeSave('lumen_favorites_v2',favorites);renderProducts();showToast(favorites.includes(id)?'Saved to favourites':'Removed from favourites');}});
 $$('.category-card').forEach(a=>a.addEventListener('click',()=>{setFilter(a.dataset.category);currentSearch='';$('#site-search').value='';}));
 $$('[data-editorial-filter]').forEach(a=>a.addEventListener('click',()=>setFilter(a.dataset.editorialFilter)));
 $('#clear-filters').addEventListener('click',()=>{currentSearch='';$('#site-search').value='';setFilter('all');});
 $('#search-toggle').addEventListener('click',()=>{const panel=$('#search-panel');panel.hidden=!panel.hidden;if(!panel.hidden){$('#site-search').focus();}else{currentSearch='';$('#site-search').value='';renderProducts();}});
 $('#search-close').addEventListener('click',()=>{$('#search-panel').hidden=true;currentSearch='';$('#site-search').value='';renderProducts();});
 $('#site-search').addEventListener('input',e=>{currentSearch=e.target.value;renderProducts();if(currentSearch.length>0)$('#shop').scrollIntoView({behavior:'smooth',block:'start'});});
 $('#open-cart').addEventListener('click',()=>openPanel('cart'));$('#close-cart').addEventListener('click',closePanels);$('#continue-shopping').addEventListener('click',closePanels);
 $('#menu-open').addEventListener('click',()=>openPanel('menu'));$('#menu-close').addEventListener('click',closePanels);$('#overlay').addEventListener('click',closePanels);
 $$('.mobile-links a').forEach(a=>a.addEventListener('click',closePanels));
 $('#cart-items').addEventListener('click',e=>{const qty=e.target.closest('[data-quantity]');if(qty){const id=qty.dataset.quantity;cart[id]=Math.max(0,Math.min((cart[id]||0)+Number(qty.dataset.delta),99));if(!cart[id])delete cart[id];updateCart();return;}const rm=e.target.closest('[data-remove]');if(rm){delete cart[rm.dataset.remove];updateCart();}});
 $('#checkout-whatsapp').addEventListener('click',checkout);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){closePanels();$('#search-panel').hidden=true;}});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();

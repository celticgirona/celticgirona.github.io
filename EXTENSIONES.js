// GUIA D'EXTENSIÓ - Afegir Noves Funcionalitats al Celtic Girona Web

/**
 * 1. AFEGIR GALERIA DE FOTOS
 * ===========================
 */

// HTML:
/*
<section id="galeria" class="section">
    <div class="container">
        <h2>Galeria de Fotos</h2>
        <div class="gallery-grid">
            <div class="gallery-item" onclick="openLightbox(this)">
                <img src="images/foto1.jpg" alt="Foto 1">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <!-- Repetir per a més fotos -->
        </div>
    </div>
</section>

<div id="lightbox" class="lightbox" onclick="closeLightbox()">
    <span class="close">&times;</span>
    <img class="lightbox-content" id="lightbox-img">
</div>
*/

// CSS a afegir a styles.css:
/*
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 40px;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    aspect-ratio: 1;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(34, 197, 94, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
    opacity: 1;
}

.gallery-overlay i {
    font-size: 40px;
    color: white;
}

.lightbox {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    animation: fadeIn 0.3s ease;
}

.lightbox.active {
    display: flex;
    align-items: center;
    justify-content: center;
}

.lightbox-content {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    animation: zoomIn 0.3s ease;
}

.lightbox .close {
    position: absolute;
    top: 30px;
    right: 40px;
    font-size: 40px;
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.lightbox .close:hover {
    transform: rotate(90deg);
}
*/

// JavaScript a afegir a script.js:
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const img = element.querySelector('img');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

/**
 * 2. AFEGIR SECCIÓ D'HORARIS I CALENDARI
 * ======================================
 */

// HTML:
/*
<section id="calendari" class="section">
    <div class="container">
        <h2>Calendari de Partits</h2>
        <div class="calendario">
            <div class="partido-card">
                <div class="fecha">25 MAR</div>
                <div class="partido-info">
                    <div class="equipo">Celtic Girona</div>
                    <div class="vs">vs</div>
                    <div class="equipo">Equipo B</div>
                </div>
                <div class="hora">20:00</div>
                <div class="estadio">Estadi Martí i Carrera</div>
            </div>
        </div>
    </div>
</section>
*/

/**
 * 3. SISTEMA DE COMENTARIS (Disqus)
 * ==================================
 */

// Afegir això al final d'cada article:
/*
<div id="disqus_thread"></div>
<script>
var disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = 'celtic-article-1';
};

(function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://celticgirona.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
</script>
*/

/**
 * 4. SISTEMA DE NEWSLETTER/SUSCRIPCIÓ
 * ===================================
 */

// HTML a afegir:
/*
<section class="newsletter">
    <div class="container">
        <h2>Subscriu-te al nostru Newsletter</h2>
        <form class="newsletter-form" id="newsletterForm">
            <input type="email" placeholder="El teu email" required>
            <button type="submit" class="btn btn-primary">Subscriure's</button>
        </form>
    </div>
</section>
*/

// JavaScript:
document.getElementById('newsletterForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Integra amb un servei com Mailchimp o ConvertKit
    console.log('Email suscriptor:', email);
    
    // Mostrar missatge d'èxit
    alert('¡Gràcies per subscriure\'t al Celtic Girona!');
    e.target.reset();
});

/**
 * 5. INTEGRACIÓ AMB LIVE SCORE (API)
 * ==================================
 */

// Exemple amb fetch d'una API d'esports:
async function getLatestResults() {
    try {
        const response = await fetch('https://api.football-data.org/v4/teams/TUTEAM/matches');
        const data = await response.json();
        console.log('Últims resultats:', data);
        // Processa i mostra els resultats
    } catch (error) {
        console.error('Error obtenint dades:', error);
    }
}

/**
 * 6. DARK MODE TOGGLE
 * ===================
 */

// HTML a afegir al header:
/*
<button class="dark-mode-toggle" id="darkModeToggle">
    🌙
</button>
*/

// CSS:
/*
body.dark-mode {
    background: #0f172a;
    color: #f8fafc;
}

body.dark-mode .card,
body.dark-mode .article-card,
body.dark-mode .contact-form {
    background: #1e293b;
    color: #f8fafc;
}

.dark-mode-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary);
    border: none;
    cursor: pointer;
    font-size: 24px;
    z-index: 999;
    transition: all 0.3s ease;
}

.dark-mode-toggle:hover {
    transform: scale(1.1);
}
*/

// JavaScript:
function initDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    const saved = localStorage.getItem('darkMode') === 'true';
    
    if (saved) document.body.classList.add('dark-mode');
    
    toggle?.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
        toggle.textContent = isDark ? '☀️' : '🌙';
    });
}

initDarkMode();

/**
 * 7. REPRODUCTOR DE VÍDEO
 * =======================
 */

// HTML:
/*
<section id="videos" class="section">
    <div class="container">
        <h2>Vídeos Destacats</h2>
        <div class="videos-grid">
            <div class="video-card">
                <div class="video-player">
                    <iframe width="100%" height="315" 
                        src="https://www.youtube.com/embed/VIDEO_ID" 
                        frameborder="0" allowfullscreen></iframe>
                </div>
                <h3>Títol del vídeo</h3>
            </div>
        </div>
    </div>
</section>

.video-card {
    border-radius: 10px;
    overflow: hidden;
}

.video-player {
    aspect-ratio: 16 / 9;
    background: #000;
}
*/

/**
 * 8. SISTEMA DE TIKETS (Integració amb Ticketmaster)
 * =================================================
 */

// Enllaç a Ticketmaster:
/*
<a href="https://www.ticketmaster.com" target="_blank" class="btn btn-primary">
    Compra Entrades
</a>
*/

/**
 * 9. MAPA INTERACTIU DE LA UBICACIÓ
 * ================================
 */

// Afegir a index.html:
/*
<section id="ubicacio" class="section">
    <div class="container">
        <h2>Ubicació</h2>
        <div id="map" style="height: 400px; border-radius: 10px; overflow: hidden;">
        </div>
    </div>
</section>

<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
<script>
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 42.2326, lng: 2.8277 } // Coordenades de Girona
    });
    
    new google.maps.Marker({
        position: { lat: 42.2326, lng: 2.8277 },
        map: map,
        title: 'Celtic Girona'
    });
}

window.addEventListener('load', initMap);
</script>
*/

/**
 * 10. SYSTÈME DE RANKING/TAULA
 * ===========================
 */

// HTML:
/*
<section id="ranking" class="section">
    <div class="container">
        <h2>Classificació</h2>
        <table class="ranking-table">
            <thead>
                <tr>
                    <th>Posició</th>
                    <th>Equip</th>
                    <th>PJ</th>
                    <th>G</th>
                    <th>E</th>
                    <th>P</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>DG</th>
                    <th>Punts</th>
                </tr>
            </thead>
            <tbody>
                <tr class="our-team">
                    <td>1</td>
                    <td>Celtic Girona</td>
                    <td>20</td>
                    <td>15</td>
                    <td>3</td>
                    <td>2</td>
                    <td>45</td>
                    <td>12</td>
                    <td>+33</td>
                    <td><strong>48</strong></td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

.ranking-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.ranking-table th,
.ranking-table td {
    padding: 15px;
    text-align: center;
}

.ranking-table th {
    background: var(--primary);
    color: white;
    font-weight: bold;
}

.ranking-table tbody tr:hover {
    background: rgba(34, 197, 94, 0.1);
}

.ranking-table .our-team {
    background: rgba(34, 197, 94, 0.2);
    font-weight: bold;
}
*/

// ¡Noves idees!
console.log('%c💡 IDEES PER AL FUTUR', 'color: #22c55e; font-size: 16px; font-weight: bold;');
console.log(%c✓ Blog o notícies dinàmiques (CMS)', 'color: #16a34a;');
console.log('%c✓ Sistema de reserva d\'entrades', 'color: #16a34a;');
console.log('%c✓ Chat en viu per suport', 'color: #16a34a;');
console.log('%c✓ Aplicació móbil (React Native)', 'color: #16a34a;');
console.log('%c✓ Programa d\'afiliació', 'color: #16a34a;');
console.log('%c✓ Tienda blockchain de NFTs', 'color: #16a34a;');
console.log('%c✓ Streaming 360º de partits', 'color: #16a34a;');

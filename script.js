// Animacija pri skrolovanju (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => revealObserver.observe(el));

// Logika za promenu cene (Mesečno / Godišnje)
const btnMonthly = document.getElementById('btn-monthly');
const btnYearly = document.getElementById('btn-yearly');
const priceStarter = document.getElementById('price-starter');
const priceGrowth = document.getElementById('price-growth');
const priceEnterprise = document.getElementById('price-enterprise');

btnMonthly.addEventListener('click', () => {
    btnMonthly.classList.add('active');
    btnYearly.classList.remove('active');

    priceStarter.innerHTML = '19 <span>€ / mesečno</span>';
    priceGrowth.innerHTML = '49 <span>€ / mesečno</span>';
    priceEnterprise.innerHTML = '99 <span>€ / mesečno</span>';
});

btnYearly.addEventListener('click', () => {
    btnYearly.classList.add('active');
    btnMonthly.classList.remove('active');

    // Prikaz godišnjih cena sa popustom
    priceStarter.innerHTML = '182 <span>€ / godišnje</span>';
    priceGrowth.innerHTML = '470 <span>€ / godišnje</span>';
    priceEnterprise.innerHTML = '950 <span>€ / godišnje</span>';
});

// Mobilni meni (jednostavna funkcija)
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.1)';
    }
});

// --- MODAL LOGIKA ---
const modal = document.getElementById('myModal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

// Definišemo funkcije u globalnom opsegu da bi inline onclick radio
window.openModal = function(contentHTML) {
    modalBody.innerHTML = contentHTML;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

window.closeModal = function() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Forma Modal Trigger (Započnite / Postanite klijent / Kupite sada)
const formBtns = document.querySelectorAll('.trigger-form-modal');
formBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const formHTML = `
            <h3 style="margin-bottom: 10px;">Zakažite konsultacije</h3>
            <p style="color: var(--text-light); margin-bottom: 25px;">Popunite formu ispod i naš tim će vas kontaktirati u roku od 24 sata.</p>
            <form class="modal-form" onsubmit="event.preventDefault(); alert('Uspešno poslato! Kontaktiraćemo vas uskoro.'); window.closeModal();">
                <div class="form-group">
                    <label>Ime i prezime</label>
                    <input type="text" required placeholder="Vaše ime">
                </div>
                <div class="form-group">
                    <label>Email adresa</label>
                    <input type="email" required placeholder="vasa@email.com">
                </div>
                <div class="form-group">
                    <label>Broj telefona</label>
                    <input type="tel" required placeholder="+381 6X XXX XXXX">
                </div>
                <div class="form-group">
                    <label>Poruka (opciono)</label>
                    <textarea rows="3" placeholder="Kako možemo da pomognemo?"></textarea>
                </div>
                <button type="submit" class="btn btn-accent">Pošalji zahtev</button>
            </form>
        `;
        openModal(formHTML);
    });
});

// Info Modal Trigger (Saznajte više u uslugama)
const infoBtns = document.querySelectorAll('.trigger-info-modal');
infoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = btn.getAttribute('data-title');
        const text = btn.getAttribute('data-text');
        const infoHTML = `
            <h3 style="margin-bottom: 20px; color: var(--primary-color);">${title}</h3>
            <p style="color: var(--text-light); line-height: 1.8; margin-bottom: 25px;">${text}</p>
            <button class="btn btn-primary" onclick="window.closeModal()">Zatvori</button>
        `;
        openModal(infoHTML);
    });
});

// Footer Modal Trigger (Svi linkovi u footeru)
const footerBtns = document.querySelectorAll('.trigger-footer-modal');
footerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = btn.getAttribute('data-title');
        const text = btn.getAttribute('data-text');
        const infoHTML = `
            <h3 style="margin-bottom: 20px; color: var(--primary-color);">${title}</h3>
            <p style="color: var(--text-light); line-height: 1.8; margin-bottom: 25px;">${text}</p>
            <button class="btn btn-primary" onclick="window.closeModal()">Zatvori</button>
        `;
        openModal(infoHTML);
    });
});

// Controlla se c'è un parametro di stato nell'URL
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const messageDiv = document.getElementById('form-message');
    
    if (status === 'success') {
        messageDiv.innerHTML = '<p style="color: green; padding: 10px; background-color: #e8f5e9; border-radius: 4px; margin-bottom: 20px;">La tua richiesta è stata inviata con successo! Ti contatteremo presto.</p>';
    } else if (status === 'error') {
        messageDiv.innerHTML = '<p style="color: red; padding: 10px; background-color: #ffebee; border-radius: 4px; margin-bottom: 20px;">Si è verificato un errore nell\'invio della richiesta. Per favore, contattaci direttamente via telefono o email.</p>';
    }
    
    // Carica le immagini della galleria
    caricaGalleria();
};

// Funzione per caricare le immagini dalla cartella
function caricaGalleria() {
    // Array con i nomi delle immagini nella cartella
    const immagini = [
        {file: 'galleria/foto1.jpg', },
        {file: 'galleria/foto3.jpg', },
        {file: 'galleria/foto4.jpg', },
        {file: 'galleria/foto5.jpg', },
        {file: 'galleria/foto6.jpg', },
        {file: 'galleria/foto7.jpg', },
        {file: 'galleria/foto8.jpg', },
        {file: 'galleria/foto9.jpg', },
        {file: 'galleria/foto10.jpg', },
        {file: 'galleria/foto11.jpg', },
        {file: 'galleria/foto12.jpg', },
        {file: 'galleria/foto13.jpg', },
        {file: 'galleria/foto14.jpg', },
        {file: 'galleria/foto15.jpg', },
        {file: 'galleria/foto16.jpg', },
        {file: 'galleria/foto17.jpg', },
        {file: 'galleria/foto18.jpg', },
        {file: 'galleria/foto19.jpg', },
        {file: 'galleria/foto20.jpg', },
        {file: 'galleria/foto21.jpg', },
        {file: 'galleria/foto22.jpg', },
        {file: 'galleria/foto23.jpg', },
        {file: 'galleria/foto24.jpg', },
        {file: 'galleria/foto25.jpg', },
        {file: 'galleria/foto26.jpg', },
        {file: 'galleria/foto27.jpg', },
        {file: 'galleria/foto28.jpg', },
        {file: 'galleria/foto29.jpg', },
        {file: 'galleria/foto30.jpg', },
        {file: 'galleria/foto31.jpg', },
        {file: 'galleria/foto32.jpg', },
        {file: 'galleria/foto33.jpg', },
        {file: 'galleria/foto34.jpg', },
        {file: 'galleria/foto35.jpg', },
        {file: 'galleria/foto36.jpg', },
        {file: 'galleria/foto37.jpg', },
        {file: 'galleria/foto38.jpg', },
        {file: 'galleria/foto39.jpg', },
        {file: 'galleria/foto40.jpg', },
        {file: 'galleria/foto41.jpg', },
        {file: 'galleria/foto42.jpg', },
        {file: 'galleria/foto43.jpg', },
        {file: 'galleria/foto44.jpg', },
        // Aggiungi altre immagini secondo necessità
    ];
    
    const galleryContainer = document.getElementById('gallery-container');
    
    // Crea un elemento per ogni immagine
    immagini.forEach(img => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const imgElement = document.createElement('img');
        imgElement.src = img.file;
        imgElement.alt = img.titolo;
        
        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        
        const span = document.createElement('span');
        span.textContent = img.titolo;
        
        overlay.appendChild(span);
        galleryItem.appendChild(imgElement);
        galleryItem.appendChild(overlay);
        
        galleryContainer.appendChild(galleryItem);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Gestione del banner dei cookie
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    
    // Controlla se l'utente ha già accettato i cookie
    if (!localStorage.getItem('cookiesAccepted')) {
        // Mostra il banner dopo 1 secondo
        setTimeout(() => {
            cookieBanner.style.display = 'block';
        }, 1000);
    }
    
    // Quando l'utente accetta i cookie
    acceptCookiesBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });
    
    // Codice per la galleria (se già presente)
});
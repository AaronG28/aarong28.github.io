// js/share-buttons.js
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-btn');
    if (shareButtons.length > 0) {
        const currentUrl = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        
        shareButtons.forEach(button => {
            const network = button.classList.contains('facebook') ? 'facebook' :
                         button.classList.contains('twitter') ? 'twitter' :
                         button.classList.contains('whatsapp') ? 'whatsapp' : '';
            
            if (network === 'facebook') {
                button.href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
            } else if (network === 'twitter') {
                button.href = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${title}`;
            } else if (network === 'whatsapp') {
                button.href = `https://wa.me/?text=${title}%20${currentUrl}`;
            }
        });
    }
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initShareButtons);
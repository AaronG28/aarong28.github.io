function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-btn');
    const currentUrl = window.location.href;
    const title = document.title;

    shareButtons.forEach(button => {
        if (button.classList.contains('facebook')) {
            button.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl )}`;
        } else if (button.classList.contains('twitter')) {
            button.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl )}&text=${encodeURIComponent(title)}`;
        } else if (button.classList.contains('whatsapp')) {
            button.href = `https://wa.me/?text=${encodeURIComponent(title )}%20${encodeURIComponent(currentUrl)}`;
        } else if (button.classList.contains('copy-link')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                try {
                    // Intenta primero con la API moderna
                    navigator.clipboard.writeText(currentUrl)
                        .then(() => {
                            showCopySuccess(button);
                        })
                        .catch(() => {
                            // Si falla, usa el método alternativo
                            fallbackCopyTextToClipboard(currentUrl, button);
                        });
                } catch (err) {
                    // Si hay un error general, usa el método alternativo
                    fallbackCopyTextToClipboard(currentUrl, button);
                }
            });
        }
    });
    
    // Función alternativa para copiar texto
    function fallbackCopyTextToClipboard(text, button) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";  // Evita desplazamiento
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            showCopySuccess(button);
        } catch (err) {
            alert("No se pudo copiar el enlace.");
        }
        
        document.body.removeChild(textArea);
    }
    
    // Función para mostrar confirmación visual
    function showCopySuccess(button) {
        // Guarda el contenido original
        const originalContent = button.innerHTML;
        
        // Cambia a icono de éxito
        button.innerHTML = '<i class="fas fa-check"></i>';
        
        // Restaura después de 2 segundos
        setTimeout(() => {
            button.innerHTML = originalContent;
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', initShareButtons);


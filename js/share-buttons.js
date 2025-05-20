function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-btn');
    const currentUrl = window.location.href;
    const title = document.title;

    shareButtons.forEach(button => {
        if (button.classList.contains('facebook')) {
            button.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        } else if (button.classList.contains('twitter')) {
            button.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`;
        } else if (button.classList.contains('whatsapp')) {
            button.href = `https://wa.me/?text=${encodeURIComponent(title)}%20${encodeURIComponent(currentUrl)}`;
        } else if (button.classList.contains('copy-link')) {
            button.addEventListener('click', function () {
                navigator.clipboard.writeText(currentUrl)
                    .then(() => {
                        const toast = document.getElementById('copy-toast');
                        toast.classList.add('show');
                        toast.classList.remove('hidden');
                        setTimeout(() => {
                            toast.classList.remove('show');
                            toast.classList.add('hidden');
                        }, 2500);
                    })
                    .catch(() => {
                        alert("No se pudo copiar el enlace.");
                    });
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', initShareButtons);

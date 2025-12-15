const ShareManager = (() => {
    const shareButtons = document.querySelectorAll('.share-btn');
    
    const shareUrls = {
        instagram: (url, text) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        facebook: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        linkedin: (url, text) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`,
        whatsapp : (url, title, text) => `https://api.whatsapp.com/send?text=${encodeURIComponent('Judul Artikel: ' + title + '-' + url + text)}`
    };

    const share = (platform) => {
        const url = window.location.href;
        const text = document.title;
        
        const shareUrl = shareUrls[platform](url, text);
        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    const init = () => {
        shareButtons.forEach(button => {
            button.addEventListener('click', () => {
                const platform = button.dataset.platform;
                share(platform);
            });
        });
    };

    return { init };
})();
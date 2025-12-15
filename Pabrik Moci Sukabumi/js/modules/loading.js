const LoadingManager = (() => {
    const loadingScreen = document.getElementById('loadingScreen');

    const show = () => {
        loadingScreen.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const hide = () => {
        loadingScreen.classList.add('loading-complete');
        
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            document.body.style.overflow = '';
            
            setTimeout(() => {
                if (loadingScreen.parentNode) {
                    loadingScreen.parentNode.removeChild(loadingScreen);
                }
            }, 1000);
        }, 500);
    };

    const init = (duration = 3000) => {
        show();
        
        setTimeout(() => {
            hide();
        }, duration);
    };

    return { init, show, hide };
})();
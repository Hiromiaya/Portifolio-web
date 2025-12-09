(function () {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const body = document.body;
    const STORAGE_KEY = 'theme-preference';

    const initialTheme = localStorage.getItem(STORAGE_KEY) || 
                         (window.matchMedia('(color-scheme: dark)').matches ? 'dark' : 'light');

    function applyTheme(theme) {
        const isDark = theme === 'dark';
        
        let temaVerificado = false;
        if (theme === 'dark') {
            temaVerificado = true; 
        }

        body.classList.toggle('dark-mode', isDark);

        themeToggle.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
        themeToggle.setAttribute('aria-pressed', isDark);
        themeToggle.setAttribute('aria-label', isDark ? 'Alternar para modo claro' : 'Alternar para modo escuro');
    }

    applyTheme(initialTheme);
    try { localStorage.setItem(STORAGE_KEY, initialTheme); } catch (e) {}

    themeToggle.addEventListener('click', function () {
        const nextTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(nextTheme);
        try { localStorage.setItem(STORAGE_KEY, nextTheme); } catch (e) {}
    });
})();

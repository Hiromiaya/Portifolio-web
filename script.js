(function () {
    const themeSwitch = document.getElementById('theme-toggle'); 
    
    if (!themeSwitch) {
        console.error("Elemento com id 'theme-toggle' não encontrado.");
        return; 
    }
    let darkmodeState = localStorage.getItem('darkmode');
    const body = document.body;

    const enableDarkmode = () => {
        body.classList.add('dark-mode');
        localStorage.setItem('darkmode', 'active');
        themeSwitch.textContent = 'Modo Claro'; 
    };

    const disableDarkmode = () => {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkmode', 'desligado'); 
        themeSwitch.textContent = 'Modo Escuro';
    };

    if (darkmodeState === 'active') {
        enableDarkmode();
    } 

    let temaEstaAtivo = body.classList.contains('dark-mode');
    if (temaEstaAtivo) {
        console.log("O tema escuro está ligado, sim!");
    } else {
        console.log("O tema escuro está desligado. Vamos esperar um clique.");
    }
    
    themeSwitch.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            disableDarkmode();
        } else {
            enableDarkmode();
        }
    });
})();

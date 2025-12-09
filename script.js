const themeSwitch = document.getElementById('theme-switch');
if (!themeSwitch) {
    console.error("theme-switch não encontrado.");
    return;
}

let darkmodeState = localStorage.getItem('darkmode');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    darkmodeState = 'active';
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    darkmodeState = null;
};

if (darkmodeState === 'active') {
    enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
    darkmodeState !== "active" ? enableDarkmode() : disableDarkmode();
});

const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem('preferredLanguage', selectedLanguage);
    // Ngarko gjuhën e zgjedhur
    loadLanguage(selectedLanguage);
});

function loadLanguage(language) {
    fetch(`${language}.json`)
        .then(response => response.json())
        .then(data => {
            // Përdor të dhënat nga skedari i gjuhës
            document.querySelector('.menu__name').textContent = data.menuName;
            // Vazhdoni për pjesët e tjera të faqes
        });
}


function updateFlag() {
    const select = document.getElementById('languageSwitcher');
    const flag = select.options[select.selectedIndex].getAttribute('data-flag');
    document.getElementById('flagImage').src = flag;
}


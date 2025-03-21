window.onload = function() {
    // Check if saved settings exist in localStorage
    if(localStorage.getItem('pageTitle')) {
        document.title = localStorage.getItem('pageTitle');
    }
    
    if(localStorage.getItem('favicon')) {
        document.getElementById('favicon').setAttribute('href', localStorage.getItem('favicon'));
    }
};

function applyChanges() {
    const selectedOption = document.getElementById('select-option').value;

        // Change title and favicon based on the selected option
        if (selectedOption === 'google') {
            document.title = "Google";
            document.getElementById('favicon').setAttribute('href', 'google.ico');
        } else if (selectedOption === 'schoolgy') {
            document.title = "Schoolgy";
            document.getElementById('favicon').setAttribute('href', 'sschoology.ico');
        } else if (selectedOption === 'stellar') {
            document.title = "Stellar Space";
            document.getElementById('favicon').setAttribute('href', 'icon2.ico');
        } else if (selectedOption === 'cosmic') {
            document.title = "Cosmic Realm";
            document.getElementById('favicon').setAttribute('href', 'icon3.ico');
        } else if (selectedOption === 'galaxy') {
            document.title = "Galaxy Explorer";
            document.getElementById('favicon').setAttribute('href', 'icon4.ico');
        }

    // Save changes to localStorage
    localStorage.setItem('pageTitle', document.title);
    localStorage.setItem('favicon', document.getElementById('favicon').getAttribute('href'));
}

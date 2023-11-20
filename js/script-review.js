// attende che il documento sia caricato prima di eseguire il codice
document.addEventListener('DOMContentLoaded', function () {
    // seleziona tutte le stelle
    let stelle = document.querySelectorAll('.stella');

    // itera le stelle
    stelle.forEach(function (stella, index) {
        // mouseenter
        stella.addEventListener('mouseenter', function () {
            // quando il mouse entra in una stella, colora tutte le stelle fino a quella corrente di azzurro
            for (let i = 0; i <= index; i++) {
                stelle[i].querySelector('path').style.fill = '#00FFFF';
            }
        });

        // mouseleave
        stella.addEventListener('mouseleave', function () {
            // quando il mouse esce da una stella, ripristina il colore grigio a tutte le stelle tranne quelle cliccate
            stelle.forEach(function (stella) {
                if (!stella.classList.contains('clicked')) {
                    stella.querySelector('path').style.fill = 'grey';
                }
            });
        });

        // aggiunge un gestore per l'evento click su ciascuna stella
        stella.addEventListener('click', function () {
            // quando una stella viene cliccata, aggiunge la classe 'clicked' a tutte le stelle precedenti o uguali a quella cliccata
            for (let i = 0; i <= index; i++) {
                stelle[i].classList.add('clicked');
            }

            // rimuove la classe 'clicked' da tutte le stelle successive a quella cliccata
            for (let i = index + 1; i < stelle.length; i++) {
                stelle[i].classList.remove('clicked');
            }
        });
    });
});

//lisa, hover bottone
const button = document.getElementById('bottone');;

button.addEventListener('mouseover', () => {
    button.classList.add('hovered-button');
});

button.addEventListener('mouseout', () => {
    button.classList.remove('hovered-button');
});

// evento da tastiera per l'input
let input = document.querySelector("input")
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector("input").value = "";
    }
});
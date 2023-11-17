// Attendiamo che il documento HTML sia completamente caricato prima di eseguire il codice
document.addEventListener('DOMContentLoaded', function () {
    // Selezioniamo tutte le stelle nel documento
    let stelle = document.querySelectorAll('.stella');

    // Iteriamo su ciascuna stella
    stelle.forEach(function (stella, index) {
        // Aggiungiamo un gestore per l'evento mouseenter su ciascuna stella
        stella.addEventListener('mouseenter', function () {
            // Quando il mouse entra in una stella, coloriamo tutte le stelle fino a quella corrente di azzurro
            for (let i = 0; i <= index; i++) {
                stelle[i].querySelector('path').style.fill = '#00FFFF';
            }
        });

        // Aggiungiamo un gestore per l'evento mouseleave su ciascuna stella
        stella.addEventListener('mouseleave', function () {
            // Quando il mouse esce da una stella, ripristiniamo il colore grigio a tutte le stelle tranne quelle cliccate
            stelle.forEach(function (stella) {
                if (!stella.classList.contains('clicked')) {
                    stella.querySelector('path').style.fill = 'grey';
                }
            });
        });

        // Aggiungiamo un gestore per l'evento click su ciascuna stella
        stella.addEventListener('click', function () {
            // Quando una stella viene cliccata, aggiungiamo la classe 'clicked' a tutte le stelle precedenti o uguali a quella cliccata
            for (let i = 0; i <= index; i++) {
                stelle[i].classList.add('clicked');
            }

            // Rimuoviamo la classe 'clicked' da tutte le stelle successive a quella cliccata
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
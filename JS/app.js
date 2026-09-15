// Dati form
const fullnameInput = document.getElementById('fullName');
const kmInput = document.getElementById('km');
const ageSelect = document.getElementById('age');

// Dati card
const nomePasseggero = document.getElementById('nomePasseggero');
const offerta = document.getElementById('offerta');
const carrozza = document.getElementById('carrozza');
const codiceCP = document.getElementById('codiceCP');
const ticketPrice = document.getElementById('ticketPrice');

// Form e bottoni
const form = document.getElementById('form');
const bottoneAnnulla = document.querySelector('.btn-danger');

// Contenitore card biglietto
const cardTicketContainer = document.getElementById('ticketCard');

// Submit event invio form
form.addEventListener('submit', function (event) {
    // Impedisco al form di ricaricare la pagina
    event.preventDefault();

    const fullNameValue = fullnameInput.value;
    const kmValue = parseFloat(kmInput.value);
    const ageValue = ageSelect.value;

    if (!fullNameValue || isNaN(kmValue) || kmValue <= 0) {
        alert('Per favore inserisci dati validi!');
        return;
    }

    // Calcolo prezzo base
    let basePrice = kmValue * 0.21;
    let finalPrice = basePrice;
    let offerText = 'Biglietto Standard';

    if (ageValue === 'Minorenne') {
        offerText = 'Sconto Minorenni';
        finalPrice = basePrice * 0.8; // Sconto 20%
    } else if (ageValue === 'Over 65') {
        offerText = 'Sconto Over 65';
        finalPrice = basePrice * 0.6; // Sconto 40%
    }

    // Popolo i dati nella card
    nomePasseggero.innerText = fullNameValue;
    offerta.innerText = offerText;
    carrozza.innerText = Math.floor(Math.random() * 10) + 1;
    codiceCP.innerText = Math.floor(Math.random() * 90000) + 10000;
    ticketPrice.innerText = finalPrice.toFixed(2) + ' €';

    // Mostro la card rimuovendo d-none, controllando che il mio elemento esista
    if (cardTicketContainer) {
        cardTicketContainer.classList.remove('d-none');
    }
});

// Evento bottone Annulla
bottoneAnnulla.addEventListener('click', function (event) {
    event.preventDefault();
    form.reset();
    if (cardTicketContainer) {
        cardTicketContainer.classList.add('d-none');
    }
});


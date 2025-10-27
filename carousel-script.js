document.getElementById('subscribeButton').addEventListener('click', () => {
  alert('¡Gracias por suscribirte!');
});

const books = document.querySelectorAll('.book');
const positions = ['position-left', 'position-center', 'position-right', 'position-behind', 'position-behind'];

function updatePositions(direction) {
  if (direction === 'next') {
    positions.unshift(positions.pop());
  } else {
    positions.push(positions.shift());
  }

  books.forEach((book, index) => {
    book.className = `book ${positions[index]}`;
  });
}

document.getElementById('purchaseButton').addEventListener('click', () => {
  alert('¡Gracias por tu interés! Redirigiendo a la página de compra...');
  window.location.href = 'pagina_compra.html'; // aqui va la pagina de compra
});

document.getElementById('nextBtn').addEventListener('click', () => updatePositions('next'));
document.getElementById('prevBtn').addEventListener('click', () => updatePositions('prev'));

const modal = document.getElementById('modal');
const iframe = modal.querySelector('iframe');
const closeModal = document.getElementById('closeModal');

books.forEach(book => {
  book.addEventListener('click', () => {
    const flipbookSrc = book.getAttribute('data-flipbook');
    iframe.src = flipbookSrc;
    modal.classList.add('active');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
  iframe.src = '';
});

function shareContent() {
if (navigator.share) {
    navigator.share({
        title: 'Título del contenido',
        text: 'Descripción breve de lo que compartes.',
        url: window.location.href // URL actual
    })
    .then(() => console.log('¡Contenido compartido con éxito!'))
    .catch((error) => console.error('Error al compartir:', error));
} else {
    document.getElementById('fallback-links').style.display = 'block';
}
}
document.getElementById("search-input").addEventListener("keyup", searchFunction);

function searchFunction() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let images = document.querySelectorAll('.img-gallery a');
    let caption;
    for (let i = 0; i < images.length; i ++) {
        let data = images[i];
        caption = data.getAttribute('data-title').toLowerCase();
    } if (caption.includes(input)) {
        images.style.display = '';
    } else {
        images.style.display = 'none';
    }
}


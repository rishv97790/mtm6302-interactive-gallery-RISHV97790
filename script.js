document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    const images = [
        { src: 'images/image1.jpeg', hdSrc: 'images/hd/image1.jpeg', title: 'Artwork 1', description: 'image1' },
        { src: 'images/image2.jpeg', hdSrc: 'images/hd/image2.jpeg', title: 'Artwork 2', description: 'image2' },
        { src: 'images/image3.jpeg', hdSrc: 'images/hd/image3.jpeg', title: 'Artwork 3', description: 'image3' },
        { src: 'images/image4.jpeg', hdSrc: 'images/hd/image4.jpeg', title: 'Artwork 4', description: 'image4' },
        { src: 'images/image5.jpeg', hdSrc: 'images/hd/image5.jpeg', title: 'Artwork 5', description: 'image5' },
        { src: 'images/image6.jpeg', hdSrc: 'images/hd/image6.jpeg', title: 'Artwork 6', description: 'image6' },
        { src: 'images/image7.jpeg', hdSrc: 'images/hd/image7.jpeg', title: 'Artwork 7', description: 'image7' },
        { src: 'images/image8.jpeg', hdSrc: 'images/hd/image8.jpeg', title: 'Artwork 8', description: 'image8' },
        { src: 'images/image9.jpeg', hdSrc: 'images/hd/image9.jpeg', title: 'Artwork 9', description: 'image9' },
        { src: 'images/image10.jpeg', hdSrc: 'images/hd/image10.jpeg', title: 'Artwork 10', description: 'image10' }
    ];

    images.forEach((image, index) => {
        const container = document.createElement('div');
        container.classList.add('image-container');
        container.dataset.index = index;

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;

        container.appendChild(img);
        gallery.appendChild(container);
    });

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    gallery.addEventListener('click', (event) => {
        const target = event.target.closest('.image-container');
        if (target) {
            const index = target.dataset.index;
            const image = images[index];
            modal.style.display = 'flex';
            modalImg.src = image.hdSrc;
            captionText.innerHTML = `<h2>${image.title}</h2><p>${image.description}</p>`;
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

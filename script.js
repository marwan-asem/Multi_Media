document.addEventListener('DOMContentLoaded', () => {
    // Audio Logic
    const audio = document.getElementById('bg-music');
    const audioBtn = document.getElementById('audio-control');
    let isPlaying = false;

    if (audioBtn && audio) {
        audioBtn.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                audioBtn.textContent = 'Play Music 🎵';
            } else {
                audio.play().catch(e => console.log("Audio play failed:", e));
                audioBtn.textContent = 'Pause Music ⏸️';
            }
            isPlaying = !isPlaying;
        });
    }

    // Modal Logic
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeModal = document.querySelector('.close-modal');
    const galleryCards = document.querySelectorAll('.card');

    if (modal) {
        galleryCards.forEach(card => {
            card.addEventListener('click', () => {
                const img = card.querySelector('img').src;
                const title = card.querySelector('h3').textContent;
                const desc = card.getAttribute('data-desc');

                modal.style.display = 'flex';
                modalImg.src = img;
                modalTitle.textContent = title;
                modalDesc.textContent = desc;
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

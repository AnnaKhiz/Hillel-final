export function callModalFeedback() {
    const callModal = document.getElementById('callModal');
    const closeModal = document.getElementById('closeModal');
    const modalWindow = document.getElementById('modal');

    callModal.addEventListener('click', (e) => {
        e.preventDefault();
        modalWindow.classList.toggle('show');
    })

    closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        modalWindow.classList.toggle('show');
    })
}





export function callModalFeedback() {
    $(document).ready(function () {
        $("#callModal").on('click', function (e) {
            $('#modal').toggleClass('show');
            console.log('show')
            e.preventDefault();
        });

        $("#closeModal").on('click', function (e) {
            $('#modal').toggleClass('show');
            e.preventDefault();
        });

    });
}




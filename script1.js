$(document).ready(function() {
    // Register movie on click
    $('.movie-register').click(function() {
        const movieTitle = $(this).data('movie');
        $('#movie').val(movieTitle);
        $('html, body').animate({
            scrollTop: $('#register').offset().top
        }, 500);
    });

    // Handle form submission
    $('#registration-form').submit(function(e) {
        e.preventDefault();
        
        const name = $('#name').val();
        const email = $('#email').val();
        const movie = $('#movie').val();

        if (name && email && movie) {
            $('#registration-message').show();
            $('#registered-movie').text(movie);
            $('#registration-form')[0].reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});

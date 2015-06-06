$(function() {
    $( '.social-modal-activator' ).click(function() {
        showModal();
    });
    $( '.social-modal .close-button' ).click(function() {
        hideModal();
    });
    $(document).keyup(function(e) {
        if (e.which == 27) {
            hideModal();
        }
    });

    $('.social-modal .share-facebook').click(function() {
        window.open('https://facebook.com/sharer/sharer.php?sdk=joey&u=' + window.location.href, '_blank');
    });
});

var showModal = function() {
    $( '.social-modal' ).animate({top: "0", opacity: "1"}, 200);
}

var hideModal = function() {
    $( '.social-modal' ).animate({top: "-100%", opacity: "0"}, 100);
}

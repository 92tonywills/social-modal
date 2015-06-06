$(function() {
    $( '.social-modal-activator' ).click(function() {
        $( '.social-modal' ).animate({top: "0", opacity: "1"}, 200);
    });
    $( '.social-modal .close-button' ).click(function() {
        $( '.social-modal' ).animate({top: "-100%", opacity: "0"}, 100);
    });
    $(document).keyup(function(e) {
        if (e.which == 27) {
            $( '.social-modal' ).animate({top: "-100%", opacity: "0"}, 100);
        }
    });
});

$(function() {
    $( '.social-modal' ).hide();
    $( '.social-modal-activator' ).click(function() {
        $( '.social-modal' ).show();
    });
    $( '.social-modal .close-button' ).click(function() {
        $( '.social-modal' ).hide();
    });
    $(document).keyup(function(e) {
        if (e.which == 27) {
            $( '.social-modal' ).hide();
        }
    });
});

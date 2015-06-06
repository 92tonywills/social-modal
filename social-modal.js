$(function() {
    $( '.social-modal' ).hide();
    $( '.social-modal-activator' ).click(function() {
        $( '.social-modal' ).show();
    });
    $( '.social-modal .close-button' ).click(function() {
        $( '.social-modal' ).hide();
    });
});

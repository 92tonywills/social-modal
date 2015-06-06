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
        var url = 'https://facebook.com/sharer/sharer.php?sdk=joey&u=' + window.location.href;
        var width = Math.min(600, window.screen.width * 0.8);
        var height = Math.min(400, window.screen.height * 0.5);
        var leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
        var topPosition = (window.screen.height / 2) - ((height / 2) + 50);
        window.open(url, "Window2", "status=no,height=" + height + ",width=" + width + ",resizable=yes,left="
            + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition
            + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
    });
});

var showModal = function() {
    $( '.social-modal' ).animate({top: "0", opacity: "1"}, 200);
}

var hideModal = function() {
    $( '.social-modal' ).animate({top: "-100%", opacity: "0"}, 100);
}

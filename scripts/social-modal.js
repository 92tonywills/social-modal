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
        popupWindow('https://facebook.com/sharer/sharer.php?u=' + window.location.href);
    });

    $('.social-modal .share-twitter').click(function() {
        var link = window.location.href;
        var via = "thinkbituk";
        var text = "Simple Social Sharer"
        var url = 'https://twitter.com/intent/tweet?text=' + text + '&url=' + link + '&via=' + via;
        popupWindow(url);
    });
});

var showModal = function() {
    $( '.social-modal' ).animate({top: "0", opacity: "1"}, 200);
}

var hideModal = function() {
    $( '.social-modal' ).animate({top: "-100%", opacity: "0"}, 100);
}

var popupWindow = function(url) {
    var width = Math.min(600, window.screen.width * 0.8);
    var height = Math.min(400, window.screen.height * 0.5);
    var leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    var topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    window.open(url, "Window2", "height=" + height + ",width=" + width + ",left="
        + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition);
}

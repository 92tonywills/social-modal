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
        popupWindow('https://facebook.com/sharer/sharer.php?u=' + currentURL());
    });

    $('.social-modal .share-twitter').click(function() {
        var link = currentURL();
        var via = "thinkbituk";
        var text = "Simple Social Sharer"
        var url = 'https://twitter.com/intent/tweet?text=' + text + '&url=' + link + '&via=' + via;
        popupWindow(url);
    });

    $('.social-modal .share-reddit').click(function() {
        window.open('https://www.reddit.com/submit?url=' + currentURL());
    });

    $('.social-modal .share-gplus').click(function() {
        var link = currentURL();
        popupWindow('https://plus.google.com/share?url=' + link);
    });

    $('.social-modal .share-pinterest').click(function() {
        var link = currentURL();
        var media = "nothing";
        var description = "nothing";
        popupWindow('https://www.pinterest.com/pin/create/button?url=' + link
            + '&media=' + media + '&description=' + description);
    });
});

var showModal = function() {
    $( '.social-modal' ).animate({top: "0", opacity: "1"}, 200);
}

var hideModal = function() {
    $( '.social-modal' ).animate({top: "-100%", opacity: "0"}, 100);
}

var currentURL = function() {
    return encodeURIComponent(window.location.href);
}

var popupWindow = function(url) {
    var width = Math.min(600, window.screen.width * 0.8);
    var height = Math.min(400, window.screen.height * 0.5);
    var leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    var topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    window.open(url, "Window2", "height=" + height + ",width=" + width + ",left="
        + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition);
}

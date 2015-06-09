(function($) {

    $.fn.socialModal = function(options) {
        opts = $.extend(true, {}, $.fn.socialModal.defaults, options);
        openButton = this;
        injectHTML();
        attachStyles();
        addOpenEvents();
        addCloseEvents();
    };

    $.fn.socialModal.defaults = {
        useIcons: true,
        url: window.location.href,
        closeButton: {
            text: "esc",
            iconClass: "icon-cross",
        },
        facebook: {
            enabled: true,
            text: "Share",
            iconClass: "icon-facebook",
        },
        twitter: {
            enabled: true,
            text: "Tweet",
            iconClass: "icon-twitter",
            tweetText: $( 'title' ).text(),
            via: false,
        },
        reddit: {
            enabled: true,
            text: "Upload",
            iconClass: "icon-reddit",
        },
        gplus: {
            enabled: true,
            text: "Post",
            iconClass: "icon-gplus",
        },
        pinterest: {
            enabled: true,
            text: "Pin",
            iconClass: "icon-pinterest",
            media: $( 'meta[name="image"]' ).attr('content'),
            description: $( 'meta[name="description"]' ).attr('content'),
        },
    };

    // Private variables

    var opts;
    var modal;
    var closeButton;
    var openButton; // may be a collection of elements that may not be buttons
    var buttonContainer;
    var facebookButton;
    var twitterButton;
    var redditButton;
    var gplusButton;
    var pinterestButton;

    // Private functions

    var injectHTML = function() {
        modal = $("<div />").addClass("socialModal").appendTo("body");
        addCloseButton();
        buttonContainer = $("<div />").addClass("button-container").appendTo(modal);
        !opts.facebook.enabled || addFacebookButton();
        !opts.twitter.enabled || addTwitterButton();
        !opts.reddit.enabled || addRedditButton();
        !opts.gplus.enabled || addGPlusButton();
        !opts.pinterest.enabled || addPinterestButton();
        !opts.useIcons || addIconClasses();
    };

    var addCloseButton = function() {
        closeButton = $("<button />").addClass("close-button").text(opts.closeButton.text).appendTo(modal);
    };

    var addFacebookButton = function() {
    facebookButton = $("<button />").addClass("share-facebook").text(opts.facebook.text)
        .click(facebookClickHandler).appendTo(buttonContainer);
    };

    var addTwitterButton = function() {
    twitterButton = $("<button />").addClass("share-twitter").text(opts.twitter.text)
        .click(twitterClickHandler).appendTo(buttonContainer);
    };

    var addRedditButton = function() {
    redditButton = $("<button />").addClass("share-reddit").text(opts.reddit.text)
        .click(redditClickHandler).appendTo(buttonContainer);
    };

    var addGPlusButton = function() {
    gplusButton = $("<button />").addClass("share-gplus").text(opts.gplus.text)
        .click(gplusClickHandler).appendTo(buttonContainer);
    };

    var addPinterestButton = function() {
    pinterestButton = $("<button />").addClass("share-pinterest").text(opts.pinterest.text)
        .click(pinterestClickHandler).appendTo(buttonContainer);
    };

    var addIconClasses = function() {
        closeButton.addClass(opts.closeButton.iconClass);
        if (facebookButton) { facebookButton.addClass(opts.facebook.iconClass); }
        if (twitterButton) { twitterButton.addClass(opts.twitter.iconClass); }
        if (redditButton) { redditButton.addClass(opts.reddit.iconClass); }
        if (gplusButton) { gplusButton.addClass(opts.gplus.iconClass); }
        if (pinterestButton) { pinterestButton.addClass(opts.pinterest.iconClass); }
    };

    var attachStyles = function() {
        modal.css( {
            "position": "fixed",
            "width": "100%",
            "height": "100%",
            "z-index": 9999,
            "top": "-100%",
            "opacity": 0,
        });
    };

    var addOpenEvents = function() {
        openButton.click(function() {
            showModal();
        });
    }

    var addCloseEvents = function() {
        closeButton.click(function() {
            hideModal();
        });

        $(document).keyup(function(e) {
            if (e.which == 27) {
                hideModal();
            }
        });
    }

    var facebookClickHandler = function() {
        var link = encodeURIComponent(opts.url);
        popupWindow('https://facebook.com/sharer/sharer.php?u=' + link);
    };

    var twitterClickHandler = function() {
        var link = encodeURIComponent(opts.url);
        var url = 'https://twitter.com/intent/tweet?url=' + link;
        if (opts.twitter.tweetText) { url += '&text=' + encodeURIComponent(opts.twitter.tweetText); }
        if (opts.twitter.via) { url += '&via=' + encodeURIComponent(opts.twitter.via); }
        popupWindow(url);
    };

    var redditClickHandler = function() {
        var link = encodeURIComponent(opts.url);
        window.open('https://www.reddit.com/submit?url=' + link);
    };

    var gplusClickHandler = function() {
        var link = encodeURIComponent(opts.url);
        popupWindow('https://plus.google.com/share?url=' + link);
    };

    var pinterestClickHandler = function() {
        var link = encodeURIComponent(opts.url);
        var url = 'https://www.pinterest.com/pin/create/button?url=' + link;
        if (opts.pinterest.media) { url += '&media=' + encodeURIComponent(opts.pinterest.media); }
        if (opts.pinterest.description) { url += '&description=' + encodeURIComponent(opts.pinterest.description); }
        popupWindow(url);
    };

    var showModal = function() {
        modal.animate({top: "0", opacity: "1"}, 200);
    };

    var hideModal = function() {
        modal.animate({top: "-100%", opacity: "0"}, 100);
    };

    var popupWindow = function(url) {
        var width = Math.min(600, window.screen.width * 0.8);
        var height = Math.min(400, window.screen.height * 0.5);
        var leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
        var topPosition = (window.screen.height / 2) - ((height / 2) + 50);
        window.open(url, "NewWindow", "height=" + height + ",width=" + width + ",left="
            + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition);
    };
})(jQuery);

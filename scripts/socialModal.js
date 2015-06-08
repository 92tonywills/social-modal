(function($) {

    $.fn.socialModal = function(options) {
        opts = $.extend({}, $.fn.socialModal.defaults, options);

        injectHTML();
        attachStyles();

        this.click(function() {
            showModal();
        });

        closeButton.click(function() {
            hideModal();
        });

        $(document).keyup(function(e) {
            if (e.which == 27) {
                hideModal();
            }
        });

        facebookButton.click(function() {
            popupWindow('https://facebook.com/sharer/sharer.php?u=' + currentURL());
        });

        twitterButton.click(function() {
            var link = currentURL();
            var via = "thinkbituk";
            var text = "Simple Social Sharer"
            var url = 'https://twitter.com/intent/tweet?text=' + text + '&url=' + link + '&via=' + via;
            popupWindow(url);
        });

        redditButton.click(function() {
            window.open('https://www.reddit.com/submit?url=' + currentURL());
        });

        gplusButton.click(function() {
            var link = currentURL();
            popupWindow('https://plus.google.com/share?url=' + link);
        });

        pinterestButton.click(function() {
            var link = currentURL();
            var media = "nothing";
            var description = "nothing";
            popupWindow('https://www.pinterest.com/pin/create/button?url=' + link
                + '&media=' + media + '&description=' + description);
        });
    };

    $.fn.socialModal.defaults = {
        "use-icons": true,
        "facebook": {
            "enabled": true,
            "icon-class": "icon-facebook",
        },
        "twitter": {
            "enabled": true,
            "icon-class": "icon-twitter",
        },
        "reddit": {
            "enabled": true,
            "icon-class": "icon-reddit",
        },
        "gplus": {
            "enabled": true,
            "icon-class": "icon-gplus",
        },
        "pinterest": {
            "enabled": true,
            "icon-class": "icon-pinterest",
        },
    };

    // Private variables

    var opts;
    var modal;
    var closeButton;
    var buttonContainer;
    var facebookButton;
    var twitterButton;
    var redditButton;
    var gplusButton;
    var pinterestButton;

    // Private functions

    var injectHTML = function() {
        modal = $("<div />").addClass("socialModal").appendTo("body");
        closeButton = $("<button />").addClass("close-button").addClass("icon-cross").text("esc").appendTo(modal);
        buttonContainer = $("<div />").addClass("button-container").appendTo(modal);

        if (opts.facebook.enabled) {
            facebookButton = $("<button />").addClass("share-button").addClass("share-facebook")
                .appendTo(buttonContainer);
            $("<span />").addClass("icon-facebook").text("Share").appendTo(facebookButton);
        }
        if (opts.twitter.enabled) {
            twitterButton = $("<button />").addClass("share-button").addClass("share-twitter")
                .appendTo(buttonContainer);
            $("<span />").addClass("icon-twitter").text("Share").appendTo(twitterButton);
        }
        if (opts.reddit.enabled) {
            redditButton = $("<button />").addClass("share-button").addClass("share-reddit")
                .appendTo(buttonContainer);
            $("<span />").addClass("icon-reddit").text("Share").appendTo(redditButton);
        }
        if (opts.gplus.enabled) {
            gplusButton = $("<button />").addClass("share-button").addClass("share-gplus")
                .appendTo(buttonContainer);
            $("<span />").addClass("icon-gplus").text("Share").appendTo(gplusButton);
        }
        if (opts.pinterest.enabled) {
            pinterestButton = $("<button />").addClass("share-button").addClass("share-pinterest")
                .appendTo(buttonContainer);
            $("<span />").addClass("icon-pinterest").text("Share").appendTo(pinterestButton);
        }
    };

    var addIconClasses = function() {

    };

    var attachStyles = function() {

    };

    var showModal = function() {
        modal.animate({top: "0", opacity: "1"}, 200);
    };

    var hideModal = function() {
        modal.animate({top: "-100%", opacity: "0"}, 100);
    };

    var currentURL = function() {
        return encodeURIComponent(window.location.href);
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

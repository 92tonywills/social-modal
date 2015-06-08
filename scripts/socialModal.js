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

        addShareFunctionality();
    };

    $.fn.socialModal.defaults = {
        useIcons: true,
        closeButton: {
            text: "esc",
            iconClass: "icon-cross",
        },
        facebook: {
            enabled: true,
            text: "Share",
            iconclass: "icon-facebook",
        },
        twitter: {
            enabled: true,
            text: "Tweet",
            iconclass: "icon-twitter",
        },
        reddit: {
            enabled: true,
            text: "Upload",
            iconclass: "icon-reddit",
        },
        gplus: {
            enabled: true,
            text: "Post",
            iconclass: "icon-gplus",
        },
        pinterest: {
            enabled: true,
            text: "Pin",
            iconclass: "icon-pinterest",
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
        buttonContainer = $("<div />").addClass("button-container").appendTo(modal);

        closeButton = $("<button />")
            .addClass("close-button")
            .text(opts.closeButton.text)
            .appendTo(modal);

        if (opts.facebook.enabled) {
            facebookButton = $("<button />")
                .addClass("share-facebook")
                .text(opts.facebook.text)
                .appendTo(buttonContainer);
        }
        if (opts.twitter.enabled) {
            twitterButton = $("<button />")
                .addClass("share-twitter")
                .text(opts.twitter.text)
                .appendTo(buttonContainer);
        }
        if (opts.reddit.enabled) {
            redditButton = $("<button />")
                .addClass("share-reddit")
                .text(opts.reddit.text)
                .appendTo(buttonContainer);
        }
        if (opts.gplus.enabled) {
            gplusButton = $("<button />")
                .addClass("share-gplus")
                .text(opts.gplus.text)
                .appendTo(buttonContainer);
        }
        if (opts.pinterest.enabled) {
            pinterestButton = $("<button />")
                .addClass("share-pinterest")
                .text(opts.pinterest.text)
                .appendTo(buttonContainer);
        }

        if (opts.useIcons) {
            addIconClasses();
        }
    };

    var addIconClasses = function() {
        closeButton.addClass(opts.closeButton.iconClass);
        facebookButton.addClass(opts.facebook.iconClass);
        twitterButton.addClass(opts.twitter.iconClass);
        redditButton.addClass(opts.reddit.iconClass);
        gplusButton.addClass(opts.gplus.iconClass);
        pinterestButton.addClass(opts.pinterest.iconClass);
    };

    var attachStyles = function() {

    };

    var addShareFunctionality = function() {
        !opts.facebook.enabled || facebookButton.click(function() {
            popupWindow('https://facebook.com/sharer/sharer.php?u=' + currentURL());
        });

        !opts.twitter.enabled || twitterButton.click(function() {
            var link = currentURL();
            var via = "thinkbituk";
            var text = "Simple Social Sharer"
            var url = 'https://twitter.com/intent/tweet?text=' + text + '&url=' + link + '&via=' + via;
            popupWindow(url);
        });

        !opts.reddit.enabled || redditButton.click(function() {
            window.open('https://www.reddit.com/submit?url=' + currentURL());
        });

        !opts.gplus.enabled || gplusButton.click(function() {
            var link = currentURL();
            popupWindow('https://plus.google.com/share?url=' + link);
        });

        !opts.pinterest.enabled || pinterestButton.click(function() {
            var link = currentURL();
            var media = "nothing";
            var description = "nothing";
            popupWindow('https://www.pinterest.com/pin/create/button?url=' + link
                + '&media=' + media + '&description=' + description);
        });
    }

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

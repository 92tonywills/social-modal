(function($) {

    $.fn.socialModal = function(options) {
        // get hold of options
        var opts = $.extend(true, {}, $.fn.socialModal.defaults, options);
        if (!opts.modal.showCss) { opts.modal.showCss = { "top": 0, "opacity": 1 } }
        if (!opts.modal.hideCss) { opts.modal.hideCss = { "top": "-100%", "opacity": 0 } }

        // Create Modal and Buttons
        var modal = $("<div />").addClass("socialModal").appendTo("body");
        var buttonContainer = $("<div />").addClass("button-container").appendTo(modal);

        var closeButton = $("<button />").addClass("close-button")
            .attr( { title: opts.closeButton.title } ).text(opts.closeButton.text).appendTo(modal);

        var facebookButton; var twitterButton; var redditButton; var gplusButton; var pinterestButton;
        if (opts.facebook.enabled) {
        facebookButton = $("<button />").addClass("share-facebook").text(opts.facebook.text)
            .attr( { title: opts.facebook.title } ).click(function() { facebookClickHandler(opts); })
            .appendTo(buttonContainer);
        }
        if (opts.twitter.enabled) {
        twitterButton = $("<button />").addClass("share-twitter").text(opts.twitter.text)
            .attr( { title: opts.twitter.title } ).click(function() { twitterClickHandler(opts); })
            .appendTo(buttonContainer);
        }
        if (opts.reddit.enabled) {
        redditButton = $("<button />").addClass("share-reddit").text(opts.reddit.text)
            .attr( { title: opts.reddit.title } ).click(function() { redditClickHandler(opts); })
            .appendTo(buttonContainer);
        }
        if (opts.gplus.enabled) {
        gplusButton = $("<button />").addClass("share-gplus").text(opts.gplus.text)
            .attr( { title: opts.gplus.title } ).click(function() { gplusClickHandler(opts); })
            .appendTo(buttonContainer);
        }
        if (opts.pinterest.enabled) {
        pinterestButton = $("<button />").addClass("share-pinterest").text(opts.pinterest.text)
            .attr( { title: opts.pinterest.title } ).click(function() { pinterestClickHandler(opts); })
            .appendTo(buttonContainer);
        }

        // add icons
        if (opts.useIcons) {
            closeButton.addClass(opts.closeButton.iconClass);
            if (facebookButton) { facebookButton.addClass(opts.facebook.iconClass); }
            if (twitterButton) { twitterButton.addClass(opts.twitter.iconClass); }
            if (redditButton) { redditButton.addClass(opts.reddit.iconClass); }
            if (gplusButton) { gplusButton.addClass(opts.gplus.iconClass); }
            if (pinterestButton) { pinterestButton.addClass(opts.pinterest.iconClass); }
        };

        // Hide modal to begin with
        modal.css( { "position": "fixed", "width": "100%", "height": "100%", "z-index": 9999 } );
        modal.css(opts.modal.hideCss);

        // Trigger open
        this.click(function() {
            modal.animate(opts.modal.showCss, opts.modal.showAnimationDuration);
        });

        // Trigger close
        closeButton.click(function() {
            modal.animate(opts.modal.hideCss, opts.modal.hideAnimationDuration);
        });

        $(document).keyup(function(e) {
            if (e.which == 27) {
                modal.animate(opts.modal.hideCss, opts.modal.hideAnimationDuration);
            }
        });
    };

    $.fn.socialModal.defaults = {
        useIcons: true,
        url: window.location.href,
        modal: {
            showCss: null, // defaults to { "top": 0, "opacity": 1 } if unset
            showAnimationDuration: 200,
            hideCss: null, // defaults to { "top": "-100%", "opacity": 0 } if unset
            hideAnimationDuration: 100,
        },
        closeButton: {
            text: "Close",
            title: "Close or Press 'esc'",
            iconClass: "icon-cross",
        },
        facebook: {
            enabled: true,
            text: "Share",
            title: "Share on Facebook",
            iconClass: "icon-facebook",
        },
        twitter: {
            enabled: true,
            text: "Tweet",
            title: "Tweet via Twitter",
            iconClass: "icon-twitter",
            tweetText: $( 'title' ).text(),
            via: false,
        },
        reddit: {
            enabled: true,
            text: "Upload",
            title: "Upload to Reddit",
            iconClass: "icon-reddit",
        },
        gplus: {
            enabled: true,
            text: "Post",
            title: "Post to Google+",
            iconClass: "icon-gplus",
        },
        pinterest: {
            enabled: true,
            text: "Pin",
            title: "Pin to Pinterest",
            iconClass: "icon-pinterest",
            media: $( 'meta[name="image"]' ).attr('content'),
            description: $( 'meta[name="description"]' ).attr('content'),
        },
    };

    // Click Handlers

    var facebookClickHandler = function(opts) {
        var link = encodeURIComponent(opts.url);
        popupWindow('https://facebook.com/sharer/sharer.php?u=' + link);
    };

    var twitterClickHandler = function(opts) {
        var link = encodeURIComponent(opts.url);
        var url = 'https://twitter.com/intent/tweet?url=' + link;
        if (opts.twitter.tweetText) { url += '&text=' + encodeURIComponent(opts.twitter.tweetText); }
        if (opts.twitter.via) { url += '&via=' + encodeURIComponent(opts.twitter.via); }
        popupWindow(url);
    };

    var redditClickHandler = function(opts) {
        var link = encodeURIComponent(opts.url);
        window.open('https://www.reddit.com/submit?url=' + link);
    };

    var gplusClickHandler = function(opts) {
        var link = encodeURIComponent(opts.url);
        popupWindow('https://plus.google.com/share?url=' + link);
    };

    var pinterestClickHandler = function(opts) {
        var link = encodeURIComponent(opts.url);
        var url = 'https://www.pinterest.com/pin/create/button?url=' + link;
        if (opts.pinterest.media) { url += '&media=' + encodeURIComponent(opts.pinterest.media); }
        if (opts.pinterest.description) { url += '&description=' + encodeURIComponent(opts.pinterest.description); }
        popupWindow(url);
    };

    // Helpers

    var popupWindow = function(url) {
        var width = Math.min(600, window.screen.width * 0.8);
        var height = Math.min(400, window.screen.height * 0.5);
        var leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
        var topPosition = (window.screen.height / 2) - ((height / 2) + 50);
        window.open(url, "NewWindow", "height=" + height + ",width=" + width + ",left="
            + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition);
    };
})(jQuery);

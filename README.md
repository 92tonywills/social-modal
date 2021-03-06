# Social Modal
A simple and easy to use jQuery plugin for showing social network sharing links in a customisable modal.
Made by [thinkbit](http://thinkbit.co.uk).

This is the master branch, features here are not guaranteed to work correctly, for the latest stable
working version, switch to the [release branch](https://github.com/thinkbituk/social-modal/tree/release).

## Features
- Displays share buttons in a full screen modal onClick of an element
    - Totally responsive
    - Minimal effect on screen real estate
- Uses simple share urls so no extra js or sdks
    - Opens post urls in a popup window or new tab, depending on OS and browser settings
- Currently supports:
    - Facebook
    - Twitter
        - Supports via, link and text options
    - Reddit
    - Google+
    - Pinterest  
        - Supports media and description options  
- Attempts to provide intelligent defaults for extra options to Twitter and Pinterest, Facebook and Google
will do this themselves from the meta data they define. Look up [Open Graph](http://ogp.me) for facebook
and [schema.org](http://schema.org) for google.

### Examples
You can view some example usages [here](http://thinkbituk.github.io/social-modal/), check out their source
for how to use the different parameters.

## Installation
To use this on your site just download the zip of this project and include the `socialModal.js` and
`socialModal.css` files in your document somewhere (in you head or at the bottom of the page, for instance).
The style file is not strictly necessary but the modal will be very ugly otherwise. You can edit this file
or override the styles later to suit your own needs.

### Requirements
The script requires jQuery, it does not provide it itself. You must include jQuery somewhere in your document
before the plugin.

#### Icons
Icons are turned on by default, but they are not provided by the script or the styles, you have to provide
them yourself. You are free to use the icons provided in the example, though. You can also use your own icons,
but you will need to change the icon classes (in the settings) if they differ in name from the defaults.

The icon font used in the example was created for free with [fontello](http://www.fontello.com).

## Usage
To use the plugin just call `.socialModal()` on the element you wish to trigger the activation of the
modal once jQuery and the plugin have loaded.

```html
<head>
    ... include jQuery somewhere
    <link href="/path/to/socialModal.css" />
    <script src="/path/to/socialModal.js"></script>
    <script>
    $(function() {
        $( '.socialModal-activator' ).socialModal();
    });
    </script>
</head>

<body>
    ...
    <button class="socialModal-activator">Share</button>
    ...
</body>

```

### Customisation
The plugin provides a range of settings that can be tuned as you wish. The current full options are:

```javascript
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
```
The default animation is to fade and move in from the top. To have your own animation, simply provide the css
for when the modal is hidden and the css for when it is shown. The modal will likely work if only supply one,
but it probably won't look goof if it does, you're best off providing both.

For examples of using the options, check out the [examples](http://thinkbituk.github.io/social-modal/).

You are also free to customise or override the styles provided in the `socialModal.css` file to suit
your needs. This will be necessary if you use your own icon fronts with different names as the styles are
applied statically from that file.

## Learn More
Learn how to make a similar effect for yourself in this
[blog post](http://blog.thinkbit.co.uk/a-simple-social-sharer-modal).

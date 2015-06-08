# Social Modal
A simple and easy to use jQuery plugin for showing social network sharing links in customisable modal.
Made by [thinkbit](http://thinkbit.co.uk).

## Features
- Displays share buttons in a full screen modal onClick of an element
    - Totally responsive
    - Minimal effect on screen real estate
- Uses simple share urls so no extra js or sdks
- Currently supports:
    - Facebook
    - Twitter
        - Supports via, link and text options
    - Reddit
    - Google+
    - Pinterest  
        - Supports media and description options  
- Attempts to provide intelligent defaults for extra options to Twitter and Pinterest, Facebook and Google
will do this themselves from the meta data they define.

### Examples
You can download the example from here and have a look or you can go to
[thinkbit's blog](http://blog.thinkbit .co.uk), the post pages utilize this plugin.

## Installation
To use this on your site just download the zip of this project and include the `socialModal.js` and
`socialModal.css` files in your head. The style file is not strictly necessary but it will look crap
otherwise. You can edit this file or override the styles later if need be.

### Requirements
The script requires jQuery, it does not provide it itself.

### Icons
Icons are turned on by default, but they are not provided by the script or the styles, you have to provide
them yourself. You are free to use the icons provided in the example, though. You can also use your own icons,
but you will need to change the icon classes (in the settings) if they differ in name from the defaults.

The icon font used in the example was created with [fontello](http://www.fontello.com).

## Usage
To use the plugin just call `.socialModal()` on the element you wish to trigger the activation of the
modal once jQuery and the plugin have loaded. Supports multiple trigger element, but it will not play nice
if the function is called more than once.

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

## Customisation
The plugin provides a range of settings that can be tuned as you wish. The current full options are:

```javascript
defaults = {
    useIcons: true,
    url: encodeURIComponent(window.location.href),
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
        media: false,
        description: $( 'meta[name="description"]' ).attr('content'),
    },
};
```

For example if you wanted to disable reddit, use your own close icon and provide a via for twitter you
would call the plugin like this:

```javascript
$( '.some-element' ).socialModal({
    closeButton: {
        iconsClass: "your-close-icon",
    },
    twitter: {
        via: "yourusername",
    },
    reddit: {
        enabled: false,
    },
});
```

This assumes you have define `.your-close-icon` somewhere in your css.

More options including customisable animations are coming in future release.

You are also free to customise or override the styles provided in the `socialModal.css` file to suit
your needs.

## Learn More
Learn how to make a similar effect for yourself [in this blog post](http://blog.thinkbit.co.uk/a-simple-social-sharer-modal).

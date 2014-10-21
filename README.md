# Goodnight

A super small Javascript plugin for applying special CSS styles at night: https://jaredcubilla.github.io/goodnight/

## Usage

Download the `goodnight.min.js` file. Include it in your HTML

```html
<script src="scripts/goodnight.min.js"></script>
```

`Goodnight.css(path)` adds a custom styles for you when it's nighttime.

You can add as many styles as you want, and the files will be added if it's nighttime.

```js
Goodnight.css('path/to/style.css');
Goodnight.css('path/to/another.css');
Goodnight.css('path/to/night.css');
```

You can also specify the hours of which the dark styles are used. By default, your dark CSS file is activated from 6PM to midnight and midnight to 6AM, but you can specify the exact hours using the `Goodnight.AM` and `Goodnight.PM` variables. You should set the hours before adding any styles.

```js
Goodnight.AM = 5 // (5AM)
Goodnight.PM = 20 // (8PM)
Goodnight.css('path/to/style.css') // this now activates dark styles before 5AM and after 8PM
```

If you want to provide easy way to revert back to light styles, you can call `Goodnight.toggle()`. For example you might create button for turning on and off these styles and call `Goodnight.toggle()` inside the event handler.

```js
Goodnight.css('path/to/style.css');

document.querySelector('#some-button').addEventListener('click', function () {
  Goodnight.toggle(); // This removes styles from document.head
}, false);
```

You can also append a specific class to the body at night. Simply use `Goodnight.class()` (`goodnight` is given if not specified).

```js
Goodnight.class('my-night-class');
```

## Tips

If you leave this script at the bottom of the `<body>`, there will be a flash of daytime styles during nighttime, due to the browser processing the document until the script. It's best if you include the script in the `<head>`.

If you use [Bower](http://bower.io/), it is available as a package there too. Run the following...

```
bower install goodnight
```

... and Goodnight should be installed as a bower package.

If you're too lazy to download it, you could always just do this:

```html
<script src= "https://jaredcubilla.github.io/goodnight/goodnight.min.js"></script>
```

## Contributing

If something's wrong or needs changing, feel free to leave issues at Github's issue tracker. If you're feeling generous, please send pull requests for fixing bugs or adding cool new stuff.

## License

Licensed under MIT. Created by [Jared Cubilla](https://github.com/JaredCubilla).

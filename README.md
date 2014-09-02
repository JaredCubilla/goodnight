# Goodnight

A super small Javascript plugin for applying special styles at night.

## Usage

First, download the `goodnight.min.js` file. Reference it in your HTML like so...

```
<script src= "scripts/goodnight.min.js"></script>
```

`Goodnight.css()` adds a custom styles for you when it's nighttime. Use it like so:

```
Goodnight.css();
```

This searches for a `dark.css` file in the same directory as the Goodnight script. You can specify your own file path like so:

```
Goodnight.css('path/to/style.css');
```

You can also specify the hours of which the dark styles are used. By default, your Dark CSS file is activated from 6PM to 6AM, but you can specify the exact hours using the `Goodnight.from` and `Goodnight.to` settings.

```
Goodnight.from = 20 // (8PM)
Goodnight.to = 5 // (5AM)
Goodnight.css('path/to/style.css') // this now activates dark styles before 5AM and after 8PM
```

## Tips

If you leave this script at the bottom of the `<body>`, there will be a flash of daytime styles during nighttime, due to the browser processing the document until the script. It's best if you include the script in the `<head>`.

If you use [Bower](http://bower.io/), it is available as a package there too. Run the following...

```
bower install goodnight
```

... and Goodnight should be installed as a bower package.

## License

Licensed under MIT. Created by [Jared Cubilla](https://github.com/JaredCubilla).

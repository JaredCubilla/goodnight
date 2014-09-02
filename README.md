# Goodnight

A super small Javascript plugin (292B) for applying styles and executing Javascript specifically when it's nighttime (> 6PM and < 6AM).

## Usage

First, download the `goodnight.min.js` file. Reference it in your HTML like so...

```
<script src= "scripts/goodnight.min.js"></script>
```

**Note:** If you leave this script at the bottom of the `<body>`, there will be a flash of daytime styles during nighttime, due to the browser processing the document until the script. It's best if you include this in the `<head>`.

`Goodnight.css()` adds a custom styles for you when it's nighttime. Use it like so:

```
Goodnight.css();
```

This searches for a `dark.css` file, and if not found, looks for a `styles/dark.css`. You can specify your own file path like so:

```
Goodnight.css('path/to/style.css');
```

## License

Licensed under MIT. Created by [Jared Cubilla](https://github.com/JaredCubilla).

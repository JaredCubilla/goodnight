# Ipsum Everything

The ultimate jQuery plugin for all things ipsum.

## Usage

Ipsum Everything is an awesome plugin developed for choosing and using the perfect placeholder text for your next project(s).

To use it, plop a copy of the minified script into your HTML...

```
<script src= "vendor/ipsum-everything.min.js"></script>
```

You can start using it like so...

```
$("#demo").ipsum();
```

## Options

Ipsum Everything currently supports [Hipster Ipsum](http://hipsum.co/), [Bacon Ipsum](http://baconipsum.com/), [Skate Ipsum](http://skateipsum.com/), [Baseball Ipsum](http://baseballipsum.apphb.com/), [Pony Ipsum](http://ponyipsum.com/) and [Science Ipsum](http://scienceipsum.com/).

Some ipsums also have sub-options. Hipster Ipsum has a "hipster-centric" option, Bacon Ipsum has a "bacon-all-meat" option, and Pony Ipsum has a "all-pony" option.

You can also specify the number of paragraphs used. Note that an excessive amount of generated paragraphs will probably slow your site down.

To use these options, use them like any other jQuery plugin...

```
$("#demo").ipsum({
    paras: 2,
    type: "skate"
})
```

The above example would generate 2 paragraphs using Skate Ipsum.

Here's another example, which generates 5 paragraphs of all-meat Bacon Ipsum.

```
$("#demo").ipsum({
    paras: 5,
    type: "bacon-all-meat"
})
```

The following is a list of all possible values in the `type` option:

* hipster-latin (Hipster Ipsum)
* hipster-centric (Hipster Ipsum)
* bacon (Bacon Ipsum)
* bacon-all-meat (Bacon Ipsum)
* skate (Skate Ipsum)
* baseball (Baseball Ipsum)
* pony (Pony Ipsum)
* all-pony (Pony Ipsum)
* science (Science Ipsum)

## Contributing

Feel free to send suggestions, bug reports, etc. via the built in Github Issue Tracker. If you're feeling generous go ahead and send me a pull request for bug fixes, other ipsums, and other stuff.

## License

Licensed under MIT.

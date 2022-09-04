# Relativenumber

[![Version](https://img.shields.io/npm/v/reveal.js-relativenumber)](#) [![Downloads](https://img.shields.io/npm/dt/reveal.js-relativenumber)](https://github.com/Martinomagnifico/reveal.js-relativenumber/archive/refs/heads/master.zip)

A simple plugin for [Reveal.js](https://revealjs.com) 4, that moves the slidenumber to a desired (relative) location. 

[![Screenshot](https://martinomagnifico.github.io/reveal.js-relativenumber/screenshot.png)](https://martinomagnifico.github.io/reveal.js-relativenumber/demo.html)

Reveal.js creates a 'slide-number' element in the presentation if it is turned on in the configuration. This element is positioned absolutely as a sibling to the slides. But sometimes you want it inside a menubar or some other element. This plugin does just that.

Here's a [demo](https://martinomagnifico.github.io/reveal.js-relativenumber/demo.html) of a project that uses the RelativeNumber.js plugin.

RelativeNumber.js only does one thing: It checks of there already is an element with the class 'slide-number' in the presentation before continuing. If there is, the regular Reveal.js slide-number element will replace it. That's all there is to it.



## Installation

Copy the relativenumber folder to the plugins folder of the reveal.js folder, like this: `plugin/relativenumber`.


### npm installation

This plugin is published to, and can be installed from, npm.

```console
npm install reveal.js-relativenumber
```
The RelativeNumber plugin folder can then be referenced from `node_modules/reveal.js-relativenumber/plugin/relativenumber `



## Setup

### JavaScript

The RelativeNumber plugin has been rewritten for Reveal.js version 4.

If you want to use RelativeNumber with an older version of Reveal, use the [1.0.0 version](https://github.com/Martinomagnifico/reveal.js-relativenumber/releases).

There are two JavaScript files for RelativeNumber, a regular one, `relativenumber.js`, and a module one, `relativenumber.esm.js`. You only need one of them:


#### Regular 
If you're not using ES modules, for example, to be able to run your presentation from the filesystem, you can add it like this:

```html
<script type="text/javascript" src="dist/reveal.js"></script>
<script src="plugin/relativenumber/relativenumber.js"></script>
<script>
	Reveal.initialize({
		// ...
		plugins: [ RelativeNumber ]
	});
</script>
```

#### As a module 
If you're using ES modules, you can add it like this:

```html
<script type="module">
	// This will need a server
	import Reveal from './dist/reveal.esm.js';
	import RelativeNumber from './plugin/relativenumber/relativenumber.esm.js';
	Reveal.initialize({
		// ...
		plugins: [ RelativeNumber ]
	});
</script>
```


### HTML

Create an empty div with the class 'slide-number' at the desired location. That's it.

```html
<div class="reveal">
  <div class="menubar">
    <div class="slide-number"></div>
    <ul class="menu">
      <li><a href="#">Menuitem 1</a></li>
      <li><a href="#">Menuitem 2</a></li>
    </ul>
    <div class="placeholder"></div>
  </div>
 
  <div class="slides">
    ...
  </div>
</div>
```

In this example I put it in a menubar. Note that I added a 'placeholder' element as well. This is to keep the main menu centered and the slidenumbers to the left. It is not necessary.


## Like it?

If you like it, please star this repo! 

And if you want to show off what you made with it, please do :-)



## License
MIT licensed

Copyright (C) 2020 Martijn De Jongh (Martino)

# reveal.js-relativenumber
A simple plugin for [Reveal.js](https://revealjs.com) that moves the slidenumber to a desired location. 

Reveal.js creates a 'slide-number' element in the presentation if it is turned on in the configuration. This element is positioned absolutely as a sibling to the slides. But sometimes you want it inside a menubar or some other element. This plugin does just that.

Here's a [demo](https://martinomagnifico.github.io/reveal.js-relativenumber/demo.html) of a project that uses the RelativeNumber.js plugin.

RelativeNumber.js only does one thing: It checks of there already is an element with the class 'slide-number' in the presentation before continuing. If there is, the regular Reveal.js slide-number element will replace it. That's all there is to it.



## Installation

Copy the relativenumber folder to the plugins folder of the reveal.js folder, like this: `plugin/relativenumber`. Now add it to the dependencies of Reveal.js. :


```javascript
Reveal.initialize({
	// ...
	dependencies: [
		// ... 
		{ src: 'assets/js/revealjs/plugin/relativenumber/relativenumber.js', async: true },
		// ... 
	]
});
```


## Setup

Create an empty div with the class 'slide-number' at the desired location. That's it. In this example I put it in a menubar.

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

Note that I added a 'placeholder' element as well. This is to keep the main menu centered and the slidenumbers to the left. It is not necessary.


## Like it?

If you like it, please star this repo.




## License
MIT licensed

Copyright (C) 2019 Martijn De Jongh (Martino)

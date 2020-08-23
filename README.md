# Welcome to my portfolio website repo

> I hope this repo is useful and you like what you see.

## Technologies used

I've decided since it's a static website nothing more, why not get back to the basics.

So I used the following:

### Main ones

1- Good old _vanilla_ **HTML**

2- **CSS**

3- and of course a little bit of our only friend **Javascript**.

### Secondary ones

To make this simple website load reasonably fast, I took the following steps using the awesome **postCSS** tool.

1- **Minified** _css_ files, using [cssnano](https://cssnano.co/) postcss plugin.

2- **Combined** css files in a single file, to reduce the http requests, using [postcss-import](https://github.com/postcss/postcss-import) plugin.

3- **Compressed** all the pngs and jpgs to a reasonable quality.

4- Used images in **webp** format, which is not supported on all browsers, but Safari and Firefox are getting there.

## Takeaways

- Using **gap with flexbox** is not fully supported by all major browsers (I'm looking at you safari and firefox on ios.) which wasn't nice at all because you'll have to replace it with margins and couple of lines of css.

- The same support issue I mentioned above about **webp** format. <br>
  I got around it by using `<picture>` element with `<source>` that has a `srcset` attribute of _webp_ version of the image and an `<img>` element with _jpg_ format as a fallback.

  Example:

  ```HTML
  <picture>
   <source
   srcset="./images/2228176.webp 320w" type="image/webp" />

    <img src="./images/2228176.jpg" alt="mobile app concept" class="project__img" loading="lazy"/>
  </picture>
  ```

- Firefox and Chrome have different implementation of image **native lazy loading**. Chrome is more sensitive than firefox; I mean smaller threshold for the off-screen images which make it load the images earlier. <br>
  Please check [this link](https://web.dev/native-lazy-loading/) for more details on chromium implementation.

> I really had fun coding this project and I learnt a lot.

## Credits

Huge thank you to this amazing community <br>
![thank you](https://media1.giphy.com/media/3otPoOxyDTXjzpMbIY/giphy.gif)

- [Unsplash](unsplash.com)
- [freepik.com](freepik.com)
- All the amazing developers and **OSS** maintainers.

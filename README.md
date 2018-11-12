<<<<<<< HEAD
# vue-with-semantics
Playground and testing out vue with microformats and maybe some other semantic formats

For more than two years, I am observing the Indie Web Community and it use of semantic data within webmentions. Several times my wordpress theme and my limited wordpress skills caused problems parsing my website data. I already thought about to solve this issue very easily with templates or VueJS Renderless Components, but in the end this twitter conversation kicked my ass. Time will show if this works out or not...
* https://twitter.com/de_henne/status/1055702577201975296

However, now I try to add semantic data via Renderless VueJS Component approach to my HTML. I don't know it this will work out. Code is highly experimental! Don't use it! Only for discussions!

## References:

My learning references for coding this experiment

_General_
* https://cli.vuejs.org/guide/prototyping.html
* https://vuejs.org/v2/guide/render-function.html#slots-vs-children
* https://bentaylor2.github.io/react-structured-data/ -> Great example for JSON-LD
* http://bradfrost.com/blog/link/content-and-display-patterns/
* http://v3.danielmall.com/articles/content-display-patterns/

_Parsing and other semantic data topics_
* https://www.ironpaper.com/webintel/articles/what-is-microdata-for-seo/
* https://de.slideshare.net/bhaslhofer/skos-rdfa-microformats-microdata
* https://developers.google.com/search/docs/guides/intro-structured-data
* https://developers.google.com/search/docs/guides/mark-up-content
* https://t3n.de/news/rich-snippets-anleitung-534054/
* http://microformats.org/wiki/microformats2-parsing#parsing_a_p-_property
* https://waterpigs.co.uk/php-mf2/ (Validating microformats)
* http://microformats.org/wiki/h-geo (my starting point)
* https://schema.org/GeoCoordinates (my starting point)
* https://developers.google.com/search/docs/data-types/book
* https://search.google.com/structured-data/testing-tool (Testing Validation tool)
* https://metatags.io/
* https://www.amazon.de/dp/1520553463/ Metadata Basics for the Web

_Renderless Componentes tutorials (Great for Content Distribution within a component)_
* https://css-tricks.com/using-scoped-slots-in-vue-js-to-abstract-functionality/
* https://css-tricks.com/building-renderless-vue-components/
* https://baianat.github.io/vee-validate/guide/components/validation-provider.html#scoped-slot-data
* https://adamwathan.me/renderless-components-in-vuejs/
* https://www.codementor.io/thomas478/building-a-list-keyboard-control-component-with-vue-js-and-scoped-slots-l113pk2ny
* https://www.contentful.com/blog/2018/01/23/how-to-write-reusable-sane-api-based-components/

_Manipulating Low Level DOM Elments (usually directives are perfect for this, but limited in Server Side Rendered)_
* https://vuejs.org/v2/guide/custom-directive.html
* https://css-tricks.com/power-custom-directives-vue/
* https://alligator.io/vuejs/custom-directives/
* https://baianat.github.io/vee-validate/api/directive.html
* https://blog.logrocket.com/advanced-vue-js-concepts-mixins-custom-directives-filters-transitions-and-state-management-ca6955905156
* https://ssr.vuejs.org/api/#directives

_Manipulating CSS_
* https://www.sitepoint.com/conditionally-applying-css-class-vue-js/
* https://vuejs.org/v2/guide/class-and-style.html

_Maybe some important Helper and Workarounds_
* https://baianat.github.io/vee-validate/api/data-attrs.html (Validation with data-* Attributes)
* https://github.com/y-nk/vue-fragment
* https://github.com/Botre/vue-hljs-lite/blob/master/src/vue-hljs-lite.js
* https://vuetifyjs.com/en/components/cards#example-horizontal  Working with Vue UI Libs
* https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/rebuildFunctionalSlots.js
* https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VChip/VChip.ts
* https://vuetifyjs.com/en/directives/ripples
* https://ssr.vuejs.org/api/#directives
* https://github.com/vuejs/vue/blob/dev/src/platforms/web/server/directives/show.js
=======
# vue-with-semantics

Playground and testing out vue with microformats and maybe some other semantic formats

For more than two years, I am observing the Indie Web Community and it use of semantic data within webmentions. Several times my wordpress theme and my limited wordpress skills caused problems parsing my website data. I already thought about to solve this issue very easily with templates or VueJS Renderless Components, but in the end this twitter conversation kicked my ass. Time will show if this works out or not...

- https://twitter.com/de_henne/status/1055702577201975296

However, now I try to add semantic data via Renderless VueJS Component approach to my HTML. I don't know it this will work out. Code is highly experimental! Don't use it! Only for discussions!

## References:

My learning references for coding this experiment

_General_

- https://cli.vuejs.org/guide/prototyping.html
- https://vuejs.org/v2/guide/render-function.html#slots-vs-children
- https://bentaylor2.github.io/react-structured-data/ -> Great example for JSON-LD
- http://bradfrost.com/blog/link/content-and-display-patterns/
- http://v3.danielmall.com/articles/content-display-patterns/

_Parsing and other semantic data topics_

- https://www.ironpaper.com/webintel/articles/what-is-microdata-for-seo/
- https://de.slideshare.net/bhaslhofer/skos-rdfa-microformats-microdata
- https://developers.google.com/search/docs/guides/intro-structured-data
- https://developers.google.com/search/docs/guides/mark-up-content
- https://t3n.de/news/rich-snippets-anleitung-534054/
- http://microformats.org/wiki/microformats2-parsing#parsing_a_p-_property
- https://waterpigs.co.uk/php-mf2/ (Validating microformats)
- http://microformats.org/wiki/h-geo (my starting point)
- https://schema.org/GeoCoordinates (my starting point)
- https://developers.google.com/search/docs/data-types/book
- https://search.google.com/structured-data/testing-tool (Testing Validation tool)
- https://metatags.io/
- https://www.amazon.de/dp/1520553463/ Metadata Basics for the Web

_Renderless Componentes tutorials (Great for Content Distribution within a component)_

- https://css-tricks.com/using-scoped-slots-in-vue-js-to-abstract-functionality/
- https://css-tricks.com/building-renderless-vue-components/
- https://baianat.github.io/vee-validate/guide/components/validation-provider.html#scoped-slot-data
- https://adamwathan.me/renderless-components-in-vuejs/
- https://www.codementor.io/thomas478/building-a-list-keyboard-control-component-with-vue-js-and-scoped-slots-l113pk2ny
- https://www.contentful.com/blog/2018/01/23/how-to-write-reusable-sane-api-based-components/

_Manipulating Low Level DOM Elments (usually directives are perfect for this, but limited in Server Side Rendered)_

- https://vuejs.org/v2/guide/custom-directive.html
- https://css-tricks.com/power-custom-directives-vue/
- https://alligator.io/vuejs/custom-directives/
- https://baianat.github.io/vee-validate/api/directive.html
- https://blog.logrocket.com/advanced-vue-js-concepts-mixins-custom-directives-filters-transitions-and-state-management-ca6955905156
- https://ssr.vuejs.org/api/#directives

_Manipulating CSS_

- https://www.sitepoint.com/conditionally-applying-css-class-vue-js/
- https://vuejs.org/v2/guide/class-and-style.html

_Maybe some important Helper and Workarounds_

- https://baianat.github.io/vee-validate/api/data-attrs.html (Validation with data-\* Attributes)
- https://github.com/y-nk/vue-fragment
- https://github.com/Botre/vue-hljs-lite/blob/master/src/vue-hljs-lite.js
- https://vuetifyjs.com/en/components/cards#example-horizontal Working with Vue UI Libs
- https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/rebuildFunctionalSlots.js
- https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VChip/VChip.ts
- https://vuetifyjs.com/en/directives/ripples
- https://ssr.vuejs.org/api/#directives
- https://github.com/vuejs/vue/blob/dev/src/platforms/web/server/directives/show.js
>>>>>>> development

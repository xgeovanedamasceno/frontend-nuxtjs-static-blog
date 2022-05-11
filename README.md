# Notes

- https://eslint.vuejs.org/rules/require-v-for-key.html
- https://stackoverflow.com/questions/53300006/dynamic-meta-for-nuxt-js

### Google Analytics

- https://www.rootandbranchgroup.com/google-analytics-4-vs-universal-analytics/

Google Analytics 4 is now the official recommended property type of Google Analytics.
Google Universal Analytics property will be deprecated i July 2023.
GA4 can track both App and Web visits in a single property. GA4 allows measure data across plataforms and devices using multiple forms of identity.

#### What is a Google Analytics Property?

- "A property is where your company's online data goes to get processed by Google Analytics."

#### How does Google Analytics 4 measure users?

- Google UA (Universal Analytics) gets data from cookie-based tracking and the measurement
  approach is a _session-based data model_. - That means that UA groups data into sessions, and these sessions are the foundation of all reporting. - What is a session? - A session is a group of user interactions. - During a session, UA collects and stores user interactions, such as pageviews,
  events and eCommerce transactions. - A single section can contain multiple hits.
- GA4 will still use cookies but instead of tracking sessions, GA4 has an _event-based-model._
  - In GA4 properties, althoug is possible to see session data, Analytics collects and stores user interactions with your website or app as _events_.
  - Events provides insight on what's happening, such as pageviews, button clicks, user actions, or system events.
  - Events can collect and send pieces of information that more fully specify the action the user took or add further context to the event or user.
  - Informations like:
    - the value of purchase
    - the title of the page a user visited
    - the geographic location of the user
  - **Everything in GA4 is an Event**

from: https://www.rootandbranchgroup.com/google-analytics-4-vs-universal-analytics/

# frontend-nuxtjs-static-blog

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

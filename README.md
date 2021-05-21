
# Julian
I will try to keep it simple and to the point. Deep investigation you will have to do yourself.

## Project structure

### Overview

* `public/` (Contains public assets like `favicon.ico`. Not very important for a headless frontend architecture).
* `src/`
	* `components/` (Contains your React component implementations. Most source code will go here)
	* `pages/` (Contains React components that reflect your application routing structure, and which can also be SSR'd)
* `next.config.js` (Contains NextJs configuration, which can mostly be left ignored).

### Routing

NextJS uses the `pages/` directory structure in order to route to individual pages.

For example, given the following `pages/` directory structure:
* `pages/`
	* `index.tsx`
	* `foo.tsx`
	* `bar/`
		* `index.tsx`
		* `baz.tsx`

The following routes will be made available:
* `/` (The homepage, mapped to `pages/index.tsx`) (`index.tsx` is used as a directory "default")
* `/foo` (mapped to `pages/foo.tsx`)
* `/bar` (mapped to `pages/bar/index.tsx` (Again, using `bar/index.tsx` as a "default")
* `/bar/baz` (mapped to `pages/bar/baz.tsx`)

There's much more to it. But the concept of creating a directory structure that represents your application routing makes it easy for simple frontend projects.

### Components

(React) Components are developed in the `components/` directory. This is not a NextJS requirement, but seems to be a standard project structure approach for React projects in general. This directory will contain the bulk of your React app implementations.

In other words, implement your React components in this directory, and have them be "bootstrapped" by components imports in the `pages/` folder.

For example, `pages/index.tsx` simply imports `components/Home/HomePage.tsx` in order to render the home page.

### Styles

This boilerplate project expects you to use the concept of CSS modules in order to "independently" style your React components. In other words, each React component should get its own dedicated and isolated stylesheet.  More info [here](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css).

Basically this means that each (styled) React component imports their own dedicated stylesheet, which is done by using the `module` infix when importing them: `import styles from './HomePage.module.scss';`.

You can then use the imported `styles` record to style your component according to the stylesheet.
```tsx
import styles from './HomePage.module.scss';
//...
return <main  
  className={styles['home-page']}  
>  
    <h1>Hello from HomePage</h1>  
</main>
```


_Sidenote: Install [the CSS module plugin for PHPStorm](https://plugins.jetbrains.com/plugin/9275-react-css-modules) for better support._

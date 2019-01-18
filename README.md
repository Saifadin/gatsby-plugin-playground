# gatsby-plugin-playground

Adds the [Prisma playground](https://github.com/prisma/graphql-playground) to your gatsby dev server. This is running in parallel to GraphiQl.

What you will get is the Playground on the route `/___playground`, which you can use to query your data and test them out.

It will look like this

![Example Image](https://user-images.githubusercontent.com/1507057/51409977-9494c200-1b63-11e9-8150-5ee43cb6cf1a.png)

## Install

```
npm install --save gatsby-plugin-playground

// or using yarn

yarn add gatsby-plugin-playground
```

## How to use

Just add the plugin to the plugins array in your `gatsby-config.js`

```
plugins: [`gatsby-plugin-playground`]
```

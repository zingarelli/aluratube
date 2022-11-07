# AluraTube | Alura's 5th React Immersion 
An Youtube-like app to display video playlists and favorite AluraTube channels.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | AluraTube
| :label: Tecnologias | React
| :rocket: URL         | https://aluratube-three-pied.vercel.app
| :fire: Desafio     | https://www.alura.com.br/imersao-react

![](https://user-images.githubusercontent.com/19349339/200430497-06792a96-244a-4324-8055-a4445aa3889e.png#vitrinedev)

## Project Details
Work in progress...

# Install and config
You need Node (v16.15.1) and NPM (8.11.0) installed in your machine.

```
npm -v
node -v
```

Create a folder for your project and install Next (a react framework), React and React-DOM (react libraries):

`npm install next react react-dom`

Open package.json and remove `^` from each entry, this way ensuring that, when someone install your project, it will be downloaded the exact versions of Next, React and React-DOM (and not higher versions, which are indicated when you add the `^` before the version number). To ensure compatibility, use the following versions of each technology:

```
"next": "12.3.1",
"react": "18.2.0",
"react-dom": "18.2.0"
```

Add `scripts` to create shortcuts (`npm scripts`) to run the project in different environments:

```
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next link"
}
```

In order to run the project, you open a terminal and use `npm run [dev|build|start|lint]`; example: `npm run dev`.

`config.json` is a JSON file in which we add our custom configuration that will be used in the project. You can name it any way you like.

In order to add CSS to our components, we'll use the `styled components` library.

First, install it:

`npm install styled-components`

Then, create `next.config.js` file with the following content to compile Styled Components to CSS:

```js
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig
```

In order to create a repo for this project, you can run the follwing command to generate a custom .gitignore file for node projects

`npx gitignore node`

# Challenges Day 1

✅ Create "Banner" component;

✅ Create "AluraTube Favoritos" component;

✅ Add README.
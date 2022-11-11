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
Work in progress... For now, I'm just adding thoughts and concepts learned in the video tutorials.

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

# Day 2

When you create an `index.js` file in a folder, this will be the default file to be used when importing a component from that folder.

In the image below, there is an `index.js` file inside `/Menu` directory. There's another `index.js` inside `/pages` directory, which is the home page of the application. When importing the Menu component to the home page (`import Menu from '../src/components/Menu';`), you don't need to add `index.js` in the path - it will be implicit that this is the file to import the component from.

![part of the file structure of AluraTube](https://user-images.githubusercontent.com/19349339/200562790-3bcf2d05-5c39-4876-afcf-b41984c06fb0.png)

So, you can create an `index.js` file for every component, which will represent such component.

# Day 3

Create Providers to define global behaviors of the application.

_app.js: NextJS file for global definitions (configurations) of the application

Styled Components: <ThemeProvider /> to work with different global themes to your app. When used in the _app.js, it provides a `theme` property that can be used to instantiate values to your styled components.

# Day 4

Custom Hooks: create a function in which you can define behaviors that will be aplied when a component use "properties" of this custom hook

# Day 5

Use Supabase as backend and database, to store and get data regarding the videos

Create videoService.js that will handle requests to the backend. Data returned from this service should be handled by the component that called it.

TODO: integrate Vercel and Supabase. Hide supabase API key in Vercel environment and change supabase connection in the code. For now, I've changed the key to avoid others from using the database.
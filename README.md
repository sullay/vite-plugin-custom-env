<h1 align="center">vite-plugin-env</h1>
<div align="center">
  <a href="https://www.npmjs.com/package/vite-plugin-custom-env">
    <img src="https://img.shields.io/bundlephobia/minzip/vite-plugin-custom-env" alt="Size" />
  </a>
  <a href="https://www.npmjs.com/package/vite-plugin-custom-env">
    <img src="https://img.shields.io/npm/v/vite-plugin-custom-env" alt="Version" />
  </a>
  <a href="https://www.npmjs.com/package/vite-plugin-custom-env">
    <img src="https://img.shields.io/github/languages/top/sullay/vite-plugin-custom-env" alt="Languages" />
  </a>
  <a href="https://www.npmjs.com/package/vite-plugin-custom-env">
    <img src="https://img.shields.io/npm/l/vite-plugin-custom-env" alt="License" />
  </a>
  <a href="https://github.com/sullay/vite-plugin-custom-env/stargazers">
    <img src="https://img.shields.io/github/stars/sullay/vite-plugin-custom-env" alt="Star" />
  </a>
  <a href="https://www.npmjs.com/package/vite-plugin-custom-env">
    <img src="https://img.shields.io/npm/dm/vite-plugin-custom-env" alt="Download" />
  </a>
</div>


`vite-plugin-env` is a Vite plugin designed to simplify the integration and management of environment variables in your Vite projects. It allows you to define and access environment variables efficiently, supporting both arrays and object maps for flexible configuration.

## Features

- Seamless integration of environment variables into Vite projects.
- Supports both arrays and object maps for defining environment variables.
- Easy to configure and use.

## Installation

To install the plugin, you can use npm or yarn:

```bash
npm install vite-plugin-custom-env -D
# or
yarn add vite-plugin-custom-env -D
# or
pnpm add vite-plugin-custom-env -D

```

## Usage
First, import the plugin in your Vite configuration file:

``` js
import { VitePluginEnv } from 'vite-plugin-custom-env';
```

Then, you can use it in your Vite configuration:

``` js
// vite.config.js
import { defineConfig } from 'vite';
import { VitePluginEnv } from 'vite-plugin-custom-env';

export default defineConfig({
  plugins: [VitePluginEnv(/* options here */)]
});
```

Options
VitePluginEnv accepts either an array of strings (keys of environment variables), an object map, or undefined. If undefined, all process environment variables will be included.

``` js
VitePluginEnv(['VITE_API_ENDPOINT', 'VITE_APP_TITLE'])
```
Using Object Map

``` js
VitePluginEnv({
  'VITE_API_ENDPOINT': 'https://api.example.com',
  'VITE_APP_TITLE': 'My Vite App'
})
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.
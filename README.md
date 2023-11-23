# vite-plugin-env

`vite-plugin-env` is a Vite plugin designed to simplify the integration and management of environment variables in your Vite projects. It allows you to define and access environment variables efficiently, supporting both arrays and object maps for flexible configuration.

## Features

- Seamless integration of environment variables into Vite projects.
- Supports both arrays and object maps for defining environment variables.
- Easy to configure and use.

## Installation

To install the plugin, you can use npm or yarn:

```bash
npm install vite-plugin-env -D
# or
yarn add vite-plugin-env -D
# or
pnpm add vite-plugin-env -D

```

## Usage
First, import the plugin in your Vite configuration file:

``` js
import { VitePluginEnv } from 'vite-plugin-env';
```

Then, you can use it in your Vite configuration:

``` js
// vite.config.js
import { defineConfig } from 'vite';
import { VitePluginEnv } from 'vite-plugin-env';

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
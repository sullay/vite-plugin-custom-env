import type { Plugin } from 'vite'

type EnvList = string[]
type EnvMap = Record<string, any>

export function VitePluginEnv (envs: EnvList | EnvMap | undefined): Plugin {
    return {
        name: 'vite-plugin-env',
        enforce: 'pre',
        config () {
            const define: Record<string, any> = {}
            if (!envs) {
                Object.entries(process.env).forEach(([key, val]) => {
                    define[`import.meta.env.${key}`] = JSON.stringify(val)
                })
            } else if (Array.isArray(envs)) {
                envs.forEach(key => {
                    if (typeof key !== 'string') throw new Error(`${key} is not string.`)
                    define[`import.meta.env.${key}`] = JSON.stringify(process.env[key])
                })
            } else {
                Object.entries(envs).forEach(([key, val]) => {
                    define[`import.meta.env.${key}`] = JSON.stringify(val)
                })
            }
            return { define }
        }
    }
}

import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig, loadEnv, ConfigEnv } from "vite";
import viteCompression from "vite-plugin-compression";
import AutoImport from "unplugin-auto-import/vite";

const pathResolve = (dir: string) => {
  return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
  "/@": pathResolve("./src/"),
};

const viteConfig = defineConfig((mode: ConfigEnv) => {
  const env = loadEnv(mode.mode, process.cwd());
  return {
    plugins: [
      vue(),
      viteCompression(),
      AutoImport({
        imports: ["vue"],
        dts: "src/auto-import.d.ts",
      }),
    ],
    root: process.cwd(),
    resolve: { alias },
    base: mode.command === "serve" ? "./" : env.VITE_PUBLIC_PATH,
    optimizeDeps: { exclude: ["vue-demi"] },
    server: {
      host: "127.0.0.1",
      port: env.VITE_PORT as unknown as number,
      open: JSON.parse(env.VITE_OPEN),
      hmr: true,
      proxy: {
        "/api": {
          target: "http://127.0.0.1:8230", //本地
          ws: true,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, "/api"),
        },
      },
    },
    build: {
      outDir: "dist",
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return (
                id
                  .toString()
                  .match(/\/node_modules\/(?!.pnpm)(?<moduleName>[^\/]*)\//)
                  ?.groups!.moduleName ?? "vender"
              );
            }
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        css: { charset: false },
        scss: {
          api: "modern-compiler", // or 'modern'
        },
      },
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
      __NEXT_VERSION__: JSON.stringify(process.env.npm_package_version),
      __NEXT_NAME__: JSON.stringify(process.env.npm_package_name),
      "process.env": env,
    },
  };
});

export default viteConfig;

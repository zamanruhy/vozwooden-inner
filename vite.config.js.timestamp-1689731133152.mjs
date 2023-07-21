// vite.config.js
import { defineConfig, splitVendorChunkPlugin } from "vite";
import path from "node:path";
import eslint from "vite-plugin-eslint";
import solid from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";
import legacy from "@vitejs/plugin-legacy";
var __vite_injected_original_dirname = "G:\\Projects\\vozwooden-inner";
var vite_config_default = defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    legacy({
      modernPolyfills: false,
      renderLegacyChunks: false
    }),
    eslint(),
    solid({ ssr: true, solid: { hydratable: false } }),
    solidSvg({
      defaultExport: "url",
      svgo: {
        enabled: true,
        svgoConfig: {
          multipass: true,
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  convertPathData: { floatPrecision: 2 },
                  removeViewBox: false
                }
              }
            },
            "removeDimensions",
            "prefixIds",
            "removeXMLNS",
            {
              name: "removeAttributesBySelector",
              params: {
                selector: "svg",
                attributes: ["class", "style", "xml:space"]
              }
            }
          ]
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  build: {
    assetsInlineLimit: 0,
    minify: false,
    polyfillModulePreload: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames({ name }) {
          return name === "index" ? "js/app.js" : "js/[name].js";
        },
        chunkFileNames: "js/[name].js",
        assetFileNames({ name }) {
          if (name.match(/\.css$/)) {
            return name === "style.css" ? "css/app.css" : "css/[name].css";
          }
          if (name.match(/\.(png|jpe?g|gif|svg|webp|avif)$/)) {
            return "img/[name].[ext]";
          }
          if (name.match(/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/)) {
            return "media/[name].[ext]";
          }
          return "assets/[name].[ext]";
        }
      }
    }
  },
  ssr: {
    noExternal: ["solid-meta", "@solidjs/router"]
  },
  server: { port: 3e3, strictPort: true },
  preview: { port: 3e3, strictPort: true },
  experimental: {
    renderBuiltUrl(filename, { hostType, ...rest }) {
      if (hostType === "css")
        return { relative: true };
      return filename;
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxQcm9qZWN0c1xcXFx2b3p3b29kZW4taW5uZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXFByb2plY3RzXFxcXHZvendvb2Rlbi1pbm5lclxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRzovUHJvamVjdHMvdm96d29vZGVuLWlubmVyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBzcGxpdFZlbmRvckNodW5rUGx1Z2luIH0gZnJvbSAndml0ZSdcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCBlc2xpbnQgZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50J1xuaW1wb3J0IHNvbGlkIGZyb20gJ3ZpdGUtcGx1Z2luLXNvbGlkJ1xuaW1wb3J0IHNvbGlkU3ZnIGZyb20gJ3ZpdGUtcGx1Z2luLXNvbGlkLXN2ZydcbmltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5J1xuLy8gaW1wb3J0IHsgaW1hZ2V0b29scyB9IGZyb20gJ3ZpdGUtaW1hZ2V0b29scydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgLy8gYmFzZTogJy4vJyxcbiAgcGx1Z2luczogW1xuICAgIC8vIGltYWdldG9vbHMoe1xuICAgIC8vICAgZGVmYXVsdERpcmVjdGl2ZXM6ICh1cmwpID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoeyBtZXRhZGF0YTogJ3NyYzt3aWR0aDtoZWlnaHQ7Zm9ybWF0JyB9KVxuICAgIC8vICAgfVxuICAgIC8vIH0pLFxuICAgIHNwbGl0VmVuZG9yQ2h1bmtQbHVnaW4oKSxcbiAgICBsZWdhY3koe1xuICAgICAgbW9kZXJuUG9seWZpbGxzOiBmYWxzZSxcbiAgICAgIHJlbmRlckxlZ2FjeUNodW5rczogZmFsc2VcbiAgICB9KSxcbiAgICBlc2xpbnQoKSxcbiAgICBzb2xpZCh7IHNzcjogdHJ1ZSwgc29saWQ6IHsgaHlkcmF0YWJsZTogZmFsc2UgfSB9KSxcbiAgICAvLyBtaW5pU3ZnKCksXG4gICAgc29saWRTdmcoe1xuICAgICAgZGVmYXVsdEV4cG9ydDogJ3VybCcsXG4gICAgICBzdmdvOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIHN2Z29Db25maWc6IHtcbiAgICAgICAgICBtdWx0aXBhc3M6IHRydWUsXG4gICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAncHJlc2V0LWRlZmF1bHQnLFxuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBvdmVycmlkZXM6IHtcbiAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbWl6ZSBvcHRpb25zIGZvciBwbHVnaW5zIGluY2x1ZGVkIGluIHByZXNldFxuICAgICAgICAgICAgICAgICAgY29udmVydFBhdGhEYXRhOiB7IGZsb2F0UHJlY2lzaW9uOiAyIH0sXG4gICAgICAgICAgICAgICAgICAvLyBvciBkaXNhYmxlIHBsdWdpbnNcbiAgICAgICAgICAgICAgICAgIHJlbW92ZVZpZXdCb3g6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gZW5hYmxlIGJ1aWx0aW4gcGx1Z2luIG5vdCBpbmNsdWRlZCBpbiBkZWZhdWx0IHByZXNldFxuICAgICAgICAgICAgJ3JlbW92ZURpbWVuc2lvbnMnLFxuICAgICAgICAgICAgJ3ByZWZpeElkcycsXG4gICAgICAgICAgICAncmVtb3ZlWE1MTlMnLFxuICAgICAgICAgICAgLy8gZW5hYmxlIGFuZCBjb25maWd1cmUgYnVpbHRpbiBwbHVnaW4gbm90IGluY2x1ZGVkIGluIHByZXNldFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlQXR0cmlidXRlc0J5U2VsZWN0b3InLFxuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3N2ZycsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogWydjbGFzcycsICdzdHlsZScsICd4bWw6c3BhY2UnXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvLyB3YXRjaDoge30sXG4gICAgLy8gdGFyZ2V0OiAnZXMyMDE1JyxcbiAgICAvLyBtYW5pZmVzdDogdHJ1ZSxcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogMCxcbiAgICBtaW5pZnk6IGZhbHNlLFxuICAgIHBvbHlmaWxsTW9kdWxlUHJlbG9hZDogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBleHBlcmltZW50YWxUb3BMZXZlbEF3YWl0OiB0cnVlLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIGVudHJ5RmlsZU5hbWVzOiAnanMvYXBwLmpzJyxcbiAgICAgICAgZW50cnlGaWxlTmFtZXMoeyBuYW1lIH0pIHtcbiAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ2luZGV4JyA/ICdqcy9hcHAuanMnIDogJ2pzL1tuYW1lXS5qcydcbiAgICAgICAgfSxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdqcy9bbmFtZV0uanMnLFxuICAgICAgICAvLyBhc3NldEZpbGVOYW1lczogYGFzc2V0cy9bbmFtZV0uW2V4dF1gLFxuICAgICAgICBhc3NldEZpbGVOYW1lcyh7IG5hbWUgfSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc9PT1OQU1FPT09JywgbmFtZSlcbiAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvXFwuY3NzJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ3N0eWxlLmNzcycgPyAnY3NzL2FwcC5jc3MnIDogJ2Nzcy9bbmFtZV0uY3NzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvXFwuKHBuZ3xqcGU/Z3xnaWZ8c3ZnfHdlYnB8YXZpZikkLykpIHtcbiAgICAgICAgICAgIHJldHVybiAnaW1nL1tuYW1lXS5bZXh0XSdcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG5hbWUubWF0Y2goL1xcLihtcDR8d2VibXxvZ2d8bXAzfHdhdnxmbGFjfGFhYykkLykpIHtcbiAgICAgICAgICAgIHJldHVybiAnbWVkaWEvW25hbWVdLltleHRdJ1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9bbmFtZV0uW2V4dF0nXG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgIC8vICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkgcmV0dXJuICd2ZW5kb3InXG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNzcjoge1xuICAgIC8vIFZpdGUgYXR0ZW1wdHMgdG8gbG9hZCB0aGlzIGFzIGEgQ29tbW9uanMgZGVwZW5kZW5jeVxuICAgIG5vRXh0ZXJuYWw6IFsnc29saWQtbWV0YScsICdAc29saWRqcy9yb3V0ZXInXVxuICB9LFxuICAvLyBhc3NldHNJbmNsdWRlOiBbL1xcL3N0YXRpY1xcLy4qJC9dLFxuICBzZXJ2ZXI6IHsgcG9ydDogMzAwMCwgc3RyaWN0UG9ydDogdHJ1ZSB9LFxuICBwcmV2aWV3OiB7IHBvcnQ6IDMwMDAsIHN0cmljdFBvcnQ6IHRydWUgfSxcbiAgZXhwZXJpbWVudGFsOiB7XG4gICAgcmVuZGVyQnVpbHRVcmwoZmlsZW5hbWUsIHsgaG9zdFR5cGUsIC4uLnJlc3QgfSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJz09PT09JywgZmlsZW5hbWUsIGhvc3RUeXBlLCByZXN0KVxuICAgICAgaWYgKGhvc3RUeXBlID09PSAnY3NzJykgcmV0dXJuIHsgcmVsYXRpdmU6IHRydWUgfVxuICAgICAgcmV0dXJuIGZpbGVuYW1lXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5USxTQUFTLGNBQWMsOEJBQThCO0FBQzlULE9BQU8sVUFBVTtBQUNqQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sY0FBYztBQUNyQixPQUFPLFlBQVk7QUFMbkIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFFMUIsU0FBUztBQUFBLElBTVAsdUJBQXVCO0FBQUEsSUFDdkIsT0FBTztBQUFBLE1BQ0wsaUJBQWlCO0FBQUEsTUFDakIsb0JBQW9CO0FBQUEsSUFDdEIsQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBLElBQ1AsTUFBTSxFQUFFLEtBQUssTUFBTSxPQUFPLEVBQUUsWUFBWSxNQUFNLEVBQUUsQ0FBQztBQUFBLElBRWpELFNBQVM7QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxRQUNULFlBQVk7QUFBQSxVQUNWLFdBQVc7QUFBQSxVQUNYLFNBQVM7QUFBQSxZQUNQO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixRQUFRO0FBQUEsZ0JBQ04sV0FBVztBQUFBLGtCQUVULGlCQUFpQixFQUFFLGdCQUFnQixFQUFFO0FBQUEsa0JBRXJDLGVBQWU7QUFBQSxnQkFDakI7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFlBRUE7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBRUE7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFFBQVE7QUFBQSxnQkFDTixVQUFVO0FBQUEsZ0JBQ1YsWUFBWSxDQUFDLFNBQVMsU0FBUyxXQUFXO0FBQUEsY0FDNUM7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBSUwsbUJBQW1CO0FBQUEsSUFDbkIsUUFBUTtBQUFBLElBQ1IsdUJBQXVCO0FBQUEsSUFDdkIsY0FBYztBQUFBLElBQ2QsZUFBZTtBQUFBLE1BRWIsUUFBUTtBQUFBLFFBRU4sZUFBZSxFQUFFLEtBQUssR0FBRztBQUN2QixpQkFBTyxTQUFTLFVBQVUsY0FBYztBQUFBLFFBQzFDO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxRQUVoQixlQUFlLEVBQUUsS0FBSyxHQUFHO0FBRXZCLGNBQUksS0FBSyxNQUFNLFFBQVEsR0FBRztBQUN4QixtQkFBTyxTQUFTLGNBQWMsZ0JBQWdCO0FBQUEsVUFDaEQ7QUFDQSxjQUFJLEtBQUssTUFBTSxrQ0FBa0MsR0FBRztBQUNsRCxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxjQUFJLEtBQUssTUFBTSxvQ0FBb0MsR0FBRztBQUNwRCxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUlGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUVILFlBQVksQ0FBQyxjQUFjLGlCQUFpQjtBQUFBLEVBQzlDO0FBQUEsRUFFQSxRQUFRLEVBQUUsTUFBTSxLQUFNLFlBQVksS0FBSztBQUFBLEVBQ3ZDLFNBQVMsRUFBRSxNQUFNLEtBQU0sWUFBWSxLQUFLO0FBQUEsRUFDeEMsY0FBYztBQUFBLElBQ1osZUFBZSxVQUFVLEVBQUUsYUFBYSxLQUFLLEdBQUc7QUFFOUMsVUFBSSxhQUFhO0FBQU8sZUFBTyxFQUFFLFVBQVUsS0FBSztBQUNoRCxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

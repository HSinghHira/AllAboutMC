// .vitepress/config.mts
import { defineConfig } from "file:///home/project/node_modules/vitepress/dist/node/index.js";
import tailwindcss from "file:///home/project/node_modules/@tailwindcss/vite/dist/index.mjs";
var config_default = defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  title: "Minecraft Wala Bro",
  description: "Minecraft Related Tutorial and Downloads",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local"
    },
    nav: [
      { text: "Home", link: "/" }
      // { text: 'Home', link: '/' },
      // { text: 'Home', link: '/' },
      // { text: 'Home', link: '/' },
      // { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: "Villager Breeder",
        collapsed: true,
        items: [
          { text: "Starter Villager Breeder", link: "villager-breeder/starter-villager-breeder" }
          // { text: 'Item B', link: '/item-b' },
        ]
      }
      // {
      //   text: 'Section Title B',
      //   items: [
      //     { text: 'Item C', link: '/item-c' },
      //     { text: 'Item D', link: '/item-d' },
      //   ]
      // }
    ],
    socialLinks: [
      { icon: "youtube", link: "https://youtube.com" },
      { icon: "discord", link: "https://discord.gg/q5nF6mj4AV" }
    ],
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium"
      }
    },
    footer: {
      message: "Made with \u2764\uFE0F by Hira",
      copyright: "Copyright \xA9 2024"
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcHJvamVjdC8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0Ly52aXRlcHJlc3MvY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wcm9qZWN0Ly52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwiQHRhaWx3aW5kY3NzL3ZpdGVcIjtcblxuLy8gaHR0cHM6Ly92aXRlcHJlc3MudnVlanMub3JnL2NvbmZpZy9hcHAtY29uZmlnc1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdml0ZToge1xuICAgIHBsdWdpbnM6IFt0YWlsd2luZGNzcygpXSxcbiAgfSxcbiAgdGl0bGU6IFwiTWluZWNyYWZ0IFdhbGEgQnJvXCIsXG5cbiAgZGVzY3JpcHRpb246IFwiTWluZWNyYWZ0IFJlbGF0ZWQgVHV0b3JpYWwgYW5kIERvd25sb2Fkc1wiLFxuXG4gIHRoZW1lQ29uZmlnOiB7XG5cbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXG4gICAgc2VhcmNoOiB7XG4gICAgICBwcm92aWRlcjogJ2xvY2FsJ1xuICAgIH0sXG4gICAgXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgICAvLyB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgICAvLyB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgICAvLyB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgICAvLyB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgXSxcblxuICAgIHNpZGViYXI6IFtcbiAgICAgIFxuICBcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1ZpbGxhZ2VyIEJyZWVkZXInLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnU3RhcnRlciBWaWxsYWdlciBCcmVlZGVyJywgbGluazogJ3ZpbGxhZ2VyLWJyZWVkZXIvc3RhcnRlci12aWxsYWdlci1icmVlZGVyJyB9LFxuICAgICAgICAgIC8vIHsgdGV4dDogJ0l0ZW0gQicsIGxpbms6ICcvaXRlbS1iJyB9LFxuXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIHRleHQ6ICdTZWN0aW9uIFRpdGxlIEInLFxuICAgICAgLy8gICBpdGVtczogW1xuICAgICAgLy8gICAgIHsgdGV4dDogJ0l0ZW0gQycsIGxpbms6ICcvaXRlbS1jJyB9LFxuICAgICAgLy8gICAgIHsgdGV4dDogJ0l0ZW0gRCcsIGxpbms6ICcvaXRlbS1kJyB9LFxuICAgICAgLy8gICBdXG4gICAgICAvLyB9XG4gICAgXSxcblxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246ICd5b3V0dWJlJywgbGluazogJ2h0dHBzOi8veW91dHViZS5jb20nIH0sXG4gICAgICB7IGljb246ICdkaXNjb3JkJywgbGluazogJ2h0dHBzOi8vZGlzY29yZC5nZy9xNW5GNm1qNEFWJyB9LFxuICAgIF0sXG5cbiAgICBsYXN0VXBkYXRlZDoge1xuICAgICAgdGV4dDogJ1VwZGF0ZWQgYXQnLFxuICAgICAgZm9ybWF0T3B0aW9uczoge1xuICAgICAgICBkYXRlU3R5bGU6ICdmdWxsJyxcbiAgICAgICAgdGltZVN0eWxlOiAnbWVkaXVtJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmb290ZXI6IHtcbiAgICAgIG1lc3NhZ2U6ICdNYWRlIHdpdGggXHUyNzY0XHVGRTBGIGJ5IEhpcmEnLFxuICAgICAgY29weXJpZ2h0OiAnQ29weXJpZ2h0IFx1MDBBOSAyMDI0J1xuICAgIH1cbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtQLFNBQVMsb0JBQW9CO0FBQy9RLE9BQU8saUJBQWlCO0FBR3hCLElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxJQUNKLFNBQVMsQ0FBQyxZQUFZLENBQUM7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsT0FBTztBQUFBLEVBRVAsYUFBYTtBQUFBLEVBRWIsYUFBYTtBQUFBO0FBQUEsSUFHWCxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBRUEsS0FBSztBQUFBLE1BQ0gsRUFBRSxNQUFNLFFBQVEsTUFBTSxJQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUs1QjtBQUFBLElBRUEsU0FBUztBQUFBLE1BR1A7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSw0QkFBNEIsTUFBTSw0Q0FBNEM7QUFBQTtBQUFBLFFBR3hGO0FBQUEsTUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFRRjtBQUFBLElBRUEsYUFBYTtBQUFBLE1BQ1gsRUFBRSxNQUFNLFdBQVcsTUFBTSxzQkFBc0I7QUFBQSxNQUMvQyxFQUFFLE1BQU0sV0FBVyxNQUFNLGdDQUFnQztBQUFBLElBQzNEO0FBQUEsSUFFQSxhQUFhO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFDTixlQUFlO0FBQUEsUUFDYixXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxJQUVBLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

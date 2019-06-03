export default {
  title: `My First Post!`,
  spoiler: "Learn how to add new posts and tweak the theme to your liking.",
  getContent: () => import('./document.mdx'),
}

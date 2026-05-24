import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter }) => ({ url, frontmatter }))
      .sort((a, b) => {
        const da = new Date(a.frontmatter.date || 0).getTime()
        const db = new Date(b.frontmatter.date || 0).getTime()
        return db - da
      })
  },
})

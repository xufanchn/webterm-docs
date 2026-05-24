import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter }) => {
        if (frontmatter.date) {
          const d = new Date(frontmatter.date)
          frontmatter.date = d.toISOString().slice(0, 10)
        }
        return { url, frontmatter }
      })
      .sort((a, b) => {
        const da = new Date(a.frontmatter.date || 0).getTime()
        const db = new Date(b.frontmatter.date || 0).getTime()
        return db - da
      })
  },
})

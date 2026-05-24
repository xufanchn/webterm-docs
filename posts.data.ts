import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter }) => ({ url, frontmatter }))
      .sort((a, b) => (b.frontmatter.date || '').localeCompare(a.frontmatter.date || ''))
  },
})

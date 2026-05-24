---
layout: home

hero:
  name: 'X.F. Blog'
  text: "代码 · 运维 · 思考"
  tagline: 记录技术路上的点滴
  actions:
    - theme: brand
      text: 阅读博客
      link: /posts/WebTerm介绍
    - theme: alt
      text: GitHub
      link: https://github.com/xufanchn
---

<script setup>
import { data as posts } from './posts.data.ts'
</script>

## 最新文章

<div v-for="post in posts" :key="post.url">
  <h3><a :href="post.url">{{ post.frontmatter.title }}</a></h3>
  <p><em>{{ post.frontmatter.date }} · xufanchn</em></p>
  <p>{{ post.frontmatter.description }}</p>
  <p><a :href="post.url">阅读全文 →</a></p>
  <hr>
</div>

*更多文章即将发布...*

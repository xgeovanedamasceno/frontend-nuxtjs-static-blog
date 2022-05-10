<template>
  <div class="w-1/2 mx-auto">
    <header class="mt-20 mb-5">
      <h1 class="text-3xl font-semibold text-purple-600">{{ pageTitle }}</h1>
    </header>
    <nav>
      <ul>
        <li>About</li>
        <li>Blog</li>
      </ul>
    </nav>
    <section>Call to Action</section>
    <article class="my-20">
      <h2 class="text-5xl font-semibold mb-5">{{ articleTitle }}</h2>
      <p class="mb-5">{{ articleSummary }}</p>
      <p class="text-purple-500">{{ linkArticle }}</p>
    </article>
    <footer>
      <h3 class="text-1xl font-semibold text-black-600">
        Nuxt Static Blog Developed By xgeovanedamasceno
      </h3>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      pageTitle: 'Nuxt Static Blog',
      articleTitle: 'Article Title V',
      articleSummary: 'This is the summary of the article V',
      linkArticle: 'read more V',
    }
  },
}
</script>

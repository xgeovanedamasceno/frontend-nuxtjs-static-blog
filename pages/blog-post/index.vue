<template>
  <div class="w-1/2 mx-auto">
    <header class="mt-20 mb-5">
      <h1 class="text-3xl font-semibold text-purple-600">{{ pageTitle }}</h1>
    </header>
    <nav class="p-5">
      <a href="#">Home</a>
    </nav>
    <section class="bg-gray-100 p-10">
      <p class="mb-5">
        We are a team of developers with houndred hours spend on coding, we
        create professional apps,
      </p>
      <form>
        <input class="p-2 w-300" placeholder="Enter your email to subscribe" />
        <button class="p-2 bg-green-500 text-white">Subscribe</button>
      </form>
    </section>
    <article class="my-20">
      <h2 class="text-5xl font-semibold mb-5">article.title</h2>
      <p class="mb-5">article.body</p>
      <p class="text-purple-500">linkArticle</p>
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
  name: 'PostPage',
  data() {
    return {
      pageTitle: 'Nuxt Static Blog',
      articleTitle: 'Article Title V',
      articleSummary: 'This is the summary of the article V',
      linkArticle: 'read more V',
      listArticles: [],
      listImages: [],
    }
  },
}
</script>

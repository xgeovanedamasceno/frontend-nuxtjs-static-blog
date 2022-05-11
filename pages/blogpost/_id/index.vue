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
      <h2 class="text-5xl font-semibold mb-5">{{ articleTitle }}</h2>
      <p class="mb-5">{{ articleBody }}</p>
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
  name: 'BlogPost',
  data() {
    return {
      pageTitle: 'Nuxt Static Blog',
      articleTitle: '',
      articleBody: '',
      listArticles: [],
      listImages: [],
    }
  },

  created() {
    this.fetchPost()
  },

  methods: {
    fetchPost() {
      const postId = this.getPostId()
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
        .then((json) => this.renderPost(json))
    },

    getPostId() {
      return this.$route.params.id
    },

    renderPost(post) {
      this.articleTitle = post.title
      this.articleBody = post.body
    },
  },
}
</script>

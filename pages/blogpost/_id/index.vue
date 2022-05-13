<template>
  <div class="w-2/3 mx-auto">
    <header class="mt-20 mb-5">
      <h1
        class="text-center text-3xl font-semibold text-purple-600 md:text-left"
      >
        {{ pageTitle }}
      </h1>
    </header>
    <nav class="p-5 text-center md:text-left">
      <NuxtLink to="/">Home</NuxtLink>
    </nav>
    <section class="bg-gray-100 p-10">
      <p class="mb-5">
        We are a team of developers with houndred hours spend on coding, we
        create professional apps.
      </p>
      <form action="/thankyou/" class="flex flex-col">
        <input class="p-2 w-300" placeholder="Enter your email to subscribe" />
        <button class="p-2 bg-green-500 text-white mt-5" type="submit">
          Subscribe
        </button>
      </form>
    </section>
    <article class="my-20">
      <h2
        class="text-3xl text-center md:text-5xl md:text-left font-semibold mb-5"
      >
        {{ articleTitle }}
      </h2>
      <img
        :src="`https://picsum.photos/id/${getPostId()}/500`"
        alt="fd"
        class="mx-auto my-10"
      />
      <p class="mb-5">{{ articleBody }}</p>
    </article>
    <footer class="pb-5">
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

  head() {
    return {
      title: this.articleTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.articleBody,
        },
      ],
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

<template>
  <div class="w-1/2 mx-auto">
    <header class="mt-20 mb-5">
      <h1 class="text-3xl font-semibold text-purple-600">{{ pageTitle }}</h1>
    </header>
    <nav class="p-5">
      <a href="#">Home</a>
    </nav>
    <section class="my-20">
      <h2 class="text-5xl font-semibold mb-5">{{ greetings }}</h2>
      <p class="mb-5">{{ headline }}</p>
    </section>
    <footer>
      <h3 class="text-1xl font-semibold text-black-600">
        Nuxt Static Blog Developed By xgeovanedamasceno
      </h3>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SubscribePage',
  data() {
    return {
      pageTitle: 'Nuxt Static Blog',
      greetings: 'Well Done!',
      headline:
        'Welcome! Now you are a premium member and will receive the best tips ever!',
    }
  },

  head() {
    return {
      title: this.greetings,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.headline,
        },
      ],
    }
  },

  created() {},
}
</script>

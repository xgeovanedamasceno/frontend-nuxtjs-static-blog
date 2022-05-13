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
    <main class="my-20 bg-green-500 p-20">
      <h2 class="text-3xl md:text-5xl text-white font-semibold mb-5">
        {{ greetings }}
      </h2>
      <p class="text-center sm:text-left mb-5 text-white">{{ headline }}</p>
    </main>
    <footer class="pb-5">
      <h3
        class="text-center text-1xl font-semibold text-black-600 sm:text-left"
      >
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
      greetings: 'Thank you!',
      headline:
        'And welcome! You are now a premium member and will receive the best tips ever!',
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

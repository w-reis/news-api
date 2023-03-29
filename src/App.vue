<template>
  <Header />
  <img class="w-32 mx-auto my-8" :src="'./assets/extra.jpg'" alt="logo" width="100">
  <div class="grid grid-cols-1 my-8 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto  justify-items-center">
    <template v-for="article in articles || []">
      <div class="max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="w-full" :src="article.urlToImage || './assets/fallback.png' " alt="article-img">
        <div class="p-6">
        <a :href="article.url" target="_blank">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ article.title }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ article.description }}</p>
        <div class="flex items-center">
          <div class="text-sm py-4">
            <p class="text-gray-900 leading-none">{{ article.author }}</p>
            <p class="text-gray-600">{{ new Date(article.publishedAt).toDateString() }}</p>
          </div>
        </div>
        <a :href="article.url" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        </div>
    </div>
  </template>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import { newsService } from './service/http.service'
  export default {
    components: { Header },
    data() {
      return {
        articles: []
      }
    },
    mounted() {
      newsService.getHeadLines()
      .then(result => {
        console.log(result)
        this.articles = result.data.articles
      }).catch(err => {
        alert(JSON.stringify(err))
      })
    }
  }
</script>
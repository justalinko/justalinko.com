<template>
  <!-- This is an example component -->
  <div class="bg-gray-100">
    <div class="max-w-6xl mx-auto px-5 py-24">
      <div
        class="flex flex-wrap w-full mb-20 flex-col items-center text-center"
      >
        <h1
          class="
            title-font
            mb-2
            text-4xl
            font-extrabold
            leading-10
            tracking-tight
            text-left
            sm:text-xl sm:leading-none
            md:text-3xl
          "
        >
          JUSTALINKO GITHUB REPOSITORIES
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-base">
         There is my own repositories on github
        </p>
        <NuxtLink to="/contact" class="text-red-700 mt-2 border-2 border-red-700 p-1 hover:bg-black hover:text-white">CREATE PRIVATE PROJECT</NuxtLink>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          class="xl:w-1/3 md:w-1/2 p-4"
          v-for="(repo, index) in repoData"
          :key="index"
        >
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="
                w-auto
                h-auto
                inline-flex
                items-center
                justify-center
                rounded
                bg-black
                text-white
                mb-4
                p-2
              "
            >
            <span v-if="repo.language != null">
              {{  repo.language }}
            </span>
            <span v-else>
            Null
            </span>
            </div>
            <a :href="repo.html_url">
            <h2 class="hover:text-red-700 text-lg font-medium title-font font-bold mb-2">
              {{ repo.full_name }}
            </h2>
            </a>
            <p class="leading-relaxed text-base text-xs">{{ repo.description }}</p>

            <div
              class="text-center mt-2 leading-none flex justify-between w-full"
            >
              <span
                class="mr-3 inline-flex items-center leading-none text-sm py-1"
              >
                <svg
                  class="fill-current w-4 h-4 mr-2 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                  />
                </svg>
                {{  new Date(repo.updated_at).toDateString() }}
              </span>
              <span class="inline-flex items-center leading-none text-sm">
                <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                {{  repo.owner.login }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script >
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
    this.getRepos();
  },
  data() {
    return {
      repoUrl: "",
      repoData: "",
    };
  },
  methods: {
    getRepos: function () {
      fetch("https://api.github.com/users/"+process.env.github_username+"/repos?sort=desc")
        .then((res) => res.json())
        .then((data) => {
          this.repoData = data;
          console.log(data);
        });
    },
  },
};
</script>
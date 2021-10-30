<template>
  <Profile :posts="postsData" />
</template>

<script>
export default {
  data() {
    return {
      postsData: {},
    };
  },
  mounted() {
     this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
    this.getPosts();
  },
  methods: {
    openBlog: function () {
      return window.location.assign(process.env.profile_web);
    },
    openEmail: function () {
      return window.location.assign("mailto:"+process.env.profile_email);
    },
    hideFooter: function () {
      document.getElementById("footer").style.display = "none";
    },
    parseDate: function (date) {
      const dd = new Date(date);
      return dd.toDateString();
    },
    getPosts: function () {
      fetch("https://justalinko.com/ancok.php")
        .then((res) => res.json())
        .then((data) => {
         
          this.postsData = data.feed.entry;
        });
    },
  },
};
</script>
<template>
  <Profile />
</template>

<script>
export default {
  props:{
    posts: ''
  },
  data() {
    return {
      postsData: {},
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    openBlog: function () {
      return window.location.assign("https://justalinko.com");
    },
    openEmail: function () {
      return window.location.assign("mailto:alinkokomansuby@gmail.com");
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
          this.posts = data.feed.entry;
          console.log(this.postsData);
        });
    },
  },
};
</script>

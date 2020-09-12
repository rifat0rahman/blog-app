<template style="width:600px">
  <div class="blog">
    <h1>{{blogs.title}}</h1>
    <article style="font-size:22px;">{{blogs.content}}</article>
    <p style="margin-top:20px">Blog Category: {{blogs.cata}}</p>
    <p>Author: {{blogs.author}}</p>
  </div>
</template>

<style scoped>
  .blog{
    margin: 10px;
    background: #eee;
    width:100%;
    height: auto;
    padding: 15px 15px;
    margin: auto;
    margin-top: 50px;
    text-align: center;

  }
</style>


<script>
export default{
  data(){
    return {
      id:this.$route.params.id,
      blogs:[],
    }
  },
  created(){
      this.$http.get('https://vue-blogs-8578e.firebaseio.com/posts/'+ this.id +'.json').then(function(data){
        return data.json();
      }).then(function (data) {
        this.blogs = data;
      })
    }
  
}
</script>
<template>
<section  class="section1" style= "text-align:center; background:#9eda7f40;display:flex
item-align:center;">
<div v-theme="'narrow'" class="dv" >
  <div>
    <h1>Find Your Blog</h1>
    <input type="text" v-model="search" placeholder="search blog" class="input">
  </div>
  <div v-for="blog in searchblogs" :key="blog" v-different class="blogs">
   <router-link :to="'/'+ blog.id"><h1>{{blog.title|to-uppercase|snippet}}..</h1></router-link>
    <p>{{blog.content|snippet-content}}</p>
    <p>Author: {{blog.author}}</p>
  </div>
</div>

</section>

</template>

<style>
.blogs{
  margin-bottom: 20px;
  padding: 20px;
  flex: 50%
}
.dv{
    margin: 10px;
    color: #454323;
    padding: 20px;
    flex: 100%;
    text-align: center;
    padding: 15px 15px;
    margin: auto;
    margin-top: 30px;
},
.section1{
  text-align: center;
  color: 
}
.input{
  width: 300px;
  height: auto;
  font-size: 20px;
  border: 4px solid white;
  color: black;
}
.input:focus{
  outline: none;
  background: #eee;
}
a{
  text-decoration: none;
  color: white;
}
a:hover{
  text-decoration: none;
  color: white;
}
</style>


<script>
export default{
  data(){
    return{
      blogs:[],
      search:'',
    }
  },
  created(){
      this.$http.get('https://vue-blogs-8578e.firebaseio.com/posts.json').then(function(data) {
        return data.json();
      }).then(function (data) {
        var blogsarray = [];
        for(let key in data){
          data[key].id = key  
          console.log(data[key])
          blogsarray.push(data[key])
        }
        this.blogs = blogsarray
      })
    },




    computed:{
      searchblogs:function () {
       return this.blogs.filter(blog=>{
          return blog.title.toLowerCase().match(this.search)
        })
      }
    }
}
</script>
<template>
  <div class="main">
    <!-- blog form part.. -->
    <form v-if="!blog.submitted" class="blogform">
        <label>
            Blog Title
        </label><br>
        <input class="inputs" type="text" v-model.lazy="blog.title" placeholder="Blog Title" required/><br>
        <label>
            Blog Content
        </label><br>
        <textarea class="inputs" v-model.lazy="blog.content" placeholder="Blog Content"></textarea>
        <div>
            <label>Fashion</label>
                <input type="checkbox" value="Fashion" v-model="blog.cata">
            <label>Food</label>
                <input type="checkbox" value="Food " v-model="blog.cata">
            <label>Travel</label>
                <input type="checkbox" value="Travel" v-model="blog.cata">
            <label>Review</label>
                <input type="checkbox" value="Review" v-model="blog.cata">
            <label>Others</label>
                <input type="checkbox" value="Others" v-model="blog.cata"><br>
            <label>Author Name</label><br>
                <input class="inputs" type="text" placeholder="Author Name" name="author" v-model.lazy = "blog.author"><br>
                <button @click.prevent="post()">Publish Blog</button>
        </div>
    </form>
    <div id="preview" v-bind:style="{'margin-top':margin +'px'}">
        <h3>Preview blog</h3>
        <p v-if="blog.submitted" style="font-size:20px;">Thanks for sharing!!</p>
        <h3>Blog Title</h3>
        <h3>{{blog.title}}</h3>
        <p>Blog categories-<span v-for="i in blog.cata" :key="i">{{i}},</span></p>
        <p>Blog Content</p>
        <p>{{blog.content}}</p>
        <p>Author:{{blog.author}}</p>
    </div>
  </div>
</template>


<style scoped>
.margin{
    margin-top: 50px;
}
#preview{
    flex: 100%;
    text-align: center;
    font-size: 20px;
    background: #9e9e9e8a;
    margin: 0px;
    margin-top: 5px;
    padding: 10px;
}

.main{
    display: flex;
    flex-wrap: wrap;
}
.blogform{
    background: #cdb7f933;
    /*position: relative;*/
    text-align: center;
    flex: 100%;
    font-size: 20px;
    margin-top: 50px;
}
.inputs{
    width: 250px;
    height: auto;
    background:#f1f1f1;
    border: 1px solid #00000050;
    margin-bottom: 20px;
}
.inputs:focus{
    outline: none;
    background: #fff;
    border: 2px solid white;
}
button{
    margin-top: 20px;
    padding: 5px;
    border: 5px solid white;
    background: #dac5d7;
    box-shadow: 0px 1px 5px 0px black;
    margin: 20px;
}
button:focus{
    background: white;
    color: black;
    outline: none;
}

label{
    margin: 10px;
}
</style>


<script>
export default {
data(){
    return{
        blog:{
            title:"",
            content:"",
            cata:[],
            author:'',
            submitted:false,
        },
        margin:0
    }
},
methods:{
    post:function () {
       this.$http.post('https://vue-blogs-8578e.firebaseio.com/posts.json',this.blog).then(function(data){
           console.log(data);
           this.blog.submitted = true
           this.margin = 40
       })
    }
}
}

</script>
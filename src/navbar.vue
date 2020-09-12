<template>
  <div class="main">
    <section>
        <div class="links">
          <nav>
            <ul>
              <li><router-link to="/" exact>Blogs Gallery</router-link></li>
              <li><router-link to="/blogs">Post Blog</router-link></li>
    <a href="https://www.facebook.com/mr.allion.Z" target="_blank" class="logo"><i class="fab fa-facebook"></i></a>
            </ul>
          </nav>
        </div>
    </section>
  </div>
</template>

<style scoped>
.logo:hover{
  color: #343a40
}
i{
  font-size:25px;
  color:white;
  float: right;
  margin: 0px;
  display: flex;
  align-items: center;
}
i:hover{
  color:#343a40;
}
.main{
  background: gray;
  position: fixed;
  top:0;
  left: 0;
  width:100%;
  margin: 0px;
}
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
ul{
  padding: 15px 15px;
  margin: auto;
  text-align: center;

}
li{

    display: inline;
    text-align: center;
    text-decoration: none;
    color: white;
    padding: 10px;
}
a{
  text-decoration: none;
  color: white;
}
/*a:hover{
  background: white;
  color: gray;
  padding: 5px;
  border-radius: 5px;
}*/
.router-link-active{
  background: white;
  color: gray;
  padding: 5px;
  border-radius: 5px;
}
    
</style>


<script>


export default{

}
</script>
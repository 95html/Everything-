<template>
  <div id="app">
		<v-header :seller="seller"></v-header>
			<ul class="herder">
			<li><router-link to="/goods">商品</router-link></li>
			<li><router-link to="/new">评价</router-link></li>
			<li><router-link to="/show">商家</router-link></li>
			</ul>
<br>
<hr>
<br>
<router-view></router-view>

  </div>
</template>
<script>
	import Header from './components/header.vue';
	const ERR_OK = 0;
  export default {
    data () {
      return {
				seller:''
      }
    },
		created() {
			this.$http.get('/api/seller').then((res)=>{
				// console.log(res);
				if(res){
					
					this.seller =res.data;
					console.log(this.seller);
				}
			}).catch((err)=>{
				console.log(err)
			});
		},
		components:{
			'v-header':Header
		} 
  }


</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
#app {
  padding: 0;
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.herder {
	display: flex;
	width: 100%;
	height: 40px;
	line-height: 40px;
	background: #FFF;
	color: #000;
	border-bottom:1px solid #ccc;
}
.herder li {
	float: left;
	list-style: none;
	flex: 1;
	text-align: center;
}
.herder a {
		color: #000;
		text-decoration: none;
		display: block;
		font-size: 14px;
	}
.router-link-active {
	background: rgb(240,20,20);
	}
	
</style>

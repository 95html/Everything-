<template>
	<div>
		<h2>这是新闻页面---</h2>
		<br>
		   <hr>
		   <br><br>
		   <button @click="getData()">请求数据</button>
		   <br>
		   <br>
		   <hr>
		   <ul class="newlists">
		    <li v-for="(item,key) in bdlist">
			<router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
			</li>
		  </ul>
		</div>
		</template>
		
		<script>
		  export default {
		    data () {
		      return {
		        bdlist:[]
		      }
		    },
		    methods:{
		      getData(){
		        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
		        this.$http.get(api).then((response)=>{
		          this.bdlist=response.body.result;
		        },function(err){
		          console.log(err);
		        })
		      }
		      
		    },
		    mounted(){
		      this.getData();
		    }
		  }
		  
		</script>
		<style scoped="scoped">
			.newlists li {
				height: 3.4rem;
				line-height: 3.4rem;
				border-bottom: 1px solid #eee;
				font-size: 0.8rem;
			}
			.newlists a {
				color: #999;
			}
		</style>
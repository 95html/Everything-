<template>
	<div>
		<div id="content">
			<h2>{{newconrent.title}}</h2>
			<div v-html="newconrent.content">{{newconrent.content}}</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				newconrent:[]
			}
		},
		mounted(){
			// console.log(this.$route.params)
			var aid=this.$route.params.aid;
			this.requesData(aid);
		},
		methods:{
			requesData(aid){
				var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
				this.$http.get(api).then((response)=>{
					console.log(response);
					this.newconrent=response.body.result[0];
				},(err)=>{
					console.log(err);
				})
			}
		}
	}
</script>
<style>
#content {
		padding: 1rem;
		line-height: 2;
	}
	#content img {
			max-width: 98%;
		}
</style>
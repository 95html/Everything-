<template>
	<div class="goods">
  <div class="menu-wrapper"></div>
	<div class="foots-wrapper"></div>
</div>
</template>

<script>
	const ERR_OK = 0;
  export default {
		props:{
			seller:{
				type:''
		}
},
data(){
	return {
		goods: []
	};
},
created() {
			this.$http.get('/api/goods').then((res)=>{
				// console.log(res);
				res = res.body;
				if(res.errno===ERR_OK){
					this.goods =res.data;
					console.log(this.goods);
				}
			}).catch((err)=>{
				console.log(err)
			});
		}
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods {
	display: flex;
	position: absolute;
	top: 174px;
	bottom: 46px;
	width: 100%;
	overflow: hidden;
	
}
.menu-wrapper {
	flex: 0 0 80px;
	width: 80px;
	background: #f3f5f7;
}
.foots-wrapper {
	flex: 1;
}
</style>

<template>
	<div class="goods">
  <div class="menu-wrapper" ref="menuWrapper">
		<ul>
			<li v-for="item in goods" class="menu-item  border-1px">
				<span class="text">
					{{item.name}}
				</span>
			</li>
		</ul>
	</div>
	<div class="foots-wrapper" ref="foodWrapper">
		<ul>
			<li v-for="item in goods" class="food-list">
				<h1 class="title">{{item.name}}</h1>
				<ul>
					<li v-for="food in item.foods" class="food-item border-1px">
						<div class="icon">
							<img :src="food.icon" />
						</div>
						<div class="content">
							<h2 class="name">{{food.name}}</h2>
							<p class="desc">{{food.description}}</p>
							<div class="extra">
								<span class="count">月售{{food.sellCount}}份</span>
								<span>好评率{{food.rating}}%</span>
							</div>
							<div class="price">
								<span class="now">¥{{food.price}}</span>
								<span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
							</div>
						</div>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
	import BScroll from 'better-scroll';
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
					this.$nextTick(() => {
						this._initScroll();
					});
					console.log(this.goods);
				}
			}).catch((err)=>{
				console.log(err)
			});
		},
methods: {
	_initScroll() {
		this.meunScroll = new BScroll(this.$refs.menuWrapper, {});
		this.foodScroll = new BScroll(this.$refs.foodWrapper, {})
	}
}
};
  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	li{ list-style: none;}
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
.menu-item {
	display: table;
	height: 54px;
	width: 56px;
	line-height: 14px;
	padding: 0 12px;
}
.menu-item .text {
	display: table-cell;
	width: 56px;
	vertical-align: middle;
	font-size: 12px;
}
.foots-wrapper {
	flex: 1;
	background: #FFFFFF;
}
.foots-wrapper .title {
	padding-left: 14px;
	height: 26px;
	line-height: 26px;
	border-left: 2px solid #d9dde1;
	font-size: 12px;
	color: rgb(147,153,159);
	background: #f3f5f7;
}
.food-item {
	display: flex;
	margin: 18px;
	padding-bottom: 14px;
}
.border-1px {
	border-bottom: 1px solid rgba(7,17,27,0.1);
}
.food-item .icon {
	flex: 0 0 57px;
	margin-right: 10px;
}
.food-item .icon img {
	width: 100px;
	height: 100px;
}
.food-item .content {
	flex: 1;
}
.food-item .content .name {
	margin: 2px 0 8px 0;
	height: 18px;
	line-height: 18px;
	color: rgb(7,17,27);
	font-size: 18px;
}
.desc, .extra {
	margin-top: 8px;
	
	line-height: 10px;
	font-size: 10px;
	color: rgb(147,153,159);
}
.desc {
	margin-bottom: 8px;
	line-height: 12px;
}
.extra {
	line-height: 10px;
}
.count {
	margin-right: 18px;
}
.price {
	font-weight: 700;
	line-height: 24px;
}
.price .now {
	margin-right: 8xp;
	font-size: 14px;
	color: rgb(240,20,20);
}
.price .old {
	text-decoration: line-through;
	font-size: 10px;
	color:rgb(147,153,159);
}
</style>

<template>
	<div class="header">
	<div class="content-wrapper">
		<div class="Avatar">
			<img width="64" height="64" v-bind:src="seller.data.avatar" />
		</div>
		<div class="content">
			<div class="title">
				<span class="brand">品牌</span>
				<span class="name">{{seller.data.name}}</span>
			</div>
			<div class="description">
				{{seller.data.description}}/预计{{seller.data.deliveryTime}}分钟送达
			</div>
			<div v-if="seller.data.supports" class="support">
				<span class="icon">满</span>
				<span class="text">{{seller.data.supports[0].description}}</span>
			</div>
		</div>
		<div class="support-content" @click="showDetail">
			<span class="count">{{seller.data.supports.length}}个</span>
			<i class="icon-keyboard_arrow">></i>
		</div>
	</div>
	<div class="bulletin-wrapper" @click="showDetail">
		<span class="bulletin-title">公告</span><span class="bulletin-text">{{seller.data.bulletin}}</span>
		<i class="icon-keyboard_arrow_right">></i>
		
	</div>
	<div class="background">
		<img :src="seller.data.avatar" width="100%" height="100%" />
	</div>
	<div v-show="detailShow" class="detail">
		<div class="detail-wrapper clearfix">
			<div class="detail-mian">
				<h2 class="name">{{seller.data.name}}</h2>
				<p class="pingf">评分{{seller.data.score}}分</p>
			</div>
		</div>
		<div class="detail-close" @click="showClose">
			<i>+</i>
		</div>
	</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				detailShow:false
			}
		},
		methods:{
			showDetail(){
				this.detailShow = true;
			},
			showClose(){
				this.detailShow =false;
			}
		},
		props:{
			seller:{
				type:''
			}
		}
	}
</script>
<style scoped>
	.header {
		position: relative;
		color: #fff;
		background: rgba(7,17,27,0.3);
		}
	.content-wrapper {
		position: relative;
		padding: 24px 12px 18px 24px;
		font-size: 0;
	}
	.Avatar {
		display: inline-block;
		vertical-align: top;
	}
	.Avatar img {
		border-radius: 2px;
	}
	.content {
		display: inline-block;
		margin-left:16px;
	}
	.support-content {
		position: absolute;
		right: 12px;
		bottom: 18px;
		padding: 0 8px;
		height: 24px;
		line-height: 24px;
		border-radius: 14px;
		background: rgba(0,0,0,0.2);
		text-align: center;
	}
	.count {
		display: inline-block;
		font-size: 10px;
	}
	.title {
		margin: 2px 0 6px 0;
	}
	.brand {
		width: 30px;
		height: 18px;
		background: red;
		text-align: center;
		line-height: 18px;
		display: inline-block;
		font-size: 10px;
		border-radius:2px;
		font-family: "微软雅黑";
	}
	.name {
		margin-left: 6px;
		font-size: 16px;
		font-weight: bold;
		line-height: 18px;
	}
	.description {
		margin-bottom: 10px;
		line-height: 12px;
		font-size: 12px;
	}
	.icon {
		display: inline-block;
		background: #fff;
		width: 14px;
		height: 14px;
		text-align: center;
		line-height: 14px;
		font-size: 8px;
		border-radius: 1px;
		color: red;
		margin-right: 4px;
	}
	.text {
		line-height: 12px;
		font-size: 12px;
	}
	.bulletin-wrapper {
		position: relative;
		height: 28px;
		line-height: 28px;
		padding: 0 22px 0 12px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		background: rgba(7,17,27,0.2);
	}
	.bulletin-title {
		background: #fff;
		display: inline-block;
		width: 30px;
		height: 14px;
		text-align: center;
		line-height: 14px;
		font-size: 6px;
		border-radius: 1px;
		color: red;
		vertical-align: top;
		margin-top: 7px;
	}
	.bulletin-text {
		display: inline-block;
		font-size: 10px;
		margin: 0 6px 0 4px;
		vertical-align: top;
	}
	.icon-keyboard_arrow {
		margin-left: 2px;
		font-size: 10px;
	}
	.icon-keyboard_arrow_right {
		position: absolute;
		width: 10px;
		font-size: 10px;
		right: 12px;
		padding-right: 2px;
	}
	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		filter: blur(10px);
	}
	.detail {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
		overflow: auto;
		background: rgba(7,17,27,0.8);
	}
	.detail-wrapper{
		min-height: 100%;
		width: 100%;
		
	}
	.detail-mian {
		margin-top: 64px;
		padding-bottom:64px;
	}
	.name,.pingf {
		line-height: 16px;
		text-align: center;
		font-size: 18px;
		font-weight: 700;
		margin-bottom: 15px;
	}
	.pingf {
		font-size: 16px;
	}
	.detail-close {
		position: relative;
		width: 32px;
		height: 32px;
		margin: -64px auto 0 auto;
		clear: both;
		font-size: 32px;
	}
</style>
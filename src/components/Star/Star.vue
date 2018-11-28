<template>
	<div class="star" :class="starType">
		<span class="star-item" v-for="itemClass in itemClasses" :class="itemClass" track-by="$index"></span>
		基督教的基督教的基督教记得寄
	</div>
</template>

<script>
	const LENGTH =5;
	const CLS_ON ='on';
	const CLS_HALF ='half';
	const CLS_OFF ='off';
	export default {
		props:{
			size:{
				type:''
			},
			score: {
				type:''
			}
		},
		computed:{
			starType () {
				console.log(this.size);
				console.log(this.score);
				return 'star-'+this.size;
			},
			itemClasses() {
				let result =[];
				let Scrore =Math.floor(this.score*2)/2;
				let hasDecimal=scrore%1 !==0;
				let integer=Math.floor(score);
				console.log(result);
				for (let i=0; i<lnteger; i++) {
					result.push(CLS_ON);
				}
				if (hasDecimal) {
					result.push(CLS_HALF);
				}
				while (result.length<LENGTH) {
					result.push(CLS_OFF)
				}
				return result;
				console.log(result);
			}
		}
	}
</script>

<style sass>
	.star {
		font-size: 0;
		.star-item {
			display: inline-block;
			background-repeat: no-repeat;
			&.star-48 {
				.star-item {
					width: 20px;
					height: 20px;
					margin-right: 22px;
					background-size: 20px 20px;
					&:last-child {
						margin-right: 0;
					}
					.on {
						background-image: url(star48_on@2x.png);
					}
					.half {
						background-image: url(star48_half@2x.png);
					}
					.off {
						background-image: url(star48_off@2x.png);
					}
				}
			}
		}
	}
	
	
	
</style>

<template>
	<div>
		<div class="card">
			<h2>Animate Borders Card</h2>
		</div>
	</div>
</template>

<script setup lang="ts">



</script>

<style scoped lang="scss">
.card {
	width: 190px;
	height: 250px;
	background-color: rgb(21, 54, 55);
	overflow: hidden;
	position: relative;
	display: flex;
	place-content: center;
	place-items: center;
	border-radius: 10px;
	overflow: hidden;

	&:hover {
		border-color: #669900;
	}

	&::before {
		content: '';
		position: absolute;
		width: 100px;
		background-image: linear-gradient(180deg, #669900, #006699, #3399cc, #ffcc00);
		height: 130%;
		animation: rotateColor 5s linear infinite;
		transition: all 0.5s linear;
	}

	&::after {
		content: '';
		position: absolute;
		inset: 5px;
		border-radius: 10px;
	}

	h2 {
		color: #fff;
		font-size: 1.5rem;
		text-align: center;
		z-index: 1;
	}

}

@keyframes rotateColor {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}

}
</style>
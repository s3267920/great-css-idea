<template>
	<div class="bg">
		<div class="card"></div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@property --a {
	/* must register --a to animate it */
	syntax: '<angle>';
	initial-value: 0deg;
	/* used only on pseudo, nowhere to be inherited, 
	 * better perf if set false, see 
	 * https://www.bram.us/2024/10/03/benchmarking-the-performance-of-css-property/ */
	inherits: false
}

.card {
	/* hide outer part of glow */
	overflow: hidden;
	/* needed for absolutely positioned pseudo */
	position: relative;
	/* adjust width as needed IF it's even necessary to set */
	width: Min(12.5em, 80vmin);
	/* adjust aspect-ratio OR height IF height not given by content */
	aspect-ratio: 1;
	/* round outer card corners */
	border-radius: .5em;

	/* text & layout styles below just for prettifying */
	place-self: center;
	place-content: center;
	padding: .5em;
	color: #ededed;
	font: clamp(1em, 2vw + 2vh, 2em) sans-serif;
	text-align: center;
	text-transform: uppercase;
	text-wrap: balance
}

.card::before {
	/* grid doesn't work for stacking when a stacked item is text node */
	position: absolute;
	/* place behind card content, so card text is selectable, etc */
	z-index: -1;
	/* best if inset is at least half the border-width with minus */
	inset: -1em;
	/* reserve space for border */
	border: solid 1.25em;
	border-image:
		/* adjust gradient as needed, I just used a random palette */
		conic-gradient(from var(--a), #669900, #99cc33, #ccee66,
			#006699, #3399cc, #990066, #cc3399,
			#ff6600, #ff9900, #ffcc00, #669900) 1;
	/* blur this pseudo */
	filter: blur(.75em);
	/* tweak animation duration as necessary */
	animation: a 4s linear infinite;
	/* needed so pseudo is displayed */
	content: ''
}

/* animate --a from its initial-value 0deg to 1turn */
@keyframes a {
	to {
		--a: 1turn
	}
}



.bg {
	background:
		/* just to illustrate card transparency */
		url(https://images.unsplash.com/photo-1729824346255-52a8f898fe84?w=1400) 50%/ cover #212121;
	/* darken image (multiplying its RGB channels with 
	 * those of background-color) for better text contrast */
	background-blend-mode: multiply
}
</style>
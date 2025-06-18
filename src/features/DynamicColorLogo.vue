<script setup lang="ts">
import { cn } from '@/utils'
import BaseLayout from '@/components/BaseLayout.vue'
</script>

<template>
	<BaseLayout :reference="'https://www.youtube.com/watch?v=wLPIwZdo0gM'">
		<div class="relative h-[calc(100vh-5rem)] w-full overflow-y-auto bg-white">
			<blockquote>
				<p class="bg-gray-200 text-cyan-950 p-4 font-bold">
					The color is getting <strong class=" font-extrabold text-red-700">subtracted</strong>. Using #000000 (black)
					means you're
					subtracting 0, so
					the element
					remains
					invisible (white). On the other hand, when you set it to #FFFFFF (white), you're subtracting 255 from the
					color
					value.
				</p>
			</blockquote>
			<h2 class="sticky top-0 z-10 logo text-5xl font-extrabold p-4 ">LOGO</h2>

			<section class="section">
				<p v-for="i in 10" :key="i" :class="cn('p-12 px-40', i % 2 === 0 ? 'bg-white' : 'bg-black text-white')">
					{{ i }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque. Quisquam, voluptatum
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit est ex accusamus odit. Quis, amet velit
					voluptatum
					fugiat ea maxime magnam cupiditate quae dolorem soluta. Repellendus, quo dicta neque debitis cumque ipsam
					temporibus accusantium iste odit ipsa! Assumenda dolorum velit id eius eum voluptas illo sed, quisquam quis at
					rerum quia tempore dolore dolor repudiandae maxime. Incidunt ipsa fuga illum error tempore ad id quia beatae.
					Hic,
					odio. Corrupti in expedita delectus facere enim aliquam excepturi, distinctio commodi nisi quam, deserunt aut.
					Hic
					aliquid laborum, neque quam, eum placeat iusto optio adipisci odio, eos voluptate suscipit deleniti voluptatem
					distinctio quidem?
				</p>

			</section>
		</div>
	</BaseLayout>
</template>


<style scoped>
.logo {
	color: #fff;
}

@media (width > 900px) {
	.logo {
		mix-blend-mode: difference;
	}
}
</style>
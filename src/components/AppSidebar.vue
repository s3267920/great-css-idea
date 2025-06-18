vue
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const linkOptions = ref([
	{ name: 'Home', path: '/' },
	{ name: 'Quick Flip Text', path: '/quickFlipText' },
	{ name: 'Animate Borders Card', path: '/animateBordersCard' },
	{ name: 'Inner Glow Card', path: '/innerGlowCard' },
	{ name: 'Dynamic Color Logo', path: '/dynamicColorLogo' },
	{ name: 'Glass Style', path: '/glassStyle' }

])
</script>
<template>
	<section class="fixed left-0 top-13 max-w-2xs h-full flex justify-start  p-4 bg-cyan-800 text-white">
		<nav class="w-full flex flex-col space-x-4 gap-4">
			<RouterLink v-for="link in linkOptions"
				class="text-white p-2 rounded uppercase transition-colors duration-300 hover:bg-cyan-700/50"
				:key="link.name"
				:active-class="'bg-cyan-950 hover:bg-cyan-950'"
				:exact-active-class="'bg-cyan-950'"
				:to="link.path">{{
					link.name }}
			</RouterLink>
		</nav>
	</section>
</template>

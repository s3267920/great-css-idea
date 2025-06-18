<template>
	<slot></slot>
	<div
		class="w-[calc(100vw-var(--container-2xs)+27px)]  p-4 fixed right-0 shadow-[0_-1px_2px] shadow-cyan-900/20 bottom-0 bg-white">
		Reference:
		<a :href="props.reference" class="text-teal-500 underline hover:text-teal-900 transition-colors"
			target="_blank">youtube video</a>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	reference?: string;
}>();

</script>

<style scoped></style>
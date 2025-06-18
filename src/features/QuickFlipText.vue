<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue';

</script>

<template>
	<BaseLayout reference="https://www.youtube.com/watch?v=9skKBYLt738">
		<div class="max-w-xl mx-auto p-4">
			<h2>Quick Flip Text</h2>
			<ul class="quick-flip-list" role='list'>
				<li class="quick-flip-animate" data-attr="Use Animate">
					<a href="#"><span aria-hidden="true">01</span>Home </a>
				</li>
				<li class="quick-flip-shadow" data-attr="Use Text Shadow">
					<a href="#"><span aria-hidden="true">02</span>About</a>
				</li>
				<li class="quick-flip" data-attr="Use Translate and Transform">
					<a href="#"><span aria-hidden="true">03</span>Contact</a>
				</li>

			</ul>
		</div>
	</BaseLayout>
</template>

<style scoped lang="scss">
.quick-flip-list {
	a {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	li {
		position: relative;

		&::after {
			width: 100%;
			display: flex;
			align-items: center;
			text-align: end;
			margin-left: 1rem;
			content: attr(data-attr);
			margin-right: 1rem;
			font-size: 0.75em;
			color: var(--gray);
		}
	}
}

.quick-flip-animate {
	display: flex;
	flex-direction: row;
	overflow-y: clip;


	&>* {
		display: block;
		animation: quick-flip-backward 0.5s;
	}

	span {
		display: block;
		transition: transform 0.5s;
	}

	&:hover,
	&:focus {
		&>* {
			animation: quick-flip 0.5s ease-in-out;
		}
	}
}

.quick-flip-shadow {
	display: flex;
	flex-direction: row;
	overflow-y: clip;
	text-shadow: 0 1lh 0 currentColor;

	&>* {
		display: block;
		transition: translate 0.5s;
	}

	&:hover,
	&:focus {
		&>* {
			translate: 0 -1lh;
			color: var(--teal);
		}
	}
}

.quick-flip {
	--transition-duration: 0.325s;
	--timing-function: cubic-bezier(0.66, 0, 0.34, 1);
	display: flex;
	flex-direction: row;
	overflow-y: clip;

	&>* {
		display: block;
		transition: transform var(--transition-duration) var(--timing-function),
			translate 0ms calc(var(--transition-duration) / 2);
		transition-timing-function: var(--timing-function);
	}


	&:is(:hover, :focus-within)>* {
		translate: 0 2lh;
		transform: translateY(-2lh);
		color: var(--teal);
	}

	&:focus-within {
		outline: 2px solid var(--teal);
		border-radius: 4px;

		>*:focus {
			outline: none;
		}
	}
}


@keyframes quick-flip {
	49% {
		translate: 0 -1lh;
	}

	50% {
		translate: 0 1lh;
	}

	100% {
		translate: 0 0;
	}
}

@layer prettying-up {
	h2 {
		font-weight: 900;
		color: var(--teal);
		text-align: center;
		font-size: clamp(1.5rem, 3vmin, 2rem);
		margin-block: 1rem;
	}

	ul:has(.quick-flip),
	ul:has(.quick-flip-animate) {
		--black: hsl(228, 14%, 7%);
		--white: hsl(220, 33%, 96%);
		--gray: hsl(220, 2%, 51%);
		--teal: hsl(173, 47%, 52%);
		margin: 0;
		padding-block: clamp(3rem, 5vmin, 3rem);
		padding-inline: clamp(5rem, 7vmin, 5rem);
		border-radius: 1rem;
		box-shadow: 0 0 1rem hsl(from var(--black) h s l / 0.4);

		list-style: none;
		text-transform: uppercase;
		font-weight: 900;
		background: var(--black);

		li {
			margin-block: 1rem;
		}

		a {
			text-decoration: none;
			color: var(--white);

			span {
				color: var(--gray);
			}
		}
	}
}
</style>
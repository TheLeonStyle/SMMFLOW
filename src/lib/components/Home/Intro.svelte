<script>
	import { onMount } from 'svelte';
	import { mobileWidth, authModalStore } from '$lib/stores';
	import { base } from '$app/paths';

	let screenWidth = undefined;
	const onResize = () => (screenWidth = window.innerWidth);

	onMount(() => {
		onResize();
	});
</script>

<svelte:window on:resize={onResize} />

<section class="intro" aria-label="Главный экран приветствия">
	<div class="intro__container">
		<div class="intro__content">
			<h1 class="intro__title">Продвижение во всех соцсетях за пару кликов</h1>
			<p class="intro__subtitle">
				Получайте подписчиков, лайки, репосты, просмотры, прослушивания и любую другую активность на
				свои профили в социальных сетях по самым низким ценами на рынке и в самые быстрые сроки!
			</p>

			{#if screenWidth < mobileWidth}
				<img
					src="/img/home/intro/image_mobile.svg"
					alt="Платформа для автоматизации SMM продвижения"
					loading="lazy"
					class="intro__image" />
			{/if}

			<button
				class="intro__button"
				aria-label="Начать продвижение в социальных сетях"
				onclick={() => authModalStore.open()}>
				Начать продвижение
			</button>
		</div>

		{#if screenWidth > mobileWidth}
			<img
				src="/img/home/intro/image.svg"
				alt="Платформа для автоматизации SMM продвижения"
				loading="eager"
				class="intro__image" />
		{/if}
	</div>
</section>

<style lang="scss">
	.intro {
		// max-height: calc(100dvh - 77px);
		// height: 100%;
		@media (min-height: em(550)) {
			max-height: calc(100dvh - 77px);
			height: 100%;
		}
		/* .intro__container */
		&__container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: rem(20);
			height: 100%;
		}
		/* .intro__content */
		&__content {
			max-width: rem(685);
			padding: rem(30) 0;

			@media (max-width: $tablet) {
				margin: 0 auto;
				text-align: center;
			}
		}
		/* .intro__title */
		&__title {
			// font-size: rem(46);
			@include adaptiveValue('font-size', 46, 28, 991, 767, 1);
			font-weight: 600;

			// margin-bottom: rem(25);
			@include adaptiveValue('margin-bottom', 25, 20, 991, 767, 1);
		}
		/* .intro__subtitle */
		&__subtitle {
			font-size: rem(20);
			@include adaptiveValue('font-size', 20, 16, 991, 479, 1);
			line-height: math.div(24, 20);

			// margin-bottom: rem(35);
			@include adaptiveValue('margin-bottom', 35, 20, 991, 767, 1);
		}
		/* .intro__button */
		&__button {
			color: #ffffff;
			font-size: rem(18);
			font-weight: 500;
			line-height: math.div(24, 18);

			border-radius: rem(6);
			background: #1d4ed8;
			padding: rem(18) rem(24);

			transition: background-color 0.3s ease 0s;

			&:hover {
				background-color: #173ead;
			}

			@media (max-width: $mobile) {
				font-size: rem(16);
				padding: rem(12) rem(24);
			}
		}
		/* .intro__image */
		&__image {
			display: block;
			@include adaptiveValue('width', 505, 300, 991, 479, 1);
			max-height: rem(500);
			height: auto;

			@media (max-width: $mobile) {
				max-height: rem(242);
				margin: 0 auto rem(25);
			}
		}
	}
</style>

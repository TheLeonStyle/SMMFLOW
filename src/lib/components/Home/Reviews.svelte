<script>
	import { base } from '$app/paths';
	import KeenSlider from 'keen-slider';
	import { onMount } from 'svelte';

	const reviews = [
		{
			avatarUrl: 'img/home/reviews/avatar.svg',
			name: 'Виктория',
			stars: 4,
			text: 'Купила подписчиков в Instagram через SMMFLOW, очень довольна результатом. Поступали плавно и незаметно, что важно для меня. '
		},
		{
			avatarUrl: 'img/home/reviews/avatar.svg',
			name: 'Александр',
			stars: 5,
			text: 'SMMFLOW помог мне продвинуть канал на YouTube. Заказывал подписчиков и лайки, все прошло быстро и качественно, всем рекомендую!'
		},
		{
			avatarUrl: 'img/home/reviews/avatar.svg',
			name: 'Анна',
			stars: 5,
			text: 'Я не ожидала, что продвижение в Instagram может быть таким простым. Заказала подписчиков через SMMFLOW и очень довольна результатом.'
		},
		{
			avatarUrl: 'img/home/reviews/avatar.svg',
			name: 'Дмитрий',
			stars: 4,
			text: 'Приобрел подписчиков и лайки на TikTok, результат превзошел все ожидания. Быстро, качественно, оправдало свои деньги. Рекомендую!'
		},
		{
			avatarUrl: 'img/home/reviews/avatar.svg',
			name: 'Ксения',
			stars: 5,
			text: 'Воспользовалась услугами SMMFLOW для продвижения своего TikTok аккаунта. Очень рада результату, получила множество новых подписчиков и просмотров. '
		}
	];

	let sliderRef = null;

	onMount(() => {
		const slider = new KeenSlider(sliderRef, {
			loop: true,
			mode: 'free-snap',
			breakpoints: {
				'(min-width: 767px)': {
					slides: { origin: 'center', perView: 2.3, spacing: 15 }
				},
				'(min-width: 991px)': {
					slides: { origin: 'center', perView: 3.4, spacing: 15 }
				},
				'(min-width: 1180px)': {
					slides: { origin: 'center', perView: 3.4, spacing: 30 }
				}
			},
			slides: {
				origin: 'center',
				perView: 1.3,
				spacing: 15
			}
		});
	});
</script>

<section class="reviews">
	<h2 class="reviews__title">Отзывы клиентов</h2>

	<ul bind:this={sliderRef} class="reviews__items">
		{#each reviews as review}
			<li class="keen-slider__slide reviews__item">
				<div class="reviews__info">
					<img
						src={review.avatarUrl}
						alt="Фото {review.name}"
						class="reviews__avatar"
						loading="lazy" />
					<p class="reviews__name">{review.name}</p>
					<div class="reviews__stars" aria-label="Рейтинг: {review.stars} из 5">
						{#each Array(review.stars) as _, index}
							<img
								src="/img/home/reviews/star.svg"
								alt="Звезда {index + 1}"
								class="reviews__star"
								loading="lazy" />
						{/each}
					</div>
				</div>

				<p class="reviews__text">{review.text}</p>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	.reviews {
		background-color: #ffffff;
		@include adaptiveValue('padding-top', 60, 40, 991, 767, 1);
		@include adaptiveValue('padding-bottom', 60, 40, 991, 767, 1);
		/* .reviews__title */
		&__title {
			@include adaptiveValue('font-size', 36, 22, 991, 479, 1);
			font-weight: 600;
			text-align: center;

			@include adaptiveValue('margin-bottom', 40, 30, 767, 479, 1);
		}
		/* .reviews__items */
		&__items {
			display: flex;
			// gap: rem(30);
			overflow: hidden;
		}
		/* .reviews__item */
		&__item {
			border-radius: rem(14);
			background-color: #f8f8f9;
			padding: rem(30) rem(30) rem(35) rem(30);
		}
		/* .reviews__info */
		&__info {
			display: grid;
			grid-template-columns: auto 1fr;
			gap: rem(5);

			@include adaptiveValue('margin-bottom', 20, 15, 767, 479);
		}
		/* .reviews__avatar */
		&__avatar {
			grid-column: 1/2;
			grid-row: 1/3;

			width: rem(50);
			height: rem(50);
			border-radius: 50%;
			object-fit: cover;
		}
		/* .reviews__name */
		&__name {
			grid-column: 2/3;
			grid-row: 1/2;
			align-self: end;

			color: #19191b;
			font-size: rem(18);
			font-weight: 500;
		}
		/* .reviews__stars */
		&__stars {
			grid-column: 2/3;
			grid-row: 2/3;

			display: flex;
			gap: rem(5);
		}
		/* .reviews__star */
		&__star {
			width: rem(14);
			height: rem(14);
		}
		/* .reviews__text */
		&__text {
			color: #5f5f66;
			@include adaptiveValue('font-size', 18, 16, 991, 479, 1);
			line-height: math.div(27, 18);
			user-select: none;
		}
	}
</style>

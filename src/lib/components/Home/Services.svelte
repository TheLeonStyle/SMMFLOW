<script>
	import { scale } from 'svelte/transition';
	import KeenSlider from 'keen-slider';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	const services = [
		{
			name: 'Instagram',
			icon: 'img/home/services/instagram.svg',
			lists: [
				{
					name: 'Подписчики',
					icon: '🙋‍♂️‍'
				},
				{
					name: 'Лайки',
					icon: '❤️'
				},
				{
					name: 'Просмотры',
					icon: '👀'
				},
				{
					name: 'Комментарии',
					icon: '💬'
				},
				{
					name: 'Зрители в прямой эфир',
					icon: '💁‍♀️'
				},
				{
					name: 'Статистика',
					icon: '📈'
				},
				{
					name: 'IGTV',
					icon: '🎬'
				},
				{
					name: 'Reels',
					icon: '💥'
				}
			]
		},
		{
			name: 'VK',
			icon: 'img/home/services/vk.svg',
			lists: [
				{
					name: 'Подписчики',
					icon: '🙋‍♂️‍'
				},
				{
					name: 'Лайки',
					icon: '❤️'
				},
				{
					name: 'Просмотры',
					icon: '👀'
				},
				{
					name: 'Комментарии',
					icon: '💬'
				},
				{
					name: 'Зрители в прямой эфир',
					icon: '💁‍♀️'
				},
				{
					name: 'Статистика',
					icon: '📈'
				},
				{
					name: 'ВК Клипы',
					icon: '💥'
				}
			]
		},
		{
			name: 'TikTok',
			icon: 'img/home/services/tiktok.svg',
			lists: [
				{
					name: 'Подписчики',
					icon: '🙋‍♂️‍'
				},
				{
					name: 'Лайки',
					icon: '❤️'
				},
				{
					name: 'Просмотры',
					icon: '👀'
				},
				{
					name: 'Комментарии',
					icon: '💬'
				},
				{
					name: 'Зрители в прямой эфир',
					icon: '💁‍♀️'
				},
				{
					name: 'Статистика',
					icon: '📈'
				}
			]
		},
		{
			name: 'Telegram',
			icon: 'img/home/services/telegram.svg',
			lists: [
				{
					name: 'Подписчики',
					icon: '🙋‍♂️‍'
				},
				{
					name: 'Реакций',
					icon: '❤️'
				},
				{
					name: 'Просмотры',
					icon: '👀'
				},
				{
					name: 'Комментарии',
					icon: '💬'
				},
				{
					name: 'Статистика',
					icon: '📈'
				}
			]
		},
		{
			name: 'YouTube',
			icon: 'img/home/services/youtube.svg',
			lists: [
				{
					name: 'Подписчики',
					icon: '🙋‍♂️‍'
				},
				{
					name: 'Лайки',
					icon: '❤️'
				},
				{
					name: 'Просмотры',
					icon: '👀'
				},
				{
					name: 'Комментарии',
					icon: '💬'
				},
				{
					name: 'Зрители в прямой эфир',
					icon: '💁‍♀️'
				},
				{
					name: 'Статистика',
					icon: '📈'
				},
				{
					name: 'Shorts',
					icon: '💥'
				}
			]
		},
		{
			name: 'Facebook',
			icon: 'img/home/services/facebook.svg',
			lists: [
				{
					name: 'Подписчики',
					icon: '🙋‍♂️‍'
				},
				{
					name: 'Лайки',
					icon: '❤️'
				},
				{
					name: 'Просмотры',
					icon: '👀'
				},
				{
					name: 'Комментарии',
					icon: '💬'
				},
				{
					name: 'Статистика',
					icon: '📈'
				}
			]
		},
		{
			name: 'Twitter',
			icon: 'img/home/services/twitter.svg',
			lists: [
				{
					name: 'Подписчики',
					icon: '🙋‍♂️‍'
				},
				{
					name: 'Лайки',
					icon: '❤️'
				},
				{
					name: 'Просмотры',
					icon: '👀'
				},
				{
					name: 'Комментарии',
					icon: '💬'
				},
				{
					name: 'Статистика',
					icon: '📈'
				}
			]
		},
		{
			name: 'Twitch',
			icon: 'img/home/services/twitch.svg',
			lists: [
				{
					name: 'Подписчики',
					icon: '🙋‍♂️‍'
				},
				{
					name: 'Лайки',
					icon: '❤️'
				},
				{
					name: 'Просмотры',
					icon: '👀'
				},
				{
					name: 'Комментарии',
					icon: '💬'
				},
				{
					name: 'Зрители в прямой эфир',
					icon: '💁‍♀️'
				},
				{
					name: 'Статистика',
					icon: '📈'
				},
				{
					name: 'Twitch Clips',
					icon: '💥'
				}
			]
		},
		{
			name: 'Rutube',
			icon: 'img/home/services/rutube.svg',
			lists: [
				{
					name: 'Подписчики',
					icon: '🙋‍♂️‍'
				},
				{
					name: 'Лайки',
					icon: '❤️'
				},
				{
					name: 'Просмотры',
					icon: '👀'
				},
				{
					name: 'Комментарии',
					icon: '💬'
				}
			]
		}
	];

	let servicesIndex = $state(0); // Индекс выбранного сервиса
	let sliderRef = null; // Ссылка на контейнер слайдера
	let slider = null; // Экземпляр слайдера
	let currentSlide = $state(0); // Текущий слайд

	const handleSlider = (index) => (servicesIndex = index); //  Функция для выбора сервиса

	// Функция для перехода к предыдущему слайду
	const slidePrev = () => {
		slider.prev();
	};

	// Функция для перехода к следующему слайду
	const slideNext = () => {
		slider.next();
	};

	// Инициализация слайдера после монтирования компонента
	onMount(() => {
		slider = new KeenSlider(sliderRef, {
			loop: true,
			mode: 'free-snap',
			breakpoints: {
				'(min-width: 767px)': {
					slides: { perView: 'auto' }
				}
			},
			slides: {
				origin: 'center',
				perView: 'auto'
			},
			slideChanged(slider) {
				// Присваиваем переменной currentSlide индекс текущего слайда и добавляем единицу чтобы кнопка слайдера была активной всегда после переключения слайдов
				// Если нужно, чтобы кнопка "Назад" скрывалась на первом слайде, следует убрать добавление единицы.
				currentSlide = slider.track.details.rel + 1;
			}
		});
	});
</script>

<section class="services" aria-labelledby="services-title">
	<div class="services__container">
		<h2 id="services-title" class="services__title">Быстрый заказ</h2>

		<nav bind:this={sliderRef} aria-label="Выбор социальной сети" class="services__slider">
			{#each services as social, index}
				<button
					onclick={() => handleSlider(index)}
					class="keen-slider__slide services__button"
					class:active={servicesIndex === index}
					aria-label={`Выбрать ${social.name}`}>
					<img
						src={social.icon}
						alt={social.name}
						class="services__icon services__icon--button"
						loading="lazy" />
					{social.name}
				</button>
			{/each}
			{#if currentSlide}
				<button
					onclick={slidePrev}
					class="services__navigation services__navigation--prev"
					aria-label="Предыдущий слайд"
					disabled={currentSlide === 0}>
					<svg
						viewBox="0 0 28.0137 14.7998"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true">
						<path
							d="M27.79 6.7L21.39 0.29C21 -0.11 20.39 -0.11 20 0.29C19.6 0.7 19.6 1.29 20 1.7L24.6 6.39L0 6.39L0 8.39L24.6 8.39L19.89 13.1C19.5 13.5 19.5 14.1 19.89 14.5C20.29 14.89 20.89 14.89 21.29 14.5L27.7 8.1C28.1 7.7 28.1 7.1 27.79 6.7Z"
							fill="#4A71E0"
							fill-opacity="1.000000"
							fill-rule="nonzero" />
					</svg>
				</button>
			{/if}
			<button
				onclick={slideNext}
				class="services__navigation services__navigation--next"
				aria-label="Следующий слайд">
				<svg
					viewBox="0 0 28.0137 14.7998"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true">
					<path
						d="M27.79 6.7L21.39 0.29C21 -0.11 20.39 -0.11 20 0.29C19.6 0.7 19.6 1.29 20 1.7L24.6 6.39L0 6.39L0 8.39L24.6 8.39L19.89 13.1C19.5 13.5 19.5 14.1 19.89 14.5C20.29 14.89 20.89 14.89 21.29 14.5L27.7 8.1C28.1 7.7 28.1 7.1 27.79 6.7Z"
						fill="#4A71E0"
						fill-opacity="1.000000"
						fill-rule="nonzero" />
				</svg>
			</button>
		</nav>

		<nav class="services__nav" aria-label="Услуги для выбранной социальной сети">
			{#each services[servicesIndex].lists as service, index (service.icon)}
				<a
					href="/"
					class="services__link"
					aria-label={`${service.name} для ${services[servicesIndex].name}`}
					transition:scale>
					<span class="services__icon services__icon--link" aria-hidden="true">
						{service.icon}‍
					</span>
					{service.name}
				</a>
			{/each}
		</nav>
	</div>
</section>

<style lang="scss">
	.services {
		// padding: rem(40) 0 rem(60);
		background-color: #0058ff;

		@include adaptiveValue('padding-top', 40, 30, 991, 767, 1);
		@include adaptiveValue('padding-bottom', 60, 30, 991, 767, 1);
		/* .services__container */
		&__container {
		}
		/* .services__title */
		&__title {
			color: #ffffff;
			@include adaptiveValue('font-size', 36, 22, 991, 479, 1);
			font-weight: 600;
			text-align: center;

			@include adaptiveValue('margin-bottom', 40, 30, 767, 479, 1);
		}
		/* .services__slider */
		&__slider {
			display: flex;
			// justify-content: space-between;
			// max-width: rem(1180);
			// width: rem(1180);
			// overflow-y: scroll;

			border-radius: rem(10);
			background-color: #ffffff;
			box-shadow: inset -70px 0px 10px 0px rgb(255, 255, 255);
			overflow: hidden;

			position: relative;
			@include adaptiveValue('margin-bottom', 20, 8, 767, 479, 1);
		}
		/* .services__button */
		&__button {
			display: flex;
			align-items: center;
			gap: rem(8);

			color: #1c1c1f;
			font-size: rem(18);
			font-weight: 500;
			line-height: math.div(16, 18);

			@include adaptiveValue('padding', 12, 5, 991, 479, 1);

			&.active,
			&:hover {
				background: rgba($color: #bbcaf366, $alpha: 0.4);
			}
		}
		/* .services__icon */
		&__icon {
			/* .services__icon--button */

			&--button {
				width: rem(32);
				height: rem(32);
			}
			/* .services__icon--link */
			&--link {
				@include adaptiveValue('font-size', 40, 30, 991, 479, 1);
			}
		}

		/* .services__navigation */
		&__navigation {
			height: 100%;
			width: rem(50);

			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			&--prev {
				// left: rem(13);
				left: 0;
				transform: translateY(-50%) rotate(-180deg);
			}
			&--next {
				// right: rem(13);
				right: 0;
			}

			svg {
				width: rem(28);
				height: rem(14);
			}

			&::before {
				content: '';
				display: block;
				height: 100%;
				width: rem(100);
				background: linear-gradient(to right, #ffffff 0%, #ffffff 50%, rgba(255, 255, 255, 0) 100%);

				position: absolute;
				left: 0;
				top: 0;
				z-index: -1;
			}

			&::after {
				content: '';
				display: block;
				height: 100%;
				width: rem(100);
				background: linear-gradient(to left, #ffffff 0%, #ffffff 50%, rgba(255, 255, 255, 0) 100%);

				position: absolute;
				right: 0;
				top: 0;
				z-index: -1;
			}
		}
		/* .services__nav */
		&__nav {
			// display: flex;
			// flex-wrap: wrap;
			display: grid;
			justify-content: space-between;
			grid-template-columns: repeat(auto-fill, minmax(calc(rem(1180) / 5 - rem(20)), 1fr));
			gap: rem(20);
			@include adaptiveValue('gap', 20, 8, 991, 479, 1);

			@media (max-width: $mobileSmall) {
				grid-template-columns: repeat(auto-fill, minmax(calc(33.33333% - rem(8)), 1fr));
			}
		}
		/* .services__link */
		&__link {
			// flex: 0 0 calc(20% - 20px);

			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: rem(12);

			color: inherit;
			font-size: rem(20);
			@include adaptiveValue('font-size', 20, 14, 991, 479, 1);
			font-weight: 500;
			line-height: math.div(16, 20);
			text-align: center;

			background-color: #ffffff;
			border-radius: rem(10);
			padding: rem(49) rem(15);
			transition:
				background-color 0.3s ease 0s,
				color 0.3s ease 0s;

			&:hover {
				color: #ffffff;
				background-color: #bbcaf366;
			}

			@media (max-width: $mobile) {
				padding: rem(30) rem(10);
			}
		}
	}
</style>

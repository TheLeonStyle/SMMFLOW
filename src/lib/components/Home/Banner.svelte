<script>

	import { base } from "$app/paths";

</script>
<section class="banner">
	<div class="banner__container">
		<div class="banner__content">
			<h2 class="banner__title">
				Скидки до 50% <span>в нашем телеграм-канале</span>
			</h2>
			<p class="banner__subtitle">Раздаем промокоды в Telegram каждую неделю</p>
			<button class="banner__button" aria-label="Получить промокод в Telegram">
				Получить промокод
			</button>
		</div>
		<img
			src="/img/home/banner/image.svg"
			alt="Графическое изображение баннера"
			class="banner__image"
			loading="lazy" />
	</div>
</section>

<style lang="scss">
	.banner {
		border-radius: rem(40);
		background-color: #0058ff;

		@include adaptiveValue('padding-top', 40, 0, 991, 479, 1);
		@include adaptiveValue('padding-bottom', 40, 0, 991, 479, 1);

		@media (max-width: $mobile) {
			border-radius: 0;
		}
		/* .banner__container */
		&__container {
			display: flex;
			align-items: center;
			// justify-content: space-around;
			justify-content: space-between;
			gap: rem(15);

			// padding: 0 rem(105);
			@include adaptiveValue('padding-left', 105, 10, 991, 479, 1);
			@include adaptiveValue('padding-right', 105, 10, 991, 479, 1);

			@media (max-width: $mobile) {
				position: relative;
				overflow: hidden;

				@include adaptiveValue('padding-top', 48, 24, 767, 479, 1);
				@include adaptiveValue('padding-bottom', 48, 24, 767, 479, 1);
			}
		}
		/* .banner__content */
		&__content {
			max-width: rem(500);
			@include adaptiveValue('max-width', 500, 240, 767, 479, 1);
		}
		/* .banner__title */
		&__title {
			color: #ffffff;
			// font-size: rem(36);
			@include adaptiveValue('font-size', 36, 18, 991, 479, 1);
			font-weight: 600;

			margin-bottom: rem(20);
			@include adaptiveValue('margin-bottom', 20, 18, 991, 479, 1);

			span {
				display: block;
			}
		}
		/* .banner__subtitle */
		&__subtitle {
			color: #ffffff;
			// font-size: rem(18);
			@include adaptiveValue('font-size', 18, 16, 991, 479, 1);

			// margin-bottom: rem(30);
			@include adaptiveValue('margin-bottom', 30, 18, 991, 479, 1);
		}
		/* .banner__button */
		&__button {
			color: #ffffff;
			// font-size: rem(18);
			@include adaptiveValue('font-size', 18, 16, 991, 479, 1);

			font-weight: 500;
			line-height: math.div(24, 18);

			border-radius: rem(6);
			background-color: #2c75ff;
			padding: rem(18) rem(24);

			transition: background-color 0.3s ease 0s;

			&:hover {
				background-color: rgba($color: #173ead, $alpha: 0.6);
			}

			@media (max-width: $mobile) {
				border-radius: rem(10);
				padding: rem(16) rem(24);
			}
		}
		/* .banner__image */
		&__image {
			// max-width: rem(300);
			@include adaptiveValue('max-width', 300, 248, 991, 479, 1);
			@include adaptiveValue('max-height', 393, 248, 991, 479, 1);
			// max-height: rem(393);
			width: 100%;
			height: 100%;

			@media (max-width: $mobile) {
				width: rem(248);
				height: rem(248);

				position: absolute;
				top: rem(30);
				right: rem(-65);
				// right: -20%;
				z-index: 1;
			}
		}
	}
</style>

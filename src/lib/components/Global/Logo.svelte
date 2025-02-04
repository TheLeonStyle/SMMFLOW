<script>
	import { base } from '$app/paths';
</script>

<a
	href="/"
	class="logo"
	title="SMMFLOW - переход на главную страницу"
	aria-label="SMMFLOW - главная страница">
	<img src="/img/header/logo.svg" alt="SMMFLOW - профессиональный SMM сервис" />
	smm
	<span>flow</span>
</a>

<style lang="scss">
	/* .logo */
	.logo {
		display: flex;
		align-items: baseline;

		color: inherit;
		font-family: 'Inter', sans-serif;
		@include adaptiveValue('font-size', 20, 16, 767, 479, 1);
		font-weight: 700;
		line-height: math.div(24, 20);
		text-transform: uppercase;

		img {
			margin-right: rem(5);

			@include adaptiveValue('width', 23, 14, 767, 479, 1);
			@include adaptiveValue('height', 23, 14, 767, 479, 1);
		}

		span {
			color: #0058ff;
		}
	}
</style>

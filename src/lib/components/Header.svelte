<script>
	import { authModalStore } from '$lib/stores';
	import { base } from '$app/paths';
	import Logo from './Global/Logo.svelte';

	// Состояние для управления видимостью бургер-меню
	let burgerActive = $state(false);

	// Функция для переключения состояния бургер-меню
	const handleBurger = () => {
		burgerActive = !burgerActive;
	};
</script>

<header class="header">
	<div class="header__container">
		<Logo />

		<nav class="header__menu" aria-label="Основная навигация">
			<a href="/" class="header__link" title="Услуги">Услуги</a>
			<a href="/" class="header__link" title="Преимущества">Преимущества</a>
			<a href="/" class="header__link" title="Отзывы">Отзывы</a>
		</nav>

		<div class="header__auth">
			<button
				class="header__login"
				type="button"
				aria-label="Войти в аккаунт"
				onclick={() => authModalStore.open()}>
				Войти
			</button>
			<button
				class="header__quick"
				type="button"
				aria-label="Сделать быстрый заказ"
				onclick={() => authModalStore.open()}>
				Быстрый заказ
			</button>
		</div>

		<button
			class="header__burger"
			type="button"
			aria-label={burgerActive ? 'Закрыть меню' : 'Открыть меню'}
			aria-expanded={burgerActive}
			class:active={burgerActive}
			onclick={handleBurger}>
			<span></span>
		</button>
	</div>
</header>

<style lang="scss">
	.header {
		background: #ffffff;
		box-shadow: 0px 4px 20px 0px rgba(232, 232, 232, 0.61);

		padding: rem(16) 0;

		@media (max-width: $mobile) {
			padding: rem(14) 0;
		}

		/* .header__container */
		&__container {
			display: flex;
			// justify-content: space-between;
			align-items: center;
			// gap: rem(38);
			@include adaptiveValue('gap', 38, 20, 991, 767, 1);

			@media (max-width: $mobile) {
				justify-content: space-between;
			}
		}
		/* .header__menu */
		&__menu {
			flex: 1;

			display: flex;
			align-items: center;
			gap: rem(20);

			@media (max-width: $mobile) {
				display: none;
			}
		}
		/* .header__link */
		&__link {
			color: inherit;
			line-height: math.div(24, 16);
		}
		/* .header__auth */
		&__auth {
			display: flex;
			align-items: center;
			gap: rem(30);

			@media (max-width: $mobile) {
				display: none;
			}
		}

		/* .header__login */
		&__login {
			color: #000000;
			line-height: math.div(24, 16);
		}

		/* .header__quick */
		&__quick {
			color: #ffffff;
			font-weight: 500;
			line-height: math.div(24, 16);

			border-radius: rem(6);
			background-color: #1d4ed8;
			padding: rem(12) rem(24);

			transition: background-color 0.3s ease 0s;

			&:hover {
				background-color: #173ead;
			}
		}

		/* .header__burger */
		&__burger {
			display: none;
			@include adaptiveValue('width', 30, 22, 767, 479, 1);
			@include adaptiveValue('height', 25, 19, 767, 479, 1);
			overflow: hidden;

			position: relative;

			@media (max-width: $mobile) {
				display: block;
			}

			span,
			&::before,
			&::after {
				content: '';
				display: inline-block;
				position: absolute;
				left: 0;
				width: 100%;
				height: rem(3);
				background-color: #0058ff;
				border-radius: rem(5);

				transition:
					transform 0.3s ease 0s,
					top 0.3s ease 0s,
					bottom 0.3s ease 0s,
					width 0.3s ease 0s;
			}

			&::before {
				top: 0;
			}

			span {
				top: 50%;
				transform: translateY(-50%);
			}

			&::after {
				bottom: 0;
			}

			&.active {
				&::before {
					top: 50%;
					transform: translateY(-50%) rotate(45deg);
				}

				span {
					width: rem(0);
				}

				&::after {
					bottom: 50%;
					transform: translateY(50%) rotate(-45deg);
				}
			}
		}
	}
</style>

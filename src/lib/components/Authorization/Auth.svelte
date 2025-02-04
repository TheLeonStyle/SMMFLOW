<script>
	import { isAuthModalOpen, authModalStore } from '$lib/stores';
	import { fly, scale } from 'svelte/transition';

	// Флаг для отображения сообщения валидации:
	// null - сообщение отсутствует, true - ошибка, false - успех
	let formError = $state(null);
	// Флаг, определяющий выбранный тип авторизации (true — вход, false — регистрация)
	let authTypeLogin = $state(true);

	// Обработчик переключения типа авторизации.
	// type - true для входа, false для регистрации
	const handleAuthType = (type) => {
		authTypeLogin = type;
		formError = null; // Сброс сообщения об ошибке при переключении формы
	};

	// Обработчик отправки формы авторизации/регистрации.
	function onSubmit(event) {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;

		// Простая валидация: если email короче 5 символов или пароль короче 3 символов – ошибка
		if (email.length < 5 || password.length < 3) {
			formError = true;
		} else {
			formError = false;
			// Закрытие модального окна через 2 секунды после успешной авторизации/регистрации
			setTimeout(() => authModalStore.close(), 2000);
		}
	}

	// Закрывает модальное окно при нажатий клавиши 'Escape'
	const handleKeydown = (event) => {
		if (event.key === 'Escape') {
			authModalStore.close();
		}
	};
</script>

<section
	class="auth"
	onclick={() => authModalStore.close()}
	onkeydown={handleKeydown}
	aria-labelledby="auth-title"
	aria-modal="true"
	role="dialog"
	tabindex="0"
	transition:fly>
	<div class="auth__modal" onclick={(event) => event.stopPropagation()} transition:scale>
		<div class="auth__wrapper">
			<button class="auth__close" aria-label="Закрыть окно" onclick={() => authModalStore.close()}>
			</button>
			<h4 id="auth-title" class="auth__title">
				{#if authTypeLogin}Вход в аккаунт{:else}Регистрация{/if}
			</h4>
			<form action="" class="auth__form" onsubmit={onSubmit}>
				<label for="login__email" class="auth__label">Ваш email-адрес</label>
				<input
					name="email"
					type="email"
					id="login__email"
					class="auth__input"
					placeholder="johndoe@google.com"
					autocomplete="off"
					required
					aria-required="true" />
				<label for="login__password" class="auth__label">Ваш пароль</label>
				<input
					name="password"
					type="password"
					id="login__password"
					class="auth__input"
					placeholder="Введите ваш пароль"
					autocomplete="off"
					required
					aria-required="true" />
				{#if authTypeLogin}
					<a href="/" class="auth__forgot">Забыли пароль?</a>
				{/if}
				{#if formError !== null}
					<p
						class="auth__action {formError ? 'auth__action--error' : 'auth__action--success'}"
						role="alert">
						{#if authTypeLogin}
							{#if formError}
								Неправильный email-адрес или пароль.
							{:else}
								Вы успешно вошли в свой аккаунт.
							{/if}
						{:else if formError}
							Такой email-адрес уже зарегистрирован.
						{:else}
							Вы успешно зарегистрировались.
						{/if}
					</p>
				{/if}

				<button type="submit" class="auth__submit">
					{#if authTypeLogin}
						Войти
					{:else}
						Зарегистрироваться
					{/if}
				</button>
			</form>

			<p class="auth__switch">
				{#if authTypeLogin}
					Нет аккаунта? <button onclick={() => handleAuthType(false)}>Зарегестрироваться</button>
				{:else}
					Есть аккаунт? <button onclick={() => handleAuthType(true)}>Войти</button>
				{/if}
			</p>
		</div>
	</div>
</section>

<style lang="scss">
	.auth {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100dvh;
		z-index: 10;

		background-color: rgba($color: #303030, $alpha: 0.6);
		/* .auth__modal */
		&__modal {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 10;

			background-color: #ffffff;
			@include adaptiveValue('border-radius', 6, 10, 767, 479, 1);
		}
		&__wrapper {
			@include adaptiveValue('padding-top', 60, 40, 991, 479, 1);
			@include adaptiveValue('padding-bottom', 60, 40, 991, 479, 1);
			@include adaptiveValue('padding-left', 80, 15, 991, 479, 1);
			@include adaptiveValue('padding-right', 80, 15, 991, 479, 1);

			position: relative;

			@media (max-height: em(480)) {
				height: 100dvh;
				overflow: auto;
			}
		}
		/* .auth__close */
		&__close {
			// width: rem(22);
			// height: rem(22);
			@include adaptiveValue('width', 22, 19, 767, 479, 1);
			@include adaptiveValue('height', 22, 19, 767, 479, 1);

			position: absolute;
			top: rem(20);
			right: rem(20);

			&:before,
			&:after {
				content: '';
				display: block;
				width: 100%;
				height: rem(2);
				background-color: #000000;

				position: absolute;
			}

			&:before {
				transform: translateY(50%) rotate(-45deg);
			}
			&:after {
				transform: translateY(50%) rotate(45deg);
			}
		}
		/* .auth__title */
		&__title {
			font-size: rem(20);
			font-weight: 500;
			text-align: center;

			margin-bottom: rem(40);
		}
		/* .auth__form */
		&__form {
			display: flex;
			flex-direction: column;

			width: rem(340);
		}
		/* .auth__label */
		&__label {
			font-weight: 500;

			margin-bottom: rem(10);
		}
		/* .auth__input */
		&__input {
			border: 1px solid #e3e3e3;
			border-radius: rem(6);

			padding: rem(10);

			&:not(:last-child) {
				margin-bottom: rem(20);
			}
			&:last-child {
				margin-bottom: rem(10);
			}
		}
		/* .auth__forgot */
		&__forgot {
			align-self: flex-start;
			color: #096dff;
			// margin-bottom: rem(20);
			@include adaptiveValue('margin-bottom', 20, 15, 767, 479, 1);
		}
		/* .auth__action */
		&__action {
			margin-bottom: rem(10);

			&--error {
				color: #dc3545;
			}
			&--success {
				color: #007c1b;
			}
		}
		/* .auth__submit */
		&__submit {
			color: #ffffff;
			font-size: inherit;
			font-weight: 500;
			line-height: math.div(24, 16);

			border-radius: rem(6);
			background-color: #1d4ed8;

			padding: rem(12) rem(30);
			margin-bottom: rem(30);

			transition: background-color 0.3s ease 0s;

			&:hover {
				background-color: #173ead;
			}
		}

		/* .auth__switch */
		&__switch {
			button {
				font-size: inherit;
				color: #096dff;
			}
		}
	}
</style>

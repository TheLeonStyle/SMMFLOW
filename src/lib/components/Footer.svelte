<script>
	import { base } from '$app/paths';
	import Logo from './Global/Logo.svelte';
</script>

<footer class="footer">
	<div class="footer__container">
		<div class="footer__about">
			<Logo />
			<p class="footer__description">
				SMMFLOW - сервис, где вы сможете приобрести качественное продвижение в социальных сетях по
				выгодным ценам.
			</p>
			<div class="footer__payments" aria-label="Способы оплаты">
				<img src="/img/icons/payments/mir.svg" alt="Оплата Мир" class="footer__payment" />
				<img src="/img/icons/payments/visa.svg" alt="Оплата Visa" class="footer__payment" />
				<img
					src="/img/icons/payments/mastercard.svg"
					alt="Оплата Mastercard"
					class="footer__payment" />
				<img src="/img/icons/payments/qiwi.svg" alt="Оплата Qiwi" class="footer__payment" />
			</div>
		</div>

		<ul class="footer__items" aria-label="Полезные ссылки">
			<li class="footer__item">
				<a href="/" class="footer__link">Каталог услуг</a>
				<a href="/" class="footer__link">Преимущества</a>
				<a href="/" class="footer__link">Отзывы</a>
			</li>
			<li class="footer__item">
				<a href="/legal/privacy-policy" class="footer__link">Политика конфиденциальности</a>
				<a href="/legal/terms-of-service" class="footer__link">Публичная оферта</a>
				<a href="/legal/privacy-policy" class="footer__link">Пользовательское соглашение</a>
				<a href="/legal/cookies" class="footer__link">Cookies</a>
				<a href="/" class="footer__link">Контакты</a>
			</li>
			<li class="footer__item">
				<p class="footer__suptitle">Нужна помощь?</p>
				<button class="footer__button" aria-label="Открыть онлайн-чат">Онлайн-чат</button>
				<a href="mailto:support@smmflow.net" class="footer__link footer__email">
					support@smmflow.net
				</a>
			</li>
		</ul>
	</div>
</footer>

<style lang="scss">
	.footer {
		background-color: #f8f8f9;

		// padding: rem(34) 0 rem(118);
		@include adaptiveValue('padding-top', 34, 20, 991, 767, 1);
		@include adaptiveValue('padding-bottom', 118, 20, 991, 479, 1);
		/* .footer__container */
		&__container {
			display: flex;
			gap: rem(60);
			@media (max-width: $mobile) {
				flex-direction: column;
				gap: rem(20);
			}
		}
		/* .footer__about */
		&__about {
			flex: 0 0 rem(333);

			display: flex;
			flex-direction: column;
			// gap: rem(22);
			@include adaptiveValue('gap', 22, 20, 767, 479, 1);

			@media (max-width: $mobile) {
				flex: 0 0 auto;
			}
		}

		/* .footer__description */
		&__description {
			color: rgba(0, 0, 0, 0.8);
			font-size: 14px;
			line-height: math.div(20, 14);
		}
		/* .footer__payments */
		&__payments {
			display: flex;
			gap: rem(4);
		}
		/* .footer__payment */
		&__payment {
		}
		/* .footer__items */
		&__items {
			flex: 1;

			display: flex;
			justify-content: space-between;

			flex-wrap: wrap-reverse;

			gap: rem(30);

			// padding-right: rem(40);
			@include adaptiveValue('padding-right', 40, 0, 991, 767, 1);

			@media (max-width: $mobileSmall) {
				flex-direction: column-reverse;
			}
		}
		/* .footer__item */
		&__item {
			display: flex;
			flex-direction: column;
			gap: rem(12);

			@media (max-width: $tablet) {
				&:first-child {
					order: 2;
				}
				&:last-child {
					order: 3;
				}
			}
		}
		/* .footer__link */
		&__link {
			align-self: start;
			color: inherit;
		}
		/* .footer__suptitle */
		&__suptitle {
			font-weight: 500;
		}
		/* .footer__button */
		&__button {
			align-self: start;

			border-radius: rem(4);
			background-color: #ebebeb;

			padding: rem(16) rem(26);
			// margin-bottom: rem(16);
		}
		/* .footer__email */
		&__email {
		}
	}
</style>

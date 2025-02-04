<script>
	// Массив вопросов с указанием колонки для отображения.
	const questions = [
		{
			id: 1,
			question: 'Почему цены на ваши услуги ниже, чем у конкурентов?',
			answer:
				'Мы предлагаем оптимальное соотношение цены и качества, за счёт оптимизации бизнес-процессов и прямых партнёрств с поставщиками.',
			column: 'left'
		},
		{
			id: 2,
			question: 'Как гарантируется качество услуг?',
			answer:
				'Мы используем проверенные методы контроля и постоянно улучшаем наши процессы, чтобы гарантировать высокий стандарт предоставляемых услуг.',
			column: 'left'
		},
		{
			id: 3,
			question: 'Как узнать статус моего заказа?',
			answer:
				'Статус заказа можно отслеживать в личном кабинете на нашем сайте в режиме реального времени.',
			column: 'left'
		},
		{
			id: 4,
			question: 'Сколько времени занимает выполнение заказа?',
			answer:
				'Срок выполнения зависит от объёма и сложности заказа. Обычно информация об этом указывается в описании услуги.',
			column: 'left'
		},
		{
			id: 5,
			question: 'Какие способы оплаты вы принимаете?',
			answer:
				'Мы принимаем оплату банковскими картами, через электронные кошельки и даже криптовалютой.',
			column: 'right'
		},
		{
			id: 6,
			question: 'Будет ли блокировка аккаунта после использования услуг?',
			answer:
				'Мы строго следуем этическим нормам и рекомендациям платформ, поэтому риск блокировки минимален.',
			column: 'right'
		},
		{
			id: 7,
			question: 'Как можно связаться с вами?',
			answer:
				'Связаться с нами можно через онлайн-чат на сайте или по телефону, указанному в разделе контактов.',
			column: 'right'
		},
		{
			id: 8,
			question: 'Что делать, если подписчики или лайки пропали?',
			answer:
				'Мы предоставляем гарантию возврата средств или повторное пополнение в случае технических сбоев.',
			column: 'right'
		}
	];

	const columns = ['left', 'right'];

	let questionsIndex = $state(null);

	const toggleQuestion = (id) => (questionsIndex = questionsIndex === id ? null : id);
</script>

<section class="questions">
	<div class="questions__container">
		<h2 class="questions__title">Частые вопросы</h2>

		<div class="questions__wrapper">
			{#each columns as column}
				<ul class="questions__items">
					{#each questions.filter((q) => q.column === column) as question}
						<li class="questions__item">
							<button
								class="questions__button"
								class:active={questionsIndex === question.id}
								aria-expanded={questionsIndex === question.id}
								onclick={() => toggleQuestion(question.id)}>
								<span class="questions__text">{question.question}</span>
								<svg
									class="questions__arrow"
									class:active={questionsIndex === question.id}
									viewBox="0 0 12.8276 7.82861"
									fill="none"
									aria-hidden="true">
									<defs />
									<path
										d="M1.41 1.41L6.17 6.41L11.41 1.41"
										stroke="#AAAAAA"
										stroke-opacity="1.000000"
										stroke-width="2.000000"
										stroke-linecap="square" />
								</svg>
							</button>
							<p class="questions__answer" class:active={questionsIndex === question.id}>
								{question.answer}
							</p>
						</li>
					{/each}
				</ul>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.questions {
		@include adaptiveValue('padding-top', 80, 40, 991, 767, 1);
		@include adaptiveValue('padding-bottom', 80, 60, 991, 767, 1);
		/* .questionss__container */
		&__container {
		}
		/* .questions__title */
		&__title {
			@include adaptiveValue('font-size', 36, 22, 991, 479, 1);
			font-weight: 600;
			text-align: center;

			@include adaptiveValue('margin-bottom', 40, 30, 767, 479, 1);
		}

		/* .questions__wrapper */
		&__wrapper {
			display: flex;
			@include adaptiveValue('gap', 30, 5, 991, 479, 1);

			@media (max-width: $mobile) {
				flex-direction: column;
			}
		}
		/* .questions__items */
		&__items {
			flex: 1 1 calc(50% - rem(30));
		}
		/* .questions__item */
		&__item {
			align-self: start;
			background-color: #f8f8f9;
			border-radius: rem(10);

			&:not(:last-child) {
				// margin-bottom: rem(15);
				@include adaptiveValue('margin-bottom', 15, 5, 991, 479, 1);
			}
		}
		/* .questions__button */
		&__button {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: rem(30);
			width: 100%;

			font-size: inherit;
			font-weight: 500;

			padding: rem(22) rem(15);

			&.active {
				border-bottom: rem(1) solid #e9e9e9;
			}

			@media (max-width: $mobile) {
				padding: rem(17) rem(14);
			}
		}
		/* .questions__text */
		&__text {
			text-align: left;
		}
		/* .questions__arrow */
		&__arrow {
			width: rem(10);
			height: rem(5);
			transition: transform 0.3s ease 0s;

			&.active {
				transform: rotate(180deg);
			}
		}
		/* .questions__answer */
		&__answer {
			max-height: 0;
			opacity: 0;
			overflow: hidden;

			transition:
				max-height 0.3s ease 0s,
				opacity 0.3s ease 0s,
				padding 0.3s ease 0s;

			&.active {
				padding: rem(22) rem(15);
				max-height: rem(200);
				opacity: 1;
			}
		}
	}
</style>

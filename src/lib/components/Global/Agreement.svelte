<script>
	let { items } = $props();
</script>

<section class="agreement">
	<div class="agreement__container">
		<div class="agreement__wrapper">
			<h3 class="agreement__main">{items.main}</h3>
			{#if items.submain}
				<p class="agreement__submain">{items.submain}</p>
			{/if}

			{#each items.agreements as agreements}
				{#if agreements.title}
					<h6 class="agreement__title">{agreements.title}</h6>
				{/if}

				{#each agreements.lists as agreement}
					<p class="agreement__subtitle">{agreement}</p>
				{/each}
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.agreement {
		@include adaptiveValue('padding-top', 50, 30, 991, 767, 1);
		@include adaptiveValue('padding-bottom', 80, 60, 991, 767, 1);
		/* .agreement__container */
		&__container {
		}
		/* .agreement__wrapper */
		&__wrapper {
			display: flex;
			flex-direction: column;
			gap: rem(20);

			max-width: rem(800);
		}

		/* .agreement__main */
		&__main {
			// font-size: rem(24);
			@include adaptiveValue('font-size', 24, 22, 991, 767, 1);

			font-weight: 600;
		}
		/* .agreement__submain */
		&__submain {
			font-size: rem(18);
			font-weight: 500;
			line-height: math.div(24, 18);
		}
		/* .agreement__title */
		&__title {
			font-weight: 500;
		}
		/* .agreement__subtitle */
		&__subtitle {
		}
	}
</style>

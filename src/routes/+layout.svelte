<script>
	let { children } = $props();

	import { isAuthModalOpen } from '$lib/stores';
	import '$lib/scss/styles.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Auth from '$lib/components/Authorization/Auth.svelte';
</script>

<Header />
<main class="main">
	{#if $isAuthModalOpen}
		<Auth />
	{/if}
	{@render children()}
</main>
<Footer />

<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="flex min-h-screen w-screen flex-col justify-between">
	<Header is_signin={data.is_signin} />
	<section class="flex grow flex-col items-center p-4">
		{@render children?.()}
	</section>
	<Footer />
</main>

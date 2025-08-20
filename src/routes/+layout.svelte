<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
		rel="stylesheet"
	/>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- NOTE: avatar libk in ver mode oonly -->
<main class="flex min-h-screen w-screen flex-col justify-between">
	<Header is_signin={data.data?.is_signin} avatar={`http://localhost:5173/uploads/${data.data?.user}.jpeg`}/>
	<section class="flex grow flex-col items-center p-4">
		{@render children?.()}
	</section>
	<Footer />
</main>

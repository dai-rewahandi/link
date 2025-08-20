<script>
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="flex items-center justify-center w-screen h-screen">
	{@render children()}
    <footer class="absolute bottom-2 left-2 ">
        <p><a href="/">Home</a> | <a href="/signup">signup</a> | &copy; dai 2025</p>
    </footer>
</main>

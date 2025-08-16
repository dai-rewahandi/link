<script>
	import { Navbar, NavBrand, Button } from 'flowbite-svelte';
	export let is_signin = false;
</script>

<Navbar>
	<NavBrand href="/" class="text-xl font-bold">LnkDB</NavBrand>
	{#if is_signin}
	<form>
		<Button type='submit' formaction='/signin/?/signout' formmethod='post' class='pointer-events-auto cursor-pointer'>SignOut</Button>
	</form>
	{:else}
		<Button href="/signup">SignUp / SignIn</Button>
	{/if}
</Navbar>

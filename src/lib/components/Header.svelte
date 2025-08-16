<script>
	import { Navbar, NavBrand, Button, Avatar } from 'flowbite-svelte';
	export let is_signin = false;
</script>

<Navbar>
	<NavBrand href="/" class="text-xl font-bold">LnkDB</NavBrand>
	{#if is_signin}
		<div class="flex items-center gap-4">
			<a href="/user">
				<Avatar src="https://dummyimage.com/600x600/000/fff" alt="Avatar" />
			</a>
			<form>
				<Button
					type="submit"
					formaction="/signin/?/signout"
					formmethod="post"
					class="pointer-events-auto cursor-pointer">SignOut</Button
				>
			</form>
		</div>
	{:else}
		<Button href="/signup">SignUp / SignIn</Button>
	{/if}
</Navbar>

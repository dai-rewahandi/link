<script>
	import { BadgeCheckSolid } from 'flowbite-svelte-icons';
	export let name, admin;
</script>

<div class="flex items-center gap-2">
	{#if admin === 'admin'}
		{name} <BadgeCheckSolid class="text-yellow-400" />
	{:else}
		{name}
	{/if}
</div>

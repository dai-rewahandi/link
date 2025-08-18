<script>
	import { Toast } from 'flowbite-svelte';
	import { CheckCircleSolid, CloseCircleSolid, FireOutline } from 'flowbite-svelte-icons';

	export let mode, message;
</script>

<div class="absolute top-0 mx-auto sm:top-auto sm:right-4 sm:bottom-4 sm:mx-0">
	{#if mode == 'success'}
		<Toast color="green">
			{#snippet icon()}
				<CheckCircleSolid class="h-5 w-5" />
				<span class="sr-only">Check icon</span>
			{/snippet}
			{message}
		</Toast>
	{:else if mode == 'error'}
		<Toast color="red">
			{#snippet icon()}
				<CloseCircleSolid class="h-5 w-5" />
				<span class="sr-only">Error icon</span>
			{/snippet}
			{message}
		</Toast>
	{:else if mode == 'warn'}
		<Toast color="yellow">
			{#snippet icon()}
				<FireOutline class="h-6 w-6" />
			{/snippet}
			{message}
		</Toast>
	{/if}
</div>

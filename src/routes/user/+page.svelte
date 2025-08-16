<script>
	import Toast from '$lib/components/Toast.svelte';
	import { Avatar, Button, Card, Input } from 'flowbite-svelte';
	let { data, form } = $props();
</script>

{#if form?.message}
	<Toast mode={form.mode} message={form.message} />
{/if}

<div class="container grid h-full w-full grow gap-4 md:grid-cols-2">
	<div class="flex flex-col gap-4">
		<Card class="flex items-center p-4 pb-4 md:p-6 xl:p-8">
			<Avatar size="lg" class="mb-2" src="https://dummyimage.com/1080x1080/000/fff" alt="Avatar" />
			<h5 class="text-lg font-semibold">{data.data?.name}</h5>
			<span class="font-light text-gray-600">{data.data?.email}</span>
		</Card>

		<Card class="p-4 md:p-6 xl:p-8">
			<form class="flex flex-col items-center gap-4">
				<h3 class="font-semibold">Add Link</h3>
				<Input name="link" id="link" placeholder="https://" value='https://' required />
				<Input name="name" id="name" placeholder="name" required />
				<Button class="btn w-full" type='submit' formaction='?/addlink' formmethod='post'>add</Button>
			</form>
		</Card>
	</div>
	<div class="bg-green-400"></div>
</div>

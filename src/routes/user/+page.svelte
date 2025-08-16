<script>
	import { Avatar, Card, Input } from 'flowbite-svelte';
	let { data } = $props();
</script>

<div class="container grid h-full w-full grow gap-4 md:grid-cols-2">
	<div>
		<Card class="flex items-center p-4 pb-4 md:p-6 xl:p-8">
			<Avatar size="lg" class="mb-2" src="https://dummyimage.com/1080x1080/000/fff" alt="Avatar" />
			<h5 class="text-lg font-semibold">{data.data?.name}</h5>
			<span class="font-light text-gray-600">{data.data?.email}</span>
		</Card>

		<Card>
			<form>
				<Input name='link' id='link' placeholder='https://' required/>
				<Input name='name' id='name' placeholder='name' required/>
			</form>
		</Card>
	</div>
	<div class="bg-green-400"></div>
</div>

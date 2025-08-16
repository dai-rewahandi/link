<script>
	import Toast from '$lib/components/Toast.svelte';
	import { Button, Card, Input, Label } from 'flowbite-svelte';
	import { EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';
	let show_password = $state(false);
	let { form } = $props();
</script>

{#if form?.message}
	<Toast mode={form.mode} message={form.message} />
{/if}

<div class="container flex h-full w-full grow items-center justify-center px-4">
	<Card class="p-4 md:p-6 xl:p-8">
		<form class="flex flex-col space-y-6">
			<h3 class="text-xl font-medium">User SignIn</h3>
			<Label>
				<span>Email</span>
				<Input name="email" id="email" placeholder="email" required />
			</Label>
			<Label>
				<span>Password</span>
				<Input
					type={show_password ? 'text' : 'password'}
					name="password"
					id="Password"
					placeholder="Password"
					class="pl-10"
					required
				>
					{#snippet left()}
						<button
							class="pointer-events-auto cursor-pointer"
							onclick={() => (show_password = !show_password)}
						>
							{#if show_password}
								<EyeOutline />
							{:else}
								<EyeSlashOutline />
							{/if}
						</button>
					{/snippet}
				</Input>
			</Label>
			<Button class="w-full pointer-events-auto cursor-pointer" formaction="?/push" formmethod="post" type='submit'>SignIn</Button>
		</form>
		<div class="text-md mt-4 font-medium text-gray-500 dark:text-gray-300">
			have account? <a class="text-primary-700 dark:text-primary-500" href="/signup">SignUp</a>
		</div>
	</Card>
</div>

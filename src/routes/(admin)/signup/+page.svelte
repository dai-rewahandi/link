<script>
	import Toast from '$lib/components/Toast.svelte';
	import { Card, Label, Input, Button } from 'flowbite-svelte';
	import { EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';
	let show_password = $state(false);
	let { data, form } = $props();
</script>

<div class="container flex h-full w-full grow flex-col items-center justify-center px-4">
	{#if form?.message}
		<Toast mode={form.mode} message={form.message} />
	{/if}
	<Card class="p-4 md:p-6 xl:p-8">
		<form class="flex flex-col space-y-6">
			<h3 class="text-xl font-semibold">User SignUp</h3>
			<Label>
				<span>Name</span>
				<Input type="text" id="name" name="name" placeholder="name" required />
			</Label>
			<Label>
				<span>Username</span>
				<Input type="text" id="username" name="username" placeholder="username" required />
			</Label>
			<Label>
				<span>Emai</span>
				<Input type="email" id="email" name="email" placeholder="email" required />
			</Label>
			<div>
				<Label>
					<span>Password</span>
					<Input
						type={show_password ? 'text' : 'password'}
						placeholder="password"
						name="password"
						id="password"
						class="pl-10"
					>
						{#snippet left()}
							<button onclick={() => (show_password = !show_password)} class="pointer-events-auto">
								{#if show_password}
									<EyeOutline class="h-6 w-6" />
								{:else}
									<EyeSlashOutline class="h-6 w-6" />
								{/if}
							</button>
						{/snippet}
					</Input>
				</Label>
			</div>
			<Button type="submit" class="w-full cursor-pointer" formaction="?/push" formmethod="post"
				>SignUp</Button
			>
		</form>
		<div class="text-md mt-4 font-medium text-gray-500 dark:text-gray-300">
			have account? <a class="text-primary-700 dark:text-primary-500" href="/signin">SignIn</a>
		</div>
	</Card>
</div>

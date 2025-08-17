<script>
	import { Quotes, Section, Social, Testimonial } from 'flowbite-svelte-blocks';
	let { data } = $props();
</script>

<div class="container flex grow items-center justify-center flex-col">
	<Section name="testimonial" class="w-[50%]">
		<Testimonial Icon={Quotes}>
			<blockquote>
				<p class="text-2xl font-medium text-gray-900 dark:text-white">
					"LInkDB helps you connect everything in one place. With a clean and modern design, you can
					showcase your social media, projects, and content effortlessly. Ideal for creators,
					entrepreneurs, and professionals."
				</p>
			</blockquote>
			{#snippet footer()}
				<img
					class="h-6 w-6 rounded-full"
					src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
					alt="michael profile"
				/>
				<div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
					<div class="pr-3 font-medium text-gray-900 dark:text-white">Dai Rewahandi</div>
					<div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at LinkDB</div>
				</div>
			{/snippet}
		</Testimonial>
	</Section>

	<div class="mt-8 flex items-center gap-6">
		<div class="flex flex-col items-center justify-center">
			<h4 class="mb-2 text-3xl font-extrabold md:text-4xl">{data.data.alllink}+</h4>
			<p class="font-light text-gray-500 dark:text-gray-400">links</p>
		</div>
		<div class="flex flex-col items-center justify-center">
			<h4 class="mb-2 text-3xl font-extrabold md:text-4xl">{data.data.alluser}+</h4>
			<p class="font-light text-gray-500 dark:text-gray-400">users</p>
		</div>
	</div>
</div>

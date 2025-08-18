<script>
	import Name from '$lib/components/Name.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import {
		Avatar,
		Button,
		Card,
		CloseButton,
		Fileupload,
		Input,
		Label,
		Select,
		Table,
		TableBody,
		TableBodyCell,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { TrashBinSolid } from 'flowbite-svelte-icons';
	let { data, form } = $props();
				let avatar = `/uploads/${data.data?.user_data.username}.jpeg`

	let brand = [
		{ value: 'google', name: 'Google' },
		{ value: 'youtube', name: 'YouTube' },
		{ value: 'facebook', name: 'Facebook' },
		{ value: 'instagram', name: 'Instagram' },
		{ value: 'whatsapp', name: 'WhatsApp' },
		{ value: 'tiktok', name: 'TikTok' },
		{ value: 'x', name: 'Twitter (X)' },
		{ value: 'reddit', name: 'Reddit' },
		{ value: 'pinterest', name: 'Pinterest' },
		{ value: 'snapchat', name: 'Snapchat' },
		{ value: 'telegram', name: 'Telegram' },
		{ value: 'wechat', name: 'WeChat' },
		{ value: 'discord', name: 'Discord' },
		{ value: 'github', name: 'GitHub' },
		{ value: 'stackoverflow', name: 'Stack Overflow' },
		{ value: 'medium', name: 'Medium' },
		{ value: 'twitch', name: 'Twitch' },
		{ value: 'vimeo', name: 'Vimeo' },
		{ value: 'wordpress', name: 'WordPress' },
		{ value: 'dribbble', name: 'Dribbble' },
		{ value: 'behance', name: 'Behance' },
		{ value: 'quora', name: 'Quora' },
		{ value: 'flickr', name: 'Flickr' },
		{ value: 'spotify', name: 'Spotify' },
		{ value: 'soundcloud', name: 'SoundCloud' },
		{ value: 'zoom', name: 'Zoom' },
		{ value: 'meet', name: 'Google Meet' },
		{ value: 'viber', name: 'Viber' },
		{ value: 'line', name: 'LINE' },
		{ value: 'kuaishou', name: 'Kuaishou' },
		{ value: 'tumblr', name: 'Tumblr' },
		{ value: 'bluesky', name: 'Bluesky' },
		{ value: 'mastodon', name: 'Mastodon' },
		{ value: 'foursquare', name: 'Foursquare' },
		{ value: 'yelp', name: 'Yelp' },
		{ value: 'craigslist', name: 'Craigslist' },
		{ value: 'ebay', name: 'eBay' },
		{ value: 'etsy', name: 'Etsy' },
		{ value: 'aliexpress', name: 'AliExpress' },
		{ value: 'mercadolibre', name: 'Mercado Libre' },
		{ value: 'rakuten', name: 'Rakuten' },
		{ value: 'shopify', name: 'Shopify' },
		{ value: 'walmart', name: 'Walmart' },
		{ value: 'target', name: 'Target' },
		{ value: 'taobao', name: 'Taobao' },
		{ value: 'flipkart', name: 'Flipkart' },
		{ value: 'shopee', name: 'Shopee' },
		{ value: 'bukalapak', name: 'Bukalapak' }
	];


let moddal_open = $state(false)
</script>

{#if form?.message}
	<Toast mode={form.mode} message={form.message} />
{/if}

<div class="container grid h-full w-full grow gap-4 md:grid-cols-2">
	<div class="flex flex-col gap-4">
		<Card class="flex items-center p-4 pb-4 md:p-6 xl:p-8">
			<Avatar size="lg" class="mb-2" src={avatar} alt="Avatar" />
			<h5 class="flex items-center gap-2 text-lg font-semibold">
				<Name name={data.data?.user_data.name} admin={data.data?.user_data.rule} />
			</h5>
			<span class="font-light text-gray-600">{data.data?.user_data.email}</span>
			<div class="mt-4 flex items-center gap-2">
				<Button class="btn" color="light" onclick={() => moddal_open = true }>Edit Profile</Button>
				<Button class="btn" href="u/{data.data?.user_data.username}">All Link</Button>
			</div>
		</Card>

		<Card class="p-4 md:p-6 xl:p-8">
			<form class="flex flex-col items-center gap-4">
				<h3 class="font-semibold">Add Link</h3>
				<Label class="w-full">
					<span>Link</span>
					<Input name="link" id="link" placeholder="https://" value="https://" required />
				</Label>
				<Label class="w-full">
					<span>Name</span>
					<Input name="name" id="name" placeholder="name" required />
				</Label>
				<Label class="w-full">
					<span>Brand</span>
					<Select items={brand} name="brand" id="brand"></Select>
				</Label>
				<Button
					class="btn w-full cursor-pointer"
					type="submit"
					formaction="?/addlink"
					formmethod="post">add</Button
				>
			</form>
		</Card>
	</div>
	<div>
		<Table>
			<TableHead>
				<TableHeadCell>name</TableHeadCell>
				<TableHeadCell>link</TableHeadCell>
				<TableHeadCell class="text-center">actions</TableHeadCell>
			</TableHead>
			{#if data.data?.user_link}
				{#each data.data?.user_link as link}
					<TableBody>
						<TableBodyCell class="flex items-center gap-2"
							><img src="https://cdn.simpleicons.org/{link.brand}" alt="Google" width="24" />
							{link.name}</TableBodyCell
						>
						<TableBodyCell>{link.link}</TableBodyCell>
						<TableBodyCell class="text-center">
							<form>
								<input class="hidden" type="number" name="id" id="id" value={link.id} />
								<button formaction="?/deletelink" formmethod="post" class="btn cursor-pointer">
									<TrashBinSolid />
								</button>
							</form>
						</TableBodyCell>
					</TableBody>
				{/each}
			{:else}
				<TableBody>
					<TableBodyCell>null</TableBodyCell>
					<TableBodyCell>null</TableBodyCell>
					<TableBodyCell>null</TableBodyCell>
				</TableBody>
			{/if}
		</Table>
	</div>
</div>

<div
	class="{ moddal_open ? 'flex' : 'hidden'} modal-edit-user absolute top-0 right-0 h-full w-full flex-col items-center justify-center backdrop-blur-sm transition-transform"
>
	<Card class="p-4 md:p-6 xl:p-8 relative">
		<button class="absolute right-2 top-2" onclick={() => moddal_open = false}><CloseButton /></button>
		<form class="flex flex-col gap-4" enctype="multipart/form-data">
			<Label>
				<span>Profile image</span>
				<Fileupload id="file_upload" name='file_upload'/>
			</Label>
			<Label>
				<span>Name</span>
				<Input
					type="text"
					id="name"
					name="name"
					placeholder="name"
					value={data.data?.user_data.name}
					required
				/>
			</Label>
			<Label>
				<span>Email</span>
				<Input
					class="opacity-60"
					type="email"
					id="email"
					name="email"
					placeholder="email"
					value={data.data?.user_data.email}
					required
					readonly
				/>
			</Label>
			<Label>
				<span>Username</span>
				<Input
					type="text"
					id="username"
					name="username"
					placeholder="username"
					value={data.data?.user_data.username}
					required
				/>
			</Label>
			<Button type="submit" formaction="?/edituser" formmethod="post" class="cursor-pointer"
				>Submit</Button
			>
		</form>
	</Card>
</div>

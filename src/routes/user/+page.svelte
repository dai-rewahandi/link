<script>
let { data } = $props()
$inspect(data)
</script>
<div class="container h-full w-full grow">
	<h2>hello {data.data?.name}</h2>
</div>

<script>
	import Button from '$lib/components/button/button.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button
	className="rounded"
	onclick={() => {
		alert('hello');
	}}>Click me</Button
>

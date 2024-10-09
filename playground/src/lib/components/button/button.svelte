<svelte:options runes={true} />

<script lang="ts">
	import { combine } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface buttonProps {
		children: Snippet;
		className?: String;
		onclick?: () => any;
		onkeydown?: () => any;
		onchange?: () => any;
		onkeyup?: () => any;
		onmouseenter?: () => any;
		onmouseleave?: () => any;
		onmousedown?: () => any;
		onmouseup?: () => any;
		onpointerdown?: () => any;
		onpointerup?: () => any;
	}
	let {
		children,
		className = '',
		onclick = () => {},
		onkeydown = () => {},
		onchange = () => {},
		onkeyup = () => {},
		onmouseenter = () => {},
		onmouseleave = () => {},
		onmousedown = () => {},
		onmouseup = () => {},
		onpointerdown = () => {},
		onpointerup = () => {},
		...everythingElse
	}: buttonProps = $props();

	console.log(everythingElse);
</script>

<button
	class={combine('w-40 border border-neutral-800 px-4 py-2', className)}
	{onclick}
	{onkeydown}
	{onchange}
	{onkeyup}
	{onmouseenter}
	{onmouseleave}
	{onmousedown}
	{onmouseup}
	{onpointerdown}
	{onpointerup}
>
	{@render children()}</button
>

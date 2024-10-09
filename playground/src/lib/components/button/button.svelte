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
		variant?: 'primary' | 'secondary' | 'tertiary';
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
		variant = 'primary',
		...everythingElse
	}: buttonProps = $props();

	console.log(everythingElse);
</script>

<button
	class={combine(
		'bg-bgControl border-border min-w-[96px] border px-[0.69rem] pb-[0.375rem] pt-1 text-center',
		className
	)}
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

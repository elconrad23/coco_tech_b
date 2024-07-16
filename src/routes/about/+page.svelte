
<script>
	import {transition_smoother} from "$lib/modules/data.js";
	import { fade, blur, fly, draw, slide, scale, crossfade } from 'svelte/transition';
	import {onMount} from "svelte";
	import {quintOut} from "svelte/easing";

	let mounted = false

	onMount(()=>mounted = true)
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="flex flex-col justify-center gap-10">
	{#if mounted}
		<div transition:blur={{ duration: 1000, delay: 1000, easing: quintOut }} class="mx-20 md:mx-64 {transition_smoother} cursor-pointer hover:scale-110 p-10 text-red-950 rounded-full flex flex-row justify-center">
			<div class="mx-auto font-bold text-2xl text-center">What do you want to discover?</div>
		</div>
	{/if}
	{#if mounted}
		<a transition:fly={{ duration: 1000, delay: 500, easing: quintOut }} href="/people" class="bg-red-950 hover:bg-red-600 mx-20 md:mx-64 {transition_smoother} cursor-pointer hover:scale-110 p-10 text-gray-100 rounded-full flex flex-row justify-center">
			<div class="mx-auto font-bold text-2xl text-center">Our Team</div>
		</a>
	{/if}
	{#if mounted}
		<a transition:slide={{ duration: 1000, delay: 300, easing: quintOut }} href="" class="bg-red-950 hover:bg-red-600 mx-20 md:mx-64 {transition_smoother} cursor-pointer hover:scale-110 p-10 text-gray-100 rounded-full flex flex-row justify-center">
			<div class="mx-auto font-bold text-2xl text-center">Executive Board</div>
		</a>
	{/if}
</div>

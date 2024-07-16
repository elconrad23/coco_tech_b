<script>
import {onMount} from "svelte";
import {quintOut} from "svelte/easing";
import { fade, blur, fly, draw, slide, scale, crossfade } from 'svelte/transition';
import {transition_smoother, website} from "$lib/modules/data.js";

let mounted = false

onMount(()=>mounted = true)
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-col justify-center gap-10">
	{#if mounted}
		<div transition:blur={{ duration: 1000, delay: 1000, easing: quintOut }} class="mx-20 md:mx-64 {transition_smoother} cursor-pointer hover:scale-110 p-10 rounded-full flex flex-row justify-center">
			<div class="{transition_smoother} mx-auto font-bold text-2xl text-center {website.dark_text} hover:{website.dark_text_hover}">Where are you travelling to?</div>
		</div>
	{/if}
	{#if mounted}
		<a transition:fly={{ duration: 1000, delay: 500, easing: quintOut }} href="/current_location" class="{website.dark_bg} hover:{website.dark_bg_hover} mx-20 md:mx-64 {transition_smoother} cursor-pointer hover:scale-110 p-10 text-gray-100 rounded-full flex flex-row justify-center">
			<div class="mx-auto font-bold text-2xl text-center">Escape Traffic</div>
		</a>
	{/if}
	{#if mounted}
		<a transition:slide={{ duration: 1000, delay: 300, easing: quintOut }} href="/people" class="{website.dark_bg} hover:{website.dark_bg_hover} mx-20 md:mx-64 {transition_smoother} cursor-pointer hover:scale-110 p-10 text-gray-100 rounded-full flex flex-row justify-center">
			<div class="mx-auto font-bold text-2xl text-center">Play Game</div>
		</a>
	{/if}
</div>
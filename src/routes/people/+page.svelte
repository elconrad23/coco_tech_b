<script>
import {transition_smoother,website} from "$lib/modules/data.js";
import { fade, blur, fly, draw, slide, scale, crossfade } from 'svelte/transition';
import {onMount} from "svelte";
import {quintOut} from "svelte/easing";

let mounted = false

onMount(()=>mounted = true)

let people = [
    {
        id: 1,
        name: "Waako Conrad",
        role: "C.E.O",
        image: "/people/conrad.jpeg",
        description: "Head of the game"
    },
    {
        id: 2,
        name: "Strauss",
        role: "Administrator",
        image: "/people/olga.jpg",
        description: "He built the game webapp."
    },
    {
        id: 3,
        name: "Echeru",
        role: "Programme Manager",
        image: "/people/rodney1.jpg",
        description: "Built and is maintaining the general webapp."
    },
    {
        id: 4,
        name: "Trevor",
        role: "Policy, Research & Advocacy",
        image: "/people/edwin.jpg",
        description: "API for maps between our info and maps images and directions."
    },
]
</script>

<svelte:head>
    <title>Our Team</title>
    <meta name="description" content="About this app" />
</svelte:head>

<div class="flex flex-col justify-center gap-10">
    <div class="mx-20 md:mx-64 {transition_smoother} cursor-pointer hover:scale-110 p-10 rounded-full flex flex-col justify-center gap-3">
        {#if mounted}
            <div transition:blur={{ duration: 1000, delay: 1000, easing: quintOut }} class="font-bold text-2xl text-center {website.dark_text} {transition_smoother}">Our Team</div>
        {/if}
        {#if mounted}
            <div transition:slide={{ duration: 1000, delay: 500, easing: quintOut }} class="h-0.5 w-44 md:w-96 {website.dark_bg} hover:{website.dark_bg_hover} rounded-full mx-auto"></div>
        {/if}
    </div>
</div>
<div class="flex flex-row flex-wrap justify-center gap-9 px-5">
    {#each people as person,index}
        {#if mounted}
            <a transition:fly={{ duration: 1000, delay: (index +1)*200, easing: quintOut }} href="/people/{person.id}" class="flex flex-col hover:grayscale hover:-translate-y-6 hover:scale-105 {transition_smoother} cursor-pointer">
                <img src="{person.image}" alt="{person.name} profile picture" class="{transition_smoother} h-80 w-40 md:w-60 object-cover rounded-tr-full rounded-br-full rounded-bl-full hover:rounded-tl-full drop-shadow-lg shadow-lg hover:shadow-inner" />
                <div class="flex flex-col flex-wrap mx-auto gap-1 w-40">
                    <div class="mt-2 text-lg font-semibold {website.dark_text} text-ellipsis overflow-hidden ... text-center">{person.name}</div>
                    <div class="text-ellipsis overflow-hidden ... text-center {website.dark_text}">{person.role}</div>
                    <!--<div class="p-2 bg-red-950 text-gray-200 rounded-full drop-shadow-lg shadow-lg shadow-red-950/40">View Profile</div>-->
                </div>
            </a>
        {/if}
    {/each}
</div>
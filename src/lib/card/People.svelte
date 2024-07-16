<script>
    import {slide} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
    let hovered = false

    export let person
</script>
<div class="flex flex-col" on:mouseover={() => {hovered = true}} on:mouseout={() => {hovered = false}} on:focus={() => {hovered = true}} on:focusout={() => {hovered = false}}>
    <a href="/people/{person.id}" class="{hovered ? 'rounded-br-none rounded-bl-lg grayscale' : 'rounded-br-3xl'} relative cursor-pointer transition-all ease-in-out delay-150 duration-300 drop-shadow-lg shadow-lg border mx-auto bg-red-950 w-60 space-x-4 h-80 bg-cover rounded-full bg-center" style="background-image: url({person.image})"></a>

    <a href="/people/{person.id}" transition:slide={{ duration: 1000, delay: 100, easing: quintOut }} class="text-sky-950 font-medium text-lg container text-center pt-3 mx-auto">{person.name}</a>
    <a href="/people/{person.id}" transition:slide={{ duration: 1000, delay: 100, easing: quintOut }} class="text-sky-900 font-normal italic text-lg container text-center pt-3 mx-auto">{person.role}</a>
    <a href="/people/{person.id}" transition:slide={{ duration: 1000, delay: 0, easing: quintOut }} type="button" class="mt-4 bg-blue-950 hover:bg-blue-800 text-center shadow-lg shadow-red-950/40 text-blue-100 rounded-full w-fit p-3 transition ease-in-out delay-150 duration-300 mx-auto">
        Read Profile
    </a>
</div>

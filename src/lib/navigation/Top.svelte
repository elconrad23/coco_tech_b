<script>
    import { page } from '$app/stores';
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";
    import {quintOut} from "svelte/easing";
    import { fade, blur, fly, draw, slide, scale, crossfade } from 'svelte/transition';
    import { activePageClass, activePageMobileClass, website, transition_smoother, website_links } from "$lib/modules/data.js";

    let mobileMenu = false, mounted = false, showMenu = false;

    let toggleMenu = () => {
        mobileMenu = !mobileMenu
        showMenu = !showMenu
    }, openMenu, closedMenu

    onMount(()=>{

        mounted = true

        openMenu = document.getElementById("openMenu");
        closedMenu = document.getElementById("closedMenu");
    })

    const openLink = url => {
        goto(url)
        toggleMenu()
    }
</script>


<!-- top red bar -->
{#if mounted}
    <div transition:slide={{ duration: 1000, delay: 0, easing: quintOut }} class="{website.dark_bg} h-10"></div>
{/if}

<!-- top navbar container -->
<div class="float-div h-32 -mt-5 bg-gray-100 bg-opacity-60 backdrop-blur-sm flex flex-row rounded-3xl">

    <div on:keyup={ () => toggleMenu() } on:click={ () => toggleMenu() } class="flex flex-row ml-5 md:ml-20 hover:scale-150 {transition_smoother} cursor-pointer" role="button" tabindex="-10">
        <!-- Hamburger button -->
        <button class="px-4 py-3 {website.dark_text} focus:outline-none focus:text-lime-950" id="menu-btn">
            {#if showMenu}
                <svg transition:slide={{ duration: 1000, delay: 1000, easing: quintOut, x: 100, y: 500 }} id="closedMenu" class="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
            {:else }
                <svg transition:slide={{ duration: 1000, delay: 1000, easing: quintOut, x: 100, y: 500 }} id="openMenu" class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
            {/if}
        </button>
        {#if mounted}
            <div transition:slide={{ duration: 1000, delay: 0, easing: quintOut, x: 100, y: 500 }} class="my-auto pl-3 {website.dark_text}">MENU</div>
        {/if}
    </div>

    <!-- logo -->
    {#if mounted}
        <a href="/" class="cursor-pointer mx-auto">
            <img transition:fly={{ duration: 1000, delay: 0, easing: quintOut, x: 100, y: 500 }}  src='/logo/14.png' alt='{website.name} logo' class="animate-pulse animate-ping hover:animate-none h-20 m-5 {transition_smoother} hover:scale-[1.2] hover:mt-16 cursor-pointer">
        </a>
    {/if}

    <div class="flex flex-row mr-5 md:mr-20">
        {#if mounted}
            <div transition:slide={{ duration: 1000, delay: 0, easing: quintOut, x: 100, y: 500 }} class="{transition_smoother} my-auto pl-3 hover:scale-150 {website.dark_text}">{website.fullname}</div>
        {/if}
    </div>
</div>
{#if showMenu}
    <div transition:slide={{ duration: 1000, delay: 0, easing: quintOut }} class="{showMenu ? '' : 'hidden'} fixed inset-0 {website.dark_bg} overflow-y-auto text-gray-100 z-50">
        <div class="container mx-auto py-4 flex flex-col">
            <button on:click={ ()=> toggleMenu() } class="animate-pulse hover:animate-none drop-shadow-md text-gray-100 {website.dark_bg_hover} opacity-80 block px-4 py-3 rounded-3xl">X --- Close Menu --- X</button>
            {#each website_links as link}
                <button on:click={ ()=> openLink(link.url) } class="{ activePageMobileClass($page.url.pathname, link.url) } block px-4 py-3 cursor-pointer {transition_smoother}">{link.name}</button>
            {/each}
        </div>
    </div>
{/if}

<style>
    header {
        view-transition-name: header;
    }
</style>
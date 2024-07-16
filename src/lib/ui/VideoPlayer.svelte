<script>
    import {transition_smoother} from "$lib/modules/data.js";
</script>

<div class="flex flex-row justify-center mx-auto">
    <span class="relative flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-800 opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-lime-800"></span></span>
    <video class="rounded-3xl hover:rounded-sm border border-lime-950 ring-offset-2 ring ring-offset-red-600 hover:ring-offset-red-100 ring-red-900 hover:ring-red-100 shadow-sm shadow-red-950 {transition_smoother} hover:scale-105" width="500" height="50" controls muted autoplay loop>
        <source src="/video/1.mp4" type="video/mp4">
    </video>
</div>
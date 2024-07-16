<script>
    import {transition_smoother, website} from "$lib/modules/data.js";

    let links = [
        {
            text: 'Membership',
            url: '#'
        },
        {
            text: 'Newsletter',
            url: '#'
        },
        {
            text: 'Our Team',
            url: '#'
        },
        {
            text: 'Donations',
            url: '#'
        }
    ]
</script>
<div class="mt-20 p-20 {website.dark_bg} flex flex-col">
    <div class="flex flex-col md:flex-row mx-auto">
        <div class="flex flex-col gap-3">
            {#each links as link}
                <a target="_blank" href="{link.url}" class="pl-5 text-gray-100 hover:bg-red-500 hover:text-red-950 {transition_smoother} hover:scale-110 p-1 rounded-full hover:font-bold">
                    {link.text}
                </a>
            {/each}
        </div>
        <img src="/logo/15.png" alt="{website.fullname} logo" class="w-48 h-48 md:mx-20 mt-10 md:mt-0 bg-contain">
        <div class="flex flex-col gap-3 mt-10 md:mt-0">
            <div class="pl-5 text-gray-100">
                Wandegeya, Makerere:
            </div>
            <div class="pl-5 text-gray-100">
                +256 (0) 771 339 113
            </div>
            <div class="pl-5 text-gray-100">
                info@greenstreets.com
            </div>
            <div class="effect jaques">
                <div class="buttons">
                    <a target="_blank" href="https://www.facebook.com" class="fb" title="Join us on Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a target="_blank" href="https://twitter.com" class="tw" title="Join us on Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a target="_blank" href="https://www.instagram.com" class="insta" title="Join us on Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="text-gray-100 pt-20 flex flex-row mx-auto">
        <div>copyright &copy; {new Date().getFullYear()} {website.fullname}</div>
    </div>
</div>
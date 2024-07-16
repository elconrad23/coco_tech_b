<script>
	import '../app.css'
    import Top from "$lib/navigation/Top.svelte";
    import Footer from "$lib/navigation/Footer.svelte";
</script>

<!-- top navbar -->
<Top/>

<!-- application body -->
<slot/>

<!-- footer -->
<Footer />
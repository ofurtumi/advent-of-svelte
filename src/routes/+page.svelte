<script>
	const day = new Date().getDate();
</script>

<main class="flex items-center flex-col mx-auto w-full h-full justify-center">
	<h1 class="text-2xl">Velkomin á advent of svelte</h1>
	<p>Hér mun ég reyna að klára eitt vandamál á dag til jóla</p>

	<div class="flex justify-center">
		<!-- eslint-disable-next-line -->
		{#each Array(day) as _, i}
			<h2><a href={`/day-${i + 1}`}>Dagur {i + 1}</a></h2>
		{/each}
	</div>
</main>

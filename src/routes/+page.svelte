<script>
	const day = new Date().getDate();
</script>

<main
	class="flex h-[90vh] flex-grow items-center mt-16 gap-8 flex-col mx-auto w-full justify-center"
>
	<div class="text-center">
		<h1 class="text-2xl">Velkomin á advent of svelte</h1>
		<p>Hér mun ég reyna að klára eitt vandamál á dag til jóla</p>
	</div>

	<div class="flex justify-center gap-8">
		<!-- eslint-disable-next-line -->
		{#each Array(day) as _, i}
			<h2><a href={`/day-${i + 1}`}>Dagur {i + 1}</a></h2>
		{/each}
	</div>
</main>

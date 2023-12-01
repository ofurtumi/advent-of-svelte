<script lang="ts">
	interface DayOneData {
		name: string;
		tally: number;
	}

	interface DayOneFilterdData {
		good: DayOneData[];
		bad: DayOneData[];
	}

	const get_data = async () => {
		const raw_data = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json');
		const json_data = await raw_data.json();

		let good: DayOneData[] = [];
		let bad: DayOneData[] = [];
		json_data.forEach((d: DayOneData) => {
			if (d.tally >= 0) {
				good.push(d);
			} else {
				bad.push(d);
			}
		});

		good.sort((a, b) => b.tally - a.tally);
		bad.sort((a, b) => b.tally - a.tally);

		const data: DayOneFilterdData = { good: good, bad: bad };
		return data;
	};

	const browser = typeof window !== 'undefined';
</script>

<main class="flex flex-col items-center">
	<h1 class="text-3xl my-4">Listi Sveinka</h1>

	<div class="flex gap-16 p-8 border-white border-2 rounded-lg">
		{#if browser}
			{#await get_data()}
				<h2>Næ í lista...</h2>
			{:then data}
				<div>
					<h2>Góðir krakkar</h2>
					<ul>
						{#each data.good as good}
							<li>
								<span>{good.name}</span>
								<span>{good.tally}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<h2>Vondir krakkar</h2>
					<ul>
						{#each data.bad as bad}
							<li>
								<span>{bad.name}</span>
								<span>{bad.tally}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/await}
		{/if}
	</div>
</main>

<style lang="postcss">
	li {
		display: flex;
		justify-content: space-between;
	}
</style>

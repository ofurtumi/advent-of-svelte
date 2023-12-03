<script lang="ts">
	import { onMount } from 'svelte';

	interface DayThreeData {
		name: string;
		weight: number;
	}

	$: gifts = [] as DayThreeData[];
	$: sleigh = [] as DayThreeData[];

	onMount(async () => {
		const raw_data = await fetch('https://advent.sveltesociety.dev/data/2023/day-three.json');
		gifts = await raw_data.json();
	});

	const browser = typeof window !== 'undefined';
</script>

<main class="flex flex-col items-center">
	<h1 class="text-3xl my-4">Listi Sveinka</h1>

	<div class="flex gap-16 p-8 border-white border-2 rounded-lg">
		{#if browser}
			<div>
				<h2>Gjafir</h2>
				<h3>~{Math.round(gifts.reduce((sum, cur) => sum + cur.weight, 0))}kg</h3>
				<ul class="flex flex-col gap-2">
					{#each gifts as w}
						<li class="grid grid-cols-2 gap-1">
							<span>{w.name}</span>
							<span class="justify-self-end">{w.weight}</span>
							<button
								class="border-2 rounded-xl p-2 hover:bg-red-dark col-span-2 transition"
								on:click={() => {
									sleigh = [...sleigh, w];
									gifts = gifts.filter((g) => g !== w);
								}}>Bæta á sleðann</button
							>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h2>Sleði</h2>
				<h3>~{Math.round(sleigh.reduce((sum, cur) => sum + cur.weight, 0))}kg</h3>
				<ul>
					{#each sleigh as s}
						<li class="grid grid-cols-2 gap-1">
							<span>{s.name}</span>
							<span class="justify-self-end">{s.weight}</span>
							<button
								class="border-2 rounded-xl p-2 hover:bg-red-dark col-span-2 transition"
								on:click={() => {
									gifts = [s, ...gifts];
									sleigh = sleigh.filter((g) => g !== s);
								}}>Taka af sleða</button
							>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</main>

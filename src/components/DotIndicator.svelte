<script>
  import { createEventDispatcher } from 'svelte';
  export let total = 15;
  export let current = 0;

  const dispatch = createEventDispatcher();

  function goToSlide(index) {
    dispatch('change', index);
  }
</script>

<div class="fixed bottom-6 right-6 flex space-x-2 z-50 bg-black/20 backdrop-blur-md px-4 py-3 rounded-full shadow-lg">
  {#each Array(total) as _, i}
    <button
      class="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none"
      class:bg-green-primary={current === i}
      class:scale-125={current === i}
      class:bg-white={current !== i}
      class:opacity-60={current !== i}
      class:hover:opacity-100={current !== i}
      on:click={() => goToSlide(i)}
      aria-label="Go to slide {i + 1}"
    ></button>
  {/each}
</div>

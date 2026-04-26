<script>
  import { createEventDispatcher } from 'svelte';
  export let currentSlide = 0;
  export let total = 15;

  const dispatch = createEventDispatcher();
</script>

{#if currentSlide > 0}
  <button 
    class="fixed left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-dark hover:bg-green-primary hover:text-white transition-all focus:outline-none group"
    on:click={() => dispatch('prev')}
    aria-label="Previous Slide"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
{/if}

{#if currentSlide < total - 1}
  <button 
    class="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-dark hover:bg-green-primary hover:text-white transition-all focus:outline-none group"
    on:click={() => dispatch('next')}
    aria-label="Next Slide"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
{/if}

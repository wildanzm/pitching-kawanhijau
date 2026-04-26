<script>
  import { fade } from 'svelte/transition';
  export let slides = [];
  export let currentSlide = 0;
</script>

<div class="relative w-full h-full overflow-hidden">
  {#each slides as Slide, index (index)}
    {#if index === currentSlide}
      <div 
        class="absolute inset-0 w-full h-full"
        in:fade={{ duration: 400, delay: 200 }}
        out:fade={{ duration: 300 }}
      >
        <Slide />
      </div>
    {/if}
  {/each}
</div>

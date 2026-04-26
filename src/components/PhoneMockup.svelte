<script>
  export let imagePath = '';
  export let label = '';
  export let textColor = 'text-white';
</script>

<div class="flex flex-col items-center">
  <div class="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden hover:scale-105 transition-transform duration-500 bg-white">
    {#if imagePath}
      <img src={imagePath} alt={label} class="w-full h-auto object-cover border border-gray-100/50 rounded-xl" />
    {:else}
      <div class="w-full aspect-[9/19] flex items-center justify-center text-gray-400 text-sm bg-gray-50 border border-gray-100 rounded-xl">No Image</div>
    {/if}
  </div>
  {#if label}
    <div class="mt-4 text-center px-4 py-2 bg-black/20 backdrop-blur-md rounded-full shadow-sm">
      <p class="text-sm font-medium {textColor}">{label}</p>
    </div>
  {/if}
</div>

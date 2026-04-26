<script>
  import { onMount } from 'svelte';
  export let value = '';
  export let label = '';
  export let color = 'text-green-primary';

  let visible = false;

  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 100);
  });
</script>

<div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-primary transform transition-all duration-700 {visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}">
  <h3 class="text-3xl font-bold {color} mb-2">{value}</h3>
  <p class="text-gray-text font-medium">{label}</p>
</div>

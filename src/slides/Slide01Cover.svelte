<script>
  import { fly } from 'svelte/transition';
</script>

<div class="min-h-full w-full flex flex-col items-center justify-center px-6 py-24 md:py-0 bg-gradient-to-br from-[#0f2a1a] via-[#1a3d2b] to-[#0d1f13] text-white relative">
  <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSI4NiI+CjxwYXRoIGQ9Ik00MyAzTDMgNDNsNDAgNDAgNDAtNDBMNDMgM3ptMCA4bDMyLTMyIDMyIDMyLTMyIDMyTDQzIDExeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvc3ZnPg==')]"></div>
  
  <div class="z-10 flex flex-col items-center max-w-4xl text-center" in:fly={{ y: 50, duration: 800, delay: 300 }}>

    <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-md">ATM Sampah</h1>
    <h2 class="text-xl md:text-3xl text-green-light italic font-medium mb-6">"Kelola Sampahmu, Hasilkan Nilainya"</h2>
    <p class="text-lg md:text-xl text-gray-300 font-light max-w-2xl mb-10 md:mb-16">
      Solusi Cerdas Pengelolaan Sampah Berbasis Teknologi
    </p>
    

  </div>
</div>

<script>
  import { fly, fade } from 'svelte/transition';
</script>

<div class="min-h-full w-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-16 md:py-20 bg-gray-bg relative overflow-hidden">
  
  <div class="w-full max-w-6xl mx-auto text-center mb-12 md:mb-20" in:fly={{ y: -30, duration: 600, delay: 200 }}>
    <h2 class="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-gray-900">Siapa yang Membutuhkan ATM Sampah?</h2>
    <p class="text-base md:text-xl text-gray-500 font-light">Target market dan pengguna utama ekosistem digital kami.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl" in:fade={{ duration: 800, delay: 400 }}>
    
    <div class="bg-white p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] shadow-sm md:shadow-md border-t-[10px] border-green-light hover:-translate-y-2 transition-transform duration-300">
      <div class="text-5xl md:text-7xl mb-4 md:mb-8">👤</div>
      <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Masyarakat Umum</h3>
      <ul class="space-y-3 md:space-y-5 text-gray-text text-sm md:text-lg">
        <li class="flex items-start">
          <span class="text-green-primary mr-3 md:mr-4 text-lg md:text-xl font-bold">•</span>
          Target rumah tangga aktif
        </li>
        <li class="flex items-start">
          <span class="text-green-primary mr-3 md:mr-4 text-lg md:text-xl font-bold">•</span>
          Insentif: poin & penghasilan tambahan
        </li>
      </ul>
    </div>

    <div class="bg-white p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] shadow-lg md:shadow-xl border-t-[10px] border-green-primary hover:-translate-y-2 transition-transform duration-300 transform scale-100 md:scale-105 z-10 relative">
      <div class="text-5xl md:text-7xl mb-4 md:mb-8">🏛️</div>
      <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Pemerintah Daerah</h3>
      <ul class="space-y-3 md:space-y-5 text-gray-text text-sm md:text-lg">
        <li class="flex items-start">
          <span class="text-green-primary mr-3 md:mr-4 text-lg md:text-xl font-bold">•</span>
          Solusi smart city pengelolaan sampah
        </li>
        <li class="flex items-start">
          <span class="text-green-primary mr-3 md:mr-4 text-lg md:text-xl font-bold">•</span>
          Data real-time kapasitas TPS
        </li>
      </ul>
    </div>

    <div class="bg-white p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] shadow-sm md:shadow-md border-t-[10px] border-[#81C784] hover:-translate-y-2 transition-transform duration-300">
      <div class="text-5xl md:text-7xl mb-4 md:mb-8">🌱</div>
      <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Komunitas & NGO</h3>
      <ul class="space-y-3 md:space-y-5 text-gray-text text-sm md:text-lg">
        <li class="flex items-start">
          <span class="text-green-primary mr-3 md:mr-4 text-lg md:text-xl font-bold">•</span>
          Platform donasi & aksi lingkungan
        </li>
        <li class="flex items-start">
          <span class="text-green-primary mr-3 md:mr-4 text-lg md:text-xl font-bold">•</span>
          Monitoring aktivitas komunitas
        </li>
      </ul>
    </div>

  </div>
</div>

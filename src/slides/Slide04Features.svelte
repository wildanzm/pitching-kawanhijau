<script>
  import { fade, fly } from 'svelte/transition';
</script>

<div class="min-h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16 md:py-20 bg-gray-bg relative">
  <div class="max-w-7xl mx-auto w-full space-y-8 md:space-y-12" in:fade={{ duration: 800 }}>
    
    <div class="text-center" in:fly={{ y: -30, duration: 600, delay: 200 }}>
      <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">Fitur Lengkap Dalam Satu Aplikasi</h2>
      <p class="text-lg md:text-xl text-gray-500 font-light">Semua yang dibutuhkan untuk revolusi pengelolaan sampah.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 pt-6">
      
      <div class="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-green-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group lg:col-span-2">
        <div class="text-3xl md:text-5xl mb-4 md:mb-6 bg-green-pale w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl md:rounded-2xl group-hover:bg-green-primary group-hover:text-white transition-colors duration-300 shadow-inner">📷</div>
        <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Scan Sampah</h3>
        <p class="text-sm md:text-base text-gray-text leading-relaxed">Identifikasi jenis sampah secara presisi via kamera AI.</p>
      </div>

      <div class="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-green-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group lg:col-span-2">
        <div class="text-3xl md:text-5xl mb-4 md:mb-6 bg-green-pale w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl md:rounded-2xl group-hover:bg-green-primary group-hover:text-white transition-colors duration-300 shadow-inner">💰</div>
        <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Jual Sampah</h3>
        <p class="text-sm md:text-base text-gray-text leading-relaxed">Layanan Jemput & Antar limbah rumah tangga ke mitra terdekat.</p>
      </div>

      <div class="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-green-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group lg:col-span-2">
        <div class="text-3xl md:text-5xl mb-4 md:mb-6 bg-green-pale w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl md:rounded-2xl group-hover:bg-green-primary group-hover:text-white transition-colors duration-300 shadow-inner">🗺️</div>
        <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Maps Cerdas</h3>
        <p class="text-sm md:text-base text-gray-text leading-relaxed">Navigasi real-time ke lokasi mitra & tempat sampah.</p>
      </div>

      <div class="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-green-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group lg:col-start-2 lg:col-span-2">
        <div class="text-3xl md:text-5xl mb-4 md:mb-6 bg-green-pale w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl md:rounded-2xl group-hover:bg-green-primary group-hover:text-white transition-colors duration-300 shadow-inner">🛒</div>
        <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Toko Daur Ulang</h3>
        <p class="text-sm md:text-base text-gray-text leading-relaxed">Marketplace eksklusif produk hasil karya daur ulang.</p>
      </div>

      <div class="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-green-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group lg:col-span-2">
        <div class="text-3xl md:text-5xl mb-4 md:mb-6 bg-green-pale w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl md:rounded-2xl group-hover:bg-green-primary group-hover:text-white transition-colors duration-300 shadow-inner">🏆</div>
        <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Sistem Poin</h3>
        <p class="text-sm md:text-base text-gray-text leading-relaxed">Sistem reward bernilai rupiah untuk setiap aksi peduli lingkungan.</p>
      </div>



    </div>
  </div>
</div>

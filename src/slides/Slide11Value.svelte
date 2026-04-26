<script>
  import { fly } from 'svelte/transition';
</script>

<div class="min-h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16 md:py-20 bg-gray-bg relative overflow-hidden">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center flex-1 max-w-7xl mx-auto w-full" in:fly={{ y: 30, duration: 800, delay: 200 }}>
    
    <div class="flex flex-col space-y-8 lg:space-y-10">
      <h2 class="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Mengapa Memilih <br/><span class="text-green-primary">ATM Sampah?</span></h2>
      
      <ul class="space-y-6">
        <li class="flex items-start bg-gray-50 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <span class="text-2xl md:text-3xl mr-3 md:mr-4 mt-0.5">✅</span>
          <p class="text-base md:text-xl text-gray-800 font-medium">Satu platform untuk semua kebutuhan pengelolaan sampah</p>
        </li>
        <li class="flex items-start bg-gray-50 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <span class="text-2xl md:text-3xl mr-3 md:mr-4 mt-0.5">✅</span>
          <p class="text-base md:text-xl text-gray-800 font-medium">Sistem reward yang meningkatkan motivasi pengguna</p>
        </li>
        <li class="flex items-start bg-gray-50 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <span class="text-2xl md:text-3xl mr-3 md:mr-4 mt-0.5">✅</span>
          <p class="text-base md:text-xl text-gray-800 font-medium">Integrasi peta & navigasi real-time</p>
        </li>
        <li class="flex items-start bg-gray-50 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <span class="text-2xl md:text-3xl mr-3 md:mr-4 mt-0.5">✅</span>
          <p class="text-base md:text-xl text-gray-800 font-medium">Dapat dikembangkan & disesuaikan (customizable)</p>
        </li>
      </ul>
    </div>

    <div class="flex flex-col flex-1 justify-center lg:pl-10 mt-8 lg:mt-0">
      <div class="bg-gradient-to-br from-green-primary to-green-light rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-8 lg:p-12 shadow-2xl text-white relative overflow-hidden">
        <div class="absolute -right-4 -top-4 md:-right-10 md:-top-10 text-white opacity-10 text-[6rem] md:text-[10rem] leading-none">🌍</div>
        
        <h3 class="text-2xl md:text-3xl font-bold mb-6 md:mb-10 relative z-10 border-b border-white/20 pb-2 md:pb-4">Potensi Dampak</h3>
        
        <ul class="space-y-6 md:space-y-10 relative z-10">
          <li class="flex items-start">
            <span class="text-4xl md:text-5xl mr-4 md:mr-6">👥</span>
            <div>
              <h4 class="text-xl md:text-2xl font-bold mb-1 md:mb-2">Target Pengguna Luas</h4>
              <p class="text-green-pale text-sm md:text-lg">Seluruh masyarakat pengguna KTP</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-4xl md:text-5xl mr-4 md:mr-6">📈</span>
            <div>
              <h4 class="text-xl md:text-2xl font-bold mb-1 md:mb-2">Ekonomi Mandiri</h4>
              <p class="text-green-pale text-sm md:text-lg">Membuka lapangan kerja baru (mitra pengepul)</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-4xl md:text-5xl mr-4 md:mr-6">🌍</span>
            <div>
              <h4 class="text-xl md:text-2xl font-bold mb-1 md:mb-2">Dampak Lingkungan</h4>
              <p class="text-green-pale text-sm md:text-lg">Berkontribusi pada pengurangan sampah nasional</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</div>

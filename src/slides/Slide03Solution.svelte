<script>
  import { fly } from 'svelte/transition';
  import PhoneMockup from '../components/PhoneMockup.svelte';
</script>

<div class="min-h-full w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-16 md:py-20 bg-green-pale/50 relative">
  <div class="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16" in:fly={{ y: 50, duration: 800, delay: 300 }}>
    
    <div class="flex-1 flex flex-col items-start space-y-6 md:space-y-8">
      <div class="inline-block px-4 py-1 md:px-5 md:py-2 bg-green-pale text-green-primary font-bold text-xs md:text-sm tracking-widest uppercase rounded-full border border-green-light/30">
        Solusi Kami
      </div>
      
      <h2 class="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
        Memperkenalkan <br/><span class="text-green-primary">ATM Sampah</span>
      </h2>
      
      <p class="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
        Platform digital terintegrasi yang menghubungkan masyarakat, mitra pengelola sampah, dan komunitas — dalam satu ekosistem berbasis mobile.
      </p>

      <div class="space-y-4 md:space-y-6 pt-4 w-full">
        <div class="flex items-center space-x-4 md:space-x-6 bg-gray-bg p-4 md:p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
          <div class="text-3xl md:text-4xl">♻️</div>
          <h4 class="text-lg md:text-xl font-bold text-gray-800">Monetisasi Sampah <br/><span class="font-normal text-sm md:text-base text-gray-text mt-1 block">Jual sampah, dapatkan poin & uang</span></h4>
        </div>
        <div class="flex items-center space-x-4 md:space-x-6 bg-gray-bg p-4 md:p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
          <div class="text-3xl md:text-4xl">🗺️</div>
          <h4 class="text-lg md:text-xl font-bold text-gray-800">Temukan Mitra <br/><span class="font-normal text-sm md:text-base text-gray-text mt-1 block">Lokasi mitra & tempat sampah terdekat</span></h4>
        </div>
        <div class="flex items-center space-x-4 md:space-x-6 bg-gray-bg p-4 md:p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
          <div class="text-3xl md:text-4xl">🌱</div>
          <h4 class="text-lg md:text-xl font-bold text-gray-800">Edukasi & Komunitas <br/><span class="font-normal text-sm md:text-base text-gray-text mt-1 block">Artikel, berita, dan aksi bersama</span></h4>
        </div>
      </div>
    </div>

    <div class="flex-1 flex justify-center mt-12 md:mt-0 relative">
      <!-- Decor background circle -->
      <div class="absolute rounded-full bg-green-pale w-[500px] h-[500px] -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl"></div>
      <PhoneMockup imagePath="src/assets/ui/Splash Screen.png" label="" />
    </div>

  </div>
</div>

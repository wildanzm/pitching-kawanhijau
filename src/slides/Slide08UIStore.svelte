<script>
  import { fly } from 'svelte/transition';
  import PhoneMockup from '../components/PhoneMockup.svelte';
</script>

<div class="min-h-full w-full flex flex-col justify-center items-center px-6 md:px-12 py-14 md:py-18 bg-green-pale/30 relative">
  <div class="absolute inset-0 bg-gray-50/50 pointer-events-none"></div>

  <div class="w-full max-w-6xl mx-auto text-center mb-2 md:mb-4 z-10" in:fly={{ y: -30, duration: 600, delay: 200 }}>
    <h2 class="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">Ekosistem Lengkap — <br/><span class="text-green-primary">Dari Sampah Jadi Rupiah</span></h2>
    <p class="text-lg md:text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">Selain menyetorkan sampah, kami juga menyediakan marketplace produk daur ulang dan ruang komunitas untuk menciptakan siklus ekonomi sirkular yang berkelanjutan.</p>
  </div>

  <div class="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-32 z-10" in:fly={{ y: 50, duration: 800, delay: 400 }}>
    <PhoneMockup 
      imagePath="/assets/ui/Market.png" 
      label="E-Commerce Produk Daur Ulang" 
      textColor="text-gray-800"
    />
    <PhoneMockup 
      imagePath="/assets/ui/Community and Share.png" 
      label="Komunitas & Program Donasi" 
      textColor="text-gray-800"
    />
  </div>

  <div class="mt-6 md:mt-8 text-center z-10" in:fly={{ y: 30, duration: 600, delay: 600 }}>
    <p class="text-green-primary font-medium text-base md:text-xl italic bg-green-pale inline-block px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-sm border border-green-light/20">"Sampah yang terjual dikonversi menjadi produk bernilai ekonomi tinggi"</p>
  </div>
</div>

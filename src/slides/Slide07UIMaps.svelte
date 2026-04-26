<script>
  import { fly } from 'svelte/transition';
  import PhoneMockup from '../components/PhoneMockup.svelte';
</script>

<div class="min-h-full w-full flex flex-col justify-center items-center px-6 md:px-12 py-16 md:py-20 bg-[#111827] text-white relative overflow-hidden">
  <div class="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-primary/20 via-[#111827]/80 to-[#111827] pointer-events-none"></div>

  <div class="w-full max-w-6xl mx-auto text-center mb-5 md:mb-8 z-10" in:fly={{ y: -30, duration: 600, delay: 200 }}>
    <h2 class="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Temukan Mitra & Tempat Sampah Terdekat</h2>
    <p class="text-lg md:text-2xl text-gray-300 font-light">Navigasi akurat dengan satu sentuhan.</p>
  </div>

  <div class="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-32 z-10" in:fly={{ y: 50, duration: 800, delay: 400 }}>
    <div class="scale-100 lg:scale-110 origin-top">
      <PhoneMockup 
        imagePath="/assets/ui/Get Nearby Partner.png" 
        label="Cari Mitra KawanHijau Terdekat" 
        textColor="text-white"
      />
    </div>
    <div class="scale-100 lg:scale-110 origin-top">
      <PhoneMockup 
        imagePath="/assets/ui/Get Way to Partner.png" 
        label="Arah Otomatis ke Lokasi Mitra" 
        textColor="text-white"
      />
    </div>
  </div>

</div>

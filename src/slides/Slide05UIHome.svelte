<script>
  import { fly } from 'svelte/transition';
  import PhoneMockup from '../components/PhoneMockup.svelte';
</script>

<div class="min-h-full w-full flex flex-col justify-center items-center px-6 md:px-12 py-14 md:py-18 bg-[#0f1f15] text-white relative">
  <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

  <div class="w-full max-w-6xl mx-auto text-center mb-5 md:mb-8 z-10" in:fly={{ y: -30, duration: 600, delay: 200 }}>
    <h2 class="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Antarmuka yang Intuitif & Bersih</h2>
    <p class="text-lg md:text-2xl text-green-primary font-light">Desain UI/UX modern untuk kemudahan pengguna di setiap langkah</p>
  </div>

  <div class="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-32 z-10" in:fly={{ y: 50, duration: 800, delay: 400 }}>
    <PhoneMockup 
      imagePath="/assets/ui/Home.png" 
      label="Dashboard Poin & Statistik Sampah" 
      textColor="text-white"
    />
    <PhoneMockup 
      imagePath="/assets/ui/On Boarding 1.png" 
      label="Onboarding yang Informatif" 
      textColor="text-white"
    />
  </div>

  <div class="mt-5 md:mt-25z text-center z-10 max-w-2xl px-6 md:px-8 py-3 md:py-4 bg-white/5 backdrop-blur-lg rounded-full border border-white/10" in:fly={{ y: 30, duration: 600, delay: 600 }}>
    <p class="text-gray-300 font-medium text-sm md:text-lg">Dirancang dengan prinsip Gestalt untuk pengalaman pengguna yang optimal</p>
  </div>
</div>

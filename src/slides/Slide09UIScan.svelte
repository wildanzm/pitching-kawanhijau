<script>
  import { fly } from 'svelte/transition';
  import PhoneMockup from '../components/PhoneMockup.svelte';
</script>

<div class="min-h-full w-full flex flex-col justify-center items-center px-6 md:px-12 py-14 md:py-18 bg-gray-bg relative">
  <div class="w-full max-w-6xl mx-auto text-center mb-5 md:mb-8" in:fly={{ y: -30, duration: 600, delay: 200 }}>
    <h2 class="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-gray-900">Teknologi Scan & Informasi Real-Time</h2>
    <p class="text-base md:text-xl text-gray-500 font-light max-w-2xl mx-auto">Memanfaatkan Computer Vision AI untuk identifikasi sampah dengan cepat dan sistem monitoring kapasitas tempat sampah mitra.</p>
  </div>

  <div class="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-32" in:fly={{ y: 50, duration: 800, delay: 400 }}>
    <PhoneMockup 
      imagePath="/assets/ui/Scan.png" 
      label="Scan & Identifikasi Jenis Sampah" 
      textColor="text-gray-800"
    />
    <PhoneMockup 
      imagePath="/assets/ui/Nearby Bin Information.png" 
      label="Kapasitas Tempat Sampah Real-Time" 
      textColor="text-gray-800"
    />
  </div>

  <div class="mt-4 md:mt-6 text-center" in:fly={{ y: 30, duration: 600, delay: 600 }}>
    <div class="inline-block px-6 md:px-10 py-2 md:py-4 bg-dark text-white shadow-xl rounded-full">
      <p class="font-semibold text-sm md:text-lg tracking-wider md:tracking-widest text-[#E8F5E9]">Organik &nbsp;•&nbsp; Non-Organik &nbsp;•&nbsp; B3</p>
    </div>
  </div>
</div>

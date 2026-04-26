<script>
  import { fly } from 'svelte/transition';
  import PhoneMockup from '../components/PhoneMockup.svelte';
</script>

<div class="min-h-full w-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-16 md:py-20 bg-gray-bg relative overflow-hidden">
  
  <div class="w-full max-w-6xl mx-auto text-center mb-8 md:mb-10" in:fly={{ y: -30, duration: 600, delay: 200 }}>
    <h2 class="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-gray-900">Jual Sampah Semudah 3 Langkah</h2>
    <p class="text-lg md:text-xl text-gray-500 font-light">Proses end-to-end yang efisien untuk user experience terbaik</p>
  </div>

  <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 lg:gap-12 w-full max-w-6xl mx-auto" in:fly={{ y: 50, duration: 800, delay: 400 }}>
    
    <div class="scale-[0.8] lg:scale-95 transform origin-center transition-transform hover:scale-[0.85] lg:hover:scale-100">
      <PhoneMockup imagePath="/assets/ui/Sell Trash.png" label="1. Pilih Layanan Jemput/Antar" textColor="text-gray-800" />
    </div>

    <div class="flex md:flex-col items-center justify-center text-green-primary text-4xl font-bold opacity-50 rotate-90 md:rotate-0 my-2 md:my-0">
      →
    </div>

    <div class="scale-[0.8] lg:scale-95 transform origin-center transition-transform hover:scale-[0.85] lg:hover:scale-100">
      <PhoneMockup imagePath="/assets/ui/Choose Category.png" label="2. Pilih Kategori Sampah" textColor="text-gray-800" />
    </div>

    <div class="flex md:flex-col items-center justify-center text-green-primary text-4xl font-bold opacity-50 rotate-90 md:rotate-0 my-2 md:my-0">
      →
    </div>

    <div class="scale-[0.8] lg:scale-95 transform origin-center transition-transform hover:scale-[0.85] lg:hover:scale-100">
      <PhoneMockup imagePath="/assets/ui/Transaction Finish.png" label="3. Transaksi Selesai" textColor="text-gray-800" />
    </div>
    
  </div>

  <div class="mt-8 text-center" in:fly={{ y: 30, duration: 600, delay: 600 }}>
    <div class="inline-block px-6 md:px-10 py-2 md:py-3 bg-white shadow-md border border-gray-100 rounded-full">
      <p class="text-green-primary font-semibold text-sm md:text-lg tracking-widest">PLASTIK &nbsp;•&nbsp; KERTAS &nbsp;•&nbsp; LOGAM &nbsp;•&nbsp; KAYU</p>
    </div>
  </div>
</div>

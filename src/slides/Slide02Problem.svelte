<script>
  import StatCard from '../components/StatCard.svelte';
  import { fly } from 'svelte/transition';
</script>

<div class="min-h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16 md:py-20 bg-gray-bg relative overflow-hidden">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center flex-1 max-w-7xl mx-auto w-full" in:fly={{ x: -50, duration: 800, delay: 300 }}>
    
    <div class="flex flex-col space-y-6 md:space-y-8">
      <div>
        <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">Masalah Sampah Indonesia <span class="text-orange-500">Belum Selesai</span></h2>
        <p class="text-gray-500 text-base font-medium">Data: SIPSN Kementerian LHK 2022</p>
      </div>

      <div class="grid grid-cols-1 gap-6 w-full max-w-md">
        <StatCard value="21,1 Juta Ton" label="Total timbunan sampah/tahun" color="text-orange-500" />
        <StatCard value="7,2 Juta Ton" label="Sampah belum terkelola (34,29%)" color="text-orange-500" />
        <StatCard value="304 Kab/Kota" label="Data dari SIPSN KLHK 2022" color="text-gray-800" />
      </div>
    </div>

    <div class="flex flex-col flex-1 justify-center relative z-10">
      <div class="bg-white rounded-[2rem] p-6 md:p-8 lg:p-12 shadow-xl border border-gray-100">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-10">4 Pain Points Utama</h3>
        <ul class="space-y-6 md:space-y-8">
          <li class="flex items-start">
            <span class="text-3xl md:text-5xl mr-4 md:mr-6 leading-none">🚯</span>
            <div>
              <h4 class="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Kurangnya kesadaran membuang sampah</h4>
              <p class="text-sm md:text-base text-gray-text leading-relaxed">Budaya masyarakat yang masih rendah terkait pengelolaan sampah.</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-3xl md:text-5xl mr-4 md:mr-6 leading-none">⚙️</span>
            <div>
              <h4 class="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Pengelolaan sampah tidak efisien</h4>
              <p class="text-sm md:text-base text-gray-text leading-relaxed">Dari hulu ke hilir proses distribusi masih belum optimal.</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-3xl md:text-5xl mr-4 md:mr-6 leading-none">📚</span>
            <div>
              <h4 class="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Minimnya edukasi lingkungan</h4>
              <p class="text-sm md:text-base text-gray-text leading-relaxed">Kurangnya wadah untuk belajar mengenai pelestarian alam.</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-3xl md:text-5xl mr-4 md:mr-6 leading-none">📈</span>
            <div>
              <h4 class="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Volume sampah terus meningkat</h4>
              <p class="text-sm md:text-base text-gray-text leading-relaxed">Pertumbuhan penduduk berbanding lurus dengan produksi limbah.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</div>

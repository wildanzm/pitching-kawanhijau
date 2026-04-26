<script>
  import { fly } from "svelte/transition";
</script>

<div
  class="min-h-full w-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-16 md:py-20 bg-gray-bg relative"
>
  <div
    class="w-full flex-1 max-w-5xl mx-auto"
    in:fly={{ y: 50, duration: 800, delay: 200 }}
  >
    <div
      class="bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border-2 md:border-4 border-green-primary overflow-hidden flex flex-col relative transform hover:-translate-y-2 transition-transform duration-500 w-full lg:scale-95 origin-center"
    >
      <!-- Highlight banner -->
      <div
        class="absolute top-0 right-0 bg-green-primary text-white font-bold py-2 px-4 md:py-3 md:px-10 rounded-bl-xl md:rounded-bl-2xl text-[10px] md:text-sm uppercase tracking-widest shadow-md"
      >
        ⭐ REKOMENDASI
      </div>

      <!-- Header -->
      <div
        class="px-6 md:px-12 py-8 md:py-10 pt-12 md:pt-12 text-center bg-gradient-to-b from-green-pale/60 to-white border-b border-gray-100"
      >
        <div
          class="inline-block px-4 py-1 md:px-5 md:py-2 bg-green-primary/10 text-green-primary font-bold text-[10px] md:text-xs tracking-widest uppercase rounded-full mb-2 md:mb-3 mt-4 md:mt-0"
        >
          Paket Full Scale
        </div>
        <h2
          class="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-primary to-green-light mb-2 md:mb-3"
        >
          GreenScale
        </h2>
        <p class="text-sm md:text-xl text-gray-600 font-medium">
          Android + iOS — Jangkauan Pengguna Maksimal
        </p>
      </div>

      <!-- Content Split -->
      <div class="flex flex-col lg:flex-row">
        <!-- Table -->
        <div
          class="px-4 md:px-10 py-4 md:py-6 flex-1 lg:border-r border-gray-100"
        >
          <table class="w-full text-left text-xs sm:text-base md:text-lg">
            <tbody>
              <tr class="border-b border-gray-100"
                ><td class="py-2 md:py-2.5 px-4 font-medium text-gray-800"
                  >Desain Tampilan Antarmuka Aplikasi</td
                ><td
                  class="py-2 md:py-2.5 px-4 text-right font-medium text-gray-600 whitespace-nowrap"
                  >Rp 2.500.000</td
                ></tr
              >
              <tr class="border-b border-gray-100"
                ><td class="py-2 md:py-2.5 px-4 font-bold text-green-primary"
                  >Pembuatan Aplikasi Warga (Android & iOS)</td
                ><td
                  class="py-2 md:py-2.5 px-4 text-right font-bold text-green-primary whitespace-nowrap"
                  >Rp 9.000.000</td
                ></tr
              >
              <tr class="border-b border-gray-100"
                ><td class="py-2 md:py-2.5 px-4 font-medium text-gray-800"
                  >Pembangunan Sistem Server & Database Pusat</td
                ><td
                  class="py-2 md:py-2.5 px-4 text-right font-medium text-gray-600 whitespace-nowrap"
                  >Rp 5.000.000</td
                ></tr
              >
              <tr class="border-b border-gray-100"
                ><td class="py-2 md:py-2.5 px-4 font-medium text-gray-800"
                  >Sistem Peta Cerdas & Kamera Pendeteksi</td
                ><td
                  class="py-2 md:py-2.5 px-4 text-right font-medium text-gray-600 whitespace-nowrap"
                  >Rp 3.000.000</td
                ></tr
              >
              <tr class="border-b border-gray-100"
                ><td class="py-2 md:py-2.5 px-4 font-medium text-gray-800"
                  >Sistem Poin Reward & Notifikasi Otomatis</td
                ><td
                  class="py-2 md:py-2.5 px-4 text-right font-medium text-gray-600 whitespace-nowrap"
                  >Rp 1.000.000</td
                ></tr
              >
              <tr class="border-b border-gray-100"
                ><td class="py-2 md:py-2.5 px-4 font-bold text-green-primary"
                  >Uji Coba & Pengecekan Kualitas Menyeluruh</td
                ><td
                  class="py-2 md:py-2.5 px-4 text-right font-bold text-green-primary whitespace-nowrap"
                  >Rp 2.000.000</td
                ></tr
              >
              <tr class="border-b border-gray-100"
                ><td class="py-2 md:py-2.5 px-4 font-bold text-green-primary"
                  >Pendaftaran Resmi ke Play Store & App Store</td
                ><td
                  class="py-2 md:py-2.5 px-4 text-right font-bold text-green-primary whitespace-nowrap"
                  >Rp 1.000.000</td
                ></tr
              >
              <tr class="border-b border-gray-200"
                ><td class="py-2 md:py-2.5 px-4 font-medium text-gray-800"
                  >Sertifikasi & Lisensi Akun Apple</td
                ><td
                  class="py-2 md:py-2.5 px-4 text-right font-medium text-gray-600 whitespace-nowrap"
                  >Rp 500.000</td
                ></tr
              >
            </tbody>
          </table>
        </div>

        <!-- Sidebar Summary -->
        <div
          class="px-6 md:px-10 py-6 bg-gray-50 flex flex-col justify-between w-full lg:w-[35%]"
        >
          <div>
            <h4
              class="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4 border-b border-gray-200 pb-2"
            >
              GreenCore vs GreenScale
            </h4>
            <ul class="space-y-3 md:space-y-4 text-gray-600">
              <li class="flex justify-between items-center">
                <span class="text-sm md:text-base">Platform</span>
                <span
                  class="text-sm md:text-base font-bold text-green-primary border-b border-green-light"
                  >2 Platform Native</span
                >
              </li>
              <li class="flex justify-between items-center">
                <span class="text-sm md:text-base">Market Size</span>
                <span
                  class="text-sm md:text-base font-bold text-green-primary border-b border-green-light"
                  >100% Mobile User</span
                >
              </li>
              <li class="flex justify-between items-center">
                <span class="text-sm md:text-base">Brand Trust</span>
                <span
                  class="text-sm md:text-base font-bold text-green-primary border-b border-green-light"
                  >Tinggi (iOS)</span
                >
              </li>
            </ul>
          </div>

          <div
            class="mt-8 text-center bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm border border-gray-100"
          >
            <h3
              class="text-xl md:text-2xl font-extrabold text-green-primary mb-3 md:mb-5"
            >
              Rp 24.000.000
            </h3>
            <button
              class="w-full bg-green-primary hover:bg-green-light text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-full transition-transform hover:scale-105 shadow-xl text-base md:text-lg mb-2 md:mb-3"
            >
              Pilih Paket Ini
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

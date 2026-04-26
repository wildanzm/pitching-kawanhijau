<script>
  import { fly } from "svelte/transition";
</script>

<div
  class="min-h-full w-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-16 md:py-20 bg-gray-bg relative"
>
  <div
    class="w-full max-w-4xl mx-auto"
    in:fly={{ y: 50, duration: 800, delay: 200 }}
  >
    <div
      class="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col relative w-full lg:scale-95 transform origin-center"
    >
      <!-- Header -->
      <div
        class="px-6 md:px-12 py-6 md:py-8 text-center bg-gray-50 border-b border-gray-100"
      >
        <div
          class="inline-block px-4 py-1 md:px-5 md:py-2 bg-gray-200 text-gray-600 font-bold text-[10px] md:text-xs tracking-widest uppercase rounded-full mb-3 md:mb-4"
        >
          Paket Basic
        </div>
        <h2
          class="text-3xl md:text-5xl font-extrabold text-green-primary mb-2 md:mb-3 tracking-tight"
        >
          GreenCore
        </h2>
        <p class="text-sm md:text-lg text-gray-500 font-medium">
          Android Only — Jangkauan Pengguna Android Indonesia
        </p>
      </div>

      <!-- Table -->
      <div class="px-4 md:px-12 py-4 md:py-6">
        <table class="w-full text-left text-xs sm:text-base md:text-lg">
          <tbody>
            <tr class="border-b border-gray-100">
              <td class="py-2 md:py-3 px-4 font-medium text-gray-800"
                >Desain Tampilan Antarmuka Aplikasi</td
              >
              <td
                class="py-2 md:py-3 px-4 text-right font-semibold text-gray-600 whitespace-nowrap"
                >Rp 2.500.000</td
              >
            </tr>
            <tr class="border-b border-gray-100 bg-gray-50">
              <td class="py-2 md:py-3 px-4 font-medium text-gray-800"
                >Pembuatan Aplikasi Warga (khusus Android)</td
              >
              <td
                class="py-2 md:py-3 px-4 text-right font-semibold text-gray-600 whitespace-nowrap"
                >Rp 6.500.000</td
              >
            </tr>
            <tr class="border-b border-gray-100">
              <td class="py-2 md:py-3 px-4 font-medium text-gray-800"
                >Pembangunan Sistem Server & Database Pusat</td
              >
              <td
                class="py-2 md:py-3 px-4 text-right font-semibold text-gray-600 whitespace-nowrap"
                >Rp 5.000.000</td
              >
            </tr>
            <tr class="border-b border-gray-100 bg-gray-50">
              <td class="py-2 md:py-3 px-4 font-medium text-gray-800"
                >Sistem Peta Cerdas & Navigasi</td
              >
              <td
                class="py-2 md:py-3 px-4 text-right font-semibold text-gray-600 whitespace-nowrap"
                >Rp 1.500.000</td
              >
            </tr>
            <tr class="border-b border-gray-100">
              <td class="py-2 md:py-3 px-4 font-medium text-gray-800"
                >Fitur Kamera Pendeteksi Jenis Sampah</td
              >
              <td
                class="py-2 md:py-3 px-4 text-right font-semibold text-gray-600 whitespace-nowrap"
                >Rp 1.500.000</td
              >
            </tr>
            <tr class="border-b border-gray-100 bg-gray-50">
              <td class="py-2 md:py-3 px-4 font-medium text-gray-800"
                >Sistem Poin Reward & Notifikasi Otomatis</td
              >
              <td
                class="py-2 md:py-3 px-4 text-right font-semibold text-gray-600 whitespace-nowrap"
                >Rp 1.000.000</td
              >
            </tr>
            <tr class="border-b border-gray-100">
              <td class="py-2 md:py-3 px-4 font-medium text-gray-800"
                >Uji Coba Sistem & Pengecekan Kualitas Standar</td
              >
              <td
                class="py-2 md:py-3 px-4 text-right font-semibold text-gray-600 whitespace-nowrap"
                >Rp 1.000.000</td
              >
            </tr>
            <tr class="border-b border-gray-200 bg-gray-50">
              <td class="py-2 md:py-3 px-4 font-medium text-gray-800"
                >Pendaftaran Resmi ke Google Play Store</td
              >
              <td
                class="py-2 md:py-3 px-4 text-right font-semibold text-gray-600 whitespace-nowrap"
                >Rp 500.000</td
              >
            </tr>
            <tr class="bg-green-pale">
              <td
                class="py-3 md:py-5 px-6 text-green-primary font-bold text-base md:text-2xl rounded-bl-xl"
                >TOTAL</td
              >
              <td
                class="py-3 md:py-5 px-6 text-right text-green-primary font-bold text-base md:text-2xl rounded-br-xl whitespace-nowrap"
                >Rp 19.500.000</td
              >
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Footer -->
      <div class="px-6 md:px-12 pb-6 md:pb-8 flex flex-col items-center">
        <button
          class="w-full sm:w-2/3 bg-dark hover:bg-gray-800 text-white font-bold py-3 md:py-4 px-8 md:px-16 rounded-full transition-transform hover:scale-105 shadow-xl text-base md:text-xl mb-3 md:mb-4"
        >
          Pilih Paket Ini
        </button>
      </div>
    </div>
  </div>
</div>

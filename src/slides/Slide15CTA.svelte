<script>
  import { fly } from "svelte/transition";
</script>

<div
  class="min-h-full w-full flex flex-col justify-between bg-gradient-to-br from-[#0f2a1a] via-[#1a3d2b] to-[#0d1f13] text-white relative"
>
  <div
    class="flex-1 flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-16 md:py-0"
  >
    <div
      class="max-w-4xl text-center z-10"
      in:fly={{ y: 50, duration: 800, delay: 300 }}
    >
      <div
        class="mb-6 md:mb-10 inline-block bg-white/5 p-4 md:p-6 rounded-full backdrop-blur-sm border border-white/10"
      >
        <svg
          class="w-16 h-16 md:w-20 md:h-20 text-green-primary drop-shadow-lg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          ></path>
        </svg>
      </div>

      <h1 class="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
        Siap Membangun <br /><span
          class="text-transparent bg-clip-text bg-gradient-to-r from-green-primary to-green-light"
          >ATM Sampah</span
        > Bersama Kami?
      </h1>
      <p
        class="text-lg md:text-2xl text-gray-300 font-light mb-10 md:mb-16 leading-relaxed max-w-2xl mx-auto"
      >
        Bergabunglah dalam gerakan teknologi peduli lingkungan.<br />Mari
        wujudkan Indonesia bersih bersama.
      </p>

      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-10 md:mb-20 w-full max-w-2xl mx-auto"
      >
        <a
          href="https://www.figma.com/proto/o7cMhA3C0qTyFoXqTR51al/KawanHijau?node-id=88-38&t=2kz8Su3WRBTaoeOo-1"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto bg-transparent border-2 border-white/50 hover:border-white text-white font-bold py-3 md:py-4 px-10 rounded-full transition-all hover:bg-white/10 text-base md:text-lg flex items-center justify-center"
        >
          Lihat Demo Prototype
        </a>
      </div>
    </div>
  </div>

  <div
    class="w-full py-6 text-center border-t border-white/10 bg-black/40 backdrop-blur-md"
    in:fly={{ y: 20, duration: 800, delay: 600 }}
  >
    <p class="text-gray-400 font-light tracking-wide text-sm">
      © 2026 ATM Sampah — Teknologi untuk Bumi yang Lebih Baik 🌿
    </p>
  </div>
</div>

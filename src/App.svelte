<script>
  import { onMount } from 'svelte';
  
  import SlideContainer from './components/SlideContainer.svelte';
  import DotIndicator from './components/DotIndicator.svelte';
  import NavButtons from './components/NavButtons.svelte';
  
  import Slide01Cover from './slides/Slide01Cover.svelte';
  import Slide02Problem from './slides/Slide02Problem.svelte';
  import Slide03Solution from './slides/Slide03Solution.svelte';
  import Slide04Features from './slides/Slide04Features.svelte';
  import Slide05UIHome from './slides/Slide05UIHome.svelte';
  import Slide06UISell from './slides/Slide06UISell.svelte';
  import Slide07UIMaps from './slides/Slide07UIMaps.svelte';
  import Slide08UIStore from './slides/Slide08UIStore.svelte';
  import Slide09UIScan from './slides/Slide09UIScan.svelte';
  import Slide11Value from './slides/Slide11Value.svelte';
  import Slide13GreenCore from './slides/Slide13GreenCore.svelte';
  import Slide14GreenScale from './slides/Slide14GreenScale.svelte';
  import Slide15CTA from './slides/Slide15CTA.svelte';

  const slides = [
    Slide01Cover, Slide02Problem, Slide03Solution, Slide04Features, Slide05UIHome,
    Slide06UISell, Slide07UIMaps, Slide08UIStore, Slide09UIScan,
    Slide11Value, Slide13GreenCore, Slide14GreenScale, Slide15CTA
  ];

  let currentSlide = 0;

  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
    }
  }

  function setSlide(index) {
    currentSlide = index;
  }

  onMount(() => {
    const handleKeydown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });
</script>

<main class="w-screen h-screen overflow-hidden relative bg-gray-bg">
  <SlideContainer {slides} {currentSlide} />
  
  <NavButtons 
    {currentSlide} 
    total={slides.length} 
    on:prev={prevSlide} 
    on:next={nextSlide} 
  />
  
  <DotIndicator 
    total={slides.length} 
    current={currentSlide} 
    on:change={(e) => setSlide(e.detail)} 
  />
</main>

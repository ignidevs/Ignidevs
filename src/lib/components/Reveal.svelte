<script lang="ts">
  import { onMount } from 'svelte';

  type Props = { delay?: number; children?: import('svelte').Snippet };
  let { delay = 0, children }: Props = $props();

  let el: HTMLDivElement | null = $state(null);
  let revealed = $state(false);

  onMount(() => {
    if (!el) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      revealed = true;
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => (revealed = true), delay);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<div class="reveal" class:revealed bind:this={el}>
  {@render children?.()}
</div>

<style>
  .reveal {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .revealed {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }
</style>

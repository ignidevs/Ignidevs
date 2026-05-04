<script lang="ts">
  import { onMount } from 'svelte';

  let el: HTMLDivElement | null = $state(null);
  let lit = $state(false);

  onMount(() => {
    if (!el) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      lit = true;
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            lit = true;
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<div class="ember-divider" bind:this={el} class:lit aria-hidden="true">
  <span class="line"></span>
  <span class="spark"></span>
  <span class="line"></span>
</div>

<style>
  .ember-divider {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: min(100%, 36rem);
    margin: var(--space-7) auto 0;
    padding: 0 var(--space-5);
  }

  .line {
    flex: 1;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--border-strong) 50%,
      transparent
    );
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 1.1s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .ember-divider .line:first-child {
    transform-origin: right;
  }

  .ember-divider .line:last-child {
    transform-origin: left;
  }

  .spark {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow:
      0 0 0 0 rgba(255, 106, 31, 0.6),
      0 0 24px 6px rgba(255, 106, 31, 0);
    transform: scale(0);
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s,
      box-shadow 1.6s ease-out 0.4s;
  }

  .lit .line {
    transform: scaleX(1);
  }

  .lit .spark {
    transform: scale(1);
    box-shadow:
      0 0 0 0 rgba(255, 106, 31, 0),
      0 0 60px 12px rgba(255, 106, 31, 0.45);
    animation: ember-pulse 3.2s ease-in-out 1.5s infinite;
  }

  @keyframes ember-pulse {
    0%, 100% {
      box-shadow: 0 0 30px 6px rgba(255, 106, 31, 0.35);
    }
    50% {
      box-shadow: 0 0 60px 12px rgba(255, 106, 31, 0.55);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .line,
    .spark {
      transition: none !important;
      animation: none !important;
      transform: none !important;
    }
    .ember-divider .line {
      transform: scaleX(1) !important;
    }
    .spark {
      transform: scale(1) !important;
    }
  }
</style>

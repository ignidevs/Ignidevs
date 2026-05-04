<script lang="ts">
  import { onMount } from 'svelte';

  let el: HTMLDivElement | null = $state(null);
  let phase: 'idle' | 'pre' | 'lit' = $state('idle');

  onMount(() => {
    if (!el) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    phase = 'pre';
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            phase = 'lit';
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

<div
  class="ember-divider"
  class:pre={phase === 'pre'}
  class:lit={phase === 'lit'}
  bind:this={el}
  aria-hidden="true"
>
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
  }

  .spark {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 30px 6px rgba(255, 106, 31, 0.35);
  }

  .pre .line {
    transform: scaleX(0);
    transition: transform 1.1s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .pre .line:first-child {
    transform-origin: right;
  }

  .pre .line:last-child {
    transform-origin: left;
  }

  .pre .spark {
    transform: scale(0);
    box-shadow: 0 0 0 0 rgba(255, 106, 31, 0);
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s,
      box-shadow 1.6s ease-out 0.4s;
  }

  .lit .line {
    transform: scaleX(1);
    transition: transform 1.1s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .pre.lit .line:first-child {
    transform-origin: right;
  }

  .pre.lit .line:last-child {
    transform-origin: left;
  }

  .lit .spark {
    transform: scale(1);
    box-shadow:
      0 0 0 0 rgba(255, 106, 31, 0),
      0 0 60px 12px rgba(255, 106, 31, 0.45);
    animation: ember-pulse 3.2s ease-in-out 1.5s infinite;
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s,
      box-shadow 1.6s ease-out 0.4s;
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
  }
</style>

<script lang="ts">
  type Props = { size?: number; ariaHidden?: boolean };
  let { size = 28, ariaHidden = true }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  width={size}
  height={size}
  aria-hidden={ariaHidden}
  focusable="false"
  class="ember-logo"
>
  <defs>
    <linearGradient id="ember-grad" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#ff6a1f" />
      <stop offset="100%" stop-color="#ffb347" />
    </linearGradient>
  </defs>
  <path
    fill="url(#ember-grad)"
    d="M16 2.5c2.6 4.2 1.7 7.3-.6 10.1-2.1 2.6-3.2 4.6-3 7.1.2 2.7 2.3 4.5 5 4.7-3.5 2.3-9 .8-10.7-3.4-1.7-4.2.6-8 3-11.5C11.4 7 13.4 5 16 2.5Zm5.4 12.2c2.4 2.6 3.4 5.4 2.6 8.4-.7 2.7-3 4.6-6.2 4.7 2.6-1.5 3.6-4.1 2.6-6.6-.8-2 0-3.9 1-6.5Z"
  />
</svg>

<style>
  .ember-logo {
    filter: drop-shadow(0 0 18px rgba(255, 106, 31, 0.45));
  }
</style>

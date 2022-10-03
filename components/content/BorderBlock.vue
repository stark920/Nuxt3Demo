<template>
  <div class="border-style">
    <slot />
  </div>
</template>
<style scoped>
.border-style {
  display: inline-block;
  border-radius: 1rem;
  border: 1px solid goldenrod;
  padding: 1rem;
}
</style>

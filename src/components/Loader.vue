<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-950 z-50">
    <span class="loader"></span>
  </div>
</template>

<style>
.loader {
  width: 50px;
  height: 50px;
  border: 6px solid #eee;
  border-top: 6px solid #4f46e5;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

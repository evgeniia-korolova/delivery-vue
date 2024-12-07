<template>
    <header class="header">
        <div class="container header__container">
            <router-link to="/" class="logo">
                <img src="../assets/img/logo.svg" alt="logo" height="33" width="33">
                <p class="logo__text">Delivery Food</p>
            </router-link>
            <div class="header__buttons">
                <button class="btn active">
                    <img src="../assets/icons/user.svg" alt="user" width="16" height="16"><span>Войти</span></button>
                <button class="btn btn-outline" @click="openModal()">
                    <img src="../assets/icons/shopping-cart.svg" alt="shopping-cart" width="16" height="16">
                    <span>Корзина</span>
                </button>
            </div>


        </div>
    </header>
</template>

<script setup>

    const emit = defineEmits(['toggleModal'])
    const openModal = () =>  emit('toggleModal')
        
    </script>

<style scoped>
.header__container {
  padding: 44px 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__buttons {
  display: flex;
  gap: 10px;
}
</style>

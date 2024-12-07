<template>

    <section class="products">
        <div class="container products__container">

            <div class="products__wrapper">

                <div class="products__card card" v-for="product in products" :key="product.id">
                    <div class="card__img">
                        <img :src="getUrl(product.image)" alt="pizza plus">
                    </div>
                    <div class="card__description product-card__description">
                        <div class="card__title product-card__row">
                            <h5 class="card__name">
                                {{ product.name }}
                            </h5>
                        </div>
                        <div class="product-card__row">
                            <p class="product-card__text">
                                {{ product.text }}
                            </p>
                        </div>
                        <div class="product-card__controls">
                            <button class="btn active">
                                <span>В корзину</span>
                                <img src="../assets/icons/cart-white.svg" alt="user" width="16" height="16"></button>
                            <span class="product-card__price">{{ product.price }} ₽</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>

</template>

<script setup>
import { products } from '@/constants/products';
const getUrl = (name) => {
    return new URL(`../assets/img/goods/${name}`, import.meta.url)
}
</script>

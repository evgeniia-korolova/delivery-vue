<template>

    <section class="promo">
        <div class="container promo__container">
            <div class="promo__offer">
                <h1 class="promo__title">Онлайн-сервис доставки еды на дом</h1>
                <p class="promo__text">
                    Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
                </p>
            </div>
            <!-- <div class="promo__img"></div> -->
        </div>
    </section>
    <section class="products">
        <div class="container products__container">
            <div class="products__header">
                <h2 class="products__title">Рестораны</h2>
                <input type="text" placeholder="Поиск блюд и ресторанов" class="products__search">
            </div>
            <div class="products__wrapper" id="rests-container">

                <router-link class="products__card card" v-for="rest in restArray" :key="rest.id"
                    :to="`/rest?id=${rest.id}`">
                    <div class="card__img">
                        <!-- <img src="../assets/img/rests/image0.jpg" alt="pizza plus"> -->
                        <img :src="getUrl(rest.image)" alt="img">
                    </div>
                    <div class="card__description">
                        <div class="card__title">
                            <div class="card__name">
                                {{ rest.title }}
                            </div>
                            <div class="card__tag">{{ rest.time }} мин</div>
                        </div>

                        <div class="card__info">
                            <div class="card__rate">
                                <img src="../assets/img/star.png" alt="star">
                                {{ rest.rating }}
                            </div>
                            <div class="card__price">От {{ rest.price }} ₽</div>
                            <div class="card__type">{{ rest.type }} </div>
                        </div>
                    </div>
                </router-link>

            </div>

        </div>
    </section>

</template>

<script setup>
import { restArray } from '@/constants/rests';
const getUrl = (name) => {
    return new URL(`../assets/img/rests/${name}`, import.meta.url)
}

</script>
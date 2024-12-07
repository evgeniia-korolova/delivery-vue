<template>
    <div class="cart-modal__overlay" :class="{open: isOpen}" @click.self="closeModal()">
        <div class="cart-modal">
            <div class="cart-modal__header">
                <h2 class="cart-modal__header--title">Корзина</h2>
                <span class="cart-modal__header--close" @click="closeModal()">
                    <img src="../assets/icons/icon-close.svg" alt="close">
                </span>
            </div>
            <div class="cart-modal__body">
                <div class="cart__item">
                    <p class="cart__item--title">Ролл угорь стандарт</p>
                    <div class="cart__item--controls">
                        <div class="cart__item--controls--price">250 ₽</div>
                        <button class="btn btn-outline">
                            -
                        </button>
                        <div class="cart__item--controls--count">1</div>
                        <button class="btn btn-outline">
                            +
                        </button>
                    </div>
                </div>
                <div class="cart__item">
                    <p class="cart__item--title">Ролл угорь стандарт</p>
                    <div class="cart__item--controls">
                        <div class="cart__item--controls--price">250 ₽</div>
                        <button class="btn btn-outline">
                            -
                        </button>
                        <div class="cart__item--controls--count">1</div>
                        <button class="btn btn-outline">
                            +
                        </button>
                    </div>
                </div>
                <div class="cart__item">
                    <p class="cart__item--title">Ролл угорь стандарт</p>
                    <div class="cart__item--controls">
                        <div class="cart__item--controls--price">250 ₽</div>
                        <button class="btn btn-outline">
                            -
                        </button>
                        <div class="cart__item--controls--count">1</div>
                        <button class="btn btn-outline">
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div class="cart-modal__footer">
                <div class="cart-modal__footer--price">1250 P</div>
                <div class="cart-modal__footer--controls">
                    <button class="btn active">
                        Оформить заказ
                    </button>
                    <button class="btn btn-outline">
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const {isOpen} = defineProps({isOpen: Boolean}) 
    const emit = defineEmits(['toggleModal'])
    const closeModal = () =>  emit('toggleModal')   
</script>

<style scoped>
.cart-modal__overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.40);
    align-items: center;
    justify-content: center;
}

.cart-modal__overlay.open {
    display: flex;
}

.cart-modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 48px;
}

.cart-modal {
    width: 100%;
    max-width: 780px;
    padding: 40px 45px;
    border-radius: 5px;
    background: #FFF;
}

.cart-modal__header--title {
    font-size: 36px;
    font-weight: 700;
}

.cart-modal__header--close {
    cursor: pointer;
}

.cart-modal__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 50px;
}

.cart-modal__footer--price {
    border-radius: 5px;
    background: #262626;
    color: #FAFAFA;
    font-size: 20px;
    font-weight: 700;
    padding: 15px 20px;
}

.cart-modal__footer--controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.cart__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
}

.cart__item:not(:last-child) {
    padding-bottom: 8px;
    margin-bottom: 17px;
    border-bottom: 1px solid #D9D9D9;
}

.cart__item--title {
    font-size: 18px;
    line-height: 32px;
}

.cart__item--controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
}

.cart__item--controls buttons {
    border: 1px solid #40A9FF;
    color: #40A9FF;
}

.cart__item--controls--price {
    margin-right: 48px;
    font-size: 20px;
    line-height: 32px;
    font-weight: 700;
}
</style>
<template>
  <footer class="footer">
    <div class="container footer__container">
      <nav class="footer__nav">
        <router-link to="/" class="logo">
          <img src="../assets/img/logo.svg" alt="logo" height="33" width="33">
          <p class="logo__text">Delivery Food</p>
        </router-link>
        <ul class="footer__nav--list">
          <li>Ресторанам </li>
          <li>Курьерам</li>
          <li>Пресс-центр</li>
          <li>Контакты</li>
        </ul>
      </nav>
      <div class="footer__socials">
        <img src="../assets/img/insta.svg" alt="instagram" width="25" height="25">
        <img src="../assets/img/facebook.svg" alt="facebook" width="25" height="25">
        <img src="../assets/img/vk.svg" alt="vk" width="36" height="21">
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  margin-top: auto;
}

.footer__container {
  padding: 62px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
}

.footer__nav--list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px; 
}

.footer__nav--list li {
    font-size: 18px;
  }

.footer__socials {
  display: flex;
  gap: 21px;
}
</style>
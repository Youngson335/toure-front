<template>
  <div class="vue-card">
    <div class="vue-card__header" :style="bgImage">
      <div class="vue-card__header-items">
        <vue-label>Cкидка 25%</vue-label>
        <vue-like-icon @click="onSelectFavorites" :is-liked="isFavorite" />
      </div>
    </div>
    <div class="vue-card__main">
      <div class="card__info flex-center">
        <div class="card__info-item flex-center card__info-rating">
          <p>Отель</p>
          <icon :icon="star">3</icon>
        </div>
        <div class="card__info-item card__info-date">22 ноября, 7 ночей</div>
      </div>
      <div class="card__info card__info-hotel">
        <p>Portobello Sochi (Портобелло Сочи)</p>
      </div>
      <div class="card__info card__info-item">
        <p>Россия, Сочи, Адлер</p>
      </div>
      <div class="card__info flex-center">
        <div class="card__info-item flex-center card__info-services">
          <p>Включено:</p>
          <div class="flex-center card-services">
            <icon v-for="(_, index) of 4" :icon="services[index]"></icon>
          </div>
        </div>
      </div>
      <div class="card__info flex-center card__info-btns">
        <vue-button :color="'white'">Подробнее</vue-button>
        <vue-button :color="'red'">от 329 423 ₽</vue-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { place_1 } from "~/assets/images";
import { star, airplane, dream, document, car } from "~/assets/icons";
import VueLikeIcon from "../Icon/VueLikeIcon.vue";
import VueLabel from "../Label/VueLabel.vue";
import VueButton from "../Buttons/VueButton.vue";

const services = [airplane, dream, document, car];

const bgImage = computed(() => ({
  backgroundImage: `url('${place_1}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const isFavorite = ref(false);

const onSelectFavorites = () => {
  isFavorite.value = !isFavorite.value;
};
</script>

<style lang="scss" scoped>
@mixin text($font-size) {
  font-weight: 400;
  font-size: $font-size;
  color: var(--gray);
}
.vue-card {
  max-width: 400px;
  background-color: var(--bg-gray);
  border-radius: var(--radius);
  &__header {
    height: 230px;
    border-radius: 12px;
    &-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 50%;
      padding: 10px;
    }
  }
  &__main {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 14px;
  }
}
.card {
  &-services {
    gap: 5%;
  }
  &__info {
    &-item {
      @include text(14px);
    }
    &-services {
      @include text(12px);
      & p {
        margin-right: 8px;
      }
    }
    &-date {
      color: var(--light-gray);
      font-weight: 400;
      font-size: 14px;
    }
    &-hotel {
      font-weight: 600;
      font-size: 16px;
    }
    &-rating {
      & p {
        margin-right: 4px;
      }
    }
    &-btns {
      gap: 5%;
      margin-top: 9px;
    }
  }
}
</style>

<template>
  <div class="container">
    <h1>Гарантированные отели</h1>
    <div class="cards">
      <div v-for="card of data" :key="card.id" class="cards__item">
        <card :card="card" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CardDraft from "~/interface/Card";
const { data } = useFetch<CardDraft[]>("/api/getInfoCard");
console.log(data.value);
</script>
<style lang="scss">
@import url(../assets/styles/main.css);
.cards {
  background-color: var(--white);
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  justify-content: center;
  align-items: self-start;
  padding: 15px;
  &__item {
    width: 30%;
    margin-bottom: 5%;
    @media (max-width: 1000px) {
      width: 45%;
    }
    @media (max-width: 680px) {
      width: 100%;
    }
  }
}
h1 {
  font-family: "drukwidecyr";
  padding: 20px 0px;
  @media (max-width: 470px) {
    font-size: 20px;
  }
}
</style>

<script setup>
import { supabase } from "../supabase";
import store from "../store.js";

defineProps({
  msg: String,
});

const fetchUrl = async () => {
  let { data: response, error } = await supabase.storage
    .from("photos")
    .list("test", {
      limit: 100,
      offset: 1,
      sortBy: { column: "name", order: "asc" },
    });
  if (error) throw new Error(error);
  let [photo] = response;
  store.photos = supabase.storage
    .from("photos")
    .getPublicUrl("test/" + photo.name);

  console.log(store.photos.data.publicUrl);
};
fetchUrl();
</script>

<template>
  <div v-if="!store.photos">
    <h1>No photos are found</h1>
  </div>
  <div v-else>
    <h1>{{ msg }}</h1>
    <img :src="store.photos.data.publicUrl" alt="feestje" />
  </div>
</template>

<style></style>

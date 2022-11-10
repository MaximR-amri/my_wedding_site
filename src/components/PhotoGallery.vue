<script setup>
import { supabase } from "../supabase";
import store from "../store.js";
import { saveAs } from "file-saver";
defineProps({
  msg: String,
});

const fetchUrl = async () => {
  let { data: response, error } = await supabase.storage
    .from("photos")
    .list("wegwerp", {
      limit: 100,
      offset: 1,
      sortBy: { column: "name", order: "asc" },
    });
  if (error) throw new Error(error);
  let [photo] = response;
  store.photo.name = photo.name;
  store.photo.url = supabase.storage
    .from("photos")
    .getPublicUrl("wegwerp/" + photo.name);
};
fetchUrl();
async function downloadPhoto(name) {
  const { data, error } = await supabase.storage
    .from("photos")
    .download("wegwerp/Wegwerp(99).jpg");
  if (data) {
    saveAs(data, name);
  } else console.log(error);
}
</script>

<template>
  <div v-if="!store.photo">
    <h1>No photos are found</h1>
  </div>
  <div v-else>
    <h1>{{ msg }}</h1>
    <img
      :src="store.photo.url.data.publicUrl"
      @click="downloadPhoto(store.photo.name)"
      alt="feestje"
    />
  </div>
</template>

<style></style>

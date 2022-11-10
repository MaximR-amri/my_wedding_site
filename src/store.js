import { reactive } from "vue";

const store = reactive({
  photo: {
    name: null,
    url: null,
  },
});

export default store;

import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    itemPerPage: {
      type: Number,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    maxLinksDisplayed: {
      type: Number,
      default: 5,
    },
  },
  setup(props) {
    
    const lastPage = computed(
      () => Math.ceil(props.totalItems / props.itemPerPage) || 1
    );
    
    const totalPageDisplayed = computed(() =>
      lastPage.value > props.maxLinksDisplayed - 2
        ? props.maxLinksDisplayed - 2
        : lastPage.value
    );

    const showFirstLink = computed(() => pages.value[0] > 1)

    const showLastLink = computed(
      () => pages.value[pages.value.length - 1] < lastPage.value
    )

    const pages = computed(() => {
      const _pages: number[] = [];
      let firstButton =
        props.currentPage - Math.floor(totalPageDisplayed.value / 2);
      let lastButton =
        firstButton +
        (totalPageDisplayed.value - Math.ceil(totalPageDisplayed.value % 2));

      if (firstButton < 1) {
        firstButton = 1;
        lastButton = firstButton + (totalPageDisplayed.value - 1);
      }

      if (lastButton > lastPage.value) {
        lastButton = lastPage.value;
        firstButton = lastButton - (totalPageDisplayed.value - 1);
      }

      for (let page = firstButton; page <= lastButton; page += 1) {
        _pages.push(page);
      }

      return _pages;
    });

    return {
        pages,
        lastPage,
        showLastLink,
        showFirstLink
    }
  },
});
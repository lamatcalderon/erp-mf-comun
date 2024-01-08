<template>
  <nav
    role="navigation"
    class="flex-pagination pagination is-rounded"
    aria-label="pagination"
    data-filter-hide
  >
    <a
      v-if="lastPage > 1"
      href="javascript:void(0)"
      class="pagination-previous has-chevron"
    >
      <i
        aria-hidden="true"
        class="iconify"
        data-icon="feather:chevron-left"
      ></i>
    </a>
    <a
      v-if="lastPage > 1"
      href="javascript:void(0)"
      class="pagination-next has-chevron"
    >
      <i
        aria-hidden="true"
        class="iconify"
        data-icon="feather:chevron-right"
      ></i>
    </a>

    <ul class="pagination-list">
      <li v-if="showFirstLink">
        <a
          href="javascript:void(0)"
          class="pagination-link"
          aria-label="Goto page 1"
        >
          1
        </a>
      </li>

      <li v-if="pages[0] > 2"><span class="pagination-ellipsis">…</span></li>

      <li v-for="page in pages" :key="page">
        <a
          href="javascript:void(0)"
          class="pagination-link"
          :aria-label="`Goto page ${page}`"
          :aria-current="currentPage === page ? 'page' : ''"
          :class="[currentPage === page && 'is-current']"
        >
          {{ page }}
        </a>
      </li>

      <li v-if="pages[pages.length - 1] < lastPage - 1">
        <span class="pagination-ellipsis">…</span>
      </li>

      <li v-if="showLastLink">
        <a
          href="javascript:void(0)"
          class="pagination-link"
          :aria-label="`Goto page ${lastPage}`"
        >
          {{ lastPage }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script src="./v-flex-pagination.ts" lang="ts"/>
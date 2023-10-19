<template>
  <div class="page-outer">
    <div class="container-default">
      <h1>hi</h1>
      <el-icon :size="20">
        <Edit />
      </el-icon>
      <br>
      <el-button>
        <el-icon style="vertical-align: middle">
          <Search />
        </el-icon>
        <span style="vertical-align: middle"> Search </span>
      </el-button>

      <!-- <tab-nav class="category-nav"
        :tabs="searchTypes"
        :activeTab="category"
        v-on:tabClick="changeCategory"
      /> -->
    </div>
  </div>
</template>

<script>
const searchTypes = [
  {
    label: 'Data',
    name: 'dataset',
  },
  {
    label: 'Tools & Resources',
    name: 'tools',
  },
  {
    label: 'News & Events',
    name: 'news',
  },
  {
    label: '12 Labours Information',
    name: 'laboursInfo',
  },
  {
    label: 'Workflows',
    name: 'workflows',
  },
  {
    label: 'Dashboard',
    name: 'dashboard',
  }
]

export default {
  data: () => {
    return {
      searchTypes,
      category: 'dataset',
    }
  },

  methods: {
    changeCategory(val) {
      this.category = val;
    },
  }
}
</script>

<style lang="scss" scoped>
/*  */
</style>
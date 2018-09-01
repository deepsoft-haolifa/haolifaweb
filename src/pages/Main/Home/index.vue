<template>
<div class="page-home scroll-y">
  <div class="home-row flex">
    <div class="home-card flex-item">
      <div class="home-tab flex-v-center">
        <a class="home-tab-item a on">待办事项</a>
        <a class="home-tab-item a">已办事项</a>
      </div>
      <div class="home-list">
        <div class="home-list-item a flex-v-center" v-for="(item, i) in 6" :key="i">
          <i class="icon f-16 c-a">hourglass_full</i>
          <div class="c-8 date-time">2018-09-01</div>
          <div class="flex-item text-ellipsis">下午2点召开2018工作会议。下午2点召开2018工作会议。下午2点召开2018工作会议。下午2点召开2018工作会议。</div>
        </div>
      </div>
    </div>
    <div class="home-card flex-item">
      <div class="home-tab flex-v-center">
        <a class="home-tab-item a on">通知公告</a>
      </div>
      <div class="home-list">
        <a class="home-list-item a flex-v-center" v-for="(item, i) in 4" :key="i">
          <i class="icon f-20 c-a">notifications</i>
          <span class="c-8 date-time">2018-09-01</span>
          <span class="flex-item text-ellipsis">下午2点召开2018工作会议。下午2点召开2018工作会议。下午2点召开2018工作会议。下午2点召开2018工作会议。</span>
        </a>
      </div>
    </div>
  </div>
  <div class="home-row flex">
    <div class="home-card flex-item">
      <div class="home-tab flex-v-center">
        <a class="home-tab-item a on">最新上传文件/图纸</a>
      </div>
    </div>
    <div class="home-card flex-item">
      <div class="home-tab flex-v-center">
        <a class="home-tab-item a on">快捷入口</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'page-home'
}
</script>

<style lang="less">
.page-home{
  height: 100%;padding: 10px 0;width: 100%;
  .home-row{padding: 10px;}
  .home-card{margin: 0 10px;border: 1px solid #ddd;min-height: 280px;border-radius: 4px;width: 0;}
  .home-tab{border-bottom: 1px solid #eee;padding: 0 10px;overflow: hidden;
    .home-tab-item{display: inline-block;padding:12px 10px 10px 10px;border-bottom: 2px solid transparent;margin-bottom: -1px;
      &:hover{background: #f3f3f3;}
      &.on{border-color: #008eff;color: #008eff;background: transparent;}
    }
  }
  .home-list{padding: 8px 0;}
  .home-list-item{padding: 7px 10px;white-space: nowrap;line-height: 1em;box-sizing:border-box;
    &:hover{background: #f2f2f2;}
    .icon{margin-right: 10px;}
    .date-time{margin-right: 20px;}
  }
}
</style>

<template>
<div class="page-storeroom-earlywarning flex-col">
  <div class="flex-v-center tool-bar">
    <div class="flex-v-center search-bar" style="margin-right: 20px;">
      <i class="icon f-20 c-8">search</i>
      <input type="text" class="flex-item" placeholder="物料名称" style="width: 200px;">
    </div>
    <span>告警：</span>
    <select class="select-bar">
      <option value="0">全部</option>
      <option value="1">正常</option>
      <option value="2">预警</option>
    </select>
    <div class="flex-item"></div>
    <btn class="b" flat color="#008eff">增加</btn>
  </div>
  <div class="flex-item scroll-y">
    <table class="data-table">
      <tr>
        <th>序号</th>
        <th>物料名称</th>
        <th>物料图号</th>
        <th>库存</th>
        <th>预警值</th>
        <th>操作</th>
      </tr>
      <tr>
        <td>1</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</div>
</template>

<script>
export default {
  name: 'page-storeroom-earlywarning'
}
</script>

<style lang="less">
.page-storeroom-earlywarning{
  // padding: 10px;
}
</style>

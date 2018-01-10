<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
  }

  .layout-breadcrumb{
    padding: 10px 15px 0;
  }

</style>
<template>
  <div class="layout">

    <div class="layout-breadcrumb">
      <Breadcrumb>
        <BreadcrumbItem v-for="item in headUrlObj" :href="item.url">{{item.name}}</BreadcrumbItem>
      </Breadcrumb>
    </div>

  </div>
</template>
<script>
  export default {
    data(){
        return {
            headUrlObj:[
              {name:"totp",url:"totp"},
              {name:"hotp",url:"hotp"}
            ]
        }
    }
  }
</script>

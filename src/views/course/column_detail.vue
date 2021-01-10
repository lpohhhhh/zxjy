<template>
  <div class="app-container">
   <el-card shadow="never">
     <div style="display: flex;align-items: flex-start;">
       <img :src="detail.cover" style="width: 200px;height:100px;margin-right:20px;">
       <div style="flex:1;">
         <div style="display:flex;justify-content:space-between;">
           <h4 style="margin-top:5px;margin-bottom:0;">{{detail.title}}</h4>
           <small style="color:#bbbbbb;">{{detail.isend?'已完结':'连载中'}}</small>
         </div>
         <p style="margin:8px 0;">
           <small style="color:#bbbbbb;">{{detail.try}}</small>
         </p>
         <p>
           <small style="color:red;">￥{{detail.price}}</small>
         </p>
         <el-button-group>
          <el-button @click="changeDetailStatus" size="small" type="warning">{{detail.status? '下架': '上架'}}</el-button>
          <el-button @click="changeDetailIsend" size="small" type="default">设为{{detail.isend? '连载中':'已完结'}}</el-button>
         </el-button-group>
       </div>
     </div>
   </el-card>
   
    
  </div>
</template>

<script>
let id = 0;
import {
  fetchDetail
} from '@/api/column.js';
export default {
  name: 'column_detail',
  beforeRouteEnter(to,from,next) {
    id = to.query.id;
    next();
  },
  data() {
    return {
      detail:{
        content: "",
        cover: "",
        create_time: "",
        id: 0,
        isend: 1,
        price: 0,
        status: 0,
        sub_count: 0,
        title: "",
        try: "",
        updated_time: "",
      }
    };
  },
  created(){
    this.getData();
  },
  mounted() {
    
  },
  methods: {
    getData() {
      fetchDetail({
        id
      }).then(res=>{
        this.detail = res.data;
        console.log(res);
      })
    },
    changeDetailStatus(){
      this.detail.status = this.detail.status ? 0 : 1;
    },
    changeDetailIsend(){
      this.detail.isend = this.detail.isend ? 0 : 1;
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
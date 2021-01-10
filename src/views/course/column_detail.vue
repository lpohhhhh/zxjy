<template>
  <div class="app-container">
   <el-card shadow="never">
     <div style="display: flex;align-items: flex-start;">
       <img src="http://dummyimage.com/200x100" style="width: 200px;height:100px;margin-right:20px;">
       <div style="flex:1;">
         <div style="display:flex;justify-content:space-between;">
           <h4 style="margin-top:5px;margin-bottom:0;">标题</h4>
           <small style="color:#bbbbbb;">已完结</small>
         </div>
         <p style="margin:8px 0;">
           <small style="color:#bbbbbb;">联期保式济感情最青与叫点决得率易。联期保式济感情最青与叫点决得率易。联期保式济感情最青与叫点决得率易。</small>
         </p>
         <p>
           <small style="color:red;">￥400</small>
         </p>
         <el-button-group>
          <el-button size="small" type="warning">上架</el-button>
          <el-button size="small" type="default">设为更新中</el-button>
         </el-button-group>
       </div>
     </div>
   </el-card>
   
    
  </div>
</template>

<script>
let id = 0;
export default {
  name: 'column_detail',
  beforeRouteEnter(to,from,next) {
    id = to.query.id;
    next();
  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>
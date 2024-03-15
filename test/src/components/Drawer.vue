<template>
  <div>
    <el-drawer
      title="编辑内容"
      :visible.sync="drawer"
      size="50%"
    >
      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="数量:">
          <el-input v-model="editForm.num"></el-input>
        </el-form-item>
        <el-form-item label="汽水:">
          <el-input v-model="editForm.pop"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="editSubmit()">提交</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
export default {
    name:'drawer',
    data(){
        return {
            editForm:{
                num:'',
                pop:''
            },
            drawer:false
        }
    },
    methods:{
        onDrewer(row){
            this.drawer = true;
            // this.editForm = row;
            this.editForm.num = row.num;
            this.editForm.pop = row.pop;
            console.log(row);
        },
        editSubmit(){
            this.$emit('editSub',"1");
            // console.log(this.editForm);
        }
    }
}
</script>

<style>

</style>
<template>
  <div>
    <div>
      首页
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        height="840"
        border
      >
        <el-table-column prop="num" label="数量" width="180"> </el-table-column>
        <el-table-column prop="pop" label="汽水" width="160"> </el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button size="mini" @click="isDrawer(scope.row)"
              >编辑内容</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Drawer ref="drawer" @editSub="childForm"></Drawer>
    <!-- <h4 @click="go(111)">go homeView</h4> -->
    <!-- <HelloWorld>
            插槽在h3下
        </HelloWorld>
        <p>{{ checkboxs }}</p>
        <input type="checkbox" value="this first" v-model="checkboxs">
        <input type="checkbox" value="this second" v-model="checkboxs">
        <input type="checkbox" value="this third" v-model="checkboxs"> -->
    <!-- <button @click="btn_filter">测试数组过滤</button>
        <ul v-for="(item,index) in list" :key="index">
            <li>id:{{ item.id }}</li>
            <li>num:{{ item.num }}</li>
            <li>age:{{ item.age }}</li>
            <li>pop:{{ item.pop }}</li>
            
        </ul> -->
    <!-- sum:{{ sum }} -->
    <!-- <textarea v-model="textArea"></textarea> -->
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import Drawer from "../components/Drawer.vue";
export default {
  name: "indexPage",
  data() {
    return {
      isisdra: "",
      editForm: {},
      //   checkboxs: [],
      // textArea:'',
      //   form: {
      //     nnn: "2",
      //     aaa: "11",
      //   },
      tableData: [
        { id: 1, num: 2, age: 12, pop: 123 },
        { id: 1, num: 2, age: 12 },
        { id: 2, num: 2, age: 11 },
        { id: 3, num: 3, age: 13 },
        { id: 3, num: 3, age: 13 },
        { id: 3, num: 3, age: 113 },
        { id: 3, num: 4, age: 14 },
        { id: 3, num: 4, age: 14 },
        { id: 3, num: 4, age: 14 },
        { id: 3, num: 4, age: 14 },
        { id: 3, num: 4, age: 14 },
        { id: 3, num: 4, age: 14 },
        { id: 3, num: 4, age: 14 },
        { id: 3, num: 4, age: 14 },
        { id: 3, num: 4, age: 14 },
        { id: 3, num: 4, age: 14 },
        { id: 3, num: 4, age: 14 },
      ],
    };
  },
  components: {
    Drawer,
    HelloWorld,
  },
  methods: {
    isDrawer(row) {
      this.$refs.drawer.onDrewer(row);
    },
    childForm(newValue) {
      // this.tableData = newValue
      if (newValue == "1") console.log("newValue");
    },
  },
  //   methods: {
  //     go(index) {
  //       this.$router.push({ path: `/home?index=${index}` });
  //       console.log(this.checkboxs);
  //     },
  //     btn_filter() {
  //       // this.list = this.list.filter(item => this.textArea?item.num==this.textArea:'')
  //       if (this.form.nnn) {
  //         this.list = this.list.filter((item) => item.num == this.form.nnn);
  //       }
  //       if (this.form.aaa) {
  //         this.list = this.list.filter((item) => item.age == this.form.aaa);
  //       }
  //     },
  //   },
  computed: {
    sum() {
      let sum = this.list.reduce((sum, item) => sum + item.num, 0);
      return sum;
    },
  },
  watch: {
    textArea(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
};
</script>
<style scoped src="../assets/css/indexPage.css"></style>

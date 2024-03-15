<template>
  <div>
    <el-table
      :data="paginatedData"
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

    <!-- 分页 -->
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="listQuery.page"
        :page-sizes="[10, 30, 50]"
        :page-size="listQuery.pageNum"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalNum"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      listQuery: {
        page: 1,
        pageNum: 10,
      },
      list: [
        { id: 1, num: 2, age: 12, pop: 123 },
        { id: 1, num: 2, age: 12 },
        { id: 2, num: 2, age: 11 },
        { id: 3, num: 3, age: 13 },
        { id: 3, num: 3, age: 1355555 },
        { id: 3, num: 3, age: 116666 },
        { id: 3, num: 4, age: 147777 },
        { id: 3, num: 4, age: 1488888 },
        { id: 3, num: 4, age: 1499999 },
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
  // mounted() {
  //   this.total = this.tableData.length;
  //   // console.log(this.tableData.length);
  // },
  computed: {
    // 使用前端实现分页的计算数据
    paginatedData() {
      // 分页的起始下标
      const startIndex = (this.listQuery.page - 1) * this.listQuery.pageNum;
      // 分页的末尾下标
      const endIndex = startIndex + this.listQuery.pageNum;
      // 返回切割后的数据
      return this.list.slice(startIndex, endIndex);
    },
    // 总条数
    totalNum() {
      return this.list.length;
    },
    // 总分页数
    total() {
      return Math.ceil(this.list.length / this.listQuery.pageNum);
    },
  },
  methods: {
    // 每页列表数
    handleSizeChange(val) {
      this.listQuery.pageNum = val;
    },
    // 当前分页数（第几页）
    handleCurrentChange(val) {
      this.listQuery.page = val;
    },
  },
};
</script>

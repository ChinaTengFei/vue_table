<template>
  <div id="app">
    <div>{{ info }}sss</div>
 <a-table :columns="columns" :data-source="info">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="tag in tags"
        :key="tag"
        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" />
      <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
    </span>
  </a-table>
  </div>
</template>

<script>

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    title: 'Name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  name: 'App',
  data(){
    return{
      info:'',
      data,
      columns,
    }
  },
  created(){

          this.$axios({
                method:'get',
                url:'http://192.168.3.2:8080/say',

            }).then((response) =>{          //这里使用了ES6的语法
                console.log(response)       //请求成功返回的数据
                this.info = response.data;
            }).catch((error) => {
                console.log(error)       //请求失败返回的数据
            })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

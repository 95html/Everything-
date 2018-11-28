<template>
  <div class="hello">
    <h2>这是首页组件----{{title}}</h2>
    <br>
    <input type="text" v-model='todo' @keydown="doAdd($event)">
    <button @click="doadd">+增加</button>
    <br>
    <br>
    <hr>
    <br>
    <h2>进行中</h2>
    <ul>
      <li v-for="(item,key) in list" v-if='!item.checked'>
        <input type="checkbox" v-model='item.checked'>{{item.title}}----<button @click="removeDate(key)">删除</button>
      </li>
    </ul>
    <br>
    <br>
    <h2>已完成</h2>
    <ul>
      <li v-for="(item,key) in list" v-if='item.checked'>
       <input type="checkbox" v-model='item.checked'>{{item.title}}----<button @click="removeDate(key)">删除</button>
     </li>
   </ul>
   <br>
   <br>
   <hr>
   <br><br>
   <button @click="getData()">请求数据</button>
   <br>
   <br>
   <hr>
   <br><br>
   <ul>
    <li v-for="item in bdlist">{{item.title}}</li>
  </ul>
</div>
</template>

<script>
  export default {
    data () {
      return {
        todo:'',
        list:[],
        bdlist:[]
      }
    },
    methods:{
      doadd(){
        if(!this.todo==''){
          this.list.push({
            title: this.todo,
            checked:false
          })
          this.todo='';
        }else{
          alert("请输入任务！");
        }
      },
      doAdd(e){
        console.log(e.keyCode)
        if(e.keyCode==13){
          this.list.push({
            title: this.todo,
            checked:false
          })
          this.todo='';
        }
      },

      removeDate(key){
        this.list.splice(key,1);
      },
      getData(){
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        this.$http.get(api).then((response)=>{
          this.bdlist=response.body.result;

        },function(err){
          console.log(err);
        })
      }
      
    },
    mounted(){
      this.getData();
    },
    props:['title']
    // props 接收父组件传过来的值
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0;
  margin: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

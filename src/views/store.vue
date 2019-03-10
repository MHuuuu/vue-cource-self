<template>
  <div>
    <a-input @input="handleInput"/>
    <p>{{inputValue}} ->latsletter {{inputValueLL}}</p>
    <!-- <a-show :content="inputValue"/> -->
    <p>appName:{{appName}},appVersion:{{appVersion}}</p>
    <p>userName:{{userName}},firstUserName:{{firstUserName}}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <button @click="handleChangeUserName">修改userName</button>
    <button @click="registeModule">动态注册列表</button>
    <p v-for="(li,index) in todoList" :key="index">{{li}}</p>
  </div>
</template>
<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

//cosnt mapState =vue.mapState

export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    //展开操作符，效果同下，传出数组、对象
    ...mapState(
      //数组写法['appName']
      {
        appName: state => state.appName,
        userName: state => state.user.userName,
        todoList: state => state.todo?state.todo.todoList:[]
      },
    ),
    ...mapGetters(["firstUserName", "appVersion"]),
    /* appName() {
      //$store.state
      return this.$store.state.appName;
    },
    userName() {
      return this.$store.state.user.userName;
    } */
    /* appVersion(){
      return this.$store.getters.appVersion
    }, */
    inputValueLL() {
      return this.inputValue.substr(-1, 1);
    }
  },
  methods: {
    ...mapMutations(["SET_APP_NAME", "SET_USER_NAME"]),
    ...mapActions(["updateAppName"]),
    handleInput(val) {
      this.inputValue = val;
    },
    handleChangeAppName() {
      //this.SET_APP_NAME("newAPPName");
      // this.$store.commit("SET_APP_NAME");
      this.updateAppName();
    },
    handleChangeUserName() {
      this.SET_USER_NAME("newUser");
      //dispath荷载写法，等同与mapActions
      //this.$store.dispatch('updateAppName','123')
    },
    registeModule() {
      //注册模块
      //如果是给模块中添加一个模块，这"todo" -> ["parentModule","todo"]
      this.$store.registerModule("todo", {
        state: {
          todoList: [
            '111',
            '222'
          ]
        }
      });
    }
  }
};
</script>

<template>
  <div>
    <a-input @input="handleInput"/>
     <!-- <p>{{inputValue}} ->latsletter {{inputValueLL}}</p> -->
    <!-- <a-show :content="inputValue"/> -->
    <!-- <p>appName:{{appName}},appVersion:{{appVersion}}</p> -->
    <p>userName:{{userName}},firstUserName:{{firstUserName}}</p>
  </div>
</template>
<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";
import { mapState,mapGetters } from "vuex";

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
        appName: state => state.userName ,
        userName: state=>state.user.userName
      }
    ),
    ...mapGetters('user',[
      'firstUserName'
      //'appVersion'
    ]),
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
    inputValueLL(){
      return this.inputValue.substr(-1,1)
    }
  },
  methods: {
    handleInput(val) {
      this.inputValue = val;
    }
  }
};
</script>

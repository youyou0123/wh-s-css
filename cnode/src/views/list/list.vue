<template>
  <div class="layout">

    <Layout>
        <Header :style="{position: 'fixed', width: '100%'}">
            <Menu mode="horizontal" theme="dark" :active-name="activeName">
                <div class="layout-logo">

                  <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
                </div>
                <div class="layout-nav">
                    <MenuItem :name="index"
                      v-for="(item,index) in navConfig"
                      :key="item.params.tab"
                      :to="{name: item.name,params: item.params}"
                    >
                        <Icon :type="item.icon"></Icon>
                        {{item.title}}
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Content :style="{
          margin: '88px 20px 0',
          background: '#fff',
          minHeight: '500px',
          position:'relative'
          }"
        >
            <Spin size="large" fix v-if="spinShow"></Spin>
            <item
              v-for="item in list"
              :key="item.id"
              :option="item"
            ></item>

        </Content>
        <Page :current="currentPage" @on-change="changePage" :total="100" :page-size='10' />
        <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
</div>
</template>
<script>
  import navConfig from '@/router/navConfig'
  import Item from './article-item.vue'
  export default {
    data(){
      return {
        navConfig,
        activeName: 0,
        list:[],
        spinShow: true,
        tab:'',
        currentPage: 1
      }
    },
    components:{
      Item
    },
    watch:{
      $route(){
        this.getTopics();
      }
    },
    methods:{
      async getTopics(){
        let tab = this.$route.params.tab;
        let page = this.$route.query.page;
        if(!tab){
          tab = 'all'
        }
        if(!page) {
          page = 1;
        }
        // 拿到地址栏中红tab在不在配置中，不再配置中，默认为all

        let bl = navConfig.some(item => item.params.tab === tab )
        if(!bl){
          tab = 'all',
          // 只相对路径改变动态路径参数
          this.$router.push({params: {tab}})
        }
        // 确定tab值
        this.tab = tab;
        this.currentPage = +page;
        this.spinShow = true;
        let {data} = await this.$api.getTopics({tab,page:page});
        this.list = data.data;
        this.spinShow = false;

        console.log(this.list)
      },
      async changePage(page){
        let queryPage = this.$route.query.page;
        if(!queryPage) {
          queryPage = 1;
        }

        let o = {
          page: page,
          tab: this.tab
        }

        // 改变query
        this.$router.push({query:{page}})

        let {data} = await this.$api.getTopics(o);

        this.list = data.data;
      }
    },
    created() {
      this.getTopics();
      let tab = this.$route.params.tab;
      let index = navConfig.findIndex(item => item.params.tab === tab)
      if(index === -1){
        this.activeName = 0;
      }else{
        this.activeName = index;
      }

    },
  }
</script>
<style scoped>
    .ivu-menu-item-active {
      background: red;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 180px;
        height: 40px;
        /* background: #5b6270; */
        border-radius: 3px;
        float: left;
        position: relative;
        top: 10px;
        margin-right: 70px;
        left: 20px;
    }
    .layout-nav{
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>

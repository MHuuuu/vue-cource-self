<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible breakpoint="sm" reverse-arrow v-model="collapsed">
        <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses" @click.native="handleCollapsed" type="md-menu" :size="32"/>
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view/>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import SideMenu from '_c/side-menu'
export default {
  components: {
    SideMenu
  },
  data() {
    return {
      collapsed: false,
      menuList: [
        {
          title: '1111',
          name: 'm1',
          icon: 'ios-alarm'
        },
        {
          title: '2222',
          name: 'm2',
          icon: 'ios-alarm'
        },
        {
          title: '3333',
          name: 'm3',
          icon: 'ios-alarm',
          children: [
            {
              title: '3333-1',
              name: 'm12',
              icon: 'ios-alarm',
              children: [
                {
                  title: '3333-1-11',
                  name: 'm121',
                  icon: 'ios-alarm'
                },
                {
                  title: '3333-1-22',
                  name: 'm122',
                  icon: 'ios-alarm'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    triggerClasses() {
      return ['trigger-icon', this.collapsed ? 'rotate' : '']
    }
  },
  methods: {
    handleCollapsed() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="less">
.layout-wrapper,
.layout-outer {
  height: 100%;
  .header-wrapper {
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 0 23px;
    .trigger-icon {
      cursor: pointer;
      transition: transform 0.3s ease;
      &.rotate {
        transform: rotateZ(-90deg);
        transition: transform 0.3s ease;
      }
    }
  }
  .content-con {
    padding: 10px;
  }
  .page-card {
    min-height: ~'calc(100vh - 84px)';
  }
}
</style>

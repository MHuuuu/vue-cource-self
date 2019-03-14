export default {
  // 函数式组件， functional: true时及一个组件
  functional: true,
  props: {
    name: String,
    renderFunc: Function
  },
  // h渲染函数，第二个参数为本文件对象实例
  render: (h, ctx) => {
    return ctx.props.renderFunc(h, ctx.props.name)
  }
}

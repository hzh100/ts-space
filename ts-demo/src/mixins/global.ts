import {Vue, Component} from 'vue-property-decorator'

// declare module 'vue/types/vue' {
//   interface Vue {
//     hello: String
//   }
// }

@Component
export default class globalMixin extends Vue {
  hello!: string
  data() {
    return {
      hello: 'world'
    }
  }
  created() {
    // alert(99)
    console.log('global-mixin cteated');
    
  }
}
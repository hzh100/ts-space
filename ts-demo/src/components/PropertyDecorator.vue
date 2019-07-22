<template>
  <div class="hello">
    <h1>Test-components</h1>
    <h3>{{propA}}</h3>
    <button @click="btnChange">change</button>
    <button @click="btnInput">input</button>
    <h3 ref="h3Ref">foo33{{foo}}{{bar}}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit, Inject } from 'vue-property-decorator';

@Component({

})
export default class TestComponents extends Vue {
  @Inject() foo!: string 
  @Inject() bar!: string 
  data() {
    return {
    }
  }

  private num: number = 0
  @Prop() private msg!: string;
  @Prop({type: String, default: '4444'}) propA: string | undefined
  @Watch('propA', {immediate: true, deep: true})
  watchPropA(val: number, oldVal: number) {
    console.log(val, oldVal)
  }

  // btnHandle() {
  //   this.$emit('btnChange', ++ this.num)
  // }

  @Emit('change')
  private btnChange() {
    console.log('=========')
    return ++ this.num
  }
  private btnInput() {
    console.log('-------')
    return -- this.num
  }
  created() {
    this.$on('change', function (option: number) {
      console.log(option, 'created')
    })
    this.$nextTick(() => {
      console.log(this.$refs.h3Ref);
    })
    
  }
}
</script>

<style scoped lang="stylus">

</style>

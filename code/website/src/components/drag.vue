<template>
  <div>
    <draggable :list="list2" :move="getdata" @update="datadragEnd" :options="{animation: 300,handle:'.dargDiv'}">
      <transition-group name="list-complete" >
        <div v-for="element in list2" :key="element.it.name"  class="list-complete-item">
          <div class="styleclass dargDiv">{{element.id}}</div>
          <div class="styleclass">{{element.it.name}}</div>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import Sortable  from 'sortablejs'
  export default {
    name: "drag",
    components: {
      draggable,
      Sortable
    },
    data () {
      return {
        list2:[
          {id:"id1",it:{name:'bbbb'}},
          {id:"id2",it:{name:'2222'}},
          {id:"id3",it:{name:'3333'}},
          {id:"id4",it:{name:'4444'}}
        ]
      }
    },
    methods: {
      getdata (evt) {
        console.log(evt.draggedContext.element.id)
      },
      datadragEnd (evt) {
        console.log('拖动前的索引 :' + evt.oldIndex)
        console.log('拖动后的索引 :' + evt.newIndex)
        console.log(this.tags)
      }
    }
  }
</script>

<style scoped>
  body{
    font-family:'微软雅黑'
  }
  [v-cloak]{
    display:none;
  }
  #example{
    width:1000px;
    margin:0 auto;
  }
  .list-complete-item {
    transition: all 1s;
    height:50px;
    line-height: 50px;
    background: #000;
    color:#fff;
    text-align: center;
    font-size:24px;
    margin-top:10px;
  }
  .styleclass{
    width:100px;
    float:left;
  }
  .list-complete-enter, .list-complete-leave-active {
    opacity: 0;
    height: 0px;
    margin-top: 0px;
    padding: 0px;
    border: solid 0px;
  }
  .list-complete-sortable-chosen,.list-complete-sortable-ghost{
    opacity: 0;
    height: 0px;
    margin-top: 0px;
    padding: 0px;
    border: solid 0px;
  }
  .dargDiv{
    cursor:move;
    background:red;
  }
  .wrods{
    margin-top:50px;
  }
  p{
    line-height:24px;
    text-align:center;
  }
</style>

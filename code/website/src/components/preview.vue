<template>
  <div class="preview">
    <draggable :options="dragOptions"  @add="onAdd">
      <!--<transition-group type="transition">
        <div v-for="item in items" :key="item.key">
          <p>{{item.name}}</p>
        </div>
      </transition-group>-->
      <slot></slot>
    </draggable>
  </div>
</template>

<script>
  import Draggable from 'vuedraggable'
  export default {
    name: "preview",
    components:{
      Draggable
    },
    props: ['node'],
    data () {
      return {
        editable:true,
        isDragging: false,
        delayedDragging:false,
        items:[
          {name:'g1',key:'s1'},
          {name:'g2',key:'s2'},
          {name:'g3',key:'s3'}
        ]
      }
    },
    computed :{
      dragOptions () {
        return  {
          animation: 0,
          group: {
            name: 'widgets',
            pull: false,
            put: true
          },
          disabled: !this.editable,
          ghostClass: 'ghost'
        };
      }
    },
    methods :{
      onMove ({relatedContext, draggedContext}) {
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      },
      onAdd ({ item, newIndex }){
        item.parentElement.removeChild(item)
      }
    }
  }
</script>

<style scoped>
  .preview{
    width: 100%;
    cursor: move;
    float: left;
    background-color: olivedrab;
    z-index: 9;
  }
</style>

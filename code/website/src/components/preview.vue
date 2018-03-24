<template>
  <div class="preview">
    <draggable :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
      <transition-group type="transition">
        <div v-for="item in items" :key="item.key">
          <p>{{item.name}}</p>
        </div>
      </transition-group>
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
  }
</style>

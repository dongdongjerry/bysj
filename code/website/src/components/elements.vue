<template>
    <div class="elements">
      <el-tabs tab-position="left" style="height: 100%;">
        <el-tab-pane label="基础组件">
          <draggable :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false" class="move-cursor">
            <h4 slot="">布局</h4>
            <transition-group type="transition">
              <div v-for="item in items" :key="item.type" :type="item.type">
                <p>{{item.name}}</p>
              </div>
            </transition-group>
          </draggable>
        </el-tab-pane>
        <el-tab-pane label="基础图文">基础图文</el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import Draggable from 'vuedraggable'
export default {
  name: "drag1",
  components:{
    Draggable
  },
  props: {
    show: true
  },
  data () {
    return {
      editable:true,
      isDragging: false,
      delayedDragging:false,
      items:[
        {name:'p1',type:'s1'},
        {name:'p2',type:'s2'},
        {name:'p3',type:'s3'}
      ]
    }
  },
  computed: {
    dragOptions () {
      return  {
        animation: 0,
        group: {
          name: 'widgets',
          pull: 'clone',
          put: false
        },
        disabled: !this.editable,
        ghostClass: 'ghost'
      };
    }
  },
  methods: {
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    }
  }
}
</script>

<style scoped lang="scss">
.elements{
  position: fixed;
  left: 40px;
  top: 60px;
  width: 290px;
  height: 450px;
  box-shadow: 0 0 8px #888888;
  z-index: 10;
  background-color: #fff;
  h4{
    padding: 3px 0;
    margin: 10px 10px 0 0;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #409EFF;

  }
  .move-cursor{
    cursor: move;
  }
}
</style>

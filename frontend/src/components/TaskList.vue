<script lang="ts">
import TaskListItem from '../components/TaskListItem.vue';
import TheToolbar from './TheToolbar.vue';

export default {
    components: {
        TaskListItem,
        TheToolbar
    },
    data: () => ({
      tasks: [] as any[],
      selectedTasks: [] as any[],
      newTask: null
    }),
    methods: {
        async getAllTasks(){
            try{
 
            } catch(error) {
                return Promise.reject(error);
            }
            },
        async onAddNewTask(){
            if(!this.newTask) return;

            const newTask = {text: this.newTask};
            try{
              
            } catch(error) {
                return Promise.reject(error);
            } 
        },
        async onRemoveTask(task: {id: string, text: string}){
            if(!task) return;
            try{
       
            } catch(error) {
                return Promise.reject(error);
            }   
        },
        async onRemoveTasks(){
            try {
                this.selectedTasks.forEach(async task => await this.onRemoveTask(task));
                this.selectedTasks = [];
            } catch(error){
                return Promise.reject(error);
            }
        },
        onSelectTask(task: {id: string, text: string}): void{
            if(!task) return; 
            this.selectedTasks = [...this.selectedTasks, task];
        },
        onUnselectTask(task: {id: string, text: string}): void{
            if(!task) return; 
            this.selectedTasks = this.selectedTasks.filter(item => item.id !== task.id);
        },
        onCloseToolbar(): void{
            this.selectedTasks = [];
        }
    },
    mounted(){
        this.getAllTasks();
    }
}
</script>

<template>
    <div class="task-list__container">
        <div class="task-list__header header">
            <h1 class="header__title">Good Day</h1>
            <h1 class="header__subtitle">Let's make an impact</h1>
        </div>
        <div class="task-list__body">
            <div class="task-list">
                <TheToolbar 
                @remove="onRemoveTasks"
                @close="onCloseToolbar"
                :itemsLength="selectedTasks.length" 
                v-if="selectedTasks.length > 0">
                </TheToolbar>
                <v-list density="compact" v-if="tasks.length > 0">
                    <TaskListItem
                    v-for="(task, i) in tasks"
                    @remove="onRemoveTask"
                    @select="onSelectTask"
                    @unselect="onUnselectTask"
                    :task="task"
                    :index="i"
                    />
                </v-list>

                <div class="task-list__add-task">
                    <h3 class="add-task__label">Add new task</h3>
                    <form class="add-task__form" @submit.prevent="onAddNewTask">
                        <v-text-field v-model="newTask" placeholder="Enter your new to do task" hide-details="auto"/>
                        <v-btn depressed color="primary" type="submit" class="form__btn">Submit</v-btn>
                    </form>
                </div>
               
            </div>
    </div>
    </div>
    
    
</template>


<style lang="scss" scoped>

    .task-list {

        &__container{
            max-width: 800px;
            margin: 0 auto;
        }

        &__header{
            margin-bottom: 20px;
        }

        &__body{
            margin-bottom: 0px;
        }

        &__add-task{
            margin-top: 20px;
        }

    }

    .header{
        display: flex;
        flex-direction: column;

        &__title{
            font-size: 28px;
            color: #E4E4E4;
        }

        &_subtitle{
            font-size: 28px;
            color: #777777;
        }

    }

    .add-task{

        &__form{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }

        &__label{
            margin-bottom: 10px;
        }
    }

    .form{
        &__btn{
            margin-left: 20px;
        }
    }

</style>
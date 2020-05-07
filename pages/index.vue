<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        base-nuxt
      </h1>
      HI
       <div>
    <div :key="task.id" v-for="task in tasks">
      <h1>Hello {{ task.title }}</h1>
      <p>{{ task.due_date }}</p>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Task from '~/models/Task'
import User from '~/models/User'

export default {
  components: {
    Logo
  },

  computed: {
    
    tasks () {
      return Task.all();
    }
  },

   created () {
    this.getUsers();
    this.getTasks();
  },

  methods: {
    getTasks() {
      const tasks = Task.getters('allTasks');
      console.log(tasks)
    },

    getUsers() {
      // let users = User.getters('allUsers');
      // console.log('User: ', users);
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

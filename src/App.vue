<template>
  <v-app>
    <v-container>
      <v-app-bar
        app
        color="primary"
        class="d-flex flex-row-reverse"
      >
        <v-btn
          color="secondary"
        >
          <v-avatar
            color="accent"
            size="26"
            
          ></v-avatar>

          <span class="pl-2">User logged</span>
        </v-btn>
      </v-app-bar>
    

      <v-main>
        <StudentsList />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import StudentsList from "./components/StudentsList"

export default {
  name: 'App',
  components: {
    StudentsList
  },
  data: () => ({
    //
  }),
};
</script>

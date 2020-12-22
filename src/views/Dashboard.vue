<template>
  <div class="dashabord">
    <h1 class="subtitle-3 grey--text">Dashboard</h1>

    <v-container class="my-5">
        
      <v-card flat class="px-3">
        <v-row>
          <v-col cols=12 md=6>
            <div class="caption grey--text">Project Title</div>
            <div>Create a new Website</div>
          </v-col>
          <v-col cols=6 sm=4 md=2>
            <div class="caption grey--text">Person</div>
            <div>Net Ninja</div>
          </v-col>
          <v-col cols=6 sm=4 md=2>
            <div class="caption grey--text">Due Date</div>
            <div>12-24-2020</div>
          </v-col>
          <v-col cols=2 sm=4 md=2>
            <div class="caption grey--text">Status</div>
            <div>ongoing</div>
          </v-col>
        </v-row>
      </v-card>

    </v-container>

  </div>
</template>
<script>
export default {
  name: 'Home',

}
</script>
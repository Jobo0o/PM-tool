<template>
  <div class="dashabord">
    <h1 class="subtitle-3 grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-row class="mb-3">

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color='grey' @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">by project name</span>
            </v-btn>
          </template>
          <span>Sort projects by title</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color='grey' @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">by person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
        
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color='grey' @click="sortBy('due')" v-on="on">
              <v-icon left small>mdi-calendar</v-icon>
              <span class="caption text-lowercase">by due date</span>
            </v-btn>
          </template>
          <span>Sort projects by due date</span>
        </v-tooltip>

      </v-row>
        
      <v-card flat class="px-3" v-for="project in projects" :key="project.title">
        <v-row :class="`pl-3 project ${project.status}`">
          <v-col cols=12 md=6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols=6 sm=4 md=2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols=6 sm=4 md=2>
            <div class="caption grey--text">Due Date</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols=2 sm=4 md=2>
            <div class="text-right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-row cols="12">
          <v-divider></v-divider>
        </v-row>
      </v-card>

    </v-container>

  </div>
</template>
<script>
import db from '@/fb'

export default {
  data() {
    return {
      projects: []
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1:1)
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>
<style>
  .project.complete {
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing {
    border-left: 4px solid orange;
  }
  .project.overdue {
    border-left: 4px solid tomato;
  }
  .v-chip.ongoing {
    background: #3cd1c2 !important;
  }
  .v-chip.complete {
    background: orange !important;
  }
  .v-chip.overdue {
    background: tomato !important;
  }
</style>
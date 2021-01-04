<template>

    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
                <v-btn class="success" dark text v-on="on">Add new project</v-btn>
            </template>
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Add a new Project</v-card-title>
                <v-card-text>
                    <v-form class="px-3" ref="form">
                        <v-text-field label="title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                        <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

                        <v-menu width="290">
                            <template v-slot:activator="{ on }">
                                <v-text-field :rules="inputRules" :value="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-menu>

                        <v-btn text class="success mx-0 mt-3" @click="submit" :loading='loading'>Add project</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
    
</template>

<script>
import moment from 'moment'
import db from '@/fb'

export default {
    data() {
        return {
            title: '',
            content: '',
            due: '',
            inputRules: [
                v => v&&v.length >= 3 || 'Minimum length is 3 characters'
            ],
            loading: false,
            dialog: false
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.loading = true;

                const project = {
                    title: this.title,
                    content: this.content,
                    due: moment(this.due).format("Do MMMM YYYY"),
                    person: 'Johannes',
                    status: 'ongoing'
                }

                db.collection('projects').add(project).then(() => {
                    console.log('added to db')
                    this.loading = false;
                    this.dialog = false;
                    this.$emit('projectAdded') 
                })
            } 
        }
    },
    computed: {
        formattedDate() {
            return this.due ? moment(this.due).format("Do MMMM YYYY") : "";
        }
    }
}
</script>
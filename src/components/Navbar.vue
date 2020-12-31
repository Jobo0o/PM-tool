<template>
    <nav>
        <v-app-bar flat app class="grey lighten-3">
            <v-app-bar-nav-icon medium class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light display-1">Tour</span>
                <span class="font-weight-bold display-1">U</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color='grey'>
                <span>Sign Out</span>
                <v-icon right>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer dark app class="primary" v-model="drawer">
            <v-row justify="center">
                <v-col cols="6" class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-1.png" alt="">
                    </v-avatar>
                    <p class="white--text font-weight-bold ml-4 mt-4">Johannes</p>
                </v-col>
            </v-row>
            <v-list class="pa-4">
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">
                            {{ link.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>
<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                 { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                 { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
                 { icon: 'mdi-account', text: 'Team', route: '/team' },
            ]
        }
    },
    
}
</script>
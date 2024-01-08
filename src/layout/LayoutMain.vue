<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useTheme } from 'vuetify'

const router = useRouter();
const theme = useTheme()
const drawer = ref(false);

const items = [
  { title: 'Home',    icon: 'mdi-home',        route: '/'        },
  { title: 'Login',   icon: 'mdi-login',       route: '/login'   },
  { title: 'Profile', icon: 'mdi-head',        route: '/profile' },
  { title: 'About',   icon: 'mdi-information', route: '/about'   },
];

function navigateTo(route: string) {
  router.push(route);
  drawer.value = false;
}

async function toggleTheme(){
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>

<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>MyApp</v-toolbar-title>
      <v-spacer></v-spacer> <!-- Platzhalter für die Ausrichtung auf der rechten Seite -->
      <v-btn 
        icon 
        @click="toggleTheme"
      >
        <v-icon>
          {{ theme.global.name.value === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="navigateTo(item.route)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="mt-5">
        <slot></slot> 
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; 2024</span>
    </v-footer>
  </v-app>
</template>

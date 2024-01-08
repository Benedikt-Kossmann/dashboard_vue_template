<script lang="ts" setup>
import LayoutMain from '@/layout/LayoutMain.vue';
</script>


<template>
  <LayoutMain>

      <v-row>
        <v-col cols="12">
          <h1 class="text-h3 mb-4">Willkommen auf der Startseite</h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-5">
            <v-card-title class="text-h5">Über Uns</v-card-title>
            <v-card-text>
              Hier können Sie einige Informationen über Ihr Unternehmen oder Projekt hinzufügen. Erzählen Sie den Besuchern, was Sie tun und was Sie einzigartig macht.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="pa-5">
            <v-card-title class="text-h5">Unsere Dienstleistungen</v-card-title>
            <v-card-text>
              Beschreiben Sie die Dienstleistungen, die Sie anbieten. Geben Sie Ihren Kunden einen Einblick in die Werte, die Sie in Ihre Arbeit einbringen.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-img
            src="https://example.com/image.jpg"
            aspect-ratio="1.7"
            class="grey lighten-2"
          ></v-img>
        </v-col>
      </v-row>

  </LayoutMain>
</template>

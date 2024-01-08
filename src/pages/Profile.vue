<script lang="ts" setup>
import { ref } from 'vue';
import LayoutMain from '@/layout/LayoutMain.vue';

const valid = ref(false);
const form = ref(null);
const name = ref('');
const phone = ref('');
const email = ref('');
const selectedOption = ref('');
const agreed = ref(false);
const options = ['Option 1', 'Option 2', 'Option 3'];

const rules = {
  required: (value: any) => !!value || 'Erforderlich',
  max10: (value: string | any[]) => (value && value.length <= 10) || 'Maximal 10 Zeichen',
  phoneFormat: (value: string) => (value && /^\d{7}$/.test(value)) || 'Ungültiges Format',
  emailFormat: (value: string) => (value && /.+@.+\..+/.test(value)) || 'Ungültige E-Mail'
};

function submit() {
  if (form.value.validate()) {
    console.log('Eingereichte Daten:', { name, phone, email, selectedOption, agreed });
  }
}

function reset() {
  form.value.reset();
}
</script>





<template>
  <LayoutMain>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="text-h5">
              Profil
            </v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" @submit.prevent="submit">
                <v-text-field
                  v-model="name"
                  :rules="[rules.required, rules.max10]"
                  label="Name"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="phone"
                  :rules="[rules.required, rules.phoneFormat]"
                  label="Telefonnummer"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="[rules.required, rules.emailFormat]"
                  label="E-Mail"
                  required
                ></v-text-field>

                <v-select
                  v-model="selectedOption"
                  :items="options"
                  label="Auswahl"
                  required
                ></v-select>

                <v-checkbox
                  v-model="agreed"
                  :rules="[rules.required]"
                  label="Ich stimme zu"
                  required
                ></v-checkbox>

                <v-btn
                  color="primary"
                  class="me-4"
                  type="submit"
                  :disabled="!valid"
                >
                  Absenden
                </v-btn>

                <v-btn color="error" @click="reset">
                  Zurücksetzen
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </LayoutMain>
</template>


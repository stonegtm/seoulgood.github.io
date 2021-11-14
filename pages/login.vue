<template>
  <div>
    <v-col justify="center" align="center">
      <form>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show4 ? 'text' : 'password'"
          :error-messages="passwordErrors"
          label="Passsword"
          hint="At least 8 characters"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
          @click:append="show4 = !show4"
        ></v-text-field>
        <v-btn class="mr-4" @click="submit">
          submit
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </form>
    </v-col>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    // name: { required, maxLength: maxLength(10) },
    email: { required, email },
    password: { required }
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    show4: false,
    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`
    }
  }),

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("คุณใส่ E-mail ไม่ถูกรูปแบบ");
      !this.$v.email.required && errors.push("จำเป็นต้องใส่ E-mail");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("จำเป็นต้องใส่รหัสผ่าน");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.password = "";
      this.select = null;
      this.checkbox = false;
    }
  }
};
</script>

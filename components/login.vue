<template>
  <div>
    <v-col justify="center">
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
        <div style="display:flex;justify-content:center;">
          <ul style="color:#fff">
            <li>
              Forgot <nuxtLink to="forget/email">Email / Password</nuxtLink> ?
            </li>
            <li>
              Don't have an acconut ?
              <nuxtLink to="forget/email">Sign In</nuxtLink>
            </li>
          </ul>
        </div>
        <v-divider color="#7789C5" class="mt-4 mb-4"></v-divider>

        <v-btn id="btn-login" @click="submit">
          Log in
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
      console.log(this.email);
      console.log(this.password);
    }
  }
};
</script>
<style>
.v-text-field .v-input__control .v-input__slot::before,
.v-text-field .v-input__control .v-input__slot::after {
  transition: 0s !important;
}
.v-input__slot {
  transition: 0s !important;
}
.v-text-field .v-input__slot:before {
  border-color: #7789c5 !important;
}
.v-text-field label {
  color: #fff !important;
}
#btn-login {
  border-radius: 0;
  float: right;
  height: 30px;
  background: #7789c5;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}
.v-label{
  transition: 0s !important;

}
</style>

<template>
  <Main>
    <div class="container p-5">
      <form class="needs-validation" @submit.prevent="saveButton">
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationCustom01" class="font-weight-bold">First name</label>
            <input type="text" class="form-control" id="validationCustom01" placeholder="Elzodxon"
                   v-model="form['firstName']" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationCustom02" class="font-weight-bold">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" placeholder="Sharofaddinov"
                   v-model="form['lastName']" required>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-6">
            <label for="validationCustom04" class="font-weight-bold">Department</label>
            <select class="custom-select" id="validationCustom04" v-model="form['selected']" required>
              <option selected disabled value="">Choose...</option>
              <option value="accounting">Accounting</option>
              <option value="marketing">Marketing</option>
              <option value="IT">IT</option>
            </select>

          </div>
          <div class="col-md-6 mb-6">
            <label for="validationCustom05" class="font-weight-bold">Position</label>
            <input type="text" class="form-control" id="validationCustom05" placeholder="Software engineer"
                   v-model="form['pos']" required>
          </div>
          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-md-6  pt-2 font-weight-bold">Gender</legend>
              <div class="col-md-12 d-flex align-items-center justify-content-between">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Gender" value="male" checked id="male"
                         v-model="form['picked']">
                  <label class="form-check-label" for="male">
                    Male
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Gender" value="female" id="female"
                         v-model="form['picked']">
                  <label class="form-check-label" for="female">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </fieldset>


        </div>
        <div class="form-row">
          <div class="col-md-6  mb-4">
            <label for="validationCustom07" class="font-weight-bold">Date of birth</label>
            <input type="date" class="form-control" id="validationCustom07" v-model="form['date']" required>
          </div>
        </div>

        <input class="btn btn-primary mt-3" type="submit" value="Submit form">
      </form>
    </div>

  </Main>

</template>

<script>


// import Table from "@/views/Table";
import {mapState} from 'vuex'

export default {

  // components:{
  //   Table
  // },
  data() {
    return {
      form: {},
      perPage: 2,
      currentPage: 2,
      employees: null,
      query: '',
      edit: false,
      editKey: false
    }
  },
  mounted() {
    this.$store.dispatch('LOAD_FROM_LOCALSTORAGE')
  },
  methods: {
    clearForm() {
      this.form = {}
    },
    async saveButton() {
      this.$store.commit('ADD_ITEM', this.form)
      await this.$store.dispatch('SAVE_TO_LOCALSTORAGE')
      this.clearForm()
    },
  },
  computed: {
    ...mapState({
      items: s => s.employees.items,
    }),
    countMale() {
      return this.items.filter(el => el.picked === 'male').length
    },
    countFemale() {
      return this.items.filter(el => el.picked === 'female').length
    },
    countAccounting() {
      return this.items.filter(el => el.selected === 'accounting').length
    },
    countIT() {
      return this.items.filter(el => el.selected === 'IT').length
    },
    countMarketing() {
      return this.items.filter(el => el.selected === 'marketing').length
    },

  },
}
</script>
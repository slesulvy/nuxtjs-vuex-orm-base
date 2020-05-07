<template>
    <el-container>
        <el-main>
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="Name">
                    <el-row>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <el-input v-model="form.name"></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="Email">
                    <el-row>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <el-input v-model="form.email"></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" v-if="!$store.state.entities.users.isEdit">Create</el-button>
                    <el-button type="primary" @click="onUpdate" v-if="$store.state.entities.users.isEdit">Update</el-button>
                    <el-button @click="close()">Close</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
    
    
</template>

<script>
import User from '~/models/User'
import api from '~/api'

  export default {
    props: ["test"],
    data() {
      return {
        form: {
          id: null,
          name: '',
          email: '',
          isActive: false,
        //   region: '',
        //   date1: '',
        //   date2: '',
        //   delivery: false,
        //   type: [],
        //   resource: '',
        //   desc: ''
        }
      }
    },

    computed: {
    
    },

    created() {
        let formData = this.$store.state.entities.users.formData;
        let isEdit = this.$store.state.entities.users.isEdit;
        
        if(isEdit) {
            this.form = formData;
        }
    },


    methods: {
        onSubmit() {
            this.addUser();
        },

        addUser() { 
            User.api().post(`${api.user.create}`, this.form)
                .then(response => {
                    if(response.response.status == 201) {
                        this.showSuccessMessage();
                        this.form = {};
                    }
                })
                .catch(error => {
                    return Promise.reject(error);
                })
        },

        close() {
            User.dispatch('closeForm');
            User.dispatch('setEdit', false);
            this.form = {}
        },

        onUpdate() {
            let userId = this.form.id;
            User.api().put(`${api.user.update}/${userId}`, this.form)
                .then(response => {
                    console.log(response)
                    if(response.response.status == 200) {
                        this.showSuccessMessage();
                    }
                })
                .catch(error => {
                    return Promise.reject(error);
                })
        },

        showSuccessMessage() {
            this.$message({
                message: 'Congrats, this is a success message.',
                type: 'success'
            });
        },

    }
  }
</script>
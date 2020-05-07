<template>
    <div>
        <user-form v-if="$store.state.entities.users.isShowForm"></user-form>
        <el-container>
            
            <el-main>
                <!-- {{ $store.state.entities.users.isShowForm }} -->
                <el-button type="primary" @click="showUserForm()" v-if="!$store.state.entities.users.isShowForm">Add</el-button>
            </el-main>
             <!-- <h1>user list</h1><br/> -->
            
        </el-container>
        <el-container>
            <el-table
            :data="users"
            style="width: 100%">
            <el-table-column
                prop="id"
                label="#"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="Name"
                width="180">
            </el-table-column>
            <el-table-column
                prop="email"
                label="Email">
            </el-table-column>
            <el-table-column
                prop="isActive"
                label="isActive">
            </el-table-column>
            <el-table-column
                label="Operations">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
                </el-table-column>
            </el-table>
        </el-container>
        
    </div>
</template>

<script>
import User from '~/models/User'
import userForm from '~/components/user/userForm'
import api from '~/api'

export default {

    components: {
        userForm
    },

    data() {
        return {

        }
    },

    computed: {
       users () {
           return User.all();
       } 
    },

    created() {
        this.getUsers();
    },

    methods: {

        getUsers() {
            return User.api().get(api.user.get_all)
                .then(response => {
                    return response;
                })
                .catch(error => {
                    return Promise.reject(error);
                })
        },

        handleEdit(index, row) {
            // console.log(index, row);
            const data = { id: row.id, email: row.email, isActive: row.isActive, name: row.name}
            User.dispatch('setEdit', true);
            User.dispatch('setForm');
            User.dispatch('showUpdate', data);

            const user = User.find(row.id);
            console.log(user);
    
        },
        
        handleDelete(index, row) {
            User.api().delete(`${api.user.delete}/${row.id}`)
                .then(response => {
                    if(response.response.status == 200) {
                        User.all();
                        console.log('deleted')
                        this.showSuccessMessage();
                        this.getUsers();
                    }
                    return response;
                })
                .catch(error => {
                    return Promise.reject(error);
                })
        },

        showUserForm () {
            User.dispatch('setForm');
        },

        showSuccessMessage() {
            this.$message({
                message: 'Congrats, your data deleted success.',
                type: 'success'
            });
        },

    }
}
</script>
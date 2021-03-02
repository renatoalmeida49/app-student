<template>
    <v-container>
        <v-row justify="space-between">
            <v-col
                cols="1"
                style="min-width: 100px; max-width: 100%"
                class="flex-grow-1 flex-shrick-0"
            >
                <v-text-field
                    class="py-25"
                    label="Busque por nomes ou emails"
                    style="max-width: 50%"
                    solo
                    append-icon="mdi-magnify"

                    v-model="search"
                    @keyup.enter="searching"
                ></v-text-field>
            </v-col>

            <v-col cols="3" class="d-flex flex-row">
                <v-subheader class="font-weight-bold">Filtros:</v-subheader>
                <v-select
                    class="pr-5"
                    :items="['Todos', 'Quase todos', 'Nenhum']"
                    label="Todos"
                    solo
                ></v-select>
            </v-col>

            <v-col cols="2">
                <AddStudent @new-student="checarLocalStorage"/>
            </v-col>
        </v-row>
        
        <v-row v-if="search == ''">
            <p v-if="alunos.length == 0">
                Não há alunos cadastrados
            </p>

            <v-col
                sm="7" md="5" lg="3"
                v-for="(aluno, index) in alunos"
                :key=index
            >
                <StudentCard @activate-student="checarLocalStorage" :aluno="aluno" :index="index"/>
            </v-col>
        </v-row>
        <v-row v-else>
            <p>Não há usuários com esse critério de busca</p>

            <v-spacer></v-spacer>

            <v-btn
                @click="search = ''"
                color="primary"
            >Retornar</v-btn>
        </v-row>
    </v-container>
</template>

<script>
import AddStudent from './AddStudent'
import StudentCard from './StudentCard'

export default {
    name: 'StudentsList',
    components: {
        AddStudent,
        StudentCard
    },
    data() {
        return {
            search: "",
            searchResult: [],

            alunos: [],
        }
    },
    // TODO: filter para telefone
    methods: {
        checarLocalStorage() {
            if(window.localStorage.alunos)
                this.alunos = JSON.parse(window.localStorage.alunos)
        },
        searching() {
            //TODO: Implementar a busca corretamente
            let result

            for(let i = 0; i < this.alunos.length; i++) {
                result = this.alunos[i].toString().indexOf(this.search)

                if(result != -1) {
                    console.log(this.alunos[i])
                    break
                }
            }
        },
    },
    watch: {
        alunos() {
            window.localStorage.alunos = JSON.stringify(this.alunos)
        }
    },
    created() {
        this.checarLocalStorage()
    }
}
</script>

<style scoped>
.gray {
    background-color: #999 !important;
}
</style>
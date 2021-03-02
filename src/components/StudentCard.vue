<template>
    <v-card
        :class="{gray: !aluno.ativo}"
        max-width="344"
        @click="ativar(index)"
    >
        <v-list-item three-line>
            <v-list-item-avatar
                size="50"
                color="grey"
            ></v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title class="headline mb-1 font-weight-bold">
                    {{aluno.nome}}
                </v-list-item-title>
                <v-list-item-subtitle class="font-weight-bold">
                    Última avaliação: 12/10/2019
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        
        <v-divider class="mx-4" insert></v-divider>
        
        <v-list-item two-line>
                <v-list-item-subtitle>
                    {{aluno.email}} <br>
                    {{aluno.idade}} anos {{aluno.telefone}}
                </v-list-item-subtitle>

                <v-list-item-subtitle>
                    <v-btn
                        class="mx-2 mb-2"
                        fab
                        small
                        outlined
                        rounded
                        text
                        color="accent"
                        elevation="2"
                        :disabled = "aluno.ativo ? false : true"
                    >
                        <v-icon>
                            mdi-pencil
                        </v-icon>
                    </v-btn>

                    
                    <v-btn
                        class="mx-2"
                        fab
                        small
                        rounded
                        text
                        color="accent"
                        :disabled = "aluno.ativo ? false : true"
                    >
                        <v-icon>
                            mdi-dots-horizontal
                        </v-icon>
                    </v-btn>
                    
                    <!--
                    <v-list>
                        <v-list-item>Editar</v-list-item>
                        <v-list-item>Excluir</v-list-item>
                        <v-list-item>Ativar</v-list-item>
                    </v-list>-->

                </v-list-item-subtitle>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
    name: "StudentCard",
    props: ['aluno', 'index'],
    data() {
        return {
            alunos: []
        }
    },
    methods: {
        ativar(index) {
            if(window.localStorage.alunos)
                this.alunos = JSON.parse(window.localStorage.alunos)


            this.alunos[index].ativo = !this.alunos[index].ativo

            window.localStorage.alunos = JSON.stringify(this.alunos)

            this.$emit("activate-student")
        }
    }
}
</script>
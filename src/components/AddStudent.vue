<template>
    <v-dialog
        v-model="dialog"
        max-width="600px"
    >
        <template v-slot:activator="{ on }">
            <v-btn
                v-on="on"
                color="primary"
            >
                <v-icon>
                    mdi-account-plus
                </v-icon>
                <span class="ml-2">Novo Aluno</span>
            </v-btn>
        </template>

        <v-card>
            <v-toolbar
                dark
                color="accent"
                width="100%"
                justify="space-between"
            >
                <span class="headline">Cadastrar aluno</span>
                
                <!-- Why are the justify-content: space-between not working? -->
                <v-spacer></v-spacer>

                <v-btn
                    icon
                    @click="dialog = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>

            <v-card-text class="mt-3">
            
                <v-text-field label="Nome" v-model="nome" filled></v-text-field>
                <v-text-field label="E-mail" v-model="email" filled></v-text-field>
                <v-text-field label="Idade" v-model="idade" filled></v-text-field>
                <v-text-field label="Telefone" v-model="telefone" filled></v-text-field>

                <v-row
                    align="center"
                    justify="space-between"
                    class="ma-3"
                >
                    <v-btn
                        txt
                        class="ma-1 font-weight-bold"
                        color="accent"
                        width="130"
                        plain
                        @click="dialog = false"
                    >Cancelar</v-btn>
                    <v-btn
                        color="primary"
                        width="130"
                        @click="submit"
                    >Salvar</v-btn>
                </v-row>
            
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "AddStudent",
    data() {
        return {
            dialog: false,

            alunos: [],
            nome: "",
            email: "",
            idade: "",
            telefone: "",
        }
    },
    methods: {
        submit() {
            if(window.localStorage.alunos)
                this.alunos = JSON.parse(window.localStorage.alunos)

            //TODO: nenhuma verificação de envio
            this.alunos.push({
                nome: this.nome,
                email: this.email,
                idade: this.idade,
                telefone: this.telefone,
                ativo: false
            })

            this.nome = ""
            this.email = ""
            this.idade = ""
            this.telefone = ""

            window.localStorage.alunos = JSON.stringify(this.alunos)

            this.$emit("new-student")

            this.dialog = false
        },
        create() {
            // Não identifiquei quando o create é chamado. Checagem do localStorage será feita ao submit
            console.log("Criou AddStudent")
        }
    },

}
</script>
<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      editoras: [
        {
          id: "c11556b2-18d2-48d7-ac95-df6d0431f3e6",
          nome: "Editora1",
          site: "www.google",
        },
        {
          id: "0204d8f7-52a5-463b-9d6f-3cf6d5ecffe9",
          nome: "Editora2",
          site: "www.google",
        },
        {
          id: "2148db23-7480-40d7-9cea-ae5876b01886",
          nome: "Editora3",
          site: "www.google",
        },
      ],
      novo_nome: "",
      novo_site: "",
    };
  },
  methods: {
    salvar() {
      if ((this.novo_nome, this.novo_site !== "")) {
        const novo_id = uuidv4();
        this.editoras.push({
          id: novo_id,
          nome: this.novo_nome,
          site: this.novo_site,
        });
        this.novo_nome = "";
        this.novo_site = "";
      }
    },
    excluir(editora) {
      const indice = this.editoras.indexOf(editora);
      this.editoras.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Cadastro de Editora</h2>
      </div>
      <div class="form-input">
        <input type="text" placeholder="Nome" v-model="novo_nome" />
        <input type="text" placeholder="Site" v-model="novo_site" />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-edit">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Site</th>
              <th>Excluir</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="editora in editoras" :key="editora.id">
              <td>{{ editora.id }}</td>
              <td>{{ editora.nome }}</td>
              <td>{{ editora.site }}</td>
              <button @click="excluir(editora)">Excluir</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      categorias: [],
      nova_editora: "",
    };
  },
  async created() {
    const editoras = await axios.get("http://localhost:4000/editoras");
    this.editoras = editoras.data;
  },
  methods: {
    async salvar() {
      const categoria = {
        nome: this.nova_categoria,
      };
      const categoria_criada = await axios.post("http://localhost:4000/editoras", categoria );
      this.categorias.push(categoria_criada.data);
    },
    async excluir(editora) {
      await axios.delete(`http://localhost:4000/editoras/${editora.id}`);
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
              <button class="button-excluir" @click="excluir(editora)">Excluir</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>


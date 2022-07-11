<script>
import axios from "axios";
export default {
  data() {
    return {
      categorias: [],
      nova_categoria: "",
    };
  },
  async created() {
    const categorias = await axios.get("http://localhost:4000/categorias");
    this.categorias = categorias.data;
  },
  methods: {
    async salvar() {
      const categorias = {
        nome: this.nova_categoria,
      };
      const categoria_criada = await axios.post(
        "http://localhost:4000/categorias",
        categorias
      );
      this.categorias.push(categoria_criada.data);
    },
    async excluir(categorias) {
      await axios.delete(`http://localhost:4000/categorias/$ {categorias.id}`);
      const indice = this.categorias.indexOf(categorias);
      this.categorias.splice(indice, 1);
    },
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Categorias</h2>
      </div>
      <div class="form-input">
        <input type="text" placeholder="Categoria" v-model="nova_categoria" />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-cat">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Categoria</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="categoria in categorias" :key="categoria.id">
              <td>{{ categoria.id }}</td>
              <td>{{ categoria.nome }}</td>
              <button @click="excluir(categoria)">Excluir</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style></style>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          id: "c11556b2-18d2-48d7-ac95-df6d0431f3e6",
          livro: "Livros1",
          autor: "Pablo",
          categoria: "Ficção",
          editora: "comicSan",
        },
        {
          id: "0204d8f7-52a5-463b-9d6f-3cf6d5ecffe9",
          livro: "Livros2",
          autor: "Roberto",
          categoria: "Ficção",
          editora: "comicSan",
        },
        {
          id: "2148db23-7480-40d7-9cea-ae5876b01886",
          livro: "Livros3",
          autor: "Wedley",
          categoria: "Romance",
          editora: "comicSan",
        },
      ],
      novo_livro: "",
      novo_autor: "",
      nova_categoria: "",
      nova_editora: "",
    };
  },
  methods: {
    salvar() {
      if (
        (this.novo_livro, this.novo_autor, this.nova_categoria, this.nova_editora !== "")) {
        const novo_id = uuidv4();
        this.livros.push({
          id: novo_id,
          livro: this.novo_livro,
          autor: this.novo_autor,
          categoria: this.nova_categoria,
          editora: this.nova_editora,
        });
        this.novo_livro = "";
        this.novo_autor = "";
        this.nova_categoria = "";
        this.nova_editora = "";
      }
    },
    excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Cadastro de Livro</h2>
      </div>
      <div class="form-input">
        <input type="text" placeholder="Livro" v-model="novo_livro" />
        <input type="text" placeholder="Autor" v-model="novo_autor" />
        <select type="text" class="add" v-model="nova_categoria" >
          <option value="" disabled>Categoria</option>
          <option value="Ficção">Ficção</option>
          <option value="Romance">Romance</option>
          <option value="Comédia">Comédia</option>
          <option value="Terror">Terror</option>
          <option value="Aventura">Aventura</option>
          <option value="Suspense">Suspense</option>
          <option value="Didático">Didático</option>
          <option value="Geek">Geek</option>
          <option value="Mangás">Mangás</option>
          <option value="Mais Vendidos">Mais Vendidos</option>
          <option value="Em Outras Línguas">Em Outras Línguas</option>
        </select>
        <input type="text" placeholder="Editora" v-model="nova_editora" />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-liv">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Livros</th>
              <th>Autor</th>
              <th>Categoria</th>
              <th>Editora</th>
              <th>Excluir</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="livro in livros" :key="livro.id">
              <td>{{ livro.id }}</td>
              <td>{{ livro.livro }}</td>
              <td>{{ livro.autor }}</td>
              <td>{{ livro.categoria }}</td>
              <td>{{ livro.editora }}</td>
              <button @click="excluir(livro)">Excluir</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style>
</style>

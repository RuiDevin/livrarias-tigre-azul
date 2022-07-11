<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      autores: [
        { id: "c11556b2-18d2-48d7-ac95-df6d0431f3e6", nome: "Fermando" },
        { id: "0204d8f7-52a5-463b-9d6f-3cf6d5ecffe9", nome: "Pablo" },
        { id: "2148db23-7480-40d7-9cea-ae5876b01886", nome: "EuZinho" },
      ],
      novo_autor: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_autor !== "") {
        const novo_id = uuidv4();
        this.autores.push({
          id: novo_id,
          nome: this.novo_autor,
        });
        this.novo_autor = "";
      }
    },
    excluir(autor) {
      const indice = this.autores.indexOf(autor);
      this.autores.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Autores</h2>
      </div>
      <div class="form-input">
        <input type="text" placeholder="Autor" v-model="novo_autor" />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-aut">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Autor</th>
              <th>Excluir</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="autor in autores" :key="autor.id">
              <td>{{ autor.id }}</td>
              <td>{{ autor.nome }}</td>
              <button class="button-excluir" @click="excluir(autor)">Excluir</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style>
</style>

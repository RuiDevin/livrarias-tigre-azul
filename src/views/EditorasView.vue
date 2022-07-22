<script>

export default {
  data() {
    return {
      editoras: [],
      editora: {},
      sites: [],
      site: {},
      nova_editora: "",
      novo_site: "",
    };
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
        <input type="text" placeholder="Nome" v-model="editora.nome" />
        <input type="text" placeholder="Site" v-model="editora.site" />
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


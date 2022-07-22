import axios from "axios";

async created() {
    const editoras = await axios.get("http://localhost:4000/editoras");
    this.editoras = editoras.data;
  },
  methods: {
    async salvar() {
      const editora = {
        nome: this.nova_editoras,
      };
      const editora_criado = await axios.post("http://localhost:4000/editoras", editora);
      this.editoras.push(editora_criado.data);
    },
    async excluir(editora) {
      await axios.delete(`http://localhost:4000/times/${editora.id}`);
      const indice = this.editoras.indexOf(editoras);
      this.editoras.splice(indice, 1);
    },
  },
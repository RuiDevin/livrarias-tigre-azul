<template>
  <header>
    <div class="menu-esquerdo">
      <span> <RouterLink to="/">Home</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/times">Times</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/editoras">Editar Editoras</RouterLink> </span>
    </div>
    <div class="menu-direito">
      <span>Sair</span>
    </div>
  </header>
</template>

<style>

header span {
  padding: 0 20px;
}

header {
  height: 10%;
  background-color: #16141A;
  color: white;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding-left: 20px;
  justify-content: space-between;
}

</style>

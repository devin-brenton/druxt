<template>
  <div id="app">
    <nav
      class="navbar navbar-dark fixed-top navbar-expand-md justify-content-between"
    >
      <a class="navbar-brand" href="/">
        <img src="../assets/logo.png" alt="LOGO" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="nav ml-auto navbar-nav">
          <li class="nav-item active">
            <nuxt-link to="/albums">Albums</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/artists">Artists</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about">About me</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<style>
@import url('../assets/style.css');
</style>

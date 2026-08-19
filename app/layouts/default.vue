<template>
  <div>
    <header>
      <h1>My ERP</h1>
    </header>

    <div>
      <aside>
        <nav>
          <NuxtLink to="/">Home</NuxtLink>
          <br />
          <NuxtLink to="/orders">Orders</NuxtLink>
          <br />
          <NuxtLink to="/products">Products</NuxtLink>
          <br />
          <NuxtLink to="/customers">Customers</NuxtLink>
        </nav>
      </aside>

      <main>
        <!-- This is where the content of the child pages will be
        rendered -->
        <slot />
      </main>
    </div>
  </div>
</template>



<script>
export default {
  name: "NavegationMenu",
  data: () => ({
    items: [
      { icon: "dashboard", text: "Dashboard", path: "/" },
      {
        icon: "user",
        text: "Usuarios",
        children: [
          { icon: "plus", text: "Agregar", path: "/students/add" },
          { icon: "list", text: "Listar", path: "/students" },
        ]
      },
      {
        icon: "calendar-alt",
        text: "Hoja de Tiempos",
        children: [
          { icon: "plus", text: "Agregar", path: "/HojaDeTiempos/add" },
          { icon: "list", text: "Listar", path: "/HojaDeTiempos" },
        ]
      },
      {
        icon: "star",
        text: "Ejemplo",
        children: [{ icon: "list", text: "Listar", path: "/example" }]
      },
      {
        icon: "wrench",
        text: "Configuración",
        children: [
          { icon: "list", text: "Opción 1", path: "/configuration/opcion1" },
          { icon: "list", text: "Opción 2", path: "/configuration/opcion2" }
        ]
      }
    ]
  }),
  methods: {
    redirect(path) {
      if(path === undefined) return;
      this.$router.push(path);
    }
  }
};
</script>
<template>
<div>
    <h2>Hoja de Tiempos</h2>
    <el-table v-loading="loading" :data="data" style="width: 100%">
        <el-table-column prop="name" label="Nombre" sortable>
          <template slot-scope="scope">
            {{ scope.row.lastName }}, {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column prop="bio" label="Acerca de mi" width="500" sortable></el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button type="danger" @click="remove(scope.row.HojaDeTiemposId)">Eliminar</el-button>
            <el-button @click="$router.push(`/HojaDeTiemposs/${scope.row.HojaDeTiemposId}/edit`)">Editar</el-button>
          </template>
        </el-table-column>
      </el-table>
</div>
</template>

<script>
export default {
  name: "HojaDeTiemposIndex",
  data() {
    return {
      data: [],
      loading: false
    };
  },
  created() {
    debugger
    this.getAll();
  },
  methods: {
    getAll() {
      let self = this;

      self.loading = true;

      self.$store.state.services.HojaDeTiemposService
        .getAll()
        .then(r => {
          self.loading = false;
          self.data = r.data;
        })
        .catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    },
    remove(id) {
      let self = this;

      self
        .$confirm("Esta seguro de realizar esta acción?", "Confirmación", {
          confirmButtonText: "Si",
          cancelButtonText: "Cancelar",
          type: "warning"
        })
        .then(() => {
          _remove();
        })
        .catch(() => {});

      function _remove() {
        self.$store.state.services.HojaDeTiemposService
          .remove(id)
          .then(r => {
            self.loading = false;
            self.getAll();
          })
          .catch(r => {
            self.$message({
              message: "Ocurrió un error inesperado",
              type: "error"
            });
          });
      }
    }
  }
};
</script>
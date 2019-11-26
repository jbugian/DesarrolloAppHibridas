<template >
    <div class="q-pa-md">
      <q-table
        title="Juegos"
        :data="tableData"
        :columns="columns"
        row-key="name"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        :selected.sync="selected" />

    <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: "Name",
          required: true,
          label: "Nombre",
          align: "left",
          field: "name",
          sortable: true,
          classes: "",
          style: "width: 500px"
        },
        {
          name: "Tags",
          required: true,
          label: "Tags",
          align: "left",
          field: "tags",
          sortable: true,
          classes: "",
          style: "width: 500px"
        },
        {
          name: "ESRB",
          required: true,
          label: "ESRB",
          align: "left",
          field: "esrb",
          sortable: true,
          classes: "",
          style: "width: 500px"
        }
      ],
      tableData: this.$store.getters.getGames
    };
  },
  methods: {
    getSelectedString () {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    }
  }
};
</script>
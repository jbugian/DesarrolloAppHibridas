<template>
  <q-table title="Games" :data="tableData" :columns="columns" row-key="name" />
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: "Name",
          required: true,
          label: "",
          align: "left",
          field: "name",
          sortable: true,
          classes: "",
          style: "width: 500px"
        },
        {
          name: "Tags",
          required: true,
          label: "",
          align: "left",
          field: "tags",
          sortable: true,
          classes: "",
          style: "width: 500px"
        },
        {
          name: "ESRB",
          required: true,
          label: "",
          align: "left",
          field: "esrb",
          sortable: true,
          classes: "",
          style: "width: 500px"
        }
      ],
      tableData: this.$store.getters.getGames
    };
  }
};
</script>
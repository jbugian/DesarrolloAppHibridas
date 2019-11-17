<template>
  <q-table title="Users" :data="tableData" :columns="columns" row-key="name" />
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: "Email",
          required: true,
          label: "",
          align: "left",
          field: "email",
          sortable: true,
          classes: "",
          style: "width: 500px"
        },
        {
          name: "UserName",
          required: true,
          label: "",
          align: "left",
          field: "username",
          sortable: true,
          classes: "",
          style: "width: 500px"
        },
        {
          name: "birthdate",
          required: true,
          label: "",
          align: "left",
          field: "birthdate",
          sortable: true,
          classes: "",
          style: "width: 500px"
        }
      ],
      tableData: this.$store.getters.getUsers
    };
  }
};
</script>
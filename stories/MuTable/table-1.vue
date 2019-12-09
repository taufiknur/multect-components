<template>
  <div>
    <nav><h2>Table Medium</h2></nav>
    <div class="p-5" style="width:50%">
      <md-card>
        <md-card-content>
          <md-table>
            <md-table-toolbar>
              <div class="md-toolbar-section-start">
                <h1 class="md-title">Data</h1>
              </div>
              <md-field class="md-toolbar-section-end">
                <md-input placeholder="Search by name..." />
              </md-field>
            </md-table-toolbar>
            <md-table-row>
              <md-table-head>Row</md-table-head>
              <md-table-head>Row</md-table-head>
              <md-table-head>Row</md-table-head>
              <md-table-head>Row</md-table-head>
              <md-table-head>Row</md-table-head>
            </md-table-row>
            <md-table-row
              slot="md-table-row"
              v-for="(item, index) in content"
              :key="index"
            >
              <md-table-cell md-sort-by="item">{{ index + 1 }}</md-table-cell>
              <md-table-cell md-sort-by="item">{{ item.alamat }}</md-table-cell>
              <md-table-cell md-sort-by="item">{{ item.lat }}</md-table-cell>
              <md-table-cell md-sort-by="item">{{ item.lang }}</md-table-cell>
              <md-table-cell>{{ item.lang }}</md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          alamat: "Row",
          lat: "Row",
          lang: "Row"
        }
      ]
    };
  }
};
</script>

<style></style>

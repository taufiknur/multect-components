<template>
  <div>
      <div class="row p-5">
          <div class="col">
            <div id="Mul-Card">
              <div id="Mul-Card-Header">
                <h4 id="H4_3">
                  <b id="B_4">Header</b>
                </h4>
              </div>
              <div id="Mul-Card-Content">
                <div id="Mul-checkbox">
                  <div id="DIV_7">
                    <div id="DIV_8">
                      <input id="INPUT_9" type="checkbox" />
                    </div>
                  </div> 
                  <label for="md-checkbox-1bzzfn22q" id="LABEL_10">
                    Warning Light
                  </label>
                </div>
              </div>
            </div>
            <!-- <div class="card-left">
              <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50">
                <div class="md-card">
                  <div class="md-card-header" data-background-color="blue">
                    <h4 class="title"><b>Filter Data</b></h4>
                  </div>
                  <div class="md-card-content">
                    <md-checkbox class="md-primary" v-model="boolean">Warning Light</md-checkbox>
                    <md-checkbox class="md-primary" v-model="boolean">Rambu Jalan</md-checkbox>
                    <md-checkbox class="md-primary" v-model="boolean">Rambu Lalu Lintas</md-checkbox>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
      </div>
  </div>
</template>

<script>

// import {
//   StatsCard,
//   ChartCard,
//   NavTabsCard,
//   NavTabsTable,
//   OrderedTable
// } from "./components";

export default {
  data() {
    return {
      boolean: true,
    }
  },
  // components: {
  //   StatsCard,
  //   ChartCard,
  //   NavTabsCard,
  //   NavTabsTable,
  //   OrderedTable
  // },
  props: {
    dataBackgroundColor: {
      type: String,
      default: "blue"
    }
  },
}
</script>

<style scope>
.card-left {
  position: absolute;
  margin: 0 auto;
  top: 15%;
  left: 15px;
}


/* .card { */
  /* Add shadows to create the "card" effect */
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
} */

/* On mouse-over, add a deeper shadow */
/* .card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
} */

/* Add some padding inside the card container */
/* .container {
  padding: 2px 16px;
}

.view-cascade {
    margin-top: -1.25rem;
    margin-right: 4%;
    margin-left: 4%;
} */
#Mul-Card {
    bottom: 0px;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 4px 0px;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    display: inline-block;
    height: 228px;
    left: 0px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgba(0, 0, 0, 0.87);
    text-size-adjust: 100%;
    top: 0px;
    width: 220.438px;
    will-change: color, background-color;
    z-index: 1;
    column-rule-color: rgba(0, 0, 0, 0.87);
    perspective-origin: 110.219px 114px;
    transform-origin: 110.219px 114px;
    caret-color: rgba(0, 0, 0, 0.87);
    background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgba(0, 0, 0, 0.87);
    border-radius: 3px 3px 3px 3px;
    font: normal normal 300 normal 14px / 21px Roboto, Helvetica, Arial, sans-serif;
    margin: 25px 0px;
    outline: rgba(0, 0, 0, 0.87) none 0px;
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}/*#DIV_1*/

#DIV_1:after {
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    text-decoration: none solid rgba(0, 0, 0, 0.87);
    text-size-adjust: 100%;
    column-rule-color: rgba(0, 0, 0, 0.87);
    caret-color: rgba(0, 0, 0, 0.87);
    border: 0px none rgba(0, 0, 0, 0.87);
    font: normal normal 300 normal 14px / 21px Roboto, Helvetica, Arial, sans-serif;
    outline: rgba(0, 0, 0, 0.87) none 0px;
}/*#DIV_1:after*/

#DIV_1:before {
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    text-decoration: none solid rgba(0, 0, 0, 0.87);
    text-size-adjust: 100%;
    column-rule-color: rgba(0, 0, 0, 0.87);
    caret-color: rgba(0, 0, 0, 0.87);
    border: 0px none rgba(0, 0, 0, 0.87);
    font: normal normal 300 normal 14px / 21px Roboto, Helvetica, Arial, sans-serif;
    outline: rgba(0, 0, 0, 0.87) none 0px;
}/*#DIV_1:before*/

#Mul-Card-Header{
    box-shadow: rgba(67, 133, 193, 0.28) 0px 12px 20px -10px, rgba(0, 0, 0, 0.12) 0px 4px 20px 0px, rgba(67, 133, 193, 0.2) 0px 7px 8px -5px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    height: 62px;
    text-decoration: none solid rgb(255, 255, 255);
    text-size-adjust: 100%;
    width: 190.438px;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 95.2188px 31px;
    transform-origin: 95.2188px 31px;
    caret-color: rgb(255, 255, 255);
    background: rgba(0, 0, 0, 0) linear-gradient(60deg, rgb(38, 198, 218), rgb(0, 172, 193)) repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(255, 255, 255);
    border-radius: 3px 3px 3px 3px;
    font: normal normal 300 normal 14px / 21px Roboto, Helvetica, Arial, sans-serif;
    margin: -20px 15px 0px;
    outline: rgb(255, 255, 255) none 0px;
    padding: 15px;
}/*#DIV_2*/

#DIV_2:after {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    text-size-adjust: 100%;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: normal normal 300 normal 14px / 21px Roboto, Helvetica, Arial, sans-serif;
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_2:after*/

#DIV_2:before {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    text-size-adjust: 100%;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: normal normal 300 normal 14px / 21px Roboto, Helvetica, Arial, sans-serif;
    outline: rgb(255, 255, 255) none 0px;
}/*#DIV_2:before*/

#H4_3 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    height: 27px;
    text-decoration: none solid rgb(255, 255, 255);
    text-size-adjust: 100%;
    width: 160.438px;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 80.2188px 13.5px;
    transform-origin: 80.2188px 13.5px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: normal normal 300 normal 18px / 27px Roboto, Helvetica, Arial, sans-serif;
    margin: 0px 0px 5px;
    outline: rgb(255, 255, 255) none 0px;
}/*#H4_3*/

#H4_3:after {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    text-size-adjust: 100%;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: normal normal 300 normal 18px / 27px Roboto, Helvetica, Arial, sans-serif;
    outline: rgb(255, 255, 255) none 0px;
}/*#H4_3:after*/

#H4_3:before {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    text-size-adjust: 100%;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: normal normal 300 normal 18px / 27px Roboto, Helvetica, Arial, sans-serif;
    outline: rgb(255, 255, 255) none 0px;
}/*#H4_3:before*/

#B_4 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    text-size-adjust: 100%;
    column-rule-color: rgb(255, 255, 255);
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: normal normal 700 normal 18px / 27px Roboto, Helvetica, Arial, sans-serif;
    outline: rgb(255, 255, 255) none 0px;
}/*#B_4*/

#B_4:after {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    text-size-adjust: 100%;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: normal normal 700 normal 18px / 27px Roboto, Helvetica, Arial, sans-serif;
    outline: rgb(255, 255, 255) none 0px;
}/*#B_4:after*/

#B_4:before {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    text-size-adjust: 100%;
    column-rule-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    border: 0px none rgb(255, 255, 255);
    font: normal normal 700 normal 18px / 27px Roboto, Helvetica, Arial, sans-serif;
    outline: rgb(255, 255, 255) none 0px;
}/*#B_4:before*/

#Mul-Card-Content {
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    height: 186px;
    text-decoration: none solid rgba(0, 0, 0, 0.87);
    text-size-adjust: 100%;
    width: 220.438px;
    column-rule-color: rgba(0, 0, 0, 0.87);
    perspective-origin: 110.219px 93px;
    transform-origin: 110.219px 93px;
    caret-color: rgba(0, 0, 0, 0.87);
    border: 0px none rgba(0, 0, 0, 0.87);
    font: normal normal 300 normal 14px / 22px Roboto, Helvetica, Arial, sans-serif;
    outline: rgba(0, 0, 0, 0.87) none 0px;
    padding: 15px 20px;
}/*#DIV_5*/

#DIV_5:after {
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    text-decoration: none solid rgba(0, 0, 0, 0.87);
    text-size-adjust: 100%;
    column-rule-color: rgba(0, 0, 0, 0.87);
    caret-color: rgba(0, 0, 0, 0.87);
    border: 0px none rgba(0, 0, 0, 0.87);
    font: normal normal 300 normal 14px / 22px Roboto, Helvetica, Arial, sans-serif;
    outline: rgba(0, 0, 0, 0.87) none 0px;
}/*#DIV_5:after*/

#DIV_5:before {
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    text-decoration: none solid rgba(0, 0, 0, 0.87);
    text-size-adjust: 100%;
    column-rule-color: rgba(0, 0, 0, 0.87);
    caret-color: rgba(0, 0, 0, 0.87);
    border: 0px none rgba(0, 0, 0, 0.87);
    font: normal normal 300 normal 14px / 22px Roboto, Helvetica, Arial, sans-serif;
    outline: rgba(0, 0, 0, 0.87) none 0px;
}/*#DIV_5:before*/

#Mul-checkbox {
    bottom: 0px;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    cursor: pointer;
    display: inline-flex;
    height: 20px;
    left: 0px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgba(0, 0, 0, 0.87);
    text-size-adjust: 100%;
    top: 0px;
    width: 115.859px;
    column-rule-color: rgba(0, 0, 0, 0.87);
    perspective-origin: 57.9219px 10px;
    transform-origin: 57.9297px 10px;
    caret-color: rgba(0, 0, 0, 0.87);
    border: 0px none rgba(0, 0, 0, 0.87);
    font: normal normal 300 normal 14px / 22px Roboto, Helvetica, Arial, sans-serif;
    margin: 16px 16px 16px 0px;
    outline: rgba(0, 0, 0, 0.87) none 0px;
}/*#DIV_6*/

#DIV_6:after {
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    cursor: pointer;
    display: block;
    text-decoration: none solid rgba(0, 0, 0, 0.87);
    text-size-adjust: 100%;
    column-rule-color: rgba(0, 0, 0, 0.87);
    caret-color: rgba(0, 0, 0, 0.87);
    border: 0px none rgba(0, 0, 0, 0.87);
    font: normal normal 300 normal 14px / 22px Roboto, Helvetica, Arial, sans-serif;
    outline: rgba(0, 0, 0, 0.87) none 0px;
}/*#DIV_6:after*/

#DIV_6:before {
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    cursor: pointer;
    display: block;
    text-decoration: none solid rgba(0, 0, 0, 0.87);
    text-size-adjust: 100%;
    column-rule-color: rgba(0, 0, 0, 0.87);
    caret-color: rgba(0, 0, 0, 0.87);
    border: 0px none rgba(0, 0, 0, 0.87);
    font: normal normal 300 normal 14px / 22px Roboto, Helvetica, Arial, sans-serif;
    outline: rgba(0, 0, 0, 0.87) none 0px;
}/*#DIV_6:before*/

#DIV_7, #DIV_12, #DIV_17 {
    bottom: 0px;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    cursor: pointer;
    height: 20px;
    left: 0px;
    min-height: auto;
    min-width: 20px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgba(0, 0, 0, 0.87);
    text-size-adjust: 100%;
    top: 0px;
    width: 20px;
    column-rule-color: rgba(0, 0, 0, 0.87);
    perspective-origin: 10px 10px;
    transform-origin: 10px 10px;
    caret-color: rgba(0, 0, 0, 0.87);
    border: 1px solid rgb(156, 39, 176);
    border-radius: 3px 3px 3px 3px;
    font: normal normal 300 normal 14px / 22px Roboto, Helvetica, Arial, sans-serif;
    outline: rgba(0, 0, 0, 0.87) none 0px;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
}/*#DIV_7, #DIV_12, #DIV_17*/

#DIV_8{
    bottom: -9px;
    box-sizing: border-box;
    color: rgb(156, 39, 176);
    cursor: pointer;
    height: 48px;
    left: 9px;
    position: relative;
    right: -9px;
    text-decoration: none solid rgb(156, 39, 176);
    text-size-adjust: 100%;
    top: 9px;
    width: 48px;
    z-index: 5;
    column-rule-color: rgb(156, 39, 176);
    perspective-origin: 24px 24px;
    transform: matrix(1, 0, 0, 1, -24, -24);
    transform-origin: 24px 24px;
    caret-color: rgb(156, 39, 176);
    border: 0px none rgb(156, 39, 176);
    border-radius: 50% 50% 50% 50%;
    font: normal normal 300 normal 14px / 22px Roboto, Helvetica, Arial, sans-serif;
    outline: rgb(156, 39, 176) none 0px;
    overflow: hidden;
}/*#DIV_8, #DIV_13, #DIV_18*/

#DIV_8:after{
    box-sizing: border-box;
    color: rgb(156, 39, 176);
    cursor: pointer;
    text-decoration: none solid rgb(156, 39, 176);
    text-size-adjust: 100%;
    column-rule-color: rgb(156, 39, 176);
    caret-color: rgb(156, 39, 176);
    border: 0px none rgb(156, 39, 176);
    font: normal normal 300 normal 14px / 22px Roboto, Helvetica, Arial, sans-serif;
    outline: rgb(156, 39, 176) none 0px;
}/*#DIV_8:after, #DIV_13:after, #DIV_18:after*/

#DIV_8:before{
    box-sizing: border-box;
    color: rgb(156, 39, 176);
    cursor: pointer;
    text-decoration: none solid rgb(156, 39, 176);
    text-size-adjust: 100%;
    column-rule-color: rgb(156, 39, 176);
    caret-color: rgb(156, 39, 176);
    border: 0px none rgb(156, 39, 176);
    font: normal normal 300 normal 14px / 22px Roboto, Helvetica, Arial, sans-serif;
    outline: rgb(156, 39, 176) none 0px;
}/*#DIV_8:before, #DIV_13:before, #DIV_18:before*/

#INPUT_9 {
    bottom: 29px;
    cursor: default;
    display: block;
    height: 13px;
    left: -13320px;
    min-height: 13px;
    min-width: 13px;
    position: absolute;
    right: 13348px;
    text-size-adjust: 100%;
    top: 0px;
    width: 13px;
    perspective-origin: 6.5px 6.5px;
    transform-origin: 6.5px 6.5px;
    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(0, 0, 0);
    margin: 3px 3px 3px 4px;
    padding: 0px;
}/*#INPUT_9, #INPUT_14, #INPUT_19*/

#INPUT_9:after {
    box-sizing: border-box;
    cursor: default;
    text-size-adjust: 100%;
}/*#INPUT_9:after, #INPUT_14:after, #INPUT_19:after*/

#INPUT_9:before {
    box-sizing: border-box;
    cursor: default;
    text-size-adjust: 100%;
}/*#INPUT_9:before, #INPUT_14:before, #INPUT_19:before*/

#LABEL_10 {
    bottom: 0px;
    box-sizing: border-box;
    color: rgb(170, 170, 170);
    cursor: pointer;
    display: block;
    height: 20px;
    left: 0px;
    min-height: auto;
    min-width: auto;
    position: relative;
    right: 0px;
    text-decoration: none solid rgb(170, 170, 170);
    text-size-adjust: 100%;
    top: 0px;
    column-rule-color: rgb(170, 170, 170);
    perspective-origin: 47.9219px 10px;
    transform-origin: 47.9297px 10px;
    caret-color: rgb(170, 170, 170);
    border: 0px none rgb(170, 170, 170);
    font: normal normal 400 normal 14px / 20px Roboto, Helvetica, Arial, sans-serif;
    outline: rgb(170, 170, 170) none 0px;
    padding: 0px 0px 0px 5px;
}/*#LABEL_10*/

#LABEL_10:after {
    box-sizing: border-box;
    color: rgb(170, 170, 170);
    cursor: pointer;
    text-decoration: none solid rgb(170, 170, 170);
    text-size-adjust: 100%;
    column-rule-color: rgb(170, 170, 170);
    caret-color: rgb(170, 170, 170);
    border: 0px none rgb(170, 170, 170);
    font: normal normal 400 normal 14px / 20px Roboto, Helvetica, Arial, sans-serif;
    outline: rgb(170, 170, 170) none 0px;
}/*#LABEL_10:after*/

#LABEL_10:before {
    box-sizing: border-box;
    color: rgb(170, 170, 170);
    cursor: pointer;
    text-decoration: none solid rgb(170, 170, 170);
    text-size-adjust: 100%;
    column-rule-color: rgb(170, 170, 170);
    caret-color: rgb(170, 170, 170);
    border: 0px none rgb(170, 170, 170);
    font: normal normal 400 normal 14px / 20px Roboto, Helvetica, Arial, sans-serif;
    outline: rgb(170, 170, 170) none 0px;
}/*#LABEL_10:before*/

</style>
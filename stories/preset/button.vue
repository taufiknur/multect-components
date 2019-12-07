<template>
  <div>
    <nav><h2>Button Variation</h2></nav>
    <div class="p-5">
      <div class="row">
        <div class="col">
          <md-button class="md-primary"> Primary</md-button>
        </div>
        <div class="col">
          <i>Button With Color Primary</i>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <md-button class="md-warning"> Warning</md-button>
        </div>
        <div class="col">
          <i>Button With Color Warning</i>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <md-button class="md-danger"> Danger</md-button>
        </div>
        <div class="col">
          <i>Button With Color Danger</i>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <md-button class="md-accent"> Accent</md-button>
        </div>
        <div class="col">
          <i>Button With Color Accent</i>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <md-button disabled> Disable</md-button>
        </div>
        <div class="col">
          <i>Button With disable</i>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <md-button :md-ripple="false"> Ripple Off</md-button>
        </div>
        <div class="col">
          <i>Button With Ripple Off</i>
        </div>
      </div>
      <!-- <div>
        <button class="button">Green</button>
        <button class="button button2">Blue</button>
        <button class="button button3">Red</button>
        <button class="button button4">Gray</button>
        <button class="button button5">Black</button>
    </div>
    <div>
        <button class="button-bd button1-bd">Green</button>
        <button class="button-bd button2-bd">Blue</button>
        <button class="button-bd button3-bd">Red</button>
        <button class="button-bd button4-bd">Gray</button>
        <button class="button-bd button5-bd">Black</button>
    </div>
    <div>
        <button class="button-hv" style="vertical-align:middle"><span>Hover </span></button>
    </div>
    <div>
      
    </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.button2 {
  background-color: #008cba;
} /* Blue */
.button3 {
  background-color: #f44336;
} /* Red */
.button4 {
  background-color: #e7e7e7;
  color: black;
} /* Gray */
.button5 {
  background-color: #555555;
} /* Black */

.button-bd {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1-bd {
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
}

.button1-bd:hover {
  background-color: #4caf50;
  color: white;
}

.button2-bd {
  background-color: white;
  color: black;
  border: 2px solid #008cba;
}

.button2-bd:hover {
  background-color: #008cba;
  color: white;
}

.button3-bd {
  background-color: white;
  color: black;
  border: 2px solid #f44336;
}

.button3-bd:hover {
  background-color: #f44336;
  color: white;
}

.button4-bd {
  background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
}

.button4-bd:hover {
  background-color: #e7e7e7;
}

.button5-bd {
  background-color: white;
  color: black;
  border: 2px solid #555555;
}

.button5-bd:hover {
  background-color: #555555;
  color: white;
}

.button-hv {
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button-hv span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button-hv span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button-hv:hover span {
  padding-right: 25px;
}

.button-hv:hover span:after {
  opacity: 1;
  right: 0;
}
</style>

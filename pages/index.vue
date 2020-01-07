<template>
  <div>
    <DescriptionSection />
    <Advantages />

<!--    <VideoSection />-->
<!--    <div class="sub_bg_3">-->
<!--        <div class="top_5">-->
<!--      <div class="container ">-->


<!--        <div class="sixteen columns  ">-->
<!--          <div class="bottom25"><div class="patients_titre">What our patients say about us</div>-->
<!--            <div class="sous_header bottom_50"></div></div>-->
<!--          <div class="clearfix"></div>-->
<!--        </div>-->
<!--        <div class="eight columns  alpha border_say">-->

<!--          <div class=" three columns  alpha "><img src="~assets/Untitldddded-7.jpg" alt=""></div>-->
<!--          <div class="five columns  omega"><div><span class="patients_font">" I found both the clinic and the staff fantastic. great team "</span></div>-->
<!--            <div><span class="maria">Mark brown ,40 years old</span></div>-->

<!--          </div>-->

<!--        </div>-->

<!--        <div class="eight columns  omega border_say ">-->
<!--          <div class="three columns alpha"><img src="~assets/Happy_Patient.jpg" alt=""></div>-->
<!--          <div class="five columns  omega"><div><span class="patients_font">" I found both the clinic and the staff fantastic. great team "</span></div>-->
<!--            <div><span class="maria">Maria Ron ,32 years old</span></div>-->
<!--          </div>-->

<!--        </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

    <div class="sub_bg_1 contact_section">
      <div class="top_5">


      <div class="container">
        <div class="sixteen columns sub_bg_4">
          <div class="eight columns  alpha ">
            <div><span class="contact_font">Contact us</span> </div>

            <div><ul class="available_font">
              <li><span>we are available 24/7.</span></li></ul></div>

            <div class="clearfix"></div>
            <fieldset id="contact_form">

              <div id="result"></div>
              <label for="fname"><span>First Name *</span><br>
                <input type="text" name="fname" id="fname">
              </label>

              <label for="lname"><span>Last Name *</span><br>
                <input type="text" name="lname" id="lname">
              </label>

              <label for="email"><span>Email *</span><br>
                <input type="email" name="email" id="email">
              </label>
              <label for="message">message *</label>
              <textarea name="message" id="message" rows="3" cols="30" placeholder=""></textarea>
              <button class="submit_btn" id="submit_btn">Submit</button>

            </fieldset>
          </div>
          <div class="eight columns  omega">

            <div><span class="contact_font">Important Info</span> </div>
            <div><ul class="info_font">
              <li><span>email: info@gopherprotocol.com</span></li>
              <li><span>GBT Technologies.2500 Broadway, Suite F-125 Santa Monica, CA 90404 USA</span></li></ul>
            </div>
            <div class="iframe_center"><iframe width="390px" height="420px" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=2500%20Broadway%2C%20Suite%20F-125%20Santa%20Monica%2090404%20USA+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/coordinates.html">gps coordinates finder</a></iframe></div>
            <div class="clearfix"></div>
          </div>
        </div></div>
      </div>
    </div>
  </div>
</template>

<script>

import DescriptionSection from "~/components/home-page/description-section/description-section.vue";
import Advantages from "~/components/home-page/advantages/advantages.vue";
import VideoSection from "~/components/home-page/video-section/video-section.vue";

export default {
  components: {
    DescriptionSection,
    Advantages,
    VideoSection
  }
}
</script>

<style scoped>
  * {
    box-sizing: initial;
  }
  .button,
  button,
  input[type="submit"],
  input[type="reset"],
  input[type="button"] {
    background: #eee; /* Old browsers */
    background: #eee -moz-linear-gradient(top, rgba(255,255,255,.2) 0%, rgba(0,0,0,.2) 100%); /* FF3.6+ */
    background: #eee -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,.2)), color-stop(100%,rgba(0,0,0,.2))); /* Chrome,Safari4+ */
    background: #eee -webkit-linear-gradient(top, rgba(255,255,255,.2) 0%,rgba(0,0,0,.2) 100%); /* Chrome10+,Safari5.1+ */
    background: #eee -o-linear-gradient(top, rgba(255,255,255,.2) 0%,rgba(0,0,0,.2) 100%); /* Opera11.10+ */
    background: #eee -ms-linear-gradient(top, rgba(255,255,255,.2) 0%,rgba(0,0,0,.2) 100%); /* IE10+ */
    background: #eee linear-gradient(top, rgba(255,255,255,.2) 0%,rgba(0,0,0,.2) 100%); /* W3C */
    border: 1px solid #aaa;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    color: #444;
    display: inline-block;
    font-size: 11px;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 0 1px rgba(255, 255, 255, .75);
    cursor: pointer;
    margin-bottom: 20px;
    line-height: normal;
    padding: 8px 10px;
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif; }

  .button:hover,
  button:hover,
  input[type="submit"]:hover,
  input[type="reset"]:hover,
  input[type="button"]:hover {
    color: #222;
    background: #ddd; /* Old browsers */
    background: #ddd -moz-linear-gradient(top, rgba(255,255,255,.3) 0%, rgba(0,0,0,.3) 100%); /* FF3.6+ */
    background: #ddd -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,.3)), color-stop(100%,rgba(0,0,0,.3))); /* Chrome,Safari4+ */
    background: #ddd -webkit-linear-gradient(top, rgba(255,255,255,.3) 0%,rgba(0,0,0,.3) 100%); /* Chrome10+,Safari5.1+ */
    background: #ddd -o-linear-gradient(top, rgba(255,255,255,.3) 0%,rgba(0,0,0,.3) 100%); /* Opera11.10+ */
    background: #ddd -ms-linear-gradient(top, rgba(255,255,255,.3) 0%,rgba(0,0,0,.3) 100%); /* IE10+ */
    background: #ddd linear-gradient(top, rgba(255,255,255,.3) 0%,rgba(0,0,0,.3) 100%); /* W3C */
    border: 1px solid #888;
    border-top: 1px solid #aaa;
    border-left: 1px solid #aaa; }

  .button:active,
  button:active,
  input[type="submit"]:active,
  input[type="reset"]:active,
  input[type="button"]:active {
    border: 1px solid #666;
    background: #ccc; /* Old browsers */
    background: #ccc -moz-linear-gradient(top, rgba(255,255,255,.35) 0%, rgba(10,10,10,.4) 100%); /* FF3.6+ */
    background: #ccc -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,.35)), color-stop(100%,rgba(10,10,10,.4))); /* Chrome,Safari4+ */
    background: #ccc -webkit-linear-gradient(top, rgba(255,255,255,.35) 0%,rgba(10,10,10,.4) 100%); /* Chrome10+,Safari5.1+ */
    background: #ccc -o-linear-gradient(top, rgba(255,255,255,.35) 0%,rgba(10,10,10,.4) 100%); /* Opera11.10+ */
    background: #ccc -ms-linear-gradient(top, rgba(255,255,255,.35) 0%,rgba(10,10,10,.4) 100%); /* IE10+ */
    background: #ccc linear-gradient(top, rgba(255,255,255,.35) 0%,rgba(10,10,10,.4) 100%); /* W3C */ }

  .button.full-width,
  button.full-width,
  input[type="submit"].full-width,
  input[type="reset"].full-width,
  input[type="button"].full-width {
    width: 100%;
    padding-left: 0 !important;
    padding-right: 0 !important;
    text-align: center; }

  /* Fix for odd Mozilla border & padding issues */
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  form {
    margin-bottom: 20px; }
  fieldset {
    margin-bottom: 20px; }
  input[type="text"],
  input[type="password"],
  input[type="email"],
  textarea,
  select {
    border: 1px solid #ccc;
    padding: 6px 4px;
    outline: none;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    font: 13px "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #777;
    margin: 0;
    width: 210px;
    max-width: 100%;
    display: block;
    margin-bottom: 20px;
    background: #fff; }
  select {
    padding: 0; }
  input[type="text"]:focus,
  input[type="password"]:focus,
  input[type="email"]:focus,
  textarea:focus {
    border: 1px solid #aaa;
    color: #444;
    -moz-box-shadow: 0 0 3px rgba(0,0,0,.2);
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.2);
    box-shadow:  0 0 3px rgba(0,0,0,.2); }
  textarea {
    min-height: 60px; }
  label,
  legend {
    display: block;
    font-weight: bold;
    font-size: 13px;  }
  select {
    width: 220px; }
  input[type="checkbox"] {
    display: inline; }
  label span,
  legend span {
    font-weight: normal;
    font-size: 13px;
    color: #444; }

  .submit_btn {
    color: #e68b7e;
    text-decoration: none;
    display: inline-block;
    border: 3px solid #e68b7e;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    border-radius: 3px;
    text-align: center;
    width: 87%;
    max-width: 96%;
    background: #fff;
  }

</style>


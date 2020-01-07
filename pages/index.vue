<template>
  <div>
    <DescriptionSection />
    <Advantages />

    <VideoSection />
    <div class="sub_bg_3">
        <div class="top_5">
      <div class="container ">


        <div class="sixteen columns  ">
          <div class="bottom25"><div class="patients_titre">What our patients say about us</div>
            <div class="sous_header bottom_50"></div></div>
          <div class="clearfix"></div>
        </div>
        <div class="eight columns  alpha border_say">

          <div class=" three columns  alpha "><img src="~assets/Untitldddded-7.jpg" alt=""></div>
          <div class="five columns  omega"><div><span class="patients_font">" I found both the clinic and the staff fantastic. great team "</span></div>
            <div><span class="maria">Mark brown ,40 years old</span></div>

          </div>

        </div>

        <div class="eight columns  omega border_say ">
          <div class="three columns alpha"><img src="~assets/Happy_Patient.jpg" alt=""></div>
          <div class="five columns  omega"><div><span class="patients_font">" I found both the clinic and the staff fantastic. great team "</span></div>
            <div><span class="maria">Maria Ron ,32 years old</span></div>
          </div>

        </div>
        </div>
      </div>
    </div>

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

<style></style>


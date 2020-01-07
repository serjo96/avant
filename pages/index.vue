<template>
  <div>
    <DescriptionSection />
    <Advantages />

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
              <li><span>phone: +36 765 465 54</span></li>
              <li><span>email: info@myclinic.eu</span></li>
              <li><span>address: 6748, Northway the woods 100</span></li></ul>
            </div>
            <div class="iframe_center"><iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6049.113340004045!2d-74.00314519957925!3d40.70576047781836!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1393707192173" width="390" height="420" style="border:0"></iframe></div>

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

export default {
  components: {
    DescriptionSection,
    Advantages
  }
}
</script>

<style></style>


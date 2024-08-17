<template>
  <footer>
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-text">
          <div class="footer-about-us">
            <div class="footer-about-us-title footer-title">
              <p>about us</p>
            </div>
            <div class="footer-about-us-subtitle footer-subtitle">
              <p>Nepal's Coolest Eyewear Store<br>
                ORDER ANYTIME AND RECEIVE FREE AND FAST DELIVERY.</p>
            </div>
          </div>
          <div class="footer-policy">
            <div class="footer-policy-title footer-title">
              <p>policy</p>
            </div>
            <div class="footer-policy-subtitle footer-subtitle">
              <ul>
                <li>Delivery</li>
                <li>Exchange and Return</li>
              </ul>
              <ul>
                <li>Payment</li>
                <li>Cancellation</li>
              </ul>
            </div>
          </div>
          <div class="footer-contact">
            <div class="footer-contact-title footer-title">
              <p>contact</p>
            </div>
            <div class="footer-contact-subtitle footer-subtitle">
              <p><span>Phone</span><a href="tel:9823-749-232">9823-749-232</a></p>
              <p><span>Email</span><a href="mailto:visioncustomercare@outlook.com">visioncustomercare@outlook.com</a>
              </p>
              <p><span>Address</span><a href="#">Maitidevi, Kathmandu</a></p>
            </div>
          </div>
          <div class="footer-socials">
            <div class="footer-socials-title footer-title">
              <p>socials</p>
            </div>
            <div class="footer-socials-subtitle footer-subtitle">
              <a><img src="/insta-default.svg"></a><a><img src="/twitter-default.svg"></a><a><img
                  src="/facebook-default.svg"></a><a><img src="/youtube-default.svg"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style>
.footer-container {
  width: 100%;
  height: 240px;
  background-color: #090808;
  display: flex;
  justify-content: center;

}

.footer-text {
  display: flex;
  flex-wrap: wrap;
  width: calc(1440px - 312px);
  justify-content: space-between;
  padding-top: 30px;
}

.footer-title p {
  font-weight: 600;
  font-size: 18px;
  color: #FFFFFF;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.footer-subtitle p {
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 300;
}
.footer-subtitle li{
  margin: 0;
}

.footer-contact-subtitle {
  display: flex;
  justify-content: space-between;
  width: 767px;
}

.footer-contact-subtitle span {
  margin-right: 10px;
}

.footer-contact-subtitle a {
  color: #FFFFFF;
  font-weight: 200;
}
.footer-policy-subtitle {
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 300;
  display: flex;
  width: 316px;
  justify-content: space-between;
  margin-bottom: 25px;
}
.footer-socials {
  display: flex;
  width: 317px;
  justify-content: space-between;
  align-items: center;
}

.footer-socials-subtitle {
  display: flex;
  width: 206px;
  justify-content: space-between;
}
</style>
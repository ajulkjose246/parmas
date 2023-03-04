<?php require("../header.php");
session_start();
$usr_id = $_SESSION['user']['usr_id']; ?>
<!-- <script src="https://checkout.razorpay.com/v1/checkout.js"></script> -->
<script src="/parmas/assets/js/cdn/checkout.js"></script>
<link rel="stylesheet" href="/parmas/assets/css/offerings.css">

<section style="background-color: #eee;">
  <div class="text-center container py-5">
    <h1 class="text-center fw-bolder">HOLY MASS OFFERINGS</h1>
    <hr class="divider">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6 col-lg-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
            <img src="/parmas/assets/img/offerings/SOLEMN_HOLY_MASS.webp" class="w-100" />
            <div class="">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title mb-3">SOLEMN HOLY MASS</h5>
            <p>(പാട്ടുകുർബാന)</p>
            <!-- <a class="mb-3 btn btn-success" style="margin-top: 7%;">Offer Now</a> -->
            <button class="mb-3 btn btn-success" style="margin-top: 7%;" onclick="pay_now(150,'SOLEMN HOLY MASS',<?=$usr_id?>)">Offer Now</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
            <img src="/parmas/assets/img/offerings/ORDINARY_HOLY_MASS.webp" class="w-100" />
            <div class="">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title mb-3">ORDINARY HOLY MASS</h5>
            <p>(ഒറ്റ കുർബാന)</p>
            <button class="mb-3 btn btn-success" style="margin-top: 7%;" onclick="pay_now(100,'ORDINARY HOLY MASS',<?=$usr_id?>)">Offer Now</button>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-6 col-lg-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
            <img src="/parmas/assets/img/offerings/HOLY_MASS_DEPARTED.webp" class="w-100" />
            <div class="">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title mb-3">HOLY MASS FOR THE DEPARTED</h5>
            <p>(മരിച്ചവർക്കു വേണ്ടിയുള്ള കുർബാന)</p>
            <button class="mb-3 btn btn-success"  onclick="pay_now(100,'HOLY MASS FOR THE DEPARTED',<?=$usr_id?>)">Offer Now</button>
          </div>
        </div>
      </div>
    </div>

    <h1 class="text-center fw-bolder">OTHER OFFERINGS</h1>
    <hr class="divider">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6 col-lg-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
            <img src="/parmas/assets/img/offerings/departed.webp" class="w-100" />
            <div class="">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title mb-3">OFFICE OF THE DEPARTED</h5>
            <p>(ഒപ്പീസ്)</p>
            <button class="mb-3 btn btn-success"  onclick="pay_now(25,'OFFICE OF THE DEPARTED',<?=$usr_id?>)">Offer Now</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
            <img src="/parmas/assets/img/offerings/NOVENA.webp" class="w-100" />
            <div class="">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title mb-3">NOVENA</h5>
            <p>(നൊവേന)</p>
            <button class="mb-3 btn btn-success"  onclick="pay_now(60,'NOVENA',<?=$usr_id?>)">Offer Now</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
            <img src="/parmas/assets/img/offerings/NOVENA.webp" class="w-100" />
            <div class="">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title mb-3">LADEENJU</h5>
            <p>(ലദീഞ്ഞ്)</p>
            <button class="mb-3 btn btn-success"  onclick="pay_now(60,'LADEENJU',<?=$usr_id?>)">Offer Now</button>
        </div>
      </div>
    </div>
  </div>

</section>
<?php require("../footer.php") ?>
<script>
        function pay_now(amt,name,uid) {
          if(uid!=null){
            jQuery.ajax({
                type: 'post',
                url: 'payment_process.php',
                data: "amt=" + amt + "&name=" + name + "&usr_id=" + uid,
                success: function (result) {
                    var options = {
                        "key": "rzp_test_UY1y7bu0apmIK4",
                        "amount": amt * 100,
                        "currency": "INR",
                        "name": "PARMAS",
                        "description": name,
                        "image": "https://image.freepik.com/free-vector/logo-sample-text_355-558.jpg",
                        "handler": function (response) {
                            jQuery.ajax({
                                type: 'post',
                                url: 'payment_process.php',
                                data: "payment_id=" + response.razorpay_payment_id,
                                success: function (result) {
                                    window.location.href = "offerings.php";
                                }
                            });
                        }
                    };
                    var rzp1 = new Razorpay(options);
                    rzp1.open();
                }
            });
          }else{
            alert("Pls login")
          }
        }
    </script>
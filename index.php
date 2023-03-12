<?php include "header.php" ?>


<header class="masthead">
    <div class="container px-4 px-lg-5 h-100">
        <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-8 align-self-end">
                <h1 class="text-white font-weight-bold">St. George Church Adakkakundu</h1>
                <hr class="divider" />
            </div>
            <div class="col-lg-8 align-self-baseline">
                <h3 class="text-white-75 mb-5">Jesus answered, “I am the way and the truth and the life. No one
                    comes to the Father except through me“<br> <b>John 14:6</b></h3>
            </div>
        </div>
    </div>
</header>
<section class="page-section" id="services">
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5">
            <div class="col-lg-3 col-md-6 text-center services_card">
                <a class="quickBtn" href="/parmas/pages/liveTV.php">
                    <div class="mt-5">
                        <div class="mb-2"><img class="service_icon" src="./assets/img/live-stream.png"></div>
                        <h3 class="h4 mb-2">Live TV</h3>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-6 text-center services_card">
                <a class="quickBtn" href="/parmas/pages/holy_mass.php">
                    <div class="mt-5">
                        <div class="mb-2"><img class="service_icon" src="./assets/img/holy-chalice.png"></div>
                        <h3 class="h4 mb-2">Holy Mass</h3>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-6 text-center services_card">
                <a class="quickBtn" href="/parmas/pages/offerings.php">
                    <div class="mt-5">
                        <div class="mb-2"><img class="service_icon" src="./assets/img/prayer.png"></div>
                        <h3 class="h4 mb-2">Ask For Prayer</h3>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-6 text-center services_card">
                <a class="quickBtn" href="/parmas/pages/offerings.php">
                    <div class="mt-5">
                        <div class="mb-2"><img class="service_icon" src="./assets/img/give.png"></div>
                        <h3 class="h4 mb-2">Offering</h3>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
<section>
    <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <img src="./assets/img/holy-bible.jpg" class="d-block w-100" style="height: 300px;">
            <div class="carousel-item active">
                <div class="carousel-caption d-none d-md-block">
                    <h5>For I am convinced that neither death nor life, neither angels nor demons, neither the
                        present nor the future, nor any powers, neither height nor depth, nor anything else in all
                        creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.
                    </h5>
                    <h4>Romans 8:38-39</h4>
                </div>
            </div>
            <div class="carousel-item">
                <div class="carousel-caption d-none d-md-block">
                    <h5>There is no fear in love. But perfect love drives out fear, because fear has to do with
                        punishment. The one who fears is not made perfect in love.


                    </h5>
                    <h4>1 John 4:18</h4>
                </div>
            </div>
            <div class="carousel-item">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Jesus looked at them and said, 'With man it is impossible, but not with God. For all things
                        are possible with God.'


                    </h5>
                    <h4>Mark 10:27</h4>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</section>

<section class="gallery-block grid-gallery" id="testings">
    <div class="container">
        <div class="heading">
            <h2>ANNOUNCEMENTS</h2>
            <hr class="divider" />
        </div>
        <div class="row">
            <?php
            $sql = "SELECT * FROM `tbl_announcement` WHERE `status` = 1 ORDER BY `id` DESC LIMIT 3";
            $result = mysqli_query($con, $sql);
            while ($row = mysqli_fetch_array($result)) { ?>
                <div class="col-md-6 col-lg-4">
                    <div class="card border-0 transform-on-hover">
                        <img src="/parmas/assets/img/announcement/<?= $row['image'] ?>" alt="Card Image"
                            class="card-img-top">
                        <div class="card-body">
                            <p class="text-muted text-center card-text">
                                <?= $row['content'] ?>
                            </p>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</section>

<section class="gallery-block grid-gallery">
    <div class="container">
        <div class="heading">
            <h2>FROM THE GALLERY</h2>
            <hr class="divider" />
        </div>
        <div class="row">
            <?php
            $sql = "SELECT * FROM `tbl_gallery` WHERE `img_status`=1 ORDER BY `img_id` DESC LIMIT 6";
            $result = mysqli_query($con, $sql);
            while ($row = mysqli_fetch_array($result)) { ?>
                <div class="col-md-6 col-lg-4 item">
                    <a class="lightbox" href="/parmas/assets/img/gallery/<?= $row['img_location'] ?>">
                        <img class="img-fluid image scale-on-hover"
                            src="/parmas/assets/img/gallery/<?= $row['img_location'] ?>">
                    </a>
                </div>
            <?php } ?>
        </div>
    </div>
</section>
<section class="contact_us_footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-lg-1 text-center">
                <img src="./assets/img/church.png" alt="">
            </div>
            <div class="col-11 col-md-9">
                <h3 class="text-light">Welcome to St George Church!</h3>
                <h5 class="text-light">We are always open to people who loves to get in touch!!</h5>
            </div>
            <div class="col-12 col-md-2 d-grid gap-2 mx-auto">
                <a href="/parmas/pages/contact.php" class="contact_us_btn btn btn-outline-light btn-lg">CONTACT US</a>
            </div>
        </div>
    </div>
</section>


<?php include "footer.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administration</title>
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" /> -->
    <link rel="stylesheet" href="/parmas/assets/css/cdn/swiper-bundle.min.css">
    <link rel="stylesheet" href="/parmas/assets/css/kcym.css">
</head>

<body>
    <?php require("../header.php") ?>
    <div class="slide-container swiper">
        <div class="slide-content">
            <h1 class="text-center fw-bolder">Administration</h1>
            <hr class="divider">
            <div class="card-wrapper swiper-wrapper">
                <?php
                $sql = "SELECT * FROM `tbl_administration` WHERE `usr_status` = 0 ORDER BY `tbl_administration`.`usr_position`";
                $result = mysqli_query($con, $sql);
                while ($row = mysqli_fetch_array($result)) {
                    ?>
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="/parmas/assets/img/administration/<?= $row['usr_profile'] ?>" alt="" class="card-img">
                            </div>
                        </div>
                        <div class="card-content">

                            <?php
                            if ($row['usr_position'] == 1) { ?>
                                <td>Vicar</td>
                            <?php } elseif ($row['usr_position'] == 2) { ?>
                                <td>Assistant Vicar</td>
                            <?php } elseif ($row['usr_position'] == 3) { ?>
                                <td>Chairman</td>
                            <?php } elseif ($row['usr_position'] == 4) { ?>
                                <td>Secretary</td>
                            <?php } elseif ($row['usr_position'] == 5) { ?>
                                <td>Vice Chairman</td>
                            <?php } elseif ($row['usr_position'] == 6) { ?>
                                <td>Joint Secretary</td>
                            <?php } elseif ($row['usr_position'] == 7) { ?>
                                <td>Treasearer</td>
                            <?php } ?>
                            <p class="description">
                                <?= $row['usr_name'] ?>
                            </p>
                            <p class="description">
                                <?= $row['usr_date'] ?>
                            </p>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>

        <div class="swiper-button-next swiper-navBtn"></div>
        <div class="swiper-button-prev swiper-navBtn"></div>
        <div class="swiper-pagination"></div>
    </div>

</body>
<script src="/parmas/assets/js/cdn/jquery.min.js"></script>
<!-- bootstrap 5 -->
<script src="/parmas/assets/js/cdn/bootstrap.bundle.min.js"></script>
<!-- bootstrap 4 -->
<script src="/parmas/assets/js/cdn/popper.min.js"></script>
<script src="/parmas/assets/js/cdn/bootstrap.min.js"></script>

<script src="/parmas/assets/js/cdn/baguetteBox.min.js"></script>
<script src="/parmas/assets/js/script.js"></script>

<script src="/parmas/assets/js/cdn/swiper-bundle.min.js"></script>

<script>
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
    });
</script>

</html>
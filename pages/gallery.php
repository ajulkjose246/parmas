<link rel="stylesheet" href="/parmas/assets/css/gallery.css">
<?php require("../header.php") ?>

<section style="background-color: #eee;">
    <div class="text-center container py-5">
        <h1 class="text-center fw-bolder">GALLERY</h1>
        <hr class="divider">
        <div class="tz-gallery">
            <div align="center" class="mb-3">
                <button class="btn btn-default filter-button" data-filter="all">ALL</button>
                <button class="btn btn-default filter-button" data-filter="Church">CHURCH</button>
                <button class="btn btn-default filter-button" data-filter="School">SCHOOL</button>
            </div>
            <div class="row">
                <?php
                $sql = "SELECT * FROM `tbl_gallery` WHERE `img_status`=1";
                $result = mysqli_query($con, $sql);
                while ($row = mysqli_fetch_array($result)) { ?>
                    <div class="col-sm-6 col-md-4  gallery_product filter Churc <?=$row['img_category']?>">
                        <a class="lightbox" href="/parmas/assets/img/gallery/<?= $row['img_location'] ?>">
                            <img src="/parmas/assets/img/gallery/<?= $row['img_location'] ?>" alt="Park">
                        </a>
                    </div>
                <?php } ?>
            </div>

        </div>

    </div>

</section>
<?php require("../footer.php") ?>
<script src="/parmas/assets/js/cdn/baguetteBox.min.js"></script>
<script>
    baguetteBox.run('.tz-gallery');
</script>
<script>
    $(document).ready(function() {
        $(".filter-button").click(function() {
            var value = $(this).attr('data-filter');
            if (value == "all") {
                $('.filter').show('1000');
            } else {
                $(".filter").not('.' + value).hide('3000');
                $('.filter').filter('.' + value).show('3000');
            }
        });
        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });
</script>
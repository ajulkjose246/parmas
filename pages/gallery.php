<link rel="stylesheet" href="/parmas/assets/css/gallery.css">
<?php require("../header.php") ?>

<section style="background-color: #eee;">
    <div class="text-center container py-5">
        <h1 class="text-center fw-bolder">GALLERY</h1>
        <hr class="divider">
        <div class="tz-gallery">

            <div class="row">
                <?php
                    $sql="SELECT * FROM `tbl_gallery` WHERE `img_status`=1";
                    $result=mysqli_query($con,$sql);
                    while($row=mysqli_fetch_array($result)){?>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href="/parmas/assets/img/gallery/<?=$row['img_location']?>">
                        <img src="/parmas/assets/img/gallery/<?=$row['img_location']?>" alt="Park">
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
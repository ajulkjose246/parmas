<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
<button type="button" style="display: none;" id="modalBtn" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
</button>

<!-- Modal -->
<div style="display: none;" class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-body">
                <div id="modal_type"></div>
                <h5 class="text-center" id="modal_content"></h5>
                <h6 class="text-center">(Automatically redirect the page)</h6>
            </div>
            <div class="modal-footer">
                <a href="/parmas/index.php" id="clsBtn" class="btn btn-secondary" style="display: none;">Close</a>
            </div>
        </div>
    </div>
</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>


<script>
    // eg:modal_message('1 or 2,modal_msg,redirect_page') ==> 1->success 2->Failed 
    //  1->success 2->Failed 
    function modal_message(type, msg, page) {
        if (type == 1) {
            document.getElementById('modal_type').innerHTML = '<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_Yk0pxWYfo6.json" background="transparent" speed="1" style=" height: 200px;" loop autoplay></lottie-player>'
        } else {
            document.getElementById('modal_type').innerHTML = '<lottie-player src="https://assets10.lottiefiles.com/private_files/lf30_mlsj6yqm.json" background="transparent" speed="1" style=" height: 200px;" loop autoplay></lottie-player>'
        }
        document.getElementById('modalBtn').click()
        document.getElementById('modal_content').innerHTML = msg

        setTimeout(
            function() {
                location.href = page
            }, 1500);
    }
</script>
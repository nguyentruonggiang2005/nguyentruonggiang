$(document).ready(function() {
    // Xử lý sự kiện gửi biểu mẫu tìm kiếm
    $('#searchForm').submit(function(event) {
        event.preventDefault();
        var searchQuery = $('#searchInput').val();
        alert("Tìm kiếm: " + searchQuery);
        // Thêm chức năng tìm kiếm vào đây
    });

    // Xử lý sự kiện nhấn nút trailer để đặt src cho video
    $('#trailerModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var videoSrc = button.data('src');
        var modal = $(this);
        modal.find('iframe').attr('src', videoSrc);
    });

    $('#trailerModal').on('hide.bs.modal', function () {
        var modal = $(this);
        modal.find('iframe').attr('src', '');
    });

    // Đoạn mã JavaScript sử dụng jQuery
    $('#myButton').click(function() {
        alert('Hello jQuery!');
    });
});

document.getElementById('submit-comment').addEventListener('click', function () {
    var commentInput = document.getElementById('comment-input');
    var commentText = commentInput.value.trim();

    if (commentText !== '') {
        var commentList = document.getElementById('comments-list');

        var commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        var commentAuthor = document.createElement('h5');
        commentAuthor.textContent = 'Người dùng ẩn danh'; // Thay thế bằng tên người dùng nếu có hệ thống đăng nhập

        var commentContent = document.createElement('p');
        commentContent.textContent = commentText;

        commentDiv.appendChild(commentAuthor);
        commentDiv.appendChild(commentContent);
        commentList.appendChild(commentDiv);

        commentInput.value = ''; // Xóa nội dung trong ô bình luận sau khi gửi
    }
});
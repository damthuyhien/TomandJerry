// Lấy các phần tử từ HTML
const actionButton = document.getElementById('actionButton');
const memberInfo = document.getElementById('memberInfo');

// Thêm sự kiện khi nhấn nút
actionButton.addEventListener('click', function() {
    // Đổi display thành 'flex' để hiển thị phần thông tin nhóm
    memberInfo.style.display = 'flex';
});

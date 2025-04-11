// Lấy các phần tử từ HTML
const actionButton = document.getElementById('actionButton');
const memberInfo = document.getElementById('memberInfo');

// Thêm sự kiện khi nhấn nút
actionButton.addEventListener('click', function() {
    // Hiển thị phần thông tin nhóm
    memberInfo.style.display = 'flex';
});


function showMemberInfo() {
    document.getElementById('memberInfo22').innerHTML = 'Nhóm 1: Nguyễn Văn A, Nguyễn Văn B, Nguyễn Văn C';
}




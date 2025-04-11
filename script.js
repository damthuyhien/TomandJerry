// Lấy các phần tử từ HTML
const actionButton = document.getElementById('actionButton');
const memberInfo = document.getElementById('memberInfo');

function showMemberInfo() {
    document.getElementById('memberInfo22').innerHTML = `
      <h3>Nhóm 1</h3>
      <ul>
        <li>
          Nguyễn Văn A<br>
          <img src="images/th.jpg" alt="Nguyễn Văn A" width="100">
        </li>
        <li>
          Nguyễn Văn B<br>
          <img src="images/tom.jpg" alt="Nguyễn Văn B" width="100">
        </li>
        <li>
          Nguyễn Văn C<br>
          <img src="images/tom.jpg" alt="Nguyễn Văn C" width="100">
        </li>
      </ul>
    `;
  }



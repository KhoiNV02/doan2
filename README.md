# Tên Dự Án 

## Mô tả
[Phần mềm quản lý hoạt động, sự kiện và câu lạc bộ tại đại học UIT] - là một phần mềm tổng hợp, quản lý các hoạt động sự kiện tại đại học Công nghệ Thông tin dành cho sinh viên của trường.

## Hướng Dẫn Cài Đặt

1. **Yêu cầu Hệ Thống:**
    - Ram 4GB.
2. **Cách Cài Đặt:**
    - Clone toàn bộ code về.
    - Mở terminal, chạy lệnh 'cd nodejs' để truy cập vào folder chính.
    - Chạy lệnh 'npm i' để cài đặt tất cả các gói cần thiết.
## Hướng Dẫn Sử Dụng

1. **Khởi Chạy Dự Án:**
    -  Sau khi cài xong, chạy lệnh 'npm start' để khởi chạy dự án.
    - Sau khi khởi chạy thành công, truy cập vào địa chỉ 'http://localhost:3000/' để trải nghiệm ứng dụng.

2. **Cách Chơi:** 
    - Phần mềm với 3 phần quyền người dùng khác nhau, truy cập vào các phân quyền người dùng bằng tài khoản và mật khẩu được cấp dưới đây:
      + Phân quyền sinh viên:
        * TK: 20520999.
        * MK: 123.
       + Phân quyền cấp bậc quản lý tầm trung (Hội sinh viên trường, các khoa hoặc CLB):
        * TK: (Trường là : UIT; Khoa là : CNPM).
        * MK: 123.
        *  + Phân quyền admin:
        * TK: admin.
        * MK: 123.
## Tính Năng
Tính năng được phân chia dựa trên các phân quyền người dùng khác nhau:
- Sinh viên: 
  + Tổng hợp, phân loại và hiển thị các sự kiện đã và đang có.
  + "Xét thưởng" giúp tổng hợp lại các hoạt động sự kiện sinh viên đã tham gia, ngoài ra còn tiến hành gợi ý thêm 1 số hoạt động đang mở để cho sinh viên tăng cơ hội xét
    thưởng danh hiệu khi tham gia đồng thời cũng sẽ cung cấp và thông báo các danh hiệu xét thưởng đang được mở.
  + "Đóng góp" hỗ trợ sinh viên đóng góp các ý tưởng về các hoạt động sự kiện hay cho phía nhà trường.
  + "Cập nhật" sinh viên có thể tiến hành cập nhật các chứng chỉ sinh viên nhận được khi tham gia các hoạt động và sự kiện để phía nhà trường sử dụng khi xét danh hiệu.
- Quản lý cấp trung:
  + Thêm mới sự kiện thuộc quyền quản lý của phòng ban liên quan.
  + Xem, xóa, sửa các sự kiện chịu quyền quản lý liên quan.
  + Cập nhật danh sách sinh viên đã tham gia sự kiện hoạt động của mình để tiện cho việc sinh viên xét danh hiệu.
- Admin:
  + Chọn sự kiện tiêu biểu để đăng lên mục sự kiện nổi bật và tiêu biểu của trang sự kiện chính.
  + Mở đăng ký xét thưởng để mở đăng ký các danh hiệu để sinh viên có thể tiến hành đăng ký xét danh hiệu.
  + Kiểm tra chứng chỉ của sinh viên đã upload khi họ muốn xét danh hiệu.
## Mô tả API
- /: Tải giao diện trang đăng nhập.
- /home: Tải giao diện trang sự kiện chính của tài khoản sinh viên.
- /home/getHot: Tải lên các sự kiện nổi bật từ database.  
- /home/getMajor:Tải lên các sự kiện thuộc quyền quản lý của Khoa.
- /home/getclb: Tải lên các sự kiện thuộc quyền quản lý của CLB.
- /home/getSchool: Tải lên các sự kiện thuộc phòng ban sự kiện của trường.
- /Update:Tải giao diện trang cập nhật chứng chỉ.
- /Update/delete:Tiến hành xóa chứng chỉ người dùng đã chọn ra khỏi database.
- /Update/getCertificate: Tải lên các chứng chỉ sinh viên đã cập nhật trước đó mà còn hạn sử dụng.
- /Update/Update: Cập nhật lại các thông tin liên quan đến chứng chỉ theo nhu cầu của sinh viên.
- /Reward:Tải giao diện xét thưởng danh hiệu.
- /Reward/getReward: Tải lên nội dung sự kiện hoạt động sinh viên đã tham gia từ database.
- /upSK: Tải giao diện thêm sự kiện.
- /upSK/upsk: Thêm mới sự kiện vào database.
- /upSK/updateSK: Cập nhật nội dung sự kiện vào database.
- /upDSSV: Tải giao diện cập nhật danh sách sinh viên.
- /upDSSV/UPDSSV: Thêm mới danh sách nội dung danh sách sinh viên mới.
- /skTieuBieu: Tải giao diện quản lý sự kiện nổi bật.
- /skTieuBieu/Update: Cập nhật lại sự kiện tiêu biểu.
- /xet: Tải giao diện mở xét danh hiệu.
- /xet/Update: Chỉnh sửa nội dung xét các danh hiệu.
- /checkCC: Tải giao diện kiểm tra chứng chỉ.
## Tác Giả
- Tên tác giả: Nguyễn Văn Khôi.
- Liên hệ:khoinguyenvan2002.se@gmail.com



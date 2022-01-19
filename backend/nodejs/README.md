## Câu hỏi phỏng vấn Node.js cho Fresher

### 1. First class function là gì ?

First class function hay hàm hạng nhất là khi một hàm được sử dụng như một biến (được gán, truyền như tham số hay trả về). Có nhiều ngôn ngữ lập trình như Scala, Haskell, và JavaScript... đều có hàm hạng nhất.
Các hàm này có thể truyền dưới dạng tham số hay trả về cho một hàm khác gọi là hoc(high-order function).

Các hàm `map()` và `filter()` là các hoc phổ biến được dùng.

### 2. Node.js là gì và nó hoạt động thế nào ?

Nodejs là một nền tảng (Platform) phát triển độc lập được xây dựng trên V8 JavaScript Engine – trình thông dịch thực thi mã JavaScript giúp chúng ta có thể xây dựng được các ứng dụng web như các trang video clip, các forum và đặc biệt là trang mạng xã hội phạm vi hẹp một cách nhanh chóng và dễ dàng mở rộng.

NodeJS có thể chạy trên nhiều nền tảng hệ điều hành khác nhau từ Window cho tới Linux, OS X nên đó cũng là một lợi thế. NodeJS cung cấp các thư viện phong phú ở dạng Javascript Module khác nhau giúp đơn giản hóa việc lập trình và giảm thời gian ở mức thấp nhất.

Node.js được xây dựng và phát triển từ năm 2009, bảo trợ bởi công ty Joyent, trụ sở tại California, Hoa Kỳ.

Ý tưởng chính của Node js là sử dụng non-blocking, hướng sự vào ra dữ liệu thông qua các tác vụ thời gian thực một cách nhanh chóng. Bởi vì, Node js có khả năng mở rộng nhanh chóng, khả năng xử lý một số lượng lớn các kết nối đồng thời bằng thông lượng cao.

Nếu như các ứng dụng web truyền thống, các request tạo ra một luồng xử lý yêu cầu mới và chiếm RAM của hệ thống thì việc tài nguyên của hệ thống sẽ được sử dụng không hiệu quả. Chính vì lẽ đó giải pháp mà Node js đưa ra là sử dụng luồng đơn (Single-Threaded), kết hợp với non-blocking I/O để thực thi các request, cho phép hỗ trợ hàng chục ngàn kết nối đồng thời.

### 3. Quản lý package trong ứng dụng Node.js ?

Nó có thể được quản lý bởi một số trình cài đặt package. Nổi bật là npm và yarn. Cả hai đều cung cấp hầu hết tất cả các thư viện javascript với các tính năng mở rộng kiểm soát các cấu hình dành riêng cho môi trường. Để duy trì các phiên bản thư viện đang được cài đặt trong một dự án, chúng tôi sử dụng package.json và package-lock.json để không gặp vấn đề gì khi chuyển ứng dụng đó sang một môi trường khác.

### 4. Node.js có tốt hơn các framework khác ?

- Node.js cung cấp sự đơn giản trong quá trình phát triển nhờ blocking I/O và mô hình bất đồng bộ dẫn đến thời gian phản hồi nhanh và xử lý đồng thời, không giống như các framework khác nơi các dev phải sử dụng quản lý luồng.
 
- Nó chạy trên công cụ Chrome V8 được viết bằng C++ và có hiệu suất cao với sự cải tiến liên tục.
 
- Ngoài ra, vì chúng ta sẽ sử dụng Javascript trong cả frontend và backend nên việc phát triển sẽ nhanh hơn nhiều.
 
- Và cuối cùng, có rất nhiều thư viện mà tôi cần nên không phải phát minh lại bánh xe.

### 5. Giải thích các bước về cách luồng điều khiển kiểm soát các lệnh gọi hàm ?

- Kiểm soát trật tự thực thi
- Thu thập dữ liệu
- Giới hạn đồng thời
- Gọi bước sau trong chương trình.
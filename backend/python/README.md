# Câu hỏi phỏng vấn Python

## Python là gì ?

Python được phát triển bởi Guido van Rossum và công bố vào ngày February 20, 1991. Nó là một tròng những ngôn ngữ lập trình được yêu thích và phổ biến nhất thế giới. Về bản chất nó là ngôn ngữ thông dịch do đó nó cung cấp sự linh hoạt trong việc kết hợp ngữ nghĩa động. Nó cũng là một ngôn ngữ mã nguồn mở và miễn phí với cú pháp rất đơn giản và rõ ràng. Điều này giúp mọi người dễ dàng học python. Python cũng hỗ trợ lập trình hướng đối tượng và được sử dụng phổ biến nhất để thực hiện lập trình mục đích chung.

Do tính chất đơn giản và khả năng đạt được nhiều chức năng trong ít dòng code hơn, nên mức độ phổ biến của python đang tăng lên rất nhiều. Python cũng được sử dụng trong Máy học, Trí tuệ nhân tạo, Phát triển Web, Web Scraping và nhiều lĩnh vực khác do khả năng hỗ trợ tính toán mạnh mẽ bằng cách sử dụng các thư viện mạnh mẽ. Vì thế, nhu cầu tuyển các nhà dev python là rất lớn trên toàn thế giới. Các công ty sẵn sàng cung cấp các đặc quyền và lợi ích tuyệt vời cho những người này.

## Lợi ích của sử dụng Python

- Python là ngôn ngữ lập trình đa năng có cú pháp đơn giản, dễ học, nhấn mạnh tính dễ đọc và do đó giảm chi phí bảo trì chương trình. Hơn nữa, ngôn ngữ này có khả năng viết script, hoàn toàn là mã nguồn mở và có số lượng thư viện hỗ trợ dồi dào.

- Cấu trúc dữ liệu cấp cao của nó, kết hợp với tính năng kiểu động và liên kết động, thu hút một cộng đồng lớn các lập trình viên sử dụng nó để triển khai và phát triển ứng dụng nhanh chóng.

## Câu hỏi phỏng vấn cho Fresher

### 1. Thế nào là ngôn ngữ kiểu động ?

Trước khi hiểu về ngôn ngữ kiểu động ta nên biết về kiểu là gì. Trong ngôn ngữ lập trình, kiểu đề cập đến việc kiểm tra kiểu dữ liệu. Nếu một ngôn ngữ kiểu mạnh, thì `"1" + 2` sẽ báo lỗi vì không thể tự động ép kiểu. Nhưng nếu là ngôn ngữ kiểu yếu thì sẽ cho về kết quả là `12`.

Kiểm tra kiểu có hai loại:
- **Static**: kiểm tra kiểu dữ liệu trước khi thực thi.
- **Dynamic**: kiểm tra kiểu dữ liệu khi đang thực thi.

Python là ngôn ngữ thông dịch, thực thi câu lệnh theo từng dòng do đó việc kiểm tra kiểu xảy ra khi đang thực thi. Python là ngôn ngữ kiểu động.

![](./assets/dynamically_typed_language.png)

### 2. Ngôn ngữ thông dịch là gì ?

Ngôn ngữ thông dịch là ngôn ngữ thực thi từng dòng lệnh, ví dụ như Python, JavaScript, R, PHP và Ruby. Chương trình viết bằng ngôn ngữ thông dịch có thể chạy trực tiếp từ code, không cần bước biên dịch.

### 3. PEP 8 là gì và tại sao nó lại quan trọng ?

PEP là viết tắt của **Python Enhancement Proposal**. Một PEP là một tài liệu thiết kế chính thống cung cấp thông tin từ cộng đồng Python hoặc mô tả tính năng mới của Python. PEP 8 đặc biệt quan trọng vì nó ghi lại các hướng dẫn về phong cách code Python. Rõ ràng việc đóng góp cho cộng đồng nguồn mở Python đòi hỏi bạn phải tuân theo các nguyên tắc về phong cách này một cách nghiêm ngặt.

## 4. Scope trong Python

Tất cả đối tượng ở các hàm Python đều nằm trong một scope. Một scope là một khối code nơi các đối tượng trong Python có liên quan. Namespace xác định duy nhất tất cả các đối tượng bên trong một chương trình. Tuy nhiên, các namespace này cũng có một phạm vi được xác định cho chúng, nơi bạn có thể sử dụng các đối tượng của chúng mà không cần bất kỳ tiền tố nào. Một vài ví dụ về scope được tạo trong quá trình thực thi bằng Python như sau:

- Một **local scope** đề cập đến đối tượng cục bộ khả dụng trong hàm hiện tại.

- Một **global scope** đề cập đến đối tượng khả dụng trong suốt quá trình thực thi code kể từ khi chúng ra đời.

- Một **module-level scope** đề cập đến đối tượng toàn cụ của module hiện tại có thể truy cập trong chương trình.

- Một **outermost scope** đề cập đến các tên built-in trong chương trình.
Các đối tượng trong scope này được tìm kiếm để tìm tên được tham chiếu. 

### 5. List và Tuple là gì ? Sự khác biệt giữa chúng ?
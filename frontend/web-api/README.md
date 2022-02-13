# Câu hỏi phỏng vấn Web API

![](./assets/web-api.jpg)

## Giới thiệu Web API

- Ngày 7 tháng 2, 2000: Web API được giới thiệu lần đầu tiên cùng với Salesforce. Công ty Salesforce chunhs thức sử dụng API tại hội nghị IDG Demo 2000.
- Ngày 20 tháng 11, 2000: eBay ra mắt eBay API của họ với eBay Developers Program.
- Ngày 16 tháng 7, 2002: Amazon ra mắt dịch vụ web Amazon.con cho phép lập trình viên triển khai nội dung và tính năng của amazon.com vào trang web của họ.

Web API đầu được giới thiệu sớm bởi các trang thương mại điện tử trên Internet. theo thời gian nó ngày càng ngày phổ biến và được sử dụng rộng rãi bởi nhiều tổ chức, doanh nghiệp trên thế giới.

## Câu hỏi phỏng vấn Web API

### 1. Tại sao Web API quan trọng?

Web API được xem như một dịch vụ cơ bản cung cấp thông tin hoặc dữ liệu từ server. Nó quan trọng vì những lý do sau:

- Nó được dùng để cung cấp interface cho web hay ứng dụng để có thể truy cập dữ liệu.
- Nó còn được dùng cho truy cập hay lưu trữ dữ liệu vào cơ sở dữ liệu.
- Nó hỗ trợ nhiều định dạng dữ liệu khác nhau như XML, JSON,...
- Nó phù hợp với nhiều kiểu trình duyệt và thiết bị
- Nó sử dụng băng thông thấp do đó phù hợp với các thiết bị giới hạn băng thông như smartphone,...
- Từ góc nhìn doanh nghiệp, Web API ứng dụng tốt hơn cho UX/UI, tăng lưu lượng truy cập và tạo sự thu hút cho sản phẩm hay dịch vụ công ty.

![](./assets/API_Application.png)

### 2. Chính xác thì Web API là gì?

Web API (Application Programming Interfce), là một API dùng cho truy cập xuyên qua web với giao thức HTTP. Nó được xem là nền tảng tốt nhất để cho phép các dịch vụ khác truy cập dữ liệu hay dịch vụ của server. Nó có thể được xây dựng bằng các công nghệ khác nhau như Nodejs, Java, ASP.NET,...

![](./assets/WEB_API.png)

Web API được dùng:
- Nó chứa các lớp bổ sung giúp chuẩn hóa thông tin liên lạc một cách đơn giản và cung cấp các tùy chọn khác nhau về cách định dạng đầu vào và đầu ra.
- Nếu muốn tạo các dịch vụ hướng tài nguyên, thì các dịch vụ Web API được coi là tốt nhất.
- Hỗ trợ phát triển cả RESTful và SOAP.

### 3. Kiểu trả về được hỗ trợ trong Web API?

Nó không có bất kỳ kiểu dữ liệu cụ thể nào. Nó có thể trả về bất kỳ loại dữ liệu nào tùy thuộc vào yêu cầu nghiệp vụ. Có nhiều phương thức HTTP như GET, POST, PUT, v.v., có thể trả về dữ liệu ở các định dạng khác nhau tùy thuộc vào trường hợp sử dụng.

### 4. Sự khác biệt giữa WCF và Web API?

**WCF (Windows Communication Foundation):** là một framework dùng cho phát triển SOAP (Service-oriented applications). Framework này dùng cho phát triển, cấu hình và triển khai dịch vụ mạng phân phối.

**Web API:** là API cho cả trình duyệt web và web server. 

| Web API | WCF |
|-|-|
| Dùng cho phát triển cả SOAP và RESTful | Chỉ dùng cho phát triển SOAP |
| Hỗ trợ các tính năng MVC như routing, binding,.. | Không hỗ trợ MVC |
| Chỉ dùng giao thức HTTP | Dùng nhiều giao thức HTTP, UDP,.. |
| Là tốt nhất cho phát triển dịch vụ RESTful | Hỗ trợ giới hạn các dịch vụ RESTful |
| Hỗ trợ định dạng UTF-8 | Hỗ trợ văn bản, mã hoá nhị phân, MTOM (Message Transmission Optimization Mechanism) |
| Dùng cho tiết lộ thông tin, dữ liệu với trình duyệt hay thiết bị di động | Dùng cho tạo các dịch vụ sử dụng kênh truyền tải nhanh như TCP, UDP,... |

### 5. Web API tốt hơn WCF ở điểm nào?

- Web API cung cấp đầy đủ các tính năng của HTTP như URI, header, caching, versioning,...
- Web API dùng các định dạng văn bản khác nhau như XML vì nó nhanh hơn các dịch vụ.
- Web API hỗ trợ tính năng MVC.
- Web API cung cấp khả năng mở rộng tốt hơn.
- Web API sử dụng chuẩn bảo mật như xác thực token để cung cấp khả năng bảo mật dịch vụ.
- Người ta không phải xác định hoặc giải thích bất kỳ cài đặt cấu hình bổ sung nào cho các thiết bị khác nhau trong API Web.

### 6. Sự khác biệt giữa REST API và RESTful API?

| REST API | RESTful API |
|-|-|
| Là mẫu kiến trúc sử dụng trong dịch vụ web | Được dùng cho triển khai REST |
| Định dạng dữ liệu dựa vào HTTP | Định dạng dữ liệu JSON, HTTP và văn bản |
| LÀm việc của URL dựa vào request/respone | Làm việc của RESTful dựa vào ứng dụng REST |
| Nó thân thiện hơn với người dùng và có khả năng thích ứng cao với tất cả các doanh nghiệp kinh doanh và CNTT | Nó quá linh hoạt |
| Nó yêu cầu phát triển API cho phép tương tác giữa client và server | Nó chỉ đơn giản tuân theo cơ sở hạ tầng REST cung cấp khả năng tương tác giữa các hệ thống khác nhau trên toàn mạng |

### 7. Ưu điểm của sử dụng REST trong Web API?

- Nó cho phép truyền ít dữ liệu hơn giữa máy khách và máy chủ.
- Nó rất dễ sử dụng và nhẹ.
- Nó cung cấp tính linh hoạt hơn.
- Nó cũng xử lý và kiểm soát nhiều loại cuộc gọi khác nhau, trả về nhiều định dạng dữ liệu khác nhau.
- Nó được coi là tốt nhất để sử dụng nó trong các ứng dụng dành cho thiết bị di động vì nó truyền ít dữ liệu giữa máy khách và máy chủ hơn.
- Nó sử dụng các lệnh gọi HTTP đơn giản để giao tiếp giữa các máy thay vì sử dụng các tùy chọn phức tạp hơn như CORBA, COM +, SOAP hoặc RPC.

### 8. Sự khác biệt giữa REST và SOAP?


| SOAP | REST |
|-|-|
| Một giao thức gửi nhận thông điệp có định dạng XML | Một loại kiến trúc bao gồm các quy tắc để thao tác với server |
| Sử dụng WSDL để giao tiếp giữa máy chủ và máy khách | Sử dụng XML hoặc JSON để gửi nhận dữ liệu |
| Gọi các dịch vụ thông qua phương thức RPC | Gọi các dịch vụ qua đường dẫn URL |
| Kết quả trả về không dễ đọc | Kết quả trả về dễ đọc vì đơn giản chỉ là text XML hoặc JSON |
| Có thể truyền qua nhiều giao thức khác nhau như HTTP, SMTP, FTP,…	| Chỉ có thể truyền qua HTTP |
| JS có thể dùng để gọi SOAP, nhưng rất khó để làm | Quá đơn giản nếu dùng JS |
| Hiệu suất không tốt bằng REST | Hiệu suất tốt hơn SOAP, tốn ít tài nguyên CPU hơn, code ngắn gọn hơn |

### 9. Web API 2.0 là gì?


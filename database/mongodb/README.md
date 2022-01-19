# Câu hỏi phỏng vấn MongoDB

Khi xử lý dữ liệu có hai kiểu dữ liệu mà ta có thể gặp là:
- Dữ liệu có cấu trúc
- Dữ liệu phi cấu trúc

Dữ liệu cấu trúc thường được lưu trữ dạng bảng trong khi dữ liệu phi cấu trúc thì không. Để quản lý các tập hợp dữ liệu phi cấu trúc như log, dữ liệu IoT, cơ sở dữ liệu NoSQL được sử dụng.

MongoDB là gì?
- MongoDB là cơ sở dữ liệu NoSQL mã nguồn mở được viết bằng C++. Nó sử dụng tài liệu dạng JSON để lưu trữ dữ liệu.
- Nó là một cơ sở dữ liệu hướng tài liệu, cung cấp khả năng mở rộng dễ dàng, đa nền tảng.
- MongoDB hoạt động dựa trên khái niệm Collection và Document.
- Nó kết hợp khả năng mở rộng quy mô với các tính năng như chỉ mục thứ cấp, truy vấn phạm vi, sắp xếp, tổng hợp và chỉ mục không gian địa lý.
- MongoDB được phát triển bởi MongoDB Inc. và được cấp phép theo Server Side Public License (SSPL).

## Câu hỏi phỏng vấn MongoDB

### 1. Lợi ích của MongoDB ?

- MongoDB hỗ trợ các truy vấn loại so sánh trường, dựa trên phạm vi, mẫu chuỗi. để tìm kiếm dữ liệu trong cơ sở dữ liệu
- MongoDB hỗ trợ chỉ mục chính và phụ trên bất kỳ trường nào
- MongoDB về cơ bản sử dụng các đối tượng JavaScript thay cho các thủ tục
- MongoDB sử dụng lược đồ cơ sở dữ liệu động
- MongoDB rất dễ tăng hoặc giảm quy mô
- MongoDB có hỗ trợ sẵn có để phân vùng dữ liệu (Sharding).

### 2. Document trong MongoDB là gì >

Một document trong MongoDB là một tập hợp key/value. Nó được biểu diễn bằng map, hash, hoặc dictionary. Trong JavaScript, document được biểu diễn dưới dạng các đối tượng:

```js
{"greeting": "Hello world!"}
```

Các document phức tạp sẽ chứa nhiều cặp key/value:

```js
{"welcome": "Hello world!", "views": 3}
```

### 3. Collection trong MongoDB 

Collection là một nhóm document. nếu một document trong MongoDB tương tự như một hàng trong SQL, thì một collection sẽ tương tự như một bảng.

Các document trong cùng một collection có thể khác nhau,... do tính chất **lược đồ dữ liệu động**.

Ví dụ:

```js
{"greeting" : "Hello world!", "views": 3}
{"signoff": "Good bye"}
```

### 4. Cơ sở dữ liệu trong MongoDB

Nhóm các collection nằm trong cơ sở dữ liệu. MongoDB có thể có nhiều cơ sở dữ liệu, mỗi cơ sở dữ liệu chứa nhiều collection.

Một số tên cơ sở dữ liệu dành riêng như sau:
- *admin*
- *local*
- *config*

### 5. MongoDB Shell là gì.

Nó là một JavaScript shell cho phép tương tác với một phiên bản MongoDB từ dòng lệnh. Nhờ đó, người ta có thể thực hiện các chức năng quản trị, kiểm tra một phiên bản hoặc sử dụng MongoDB.

Để bắt đầu shell, ta chạy lệnh mongo:

```shell
$ mongod
$ mongo
MongoDB shell version: 4.2.0
connecting to: test
>
```

Shell là một trình thông dịch JavaScript đầy đủ tính năng, có khả năng chạy các chương trình JavaScript tùy ý. Hãy xem cách phép toán cơ bản hoạt động:

```shell
> x = 100;
200
> x / 5;
20
```

### 6. Scale-Out xảy ra như thế nào trong MongoDB?

Mô hình dữ liệu hướng tài liệu trong MongoDB giúp việc tách dữ liệu trên nhiều server trở nên dữ dàng. Việc cân bằng và tải dữ liệu trên một cụm được thực hiện bởi MongoDB. Sau đó nó sẽ tự động phân phối các document.


Mongos hoạt động như một bộ định tuyến truy vấn, cung cấp interface giữa các ứng dụng client và cụm sharded.

Server cấu hình lưu trữ siêu dữ liệu và cài đặt cấu hình cho cụm. MongoDB sử dụng server cấu hình để quản lý các khóa phân tán. Mỗi cụm shard phải có máy chủ cấu hình riêng.

![](./assets/Mongos.png)
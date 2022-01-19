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

## Câu hỏi phỏng vấn MongoDB cho Fresher

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
{
    "welcome": "Hello world!", 
    "views": 3
}
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

Mô hình dữ liệu hướng tài liệu trong MongoDB giúp việc tách dữ liệu trên nhiều server trở nên dễ dàng. Việc cân bằng và tải dữ liệu trên một cụm được thực hiện bởi MongoDB. Sau đó nó sẽ tự động phân phối các document.

Mongos hoạt động như một bộ định tuyến truy vấn, cung cấp interface giữa các ứng dụng client và cụm được shard.

Config server lưu trữ siêu dữ liệu và cài đặt cấu hình cho cụm. MongoDB sử dụng config server để quản lý các khóa phân tán. Mỗi cụm được shard phải có config server riêng.

![](./assets/Mongos.jpg)

### 7. Các tính năng của MongoDB ? 

- **Indexing** hỗ trợ chỉ mục thứ cấp và cung cấp tính năng đánh chỉ mục duy nhất, đa hợp, không gian địa lý và toàn văn bản.
- **Aggregation** cung cấp framework aggregation dựa trên khái niệm xử lý dữ liệu trong pipelines.
- **Special collection và index types**: nó hỗ trợ time-to-live collection cho dữ liệu sẽ hết hạn vào một thời điểm nhất định.
- **File storage** cung cấp giao thức đơn giản cho lưu trữ file và thông tin file.
- **Sharing** là quá trình chia sẽ dữ liệu trên nhiều máy.

### 8. Làm sao để thêm dữ liệu trong MongoDB ?

Phương thức thêm dữ liệu cơ bản trong MongoDB là "insert". Để thêm một document ta dùng `insertOne`:

```
> db.books.insertOne({"title": "Start With Why"})
```

Để thêm nhiều document vào một collection, ta có thể dùng `insertMany`, phương thức này cho phép chuyển một mảng document vào cơ sở dữ liệu.

### 9. Làm thế nào để cập nhật một document ?

Sau khi document được lưu trữ trong cơ sở dữ liệu, nó có thể được cập nhật bằng một trong các phương pháp sau: `updateOne`, `updateMany` và `replaceOne`. 

`updateOne` và `updateMany` mỗi cái lấy một document lọc làm tham số đầu tiên và một document chỉnh sửa làm tham số thứ hai. `replaceOne` cũng lấy một bộ lọc làm tham số đầu nhưng với tham số thức hai, `replaceOne` sẽ mong đợi tài liệu thay thế phù hợp với filter.

```js
{
   "_id" : ObjectId("4b2b9f67a1f631733d917a7a"),
   "name" : "alice",
   "friends" : 24,
   "enemies" : 2
}
```

### 10. Cách xoá một document ?

Xoá trong MongoDB được hỗ trợ bằng `deleteOne` và `deleteMany`. Cả hai phương thức này đều nhận vào một bộ lọc document làm tham số đầu tiên. Bộ lọc chỉ định một tập hợp các tiêu chí phù hợp với việc xoá document.

```
> db.books.deleteOne({"_id" : 3})
```

### 11. Làm sao để truy vấn trong MongoDB ?

Phương thức `find` được dùng để thực hiện truy vấn trong MongoDB. Truy vấn trả về một tập con document trong một collection, có thể là không có document nào cũng có thể là toàn bộ. Document được trả về được xác định bởi tham số đầu tiên cần tìm là tiêu chí truy vấn document.

```
> db.users.find({"age" : 24})
```

### 12. Các kiểu dữ liệu trong MongoDB ? 

MongoDB hỗ trợ nhiều kiểu dữ liệu dưới dạng giá trị trong document. Các document trong MongoDB tương tự như các đối tượng trong JavaScript. Cùng với bản chất key/value thiết yếu của JSON, MongoDB bổ sung hỗ trợ cho một số kiểu dữ liệu bổ sung. Các kiểu dữ liệu phổ biến trong MongoDB là:

- Null

```js
{"x" : null}
```

- Boolean

```js
{"x" : true}
```

- Number

```js
{"x" : 4}
```

- String

```js
{"x" : "foobar"}
```

- Date

```js
{"x" : new Date()}
```

- Regular expression

```js
{"x" : /foobar/i}
```

- Array

```js
{"x" : ["a", "b", "c"]}
```

- Embedded document

```js
{"x" : {"foo" : "bar"}}
```

- Object ID

```js
{"x" : ObjectId()}
```

- Binary Data là một chuỗi các byte tùy ý.

- Code
{"x" : function() { /* ... */ }}

### 13. Khi nào sử dụng MongoDB ?

Bạn nên sử dụng MongoDB khi bạn đang xây dựng các ứng dụng internet và doanh nghiệp cần phát triển nhanh chóng và mở rộng quy mô một cách gọn gàng. MongoDB phổ biến với các nhà dev đang xây dựng các ứng dụng có khả năng mở rộng bằng cách sử dụng các phương pháp agile.

MongoDB là một lựa chọn tuyệt vời nếu bạn cần:
- Hỗ trợ phát triển lặp đi lặp lại nhanh chóng.
- Mở rộng quy mô đến mức cao của lưu lượng đọc và ghi - MongoDB hỗ trợ mở rộng quy mô theo chiều ngang thông qua Sharding, phân phối dữ liệu trên một số máy và tạo điều kiện cho các hoạt động thông lượng cao với bộ dữ liệu lớn.
- Quy mô kho dữ liệu của bạn có một kích thước lớn.
- Phát triển loại hình triển khai khi doanh nghiệp thay đổi.
- Lưu trữ, quản lý và tìm kiếm dữ liệu với các văn bản, không gian địa lý hoặc chuỗi thời gian.
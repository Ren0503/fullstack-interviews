# Câu hỏi phỏng vấn PostgreSQL

### 1. PostgreSQL là gì?

PostgreSQL là một hệ thống quản trị cơ sở dữ liệu quan hệ-đối tượng (object-relational database management system) có mục đích chung, hệ thống cơ sở dữ liệu mã nguồn mở tiên tiến nhất hiện nay.

PostgreSQL được phát triển dựa trên POSTGRES 4.2 tại phòng khoa học máy tính Berkeley, Đại học California.

PostgreSQL được thiết kế để chạy trên các nền tảng tương tự UNIX. Tuy nhiên, PostgreSQL sau đó cũng được điều chỉnh linh động để có thể chạy được trên nhiều nền tảng khác nhau như Mac OS X, Solaris và Windows.

PostgreSQL là một phần mềm mã nguồn mở miễn phí. Mã nguồn của phần mềm khả dụng theo license của PostgreSQL, một license nguồn mở tự do. Theo đó, bạn sẽ được tự do sử dụng, sửa đổi và phân phối PostgreSQL dưới mọi hình thức.

PostgreSQL không yêu cầu quá nhiều công tác bảo trì bởi có tính ổn định cao. Do đó, nếu bạn phát triển các ứng dụng dựa trên PostgreSQL, chi phí sở hữu sẽ thấp hơn so với các hệ thống quản trị dữ liệu khác.

### 2. Làm thế nào để đánh chỉ mục trong Postgres?

Chỉ mục (Indexex) là các hàm có sẵn trong Postgres được sử dụng cho các truy vấn tìm kiếm để đạt hiệu quả cao hơn đối với một bảng trong cơ sở dữ liệu. Giả sữ rằng bạn có một bảng với hàng ngìn bản ghi và câu truy vấn của bạn thì chỉ có vài bản ghi là phù hợp với điều kiện, như vậy sẽ mất rất nhiều thời gian để tìm và trả về nững hàng thoả mã điều kiện này vì nó phải thực hiện hoạt động tìm kiếm trên từng hàng đơn lẻ. Điều này chắc chẵn không hiệu quả đối với một hệ thống xử lý dữ liệu khổng lồ. Bây giờ nếu hệ thống này có một chỉ mục trên cột mà chúng tôi đang áp dụng tìm kiếm, nó có thể sử dụng một phương pháp hiệu quả để xác định các hàng phù hợp bằng cách chỉ đi qua một vài cấp độ. Đây được gọi là lập chỉ mục (indexing).

```sql
SELECT * FROM some_table WHERE table_col=120
```

### 3. Làm thế nào để thay đổi kiểu dữ liệu của cột?

Có thể sử dụng lệnh ALTER TABLE như bên dưới

```sql
ALTER TABLE tname
ALTER COLUMN col_name [SET DATA] TYPE new_data_type;
```

### 4. Lệnh dùng cho tạo cơ sở dữ liệu trong Postgres?

Cú pháp tạo cơ sở dữ liệu trong Postgres,

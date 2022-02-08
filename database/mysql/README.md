# Câu hỏi phỏng vấn MySQL

![](./assets/mysql.png)

## MySQL là gì?

MySQL là hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) mã nguồn mở, chạy nhanh, tin cậy và dễ sử dụng. MySQL dựa trên chuẩn SQL để biên dịch trên nhiều nền tảng, nó là hệ quản trị cơ sở dữ liệu SQL đa luồng và đa người dùng.

Dữ liệu trong cơ sở dữ liệu MySQL được lưu dưới dạng bảng. Một bảng là một tập hợp dữ liệu có quan hệ, trong bảng bao gồm cột và hàng.

MySQL có client độc lập cho phép người dùng tương tác trực tiếp với cơ sở dữ liệu MySQL bằng SQL, nhưng cũng có thể triển khai các ứng dụng sử dụng ngôn ngữ khác.

Hiện tại MySQL là cơ sở dữ liệu phổ biến nhất thế giới.

## Câu hỏi phỏng vấn MySQL cho Fresher


### 1. MySQL là gì?

MySQL là hệ quản trị cơ sở dữ liệu mã nguồn mở lớn nhất thế giới, đặc biết được dùng rất nhiều cho các dự án, ứng dụng, website trên internet.

### 2. Ưu điểm của MySQL?

- **Dễ sử dụng:** MySQL là cơ sở dữ liệu tốc độ cao, ổn định, dễ sử dụng và hoạt động trên nhiều hệ điều hành cung cấp một hệ thống lớn các hàm tiện ích rất mạnh.
- **Độ bảo mật cao:**  MySQL rất thích hợp cho các ứng dụng có truy cập CSDL trên Internet khi sở hữu nhiều nhiều tính năng bảo mật thậm chí là ở cấp cao.
- **Đa tính năng:** MySQL hỗ trợ rất nhiều chức năng SQL được mong chờ từ một hệ quản trị cơ sở dữ liệu quan hệ cả trực tiếp lẫn gián tiếp.
- **Khả năng mở rộng và mạnh mẽ:** MySQL có thể xử lý rất nhiều dữ liệu và hơn thế nữa nó có thể được mở rộng nếu cần thiết.
- **Nhanh chóng:** Việc đưa ra một số tiêu chuẩn cho phép MySQL để làm việc rất hiệu quả và tiết kiệm chi phí, do đó nó làm tăng tốc độ thực thi.

### 3. Bạn hiểu "cơ sở dữ liệu" là gì?

Cơ sở dữ liệu là hệ thống bao gồm rất nhiều thông tin, dữ liệu được xây dựng theo một cấu trúc nhất định nhằm đáp ứng nhu cầu khai thác, sử dụng của nhiều người hay chạy nhiều chương trình ứng dụng cùng một lúc.

Khi áp dụng hình thức lưu trữ này, nó sẽ giúp khắc phục được những điểm yếu của việc lưu file thông thường trên máy tính. Các thông tin lưu trữ sẽ đảm bảo được nhất quán, hạn chế tình trạng trùng lặp thông tin.

### 4. Chuẩn SQL là gì?

Chuẩn SQL (Structured Query Language) là ngôn ngữ sử dụng cho các RDBMS bên cạnh MySQL như Oracle, Microsoft SQL Server. Có thể coi SQL là ngôn ngữ chung mà bất cứ hệ thống cơ sở dữ liệu quan hệ (RDBMS) nào cũng phải đáp ứng.

### 5. Một cơ sở dữ liệu MySQL bao gồm những gì?

Một cơ sở dữ liệu MySQL bao gồm một hay nhiều bảng, mỗi bảng gồm cột và dòng. Trong đó cột là các thuộc tính dữ liệu còn hàng là các bản ghi dữ liệu.

### 6. Làm thế nào để tương tác với MySQL?

Có 3 cách để tương tác với MySQL:
- dùng lệnh trực tiếp
- qua web interface
- qua ngôn ngữ lập trình

### 7. Truy vấn MySQL là gì?

Một truy vấn là một yêu cầu hay câu hỏi cụ thể. Nó đòi hỏi cơ sở dữ liệu phải trả về một hay nhiều bảng ghi cụ thể.

### 8. Các lệnh phổ biến trong MySQL?

| Command | Action |
|---------|--------|
| ALTER | Chỉnh sửa bảng hay cơ sở dữ liệu |
| BACKUP | Phục hồi bảng |
| CREATE | Tạo cơ sở dữ liệu |
| DELETE | Xoá hàm của bảng |
| DESCRIBE | Mô tả cột của bảng |
| DROP | Xoá bảng hay cơ sở dữ liệu |
| EXIT | Thoát |
| GRANT | Đổi quyền người dùng |
| HELP | Hiển thị bảng trợ giúp |
| INSERT | Thêm dữ liệu |
| LOCK | Khoá bảng |
| QUIT | Giống EXIT |
| RENAME | Đổi tên bảng |
| SHOW | Liệt kê chi tiết đối tượng |
| SOURCE | Thực thi một file |
| STATUS | Hiển thị trạng thái hiện tại |
| TRUNCATE | Làm trống bảng |
| UNLOCK | Mở khoá bảng |
| UPDATE | Cập nhật bảng ghi đã tồn tại |
| USE | Sử dụng cơ sở dữ liệu | 

### 9. Cách tạo cơ sở dữ liệu trong MySQL?

```sql
CREATE DATABASE books;
```

### 10. Cách tạo bảng trong MySQL?

```sql
CREATE TABLE history (
    author VARCHAR(128),
    title VARCHAR(128),
    type VARCHAR(16),
    year CHAR(4)
) ENGINE InnoDB;
```

### 11. Cách chèn dữ liệu vào MySQL?

Lệnh INSERT INTO dùng cho chèn bảng ghi mới vào bảng MySQL:

```sql
INSERT INTO table_name (column1, column2, column3,...)
VALUES (value1, value2, value3,...)
```

Nếu bạn muốn thêm dữ liệu cho tất cả cột trong bảng, bạn không cần chỉ định tên cột trong truy vấn SQL. Tuy nhiên, trật tự của giá trị sẽ tương ứng với thứ tự cột của bảng.

```sql
INSERT INTO table_name 
VALUES (value1, value2, value3,...)
```

### 12. Xoá cột trong MySQL?

```sql
ALTER TABLE classics DROP pages;
```

### 13. Đánh chỉ mục trong MySQL?

Trong MySQL, có nhiều kiểu chỉ mục khác nhau như regular index, fulltext index hay primary key. Các chỉ mục giúp ta tìm kiếm nhanh hơn. Chỉ mục gia tăng hiệu suất bằng cách đánh thứ tự dữ liệu trên đĩa, nhờ đó mà nó tìm kiếm kết quả nhanh hơn, hoặc nói cho SQL engine biết vị trí cần tìm dữ liệu.

Ví dụ: 

```sql
ALTER TABLE history ADD INDEX(author(10));
ALTER TABLE history ADD INDEX(title(10));
ALTER TABLE history ADD INDEX(category(5));
ALTER TABLE history ADD INDEX(year);
DESCRIBE history;
```

### 14. Xoá dữ liệu trong bảng MySQL?

```sql
DELETE FROM table_name
WHERE column_name = value_name
```

### 15. Cách để xem cơ sở dữ liệu trong MySQL?

```sql
mysql> SHOW DATABASES;  
```

### 16. Các kiểu số trong MySQL?

| Type | Ý nghĩa |
|------|---------|
| TINYINIT | Số nguyên rất nhỏ |
| SMALLINT | Số nguyên nhỏ |
| MEDIUMINT | Số nguyên cỡ vừa |
| INT | Số nguyên tiêu chuẩn |
| BIGINT | Số nguyên lớn |
| DECIMAL | Số thập phân |
| FLOAT | Số dấu phẩy động chính xác đơn |
| DOUBLE | Số dấu phẩy động chính xác kép|
| BIT | trường bit |

### 17. Các kiểu chuỗi trong MySQL?

| Type | Ý nghĩa |
|------|---------|
| CHAR | chuỗi (ký tự) với độ dài cố định |
| VARCHAR | chuỗi với độ dài biến |
| BINARY | chuỗi nhị phân độ dài cố định |
| VARBINARY | chuỗi nhị phân độ dài biến |
| TINYBLOB | BLOB (đối tượng nhị phân lớn) rất nhỏ |
| BLOB | Blob nhỏ |
| MEDIUMBLOB | Blob trung bình |
| LONGBLOB | Blob lớn |
| TINYTEXT | Chuỗi rất ngắn |
| TEXT | Chuỗi ngắn|
| MEDIUMTEXT | Chuỗi trung bình |
| LONGTEXT | Chuỗi dài |
| ENUM | Mỗi giá trị cột được gán, một thành viên enum |
| SET | Một tập hợp, mỗi cột giá trị được gán 0 hoặc nhiều tập hợp thành viên |
| NULL | NULL trong SQL là thuật ngữ được sử dụng để biểu thị một giá trị bị thiếu. Giá trị NULL trong bảng là giá trị trong trường có vẻ như là trống. Giá trị này khác với giá trị 0 hoặc một trường có chứa khoảng trắng. |

### 18. Kiểu dữ liệu tạm thời là gì?

| 
| Type | Ý nghĩa |
|------|---------|
| DATE | Giá trị ngày, theo định dang "YYYY-MM-DD" |
| TIME | Giá trị giờ, theo định dang "hh:mm:ss" |
| DATETIMET | Giá trị ngày giờ, theo định dang "YYYY-MM-DD hh:mm:ss" |
| TIMESTAMP | Giá trị thười gian, theo định dang "YYYY-MM-DD hh:mm:ss" |
| YEAR | Giá trị năm, theo định dang "YYYY" hoặc "YY" |

Ví dụ: Để lấy bảng ghi từ Order có ngày là "2018-11-11":

```sql
SELECT * FROM Orders WHERE OrderDate='2018-11-11'
```

### 19. BLOB trong MySQL là gì?

BLOB là một đối tượng nhị phân lớn (Binary Large OBject) có thể chứa một lượng lớn dữ liệu. Có bốn loại BLOB, TINYBLOB, BLOB, MEDIUMBLOB, và LONGBLOB. Những chỉ khác nhau về độ dài tối đa của các giá trị mà chúng có thể giữ.

BLOB được dùng cho lưu giữ một biến có dữ liệu rất lớn. Bạn có thể lưu trữ cả quyển tiểu thuyết trong BLOB nếu cần.

### 20. Cách thêm người dùng vào MySQL?

Bạn có thể thêm người dùng bằng cách dùng lệnh CREATE và chỉ định định danh.

```sql
CREATE USER 'testuser' IDENTIFIED BY "sample password";
```
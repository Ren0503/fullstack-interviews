## Câu hỏi phỏng vấn SQL

### 1. Cơ sở dữ liệu là gì?

Cơ sở dữ liệu là một tập hợp dữ liệu có tổ chức, được lưu trữ và truy xuất từ một hệ thống máy tính cục bộ hoặc từ xa. Cơ sở dữ liệu có thể rất lớn và phức tạp, những cơ sở dữ liệu như vậy được phát triển bằng cách sử dụng các phương pháp thiết kế và mô hình hóa cố định.

### 2. DBMS là gì?

DBMS là viết tắt của Database Management System. DBMS là một phần mềm hệ thống chịu tránh nhiệm tạo, truy xuất, chỉnh sửa và quản lý cơ sở dữ liệu. Nó đảm bảo rằng dữ liệu của ta sẽ được tổ chức nhất quán, và dễ dàng truy cập bằng cách dùng interface giữa cơ sở dữ liệu và người dùng hay phần mềm ứng dụng.

### 3. RDBMS là gì? Nó khác với DBMS như thế nào

RDBMS là viết tắt của Relational Database Management System. Điểm khác biệt của nó với DBMS là RDBMS lưu trữ dữ liệu ở dạng bảng, và các mối quan hệ được xác định là các trường chung giữa các bảng này. Các RDBMS phổ biến nhất hiện này có thể kể đến: MySQL, Oracle, PostgreSQL, Microsoft SQL Server,...

![](./assets/dbms_vs_rdbms.jpg)

### 4. SQL là gì?

SQL là viết tắt của Structured Query Language. Nó là ngôn ngữ chuẩn cho các RDBMS. Nó đặc biệt hữu ích trong việc tổ chức dữ liệu bao gồm các thực thế và các mối quan hệ giữa các thực thế khác nhau của dữ liệu.

### 5. Sự khác biệt giữa SQL và MySQL?

SQL như đã nói ở trên là ngôn ngữ chuẩn cho truy vấn và quản lý cơ sở dữ liệu. Còn MySQL là một RDBMS giống như Postgres hay Oracle, được dùng để quản lý cơ sở dữ liệu SQL.

![](./assets/sql_vs_mysql.jpg)

### 6. Bảng và trường là gì?

Bảng là một tập hợp dữ liệu có tổ chức được lưu trữ dưới dạng hàng và cột. Các cột có thể được phân loại thành hàng dọc và hàng ngang. Các cột trong bảng được gọi là trường trong khi các hàng có thể được gọi là bản ghi.

### 7. Ràng buộc trong SQL?

Các ràng buộc được sử dụng để chỉ định các quy tắc liên quan đến dữ liệu trong bảng. Nó có thể được áp dụng cho một hoặc nhiều trường trong bảng SQL, khi bắt đầu tạo bảng hoặc sau khi tạo bằng lệnh `ALTER TABLE`. Các ràng buộc là:

- **NOT NULL** - Không được thêm giá trị `NULL` vào một cột.
- **CHECK** - Xác minh rằng tất cả các giá trị trong một trường thỏa mãn một điều kiện.
- **DEFAULT** - Tự động gán giá trị mặc định nếu không có giá trị nào được chỉ định cho trường.
- **UNIQUE** - Đảm bảo các giá trị được chèn vào trường là duy nhất trong bảng.
- **INDEX** - Đánh chỉ mục một trường, giúp truy xuất nhanh hơn.
- **PRIMARY KEY** - Định danh duy nhất cho từng bản ghi trong bảng.
- **FOREIGN KEY** - Đảm bảo tính toàn vẹn tham chiếu cho một bản ghi trong bảng khác.

## 8. Khoá chính là gì?

Ràng buộc `PRIMARY KEY` là định danh duy nhất cho mỗi hàng trong bảng. Nó phải chứa các giá trị `UNIQUE` và có ràng buộc `NOT NULL` ngầm.

Một bảng trong SQL bị hạn chế nghiêm ngặt chỉ có một khóa chính, bao gồm một hoặc nhiều trường (cột).

```sql
CREATE TABLE Students (   /* Create table with a single field as primary key */
   ID INT NOT NULL
   Name VARCHAR(255)
   PRIMARY KEY (ID)
);

CREATE TABLE Students (   /* Create table with multiple fields as primary key */
   ID INT NOT NULL
   LastName VARCHAR(255)
   FirstName VARCHAR(255) NOT NULL,
   CONSTRAINT PK_Student
   PRIMARY KEY (ID, FirstName)
);

ALTER TABLE Students   /* Set a column as primary key */
ADD PRIMARY KEY (ID);
ALTER TABLE Students   /* Set multiple columns as primary key */
ADD CONSTRAINT PK_Student   /*Naming a Primary Key*/
PRIMARY KEY (ID, FirstName);
```

### 9. Ràng buộc UNIQUE là gì?

Ràng buộc `UNIQUE` đảm bảo rằng tất cả các giá trị trong một cột là khác nhau. Điều này cung cấp tính duy nhất cho (các) cột và giúp xác định từng hàng duy nhất. Không giống như khóa chính, có thể có nhiều ràng buộc `UNIQUE` được xác định trên mỗi bảng. Cú pháp code cho `UNIQUE` khá giống với cú pháp của `PRIMARY KEY` và có thể được sử dụng thay thế cho nhau.

```sql
CREATE TABLE Students (   /* Create table with a single field as unique */
   ID INT NOT NULL UNIQUE
   Name VARCHAR(255)
);

CREATE TABLE Students (   /* Create table with multiple fields as unique */
   ID INT NOT NULL
   LastName VARCHAR(255)
   FirstName VARCHAR(255) NOT NULL
   CONSTRAINT PK_Student
   UNIQUE (ID, FirstName)
);

ALTER TABLE Students   /* Set a column as unique */
ADD UNIQUE (ID);
ALTER TABLE Students   /* Set multiple columns as unique */
ADD CONSTRAINT PK_Student   /* Naming a unique constraint */
UNIQUE (ID, FirstName);
```

### 10. Khoá ngoại là gì?

`FOREIGN KEY` bao gồm một hoặc một tập hợp các trường trong bảng tham chiếu đến `PRIMARY KEY` trong một bảng khác. Ràng buộc khóa ngoại đảm bảo tính toàn vẹn tham chiếu trong mối quan hệ giữa hai bảng.

Bảng có ràng buộc khóa ngoại được gắn nhãn là bảng con và bảng chứa khóa chính được gắn nhãn là bảng tham chiếu hoặc bảng cha.

```sql
CREATE TABLE Students (   /* Create table with foreign key - Way 1 */
   ID INT NOT NULL
   Name VARCHAR(255)
   LibraryID INT
   PRIMARY KEY (ID)
   FOREIGN KEY (Library_ID) REFERENCES Library(LibraryID)
);

CREATE TABLE Students (   /* Create table with foreign key - Way 2 */
   ID INT NOT NULL PRIMARY KEY
   Name VARCHAR(255)
   LibraryID INT FOREIGN KEY (Library_ID) REFERENCES Library(LibraryID)
);

ALTER TABLE Students   /* Add a new foreign key */
ADD FOREIGN KEY (LibraryID)
REFERENCES Library (LibraryID);
```

### 11. JOIN là gì? Liệt kê các kiểu JOIN?

Mệnh đề SQL Join được sử dụng để kết hợp các bản ghi (hàng) từ hai hoặc nhiều bảng trong cơ sở dữ liệu SQL dựa trên một cột có liên quan giữa hai bảng.

![](./assets/sql_join.jpg)

Có 4 kiểu JOIN trong SQL:

- **INNER JOIN**: truy xuất các bảng ghi có giá trị phù hợp giữa hai bảng liên quan đến join. Đấy là kiểu join được sử dụng rộng rãi cho truy vấn.

```sql
SELECT *
FROM Table_A
JOIN Table_B;
SELECT *
FROM Table_A
INNER JOIN Table_B;
```

- **LEFT (OUTER) JOIN**: Truy xuất tất cả các bản ghi/hàng từ bên trái và các bản ghi/hàng phù hợp từ bảng bên phải.

```sql
SELECT *
FROM Table_A A
LEFT JOIN Table_B B
ON A.col = B.col;
```

- **RIGHT (OUTER) JOIN**: Truy xuất tất cả các bản ghi/hàng từ bên phải và các bản ghi/hàng phù hợp từ bảng bên trái.

```sql
SELECT *
FROM Table_A A
RIGHT JOIN Table_B B
ON A.col = B.col;
```

- **FULL (OUTER) JOIN**: Truy xuất tất cả các bản ghi có sự phù hợp trong bảng bên trái hoặc bên phải.

```sql
SELECT *
FROM Table_A A
FULL JOIN Table_B B
ON A.col = B.col;
```

### 12. Self-Join là gì?

Self JOIN à một trường hợp join thông thường trong đó một bảng được liên kết với chính nó dựa trên một số mối quan hệ giữa (các) cột của chính nó. Self-Join  sử dụng mệnh đề INNER JOIN hoặc LEFT JOIN và tên bí danh bảng để gán các tên khác nhau cho bảng trong truy vấn. 

```sql
SELECT A.emp_id AS "Emp_ID",A.emp_name AS "Employee",
B.emp_id AS "Sup_ID",B.emp_name AS "Supervisor"
FROM employee A, employee B
WHERE A.emp_sup = B.emp_id;
```

### 13. Cross-Join là gì?

Cross-Join có thể được định nghĩa là một tích descartes của hai bảng trong phép join. Bảng sau khi join có số hàng là tích descartes số hàng của hai bảng. Nếu mệnh đề WHERE được sử dụng trong cross-join thì truy vấn sẽ hoạt động giống như một INNER JOIN. 

```sql
SELECT stu.name, sub.subject 
FROM students AS stu
CROSS JOIN subjects AS sub;
```

![](./assets/cross_join.jpg)

### 14. Đánh chỉ mục là gì? Giải thích các kiểu chỉ mục khác nhau?

Chỉ mục trong cơ sở dữ liệu là một dạng cấu trúc dữ liệu cung cấp chức năng tìm kiếm dữ liệu nhanh trong cột hay bảng. Nó tăng tốc độ chi truy cập dữ liệu từ cơ sở dữ liệu với chi phí bổ sung ghi và bộ nhớ để duy trì cấu trúc dữ liệu chỉ mục. 

```sql
CREATE INDEX index_name   /* Create Index */
ON table_name (column_1, column_2);
DROP INDEX index_name;   /* Drop Index */
```

Các kiểu chỉ mục có thể được tạo cho các mục đích khác nhau:

- **Unique/Non-Unique Index**: chỉ mục duy nhất là chỉ mục giúp duy trì tính toàn vẹn của dữ liệu bằng cách đảm bảo rằng không có hai hàng dữ liệu nào trong bảng có giá trị khoá giống nhau. Khi một chỉ mục duy nhất đã được xác định cho một bảng, tính duy nhất được thực thi bất cứ khi nào khoá được thêm vào hay thay đổi chỉ mục.

```sql
CREATE UNIQUE INDEX myIndex
ON students (enroll_no);
```

Ngược lại các chỉ mục không phải là duy nhất không được dùng để ràng bụooc các bảng mà chúng được liên kết với nhau. Các chỉ mục này được dùng để cải thiện hiệu suất truy vấn bằng cách duy trì thứ tự được sắp xếp của các giá trị dữ liệu được sắp xếp thường xuyên.

- **Clustered/Non-Clustered Index**: 

Clustered Index lưu trữ và sắp xếp dữ liệu vật lý trong bảng dựa trên các giá trị khóa của chúng. Các cột khóa này được chỉ định trong định nghĩa index. Mỗi bảng chỉ có duy nhất một Clusterd Index vì bản thân các dòng dữ liệu được lưu trữ và sắp xếp theo thứ tự vật lý dựa trên các cột trong loại Index này.

Non-Clustered có một cấu trúc tách biệt với dữ liệu hàng trong bảng. Mỗi một index loại này chứa các giá trị của các cột khóa trong khai báo của index, và mỗi một bản ghi giá trị của key trong index này chứa một con trỏ tới dòng dữ liệu tương ứng của nó trong bảng.

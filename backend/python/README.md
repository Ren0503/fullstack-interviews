# Câu hỏi phỏng vấn Python

![](./assets/python.png)

## Python là gì?

Python được phát triển bởi Guido van Rossum và công bố vào ngày 20 tháng 2, 1991. Nó là một tròng những ngôn ngữ lập trình được yêu thích và phổ biến nhất thế giới. Về bản chất nó là ngôn ngữ thông dịch do đó nó cung cấp sự linh hoạt trong việc kết hợp ngữ nghĩa động. Nó cũng là một ngôn ngữ mã nguồn mở và miễn phí với cú pháp rất đơn giản và rõ ràng. Điều này giúp mọi người dễ dàng học python. Python cũng hỗ trợ lập trình hướng đối tượng và được sử dụng rộng rãi trong giới lập trình.

Do tính chất đơn giản và khả năng đạt được nhiều chức năng trong ít dòng code hơn, nên mức độ phổ biến của python đang tăng lên rất nhiều. Python cũng được sử dụng trong Máy học, Trí tuệ nhân tạo, Phát triển Web, Web Scraping và nhiều lĩnh vực khác do khả năng hỗ trợ tính toán mạnh mẽ bằng cách sử dụng các thư viện mạnh mẽ. Vì thế, nhu cầu tuyển các nhà phát triển python là rất lớn trên toàn thế giới. Các công ty sẵn sàng cung cấp các đặc quyền và lợi ích tuyệt vời cho những dev này.

## Lợi ích của sử dụng Python

- Python là ngôn ngữ lập trình đa năng có cú pháp đơn giản, dễ học, nhấn mạnh tính dễ đọc nhờ đó giảm chi phí bảo trì chương trình. Hơn nữa, ngôn ngữ này có khả năng viết script, hoàn toàn là mã nguồn mở và có số lượng thư viện hỗ trợ dồi dào.

- Cấu trúc dữ liệu cấp cao kết hợp với tính năng kiểu động và liên kết động, thu hút một cộng đồng lớn các lập trình viên sử dụng nó để triển khai và phát triển ứng dụng nhanh chóng.

## Câu hỏi phỏng vấn cho Fresher

### 1. Thế nào là ngôn ngữ kiểu động?

Trước khi hiểu về ngôn ngữ kiểu động ta nên biết về kiểu là gì. Trong ngôn ngữ lập trình, kiểu đề cập đến việc kiểm tra kiểu dữ liệu. Nếu một ngôn ngữ kiểu mạnh, thì `"1" + 2` sẽ báo lỗi vì không thể tự động ép kiểu. Nhưng nếu là ngôn ngữ kiểu yếu thì sẽ cho về kết quả là `12`.

Kiểm tra kiểu có hai loại:
- **Static**: kiểm tra kiểu dữ liệu trước khi thực thi.
- **Dynamic**: kiểm tra kiểu dữ liệu khi đang thực thi.

Python là ngôn ngữ thông dịch, thực thi câu lệnh theo từng dòng do đó việc kiểm tra kiểu xảy ra khi đang thực thi. Python là ngôn ngữ kiểu động.

![](./assets/dynamically_typed_language.jpg)

### 2. Ngôn ngữ thông dịch là gì?

Ngôn ngữ thông dịch là ngôn ngữ thực thi từng dòng lệnh, ví dụ như Python, JavaScript, R, PHP và Ruby. Chương trình viết bằng ngôn ngữ thông dịch có thể chạy trực tiếp từ code, không cần bước biên dịch.

### 3. PEP 8 là gì và tại sao nó lại quan trọng?

PEP là viết tắt của **Python Enhancement Proposal**. Một PEP là một tài liệu thiết kế chính thống cung cấp thông tin từ cộng đồng Python hoặc mô tả tính năng mới của Python. PEP 8 đặc biệt quan trọng vì nó ghi lại các hướng dẫn về phong cách code Python. Rõ ràng việc đóng góp cho cộng đồng nguồn mở Python đòi hỏi bạn phải tuân theo các nguyên tắc về phong cách này một cách nghiêm ngặt.

## 4. Scope trong Python

Phạm vi (scope) đề cập đến vùng code mà từ đó đối tượng trong Python có thể truy cập được. Do đó, người ta không thể truy cập bất kỳ đối tượng cụ thể nào từ bất kỳ nơi nào trong code, việc truy cập phải được cho phép theo phạm vi của đối tượng.

Các kiểu phạm vi trong Python:

- Một **local scope** đề cập đến đối tượng cục bộ khả dụng trong hàm hiện tại.

- Một **global scope** đề cập đến đối tượng khả dụng trong suốt quá trình thực thi code kể từ khi chúng ra đời.

- Một **module-level scope** đề cập đến đối tượng toàn cụ của module hiện tại có thể truy cập trong chương trình.

- Một **outermost scope** đề cập đến các tên built-in có thể gọi trong chương trình. 

### 5. List và Tuple là gì? Sự khác biệt giữa chúng?

List và Tuple là hai kiểu dữ liệu tuần tự cho lưu trữ tập hợp đối tượng trong Python. List được biểu diễn bằng cặp ngoặc vuông `['sara', 6, 0.19]` trong khi tuple được biểu diễn bằng dấu ngoặc đơn `('ansh', 5, 0.97)`.

Bên cạnh sự khác biệt về cú pháp, điểm khác biệt chính của cả hai là tuple chỉ lưu đối tượng *bất biến*. Có nghĩa là list có thể chỉnh sửa, thêm hay xoá trong khi tuple chỉ lưu hằng và không chỉnh sửa gì được. 

```python
my_tuple = ('sara', 6, 5, 0.97)
my_list = ['sara', 6, 5, 0.97]
print(my_tuple[0])     # output => 'sara'
print(my_list[0])     # output => 'sara'
my_tuple[0] = 'ansh'    # modifying tuple => throws an error
my_list[0] = 'ansh'    # modifying list => list modified
print(my_tuple[0])     # output => 'sara'
print(my_list[0])     # output => 'ansh'
```

### 6. Kiểu dữ liệu trong Python?

Mặc dù Python không yêu cầu kiểu dữ liệu khi khai báo biến nhưng lỗi vẫn xảy là nếu ta dùng kiểu dữ liệu khác với tương thích của nó. Python cung cấp hàm `type()` và `isinstance()` để kiểm tra kiểu của các các biến. Trong Python có các kiểu dữ liệu sau:

- **None**: từ khoá `None` biểu diễn giá trị null trong Python. Có thể thực hiện so sánh bằng với đối tượng kiểu None.

| Tên | Mô tả |
|------------|-------------|
| NoneType | Biểu diễn giá trị Null |

- **Kiểu số**: có 3 kiểu số trong Python là **int**, **float** và **complex**. Bên cạnh đó boolean cũng là kiểu con của int.

| Tên | Mô tả |
|-----|-------|
| int | lưu trữ kiểu số nguyên dạng thập phân, nhị phân, bát phân |
| float | lưu trữ giá trị thập phân, phân số, số chấm động |
| complex | lưu trữ kiểu số phức (A + Bj) với A là phần thực, B là phần ảo |
| bool | lưu giá trị nhị nguyên (True hoặc False) |

- **Kiểu chuỗi**: có 3 kiểu chuỗi cơ bản trong Python - list, tuple 

### 7. Pass trong Python?

Từ khoá `pass` biểu diễn toán tử null trong Python. Nó được dùng nhằm mục đích lắp đầy các khối code trống có thể thực thi trong thời gian chạy nhưng hiện tại vẫn chưa viết. Nếu không có lệnh pass, ta có thể gặp lỗi khi thực thi code.

```python
def myEmptyFunc():
   # do nothing
   pass
myEmptyFunc()    # nothing happens
## Without the pass keyword
# File "<stdin>", line 3
# IndentationError: expected an indented block
```

### 8. Module và package trong Python?


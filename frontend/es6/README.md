## Câu hỏi phỏng vấn ES6 dành cho Fresher

### 1. Các tính năng nổi bật của ES6

* Hỗ trợ các biến hằng
* Block scope hỗ trợ cho tất cả biến, hằng, và hàm
* Giới thiệu arrow function
* Xử lý tham số mở rộng
* Tham số mặc định
* Các ký tự mở rộng và mẫu
* Promise
* Class
* Module
* Tập hợp
* Hỗ trợ map/set

### 2. Hỗ trợ hướng đối tượng trong ES6 như thế nào?
- **Classes** có thể tạo lớp trong ES6. Về cơ bản, hàm lớp xây dựng một khuôn mẫu mà từ đó ta có thể tạo các đối tượng. Khi tạo một thực thế mới của lớp, phương thức constructor sẽ được gọi.
- **Methods** phương thức tĩnh có thể được tìm thấy trong các lớp. Một phương thức tĩnh không giống như một đối tượng mà nó là một hàm được liên kết với lớp. Một phương thức tĩnh không thể được gọi từ một thực thể của lớp.

Ta hãy xem qua getter và setter nhé.
Đóng gói là một khái niệm căn bản trong OOP. Dữ liệu (thuộc tính) sẽ không được truy cập trực tiếp từ bên ngoài, đây là một khía cạnh quan trọng của đóng gói. Một getter (truy cập) hay setter (chỉnh sửa) là những phức thực của thể đã xác định để truy cập hay chỉnh sửa một thuộc tính.

* Tính kế thừa: c lớp cũng có thể kế thừa từ nhau. Lớp cha là lớp kế thừa và con là lớp được kế thừa từ lớp cha.

### 3. Sự khác biệt giữa ES5 và ES6

| ES5 | ES6 |
|-----|-----|
| Là chuẩn thứ 5 của ECMAScript được giới thiệu năm 2009 | Là chuẩn thứ 6 của ECMAScript được giới thiệu năm 2015 |
| Kiểu dữ liệu nguyên thuỷ là string, boolean, number, null và undefined | Giới thiệu thêm kiểu symbol |
| Chỉ có thể khai báo biến với var | Có thể dùng var, và hai cách khai báo biến mới là let và const |
| Sử dụng function để khai báo hàm | Giới thiệu thêm arrow function |
| for cho vòng lặp | Giới thiệu thêm for...of |

### 4. Sự khác biệt giữa let và const? 

Cả let và const đều có block scope. Nếu bạn sử dụng các từ khóa này để khai báo một biến, biến đó sẽ chỉ tồn tại trong block trong cùng bao quanh chúng. Nếu bạn khai báo một biến với let bên trong một block (ví dụ: nếu một điều kiện hoặc một vòng lặp for), thì nó chỉ có thể được truy cập trong block đó.

Các biến được khai báo với từ khóa let có thể thay đổi, có nghĩa là giá trị của chúng có thể được thay đổi. Nó tương tự như từ khóa var, nhưng với lợi ích bổ sung là block scope. Các biến được khai báo với từ khóa const là block scope và bất biến. Khi các biến được khai báo với từ khóa const, giá trị của chúng không thể được sửa đổi hoặc gán lại.

### 5. Thảo luận về arrow function

Trong ES6, arrow function là một cú pháp mới cho khai báo hàm. Arrow function bao gồm tham số theo sau mũi tên (=>) và thân hàm.

```js
const function_name = (arg_1, arg_2, arg_3, ...) => {  
    //body of the function  
}
```

Các điều cần nhớ:
- Nó tiết kiệm kích cỡ code.
- Với hàm một dòng, lênh return là không bắt buộc.
- Ràng buộc ngữ cảnh.
- Với hàm một tham số, dấu ngoặc đơn là không bắt buộc.
- Không hoạt động với `new`.

### 6. Khi nào không nên dùng arrow function?

#### Function Hoisting, Named Functions:

#### Phương thức đối tượng:

```js
var a = {
    b: 7,
    func: () => {
        this.b--;
    }
}
```

Giá trị của b không 
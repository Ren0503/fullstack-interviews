# Câu hỏi phỏng vấn ES6

![](./assets/es6.jpg)
## ES6 là gì?

ECMAScript, hay ES6, đã được xuất bản vào tháng 6 năm 2015. Sau đó nó được đổi tên thành ECMAScript 2015. Hỗ trợ trình duyệt web đầy đủ cho ngôn ngữ vẫn chưa hoàn thành, mặc dù việc hỗ trợ cho các phần chính đã được tiến hành. Các trình duyệt web chính hỗ trợ một số tính năng của ES6. Tuy nhiên, có thể sử dụng phần mềm được gọi là trình chuyển đổi để chuyển đổi code ES6 thành ES5, vì ES5 được hỗ trợ tốt hơn trên hầu hết các trình duyệt.

## Câu hỏi phỏng vấn ES6 dành cho Fresher

### 1. Các tính năng nổi bật của ES6

* Hỗ trợ các biến hằng
* Block scope hỗ trợ cho tất cả biến, hằng, và hàm
* Giới thiệu hàm arrow
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
Đóng gói là một khái niệm căn bản trong OOP. Dữ liệu (thuộc tính) sẽ không được truy cập trực tiếp từ bên ngoài, đây là một khía cạnh quan trọng của đóng gói. Một getter (truy cập) hay setter (chỉnh sửa) là những phương thức của thực thể đã xác định để truy cập hay chỉnh sửa một thuộc tính.

- **Tính kế thừa**, các lớp cũng có thể kế thừa từ nhau. Lớp cha là lớp kế thừa và con là lớp được kế thừa từ lớp cha.

### 3. Sự khác biệt giữa ES5 và ES6

| ES5 | ES6 |
|-----|-----|
| Là chuẩn thứ 5 của ECMAScript được giới thiệu năm 2009 | Là chuẩn thứ 6 của ECMAScript được giới thiệu năm 2015 |
| Kiểu dữ liệu nguyên thuỷ là string, boolean, number, null và undefined | Giới thiệu thêm kiểu symbol |
| Chỉ có thể khai báo biến với var | Có thể dùng var, và hai cách khai báo biến mới là let và const |
| Sử dụng function để khai báo hàm | Giới thiệu thêm hàm arrow |
| for cho vòng lặp | Giới thiệu thêm for...of |

### 4. Sự khác biệt giữa let và const? 

Cả let và const đều có block scope. Nếu bạn sử dụng các từ khóa này để khai báo một biến, biến đó sẽ chỉ tồn tại trong block trong cùng bao quanh chúng. Nếu bạn khai báo một biến với let bên trong một block (ví dụ: nếu một điều kiện hoặc một vòng lặp for), thì nó chỉ có thể được truy cập trong block đó.

Các biến được khai báo với từ khóa let có thể thay đổi, có nghĩa là giá trị của chúng có thể được thay đổi. Nó tương tự như từ khóa var, nhưng với lợi ích bổ sung là block scope. Các biến được khai báo với từ khóa const là block scope và bất biến. Khi các biến được khai báo với từ khóa const, giá trị của chúng không thể được sửa đổi hoặc gán lại.

### 5. Thảo luận về hàm arrow

Trong ES6, hàm arrow là một cú pháp mới cho khai báo hàm. hàm arrow bao gồm tham số theo sau mũi tên (=>) và thân hàm.

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

### 6. Khi nào không nên dùng hàm arrow?

Không nên sử dụng hàm arrow cho các trường hợp dưới đây:

#### Function Hoisting, Named Functions:

Một hàm arrow là ẩn danh, ta khong thể dùng chúng khi muốn hoisting hay khi cần dùng khi dùng named function (hàm có chỉ định rõ kiểu dữ liệu của tham số đầu vào)

#### Phương thức đối tượng:

```js
var a = {
    b: 7,
    func: () => {
        this.b--;
    }
}
```

Giá trị của b không giảm khi bạn gọi `a.func`. Vì nó không được liên kết đến bất cứ cái gì và sẽ kế thừa giá trị từ scope cha của nó.

#### Callback function với ngữ cảnh động

```js
var btn = document.gêtlementById('clickMe');
btn.addEventListener('click', () => {
    this.classList.toggle('on');
});
```

Ta sẽ nhận về lỗi `TypeError` khi click button. Vì sự thực là nó được liên kết đến scope cha thay vì button.

#### this/aguments:

Vì hàm arrow không có `this` của nó và nó phụ thuộc vào ngữ cảnh bên ngoài nên ta cũng không thể dùng chúng trong trường hợp ta cần dùng `this` trong hàm.

### 7. Hàm generator là gì?

Là tính năng mới được giới thiệu trong ES6. Hàm Generator trả về một đối tượng sau khi tạo nhiều giá trị theo thời gian. Ta có thể lặp qua đối tượng và trích xuất từng giá trị từ hàm một. Một hàm trả về một đối tượng được lặp đi lặp lại gọi là hàm generator. Trong ES6, cú pháp cho nó là `fuction*` cùng từ khoá `yield` bên trong nó.

```js
function *Numbers() {
    let num = 1;
    while(true) {
        yield num++;
    }
}
  
var gen = Numbers();
 
// Loop to print the first
// 5 Generated numbers
for (var i = 0; i < 5; i++) {
 
    // Generate the next number
    document.write(gen.next().value);
 
    // New Line
    document.write("<br>");
}
```

Kết quả:

```
1
2
3
4
5
```

Giá trị yield trở thành giá trị kế tiếp trong chuỗi tuần tự mỗi lần yield được gọi. Ngoài ra, hàm generator tính toán kết quả output của chúng theo yêu cầu, cho phép chúng biểu diễn một cách hiệu quả các chuỗi tuần tự dài hơn thậm chí là vô hạn.

### 8. Toán tử spread trong ES6?

Toán tử spread có cú pháp giống với rest parameters tuy nhiên cả hai có ý nghĩa khác nhau. Rest parameters được sử dụng khi khai báo hàm, ngược lại toán tử spread được sử dụng trong các câu lệnh, biểu thức hoặc khi gọi hàm.

ES6 cung cấp một toán tử mới gọi là toán tử spread bao gồm ba dấu chấm (...). Spread cho phép bạn trải ra các phần tử của một đối tượng có thể lặp lại chẳng hạn như một array, map hoặc set.

```js
let arr1 = [4, 5, 6];  
    
let arr2 = [1, 2, 3, ...arr1, 7, 8, 9, 10];  
    
console.log(arr2);
```

Kết quả:

```
[ 1 2 3 4 5 6 7 8 9 10 ]
```

### 9. Giải thích về destructuring trong ES6?

Destructuring được giới thiệu trong ES6 là một cách để trích xuất dữ liệu từ mảng hay đối tượng thành các biến duy nhất. Ta có thể tạo các đoạn nhỏ hơn từ đối tượng hay mảng bằng phương thức này. Ví dụ:

```js
let greeting = ["Good", "Morning"];
let [g1, g2] = greeting;
console.log(g1, g2);
```

Kết quả:

```
Good Morning
```

### 10. Promise trong ES6 là gì?

Lập trình bất đồng bộ là khái niệm quan trọng trong JavaScript. Các tiến trình chạy độc lập với luồng chính trong lập trình bất đồng bộ. Promise là cách tiếp cận tiện lợi để xử lý lập trình bất đồng bộ trong ES6. Callback được dùng để chủ yếu trong bất đồng bộ trước khi ES6 giới thiệu về Promise.

Tuy nhiên, vì callback dễ gây ra callback hell, nên hướng giải quyết cho nó là dùng promise thay thế.

**Callback hell**

```js
f1(function(x){
    f2(x, function(y){
        f3(y, function(z){ 
            ...
        });
    });
}); 
```

**Cú pháp Promise**

```js
const promise = new Promise((resolve,reject) => {....}); 
```

Ví dụ:

```js
const myPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0) {
        resolve('Hello, I am positive number!');
    }
    reject(new Error('I failed some times'));
})
```

### 11. Giải thích về Rest parameter trong ES6?

Rest Parameters dịch theo tiếng Anh chuyên ngành công nghệ thông tin có nghĩa là tham số còn lại, điều này có nghĩa là bạn có thể khai báo một hàm với số lượng tham số không xác định, đây là một tính năng mới trong ES6 khiến Javascript ngày càng trở nên mạnh mẽ hơn.

```js
function display(...args) {  
    let ans = 0;  
    for (let i of args) {  
        ans *= i;  
    }  
    console.log("Product = "+ans);  
}  
    
display(4, 2, 3);
```

Kết quả:

```
Product = 24
```

### 12. Thảo luận về template literal trong ES6?

Temaplate Literals là một cú pháp mới dùng để khai báo biến, được thêm vào trong phiên bản ES6. Khi sử dụng cú pháp này các bạn có thể:
- Khai báo biến nhiều dòng một cách hết sức đơn giản. (Nếu bạn sử dụng cách truyền thống thì sẽ không thể nào khai báo được một biến mà có sử dụng ký tự xuống dòng, nhưng với template thì có thể).
- Binding biến vào trong template một cách dễ dàng.

Ký tự `` dùng để mở và đóng template literal. Ký hiệu dollar và dấu ngoặc nhọn "${}" được dùng để đặt một biến vào template literal.

```js
let s1 = "Good";  
  
let s2 = "Day";  
   
let s = `${s1} ${s2}`;  
console.log(s);
```

Kết quả:

```
Good Day
```

### 13. Ưu điểm của class trong ES6?

Các ưu điểm của class ở ES6:
- Cú pháp đơn giản và ít lỗi hơn.
- Khi xây dựng một hệ phân cấp kế thừa, ES6 kết hợp cú pháp cũ và mới, làm giảm lỗi và đơn giản hoá các quy trình.
- Class trong ES6 ngăn chặn lỗi do toán tử `new`. Nếu một đối tượng không hợp lệ khởi tạo, class sẽ loại trừ vấn đề này bằng cách để constructor trả về lỗi.
- Class còn gọi một phương thức từ prototype. Với cú pháp ES6, nó dễ dừng hơn các phiên bản trước.

### 14. Cách tạo class trong ES6?

Từ khoá `class` dùng cho tạo lớp trong ES6. Ta có thể dùng biểu thức lớp hoặc khai báo lớp đẻ tạo. Chỉ có hàm và contrustor là được cho phép trong lớp. Các thành phần 

### 16. Tham số mặc định là gì?

Nếu không có giá trị nào được truyền cho tham số, ta có thể dùng tham số mặc định để thiết lập giá trị mặc định cho tham số.

```js
var display = (x , y = 2) => {  
    console.log(x + " " + y);  
}  
display(1);
```

Kết quả:

```
1 2
```

### 17. Bạn hiểu gì về IIFE?


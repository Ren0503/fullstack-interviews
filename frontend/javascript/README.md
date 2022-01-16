# Câu hỏi phỏng vấn JavaScript

Được phát triển bởi Brendan Eich vào năm 1995, JavaScript là một trong những ngôn ngữ lập trình phổ biến nhất với các web developer.

Nó được tạo ra cho phát triển các trang web động. Một chương trình JS được gọi là script, nó có thể được đính kèm vời bất kỳ trang web HTML nào. Các script sẽ tự động chạy khi trang được tải.

Ở hiện tại JavaScript cũng có thể chạy được trên cả server hay bất kỳ thiết bị nào có JavaScript Engine.

Dưới đây là các câu hỏi phỏng vấn JavaScript thường gặp.

## Câu hỏi dành cho Fresher

### 1. Sự khác biệt giữa các kiểu dữ liệu trong JavaScript ?

Trong JavaScript các kiểu dữ liệu được chia làm hai loại là kiểu nguyên thuỷ và đối tượng. Để biết kiểu dữ liệu của các biến JavaScript, ta có thể sử dụng **typeof**.

**Kiểu nguyên thuỷ**

***String*** - biểu diễn một mảng ký tự hay một chuỗi. Kiểu chuỗi trong javascript có thể sử dụng một cặp dấu ngoặc kép hoặc dấu ngoặc kép đơn.

```js
 var str = "Vivek Singh Bisht"; //sử dụng dấu ngoặc kép
 var str2 = 'John Doe'; // sử dụng dấu ngoặc đơn
```

***Number*** - biểu diễn cả số nguyên và số thực.

```js
var x = 3; // số nguyên
var y = 3.6; // số thực
```

***BigInt*** - kiểu dữ liệu này được sử dụng để lưu trữ các số vượt quá giới hạn của kiểu dữ liệu Number. Nó có thể lưu trữ các số nguyên lớn và được biểu diễn bằng cách thêm “n” vào một chữ số nguyên.

```js
var bigInteger =  234567890123456789012345678901234567890;
```

***Boolean*** - kiểu luận lý, có hai giá trị là *true* và *false*. Thường được dùng với điều kiện.

```js
var a = 2;
var b =  3;
var c =  2;
(a == b) // trả về false
(a == c) // trả về true
```

***undefined*** - khi giá trị của một biến là không xác định.

```js
var x; // giá trị của x là undefined
var y = undefined; // ta cũng có thể gán một biến là undefined
```

***null*** - biểu diễn giá trị null. Vì JavaScript là case-sensitive, null sẽ không giống với` Null`, `NULL`, hoặc bất kỳ biến thể khác.

```js
var z = null;
```

***Symbol*** - mới được giới thiệu trong ES6. Nó lưu trữ các giá trị duy nhất và ẩn danh.

```js
var symbol1 = Symbol('symbol');
```

Sử dụng `typeof` để tìm kiểu nguyên thuỷ:

```js
typeof "John Doe" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns "undefined"
typeof null // Returns "object" (đặc trưng của JavaScript)
typeof Symbol('symbol') // Returns Symbol
```

Trong JavaScript nếu dữ liệu không phải là kiểu nguyên thuỷ thì tất cả đều là object.

**Object** dùng để lưu trữ tập hợp dữ liệu

```js
// Tập hợp dữ liệu dạng key-value 

var obj1 = {
   x:  43,
   y:  "Hello world!",
   z: function(){
      return this.x;
   }
}
      
// Tập hợp dữ liệu dạng danh sách
      
var array1 = [5, "Hello", true, 4.1];  
```

### 2. Giải thích về Hoisting trong Javascript ?

Hoisting là một hành vi mặc định trong Javascript, nó sẽ chuyển tất cả khai báo biến và hàm lên trên cùng.

![hoisting](./assets/hoisting-in-js.png)

Điều này có nghĩa là bất kể hàm và biến được khai báo ở đâu, chúng cũng sẽ đuọc chuyển lên đầu scope. Scope có thể là toàn cục hoặc cục bộ.

Ví dụ 1:

```js
hoistedVariable = 3;
console.log(hoistedVariable);
// output là 3 vì biến được khởi tạo trước khi khai báo.
var hoistedVariable;
```

Ví dụ 2:

```js
hoistedFunction();  
// Outputs " Hello world! " kể cả khi hàm được khai báo sau khi gọi.

function hoistedFunction(){ 
  console.log(" Hello world! ");
}
```

Ví dụ 3:

```js
// Hoisting takes place in the local scope as well
function doSomething(){
  x = 33;
  console.log(x);
  var x;
}
```

*Lưu ý*: Khai báo biến được hoisting chứ phép gán biến thì không.

```js
var x;
console.log(x); // Output sẽ trả về "undefined" vì phép gán không được hoisting
x = 23;
```

*Lưu ý*: Để tránh hoisting bạn có thể dùng "use strict"

```js
"use strict";
x = 23; // Báo lỗi x  chưa được khai báo
var x; 
```

### 3. Sự khác biệt giữa toán tử "==" và "===" là như thế nào

Cả hai đều dùng để so sánh, nhưng "==" có thể dùng với bất kỳ kiểu dữ liệu nào còn "===" chỉ dành cho cùng kiểu.

Ví dụ:

```js
var x = 2;
var y = "2";
(x == y)  // Trả về true vì cả hai cùng giá trị

(x === y) // Trả về false vì typeof x là "number" còn typeof y là "string
```

### 4. Giải thích về ép kiểu ngầm trong JavaScript ?

Ép kiểu ngầm trong javascript là sự chuyển đổi tự động của giá trị từ kiểu dữ liệu này sang kiểu khác. Nó xảy ra khi thực hiện một biểu thức với các kiểu dữ liệu khác nhau.

**Ép kiểu String**

Ép kiểu string xảy ra khi dùng toán tử `+`. Một số cộng với một chuỗi, kiểu số sẽ bị ép thành kiểu chuỗi.

Ví dụ:

```js
var x = 3;
var y = "3";
x + y // Returns "33" 
```

```js
var x = 24;
var y = "Hello";
x + y   // Returns "24Hello";
```

Để hiểu về hai ví dụ khi ta cộng một số vào chuỗi, thì khi JavaScript thấy biểu thức `x+y` với hai kiểu khác nhau (một số và một chuỗi), nó chuyển đổi kiểu số thành chuỗi để thực hiện hành động. Sau khi chuyển đổi, cả hai biến đều là kiểu chuỗi, thao tác `+` lúc này sẽ thành phép nối chuỗi kết quả là ra chuỗi "33" và "24Hello".

Ngược lại, khi thực hiện phép toán `-`, thì chuỗi lại bị ép kiểu ngầm thành số. Ví dụ:

```js
var x = 3;
Var y = "3";
x - y    //Returns 0 since the variable y (string type) is converted to a number type
```

**Ép kiểu Boolean**

Ép kiểu boolean xảy ra khi sử dụng các toán tử logic, lệnh if hay kiểm tra vòng lặp. Để hiểu về ép kiểu logic, ta cần hiểu về giá trị *truthy* và *falsy*.

Giá trị *truthy* là cái sẽ được ép kiểu thành **true**. Còn *falsy* sẽ được ép kiểu thành **false**.

Tất cả các giá trị ngoại trừ `0`, `0n`, `-0`, `""`, `null`, `undefined`, và `NaN` thì đều là truthy.

Câu lệnh If:

```js
var x = 0;
var y = 23;
        
if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  
        
if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)
```

Toán tử Logic:

Toán tử logic trong javascript không giống các ngôn ngữ lập trình khác, **nó không trả về true hay false, mà nó trả về một toán hạng**.

OR ( || ) - Nếu giá trị đầu tiên là truthy, giá trị đầu tiên sẽ được trả về, ngược lại thì nó trả về giá trị thứ hai.

AND ( && ) - Nếu hai giá trị đều là truthy, giá trị thứ hai sẽ được trả về. Nếu giá trị đầu là falsy sẽ trả về giá trị đầu hoặc giá trị hai là falsy sẽ trả về giá trị hai.

Ví dụ:

```js
var x = 220;
var y = "Hello";
var z = undefined;
        
x | | y    // Returns 220 since the first value is truthy
        
x | | z   // Returns 220 since the first value is truthy
        
x && y    // Returns "Hello" since both the values are truthy
        
y && z   // Returns undefined since the second value is falsy
        
if( x && y ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( x || z ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}
```

**Ép kiểu dấu bằng**

Xảy ra khi thực hiện phép "==". Nhớ lại thì phép **"==" được dùng để so sánh hai giá trị khác kiểu**.

Thực tế khi sử dụng "==" một ép kiểu ngầm đã xảy ra, chuyển đổi tất cả toán hạng về cùng kiểu và so sánh chúng.

Ví dụ:

```js
var a = 12;
var b = "12";
a == b // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.
```

Ép kiểu ngầm không xảy ra khi dùng "===". 

```js
var a = 226;
var b = "226";

a === b // Returns false because coercion does not take place and the  operands are of different types. Hence they are not equal.
```

### 5. JavaScript là ngôn ngữ kiểu tĩnh hay kiểu động ?

JavaScript là ngôn ngữ kiểu động. Trong ngôn ngữ kiểu động, kiểu dữ liệu của biến được kiểm tra trong khi đang chạy chương trình ngược lại với kiểu tĩnh, nơi kiểu dữ liệu của biến được kiểm tra khi biên dịch.

![](./assets/static_vs_dynamic_typing.png)

Vì Javascript là ngôn ngữ kiểu động, nên một biến có thể giữ bất kỳ kiểu dữ liệu nào. Ví dụ:

```js
var a = 23;
var a = "Hello World!";
```

### 6. Thuộc tính NaN trong JavaScript là gì ?

Thuộc tính NaN biểu diễn một giá trị **Not-a-Number**. Nó biểu thị một giá trị không phải là số.

`typeof` của NaN trả về `Number`. Muốn kiểm tra một giá trị có phải NaN không, có thể dùng hàm `isNaN()`.

Ví dụ:

```js
isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true
```

### 7. Giải thích về phép gán quá giá trị và phép gán qua tham chiếu ?

Trong JavaScript, kiểu dữ liệu nguyên thuỷ được gán với giá trị, còn kiểu đối tượng được gán bằng tham chiếu.

Trước tiên, ta cần hiểu về điều gì xảy ra khi ta tạo một biến và gán giá trị cho nó.

```js
var x = 2;
```

Trong ví dụ trên, ta tạo một biến `x` và gán nó giá trị là "2". Phép "=" chỉ định một vài không gian trong bộ nhớ, để lưu trữ giá trị là "2" và trả về vị trí được chỉ định trong bộ nhớ. Do đó, biến `x` ở trên trỏ đến vị trí trong bộ nhớ thay vì trỏ trực tiếp đến giá trị 2.

Phép gán thực hiện hành vi khác nhau khi làm việc với kiểu nguyên thuỷ và kiểu đối tượng.

**Phép gán với kiểu nguyên thuỷ**

![](./assets/passed_by_value.png)

```js
var y = 234;
var z = y;
```

Ở ví dụ này, dòng đầu phép gán giá trị cho `y` là kiểu nguyên thuỷ, sau đó ở dòng thứ hai, giá trị của `y` được gán cho `z`. Phép gán chỉ định một vùng không gian mới trong bộ nhớ và trả về địa chỉ của nó. Do đó, biến `z` không chỉ đến vị trí của biến `y` thay vào đó nó chỉ đến vùng không gian mới trong bộ nhớ.

```js
var y = #8454; // y pointing to address of the value 234

var z = y; 
        
var z = #5411; // z pointing to a completely new address of the value 234
        
// Changing the value of y
y = 23;
console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z
```

Từ ví dụ trên, ta có thể thấy rằng các kiểu dữ liệu nguyên thủy khi được truyền cho một biến khác sẽ được truyền theo giá trị. Thay vì chỉ gán cùng một địa chỉ cho một biến khác, giá trị sẽ được gán và không gian bộ nhớ mới được tạo ra.

**Phép gán với kiểu đối tượng**

![](./assets/passed_by_reference.png)

```js
var obj = { name: "Vivek", surname: "Bisht" };

var obj2 = obj;
```

Trong ví dụ trên, phép gán truyền trực tiếp vị trí của biến `obj` đến biến `obj2`. Nói cách khác, tham chiếu của biến `obj` được chuyển cho biến `obj2`.

```js
var obj = #8711;  // obj pointing to address of { name: "Vivek", surname: "Bisht" }

var obj2 = obj;
        
var obj2 = #8711; // obj2 pointing to the same address 
        
        
// changing the value of obj1
        
obj1.name = "Akki";
        
console.log(obj2);
        
// Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.
```

Từ ví dụ trên, ta có thể thấy rằng trong khi truyền các kiểu dữ liệu đối tượng, phép gán trực tiếp truyền địa chỉ (tham chiếu).

Do đó, các kiểu dữ liệu đối tượng luôn được truyền bằng tham chiếu.

### 8. IIFE là gì trong JavaScript ?

Immediately Invoked Function (IIFE) là một hàm được chạy ngay sau khi nó được định nghĩa.

Cú pháp của IIFE:

```js
(function(){ 
  // Do something;
})();
```

Để hiểu về IIFE, trước hết cần hiểu về hai dấu ngoặc đơn được thêm vào để tạo IIFE.

Dấu ngoặc đơn đầu tiên:

```js
(function (){
   //Do something;
})
```

Khi thực thi code javascript, bất cứ khi nào trình biên dịch bắt gặp từ "function" nó cũng sẽ cho rằng ta đang khai báo một function. Do đó, nếu ta không dùng dấu ngoặc đơn, trình biên dịch sẽ báo lỗi vì nó nghĩa ta đang khái báo một function và theo cú pháp thì các function buộc phải có tên.

Để tránh lỗi ta thêm dấu ngoặc đơn vào để trình biên dịch biết đây không phải là khai báo function mà là một biểu thức function.

Dấu ngoặc đơn thứ hai:

```js
(function (){
  //Do something;
})();
```

Từ định nghĩa IIFE, ta biết rằng code sẽ chạy ngay sai khi khai báo. Một function chỉ chạy khi nó được gọi. Nếu ta không gọi, thì chúng ta chỉ nhận về được khai báo hàm.

Do đó để gọi function ta sử dụng dấu ngoặc đơn thứ hai.

### 9. Giải thích về HOC(Higher Order Functions) trong JavaScript ?

Các hàm hoạt động trên các hàm khác bằng cách sử dụng chúng làm tham số hoặc kết quả trả về thì được gọi là Higher Order Functions - HOC. Ví dụ:

```js
function higherOrder(fn) {
  fn();
}
     
higherOrder(function() { console.log("Hello world") }); 
```

```js
function higherOrder2() {
  return function() {
    return "Do something";
  }
}
        
var x = higherOrder2();
x()   // Returns "Do something"
```

### 10. Giải thích về "this" 

Từ khoá "this" trong javascript đề cập đến một đối tượng có thuộc tính là một hàm.

Giá trị của "this" phụ thuộc vào đối tượng đang gọi hàm.

Giả sử ta có code sau:

```js
function doSomething() {
  console.log(this);
}
        
doSomething();
```

Như vậy theo định nghĩa, this đề cập đến một đối tượng có hàm là thuộc tính. Vậy trong đoạn code trên hàm là thuộc tính của đối tượng nào ?

Vì hàm được gọi từ ngữ cảnh tổng thể, nên **hàm sẽ là thuộc tính của đối tượng toàn cục**. Do đó, nếu ta chạy đoạn code trên trình duyệt kết quả sẽ là **window object**.

Ví dụ 2:

```js
var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}
        
obj.getName();
```

Trong đoạn code này, hàm `getName` là thuộc tính của `obj`. Do đó, **this** sẽ đề cập đến đối tượng `obj`, và output sẽ là "vivek".

Ví dụ 3:

```js
var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
        
}
        
var getName = obj.getName;
        
var obj2 = {name:"akshay", getName };
obj2.getName();
```

Output sẽ là "akshay". Mặc dù hàm `getName` được khai báo trong đối tượng `obj`, nhưng ở thời điểm gọi thì `getName()` lại là thuộc tính của `obj2`, do đó "this" sẽ đề cập đến `obj2`. 

Cách ngớ ngẩn để hiểu "this" là, bất cứ khi nào hàm được gọi, hãy kiểm tra đối tượng trước dấu chấm. Giá trị của this sẽ luôn là đối tượng trước dấu chấm.

Nếu không có đối tượng nào như ở ví dụ 1, giá trị sẽ là đối tượng toàn cục.

Ví dụ 4:

```js
var obj1 = {
    address : "Mumbai,India",
    getAddress: function(){
    console.log(this.address); 
  }
}
       
var getAddress = obj1.getAddress;
var obj2 = {name:"akshay"};
obj2.getAddress();   
```

Kết quả sẽ là lỗi, vì từ khóa this tham chiếu đến đối tượng `obj2`, nhưng `obj2` không có thuộc tính “address” ‘, do đó hàm `getAddress` sẽ xảy ra lỗi.

### 11. Giải thích về phương thức call(), aplly() và bind()

#### call()

Đó là một phương thức được xác định trước trong javascript.

Phương thức này gọi một phương thức (hàm) bằng cách chỉ định đối tượng sở hữu.

Ví dụ 1:

```js
function sayHello(){
  return "Hello " + this.name;
}
        
var obj = {name: "Sandy"};
        
sayHello.call(obj);
        
// Returns "Hello Sandy"
```

Phương thức call() cho phép một đối tượng sử dụng phương thức của đối tượng khác

Ví dụ 2:

```js
var person = {
  age: 23,
  getAge: function(){
    return this.age;
  }
}
        
var person2 = {age:  54};
person.getAge.call(person2);
        
// Returns 54  
```

call() chấp nhận tham số:

```js
function saySomething(message){
  return this.name + " is " + message;
}
        
var person4 = {name:  "John"};
        
saySomething.call(person4, "awesome");
// Returns "John is awesome"   
```

#### apply()

Tương tự như phương thức call(). Nhưng khác ở điểm **phương thức call() nhận các tham số riêng biệt, trong khi apply() nhận tham số là một mảng**.

```js
function saySomething(message){
  return this.name + " is " + message;
}
        
var person4 = {name:  "John"};
        
saySomething.apply(person4, ["awesome"]);
```

#### bind()

Phương thức này trả về một hàm mới, trong đó giá trị của "this" sẽ được liên kết với đối tượng sở hữu, được cung cấp dưới dạng một tham số.

Ví dụ:

```js
var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
        
var person1 = {name:  "Vivek"};
        
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
        
// Binds the displayDetails function to the person1 object
        
        
detailsOfPerson1();
// Returns Vivek, bike details: TS0452, Thunderbird
```

### 12. Currying trong JavaScript là gì ?

Currying là một kỹ thuật nâng cao để biến đổi một hàm với n tham số, thành n hàm với một tham số duy nhất.

Ví dụ:

```js
function add (a) {
  return function(b){
    return a + b;
  }
}

add(3)(4)
```

Trong ví dụ trên, ta có hàm `f(a,b)` sau khi currying ta đã biến đổi nó thành `f(a)(b)`.

Bằng cách sử dụng kỹ thuật currying, chúng ta không thay đổi chức năng của một hàm, mà chỉ thay đổi cách nó được gọi.

```js
function multiply(a,b){
  return a*b;
}

function currying(fn){
  return function(a){
    return function(b){
      return fn(a,b);
    }
  }
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Returns 12

curriedMultiply(4)(3); // Also returns 12
```

Như ta có thể thấy trong đoạn code trên, chúng ta đã chuyển đổi hàm `multiply(a, b)` thành một hàm `curriedMultiply`, nhận một tham số tại một thời điểm.

### 13. Giải thích về Scope và Scope Chain

Scope trong JS, xác định khả năng truy cập của các biến, hàm ở các phần khác nhau trong một đoạn code.

Nói chung, Scope cho biết phạm vi mà biến và hàm của ta có thể hay không thể truy cập. Có 3 loại scope trong JS:

- Global Scope
- Local hay Function Scope
- Block Scope

#### Global Scope

Các biến hoặc hàm được khai báo trong namespace global đều có global scope, có nghĩa là tất cả các biến và hàm có global scope có thể được truy cập từ bất kỳ đâu bên trong code.

```js
var globalVariable = "Hello world";

function sendMessage(){
  return globalVariable; // can access globalVariable since it's written in global space
}

function sendMessage2(){
  return sendMessage(); // Can access sendMessage function since it's written in global space
}

sendMessage2();  // Returns “Hello world”
```

#### Function Scope

Bất kỳ biến hoặc hàm nào được khai báo bên trong một hàm đều có function scope, có nghĩa là tất cả các biến và hàm được khai báo bên trong một hàm, có thể được truy cập từ bất cứ đâu bên trong hàm chứ không phải bên ngoài nó.

```js
function awesomeFunction(){
  var a = 2;

  var multiplyBy2 = function(){
    console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
  }
}
console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside

multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope
```

#### Block Scope

Block Scope liên quan đến các biến được khai báo bằng let và const. Các biến được khai báo với var không có block scope.

Block scope cho chúng ta biết rằng bất kỳ biến nào được khai báo bên trong một khối `{}`, chỉ có thể được truy cập bên trong khối đó và không thể được truy cập bên ngoài khối đó.

```js
{
  let x = 45;
}

console.log(x); // Gives reference error since x cannot be accessed outside of the block

for(let i=0; i<2; i++){
  // do something
}

console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block
```

#### Scope Chain

JavaScript Engine cũng sử dụng scope để tìm biến. Ví dụ:

```js
var y = 24;

function favFunction(){
  var x = 667;
  var anotherFavFunction = function(){
    console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
  }

  var yetAnotherFavFunction = function(){
    console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
  }

  anotherFavFunction();
  yetAnotherFavFunction();
}


favFunction();
```

Như bạn có thể thấy trong đoạn code trên, nếu javascript engine không tìm thấy biến trong function scope, nó sẽ cố gắng kiểm tra biến ở phạm vi bên ngoài. Nếu biến không tồn tại trong phạm vi bên ngoài, nó sẽ cố gắng tìm biến trong global scope.

Nếu biến cũng không được tìm thấy trong không gian chung, thì lỗi tham chiếu sẽ được đưa ra.

### 14. Giải thích về Closures trong JavaScript

Closures là khả năng của một hàm ghi nhớ các biến và hàm được khai báo bên ngoài phạm vi của nó.

```js
var Person = function(pName){
  var name = pName;

  this.getName = function(){
    return name;
  }
}

var person = new Person("Neelesh");
console.log(person.getName());
```

Hiểu closure qua ví dụ sau:

```js
function randomFunc(){
  var obj1 = {name:"Vivian", age:45};

  return function(){
    console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed

  }
}

var initialiseClosure = randomFunc(); // Returns a function

initialiseClosure(); 
```

Trong đoạn code trên:

Hàm `randomFunc()` được thực thi và trả về một hàm khi ta thực hiện phép gán:

```js
var initialiseClosure = randomFunc();
```

Hàm được trả về được thực thi khi ta gọi `initialiseClosure`:

```js
initialiseClosure();
```

Kết quả sẽ là "Vivian is awesome" điều này xảy ra là do closure.

Khi hàm `randomFunc()` chạy, nó sẽ thấy rằng hàm trả về đang sử dụng biến `obj1` bên trong nó: 

```js
console.log(obj1.name + " is "+ "awesome");
```

Do đó, `randomFunc()`, thay vì hủy giá trị của `obj1` sau khi thực thi, sẽ lưu giá trị lại vào trong bộ nhớ để tham khảo thêm. Đây là lý do tại sao hàm trả về có thể sử dụng biến được khai báo bên ngoài phạm vi ngay cả sau khi hàm đã được thực thi.

**Khả năng này của một hàm nhằm lưu trữ một biến để tham khảo thêm ngay cả sau khi nó được thực thi, được gọi là Closure.**

### 15. Prototype là gì ?

Tất cả các đối tượng javascript đều kế thừa các thuộc tính từ một **prototype**.

Ví dụ:

Đối tượng Date kế thừa các thuộc tính từ prototype Date.

Đối tượng Math kế thừa các thuộc tính từ prototype Math.

Đối tượng Array kế thừa các thuộc tính từ prototype Array.

Trên đầu chuỗi là `Object.prototype`. Mọi prototype đều kế thừa các thuộc tính và phương thức từ `Object.prototype`.

Prototype là một bản thiết kế của một đối tượng. Prototype cho phép chúng ta sử dụng các thuộc tính và phương thức trên một đối tượng ngay cả khi các thuộc tính và phương thức không tồn tại trên đối tượng hiện tại.

![](./assets/object_prototype.png)

Ví dụ:

```js
var arr = [];
arr.push(2);

console.log(arr); // Outputs [2]
```

Trong đoạn code trên, có thể thấy ta chưa xác định bất kỳ thuộc tính hoặc phương thức nào được gọi là push trên mảng `arr` nhưng javascript engine không đưa ra lỗi.

Lý do là việc sử dụng các prototype. Như đã thảo luận trước đây, các đối tượng Array kế thừa các thuộc tính từ prototype Array.

Javascript engine thấy rằng phương thức `push` không tồn tại trên đối tượng mảng hiện tại, do đó nó tìm kiếm phương thức push bên trong prototype Array và nó tìm thấy phương thức.

Bất cứ khi nào thuộc tính hoặc phương thức không được tìm thấy trên đối tượng hiện tại, javascript engine sẽ luôn tìm kiếm trong prototype của nó và nếu nó vẫn không tồn tại, nó sẽ tìm bên trong prototype của prototype, v.v.

### 16. Callback là gì ?

Callback là một hàm sẽ được thực thi sau khi một hàm khác được thực thi.

Trong javascript, các hàm được coi như là **first-class citizens**, chúng có thể được sử dụng như một tham số của một hàm khác, có thể được trả về bởi một hàm khác và có thể được sử dụng như một thuộc tính của một đối tượng.

Các hàm được sử dụng làm tham số cho một hàm khác được gọi là hàm callback.

Ví dụ:

```js
function divideByHalf(sum){
  console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum){
  console.log(sum * 2);
}

function operationOnSum(num1,num2,operation){
  var sum = num1 + num2;
  operation(sum);
}

operationOnSum(3, 3, divideByHalf); // Outputs 3

operationOnSum(5, 5, multiplyBy2); // Outputs 20
```

Trong đoạn code trên, ta đang thực hiện các phép toán cộng hai số.

Hàm `operationOnSum` nhận 3 tham số, `num1`, `num2` và `operator` sẽ được thực hiện trên tổng của chúng (callback).

Cả hai hàm `splitByHalf` và `MultiBy2` đều được sử dụng làm hàm callback trong đoạn code trên.

Các hàm callback này chỉ được thực thi sau khi thực thi hàm `operationOnSum`.

Do đó, callback là một hàm sẽ được thực thi sau khi một hàm khác được thực thi.

### 17. Memoization là gì ?

Memoization là một dạng bộ nhớ đệm trong đó giá trị trả về của một hàm được lưu vào bộ đệm dựa trên các tham số của nó. Nếu tham số của hàm đó không được thay đổi, phiên bản được lưu trong bộ nhớ cache của hàm sẽ được trả về.

Chúng ta có thể hiểu memoization, bằng cách chuyển đổi một hàm đơn giản thành một hàm được ghi nhớ:

```js
function addTo256(num){
  return num + 256;
}

addTo256(20); // Returns 276
addTo256(40); // Returns 296
addTo256(20); // Returns 276
```

Trong đoạn code trên, chúng ta đã viết một hàm thêm tham số vào 256 và trả về nó.

Khi gọi lại hàm `addTo256` với cùng một tham số (“20” trong trường hợp trên), ta đang tính toán lại kết quả cho cùng một tham số.

Tính toán kết quả với cùng một tham số không phải là vấn đề lớn trong trường hợp trên, nhưng hãy tưởng tượng nếu hàm thực hiện một số công việc nặng nhọc, thì việc tính toán kết quả lặp đi lặp lại với cùng một tham số sẽ dẫn đến lãng phí thời gian.

Đây là lúc memoization xuất hiện, bằng cách sử dụng memoization, chúng ta có thể lưu trữ (bộ nhớ đệm) các kết quả được tính toán dựa trên các tham số. Nếu cùng một tham số được sử dụng lại trong khi gọi hàm, thay vì tính toán kết quả, chúng tôi trực tiếp trả về giá trị đã lưu trữ (đã lưu trong bộ nhớ cache).

Hãy chuyển đổi hàm `addTo256` ở trên, thành một hàm được ghi nhớ:

```js
function memoizedAddTo256(){
  var cache = {};

  return function(num){
    if(num in cache){
      console.log("cached value");
      return cache[num]

    }
    else{
      cache[num] = num + 256;
      return cache[num];
    }
  }
}

var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return
```

Trong đoạn code trên, nếu ta chạy hàm `memoizedFunc` với cùng một tham số, thay vì tính toán lại kết quả, nó sẽ trả về kết quả được lưu trong bộ nhớ cache.

*Lưu ý* Mặc dù sử dụng memoization tiết kiệm thời gian, nhưng nó dẫn đến tiêu thụ bộ nhớ lớn hơn vì ta đang lưu trữ tất cả các kết quả được tính toán.

### 18. Đệ quy là gì ?

Đệ quy là một kỹ thuật lặp đi lặp lại một hoạt động bằng cách tự gọi hàm lặp đi lặp lại cho đến khi nó đi đến kết quả.

```js
function add(number) {
  if (number <= 0) {
    return 0;
  } else {
    return number + add(number - 1);
  }
}

add(3) => 3 + add(2)
          3 + 2 + add(1)
          3 + 2 + 1 + add(0)
          3 + 2 + 1 + 0 = 6  
```

Ví dụ về một hàm đệ quy:

Hàm sau đây tính tổng của tất cả các phần tử trong một mảng bằng cách sử dụng đệ quy:

```js
function computeSum(arr){
  if(arr.length === 1){
    return arr[0];
  }
  else{
    return arr.pop() + computeSum(arr);
  }
}

computeSum([7, 8, 9, 99]); // Returns 123
```

### 19. Hàm khởi tạo trong JavaScript

Các hàm khởi tạo được sử dụng để tạo các đối tượng trong javascript.

Khi nào chúng ta sử dụng các hàm khởi tạo?

Nếu chúng ta muốn tạo nhiều đối tượng có các thuộc tính và phương thức giống nhau, các hàm khởi tạo được sử dụng.

*Lưu ý* - Tên của một hàm khởi tạo phải luôn được viết bằng Ký hiệu Pascal: mọi từ phải bắt đầu bằng một chữ cái viết hoa.

Ví dụ:

```js
function Person(name,age,gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
}


var person1 = new Person("Vivek", 76, "male");
console.log(person1);

var person2 = new Person("Courtney", 34, "female");
console.log(person2);
```

Trong đoạn code trên, ta đã tạo một hàm khởi tạo có tên là Person.

Bất cứ khi nào chúng ta muốn tạo một đối tượng mới kiểu Person,

Chúng tôi cần tạo nó bằng cách sử dụng từ khóa mới:

```js
var person3 = new Person("Lilly", 17, "female");
```

Dòng code trên sẽ tạo một đối tượng mới kiểu Person.

Các hàm khởi tạo cho phép chúng ta nhóm các đối tượng tương tự nhau.

### 20. DOM là gì ?

DOM là viết tắt của Document Object Model.

DOM là interface lập trình của tài liệu XML và HTML.

Khi trình duyệt cố gắng hiển thị một tài liệu HTML, nó sẽ tạo một đối tượng dựa trên tài liệu HTML được gọi là DOM. Sử dụng DOM này, chúng ta có thể thao tác hoặc thay đổi các phần tử khác nhau bên trong tài liệu HTML.

Ví dụ về cách code HTML được chuyển đổi thành DOM:

![](./assets/dom.png)
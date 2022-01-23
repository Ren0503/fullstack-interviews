# Câu hỏi phỏng vấn về Design Pattern

Các design pattern là các giải pháp mẫu có thể tái sử dụng để giải quyết các vấn đề phổ biến trong phát triển phần mềm như lặp code, các pattern có thể sử dụng lại, các chức năng dư thừa, v.v. Chúng tương tự như các bản thiết kế có thể tùy chỉnh để giải quyết bất kỳ vấn đề nào. Khái niệm này được Christopher Alexander mô tả lần đầu tiên và sau đó được 4 tác giả -  Erich Gamma, John Vlissides, Ralph Johnson, and Richard Helm - thường được biết đến với cái tên Gang of Four và được xuất bản trong cuốn sách Design Patterns: Elements of Reusable Object-Oriented Software vào năm 1994. Design Patterns dạy các dev cách giải quyết các vấn đề thường lặp lại mà không tốn quá nhiều thời gian và công sức trong khi phát triển các giải pháp cho chúng. Do đó, nhu cầu cho các nhà phát triển phần mềm biết các pattern này đã tăng lên rất nhiều.

## Câu hỏi phỏng vấn Design Pattern cho Fresher

### 1. Design pattern là gì?

Design pattern là các giải pháp có thể tái sử dụng để giải quyết các vấn đề chung của phát triển phần mềm. Những vấn đề này bao gồm code lặp lại, các chức năng và logic dư thừa, v.v. Những vấn đề này giúp tiết kiệm đáng kể công sức và thời gian cần thiết cho các dev trong khi phát triển phần mềm. Các design pattern thường được sử dụng trong các sản phẩm phần mềm hướng đối tượng bằng cách kết hợp các phương pháp hay nhất và thúc đẩy khả năng tái sử dụng để phát triển mã mạnh mẽ. 

![](./assets/What_are_design_patterns.png)

### 2. Design pattern trong Java?

Trong java, các pattern rất linh hoạt và dễ dàng xác định code lặp lại không mong muốn. Kiến trúc phần mềm có thể tuỳ chỉnh theo từng yêu cầu. Một vài lợi ích của sử dụng design pattern trong Java:

- Có thể tái sử dụng cho nhiều dự án.
- Cung cấp giải pháp mẫu cho thiết kế kiến trúc hệ thống.
- Chúng cung cấp sự minh bạch cho thiết kế phần mềm.
- Chúng là những phương tiện đã được thử nghiệm và chứng minh để phát triển các giải pháp mạnh mẽ một cách dễ dàng.

### 3. Mô tả một design pattern như thế nào?

- Xác định tên và lớp của design pattern sẽ thuộc về.
- Mô tả vấn đề và giải pháp phù hợp.
- Các biến thể và lựa chọn ngôn ngữ cho vấn đề cần giải quyết.
- Các trường hợp thời gian thực và hiệu quả của pattern này.

### 4. Các kiểu design pattern?

- **Creational Pattern** cung cấp các cơ chế tạo đối tượng để tăng tính linh hoạt và tái sử dụng mã hiện có.
    - Factory Method
    - Abstract Factory
    - Builder
    - Prototype
    - Singleton
- **Structural Pattern** giải thích cách tập hợp các đối tượng và lớp thành các cấu trúc lớn hơn, trong khi vẫn giữ cho cấu trúc linh hoạt và hiệu quả.
    - Adapter
    - Bridge
    - Composite
    - Decorator
    - Facade
    - Flyweight
    - Proxy
**Behavioral Pattern** quan tâm đến việc giao tiếp hiệu quả và phân công nhiệm vụ giữa các đối tượng.
    - Chain Of Responsibility
    - Command
    - Iterator
    - Mediator
    - Memento
    - Observer
    - State
    - Strategy
    - Template Method
    - Visitor

![](./assets/types_of_design_patterns_in_java.png)

### 5. Inversion of Control là gì?

**Inversion of Control (IoC)** là một nguyên lý thiết kế trong công nghệ phần mềm trong đó các thành phần nó dựa vào để làm việc bị đảo ngược quyền điều khiển khi so sánh với lập trình hướng thủ thục truyền thống.

Dependency injection (DI) là một mô hình triển khai từ nguyên lý IoC, là một kỹ thuật trong lập trình trong đó một đối tượng cung cấp những phụ thuộc (dependency - là đối tượng, dịch vụ, chức năng) của đối tượng khác.

Ví dụ: ta có lớp `A` sử dụng lớp `B` như bên dưới:

```java
public class A{
    private B b;
    
    public A(){
        this.b = new B();
    }
}
```

Ở đây, ta có phụ thuộc giữa lớp A và B. Nếu bạn triển khai IoC, bạn sẽ không phải dùng toán tử `new` để gán giá trị. 

```java
public class A {
    private IocB b;
    public A(IocB b) {
        this.b = b;
    }
}
```

Chúng ta đã dùng IoC cho việc khởi tạo đối tượng của lớp `B` cho lớp `IocB`.

### 6. GoF là gì?

**Gang of Four** (GOF) là 4 người đã phát minh ra khái niệm design pattern. Họ là Erich Gamma, Ralph Johnson, Richard Hel and John Vlissides. Những người này đã viết về các design pattern trong quyển sách "Design Patterns: Elements of Reusable Object-Oriented Software" năm 1995. Nếu không có những người này, các nhà phát triển phần mềm sẽ lãng phí thời gian giải quyết các vấn đề có tính chất lặp lại thay vì tập trung vào các yêu cầu nghiệp vụ.

### 7. Các nguyên tắc SOLID là gì?

Nguyên tắc SOLID là các nguyên tắc hướng đối tượng được Robert C. Martin giới thiệu trong bài báo cáo "Design Principles and Design patterns" năm 2000. 

![](./assets/SOLID_principles.png)

- **S - Single Responsibility Principle (SRP):** nguyên tắc trách nhiệm đơn nhất đảm bảo tất cả lớp hay module chỉ chịu trách nhiệm cho một chức năng duy nhất. 

- **O - Open Closed Principle (OCP):** nguyên tắc đóng mở cho phép tất cả lớp đều mở cho bổ sung nhưng đóng cho chỉnh sửa. Ở đây ta cho phép mở rộng hành vi các thực thể nhưng không được chỉnh sửa code đã tồn tại.
- **L - Liskov Substitution Principle(LSP):** nguyên tắc Liskoy nói rằng trạng thái của đối tượng có thể thay thế bằng các thể hiện con mà không ảnh hưởng đến tính đúng đắn của chương trình.
- **I - Interface Segregation Principle (ISP):** nguyên tắc phân tách interface nêu rõ rằng có thể sử dụng nhiều interface cụ thể cho các yêu cầu của client thay vì interface chung. Client không bị buộc phải thực hiện các chức năng mà họ không yêu cầu
- **D - Dependency Inversion Principle:** ở đây các module ở level cao nên độc lập với các module level thấp. Các module cao được xem là trừu tượng và module thấp là những triển khai cụ thể.

### 8. Bạn hiểu nguyên tắc đóng mở như thế nào?

Nguyên tắc Đóng mở quy định rằng bất kỳ lớp, thành phần hoặc thực thể nào phải mở để mở rộng nhưng đóng để sửa đổi. Một lớp có thể được mở rộng thông qua kế thừa, interface, composition bất cứ khi nào được yêu cầu thay vì sửa đổi code của lớp. Hãy xem xét một trường hợp trong đó chúng ta có một lớp tính diện tích của một hình vuông. Sau đó, ta nhận được yêu cầu tính diện tích hình chữ nhật. Ở đây, thay vì sửa đổi lớp ban đầu, chúng ta có thể tạo một lớp cơ sở và lớp cơ sở này có thể được mở rộng bằng hình chữ nhật lớp mới.

### 9. Design pattern trong thư viện JDK của Java?

* **Decorator pattern** được dùng cho các lớp `Wrapper`.
* **Singleton pattern** được dùng cho các lớp `Calendar` và `Runtime`.
* **Factory pattern** được dùng cho các phương thức như `Integer.valueOf` trong các lớp `wrapper`.
* **Observer pattern** được dùng cho xử lý sự kiện framework như `awt`, `swing`,...


### 10.Design pattern và design principles khác nhau như thế nào?

**Design principles (Nguyên tắc thiết kế):** là những nguyên tắc được tuân theo trong khi thiết kế hệ thống phần mềm cho bất kỳ nền tảng nào bằng cách sử dụng bất kỳ ngôn ngữ lập trình nào. Các nguyên tắc SOLID là các nguyên tắc thiết kế mà chúng ta tuân theo như các nguyên tắc để phát triển các hệ thống phần mềm mạnh mẽ, có thể mở rộng và mở rộng. Những điều này áp dụng cho tất cả các khía cạnh của lập trình.

**Design pattern (Mẫu thiết kế):** là các giải pháp mẫu có thể tái sử dụng cho các vấn đề thường xảy ra có thể được tùy chỉnh theo yêu cầu của vấn đề. Đây là những giải pháp được thực hiện tốt, được thử nghiệm đúng cách và an toàn khi sử dụng. Mô hình thiết kế Factory, mô hình Singleton, mô hình Strategy là một vài trong số các ví dụ về các mẫu thiết kế.

## 11. Các design pattern khác các thuật toán như thế nào?

Cả design pattern và thuật toán đều mô tả các giải pháp điển hình cho bất kỳ vấn đề nào đã cho. Nhưng sự khác biệt chính là thuật toán xác định một tập hợp các hành động rõ ràng để đạt được mục tiêu còn design pattern cung cấp mô tả cấp cao về bất kỳ giải pháp nào. Các design pattern áp dụng cho hai vấn đề khác nhau có thể giống nhau nhưng logic thực hiện sẽ khác nhau và dựa trên các yêu cầu.
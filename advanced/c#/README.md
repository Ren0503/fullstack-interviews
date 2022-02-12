# Câu hỏi phỏng vấn C#

![](./assets/csharp.jpg)

# C# là gì?

C# là ngôn ngữ lập trình hướng đối tượng được phát triển bởi Microsoft. Cùng với framework .NET nó có thể dùng cho tạo website, ứng dụng hay game. Các ưu điểm của C# có thể kể đến như sau:
- Tương đối dễ dàng hơn: Bắt đầu với C# có thể gọi là tương đối dễ dàng hơn so với các ngôn ngữ lập trình khác
- Sử dụng phát triển rộng hơn: Sử dụng C#, bạn có thể tạo các ứng dụng web, ứng dụng di động, máy tính hay trò chơi. C# có một số tính năng tuyệt vời như bộ thu gom rác tự động, interface, v.v. giúp xây dựng các ứng dụng tốt hơn.
- Đối tượng mục tiêu lớn hơn: Việc hợp tác với Microsoft mang lại lợi thế cho các ứng dụng được tạo bằng C# vì nó sẽ có mục tiêu rộng hơn.

Vì C# là một ngôn ngữ lập trình được sử dụng rộng rãi như vậy, nên rất nhiều tổ chức lớn và nhỏ sử dụng sản phẩm của họ. Vì vậy, hãy chuẩn bị cho mình những câu hỏi C# cơ bản và nâng cao để hoàn thành tốt các cuộc phỏng vấn.

## Câu hỏi phỏng vấn C# cho Fresher

### 1. C# khác với C/C++ như thế nào?

C có thể xem là ngôn ngữ lập trình bậc thấp vì nó có cấu trúc, thủ tục lập trình giản đơn. C nên là lựa chọn hàng đầu khi xây dựng các chương trình lõi, hệ điều hành, chương trình nhúng….

C++ có thể được phân là ngôn ngữ lập trình bậc trung. Nó là một thế hệ con của C, được thiết kế nhằm khắc phục những hạn chế của C. Nó hỗ trợ cho việc lập trình hướng đối tượng mà vẫn giữ được những tính chất ban đầu và tốc độ thi hành của C. Hoàn toàn không có lớp ảo hóa nào ở trung gian, trình biên dịch C++ chuyển trực tiếp mã nguồn sang mã máy.

C# kế thừa C và C++, và là ngôn ngữ lập trình hướng đối tượng bậc cao, ngang hàng với các ngôn ngữ lập trình bậc cao khác như Python, Java… Lập trình viên sử dụng C#, sẽ được hỗ trợ nhiều tính năng hơn. Cũng giống như Python hay Java, mã nguồn C# sẽ được chuyển sang dạng bytecode trên máy ảo CLR (Common Language Runtime), sau đó mới chuyển sang mã máy.

Với C và C++, người dùng có thể trực tiếp quản lý vùng nhớ của họ. Tuy vậy, hai ngôn ngữ lập trình này không có cơ chế dọn rác tự động.

Còn với C# bạn không cần lo lắng về vùng nhớ. Nhờ hỗ trợ chức năng dọn rác tự động, ngôn ngữ này giúp bạn quản lý vùng nhớ dễ dàng và hiệu quả hơn. Khi đầy rác, vùng nhớ bị hết; nó sẽ tự xóa rác mà không cần bạn phải vào thao tác.

### 2. CLR là gì?

Common Language Runtime (CLR) xử lý chương trình thực thi chương trình cho nhiều ngôn ngữ khác nhau bao gồm cả C#. Kiến trúc của CLR xử lý quản lý bộ nhớ, thu gom rác, xử lý bảo mật và trông giống như: 

![](./assets/Common_Language_Runtime_(CLR).png)

### 3. Bộ dọn rác trong C#?

Bộ dọn rác (garbage collection) là quá trình giải phóng bộ nhớ bị chiếm bởi các đối tượng không mong muốn. Khi bạn tạo một đối tượng lớp, tự động một số không gian bộ nhớ được cấp cho đối tượng trong bộ nhớ heap. Bây giờ, sau khi bạn thực hiện tất cả các hành động trên đối tượng, không gian bộ nhớ bị chiếm bởi đối tượng sẽ trở thành lãng phí. Sẽ là cần thiết để giải phóng bộ nhớ. Việc thu gom rác xảy ra trong ba trường hợp: 
- Nếu bộ nhớ bị chiếm bởi các đối tượng vượt quá ngưỡng giá trị đặt trước.
- Nếu phương thức thu gom rác được gọi
- Nếu hệ thống của bạn có bộ nhớ vật lý thấp

### 4. Các kiểu class trong C#?

Class trong C# chính là cách thể hiện khái niệm về lớp trong lập trình hướng đối tượng. Trong C# có 4 kiểu class:
- **static class:** khai báo bởi từ khoá `static` không cho phép kế thừa. Do đó không thể tạo đối tượng từ static class.

```csharp
static class classname
{
    // static data 
    // static methods
}
```

- **partial class:** khai báo bởi từ khoá `partial` cho phép các thành viên của nó phân chia hoặc chia sẻ với file (.cs) nguồn.
- **abstract class:** là lớp không thể khởi tạo nên bạn không thể tạo đối tượng. abstract class hoạt động dựa trên khái niệm trừu tượng trong OOP. Tính trừu tượng giúp trích xuất các chi tiết cần thiết và ẩn những chi tiết không cần thiết. 
- **sealed class:**  Lớp được đóng dấu là lớp không thể được kế thừa. Sử dụng từ khóa `sealead` để hạn chế quyền truy cập đối với người dùng kế thừa lớp đó.

```csharp
sealed class classname
{
    // static data 
    // static methods
}
```

### 5. Sự khác biệt giữa lớp trừu tượng và interface?

Hãy cùng tìm hiểu sự khác biệt giữa lớp trừu tượng và interface:

- Các lớp trừu tượng là các lớp không thể được khởi tạo tức là chúng không thể tạo một đối tượng. Interface giống như một lớp trừu tượng vì tất cả các phương thức bên trong interface đều là phương thức trừu tượng.
- Các lớp trừu tượng có thể có cả phương thức trừu tượng và không trừu tượng nhưng tất cả các phương thức của một interface đều là phương thức trừu tượng.
- Vì các lớp trừu tượng có thể có cả phương thức trừu tượng và không trừu tượng, chúng ta cần sử dụng từ khóa `abstract` để khai báo các phương thức trừu tượng. Nhưng trong interface, không cần như vậy.
- Một lớp trừu tượng có các hàm tạo trong khi một interface thì không.

##### Lớp trừu tượng:

```csharp
public abstract class Shape{
    public abstract void draw();
}
```

##### Interface:

```csharp
public interface Paintable{
    void paint();
}
```

### 6. Sự khác biệt giữa từ kháo ref và out?

Từ khoá `ref` truyền đối số bằng tham chiếu chứ không phải giá trị. Để sử dụng `ref` bạn cần phải 

```csharp
void Method(ref int refArgument)
{
   refArgument = refArgument + 10;
}
int number = 1;
Method(ref number);
Console.WriteLine(number);
// Output: 11
```

Từ khoá `out` truyền đối số trong phương thức và hàm. Từ khóa `out` được sử dụng để truyền các đối số trong một phương thức làm tham chiếu để trả về nhiều giá trị. Mặc dù nó giống với từ khóa `ref`, nhưng từ khóa `ref` cần phải được khởi tạo trước khi được truyền. Ở đây, các từ khóa `out` và `ref` rất hữu ích khi chúng ta muốn trả về một giá trị trong cùng các biến được truyền dưới dạng đối số.

```csharp
public static string GetNextFeature(ref int id)  
{  
   string returnText = "Next-" + id.ToString();  
   id += 1;  
   return returnText;  
}  
public static string GetNextFeature(out int id)  
{  
   id = 1;  
   string returnText = "Next-" + id.ToString();  
   return returnText;  
}
```

### 7. Phương thức mở rộng trong C#?

Các phương pháp mở rộng giúp thêm các phương pháp mới vào các phương pháp hiện có. Các phương thức được thêm vào là tĩnh. Đôi khi, khi bạn muốn thêm các phương thức vào một lớp hiện có nhưng không nhận thấy quyền sửa đổi lớp đó hoặc không có quyền, bạn có thể tạo một lớp tĩnh mới chứa các phương thức mới. Khi các phương thức mở rộng được khai báo, hãy liên kết lớp này với lớp hiện có và xem các phương thức sẽ được thêm vào lớp hiện có.

```csharp
// C# program to illustrate the concept
// of the extension methods
using System;
 
namespace ExtensionMethod {
    static class NewMethodClass {
    
        // Method 4
        public static void M4(this Scaler s)
        {
            Console.WriteLine("Method Name: M4");
        }
        
        // Method 5
        public static void M5(this Scaler s, string str)
        {
            Console.WriteLine(str);
        }
    }
    
    // Now we create a new class in which
    // Scaler class access all the five methods
    public class IB {
    
        // Main Method
        public static void Main(string[] args)
        {
            Scaler s = new Scaler();
            s.M1();
            s.M2();
            s.M3();
            s.M4();
            s.M5("Method Name: M5");
        }
    }
}
```

Kết quả:

```
Method Name: M1

Method Name: M2

Method Name: M3

Method Name: M4

Method Name: M5
```

### 8. Generic trong C#?

In C# collections, defining any kind of object is termed okay which compromises C#’s basic rule of type-safety. Therefore, generics were included to type-safe the code by allowing re-use of the data processing algorithms. Generics in C# mean not linked to any specific data type. Generics reduce the load of using boxing, unboxing, and typecasting objects. Generics are always defined inside angular brackets <>. To create a generic class, this syntax is used:


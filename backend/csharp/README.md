# Câu hỏi phỏng vấn C#

![](./assets/csharp.jpg)

# C# là gì?

C# là ngôn ngữ lập trình hướng đối tượng được phát triển bởi Microsoft. Cùng với framework .NET nó có thể dùng cho tạo website, ứng dụng hay game. Các ưu điểm của C# có thể kể đến như sau:
- Tương đối dễ dàng hơn: Bắt đầu với C# có thể gọi là tương đối dễ dàng hơn so với các ngôn ngữ lập trình khác
- Sử dụng phát triển rộng hơn: Sử dụng C#, bạn có thể tạo các ứng dụng web, ứng dụng di động, ứng dụng máy tính hay trò chơi. C# có một số tính năng tuyệt vời như bộ thu gom rác tự động, interface, v.v. giúp xây dựng các ứng dụng tốt hơn.
- Đối tượng mục tiêu lớn hơn: Việc được hỗ trợ bởi Microsoft mang lại lợi thế cho các ứng dụng được tạo bằng C# vì nó sẽ có mục tiêu rộng hơn.

Vì C# là một ngôn ngữ lập trình được sử dụng rộng rãi như vậy, nên rất nhiều tổ chức lớn và nhỏ sử dụng sản phẩm của họ. Vì vậy, hãy chuẩn bị cho mình những câu hỏi C# cơ bản và nâng cao để hoàn thành tốt các cuộc phỏng vấn.

## Câu hỏi phỏng vấn C# cho Fresher

### 1. C# khác với C/C++ như thế nào?

C có thể xem là ngôn ngữ lập trình bậc thấp vì nó có cấu trúc, thủ tục lập trình giản đơn. C nên là lựa chọn hàng đầu khi xây dựng các chương trình lõi, hệ điều hành, chương trình nhúng….

C++ có thể được phân là ngôn ngữ lập trình bậc trung. Nó là một thế hệ con của C, được thiết kế nhằm khắc phục những hạn chế của C. Nó hỗ trợ cho việc lập trình hướng đối tượng mà vẫn giữ được những tính chất ban đầu và tốc độ thực thi của C. Hoàn toàn không có lớp ảo hóa nào ở trung gian, trình biên dịch C++ chuyển trực tiếp từ mã nguồn sang mã máy.

C# kế thừa C và C++, và là ngôn ngữ lập trình hướng đối tượng bậc cao, ngang hàng với các ngôn ngữ lập trình bậc cao khác như Python, Java… Lập trình viên sử dụng C#, sẽ được hỗ trợ nhiều tính năng hơn. Cũng giống như Python hay Java, mã nguồn C# sẽ được chuyển sang dạng bytecode trên máy ảo CLR (Common Language Runtime), sau đó mới chuyển sang mã máy.

Với C và C++, người dùng có thể trực tiếp quản lý vùng nhớ của họ. Tuy vậy, hai ngôn ngữ lập trình này không có cơ chế dọn rác tự động.

Còn với C# bạn không cần lo lắng về vùng nhớ. Nhờ hỗ trợ chức năng dọn rác tự động, ngôn ngữ này giúp bạn quản lý vùng nhớ dễ dàng và hiệu quả hơn. Khi đầy rác, vùng nhớ bị hết; nó sẽ tự xóa rác mà không cần bạn phải vào thao tác.

### 2. CLR là gì?

Common Language Runtime (CLR) xử lý chương trình thực thi chương trình cho nhiều ngôn ngữ khác nhau bao gồm cả C#. Kiến trúc của CLR xử lý quản lý bộ nhớ, thu gom rác, xử lý bảo mật và trông giống như: 

![](./assets/Common_Language_Runtime_(CLR).png)

### 3. Bộ dọn rác trong C#?

Bộ dọn rác (garbage collection) là quá trình giải phóng bộ nhớ bị chiếm bởi các đối tượng không mong muốn. Khi bạn tạo một đối tượng, tự động một số không gian bộ nhớ được cấp cho đối tượng trong bộ nhớ heap. Bây giờ, sau khi bạn thực hiện tất cả các hành động trên đối tượng, không gian bộ nhớ bị chiếm bởi đối tượng sẽ trở thành lãng phí. Sẽ là cần thiết để giải phóng bộ nhớ. Việc thu gom rác xảy ra trong ba trường hợp: 
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

### 6. Sự khác biệt giữa từ khoá ref và out?

Từ khoá `ref` truyền đối số bằng tham chiếu chứ không phải giá trị. 

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

### 9. Lớp partial trong C# là gì?

Các lớp partial thực hiện chức năng của một lớp đơn lẻ thành nhiều file. Nhiều file này được kết hợp thành một trong thời gian biên dịch. Lớp partial có thể được tạo bằng từ khóa `partial`.

```csharp
public partial Clas_name  
{
   // code
}
```

Bạn có thể dễ dàng chia các chức năng của phương thức, interface hoặc cấu trúc thành nhiều file. Thậm chí có thể thêm các lớp partial lồng nhau.

### 10. Sự khác biệt giữa late binding và early binding trong C#?

Late binding và early binding là hai ví dụ cho khái niệm đa hình trong OOPs.

Ví dụ: một hàm `calculateBill()` sẽ tính toán chi phí cho khách hàng vip, khách hàng cơ bản và khách hàng tiềm năng dựa trên các chính sách khác nhau. Việc tính toán cho tất cả đối tượng khác nhau này nhưng sử dụng cùng một hàm được gọi là đa hình.

Khi đối tượng được gán một biến đối tượng trong C#, framework .NET thực hiện liên kết.

Khi hàm liên kết xảy ra ở thời gian biên dịch nó được gọi là early binding. Nó kiểm tra các phương thức và thuộc tính của các đối tượng tĩnh. Với early binding, số lỗi thời gian chạy giảm đáng kể và nó thực thi khá nhanh.

Nhưng nếu liên kết xảy ra ở thời gian chạy, nó được gọi là late binding. Late binding xảy ra khi đối tượng là động (dựa trên dữ liệu mà nó giữ). Nó chậm hơn so với early binding

### 11. Mảng trong C# là gì?

Khi một nhóm các phần tử tương tự được gộp lại với nhau dưới một tên, chúng được gọi là mảng.

Vd. Một mảng `Atea[4]: [green tea, chamomile tea, black tea, lemon tea]`. Độ dài của mảng xác định có bao nhiêu phần tử hiện diện trong mảng.

Trong C#, việc cấp phát bộ nhớ cho các phần tử của mảng diễn ra tự động. Đây là cách các giá trị được lưu trữ trong một mảng một cách tuần tự.

![](./assets/arrays_in_C_.png)

Cú pháp `<Data Type>[] <Name_Array>`

#### Vài lưu ý trong mảng

- Cấp phát động
- Mảng trong C# được xem như là đối tượng.
- Chiều dài của mảng số lượng thành viên của mảng.
- Thành viên trong mảng là có thứ tự và bắt đầu từ 0.
- Kiểu mảng là kiểu tham chiếu đến kiểu mảng cơ sở.

### 12. Indexer trong C# là gì?

Indexer được gọi là mảng thông minh cho phép truy cập vào một biến thành viên. Các indexer cho phép các biến thành viên sử dụng các tính năng của một mảng. Chúng được tạo bằng từ khóa `Indexer`. Indexer không phải là thành viên tĩnh. 

```csharp
<return type> this[<parameter type> index]
{
    get{
        // return the value from the specified index of an internal collection
    }
    set{
        // set values at the specified index in an internal collection
    }
}
```

### 13. Sự khác biệt giữa toán tử == và phương thức equals() trong C#?

Cả hai đều dùng cho so sánh giá trị đối tượng, ví dụ:

```csharp
int x = 10;
int y = 10;
Console.WriteLine( x == y);
Console.WriteLine(x.Equals(y));

// Output:
// True
// True
```

**Toán tử ==**: là một kiểu tham chiếu có nghĩa là nó sẽ trả về true nếu điểm tham chiếu đến đối tượng giống nhau.

**Phương thức Equals()** dùng so sánh giá trị hai được mang bởi các đối tượng. Trả về true khi tất cả giá trị được mang bởi đối tượng bằng nhau.

### 14. Nạp chồng trong C#?

Nạp chồng (Overloading) có nghĩa là khi các phương thức có cùng tên nhưng mang các giá trị khác nhau để sử dụng trong một ngữ cảnh khác. Chỉ có phương thức main() không thể được nạp chồng.

Để thực hiện phương thức nạp chồng trong C#:
- Thay đổi số lượng tham số
- Thay đổi thứ tự tham số
- Sử dụng kiểu dữ liệu khác nhau cho tham số

Vd:

```csharp
public class Area {
   public double area(double x) {
       double area = x * x;
       return area;
   }
   public double area(double a, double b) {
       double area = a * b;
       return area;
   }
}
```

Ở đây, phương thức Area được sử dụng hai lần. Trong khai báo đầu tiên, một đối số được sử dụng trong khi trong khai báo thứ hai, có hai đối số được sử dụng. Sử dụng các tham số khác nhau trong cùng một phương thức, chúng ta có thể nạp chồng phương thức `area()`.

### 15. Reflection trong C#?

Reflection trong C# trích xuất metadata từ các kiểu dữ liệu trong thời gian chạy.

Để thêm reflection trong .NET, chỉ cần dùng namespace `System.Reflection` trong chương trình để truy xuất kiểu của bất cứ thứ gì từ:
* Assembly
* Module
* Enum
* MethodInfo
* ConstructorInfo
* MemberInfo
* ParameterInfo
* Type
* FieldInfo
* EventInfo
* PropertyInfo


### 16. Sự khác biệt giữa hằng và readonly trong C#?

Từ khoá **const** trong C# dùng để khai báo hằng trong suốt chương trình. Điều này có nghĩa là sau khi biến được khai báo là hằng, giá trị của nó không thể thay đổi.

Trong C# hằng là một số, chuỗi, tham chiếu null hoặc giá trị boolean.

```csharp
class IB {
 
   // Constant fields
   public const int xvar = 20;
   public const string str = "InterviewBit";
 
   // Main method
   static public void Main()
   {
 
       // Display the value of Constant fields
       Console.WriteLine("The value of xvar: {0}", xvar);
       Console.WriteLine("The value of str: {0}", str);
   }
}
```

Kết quả:

```
The value of xvar is 20.
The value of string is Interview Bit
```

Mặt khác, từ khoá **readonly** chỉ có thể gán biến khi nó được khai báo hoặc trong một constructor của cùng một lớp mà nó được khai báo. 

```csharp
public readonly int xvar1;
   public readonly int yvar2;
 
   // Values of the readonly 
   // variables are assigned
   // Using constructor
   public IB(int b, int c)
   {
 
       xvar1 = b;
       yvar2 = c;
       Console.WriteLine("The value of xvar1 {0}, "+
                       "and yvar2 {1}", xvar1, yvar2);
   }
 
   // Main method
   static public void Main()
   {
     IB obj1 = new IB(50, 60);
   }
}
```

Kết quả:

```
The value of xvar1 is 50, and yvar2 is 60
```

- Các hằng số là tĩnh theo mặc định trong khi readonly nên có một giá trị được gán khi phương thức khởi tạo được khai báo.
- Hằng số có thể được khai báo trong các hàm trong khi các sửa đổi readonly có thể được sử dụng với các kiểu tham chiếu.

### 17. Sự khác biệt giữa String và StringBuilder?

Sự khác biệt chính giữa String và StringBuilder là các đối tượng String là bất biến trong khi StringBuilder tạo ra một chuỗi ký tự có thể thay đổi. StringBuilder sẽ thực hiện các thay đổi đối với đối tượng hiện có hơn là tạo đối tượng mới.

StringBuilder đơn giản hóa toàn bộ quá trình thực hiện thay đổi đối với đối tượng chuỗi hiện có. Vì lớp String là bất biến nên sẽ tốn kém hơn khi tạo một đối tượng mới mỗi khi chúng ta cần thực hiện thay đổi. Vì vậy, lớp StringBuilder xuất hiện có thể được gợi lên bằng cách sử dụng không gian tên System.Text.

Trong trường hợp, một đối tượng chuỗi sẽ không thay đổi trong toàn bộ chương trình, thì hãy sử dụng lớp String hoặc StringBuilder khác.

```csharp
string s = string.Empty; 
for (i = 0; i < 1000; i++) 
{ 
    s += i.ToString() + " "; 
}
```

Tại đây, bạn sẽ cần tạo 2001 đối tượng trong đó 2000 sẽ không được sử dụng.

Điều tương tự có thể được áp dụng bằng cách sử dụng StringBuilder:

```csharp
StringBuilder sb = new StringBuilder(); 
for (i = 0; i < 1000; i++) 
{ 
   sb.Append(i); sb.Append(' '); 
}
```

Bằng cách sử dụng StringBuilder ở đây, bạn cũng giảm bớt căng thẳng cho bộ cấp phát bộ nhớ.
# Câu hỏi phỏng vấn Java

![](./assets/java.png)

## Java là gì?

Java là một ngôn ngữ lập trình hướng đối tượng được phát triển cho môi trường phân tán và phát triển phần mềm đa nền tảng.

Ngôn ngữ lập trình Java là một ngôn ngữ độc lập với nền tảng, có nghĩa là không có giới hạn đối với bất kỳ phần cứng hoặc hệ điều hành cụ thể nào. Nó cung cấp cho người dùng cơ sở để 'viết một lần, chạy ở mọi nơi'. Nhiều hệ điều hành như Sun Solaris, RedHat, Windows, v.v., hỗ trợ Java.

## Câu hỏi phỏng vấn Java cho Fresher

### 1. Java có phải nền tảng độc lập không?

Java là một ngôn ngữ độc lập với nền tảng vì mã nguồn của Java có thể chạy trên nhiều hệ điều hành. Các chương trình Java có thể chạy trên bất kỳ máy nào hoặc hệ điều hành không cần cài đặt bất kỳ phần mềm đặc biệt nào. Mặc dù JVM cần phải có mặt trong máy. Mã Java biên dịch thành bytecode (file .class), độc lập với nền tảng. Chúng tôi có thể chạy mã bytecode này trên Windows, Linux, Mac OS,....

### 2. Tại sao nói Java không phải ngôn ngữ thuần đối tượng?

Java hỗ trợ kiểu dữ liệu nguyên thuỷ byte, boolean, char, short, int, float, long, và double, do đó nó không phải là ngôn ngữ thuần đối tượng.

### 3. Con trỏ trong Java?

Con trỏ là một khái niệm khá phức tạp đối với những người mới bắt đầu. Java tập trung vào sự đơn giản cho code nên việc sử dụng con trỏ có thể khiến nó trở nên phức tạp hơn. Đồng thời, tính bảo mật cũng bị ảnh hưởng nếu con trỏ được sử dụng vì người dùng có thể truy cập trực tiếp vào bộ nhớ với sự trợ giúp của con trỏ.

Do đó, một mức trừu tượng nhất định được cung cấp bằng cách không bao gồm các con trỏ trong Java. Hơn nữa, việc sử dụng con trỏ có thể làm cho tiến trình thu gom rác khá chậm và sai sót. Java sử dụng các tham chiếu vì chúng không thể thao tác được, không giống như con trỏ.

### 4. Biến toàn cục và biến cục bộ trong Java?

**Biến toàn cục (instance variables)** là các biến có thể được truy cập bởi tất cả phương thức trong lớp. Chúng được khai báo bên ngoài phương thức và bên trong lớp. Các biến này mô tả thuộc tính của một đối tượng, chúng được tạo khi một đối tượng được tạo bằng việc sử dụng từ khóa “new” và sẽ bị phá hủy khi đối tượng bị phá hủy.

Tất cả các đối tượng của lớp sẽ có bản sao các biến để sử dụng. Nếu bất kỳ thay đổi nào được thực hiên trên các biến này, chỉ có đối tượng đó bị tác động, các đối tượng cùng lớp khác sẽ không ảnh hưởng.

```java
class Athlete {
    public String athleteName;
    public double athleteSpeed;
    public int athleteAge;
}
```

**Biến cục bộ (local variables)** là các biến được khai báo trong các phương thức, hàm contructor hoặc trong các block. Việc sử dụng biến bị hạn chế trong phạm vi block. Bất cứ khi nào một biến cục bộ được khai báo bên trong một phương thức, các phương thức lớp khác không biết gì về sự tồn tại của nó.

```java
public void athlete() {
    String athleteName;
    double athleteSpeed;
    int athleteAge;
}
```

![](./assets/instance_vs_local_variable.png)

### 5. Đóng gói dữ liệu là gì?

- Đóng gói dữ liệu là một khái niệm trong lập trình hướng đối tượng để ẩn các thuộc tính dữ liệu và hành vi của chúng trong một đơn vị duy nhất.
- Nó giúp các nhà phát triển tuân theo module trong khi phát triển phần mềm bằng cách đảm bảo rằng mỗi đối tượng độc lập với các đối tượng khác bằng cách có các phương thức, thuộc tính và chức năng riêng của nó.
- Nó được sử dụng để bảo mật các thuộc tính riêng tư của một đối tượng và do đó phục vụ mục đích ẩn dữ liệu.

![](./assets/data_encapsulation.jpg)

### 6. JIT compiler là gì?

JIT là viết tắt của Just-In-Time, được dùng để cải thiện hiệu suất khi biên dịch. Nó thực hiện nhiệm vụ biên dịch các phần của bytecode có chức năng giống nhau cùng lúc, do đó giảm lượng thời gian biên dịch để chạy code.

Trình biên dịch (compiler) là nơi dịch mã nguồn thành mã máy tính có thể hiểu. Nhưng JIT đặc biệt vì:
- Mã nguồn (.java) được chuyển thành bytecode (.class) xảy ra ở trình biên dịch javac.
- Sau đó file `.class` được tải bởi JVM và sự trợ giúp của trình thông dịch(interpreter), nó được chuyển thành mã máy tính có thể hiểu.
- Trình biên dịch JIT là một phần của JVM. Khi JIT khởi động, JVM phân tích phương thức gọi trong file `.class` và biên dịch chúng để có được code thuần và hiệu quả hơn. Nó cũng đảm bảo phương thức gọi ưu tiên được tối ưu hoá.
- Sau khi bước trên hoàn thành, JVM thực thi code tối ưu trực tiếp thay vì thông dịch lần nữa. Điều này tăng hiệu suất và tốc độ thực thi.

![](./assets/JIT_Compiler.jpg)

### 7. Sự khác biết giữa phương thức equals() và toán tử == trong Java?

| equals() | == |
|-|-|
| Phương thức khai báo trong lớp, đối tượng | Toán tử nhị phân trong Java |
| Dùng cho kiếm tra so sánh bằng nội dung giữa hai đối tượng theo logic nghiệp vụ cụ thể | Dùng để so sánh địa chỉ (hoặc tham chiếu), tức là kiểm tra xem cả hai đối tượng có trỏ đến cùng một vị trí bộ nhớ hay không |

*Lưu ý*

- Trong trường hợp phương thức `equals` không được ghi đè trong một lớp, thì lớp đó sử dụng cách triển khai mặc định của phương thức `equals` gần với lớp cha nhất.
- Lớp đối tượng được coi là lớp cha của tất cả các lớp java. Việc triển khai phương thức `equals` trong lớp Đối tượng sử dụng toán tử `==` để so sánh hai đối tượng. Việc triển khai mặc định này có thể được ghi đè theo logic nghiệp vụ

### 8. Dùng vòng lặp trong Java thế nào?

- Vòng lặp For:

```java
for(;;)
{
    // Business logic
    // Any break logic
}
```

- Vòng lặp While:

```java
while(true) {
    // Business logic
    // Any break logic
}
```

- Vòng lặp do-while:

```java
do {
    // Business logic
    // Any break logic
} while(true);
```

### 9. Giải thích khái niệm constructor overloading?

Nạp chồng hàm khởi tạo (constructor overloading) là quá trình tạo nhiều hàm khởi tạo có cùng tên nhưng khác các tham số trong lớp. Tùy thuộc vào số lượng tham số và kiểu tương ứng của chúng, việc phân biệt các loại constructor khác nhau được thực hiện bởi trình biên dịch.

```java
class Hospital {
    int variable1, variable2;
    double variable3;
    public Hospital(int doctors, int nurses) {
        variable1 = doctors;
        variable2 = nurses;
    }
    public Hospital(int doctors) {
        variable1 = doctors;
    }
    public Hospital(double salaries) {
        variable3 = salaries
    }
}
```

![](./assets/constructor_overloading_java.png)

### 10. Nạp chồng phương thức và ghi đè phương thức trong Java?

Trong Java, việc **nạp chồng phương thức (overloading)** được thực hiện bằng cách đưa các phương thức khác nhau vào cùng một lớp có cùng tên. Tuy nhiên, tất cả các hàm khác nhau về số lượng hoặc kiểu tham số. Nó diễn ra bên trong một lớp và nâng cao khả năng đọc của chương trình.

Sự khác biệt duy nhất trong kiểu trả về của phương thức không thúc đẩy quá trình nạp chồng phương thức. Ví dụ sau đây sẽ cung cấp cho bạn một bức tranh rõ ràng về nó.

```java
class OverloadingHelp {
   public int findarea (int l, int b) {
        int var1;
        var1 = l * b;
        return var1;
   }
   public int findarea (int l, int b, int h) {
        int var2;
        var2 = l * b * h;
        return var2;
   }
}
```

![](./assets/method_overloading.png)

Cả hai hàm có cùng tên nhưng khác nhau về số lượng đối số. Phương pháp đầu tiên tính diện tích hình chữ nhật, trong khi phương pháp thứ hai tính diện tích hình lập phương.

**Ghi đè phương thức (override)** là khái niệm trong đó hai phương thức giống nhau hiện diện trong hai lớp khác nhau, trong đó có mối quan hệ kế thừa. Có thể thực hiện một phương thức cụ thể (đã có trong lớp cơ sở) cho lớp dẫn xuất bằng cách sử dụng ghi đè phương thức.

Hãy xem ví dụ này:

```java
class HumanBeing {
    public int walk (int distance, int time) {
        int speed = distance / time;
        return speed;
    }
}
class Athlete extends HumanBeing {
    public int walk(int distance, int time) {
        int speed = distance / time;
        speed = speed * 2;
        return speed;
    }
}
```

![](./assets/method_overriding.png)

Cả hai phương thức lớp đều có tên `walk` và các tham số: `distance` và `time` giống nhau. Nếu phương thức lớp dẫn xuất được gọi, thì phương thức `walk` của lớp cơ sở sẽ bị ghi đè bởi phương thức của lớp dẫn xuất.

### 11. Một try có thể có nhiều catch trong Java?

Có, nhiều khối catch có thể tồn tại nhưng các phương pháp tiếp cận cụ thể nên ưu tiên hơn cách tiếp cận chung vì khi khối đầu tiên thoả mãn điều kiện catch mới được thực thi. Ví dụ:

```java
public class MultipleCatch {
    public static void main(String args[]) {
        try {
            int n = 1000, x = 0;
            int arr[] = new int[n];
            for (int i = 0; i <= n; i++) {
                arr[i] = i / x;
            }
        }
        catch (ArrayIndexOutOfBoundsException exception) {
            System.out.println("1st block = ArrayIndexOutOfBoundsException");
        }
        catch (ArithmeticException exception) {
            System.out.println("2nd block = ArithmeticException");
        }
        catch (Exception exception) {
            System.out.println("3rd block = Exception");
        }
    }
}
```

Ở đây khối catch thứ hai sẽ được thực thi vì phép chia bởi 0(i/x). Trong trường hợp x lớn 0 thì khối catch đầu tiên sẽ thực thi vì vòng lặp chạy đến khi i = n và chỉ số mảng đến n-1.

### 12. Giải thích từ khoá final trong biến, phương thức và lớp?

Trong Java, từ khoá `final` được dùng cho xác định một thứ gì đó là một hằng và không thể chỉnh sửa nữa.

- biến `final`:
    - Khi một biến được khai báo là final trong Java, giá trị không thể chỉnh sửa sau khi gán.
    - Nếu không có bất kỳ giá trị nào được gán cho biến, nó có thể được gán bằng constructor của lớp.
- phương thức `final`:
    -Một phương thức được khai báo là final nó sẽ không thể bị ghi đè bởi lớp con của nó.
    - Một constructor không thể là final vì một lớp có thể được kế thừa còn constructor thì không. Do đó, khi đánh dấu constructor là final, Java sẽ trả về lỗi - `modifier final not allowed here`
- lớp `final`:
    - Một lớp được khai báo là final thì không có bất kỳ lớp nào có thể kế thừa lớp đó. 

### 13. Các từ khoá final, finally và finalize là giống nhau?

**Final:** dùng cho các lớp, biến hoặc phương thức. Việc kế thừa một lớp final hay ghi đè một phương thức final sẽ bị hạn chế bởi việc sử dụng từ khoá final. Giá trị biến trở thành hằng sau khi dùng từ khoá final. Ví dụ:

```java
final int a=100;
a = 0;  // error
```

**Finally:** Nó là block hiện diện trong chương trình nơi tất cả code được viết bên trong nó được thực thi kể cả việc xử lý ngoại lệ. Ví dụ:

```java
try {
    int variable = 5;
}
catch (Exception exception) {
    System.out.println("Exception occurred");
}
finally {
    System.out.println("Execution of finally block");
}
```

**Finalize:** Trước khi thu gom rác của một đối tượng, phương thức finalize được gọi để hoạt động dọn dẹp được thực hiện. Ví dụ:

```java
public static void main(String[] args) {
    String example = new String("InterviewBit");
    example = null;
    System.gc(); // Garbage collector called
}
public void finalize() {
    // Finalize called
}
```

### 14. Khi nào dùng từ khoá super?

Từ khoá `super` được dùng để truy cập các trường ẩn và ghi đề phương thức hoặc thuộc tính của lớp cha.
Nó dùng trong các trường hợp sau:
- Truy cập dữ liệu thành viên của lớp cha khi tên thành viên của lớp cha và lớp con giống nhau.
- Để gọi phương thức khởi tạo tham số và mặc định của lớp cha bên trong lớp con.
- Truy cập phương thức lớp cha khi lớp con ghi đè chúng.

Ví dụ:

```java
public class Parent{
    protected int num = 1;
    
    Parent(){
        System.out.println("Parent class default constructor.");
    }
    
    Parent(String x){
        System.out.println("Parent class parameterised constructor.");
    }
    
    public void foo(){
        System.out.println("Parent class foo!");
    }
}
   
public class Child extends Parent{
    private int num = 2;
    
    Child(){
        System.out.println("Child class default Constructor");
        
        super();    // to call default parent constructor
        super("Call Parent");    // to call parameterised constructor.
    }
    
    void printNum(){
        System.out.println(num);
        System.out.println(super.num); //prints the value of num of parent class
    }
    
    @Override
    public void foo(){
        System.out.println("Parent class foo!");
        super.foo();    //Calls foo method of Parent class inside the Overriden foo method of Child class.
    }
}
```

### 15. Phương thức tĩnh có thể nạp chồng?

Đúng! Có thể có hai hoặc nhiều phương thức tĩnh trong một lớp có cùng tên nhưng khác tham số đầu vào.

### 16. Có thể ghi đè phương thức tĩnh?

- Không! Việc khai báo các phương thức tĩnh có cùng một đặc trưng có thể được thực hiện trong lớp con nhưng tính đa hình thời gian chạy không thể diễn ra trong những trường hợp như vậy.

- Ghi đè hoặc đa hình động xảy ra trong thời gian chạy, nhưng các phương thức tĩnh được tải và tra cứu thời gian biên dịch một cách tĩnh. Do đó, các phương thức này không thể bị ghi đè.

### 17. Đối tượng chính của bộ dọn rác?

Mục tiêu chính của quá trình này là giải phóng không gian bộ nhớ bị chiếm bởi các đối tượng không cần thiết và không thể truy cập trong quá trình thực thi chương trình Java bằng cách xóa các đối tượng không thể truy cập đó.

Điều này đảm bảo rằng tài nguyên bộ nhớ được sử dụng hiệu quả, nhưng nó không đảm bảo rằng sẽ có đủ bộ nhớ để thực thi chương trình.

### 18. Phần nào trong bộ nhớ bị xoá trong quá trình dọn rác?

Heap

### 19. Ngoài khía cạnh bảo mật, những lý do đằng sau việc làm cho chuỗi bất biến trong Java là gì?

Một chuỗi sẽ thành bất biến vì những lý do sau đây:

- **String Pool:** Các nhà thiết kế Java đã nhận thấy được rằng trong thực tế kiểu dữ liệu Strung được sử dụng chủ yếu bởi các lập trình viên và nhà phát triển. Vì vậy, họ muốn tối ưu hoá nó bằng cách đưa ra khái niệm String Pool (một vùng lưu trữ trong Java Heap) để lưu trữ các chuỗi ký tự. Họ dự định giảm đối tượng String tạm thời với sự trợ giúp của tính năng chia sẻ. Một lớp bất biến là cần thiết để tạo điều kiện chia sẻ. Việc chia sẻ cấu trúc có thể thay đổi giữa hai bên không xác định là không thể. Do đó, chuỗi trong Java bất biến giúp thực thi khái niệm String Pool.

![](./assets/string_pool.png)

- **Đa luồng:** Sự an toàn của các luồng liên quan đến các đối tượng String là một khía cạnh quan trọng trong Java. Không cần đồng bộ hóa bên ngoài nếu các đối tượng String là bất biến. Do đó, một mã code rõ ràng hơn có thể được viết để chia sẻ các đối tượng String trên các luồng khác nhau. Quá trình phức tạp của đồng thời được hỗ trợ bởi phương pháp này.

- **Collections:** Trong trường hợp Hash Table và Hash Maps, keys sẽ là một đối tượng String. Nếu các đối tượng String không phải là bất biến, thì nó có thể được sửa đổi trong khoảng thời gian nó nằm trong HashMaps. Do đó, không thể truy xuất dữ liệu mong muốn. Những sự thay đổi như vậy tiềm ẩn rất nhiều rủi ro. Vì vậy, sẽ an toàn hơn nếu làm cho chuỗi bất biến.

### 20. Sự khác biệt giữa String, StringBuffer và StringBuilder?

- **Khu vực lưu trữ:** Với String, String Pool đóng vai trò là khu vực lưu trữ. Đối với StringBuilder và StringBuffer, bộ nhớ heap là vùng lưu trữ.
- **Tính thay đổi:** Một String là bất biến, trong khi cả StringBuilder và StringBuffer đều có thể thay đổi.
- **Hiệu quả:** Khá chậm để làm việc với một String. Tuy nhiên, StringBuilder là nhanh nhất trong việc thực hiện các hoạt động. Tốc độ của StringBuffer hơn String và nhỏ hơn StringBuilder. (Ví dụ: thêm một ký tự là nhanh nhất trong StringBuilder và rất chậm trong String vì cần có bộ nhớ mới cho chuỗi mới với ký tự được nối.)
- **Thread-safe:** Trong trường hợp môi trường luồng, StringBuilder và StringBuffer được sử dụng trong khi một String không được sử dụng. Tuy nhiên, StringBuilder phù hợp với môi trường có một luồng duy nhất và StringBuffer phù hợp với đa luồng.

```java
// String
String first = "InterviewBit";
String second = new String("InterviewBit");
// StringBuffer
StringBuffer third = new StringBuffer("InterviewBit");
// StringBuilder
StringBuilder fourth = new StringBuilder("InterviewBit");
```

### 21. Sử dụng các thuộc tính có liên quan làm nổi bật sự khác biệt giữa các interface và các lớp trừu tượng.

- **Phương thức khả dụng:** chỉ phương thức trừu tượng là khả dụng trong interface, trong khi đó các phương thức không phải trừu tượng vẫn có thể có trong lớp trừu tượng.
- **Kiểu biến:** biến static và final chỉ có thể khai báo trong interface, các biến trong lớp trừu tượng không thể là hai kiểu trên.
- **Kế thừa:** đa kế thừa được hỗ trợ trong interface, trong khi các lớp trừu tượng không khuyến khích đa kế thừa.
- **Truy cập dữ liệu thành viên:** mặc định, dữ liệu thành viên của interface là công khai, ngược lại dữ liệu thành viên của lớp trừu tượng là riêng tư.
- **Triển khai:** với lớp trừu tượng có thể triển khai interface dễ dàng, nhưng không thể làm ngược lại.

Ví dụ lớp trừu tượng:

```java
public abstract class Athlete {
    public abstract void walk()
}
```

Ví dụ interface:

```java
public interface Walkable {
    void walk();
}
```

### 22. Trong Java, có thể ghi đè phương thức static cũng như phương thức private không?

Không. Các phương thức static không liên quan đến các đối tượng và các phương thức này thuộc cấp độ lớp. Trong trường hợp của một lớp con, một phương thức static có ký hiệu phương thức giống hệt như của lớp cha có thể tồn tại mà không gây ra bất kỳ lỗi biên dịch nào.

Hiện tượng được đề cập ở đây thường được gọi là phương thức ẩn, và việc ghi đè chắc chắn là không thể. Việc ghi đè phương thức private là không thể xảy ra được vì khả năng hiển thị của phương thức private chỉ bị hạn chế ở lớp cha. Do đó, chỉ có thể tạo điều kiện cho việc ẩn và không thể ghi đè.

### 23. HashSet khác TreeSet như thế nào?

Mặc dù cả HashSet và TreeSet đều không được đồng bộ hóa và đảm bảo rằng không trùng nhưng có một số thuộc tính phân biệt HashSet với TreeSet.
- **Triển khai**: với HashSet, bảng băm được dùng cho lưu trữ phần tử không theo thứ tự. Tuy nhiên, TreeSet dùng cây đỏ đen (red-black tree) cho lưu trữ phần tử theo thứ tự.
- **Hiệu suất/Độ phức tạp**: Với thêm, xem và xoá phần tử độ phức tạp thời gian là `O(1)` cho HashSet. Độ phức tạp thời gian cho hiệu suất tương tự như bit lớn nhất cho TreeSet và bằng `O(logn)`. Tổng thể hiệu suất HashSet nhanh hơn so với TreeSet.
- **Phương thức**: `hashCode()` và `equals()` là phương thức dùng cho HashSet để so sánh giữa các đối tượng. Còn TreeSet dùng các phương thức `compareTo()` và `compare()` để so sánh đối tượng.
- **Kiểu đối tượng**: Các đối tượng không đồng nhất và null có thể được lưu trữ với sự trợ giúp của HashSet. Trong trường hợp TreeSet, **runtime exception** xảy ra trong khi chèn các đối tượng không đồng nhất hoặc đối tượng null.

### 24. Tại sao mảng ký tự được ưu tiên hơn chuỗi để lưu trữ thông tin bí mật?

Trong Java, một chuỗi về cơ bản là bất biến, tức là không thể sửa đổi. Sau khi khai báo, nó tiếp tục ở trong string pool miễn là nó không bị loại bỏ dưới dạng rác. Nói cách khác, một chuỗi nằm trong phần heap của bộ nhớ trong một khoảng thời gian không được kiểm soát và không xác định sau khi quá trình xử lý giá trị chuỗi được thực hiện.

Do đó, thông tin quan trọng có thể bị đánh cắp để thực hiện các hoạt động có hại của hacker nếu chúng bị chúng truy cập bất hợp pháp vào bộ nhớ. Những rủi ro như vậy có thể được loại bỏ bằng cách sử dụng các đối tượng hoặc cấu trúc có thể thay đổi được như mảng ký tự để lưu trữ bất kỳ biến nào. Sau khi công việc của biến mảng ký tự được thực hiện, biến có thể được cấu hình để trống ngay lập tức. Do đó, nó giúp tiết kiệm bộ nhớ heap và cũng không tạo cơ hội cho hacker trích xuất dữ liệu quan trọng.

### 25. Sự khác biệt của JVM, JRE và JDK?

| JDK | JRE | JVM |
|-|-|-|
| Java Development Kit | Java Runtime Enviroment | Java Virtual Machine |
| JDK là một bộ phát triển phần mềm hoàn chỉnh để phát triển các ứng dụng Java. Nó bao gồm JRE, JavaDoc, trình biên dịch, trình gỡ lỗi,... | JRE là một gói phần mềm cung cấp các thư viện lớp Java, JVM và tất cả các thành phần cần thiết để chạy các ứng dụng Java | JVM là một máy ảo, phụ thuộc vào nền tảng, bao gồm 3 thông số kỹ thuật - tài liệu mô tả các yêu cầu triển khai JVM, chương trình máy tính đáp ứng các yêu cầu JVM và đối tượng thực thể để thực thi bytecode Java và cung cấp môi trường thời gian chạy để thực thi |
| JDK chủ yếu được sử dụng để phát triển và thực thi code | JRE chủ yếu được sử dụng để tạo môi trường để thực thi code | JVM cung cấp thông số kỹ thuật cho tất cả các triển khai cho JRE |
| JDK cung cấp các công cụ như trình biên dịch, trình gỡ lỗi, v.v. để phát triển code | JRE cung cấp các thư viện và lớp theo yêu cầu của JVM để chạy chương trình | JVM không bao gồm bất kỳ công cụ nào, nhưng thay vào đó, nó cung cấp đặc điểm kỹ thuật để triển khai |
| JDK = JRE + công cụ phát triển | JRE = JVM + thư viện thực thi ứng dụng | JVM = môi trường thực thi bytecode Java |

### 26. Sự khác biệt giữa HashMap và HashTable trong Java?

| HashMap | HashTable |
|-|-|
| HashMap không được đồng bộ hóa do đó nó tốt hơn cho các ứng dụng không phân luồng | HashTable được đồng bộ hóa và do đó nó phù hợp với các ứng dụng phân luồng |
| Chỉ cho phép một khóa null nhưng bất kỳ giá trị nào cũng có thể null | Không cho phép null trong cả khóa hoặc giá trị |
| Hỗ trợ chèn theo thứ tự bằng cách sử dụng LinkedHashMap lớp con của nó | Chèn theo thứ tự không được đảm bảo trong HashTable |

### 27. Reflection trong Java?

Thuật ngữ `reflection` được sử dụng để mô tả khả năng kiểm tra của một code trên code khác của chính nó hoặc của hệ thống của nó và sửa đổi nó trong thời gian chạy.

Hãy xem xét một ví dụ trong đó chúng ta có một đối tượng không xác định kiểu và chúng ta có một phương thức `fooBar()` mà chúng ta cần gọi trên đối tượng. Hệ thống static typing của Java không cho phép gọi phương thức này trừ khi kiểu đối tượng được biết trước. 
Điều này có thể thực hiện được bằng cách sử dụng reflection, cho phép code quét đối tượng và xác định xem nó có bất kỳ phương thức nào được gọi là `fooBar()` hay không và chỉ gọi phương thức nếu cần.

```java
Method methodOfFoo = fooObject.getClass().getMethod("fooBar", null);
methodOfFoo.invoke(fooObject, null);
```

Sử dụng reflection có các hạn chế sau:
- Tốc độ - Các lệnh gọi phương thức do reflection chậm hơn khoảng ba lần so với các lệnh gọi phương thức trực tiếp.
- An toàn kiểu - Khi một phương thức được gọi nhầm qua tham chiếu của nó bằng cách sử dụng reflection, thì lệnh gọi không thành công trong thời gian chạy vì nó không được phát hiện tại thời gian biên dịch.
- Truy xuất nguồn gốc - Bất cứ khi nào một phương pháp reflection không thành công, rất khó tìm ra nguyên nhân gốc rễ của lỗi này. Người ta phải đi sâu vào phương thức log như `invoke()` và `proxy()` để xác định nguyên nhân gốc rễ.

### 28. Các cách sử dụng luồng?

- **Kế thừa từ lớp Thread**

```java
class InterviewBitThreadExample extends Thread{  
    public void run(){  
        System.out.println("Thread runs...");  
    }  
    public static void main(String args[]){  
        InterviewBitThreadExample ib = new InterviewBitThreadExample();  
        ib.start();  
    }  
}
```

- **Triển khai interface Runnable**

```java
class InterviewBitThreadExample implements Runnable{  
    public void run(){  
        System.out.println("Thread runs...");  
    }  
    public static void main(String args[]){  
        Thread ib = new Thread(new InterviewBitThreadExample()); 
        ib.start();  
    }  
}
```

- Việc triển khai một luồng bằng phương thức của interface Runnable được ưu tiên và thuận lợi hơn vì Java không hỗ trợ đa kế thừa.
- Phương thức `start()` được sử dụng để tạo một ngăn xếp cuộc gọi riêng biệt để thực thi luồng. Khi ngăn xếp cuộc gọi được tạo, JVM gọi phương thức `run()` để thực thi luồng trong ngăn xếp cuộc gọi đó.

### 29. Sự khác biệt giữa constructor và method của lớp?


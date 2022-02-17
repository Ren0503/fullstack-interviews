# Câu hỏi phỏng vấn Java

![](./assets/java.png)

## Java là gì?

Java là một ngôn ngữ lập trình hướng đối tượng được phát triển cho môi trường phân tán và phát triển phần mềm đa nền tảng.

Ngôn ngữ lập trình Java là một ngôn ngữ độc lập với nền tảng, có nghĩa là không có giới hạn đối với bất kỳ phần cứng hoặc hệ điều hành cụ thể nào. Nó cung cấp cho người dùng cơ sở để 'viết một lần, chạy ở mọi nơi'. Nhiều hệ điều hành như Sun Solaris, RedHat, Windows, v.v., hỗ trợ Java.

## Câu hỏi phỏng vấn Java cho Fresher

### 1. Java có phải nền tảng độc lập không?

Java là một ngôn ngữ độc lập với nền tảng vì mã nguồn của Java có thể chạy trên nhiều hệ điều hành. Các chương trình Java có thể chạy trên bất kỳ máy nào hoặc hệ điều hành không cần cài đặt bất kỳ phần mềm đặc biệt nào. Mặc dù JVM cần phải có mặt trong máy. Mã Java biên dịch thành bytecode (tệp .class), độc lập với nền tảng. Chúng tôi có thể chạy mã bytecode này trên Windows, Linux, Mac OS,....

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


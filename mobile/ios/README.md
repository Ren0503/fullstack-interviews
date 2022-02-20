# Câu hỏi phỏng vấn iOS

![](./assets/ios.jpg)

## iOS là gì?

iOS là viết tắt của "iPhone Operating System". Đây là hệ điều hành dành cho các thiết bị của Apple, và nó được coi là hệ điều hành di động phổ biến thứ hai trên toàn cầu sau Android. Hệ điều hành này hỗ trợ nhiều sản phẩm của Apple bao gồm iPhone, iPad và iPod. iOS được nhiều người khen ngợi vì giao diện trực quan và thân thiện với người dùng.

**Tính năng của iOS**

- iPhone cung cấp khả năng đa nhiệm. Trên thiết bị iOS, bạn có thể dễ dàng chuyển đổi giữa các ứng dụng bằng tính năng đa nhiệm hoặc cử chỉ nhiều ngón tay.
- iOS giúp bạn dễ dàng tích hợp các tương tác mạng xã hội với ứng dụng của mình bằng cách hiển thị luồng hoạt động và chia sẻ nội dung.
- Dịch vụ iCloud của Apple cho phép người dùng lưu trữ dữ liệu trên Internet. Nó cung cấp mức độ mã hóa cao và tùy chọn sao lưu để đảm bảo người dùng không bị mất dữ liệu.
- Cửa hàng ứng dụng của Apple có sẵn trên tất cả các nền tảng, cung cấp cho người dùng các dịch vụ và tài liệu bổ sung bao gồm các mặt hàng kỹ thuật số (iOS, iPad, macOS), đăng ký và nội dung cao cấp.
- Bạn có thể xem tất cả các cảnh báo ứng dụng của mình trong Trung tâm thông báo trong iOS. Tuy nhiên, cài đặt thông báo có thể được sửa đổi.
- iOS là một hệ thống đóng. Mã nguồn của các ứng dụng của Apple không có sẵn cho các nhà phát triển và chủ sở hữu iPhone và iPad không thể sửa đổi code trên thiết bị của họ. Điều này làm cho các thiết bị chạy iOS khó bị hack hơn.

## Câu hỏi phỏng vấn iOS cho Fresher

### 1. Giải thích kiến trúc iOS?

iOS hoạt động theo cấu trúc lớp. Kiến trúc iOS bao gồm bốn lớp, mỗi lớp cung cấp một framework lập trình để tạo các ứng dụng hoạt động trên phần cứng. Giao tiếp sẽ được tăng cường bởi các lớp giữa lớp ứng dụng và lớp phần cứng. Lớp cấp thấp hơn cung cấp các dịch vụ mà tất cả các ứng dụng yêu cầu, trong khi lớp cấp cao cung cấp các dịch vụ liên quan đến đồ họa và giao diện.

![](./assets/Architecture_of_iOS.png)

- **Lớp core OS:** nằm ngay trên đầu phần cứng thiết bị và là lớp dưới cùng của kiến trúc hệ điều hành iPhone. Ngoài các dịch vụ hệ điều hành cơ bản, chẳng hạn như quản lý bộ nhớ, xử lý hệ thống file và luồng, lớp này còn cung cấp mạng cấp thấp, quyền truy cập vào các phụ kiện bên ngoài,...
- **Lớp dịch vụ:** Mục đích của nó là thiết kế các dịch vụ mà lớp trên hoặc người dùng yêu cầu. Các tính năng thiết yếu của nó là các đối tượng khối, Grand Central Dispatch, mua hàng trong ứng dụng và lưu trữ iCloud. Lớp dịch vụ đã được củng cố bằng cách bổ sung tính năng ARC Automatic Reference Counting.
- **Lớp Media:** xử lý media như video, âm thanh, hình ảnh,... Lớp media cho phép ta sử dụng tất cả công nghệ đồ hoạ, âm thanh, hình ảnh của hệ thống.
- **Lớp Cocoa Touch:** còn biết đến là lớp ứng dụng. Đây là nơi mà các framework được tạo ra khi các ứng dụng được xây dựng. Ngoài ra, nó có chức năng như giao diện để người dùng iOS làm việc với hệ điều hành. Điều này bao gồm khả năng cảm ứng và chuyển động.

### 2. Thuộc tính trong iOS?

Thuộc tính cơ bản là các giá trị được liên kết với một class, struct hay enum. Nó có thể là một biến con, một phần của đối tượng khác.

Ví dụ:

```swift
struct Icecream  
{ 
    var flavor: String = ""
} 
var choco = Icecream() 
choco.flavor = "Chocolate Icecream"
```

Trong đoạn code trên, ta tạo một cấu trúc gọi là `Icecream`. Một trong những thuộc tính của nó được gọi là `flavor`, có giá trị ban đầu là một chuỗi trống.

#### Phân loại thuộc tính

- **Thuộc tính lưu trữ**: kiểu thuộc tính này dành cho lưu trữ một giá trị hằng hoặc biến và thường được cung cấp bởi class hay structure.

Ví dụ:

```swift
class Programmer {
    var progName: String
    let progLanguage: String
    var totalExperience = 0
    var secondLanguage: String?
}
```

Ở trên, lớp `Programmer` khai báo bốn thuộc tính: `progName`, `progLanguage`, `totalExperience`, và `secondLanguage`. Chúng là thuộc tính lưu trữ có thể bao gồm giá trị và là một phần của thực thể lớp. Đoạn code trên hiển thị thuộc tính mà không có giá trị mặc định.

- **Thuộc tính tính toán**: các thuộc tính này dùng cho tính toán thay vì lưu trữ thường được cung cấp bởi class, enum hay struct.

Ví dụ:

```swift
struct Angle {
    var degrees: Double = 0

    var rads: Double {
        get {
            return degrees * .pi / 180
        }
        set(newRads) {
            degrees = newRads * 180 / .pi
        }
    }
}
```

Ở trên, cấu trúc `Angle` có thuộc tính lưu trữ `degrees` để lưu trữ độ của góc. Hơn thế nữa, `Angle` còn thế có chuyển thành radian, thế nên `Angle` bao gồm thuộc tính `rads` để tính toán thuộc tính.

### 3. Bạn có thể giải thích sự khác biệt giữa các thuộc tính atomic và nonatomic không?

**Thuộc tính atomic:** Nó là thuộc tính mặc định và đảm bảo một giá trị hợp lệ sẽ được trả về từ getter hoặc được thiết lập bởi setter. Điều này đảm bảo rằng chỉ một luồng có thể truy cập getter/setter của một thuộc tính nhất định tại một thời điểm và tất cả các luồng khác phải đợi cho đến khi luồng đầu tiên giải phóng getter/setter. Mặc dù luồng an toàn, nhưng nó không nhanh, vì nó đảm bảo rằng quá trình được hoàn thành hoàn toàn.

**Thuộc tính nonatomic:** Với thuộc tính này, nhiều luồng có thể truy cập vào phương thức getter/setter của một thuộc tính nhất định cùng một lúc, do đó có khả năng tồn tại sự không nhất quán giữa các giá trị. Chúng đi kèm với quyền truy cập nâng cao, nhưng không đảm bảo về giá trị trả về.

### 4. Các trạng thái khác nhau của ứng dụng iOS?

Trong quá trình thực thi, ứng dụng iOS trải qua một loạt trạng thái. Mỗi trạng thái này được coi là trạng thái vòng đời của ứng dụng. Dưới đây là năm trạng thái có thể xảy ra đối với ứng dụng iOS:

![](./assets/ios_application_states.png)

- **Not running:** ở trạng thái này, ứng dụng đã không được khởi chạy hoặc đã bị đóng bởi hệ thống.
- **Inactive:** một trạng thái không hoạt động ngắn xảy ra khi ứng dụng đang rời khỏi hoặc đang ở trạng thái hoạt động. Mặc dù chạy ở chế độ đã hiển thị, nó vẫn chưa sẵn sàng để chấp nhận đầu vào hoặc sự kiện từ người dùng. Điều này có nghĩa là ứng dụng vẫn không hoạt động tại thời điểm này.
- **Active:** trạng thái này cho biết rằng ứng dụng đang được hiển thị và nhận các sự kiện. Đây là chế độ bình thường cho các ứng dụng và Giao diện người dùng có thể truy cập được.
- **Background:** trong trạng thái này, giao diện người dùng của ứng dụng bị ẩn, nhưng nó vẫn tiếp tục chạy trong nền của hệ thống iOS. Các ứng dụng thường vượt qua trạng thái này trước khi bị đình chỉ.
- **Suspended:** Trong trường hợp này, ứng dụng đang ở chế độ nền nhưng không chạy code. Trong điều kiện bộ nhớ thấp, hệ thống có thể xóa các ứng dụng ở trạng thái bị treo mà không cần cảnh báo.

### 5. Trách nhiệm của nhà phát triển iOS?

Nhà phát triển iOS là một lập trình viên hoặc kỹ sư phần mềm, người thiết kế và phát triển các ứng dụng chạy iOS của Apple trên thiết bị iOS. Tốt nhất, nhà phát triển iOS phải có kỹ năng trong hai ngôn ngữ lập trình, là Objective-C và Swift.

Trách nhiệm của nhà phát triển iOS:

- Code sạch sẽ, hiệu quả cho các ứng dụng iOS.
- Đảm bảo code an toàn bằng cách thực hiện khắc phục sự cố và sửa lỗi cho các ứng dụng.
- Việc phát triển và triển khai các tính năng ứng dụng nâng cao cũng như duy trì và cải tiến các tính năng hiện có.
- Phát triển các giải pháp sáng tạo để đáp ứng nhu cầu kinh doanh của khách hàng.
- Hỗ trợ tất cả các khía cạnh của phát triển ứng dụng, bao gồm thiết kế, thử nghiệm, phát hành và hỗ trợ.
- Khám phá, đánh giá và triển khai các công nghệ mới liên tục để tối đa hóa hiệu quả phát triển.

### 6. Sự khác biệt giữa Android và iOS?

**Android**: Đây là hệ điều hành di động dành cho các thiết bị Android do Google LLC cung cấp và tập trung vào các thiết bị di động có màn hình cảm ứng như điện thoại thông minh và máy tính bảng. Một số ngôn ngữ lập trình đã được sử dụng trong quá trình phát triển của nó, bao gồm C, Java, C++ và các ngôn ngữ khác.

**iOS**: Đây là hệ điều hành dành cho các thiết bị của Apple do Apple cung cấp và nó được coi là hệ điều hành di động phổ biến thứ hai trên toàn cầu sau Android. Nó chủ yếu được thiết kế cho các thiết bị di động của Apple như iPhone, iPod Touch, v.v. Một số ngôn ngữ lập trình đã được sử dụng trong quá trình phát triển của nó, bao gồm Objective-C, Swift, C++ và các ngôn ngữ khác.

| Android | iOS |
|-|-|
| Hệ điều hành di động cho thiết bị Android được cung cấp bởi Google LLC | Hệ điều hành cho thiết bị Apple được cung cấp bởi tập đoàn Apple |
| Dành cho smartphone và máy tính bảng | Dành cho iPhone, iPod và iPad |
| Chủ yếu dùng Java, C, C++ | Chủ yếu dùng Swift, Objective-C, C/C++ |
| Google Chrome là trình duyệt mặc định | Safari là trình duyệt mặc định |
| Hiệu suất giảm theo thời gian | Hiệu suất bảo toàn theo thời gian |
| Mã nguồn mở, có thể chỉnh sửa tuỳ ý thay đổi hệ điều hành. Dẫn đến bảo mật kém | Mã nguồn đóng, các nhà phát triển không thể chỉnh sửa code trên thiết bị, giúp iOS bảo mật và khó hack hơn |

### 7. Deep linking trong iOS là gì?

Deep linking là các liên kết đưa người dùng trực tiếp đến một ứng dụng thay vì trang web hoặc cửa hàng bằng cách sử dụng URI (Uniform Resource Identifier) hoặc các universal links. URI là một phương pháp phổ biến để có deep linking, nhưng từ iOS 9, Apple đã thêm Universal Link thay cho URI. 

Deep linking không chỉ liên quan đến việc tạo liên kết có thể click để mở ứng dụng của bạn mà còn là liên kết thông minh điều hướng đến tài nguyên mà bạn mong muốn. Người dùng được dẫn thẳng đến các vị trí trong ứng dụng bằng cách sử dụng các liên kết này, điều này giúp họ tiết kiệm thời gian và nỗ lực tự tìm kiếm các trang đó, do đó cải thiện trải nghiệm người dùng của họ rất nhiều.

Ví dụ: Nếu bạn dùng URL: `fb://`, bạn sẽ mở ứng dụng Facebook. Nhưng nếu dùng `fb://profile/33138223345` bạn sẽ mở thông tin người dùng trên ứng dụng Facebook.

![](./assets/deep_linking_in_iOS.png)

### 8. Giải thích GCD trong iOS?

Grand Central Dispatch (GCD) là một API cấp thấp cho phép người dùng chạy đồng thời nhiều tác vụ được luồng quản lý trong nền. GCD là một giải pháp của Apple để thực hiện tính đồng thời (concurrency) và song song (parallelism) trong ứng dụng iOS, thế nên nhiều tác vụ có thể chạy trong nền mà không ảnh hưởng gì đến luồng chính. Nó được giới thiệu trong iOS4 để tránh tiến trình dài dòng của việc thực hiện nối tiếp các tác vụ.

### 9. ARC là gì?

Trong ngôn ngữ Swift, ARC (Automatic Reference Counting) được dùng cho quản lý bộ nhớ ứng dụng. Nó khởi tạo và xác định tài nguyên hệ thống, do đó giải phóng bộ nhớ dành cho một thực thể lớp khi nó không còn cần đến nữa. ARC theo dõi có bao nhiêu thuộc tính, hằng số và biến hiện đang tham chiếu đến mỗi thực thể lớp. Khi có ít nhất một tham chiếu hoạt động tới một thực thể, ARC sẽ giải phóng thực thể đó. Việc sử dụng các khái niệm ARC là một phần thiết yếu của quá trình phát triển iOS.

Chức năng ARC:
- ARC tạo một thực thể lớp mới bằng `init()` và cấp phát một phần của bộ nhớ cho lưu trữ thông tin.
- Bộ nhớ lưu trữ thông tin về kiểu và giá trị của nó.
- Khi thực thể lớp không còn cần nữa, ARC sẽ tự động giải phóng bộ nhớ bằng lệnh gọi `deinit()`.
- Bằng cách theo dõi tham chiếu đến thuộc tính, hằng, biến của lớp, ARC đảm bảo `deinit()` chỉ thực hiện trên các thực thể khôgn còn dùng nữa.

### 10. Sự khác biệt giữa Cocoa và Cocoa Touch?

Cocoa và Cocoa Touch là hai trong số các framework được sử dụng rộng rãi của Apple được sử dụng để xây dựng các ứng dụng. Tuy nhiên, chúng khác nhau theo những cách sau:

| Cocoa | Cocoa Touch |
|-|-|
| Framework cho xây dựng ứng dụng chạy trên Mac OS | Framework cho xây dựng ựng dụng chạy trên iPhone hay iPad |
| Framework như Foundation và AppKit được kết hợp vào Cocoa | Cocoa Touch là sự kết hợp của các framework như Foundation và UIKit được tích hợp vào Cocoa Touch |
| Các lớp Cocoa sử dụng tiền tố NS (được sử dụng cho tất cả các lớp và hằng số trong framework Cocoa), như NSTextField, NSWindow | Mặt khác, các lớp Cocoa Touch sử dụng tiền tố UI (được sử dụng cho tất cả các lớp và hằng số trong framework Cacoa Touch) (như UITextField và UIWindow) |

### 11. Các ngôn ngữ lập trình dùng cho phát triển iOS?

- HTML5
- .NET
- C
- C++
- Swift
- Javascript
- Objective-C

### 12. Framework được sử dụng để xây dựng giao diện ứng dụng cho iOS là gì?

Trái ngược với framework Foundation định nghĩa các lớp, giao thức và hàm để phát triển cả iOS và OS X. UIKit được thiết kế đặc biệt để phát triển giao diện iOS. Trong iOS, giao diện người dùng và cơ sở hạ tầng đồ họa của ứng dụng được phát triển bằng UIKit. Nó bao gồm:
- Xử lý sự kiện (xử lý các cử chỉ khác nhau như cử chỉ nhập liệu, cử chỉ nhấn nút, cử chỉ đa chạm, ...)
- Cấu trúc ứng dụng (Quản lý sự tương tác giữa hệ thống và người dùng)
- Giao diện người dùng (Cung cấp các tương tác của người dùng, khả năng chia sẻ văn bản và nội dung, chọn hình ảnh, chỉnh sửa video, in tệp,...)
- Đồ họa, vẽ và in ấn.

### 13. Các cách để thực hiện đồng thời trong iOS?

Concurrency có nghĩa là "chạy nhiều tác vụ đồng thời". Concurrency cho phép thiết bị iOS xử lý các tác vụ nền (chẳng hạn như tải xuống hoặc xử lý dữ liệu) trong khi vẫn duy trì giao diện người dùng. Trong iOS, bạn có thể quản lý các tác vụ đồng thời bằng cách sử dụng Grand Central Dispatch (GCD) và Operations (chính thức được gọi là NSOperation). Để thực hiện được sự đồng thời, iOS cung cấp ba cách như sau:
* **Dispatch queues:** Chúng được sử dụng để quản lý các tác vụ theo thứ tự vào trước ra trước (FIFO) và thực thi các tác vụ một cách tuần tự hoặc đồng thời. Đây là một cách dễ dàng để xử lý các tác vụ bất đồng bộ (không xảy ra cùng lúc) và đồng thời trong ứng dụng của bạn.
* **Thread:** Một chuỗi instructions độc lập có thể được thực thi riêng biệt với code khác trong một chương trình. Thông qua các luồng, người ta có thể thực thi nhiều đường dẫn code đồng thời trong một ứng dụng duy nhất. Có một luồng đặc biệt hữu ích khi bạn cần thực hiện một tác vụ dài mà không ảnh hưởng đến việc thực hiện phần còn lại của chương trình.
* **Operation Queues**: Các đối tượng operation queue được gọi theo mức độ ưu tiên và mức độ sẵn sàng của chúng. Về cơ bản, Operation queue là sự trừu tượng hóa cấp cao của mô hình hàng đợi, được xây dựng trên GCD (Grand Central Dispatch). Do đó, có thể thực thi các tác vụ đồng thời, giống như GCD, nhưng theo cách hướng đối tượng.

### 14. Sự khác biệt giữa App ID và Bundle ID?

- **Bundle ID**: Chúng là định danh duy nhất của các ứng dụng trong hệ sinh thái của Apple. Nói cách khác, không có hai ứng dụng nào có thể có cùng định danh. Bundle ID được sử dụng cho cả ứng dụng OS X và iOS, và có thể được sử dụng để nhận dạng các bản cập nhật ứng dụng.
    Ví dụ:
    Nếu tên miền của tổ chức của ta là scaler.com và ta tạo một ứng dụng có tên là Edge, bạn có thể chỉ định chuỗi `com.scaler.edge` làm Bundle ID của ứng dụng.
- **App ID**: Chuỗi này xác định duy nhất một hoặc nhiều ứng dụng từ cùng một nhóm phát triển. Có hai thành phần trong chuỗi, Team ID và Bundle ID, được phân tách bằng dấu chấm (.). Apple cung cấp Team ID để xác định một nhóm phát triển cụ thể, trong khi các nhà phát triển cung cấp Bundle ID để xác định một ứng dụng hoặc một bộ sưu tập ứng dụng.
    Ví dụ:
    **ABCDE12345.com.scaler.edge**
    Trong ví dụ trên, `ABCDE12345` là Team ID và `com.scaler.edge` là Bundle ID .

### 15. Framework SpriteKit và SceneKit trong phát triển game?

**SpriteKit**: Framework này được thiết kế để giúp các nhà phát triển trò chơi dễ dàng và nhanh chóng hơn trong việc tạo các nội dung/đối tượng hoạt hình 2D trong các trò chơi thông thường. Với nó, bạn có thể vẽ các hình dạng, hạt, văn bản, hình ảnh và video theo hai chiều.

**SceneKit**: Đây là một framework iOS kế thừa từ OS X, giúp tạo đồ họa 3D. Với SceneKit, bạn có thể tạo các cảnh và hiệu ứng hoạt hình 3D cho các trò chơi và ứng dụng iOS của mình.

### 16. Sự khác biệt giữa từ khoá assign và retain?

- **Assign**: một tham chiếu được tạo từ đối tượng này sang đối tượng khác mà không làm tăng số lượng lưu giữ của nguồn (theo dõi có bao nhiêu đối tượng đang "giữ" đối tượng khác). Nó không sao chép hoặc giữ lại giá trị mà chỉ định trực tiếp cho biến thực thể.

```swift
if (object != object) 
{  
    [object release];  
    object = nil;  
    object = object;  
}
```

Ở đây, Assign sẽ tạo ra một setter trực tiếp gán giá trị cho biến thực thể, thay vì sao chép hoặc giữ lại nó.

- **Retain:** Sử dụng phương pháp này, bạn tạo một tham chiếu từ đối tượng này sang đối tượng khác và tăng số lượng giữ lại của đối tượng nguồn.

```swift
if (object != object) 
{   
    [object release]; 
    object = nil;   
    object = [object retain];   
}
```

Thông điệp retain ngăn một đối tượng được phân bổ cho đến khi bạn sử dụng xong.


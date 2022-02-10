# Câu hỏi phỏng vấn Android

![](./assets/android.jpg)

## Android là gì?

Android là một hệ điều hành dựa trên nền tảng Linux được thiết kế dành cho các thiết bị di động có màn hình cảm ứng như điện thoại thông minh và máy tính bảng. Ban đầu, Android được phát triển bởi Android, Inc. với sự hỗ trợ tài chính từ Google và sau này được chính Google mua lại vào năm 2005.

Android có mã nguồn mở và Google phát hành mã nguồn theo Giấy phép Apache. Chính mã nguồn mở cùng với một giấy phép không có nhiều ràng buộc đã cho phép các nhà phát triển thiết bị, mạng di động và các lập trình viên nhiệt huyết được điều chỉnh và phân phối Android một cách tự do. Ngoài ra, Android còn có một cộng đồng lập trình viên đông đảo chuyên viết các ứng dụng để mở rộng chức năng của thiết bị, bằng một loại ngôn ngữ lập trình Java có sửa đổi. Tháng 10 năm 2012, có khoảng 700.000 ứng dụng trên Android, và số lượt tải ứng dụng từ Google Play, cửa hàng ứng dụng chính của Android, ước tính khoảng 25 tỷ lượt.

## Ưu điểm của Android

- Mã nguồn mở: việc phát triển và phân phối ứng dụng miễn phí.
- Nền tảng độc lập: nền tảng Android (Android Studio và Android SDK) là độc lập. Ứng dụng có thể phát triển trên bất kỳ hệ điều hành nào với Android Stduio và Android SDK.
- Hiệu suất máy ảo cao: Android sử dụng một máy ảo được tối ưu hóa cao, tức là DVM (Dalvik Virtual Machine) cho các thiết bị di động. Thay thế DVM, máy ảo ART (Android RunTime) được giới thiệu để thực thi các ứng dụng Android từ phiên bản Android lollipop 5.0 (API 21).
- Hỗ trợ nhiều công nghệ: nó hỗ trợ camera, giọng nói, bluetooth, wifi,...
- Hàng triệu ứng dụng khả dụng: Hàng triệu ứng dụng Android có sẵn mà bạn có thể cài đặt trên thiết bị từ cửa hàng Google Play cũng như từ các cửa hàng thay thế khác.

## Nhược điểm của Android
- Ứng dụng giả: Có hàng ngàn ứng dụng fake trên thị trường, để đánh cắp dữ liệu của bạn khi cài đặt.
- Tiến trình chạy nền:
    + Trong phiên bản Android cũ hơn, hầu hết các ứng dụng luôn chạy ở chế độ nền. Từ phiên bản Android 8.0, các ứng dụng chạy nền giờ đây bị giới hạn về mức độ tự do mà chúng có thể truy cập các dịch vụ nền.
    + Vì một số ứng dụng chạy nền, chúng tiêu thụ pin di động và pin thiết bị của bạn nhanh chóng.
- Kết nối dữ liệu kém: Android có một số lượng lớn các tiến trình chạy nền liên tục và điều này dẫn đến việc sử dụng quá nhiều dữ liệu và tốc độ internet kém. Đôi khi nó có thể rất khó chịu.
- Vấn đề tương thích: Có rất nhiều loại thiết bị Android có sẵn trên thị trường với kích thước và kích thước màn hình khác nhau, nhưng quan trọng hơn là hệ điều hành Android khác nhau. Một ứng dụng chạy trơn tru trên một phiên bản hệ điều hành Android có thể gặp sự cố trên một hệ điều hành Android khác.

## Câu hỏi phỏng vấn Android cho Fresher 

### 1. Android là gì?

Android là một hệ điều hành nguồn mở được sử dụng trên các thiết bị di động, như điện thoại di động và máy tính bảng. Ứng dụng Android thực thi trong tiến trình  của nó và của Dalvik Virtual Machine (DVM) hoặc Android RunTime (ART).

### 2. Kiến trúc của Android?

Kiến trúc của Android gồm các tầng khác nhau trong Android Stack. Nó bao gồm hệ điều hành, middleware và ứng dụng. Mỗi tầng trong kiến trúc Android cung cấp các dịch vụ khác nhau cho tầng ngay trên nó. 

5 tầng trong Android:

* **Linux Kernel** - Nó chịu trách nhiệm về trình điều khiển thiết bị, quản lý thiết bị, quản lý bộ nhớ, quản lý nguồn và truy cập tài nguyên.
* **Libraries** - là tập hợp các bộ thư viện mã nguồn mở như WebKit, thư viện libc, thư viện cho mở phát nhạc hay video, cơ sở dữ liệu SQLite cho chia sẻ dữ liệu và bộ nhớ ứng dụng, thư viện SSL cho bảo mật internet.
* **Android Runtime** - đây là thư viện lõi cùng với DVM (Dalvik Virtual Machine) hoặc ART(Android RunTime) giúp chạy ứng dụng Android. DVM được tối ưu hoá cho các thiết bị di đông, nó cung cấp hiệu suất nhanh và tiêu tốn ít bộ nhớ hơn. Thay thế DVM, ARM được giới thiệu để thực thi các ứng dụng Android từ phiên bản Android lollipop 5.0 (API 21). 
* **Android Framework** - nó bao gồm Android APIs như  UI (User Interface), nguồn tài nguyên, tài nguyên, nhà cung cấp nội dung (dữ liệu), vị trí, điện thoại và trình quản lý package. Nó cung cấp các giao diện và lớp để phát triển các ứng dụng Android. 
* **Android Applications** - Các ứng dụng như trang chủ, trò chơi, danh bạ, cài đặt, trình duyệt, v.v. sử dụng Android Framework, để sử dụng Android runtime và libraries.

![](./assets/Android_Architecture.png)

### 3. Các ngôn ngữ sử dụng cho Android?

Các ngôn ngữ lập trình phổ biến dùng cho phát triển ứng dụng Android là:
1. **Java**: Được phát hành năm 1995 bởi Sun Microsystems, Java là ngôn ngữ then chốt của Android. Bộ công cụ phát triển phần mềm Android SDK (Software Development Kit) sử dụng Java như ngôn ngữ nền tảng cho các ứng dụng Android. Khá là dễ dàng để sử dụng Java, đặc biệt là trong Android Studio IDE dùng phát triển các ứng dụng dành cho Android.
2. **Koltin**: Kotlin được phát triển để giải quyết một vài vấn đề tồn tại trong Java. Theo đa số những người ủng hộ việc sử dụng Kotlin, thì syntax của nó đơn giản và gọn hơn, vì thế rất ít xảy ra việc dòng code rườm rà, dài dòng. Điều này có tác dụng giúp cho người viết tập trung trong việc giải quyết các vấn đề hơn là cố để xoay sở với những câu lệnh dài dòng phức tạp. Bên cạnh đó, bạn còn có thể kết hợp Kotlin và Java cùng nhau ở trong cùng một dự án, khai thác hết thế mạnh của cả 2 ngôn ngữ.
3. **C#:** C# là ngôn ngữ lập trình rất nổi tiếng của Microsoft. Với sự hỗ trợ của framework Xamarin, bạn có thể xây dựng ứng dụng Android bằng C#. Xamarin là một framework đa nền tảng, cho phép bạn phát phiển ứng dụng iOS, Android, Windows.
4. **C++:** C++ là ngôn ngữ lập trình mạnh trong việc xây dựng các ứng dụng di động dành riêng cho android và cho windows. đây là ngôn ngữ dành cho lập trình cấp thấp và cũng là ngôn ngữ được các nhà phát triển ứng dụng trên thiết bị di động.
5. **Python**: Python dù không được hệ điều hành Android hỗ trợ những vẫn được sử dụng trong việc tạo ra các apps trên python rồi chuyển thành apk để chạy trên thiết bị android.

Bên cạnh đó bạn cũng có thể dùng các framework như Flutter (ngôn ngữ Dart) hay React Native (ngôn ngữ JavaScript) để lập trình với Android.

### 4. Một activity là gì?

Activity trong Android là một màn hình đơn để biểu diễn GUI (Graphical User Interface) cho người dùng có thể tương tác và thực hiện một số hành động.

Ví dụ: trang bắt đầu của Facebook là nơi để nhập email/số điện thoại và mật khẩu để đăng nhập, nó là một activity.

### 5. Service trong Android là gì?

Service là một thành phần ứng dụng chạy ở chế độ nền có thể thực hiện các hoạt động lâu dài, nó không cung cấp một giao diện người dùng. Một service có thể chạy liên tục trong nền ngay cả khi ứng dụng bị đóng hay người dùng chuyển sang ứng dụng khác.

### 6. Phân biệt Activity và Service?

Activity có thể bị dừng hoặc kết thúc bất cứ khi nào bởi người dùng. Ngược lại, service được thiết kế để chạy ngầm, nên chúng có thể hoạt động độc lập.

Phần lớn các service chạy liên tục không quan tâm có hay không có activity nào đang thực hiện không.

| Activity | Service |
|-|-|
| Được thiết kế để chạy ở trền nền | Được thiết kế để chạy nền, nhưng cũng có thể chạy ở trên nền | 
| Cần sử dụng giao diện người dùng | Không nhất thiết phải dùng giao diện người dùng |
| Phụ thuộc | Độc lập |

### 7. Google Android SDK là gì?

Google Android SDK là một bộ công cụ được các nhà phát triển sử dụng để viết ứng dụng trên các thiết bị hỗ trợ Android. Các công cụ trong Android SDK bao gồm:

- Android Emulator - Trình giả lập Android là ứng dụng phần mềm mô phỏng thiết bị Android trên máy tính để bạn có thể kiểm tra ứng dụng trên nhiều loại thiết bị và các cấp Android API mà không cần từng thiết bị vật lý.
- DDMS (Dalvik Debug Monitoring Services) - Đây là một công cụ debug từ bộ phát triển phần mềm Android (SDK), cung cấp các dịch vụ như tạo thông báo, giả mạo cuộc gọi, chụp ảnh màn hình, v.v.
- ADB (Android Debug Bridge) - Đây là một công cụ dòng lệnh được sử dụng để cho phép và kiểm soát giao tiếp với phiên bản giả lập.
- AAPT (Android Asset Packaging Tool) - Đây là một công cụ xây dựng cung cấp cho các nhà phát triển khả năng xem, tạo và cập nhật các kho lưu trữ tương thích với ZIP (zip, jar và apk).

### 8. Cách dùng bundle trong Android?

Các bundle được sử dụng để chuyển dữ liệu cần thiết giữa các activity khác nhau của Android. Chúng giống như HashMap có thể nhận các kiểu dữ liệu thông thường. Đoạn code dưới đây hiển thị cách chuyển một phần dữ liệu bằng cách sử dụng bundle:

```java
Bundle b=new Bundle();
b.putString("Email","abc@xyz.com");
i.putExtras(b); // where i is intent
```

### 9. Adapter trong Android là gì?

Một adapter trong Android giống như một cây cầu giữa AdapterView và dữ liệu cơ bản cho view. Adapter giữ dữ liệu và gửi nó cho AdapterView, view có thể lấy dữ liệu từ AdapterView và hiển thị dữ liệu cho các view khác như SpinnerView, ListView, GridView,...

![](./assets/adapter.png)

### 10. AAPT là gì?

AAPT là viết tắt của Android Asset Packaging Tool. Đây là một công cụ xây dựng cung cấp cho các nhà phát triển khả năng xem, tạo và cập nhật các kho lưu trữ tương thích với ZIP (zip, jar và apk). Nó phân tích cú pháp, lập chỉ mục và biên dịch các tài nguyên thành định dạng nhị phân được tối ưu hóa cho nền tảng Android.

### 11. Điểm phát sóng Wi-Fi di động là gì?

Điểm truy cập Wi-Fi di động cho phép bạn chia sẻ kết nối Internet di động của mình với các thiết bị không dây khác. Ví dụ: sử dụng điện thoại Android làm điểm phát sóng Wi-Fi, bạn có thể sử dụng máy tính xách tay của mình để kết nối internet bằng điểm truy cập đó.

### 12. ADB là gì?

ADB (Android Debug Bridge) là một công cụ dòng lệnh được sử dụng để cho phép và kiểm soát giao tiếp với một phiên bản giả lập. Nó cung cấp tính năng cho các nhà phát triển thực thi các lệnh shell từ xa để chạy các ứng dụng trên trình giả lập.

### 13. DDMS là gì?

DDMS (Dalvik Debug Monitor Server) là công cụ gỡ lỗi trên nền tảng Android. Nó cung cấp các tính năng như:
- Chụp ảnh màn hình
- Theo dõi lưu lượng mạng
- Cuộc gọi giả mạo SMS
- Giả mạo dữ liệu vị trí
- Logcat
- Thông tin thread và heap

### 14. AIDL là gì?

AIDL - Android Interface Definition Language 78p[[[[[[[ơ+;là một cách cho phép bạn có thể định nghĩa một cách mà cả client và server (1 ứng dụng đóng vai trò là server cho các ứng dụng khác đóng vai trò là client có thể truy cập tới) có thể giao tiếng với nhau thông qua Interprocess communication (IPC). Thông thường, trong Android một process (tiến trình) không thể trực tiếp truy cập vào bộ nhớ của một tiến trình khác. Vì vậy để có thể các tiến trình có thể giao tiếp với nhau, chúng cần phân tách các đối tượng thành dạng nguyên thủy (primitive) mà hệ thống có thể hiểu được.

Các kiểu dữ liệu được hỗ trợ trong AIDL là:

- String
- List
- Map
- CharSequence
- Kiểu dữ liệu Java (int, long, char, and boolean)


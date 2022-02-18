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

### 15. Vòng đời của Android Activity?

- `onCreate()`: được gọi khi activity được tạo. Nó được dùng để tạo view và dữ liệu từ bundles.
- `onStart()`: được gọi khi activity được hiển thị với người dùng. Nó có thể thành công bằng `onResume()` nếu activity xuất hiện trên nền hoặc `onStop()` bị ẩn.
- `onResume()`: nó được gọi khi activity được chạy để tương tác với người dùng.
- `onPause()`: nó được gọi khi activity được chạy trong nền nhưng chưa dừng hoàn toàn.
- `onStop()`: được gọi khi activity không còn hiển thị với người dùng.
- `onDestroy()`: được gọi khi một activity bị huỷ hay kết thúc.
- `onRestart()`: được gọi khi một activity đã dừng, nhằm mục đích khởi động lại nó.

![](./assets/Life_Cycle_of_Android.png)

### 16. Cảm biến trong Android?

Các thiết bị sử dụng hệ điều hành Android có một bộ sưu tập các cảm biến tích hợp bên trong, chúng đo các thông số nhất định như chuyển động, định hướng và nhiều thông số khác thông qua độ chính xác cao của chúng. Các cảm biến có thể là cả phần cứng và phần mềm dựa trên tự nhiên. Có ba loại cảm biến nổi bật trong các thiết bị Android. Chúng là:
- Cảm biến vị trí: Nó được sử dụng để đo vị trí thực của thiết bị Android. Bao gồm cảm biến định hướng và từ kế.
- Cảm biến chuyển động: Các cảm biến này bao gồm trọng lực, hoạt động quay và cảm biến gia tốc đo chuyển động quay của thiết bị hoặc gia tốc, v.v.
- Cảm biến môi trường: Nó bao gồm các cảm biến đo nhiệt độ, độ ẩm, áp suất và các yếu tố môi trường khác.

### 17. Các loại dialog trong Android?

Android hỗ trợ 4 loại dialog:
- AlertDialog:
    - Hỗ trợ từ 0-3 button, cùng với danh sách các mục chọn như checkbox hay radio button.
    - Nó được sử dụng khi bạn muốn hỏi người dùng về việc đưa ra quyết định có hoặc không để phản hồi lại bất kỳ hành động cụ thể nào do người dùng thực hiện, bằng cách tiếp tục hoạt động tương tự và không thay đổi màn hình.
- DatePickerDialog:
    - Dùng cho chọn ngày tháng 
- TimePickerDialog:
    - Dùng chọn chọn thời gian
- ProgressDialog:
    - Là mở rộng của AlertDialog với thanh hiển thị quá trình. Nó còn hỗ trợ các button bổ sung.
    - Lớp này không được dùng nữa trong API level 26 vì nó ngăn người dùng tương tác với ứng dụng. Thay vào đó, chúng ta có thể sử dụng ProgressBar, có thể được nhúng vào giao diện người dùng trong ứng dụng của bạn.

### 18. File AndroidManifest.xml là gì?

File AndroidManifest.xml bao gồm thông tin về ứng dụng mà hệ điều hành Android phải biết trước khi thực thi code.

File này rất cần thiết trong mọi ứng dụng Android. Nó được khai báo trong thư mục root. File này thực hiện một số tác vụ như:
- Cung cấp tên duy nhất cho package java.
- Mô tả các thành phần khác nhau của ứng dụng như activity, service,...
- Xác định các lớp sẽ triển khai các thành phần này.

### 19. Intent là gì?

Intent là một đối tượng thông báo dùng cho yêu cầu một hành động từ một thành phần khác của ứng dụng. Nó có thể được dùng cho các hành động như gửi SMS, gửi email, hiển thị web page.

Nó hiển thị thông báo tin nhắn cho người dùng khi các thiết bị Android cho phép. Nó cảnh báo người dùng khi một trạng thái cụ thể xảy ra. Có hai loại intent trong Android.
- Implicit Intent - dùng cho gọi các thành phần hệ thống.
- Explicit Intent - dùng cho gọi các lớp activity.

![](./assets/Types_Of_Intents.jpg)

### 20. Sự khác biệt giữa lớp, file và activity trong Android?

- Class là một hình thức biên dịch của file `.java` để Android sử dụng tạo ra các file `.apk`.
- File là một khối thông tin hoặc tài nguyên dùng cho lưu trữ thông tin.
- Activity là một màn hình đơn biểu diễn GUI để người dùng có thể giao tiếp theo để thực hiện điều gì đó như gọi điện, xem mail,...

### 21. Toast là gì?

Toast là một thông báo hiện trên màn hình. Nó được sử dụng để hiển thị thông báo về trạng thái của hoạt động do người dùng bắt đầu và chỉ bao gồm khoảng không gian cần thiết cho thông báo trong khi activity hiện tại của người dùng vẫn hiển thị và tương tác.

Toast tự động hiện và mờ dần, và nó không thể giao tiếp. Cú pháp:

```java
Toast.makeText(ProjectActivity.this, "Your message here", Toast.LENGTH_LONG).show();
```

### 22. Context là gì?

Context là một interface chứa thông tin toàn cục về môi trường ứng dụng. Đây là một lớp trừu tượng được triển khai bởi hệ thống Android. Nó cho phép truy cập đến các tài nguyên và các lớp ứng dụng cụ thể, cũng như gọi đến các tác vụ trên mức ứng dụng như khởi chạy các activity, gửi và nhận intents, v.v..

![](./assets/Types_Of_Context.png)

**Activity Context** là mọi màn hình đều có một activity. Nó gắn liền với vòng đời của activity. Được dùng cho context hiện tại. Phương thức gọi Activity Context là `getContext()`.

Một số trường hợp dùng Activity Context:
- Người dùng đang tạo một đối tượng có vòng đời được gắn với một activity.
- Bất cứ khi nào bên trong một activity cho UI liên quan đến các hoạt động như toast, dialog,...

**Application Context** gắn liền với vòng đời của ứng dụng. Về cơ bản, nó là một thực thể singleton và có thể được truy cập thông qua `getApplicationContext()`. Một số trường hợp sử dụng của Application Context là:
- Khi tạo một đối tượng singleton
- Dùng với các thư viện cần thiết trong một activity.

### 23. Sự khác biệt giữa Implicit và Explicit Intent?

**Explicit Intent:** là nơi bạn thông báo cho hệ thống về activity nào sẽ xử lý intent này. Ở đây thành phần đích được xác định trực tiếp trong intent. 

Ví dụ:

```java
Intent i = new Intent(this, Activitytwo.class); #ActivityTwo is the target component
i.putExtra("Value1","This is ActivityTwo"); 
i.putExtra("Value2","This Value two for ActivityTwo"); 
startactivity(i);
```

**Implicit Intent:** cho phép bạn khai báo hành động muốn thực hiện. Hệ thống Android sẽ kiểm tra thành phần nào được đăng ký để xử lý hành động cụ thể đó dựa trên dữ liệu intent. Ở đây thành phần mục tiêu không được xác định trong intent.

Ví dụ:

```java
Intent i = new Intent(ACTION_VIEW,Uri.parse("http://www.interview bit.com")); 
startActivity(i);
```

### 24. ANR trong Android là gì?

ANR (Application is Not Responding) là một dialog xuất hiện khi ứng dụng không phản hồi. Dialog này xuất hiện bất cứ khi nào luồng chính trong ứng dụng không phản hồi suốt một khoảng thời gian dài với các điều khiện sau:
- Không có phản hồi nào với sự kiện input sau 5s.
- Một broadcase receiver không hoàn thành thực thi trong 10s.

Các cách để tránh ANR:

- Một ứng dụng phải thực hiện cơ sở dữ liệu hoặc các hoạt động mạng trong các luồng riêng biệt để tránh ANR.
- Đối với các ứng dụng chuyên sâu về tác vụ nền, bạn có thể giảm bớt áp lực từ luồng UI bằng cách sử dụng `IntentService`.

### 25. Các vấn đề kỹ thuật cần làm khi ứng dụng thường xuyên gặp sự cố?

**Kiểm tra khả năng tương thích:**

Không thể kiểm tra một ứng dụng cho tất cả các loại thiết bị và hệ điều hành. Có thể có một ứng dụng không tương thích với hệ điều hành của bạn.

**Quản lý bộ nhớ:**

- Một số ứng dụng chạy hoàn hảo trên một thiết bị di động nhưng có thể gặp sự cố trên các thiết bị khác. Đây là lúc xem xét khả năng xử lý, quản lý bộ nhớ và tốc độ CPU.
- Vì dung lượng bộ nhớ trên thiết bị di động có hạn, bạn có thể giải phóng dung lượng bộ nhớ để ứng dụng hoạt động bình thường.
- Nếu một ứng dụng thường xuyên gặp sự cố, bạn có thể xóa dữ liệu của ứng dụng, điều này sẽ xóa bộ nhớ đệm của ứng dụng đó và cho phép một số dung lượng trống trên thiết bị của bạn và có thể tăng hiệu suất của ứng dụng.

### 26. Giải thích các chế độ khởi chạy khác nhau trong Android?

**Standard (dạng chuẩn)**

- Chế độ khởi chạy này tạo thực thể mới của một activity trong tác vụ mà nó bắt nguồn.
- Có thể tạo nhiều thực thể cho cùng một activity.
Ví dụ: giả sử ngăn xếp hiện tại của chúng ta là A -> B -> C. Bây giờ, nếu chúng ta khởi chạy lại activity B với chế độ khởi chạy "standard", thì ngăn xếp mới sẽ là A -> B -> C -> B

**SingleTop:**

- Chế độ này tương tự như Standard ngoại trừ việc nếu tồn tại thực thển trước của activity trên đầu ngăn xếp, thì thực thể mới sẽ không được tạo.
- Nhưng intent sẽ được gửi đến thực thể hiện có của activity.
Ví dụ: giả sử ngăn xếp hiện tại của chúng ta là A -> B -> C. Bây giờ, nếu chúng ta khởi chạy lại activity B với chế độ khởi chạy "singleTop", thì ngăn xếp mới sẽ là A -> B -> C -> B.
- Hãy xem xét một ví dụ khác, trong đó ngăn xếp hiện tại là A -> B -> C. Bây giờ, nếu chúng ta khởi chạy lại activity C với chế độ khởi chạy "singleTop", thì ngăn xếp sẽ vẫn như cũ, tức là A -> B -> C. Intent sẽ được chuyển đến phương thức `onNewIntent()`

**SingleTask:**

- Chế độ khởi chạy này sẽ tạo một tác vụ mới và đẩy một thực thể mới cho tác vụ gốc.
- Ví dụ: giả sử ngăn xếp hiện tại của chúng ta là A -> B -> C -> D. Bây giờ, nếu chúng ta khởi chạy lại activity B với chế độ khởi chạy "singleTask", thì ngăn xếp mới sẽ là A -> B. Đây, một lệnh gọi lại đã được nhận trên thực thể cũ và các activity C và D bị phá hủy.

**SingleInstance:**

- Chế độ  này tương tự như SingleTask. Nhưng hệ thống không hỗ trợ khởi chạy bất kỳ activity mới nào trong cùng một tác vụ.
- Trong tình huống mà activity mới được khởi chạy, nó sẽ được khởi chạy trong một tác riêng biệt.
- Ví dụ: Giả sử ngăn xếp hiện tại của chúng ta là A -> B -> C. Bây giờ, nếu chúng ta khởi chạy activity D với chế độ khởi chạy "singleInstance", thì sẽ có hai ngăn xếp:
    - A -> B -> C
    - D, 
- Nếu bạn gọi activity E, thì nó sẽ được thêm vào ngăn xếp đầu tiên.
    - A -> B -> C -> E
    - D
Một lần nữa nếu bạn gọi activity là D, thì nó sẽ gọi cùng activity từ ngăn xếp thứ 2 và chuyển intent cho `onNewIntent()`.

### 27. Container trong Android?

Các container chứa các đối tượng và widget với nhau, dựa trên những đối tượng cụ thể nào được yêu cầu và cách sắp xếp cụ thể nào là cần thiết. Container có thể chứa label, button, input hoặc thậm chí container con,... Ví dụ: nếu bạn muốn form có các trường ở bên trái và label ở bên phải, bạn sẽ cần một container. Nếu bạn muốn các button OK và Cancel nằm bên dưới phần còn lại của form, bên cạnh nhau và nằm ở phía bên phải của màn hình, bạn sẽ cần một container. Nếu bạn có nhiều widget, bạn sẽ cần một container có phần tử gốc để đặt các widget bên trong.

Android cung cấp một bộ tập hợp các lớp view đóng vai trò là container cho các view. Các lớp container này được gọi là layout, được định nghĩa dưới dạng file XML mà code của chúng ta không thể thay đổi trong quá trình thực thi. Các trình quản lý layout do Android SDK cung cấp là `LinearLayout`, `RelativeLayout`, `FrameLayout`, `AbsoluteLayout`, `GridLayout` và `TableLayout`.

### 28. Vai trò của Dalvik trong phát triển Android?

Dalvik hoạt động như một máy ảo và nó chịu trách nhiệm chạy mọi ứng dụng Android. Nhờ Dalvik, một thiết bị sẽ có khả năng thực thi nhiều phiên bản của máy ảo một cách hiệu quả thông qua việc quản lý bộ nhớ tốt hơn.

### 29. Lịch sử các phiên bản Android?

**Android 1.0**

Hệ quản lý Android thời hạn đầu ra mắt mang những đặc thù, tính năng mê hoặc phải kể đến như :

- Thanh thông tin kéo từ trên xuống được cho phép người dùng xem nhanh những thông tin ngày giờ, tin nhắn, cuộc gọi … ,
- Màn hình chính và Widget : màn hình hiển thị chính gồm những hình tượng chương trình người dùng hay truy vấn và những Widget là những ứng dụng nhỏ trên màn hình hiển thị chính, hoạt động giải trí và phân phối thông tin liên tục .
- Tích hợp chặt chẽ với Gmail

**Android 1.1** 

Hệ điều hành Android qua các phiên bản cập nhậtPhiên bản update tiên phong của hệ quản lý Android giúp tinh chỉnh và điều khiển và sửa những lỗi gặp phải trên phiên bản 1.0. Tính năng update ứng dụng từ động qua OTA ( Over The Air ) được bổ trợ và được xem như thể một nâng cấp cải tiến đáng giá vì những hệ quản lý và điều hành di động trước đó đều phải nhờ tới một chiếc máy tính để thực thi việc này .

**Android 1.5 Cupcake**

Android 1.5 có lẽ rằng có vai trò cực kỳ quan trọng trong quy trình trưởng thành của Android khi nó bổ trợ cho hệ quản lý này những tính năng điển hình nổi bật giúp nó cạnh tranh đối đầu với những nền tảng đối thủ cạnh tranh khác. Đây cũng là bản Android tiên phong được Google gọi tên theo những món món ăn với vần âm khởi đầu được xếp theo thứ tự alphabet.Về mặt giao diện, Android 1.5 không có nhiều điểm biến hóa so với người nhiệm kỳ trước đó của mình. Google chỉ điểm thêm vài điểm để làm giao diện trông bóng bẩy, mượt mà hơn một tí, ví dụ điển hình như widget tìm kiếm có độ trong suốt nhẹ, hình tượng app drawer có 1 số ít hoa văn nhỏ mới, v.v. Nói chung, giao diện không phải là một điểm nhấn của Android 1.5 mà người ta chăm sóc nhiều hơn đến những tính năng mới mà nó mang lại .

**Android 1.6 Donut**

Phiên bản bánh Donut này, mặc dầu chỉ thêm có 0.1 vào mã số của Android 1.5 nhưng nó cũng mang lại nhiều nâng cấp cải tiến đáng giá. Một vài điểm trong giao diện được cải tổ, vài tính năng nhỏ được thêm vào, ở đầu cuối là tương hỗ cho mạng CDMA .Bổ sung tính năng hoàn toàn có thể chạy trên nhiều độ phân giải và tỉ lệ màn hình hiển thị khác nhau, được cho phép những thiết bị có nhiều độ phân giải hơn là 320 x 480. Hiện nay, tất cả chúng ta có những chiếc smartphone Android chạy ở độ phân giải QVGA, HVGA, WVGA, FWVGA, qHD, và 720 p. Vài chiếc máy tính bảng còn đạt mức 1920 x 1080 nữa .

**Android 2.0 và 2.1 Eclair**

Đầu tháng 9 năm 2009, Android 2.0 đã được ra đời trên chiếc Motorola Droid cùng những tính năng mới :Hỗ trợ nhiều thông tin tài khoản người dùng : lần tiên phong, nhiều thông tin tài khoản Google hoàn toàn có thể được đăng nhập trên cùng một thiết bị chạy Android. Tài khoản Microsoft Exchange cũng được tương hỗ trong Eclair. Người dùng hoàn toàn có thể duyệt qua danh bạ, email của từng thông tin tài khoản. Google giờ đây được cho phép những nhà tăng trưởng bên thứ ba tích hợp dịch vụ của họ vào trong mục Account này, đồng thời tương hỗ tự động hóa đồng điệu hóa .Hệ điều hành AndroidQuick Contact : khi chạm vào 1 số ít liên lạc nào đó, có một menu nhỏ sẽ Open để bạn tương tác theo nhiều cách : gửi email, gọi điện, gửi tin nhắn và hơn thế nữa. Miễn là nơi nào có hình tượng contact Open là nơi đó hoàn toàn có thể dùng Quick Contact. Sau này có thêm Twitter, Facebook và nhiều dịch vụ đồng nhất khác cũng tích hợp tính năng riêng của mình vào Quick Contact .

**Android 2.1**

Ra mắt hầu hết để sửa lỗi và thêm hàm API để lập trình viên can thiệp sâu hơn vào mạng lưới hệ thống nhưng nó đã tương hỗ thêm vài tính năng lý thú như Live Wallpaper, chuyển giọng nói thành văn bản và một màn hình hiển thị khóa mới. Android 2.1 được lưu lại bởi sự sinh ra của chiếc Nexus One do HTC sản xuất, chiếc điện thoại thông minh Nexus tiên phong chạy Android chuẩn của Google .

**Android 2.2 Froyo**

Android 2.2 được ra đời trong năm 2010. Nexus One là chiếc điện thoại cảm ứng tiên phong được tăng cấp lên Android 2.2, sớm hơn nhiều so với tổng thể những hãng khác. Giao diện màn hình hiển thị chính đã được đổi khác, từ 3 màn hình hiển thị chính tăng lên thành 5 màn hình hiển thị. Google đã có nhiều nỗ lực để giao diện Android được vui và đẹp hơn, dễ dùng hơn, bắt kịp phần nào với giao diện của bên thứ ba như HTC Sense ví dụ điển hình .Froyo còn có một trình xem ảnh mới với năng lực hiển thị hình ảnh 3D : nghiêng máy thì dãy ảnh sẽ nghiên theo, đồng thời nó mang trong mình nhiều hiệu ứng hoạt động thích mắt khác. Tính năng trạm phát Wifi ( Wifi Hotspot ) cũng Open, cách copy, paste mới tốt hơn. Nhiều tính năng bảo mật thông tin mới cũng Open .

**Android 2.3 Gingerbread**

Khoảng nửa năm sau khi FroYo Open, Google đã trở lại với bản Android 2.3. Google ra mắt nó với nhiều tính năng mới, tập trung chuyên sâu vào việc tăng trưởng game, đa phương tiện và phương pháp tiếp thị quảng cáo mới. Bên cạnh đó, chiếc Nexus S do Samsung sản xuất cũng Open với vai trò là người tiếp sau cho Nexus One. Nexus S có vài biến hóa nhỏ so với người bạn bè Galaxy S .

**Android 3.x HonyComb**

Honeycomb là phiên bản Android dành riêng cho máy tính bảng, và loại sản phẩm tiên phong dùng hệ điều hành quản lý này Motorola Xoom. Mặc dù Android 3.0 không có nhiều dấu ấn đặc biệt quan trọng trên thị trường nhưng nó là nền tảng cho Android 4.0 với những tính năng như. Ngoài ra, Honeycomb còn tương hỗ cho việc bố cục tổng quan ứng dụng theo nhiều cột để hướng đến việc tương hỗ máy tính bảng tốt hơn .

**Android 4.0 Ice Cream Sandwich**

Cuối năm 2011, Google chính thức ra mắt điện thoại cảm ứng Galaxy Nexus, thiết bị tiên phong trên thị trường sử dụng Android 4.0 Ice Cream Sandwich. Có thể nói Android 4.0 là sự đổi khác lớn nhất trong lịch sử dân tộc tăng trưởng của Android tính đến ngày viết bài này. Android 4.0 tương hỗ một bộ font mới tên là Roboto được cho là tối ưu hóa để dùng trên những màn hình hiển thị độ phân giải ngày càng cao hơn, đồng thời để hiển thị được nhiều thông tin hơn trên màn hình hiển thị .Hệ thống thông tin ( Notification ) già nua của Android đã được làm mới trọn vẹn, đẹp hơn, tiện lợi hơn, nhất là tính năng trượt ngang để xóa từng thông tin riêng không liên quan gì đến nhau. Tương tự như vậy cho tính năng Recent Apps và cả trình duyệt của máy. Bàn phím cũng được làm mới với năng lực tự động hóa sửa lỗi cao hơn, việc sao chép, cắt dán chữ và nội dung cũng tốt hơn khi nào hết .Đây cũng là lần tiên phong Google hợp nhất hệ quản lý dành cho smartphone và cho máy tính bảng vào làm một .

**Android 4.1 Jelly Bean**

Đánh dấu sự ra đời với chiếc máy tính bảng Nexus 7 do Asus sản xuất.

Về giao diện, không có nhiều biến hóa so với Android 4.0, vẫn là màn hình hiển thị chính với thanh dock bên dưới quen thuộc. Sự Open của Google Now cho thấy rằng Google đã mở màn bước chân vào việc cạnh tranh đối đầu với Siri .Trên Android 4.1 bạn hoàn toàn có thể tìm kiếm bằng giọng nói và những tác dụng trả không chỉ đơn thuần là những dòng tìm kiếm nữa mà nó được phong cách thiết kế theo dạng thẻ đồ họa, mưu trí hơn, trực quan hơn. Không chỉ tìm kiếm theo nhu yếu. Nhưng có lẽ rằng quan trọng hơn hết của Jelly Bean không phải là về giao diện hay ứng dụng mới mà về Project Butter giúp mang lại độ mượt chưa từng có cho Android .

**Android 4.2 Jelly Bean**

Ngày 30/10/2012, Google chính thức công bố update hệ quản lý và điều hành Android của hãng lên phiên bản 4.2 và vẫn giữ nguyên tên gọi " Jelly Bean " ( có nghĩa là kẹo dẻo đậu ). Được hãng gọi là " một mùi vị mới của Jelly Bean ", Android 4.2 mang trong mình nhiều tính năng mới như tương hỗ Miracast, bàn phím hoàn toàn có thể nhập liệu bằng cách vẽ những đường nét từ kí tự này đến kí tự khác, chính sách chụp ảnh toàn cảnh Photo Sphere, ứng dụng Gmail mới và còn rất nhiều thứ khác nữa .Một nâng cấp cải tiến lớn và quan trọng của Android 4.2 đó là việc tương hỗ nhiều thông tin tài khoản người dùng trên máy tính bảng để hoàn toàn có thể thuận tiện san sẻ trong mái ấm gia đình hoặc nơi thao tác. Mỗi thông tin tài khoản sẽ có tài liệu app của riêng họ. Ví dụ, người dùng A cài game Angry Birds, người này chơi và đã ghi được một số ít điểm cũng như lên được màn cao hơn. Khi người B sử dụng máy bằng thông tin tài khoản khác, game này vẫn hiện hữu trên máy nhưng dưới dạng một bản cài mới, không có sẵn data của người A .

**Android 4.3 Jelly Bean**

Lại thêm một thế hệ Jelly Bean nữa và lần này là Android 4.3. Ngày 24/7/2013, Google đã chính thức ra đời hệ quản lý và điều hành này song song với chiếc Nexus 7 ( 2013 ). Đây là phiên bản Android mới nhất đang xuất hiện trên thị trường và đi kèm những tính năng mới như tương hỗ liên kết Bluetooth Smart, bộ API OpenGL ES 3.0, bổ trợ tính năng sử dụng Wi-Fi để xác định ngay cả khi người dùng tắt liên kết này đi cùng nhiều đổi khác lớn nhỏ khác .Bên cạnh tính năng Multi User của Android 4.2 như đã nói ở trên, Google bổ trợ thêm một tính năng mới cho Android 4.3 đó là Restricted Profile. Mỗi thành viên sẽ có một " hồ sơ " riêng của mình và chỉ hoàn toàn có thể làm được những gì được chỉ định trong " hồ sơ ". Ví dụ, cha mẹ hoàn toàn có thể khóa tính năng in-app purchase của một ứng dụng nào đó để ngăn con trẻ vô tình mua hàng trăm USD. Ngoài ra, khi vận dụng vào môi trường tự nhiên doanh nghiệp thì nó sẽ được cho phép người quản trị phân quyền cho nhân viên cấp dưới thuận tiện hơn .

**Android 4.4 Kitkat**

Thế hệ sau đó của Android là Android 4.4 và không còn mang tên Jelly Bean nữa mà gọi là KitKat. Nếu như bạn chưa biết thì KitKat là một loại bánh xốp bọc chocolate của hãng Nestle. Cách đặt tên này cũng trọn vẹn khớp với trình tự vần âm mà những phiên bản Android sử dụng làm tên mã .Google bật mý thêm rằng " tiềm năng của chúng tôi với Android KitKat đó là mang thưởng thức Android đáng kinh ngạc đến cho mọi người ". Android Kitkat Open tiên phong trên chiếc smartphone Nexus 5. Những nâng cấp cải tiến trên Android Kitkat gồm có Chế độ toàn màn hình hiển thị – Immersive Mode, Hiệu ứng chuyển cảnh màn hình hiển thị – Transition Manager, Storage Access Framework, Chromium WebView, NFC, Cổng hồng ngoại – Infrared Blasters …Giao diện : Tông màu chủ yếu của font chữ là xanh và đen được sử dụng trên Android Jelly Bean được Google biến hóa bằng tông màu đen và ghi trên Android 4.4 Kitkat vừa ra đời, biểu lộ rõ ở những dòng chữ trên thanh thông tin Notification. Bên cạnh đó, Android Kitkat cũng có bộ hình tượng, thư mục mới, giao diện nhìn chung được làm phẳng bớt, vô hiệu những chi tiết cụ thể đổ bóng và thêm hiệu ứng trong suốt vào nhiều phần, như ba phim ảo bên dưới hay thanh thông tin ở phía trên .Hệ điều hành AndroidDù là phiên bản mới, Android 4.4 Kitkat lại không yên cầu thông số kỹ thuật phần cứng mạnh hơn, thậm chí còn tương hỗ tốt cả những thiết bị cũ với phần cứng không cao, như có RAM chỉ đạt dung tích 512 MB. Hệ điều hành quản lý mới được Google tối ưu năng lực hoạt động giải trí, cho hiệu năng cao hơn tới 1,6 lần phiên bản trước .

**Android 5.0 Lollipop**

Sau hơn một năm Android 4.0 KitKat ra đời, Google đã chính thức trình làng phiên bản hậu duệ mới nhất với tên gọi Android Lollipop, được nhìn nhận là hệ điều hành quản lý có những biến hóa rõ ràng và đáng kể nhất trong lịch sử vẻ vang Android từ trước đến nay .Thiết kế " Material " mới : Ngôn ngữ đồ họa mới của Android được lấy cảm hứng từ vạn vật thiên nhiên, vật lý và phong thái đậm, đổ bóng giống như in ấn. Nói cách khác, đó là một phong cách thiết kế dựa trên những đặc tính của giấy .Các tính năng khác cũng được nâng cấp cải tiến như : phong cách thiết kế báo nhắc trọn vẹn mới, tương hỗ chip 64 bit và cải tổ thời lượng pin .

**Android 6.0 Marshmallow**

Vào ngày 5/10/2015 thì Google đã trình làng đến người dùng phiên bản Android sau đó với mã hiệu Marshmallow ( kẹo dẻo ) với những biến hóa đợt update này tuy nhỏ nhưng thiên về khuynh hướng hoàn thành xong tương tác người dùng, cho một thưởng thức tuyệt vời hơn .Về mặt giao diện người dùng, màn hình hiển thị chính trên Android M có vẻ như có khá ít đổi khác so với phiên bản trước ngoại trừ logo Google, tuy nhiên khi bạn vào trong Menu ứng dụng bạn hoàn toàn có thể thấy khá nhiều đổi khác. Các ứng dụng được bố trị và cuộn xuống theo chiều dọc, ở phía trên cùng là thanh tìm kiếm và có một điểm mê hoặc là máy sẽ tự động hóa gợi ý cho bạn 4 apps để sử dụng tùy theo từng khu vực mà bạn đang ở .Tính năng mới Now on Tap : khi ở màn hình hiển thị của bất kể ứng dụng ( ví dụ trình duyệt web ) đang hiển thị thông tin, bạn hoàn toàn có thể giữ nút home và máy sẽ khởi đầu " quét " những thông tin đang được hiển thị trên màn hình hiển thị, gửi về Google và Google sẽ phản hồi lại cho bạn những thông tin, gợi ý có ích tương quan. Việc tích hợp Google theo cách này nâng thưởng thức người dùng lên một tầm cao mới .Tiết kiệm nguồn năng lượng hơn : Khi ở trạng thái không sử dụng, điện thoại cảm ứng Android đốt pin khá nhiều nếu so sánh với những điện thoại thông minh hệ điều hành quản lý khác. Google đã cho sinh ra chính sách Doze để xử lý yếu tố về pin chờ điện thoại thông minh này. Khi máy bạn không được sử dụng, chính sách Doze sẽ được kích hoạt và sẽ hoạt động giải trí hơi giống như khi bạn bật chính sách Airplane trên điện thoại cảm ứng vậy : không liên kết, không thông tin, không có bất kể việc chạy ứng dụng nào diễn ra trong quy trình này để bảo vệ cho máy ở trạng thái tiết kiệm chi phí nguồn năng lượng tối đa hoàn toàn có thể. Chỉ một số ít thông tin quan trọng như cuộc gọi, báo thức, tin nhắn là hoàn toàn có thể hiển thị trong trạng thái Doze này .Ngoài ra Android 6. cũng mang lại cho người dùng 1 số ít tính năng mới như : sử dụng thẻ SD cắm ngoài như bộ nhớ trong hay chính thức tương hỗ nhận diện vân tay và Google Pay .

**Android 7.0 Nougat**

Android 7.0 Nougat được Google tung ra vào ngày 22 tháng 8 năm năm nay và những thiết bị Nexus sẽ là những chiếc smartphone tiên phong được update phiên bản mới này. Tên gọi chính thức của phiên bản Android 7.0 đã được Google xác nhận, đó chính là một loại kẹo truyền thống lịch sử có tên Nougat .Android 7.0 tương hỗ một số ít tính năng mới đáng kể như :Hỗ trợ Menu quy đổi nhanh giữa những setup mạng lưới hệ thống : Một menu hamburger ( hình tượng dấu 3 gạch nằm ngang ) đã được thêm vào Cài đặt của mạng lưới hệ thống. Ví dụ như khi bạn đang trong phần setup Bluetooth bạn hoàn toàn có thể nhanh gọn chuyển đến những setup khác của mạng lưới hệ thống bằng cách sử dụng Menu bên trái này .Trả lời nhanh tin nhắn từ thanh thông tin : Trong những bổ trợ mới, thì đây là tính năng mới mẻ và lạ mắt và khá giống với hệ điều hành quản lý iOS của Apple. Tin nhắn hoàn toàn có thể được vấn đáp nhanh từ thông tin của chính nó. Với tính năng này người dùng không cần phải rời khỏi ứng dụng hiện tại để vấn đáp một tin nhắn hoặc thậm chí còn là mở khóa điện thoại cảm ứng .Chế độ chia đôi màn hình hiển thị : Cuối cùng thì Google đã thêm tính năng vào Android 7.0, đây là tính năng mà bạn thường thấy trên những máy tính bảng, những dòng điện thoại thông minh của Samsung hay LG. Người dùng hoàn toàn có thể chia màn hình thành 2 phần, sử dụng 2 ứng dụng song song cùng 1 lúc. Và bạn còn hoàn toàn có thể tùy chọn size hành lang cửa số cho mỗi ứng dụng bằng cách kèo thanh màu đen giữa 2 ứng dụng sang trái hoặc phải, lên hoặc xuống. +

Trung tâm thông báo được làm mới: Trung tâm thông báo đã được google thiết kế lại. Các biểu tượng, phím tắt trên thanh thông báo được thu gọn và nổi bật hơn, bạn có thể mở rộng các phím tắt bằng phím mũi tên phía bên trái góc trên màn hình. Các thông báo chung từ 1 ứng dụng bây giờ đã được tối ưu gộp lại với nhau thành 1 dòng duy nhất và bạn có thể mở rộng bằng cách sử dụng nút mũi tên hoặc thao tác với 2 ngón tay. Giúp tối ưu hóa không gian trong trung tâm thông báo.

Xem thêm: Nâng cao khả năng ứng dụng công nghệ thông tin vào dạy, học ở Học viện Lục quân hiện nay

Ngoài ra còn 1 số ít tính năng đáng chú ý quan tâm như : tương hỗ chính sách trong thực tiễn ảo với VR, tích hợp chính sách tiết kiệm ngân sách và chi phí tài liệu, chính sách tiết kiệm ngân sách và chi phí pin Doze được nâng cấp cải tiến …

**Android 8 Oreo**

Vào ngày 21/08/2017 Google đã chính thức ra mắt phiên bản Android 8 Oreo sau khi tung ra 4 phiên bản dùng thử. Android 8 tập trung chuyên sâu hầu hết vào nâng cấp cải tiến thưởng thức người dùng, độ bảo đảm an toàn bảo mật thông tin và nền tảng kiến thiết xây dựng .Giới hạn ứng dụng chạy nền : Mặc dù đã được ra mắt ở những phiên bản Android trước đó, nhưng người dùng chỉ thực sự sử dụng được tính năng này khi kích hoạt chính sách nhà tăng trưởng. Vì vậy trên Android 8 Oreo, Google đã tăng cường năng lực tự động hóa số lượng giới hạn những hoạt động giải trí ngầm mà ứng dụng hoàn toàn có thể thực thi được. Sự nâng cấp cải tiến này giúp những lập trình viên hoàn toàn có thể tạo ra ứng dụng ít có ảnh hưởng tác động xấu đến thiết bị cũng như dung tích pin .Tính năng hạn chế ứng dụng chạy nền trên Android 8Tính năng hạn chế ứng dụng chạy nền trên Android 8.0 .Tính năng picture-in-picture : Thay đổi lớn không kém phần trên Android 8 chính là được cho phép sử dụng tính năng đa nhiệm picture-in-picture trong YouTube. Người dùng hoàn toàn có thể hoàn toàn có thể vừa liên tục xem video trên 1 màn hình hiển thị thu nhỏ, vừa hoàn toàn có thể dùng những những ứng dụng khác 1 cách thuận tiện .Tính năng picture-in-picture trên Android 8.0Tính năng picture-in-picture trên Android 8.0 .Chế độ nhập liệu tự động hóa : Tính năng này được cho phép bạn đồng điệu tài liệu của những ứng dụng có nhu yếu mật mã đăng nhập với hệ điều hành quản lý Android. Điều đó nghĩa là Android 8 được cho phép tự động hóa điền những thông tin tương quan đến mật mã, thông tin tài khoản khi cần mà không cần phụ thuộc vào vào 1 ứng dụng quản trị mật mã thứ 3. Nhờ vậy mà quy trình đăng nhập sẽ trở nên thuận tiện, thuận tiện hơn và hạn chế thực trạng mất thông tin cá thể .Chế độ nhập liệu tự động trên Android 8Chế độ nhập liệu tự động hóa trên Android 8.0 .Ngoài ra Android 8.0 còn bổ trợ thêm những tính năng điển hình nổi bật như : Nhóm thông tin theo từng kênh, tương hỗ điều hướng với bàn phím vật lý, lan rộng ra dải màu trong những ứng dụng hình ảnh, cải tổ chất lượng âm thanh và camera, ..

**Android 9 Pie**

Sau 1 năm ra đời Android 8 Oreo, Google cũng chính thức trình làng Android 9 Pie vào ngày 07/08/2018. Android 9 là phiên bản phát hành lớn thứ 9 của hệ quản lý Android. Ở phiên bản hệ điều hành quản lý mới lần này, những chiếc smartphone đến từ Google là Pixel được phép tăng cấp tiên phong, sau đó là những máy Nokia của HMD Global .Tối ưu thời lượng pin bằng AI : Ở Android 9, Google đã đưa ra tính năng Apdaptive Battery nhằm mục đích tối ưu hóa tuổi thọ pin trên điện thoại thông minh. Dựa vào AI, tính năng này sẽ Dự kiến những ứng dụng mà người dùng hoàn toàn có thể sẽ không sử dụng trong 1 khoảng chừng thời hạn tới. Từ đó, thiết bị của bạn sẽ hạn chế cung ứng pin cho những ứng dụng này. Vì vậy, thời lượng pin trên smartphone của người dùng sẽ tránh bị tiêu tốn vô những ứng dụng không thiết yếu mà chỉ tập trung chuyên sâu vào những ứng dụng ưa thích của người dùng .Tính năng Apdaptive Battery trên Android 9 giúp tối ưu hóa pin của người dùngTính năng Apdaptive Battery trên Android 9 giúp tối ưu hóa pin của người dùng. Nguồn : Digitaltrends .Tìm kiếm nâng cao hơn : Tính năng tìm kiếm không còn đơn thuần chỉ là tìm kiếm khi đưa ra hiển thị hình tượng ứng dụng cùng những ứng dụng có tương quan mà còn phân phối thêm những thông tin khác để tương tác với ứng dụng trong hiệu quả tìm kiếm. Ví dụ nếu bạn tìm kiếm Grab trong điện thoại thông minh, thiết bị sẽ trả về những thông tin khác như ước tính về thời hạn và ngân sách cho những chuyến đi đến khu vực nào đó dựa vào thói quen sử dụng của người dùng .Với Android 9, người dùng có thể tìm kiếm chuyên sâu hơnVới Android 9, người dùng hoàn toàn có thể tìm kiếm nâng cao hơn .Nâng cấp bảo mật thông tin : Android 9 sẽ hạn chế thực trạng sử dụng micro, camera, … trong thiết bị của bạn trừ khi ứng dụng chuyển sang trạng thái trạng nền. Trong trường hợp những ứng dụng này nỗ lực truy vấn vào những tài nguyên trên sẽ có thông tin lỗi hiện ra. Tính năng này giúp nâng cao quyền bảo mật thông tin thông tin cá thể hơn khi sử dụng những ứng dụng .Ngoài ra, quyền bảo mật trên Android 9 cũng được nâng cao hơn nhiều.Ngoài ra, quyền bảo mật thông tin trên Android 9 cũng được nâng cao hơn nhiều .Android 9 Pie cũng cung ứng thêm 1 vài tính năng khác như : Tăng cường số lượng thiết bị liên kết bluetooth từ 2 lên 5, thống kê thời hạn sử dụng ứng dụng, bổ trợ nút xoay màn hình hiển thị khi xem video, …

**Android 10**
Khác với những phiên bản Android từ thế hệ 7 trở đi sẽ được đặt tên theo 1 món bánh hoặc kẹo ngọt nào đó thì hệ quản lý và điều hành thế hệ thứ 10 được Google ra mắt có cái tên khá đơn thuần là Android 10, không đặt theo tên 1 món ăn nào cả. Android 10 được phát hành vào 03/09/2019, trễ hơn đôi chút so với những thế hệ nhiệm kỳ trước đó ( thường được phát hành vào tháng 08 ) .Chế độ Dark Mode : Nhắc đến Android 10 không thể nào không nhắc tới Dark Mode, được cho phép người dùng bật và tắt chính sách này ngay trên menu thiết lập nhanh một cách thuận tiện. Bên cạnh đó, để cá thể hóa nhu yếu người dùng, Google còn mang đến những lựa chọn tùy chỉnh kích hoạt dựa trên thời hạn thực hoặc hoàn toàn có thể bật / tắt bằng tay thủ công và kích hoạt Dark Mode ngay cả trên những ứng dụng thứ 3 .Hệ điều hành di động thế hệ thứ 10 của Google mang đến cho người dùng tính năng Dark ModeHệ quản lý di động thế hệ thứ 10 của Google mang đến cho người dùng tính năng Dark Mode .Cử chỉ điều hướng mới : Trên Android 10 tất cả chúng ta sẽ không còn thấy sự Open của 3 nút bấm quen thuộc mà thay vào đó là 1 thanh ngang nhỏ dùng để điều hướng theo cử chỉ của người dùng. Với Android 10, người dùng hoàn toàn có thể vuốt lên để trở về màn hình hiển thị chính, vuốt từ cạnh trái hoặc cạnh phải để quay lại, khá giống trên những thiêt bị iPhone .Android 10 đã thay đổi các nút bấm thành thanh điều hướngAndroid 10 đã đổi khác những nút bấm thành thanh điều hướng .Kiểm soát quyền truy vấn : Cũng như những phiên bản hệ quản lý trước, Android 10 khá chú trọng vào yếu tố quyền riêng tư của người dùng. Vì vậy ở hệ điều hành quản lý này, người dùng có hẳn 1 TT bảo mật thông tin mới cũng như một TT vị trí trong phần Cài đặt để hoàn toàn có thể quản trị những ứng dụng nào đang nhu yếu vị trí, nhật ký cuộc gọi, máy ảnh, micro … Cũng nhờ vậy mà người dùng hoàn toàn có thể biến hóa quyền truy vấn của những ứng dụng này nhanh gọn, thuận tiện và thuận tiện .Android 10 có trung tâm kiểm soát để người dùng có thể quản lý quyền truy cập của các ứng dụng.Android 10 có TT trấn áp để người dùng hoàn toàn có thể quản trị quyền truy vấn của những ứng dụng .Các tính năng khác trên Android 10 mà tất cả chúng ta hoàn toàn có thể đề cập đến như : Hỗ trợ tốt hơn trên những dòng điện thoại cảm ứng gập, cải tổ tính năng san sẻ nhanh, tương hỗ HDR10 +, quyền trấn áp con cháu ngặt nghèo hơn …

**Android 11**
Nối tiếp Android 10 thì vào 09/2020, Google đã chính thức công bố hệ quản lý và điều hành di động thế hệ thứ 11 vào 09/2020 với tên gọi cũng đơn thuần không kém phần là Android 11. Phiên bàn này được kỳ vọng sẽ mang đến nhiều tính năng cũng như nâng cấp cải tiến mới cho những smartphone Android .Tích hợp quay màn hình hiển thị : Có lẽ ở những giao diện tùy chỉnh khác đã có sẵn tính năng này từ trước nhưng với những smartphone sử dụng Android thuần thì phải đến thế hệ thư 11 này, người dùng mới được quay màn hình hiển thị trực tiếp mà không cần trải qua ứng dụng thứ 3. Tính năng này được cho phép người dùng vừa quay màn hình hiển thị vừa ghi âm giọng nói cũng như âm thanh của mạng lưới hệ thống cùng 1 lúc .Android 11 tích hợp sẵn tính năng quay màn hình bên trongAndroid 11 tích hợp sẵn tính năng quay màn hình hiển thị bên trong .Kiểm soát quyền truy vấn 1 lần : Người dùng sử dụng smartphone đang chạy Android 11 có quyền được cho phép những ứng dụng truy vấn vào 1 vài quyền riêng tư nhưng chỉ duy nhất 1 lần mà thôi. Sau khi sử dụng xong, hệ thông sẽ ngay lập tức tịch thu quyền đó trong lần chạy tiếp theo. Nhờ tính năng này, Android 11 sẽ hạn chế rủi ro tiềm ẩn lạm quyền từ những ứng dụng sau khi người dùng sử dụng .Kiểm soát quyền truy cập 1 lần trên Android giúp hạn chế việc lạm quyền của các ứng dụng ít sử dụng.Kiểm soát quyền truy vấn 1 lần trên Android giúp hạn chế việc lạm quyền của những ứng dụng ít sử dụng .Ngoài những tính năng kể trên, phiên bản hệ quản lý và điều hành Android 11 còn cung ứng cho người dùng thêm 1 vài tính năng hay ho khác như : Tăng kích cỡ quay video lan rộng ra, khủng hoảng bong bóng chat, đổi khác giao diện của trình phát nhạc, đề xuất kiến nghị những ứng dụng hay dùng, lịch sử vẻ vang thông tin …

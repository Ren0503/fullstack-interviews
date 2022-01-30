# Câu hỏi phỏng vấn Node.js

![](./assets/nodejs.jpeg)

## Node.js là gì

Nodejs là một nền tảng được xây dựng, vận hành tại V8 JavaScript runtime của Chrome. Với Nodejs, bạn có thể chạy JavaScript trên server và thể xây dựng, phát triển các ứng dụng mạng nhanh chóng và dễ dàng.

Nền tảng này bắt đầu được xây dựng, phát triển tại California từ năm 2009 với phần Core phía dưới được lập trình bằng C++ gần như 100%. Điều này tạo nên ưu thế về tốc độ xử lý cũng như hiệu năng của nền tảng này. Đến nay, Nodejs vẫn đang "gây bão" trong cộng đồng công nghệ bởi khả năng phát triển ứng dụng vượt trội.

## Câu hỏi phỏng vấn Node.js cho Fresher

### 1. First class function là gì ?

First class function hay hàm hạng nhất là khi một hàm được sử dụng như một biến (được gán, truyền như tham số hay trả về). Có nhiều ngôn ngữ lập trình như Scala, Haskell, và JavaScript... đều có hàm hạng nhất.
Các hàm này có thể truyền dưới dạng tham số hay trả về cho một hàm khác gọi là HOC(high-order function).

Các hàm `map()` và `filter()` là các HOC phổ biến được dùng.

### 2. Node.js  hoạt động thế nào ?

Ý tưởng chính của Node js là sử dụng non-blocking, hướng sự vào ra dữ liệu thông qua các tác vụ thời gian thực một cách nhanh chóng. Bởi vì, Node js có khả năng mở rộng nhanh chóng, khả năng xử lý một số lượng lớn các kết nối đồng thời bằng thông lượng cao. Nếu như các ứng dụng web truyền thống, các request tạo ra một luồng xử lý yêu cầu mới và chiếm RAM của hệ thống thì việc tài nguyên của hệ thống sẽ được sử dụng không hiệu quả. Chính vì lẽ đó giải pháp mà Node js đưa ra là sử dụng luồng đơn (Single-Threaded), kết hợp với non-blocking I/O để thực thi các request, cho phép hỗ trợ hàng chục ngàn kết nối đồng thời.

### 3. Quản lý package trong ứng dụng Node.js ?

Khi thảo luận về Node js thì một điều chắc chắn không nên bỏ qua là xây dựng package quản lý sử dụng các công cụ NPM mà mặc định với mọi cài đặt Node js. Ý tưởng của mô-đun NPM là khá tương tự như Ruby-Gems: một tập hợp các hàm có sẵn có thể sử dụng được, thành phần tái sử dụng, tập hợp các cài đặt dễ dàng thông qua kho lưu trữ trực tuyến với các phiên bản quản lý khác nhau. Bên cạnh npm cũng có thể sử dụng yarn với bộ chức năng tương tự.

### 4. Node.js có tốt hơn các framework khác ?

- **Bất đồng bộ**: Đặc điểm đầu tiên của Nodejs là tính bất đồng bộ. Node.js không cần đợi API trả dữ liệu về, vậy nên mọi APIs nằm trong thư viện Node.js đều không được đồng bộ, hiểu đơn giản là chúng không hề blocking (khóa). Server có cơ chế riêng để gửi thông báo và nhận phản hồi về các hoạt động của Node.js và API đã gọi.
- **Tốc độ nhanh**: Với phần core phía dưới lập trình gần như toàn bộ bằng ngôn ngữ C++, kết hợp với V8 Javascript Engine mà Google Chrome cung cấp, tốc độ vận hành, thực hiện code của thư viện Node.js diễn ra rất nhanh.
- **Đơn giản/Hiệu quả**: Tiến trình vận hành của Node.js đơn giản song lại mang đến hiệu năng cao nhờ ứng dụng mô hình single thread và các sự kiện lặp. Một loạt cơ chế sự kiện cho phép server trả về phản hồi bằng cách không block, đồng thời tăng hiệu quả sử dụng. Các luồng đơn cung cấp dịch vụ cho nhiều request hơn hẳn Server truyền thống.
- **Không đệm**: Nền tảng Node.js không có vùng đệm, tức không cung cấp khả năng lưu trữ dữ liệu buffer.
- **Có giấy phép**: Đây là nền tảng đã được cấp giấy phép, phát hành dựa trên MIT License.
### 5. Các bước để luồng điều khiển kiểm soát các lệnh gọi hàm ?

- Kiểm soát trật tự thực thi
- Thu thập dữ liệu
- Giới hạn đồng thời
- Gọi bước sau trong chương trình.

### 6. Các tính năng thời gian của Node.js?

Các hàm Set Timer:
- `setImmediate()` : chạy ngay lập tức (thực ra nó sẽ chạy ở lần lặp tiếp theo trong event loop)
- `setTimeout()` : chạy trong một khoảng thời gian.
- `setInterval()`: lặp đi lặp lại trong khoảng thời gian

Các hàm Clear timer
- `clearImmediate()` : dừng một đối tượng setImmediate, tạo bởi hàm setImmediate()
- `clearTimeout()` : dừng một đối tượng setTimeout, tạo bởi hàm setTimeout()
- `clearInterval()` : dừng một đối tượng setInterval, tạo bởi hàm setInterval()

### 7. Ưu điểm của promise so với callback?

Ưu điểm chính của việc sử dụng **promise** là bạn có được một đối tượng để quyết định hành động cần được thực hiện sau khi tác vụ bất đồng bộ hoàn thành. Điều này cung cấp cod dễ quản lý hơn và tránh callback hell.

### 8. fork trong Node.js là gì?

Một fork dùng cho tạo các tiến trình con. Trong nodejs, nó được dùng để tạo thực thể mới của v8 để chạy nhiều worker cho thực thi code.

### 9. Tại sao Node.js lại là đơn luồng?

Node.js được tạo rõ ràng như một thử nghiệm trong xử lý bất đồng bộ. Lý thuyết là thực hiện xử lý bất đồng bộ trên một luồng duy nhất có thể cung cấp hiệu suất và khả năng mở rộng cao hơn so với các triển khai đa luồng truyền thống.

Một ứng dụng node.js không hoạt động chuyên sâu về CPU có thể chạy hàng nghìn kết nối đồng thời tốt hơn Apache hoặc IIS hoặc các máy chủ đa luồng khác.

### 10. Tạo ứng dụng hello world với node.js?

```js
var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(3000);
```

### 11. Các kiểu hàm API trong node.js?

Có hai kiểu hàm API:
- Hàm bất đồng bộ, non-blocking: sử dụng chủ yếu cho các hoạt động I/O có thể tách ra khỏi vòng lặp chính.
- Hàm đồng bộ, blocking: sử dụng cho các hoạt động ảnh hưởng đến tiến trình đang chạy trong vòng lặp chính.

### 12. REPL là gì?

REPL là từ viết tắt của Read Eval Print Loop (hiểu nôm na là: Đọc – Đánh giá – In – Lặp) và nó biểu diễn môi trường máy tính như màn hình console trong Linux shell nơi bạn có thể gõ các dòng lệnh và hệ thống sẽ trả về các kết quả. NodeJS cũng có môi trường REPL. Nó để thực hiện các tác vụ mong muốn:

**Read**: Đọc các thông tin input của người dùng, chuyển đổi thành các dữ liệu Javascript và lưu trữ trong bộ nhớ.

**Eval**: Đánh giá các cấu trúc dữ liệu này.

**Print**: In các kết quả.

**Loop**: Lặp các dòng lệnh đến khi người dùng gõ ctrl-c hai lần.

### 13. Hai tham số mà async.queue nhận làm đầu vào?

- Hàm tác vụ (Task function)
- Giá trị đồng thời (Concurrency Value)

### 14. Ý nghĩa của module.exports?

Được sử dụng để hiển thị các chức năng của một module hoặc file cụ thể sẽ được sử dụng ở những nơi khác trong dự án. Nó có thể được sử dụng để đóng gói tất cả các chức năng tương tự trong một file giúp cải thiện cấu trúc dự án.

Ví dụ:

```js
const getSolutionInJavaScript = async ({
    problem_id
}) => {
...
};
const getSolutionInPython = async ({
    problem_id
}) => {
    ...
};
module.exports = { getSolutionInJavaScript, getSolutionInPython }
```

Bây giừo ta có thể sử dụng lại các hàm trên ở file khác:

```js
const { getSolutionInJavaScript, getSolutionInPython} = require("./utils")
```

### 15. Công cụ dùng để đảm bảo code style nhất quán?

ESLint có thể dùng với bất kỳ IDE nào để đảm bảo code style nhất quán cho duy trì codebase trong tương lai.

### 16. Callback hell là gì?

```js
async_A(function(){
    async_B(function(){
        async_C(function(){
            async_D(function(){
            ....
            });
        });
    });
});
```

Đối với ví dụ trên, chúng ta đang truyền các hàm callback và nó làm cho code không thể đọc được càng không thể bảo trì, do đó chúng ta nên thay đổi logic bất đồng bộ để tránh điều này.

### 17. Event-Loop trong Node.js là gì?

Bất cứ thứ gì bất đồng bộ đều được quản lý bởi event loop sử dụng queue và listener. Ta có thể mường tượng với sơ đồ sau:

![](./assets/Nodejs-event_loop.png)

Khi hàm main được chạy thì các đoạn code trong main sẽ được thực thi. Nó sẽ lần lượt đẩy các hàm vào bên trong call stack theo nguyên tắc LIFO.

Các hàm hay tác vụ liên quan đến Events (click, change, listener, …), AJAX (Call APIs), Timing (setTimeout, setInterval) sẽ được đẩy từ call stack sang Web APIs. Còn lại thì sẽ được thực thi trong call stack đến khi nào xong thì pop nó ra cho hàm bên dưới được thực thi.

Ở Web APIs sẽ tận dụng các nhân của thiết bị để xử lý riêng biệt các tác vụ này. Sau khi hoàn tất thì Web APIs sẽ trả về một callback và đẩy nó vào trong Callback Queue.

Callack Queue hoạt động theo nguyên tắc của queue là FIFO (vào trước ra trước) không như stack.

Event loop hiểu nôm na là một vòng lặp vô tận, nó luôn trực chờ ở đó để quan sát Callback Queue và Call stack.

Bất kể khi nào mà call stack trống (tất cả các hàm được pop ra) thì nó sẽ lấy các callback ở trong Callback Queue và ném đưa trong Call Stack để tiếp tục thực thi.

### 18. Nếu node.js đơn luồng thì nó xử lý đồng thời như thế nào?

Ví dụ:

```js
const crypto = require("crypto");
const start = Date.now();
function logHashTime() {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
        console.log("Hash: ", Date.now() - start);
    });
}
logHashTime();
logHashTime();
logHashTime();
logHashTime();
```

Kết quả là:

```text
Hash: 1213
Hash: 1225
Hash: 1212
Hash: 1222
```

Khi cần xử lý đồng thời, thư viện libuv trong node.js sẽ dùng thread pool để tạo thêm luồng cho xử lý đồng thời như vậy. 

### 19. Sự khác biệt giauwx process.nextTick() và setImmediate()?

Cả hai đều dùng để chuyển sang chế độ bất đồng bộ bởi hàm listener.

**process.nextTick()** đặt calblack cho thực thi còn **setImmediate** đẩy callback vào hàng đợi để thực thi. Vì vậy event-loop sẽ chạy như sau.

**`timers–>pending callbacks–>idle,prepare–>connections(poll,data,etc)–>check–>close callbacks`**

Ở phương thức process.nextTick() này, thêm hàm callback để bắt đầu ở event queue kế tiếp, còn phương thức setImmediate() đặt hàm vào giai đoạn kiếm tra của event queue kế tiếp.

### 20. Nodejs giải quyết vấn đề block I/O như thế nào?

Vì node có event loop có thể dùng cho tất cả hoạt động I/O bật đồng bộ mà không cần blocking ở hàm chính.

Ví dụ: nếu một cuộc gọi mạng xảy ra, nó sẽ được lập lịch trong event loop thay vì luồng chính. Nếu có nhiều lệnh gọi I/O như vậy, mỗi lệnh gọi sẽ được xếp vào hàng đợi tương ứng để thực thi (ngoài luồng chính).

Vì vậy, ngay cả khi đơn luồng các hoạt động I/O vẫn được xử lý theo cách non-blocking.

### 21. Sử dụng async await trong Node.js?

```js
// this code is to retry with exponential backoff
function wait (timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, timeout);
    });
}

async function requestWithRetry (url) {
    const MAX_RETRIES = 10;
    for (let i = 0; i <= MAX_RETRIES; i++) {
        try {
            return await request(url);
        } catch (err) {
            const timeout = Math.pow(2, i);
            console.log('Waiting', timeout, 'ms');
            await wait(timeout);
            console.log('Retrying', err.message, i);
        }
    }
}
```

### 22. Node.js stream là gì?

Stream là một thực thể của EventEmitter, có thể dùng cho dữ liệu streaming trong Node.js. Nó có thể dùng để xử lý và quản lý các file streaming lớn như video, mp3, ... qua mạng. Nó sử dụng buffers như bộ lưu trữ tạm thời.

Nó có 4 kiểu chính là:

- **Writable**: streams cho phép ghi dữ liệu (ví dụ: `fs.createWriteStream()`).
- **Readable**: streams cho phép đọc dữ liệu (ví dụ: `fs.createReadStream()`).
- **Duplex**: streams là kết hợp của cả Readable và Writable (ví dụ `net.Socket`).
- **Transform**: là stream Duplex có thể chỉnh sửa hoặc chuyển đổi dữ liệu khi nó được ghi hay đọc (ví dụ `zlib.createDeflate()`).

### 23. Buffers trong node.js?

Buffer là một vùng dự trữ tạm thời chứa các dữ liệu đang được chuyển từ nơi này đến nơi khác. Buffer có kích thước xác định và giới hạn. Kích thước của buffer được xác định bằng những thuật toán cho từng trường hợp cụ thể. Buffer là một kỹ thuật được phát triển nhằm ngăn chặn sự tắc nghẽn dữ liệu khi truyền từ nơi này đến nơi khác.

Buffer là một class trong Node.js API dùng để giao tiếp với các dữ liệu nhị phân. Buffer class đã được khai báo trong phạm vi global trong các phiên bản Node.js sau này, nên chúng ta không cần phải require('buffer') để sử dụng. 

### 24. Middleware là gì?


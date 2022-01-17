# Câu hỏi phỏng vấn Cấu Trúc Dữ Liệu

- Cấu trúc dữ liệu là một khái niệm cơ bản trong bất kỳ ngôn ngữ lập trình nào, là phần thiết yếu trong thiết kế thuật toán.

- Nó được sử dụng để tổ chức và sửa đổi dữ liệu một cách hiệu quả.

- Cấu trúc dữ liệu là cách dữ liệu và các mối quan hệ của nó được biểu diễn, hỗ trợ việc áp dụng các tính năng hoặc thuật toán khác nhau hoạt động một cách hiệu quả.

### Kiểu

Có hai kiểu cấu trúc dữ liệu:
- Cấu trúc dữ liệu tuyến tính: Nếu các phần tử của cấu trúc dữ liệu là một chuỗi tuần tự hoặc danh sách tuyến tính. Nó được gọi là cấu trúc dữ liệu tuyến tính. Ví dụ: ,mảng, danh sách liên kết, ngăn xếp, hàng đợi,...
- Cấu trúc dữ liệu phi tuyến tính: Nếu các phần tử của cấu trúc dữ liệu tạo ra cách duyệt qua các phần tử không theo thứ tự, thì nó là cấu trúc dữ liệu phi tuyến tính. Ví dụ: Cây, đồ thị,...

![type](./assets/data-structure-types.png)

### Ứng dụng

Cấu trúc dữ liệu là nền tảng cốt lõi của lập trình phần mềm vì bất kỳ thuật toán hiệu quả cho một vấn đề nhất định nào đều phụ thuộc vào mức độ hiệu quả của dữ liệu được cấu trúc.

Các ứng dụng của cấu trúc dữ liệu:
- Các định danh được dùng cho triển khai biên dịch đang sử dụng bảng băm.
- Cấu trúc dữ liệu B-tree rất phù hợp cho triển khai cơ sở dữ liệu.
- Một vài lĩnh vực quan trong sử dụng cấu trúc dữ liệu như:
    1. Trí thông minh nhân tạo
    2. Thiết kế trình biên dịch
    3. Máy học
    4. Thiết kế và quản lý cơ sở dữ liệu
    5. Blockchain
    6. Tính toán và thống kê
    7. Phát triển hệ điều hành
    8. Xử lý hình ảnh và âm thanh
    9. Mã hoá

![application](./assets/applications-data-structure.png)

### Lợi ích

Bất kỳ vấn đề nào đều có những hạn chế về tốc độ giải quyết vấn đề (thời gian) và lượng tài nguyên tiêu tốn (không gian). Một vấn đề bị hạn chế bởi độ phức tạp về không gian và thời gian phải được giải quyết một cách hiệu quả.

Để làm được điều này, vấn đề phải được biểu diễn ở một dạng cấu trúc phù hợp mà ở đó các thuật toán được áp dụng hiệu quả.

Lựa chọn cấu trúc dữ liệu thích hợp trở thành bước quan trọng nhất trước khi áp dụng thuật toán cho bất kỳ vấn đề nào.

> "Có sẵn kiến thức về các loại cấu trúc dữ liệu khác nhau sẽ giúp lập trình viên lựa chọn cấu trúc dữ liệu phù hợp nhất để giải quyết vấn đề một cách hiệu quả. Nó không chỉ nằm ở việc làm giải pháp của bạn hoạt động, mà còn là giải pháp đó hoạt động hiệu quả như thế nào."

## Câu hỏi phỏng vấn cho Fresher

### 1. Bạn có thể giải thích sự khác nhau giữa cấu trúc tập tin và cấu trúc lưu trữ 

### 2. Bạn có thể nói sự khác biệt giữa cấu trúc dữ liệu tuyến tính và phi tuyến tính ?

Nếu các phần tử của cấu trúc dữ liệu là một chuỗi hay danh sách tuyến tính thì nó gọi là cấu trúc dữ liệu tuyến tính. Trong khi đó, cấu trúc dữ liệu cho duyệt các phần tử không theo thứ tự nào gọi cấu trúc dữ liệu phi tuyến tính.

Danh sách, ngăn xếp và hàng đợi là ví dụ của cấu trúc dữ liệu tuyến tính trong khi cây và đồ thị là cấu trúc dữ liệu phi tuyến tính.

![linear-vs-non-linear](./assets/linear-vs-non-linear.png)

### 3. Mảng là gì ?

Mảng là tập hợp các loại dữ liệu cùng **kiểu** được lưu trữ tại các vị trí bộ nhớ liền kề.
Đây là cấu trúc dữ liệu đơn giản nhất mà phần tử dữ liệu có thể được truy cập ngẫu nhiên chỉ bằng cách sử dụng chỉ mục của nó.

### 4. Mảng đa chiều là gì ?

Mảng đa chiều là những cấu trúc dữ liệu mảng trên nhiều chiều khác nhau.

Điều này chỉ ra rằng sẽ có nhiều hơn một chỉ mục cho mỗi điểm lưu trữ. Loại cấu trúc dữ liệu này chủ yếu được sử dụng trong trường hợp dữ liệu không thể được biểu diễn hoặc lưu trữ trên mảng một chiều. Mảng đa chiều được sử dụng phổ biến nhất là mảng hai chiều.

Mảng hai chiều mô phỏng cấu trúc dạng bảng giúp dễ dàng lưu trữ lượng lớn dữ liệu được truy cập bằng cách sử dụng con trỏ hàng và cột.

![multi-array](./assets/multidimensional-array.png)

### 5. Danh sách liên kết là gì ?

Danh sách liên kết là một **chuỗi tuần tự các nút**, nơi các nút được liên kết với nhau thông qua con trỏ tham chiếu. Các phần tử **không được lưu trữ** tại các vị trí liền kề trong bộ nhớ. Chúng được liên kết bằng cách sử dụng con trỏ để tạo thành một chuỗi. Điều này tạo thành một liên kết dạng chuỗi để lưu trữ dữ liệu. 

Mỗi nút thường có hai phần:
- Trường dữ liệu
- Tham chiếu(con trỏ) đến nút kế tiếp

Nút đầu tiên trong danh sách liên kết gọi là head, nút cuối cùng gọi là tail và trỏ đến null. Null trong trường tham chiếu chỉ ra nút đó là tail. Nếu danh sách trống, head sẽ là tham chiếu null.

![linked-list](./assets/linked-list.png)

### 6. Danh sách liên kết là tuyến tính hay phi tuyến tính ?

Danh sách liên kết có thể được coi là cấu trúc dữ liệu tuyến tính và cả phi tuyến tính. Điều này phụ thuộc vào ứng dụng mà chúng được sử dụng.

Khi danh sách liên kết được sử dụng cho truy cập, nó được coi là một cấu trúc dữ liệu tuyến tính. Khi chúng được sử dụng để lưu trữ dữ liệu, nó có thể được coi là một cấu trúc dữ liệu phi tuyến tính.

### 7. Danh sách liên kết có hiệu quả hơn mảng ?

1. **Chèn và xoá**

- Quá trình chèn và xoá là rất tốn kém trong mảng vì phải tạo các phần tử mới cho các phần tử hiện có để dịch chuyển.
- Nhưng trong danh sách liên kết, các thao tác này dễ dàng hơn vì chỉ cập nhật địa chỉ hiện tại trong con trỏ tiếp theo của một nút.

2. **Cấu trúc dữ liệu động**

- Danh sách liên kết là cấu trúc dữ liệu động có nghĩa là không cần cho kích thước ban đầu khi tạo, nó có thể mở rộng hay co lại theo thời gian bởi cấp phát hay thu hổi của bộ nhớ.
- Trong khi đó, kích thước của mảng là giới hạn về số lượng phần tử được lưu trong bộ nhớ chính.

3. **Không lãng phí bộ nhớ**

- Vì kích thước của danh sách liên kết có thể tăng lên hoặc co lại dựa trên nhu cầu của chương trình, nên không có bộ nhớ nào bị lãng phí vì nó được cấp phát trong thời gian chạy.

- Với mảng, nếu chúng ta khai báo một mảng có kích thước 10 và chỉ lưu trữ 3 phần tử trong đó, thì không gian cho 7 phần tử sẽ bị lãng phí. Do đó, khả năng lãng phí bộ nhớ trong các mảng nhiều hơn.

### 8. Giải thích trường hợp nào sử dụng danh sách liên kết và trường hợp nào sử dụng mảng ?

Các trường hợp sử dụng danh sách liên kết tốt hơn mảng:

- Khi ta không biết trước chính xác số lượng phần tử.
- Khi ta biết sẽ có một lượng lớn thao tác thêm hoặc xoá.
- Số lượng thao tác truy cập ngẫu nhiên là rất ít.
- Khi muốn chèn các mục vào bất kỳ vị trí nào giữa danh sách, chẳng hạn như khi triển khai hàng đợi ưu tiên, danh sách liên kết sẽ phù hợp hơn.

Các trường hợp dùng mảng tốt hơn danh sách liên kết:
- Khi cần đánh chỉ mục cho các truy cập phần tử ngẫu nhiên thường xuyên.
- Khi ta biết trước số lượng phần tử mảng để cấp pháp bộ nhớ.
- Khi chúng ta cần tốc độ khi lặp lại các phần tử trong chuỗi.
- Khi cần quan tâm bộ nhớ:
    1. Một mảng đầy sẽ tốn ít bộ nhớ hơn danh sách liên kết
    2. Mỗi phần tử trong mảng chỉ biễu diễn dữ liệu trong khi mỗi nút trong danh sách liên kết phải biễu diễn thêm một hoặc nhiều con trỏ cho liên kết đến các nút khác.

Tóm lại, các yêu cầu về không gian, thời gian và mức độ dễ thực hiện được xem xét để quyết định cấu trúc dữ liệu nào sẽ được sử dụng cho mục đích gì.

### 9. Danh sách liên kết đôi (DDL) là gì ?

Đây là một loại danh sách liên kết phức tạp, trong đó một nút có hai tham chiếu:
- Một tham chiếu liên kết với nút tiếp theo trong chuỗi
- Một tham chiếu khác liên kết với nút trước đó.

Cấu trúc này cho phép duyệt các phần tử dữ liệu theo cả hai hướng (trái sang phải và ngược lại).

Các ứng dụng của DLL là:
- Danh sách phát nhạc với bài hát tiếp theo và các tùy chọn điều hướng bài hát trước đó.
- Bộ nhớ cache của trình duyệt với các trang đã truy cập BACK-FORWARD
- Chức năng hoàn tác và phục hồi trên các nền tảng như word, paint, v.v., nơi bạn có thể nút undo để truy cập trang trước.

### 10. Ngăn xếp là gì

Ngăn xếp là một cấu trúc dữ liệu tuyến tính tuân theo cách tiếp cận LIFO (Last In First Out) để truy cập các phần tử. 

Các thao tác cơ bản trong ngăn xếp:
- *Push*: thêm phần tử vào đỉnh ngăn xếp
- *Pop*: lấy phần tử từ đỉnh ngăn xếp
- *Peek*: lấy giá trị phần tử từ đỉnh ngăn xếp, mà không xóa nó khỏi ngăn xếp

![stack](./assets/stack.png)

Các ứng dụng của ngăn xếp:
- Tính các biểu thức đại số
- Quản lý bộ nhớ khi thi hành chương trình

### 11. Hàng đợi là gì

Hàng đợi là một cấu trúc dữ liệu tuyến tính tuân theo phương pháp FIFO (First In First Out) để truy cập các phần tử.

Các thao tác cơ bản trong hàng đợi:
- *enqueue*: thêm đối tượng vào cuối hàng đợi.
- *dequeue*: lấy đối tượng ở đầu ra khỏi hàng đợi và trả về giá trị của nó.
- *front*: trả về giá trị của phần tử nằm ở đầu hàng đợi mà không hủy nó.
- *rear*: trả về giá trị của phần tử nằm ở cuối hàng đợi mà không hủy nó.

![queue](./assets/queue.png)

Ứng dụng của hàng đợi:
- Dùng trong các hệ điều hành song song
- Xử lý yêu cầu trang web
- Dùng làm bộ đệm cho ứng dụng nghe nhạc
- Tác vụ CPU

### 12. Ngăn xếp và hàng đợi khác nhau thế nào ?

Trong ngăn xếp phần tử được thêm vào gần nhất sẽ được lấy ra đầu tiên, còn trong hàng đợi nó sẽ được lấy ra cuối cùng.

![stack-queue](./assets/stack-vs-queue.png)

### 13. Giải thích quy trình đằng sau việc lưu trữ một biến trong bộ nhớ.

Một biến được lưu trữ trong bộ nhớ dựa trên dung lượng bộ nhớ cần thiết. Sau đây là các bước được thực hiện để lưu trữ một biến:

1. Đầu tiên, nó chỉ định số lượng bộ nhớ cần thiết.
2. Sau đó, nó được lưu trữ dựa trên cấu trúc dữ liệu đang được sử dụng.
    - Sử dụng các khái niệm như cấp phát động đảm bảo hiệu quả cao và các đơn vị lưu trữ có thể được truy cập dựa trên các yêu cầu trong thời gian thực.

### 14. Triển khai hàng đợi bằng ngăn xếp

Một hàng đợi có thể triển khai bằng cách dùng **hai ngăn xếp**. 

Cho hàng đợi `q` và hai ngăn xếp `stack1` và `stack2` để triển khai `q`. Ta biết ngăn xếp hỗ trợ các thao tác push, pop và peek, ta sẽ dùng các thao tác đó. Ta cần mô phỏng các hoạt động của hàng đợi, enqueue và dequeue. Do đó, hàng đợi `q` có thể triển khai theo hai cách (cả hai cách đều có độ phức tạp không gian là O(n)):

1. Cần nhiều chi phí chi enqueue

Ở đây, phần tử cũ nhất luôn ở trên cùng của `stack1` đảm bảo hoạt động dequeue xảy ra với độ phức tạp thời gian O (1).

Để đặt phần tử vào đầu `stack1`, `stack2` được sử dụng.

Mã giả:

- Enqueue: Độ phức tạp thời gian là O(n):

```text
enqueue(q, data):
    While stack1 is not empty:
        Push everything from stack1 to stack2.
        Push data to stack1
        Push everything back to stack1.
```

- Dequeue: Độ phức tạp thời gian là O(1):

```text
dequeue(q):
    If stack1 is empty then error
    else
        Pop an item from stack1 and return it
```

2. Cần nhiều chi phí cho dequeue

Ở đây, đối với thao tác enqueue, phần tử mới được đẩy lên trên cùng của `stack1`.Thế nên, độ phức tạp thời gian hoạt động của enqueue là O(1).

Với dequeue, nếu `stack2` trống, tất cả các phần tử từ `stack1` sẽ được chuyển đến `stack2` và trên cùng của `stack2` là kết quả. Về cơ bản, đảo ngược danh sách bằng cách đẩy vào một ngăn xếp và trả về phần tử được enqueue đầu tiên. Thao tác đẩy tất cả các phần tử vào ngăn xếp mới có độ phức tạp O(n).

Mã giả:

- Enqueue: Độ phức tạp thời gian là O(1):

```text
enqueue(q, data):
    Push data to stack1
```

- Dequeue: Độ phức tạp thời gian là O(n):

```text
dequeue(q):
    If both stacks are empty then raise error.
    If stack2 is empty:
        While stack1 is not empty:
            push everything from stack1 to stack2.
    Pop the element from stack2 and return it.
```

### 15. Triển khai ngăn xếp bằng hàng đợi ?

Một ngăn xếp có thể được triển khai bằng 2 hai hàng đợi. Một hàng đợi hỗ trợ các thao tác là enqueue và dequeue. Ta sẽ dùng chúng để tạo các thao tác push, pop.

Đầu tiên ta có hai hàng đợi là `q1` và `q2`. Ngăn xếp được triển khai bởi hàng đợi theo hai cách.

1. Tốn chi phí cho push:

Phương thức này đảm bảo các phần tử mới được thêm vào sẽ luôn ở đằng trước của `q1`, thế nên thao tác pop sẽ là deque từ `q1`.

`q2` được dùng như một hàng đợi phụ trợ để phần tử mới vào trước `q1` trong khi đảm bảo pop xảy ra ở độ phức tạp O(1).

### 16. Hashmap trong cấu trúc dữ liệu là gì ?

Hashmap là cấu trúc dữ liệu sử dụng triển khai cấu trúc dữ liệu bảng băm để cho phép truy cập dữ liệu với độ phức tạp thời gian O(1) nếu bạn có khoá.

### 17. Yêu cầu đối với một đối tượng được sử dụng làm khóa hoặc giá trị trong HashMap là gì?

Đối tượng khoá hay giá trị được dùng trong hashmap phải triển khai phương thức `equals()` và `hashcode()`.

Phương thức `hashcode()` được dùng khi thêm một đối tượng khoá vào map, còn `equals()` được dùng khi truy cập dữ liệu từ map.

### 18. Xử lý xung đột trong HashMap với Java ?

Lớp `java.util.HashMap` trong Java sử dụng phương pháp chuỗi để xử lý xung đột. Trong chuỗi, nếu giá trị mới có khoá trùng với giá trị đã thêm vào, thì đó các giá trị này được lưu trữ trong danh sách liên kết ở bucket của khoá dưới dạng chuỗi cùng với giá trị hiện có.

Trong trường hợp tế nhất, tất cả các khoá đều có cùng hashcode, nó sẽ trả về bảng băm giống như là một danh sách liên kết. Trong trường hợp này, việc tìm kiếm một giá trị sẽ mất độ phức tạp thời gian là O(n) thay vì O(1). Do đó, cần phải cần thận khi lựa chọn thuật toán băm.

### 19. Độ phức tạp thời gian của thao tác get() và put() trong HashMap 

Độ phức tạp thời gian là O(1) giả sử rằng hàm băm được sử dụng trong hashmap phân phối các phần tử một cách đồng nhất giữa các nhóm.

### 20. Cơ sở dữ liệu nào được dùng cho triển khai bộ đệm LRU ?

Bộ đệm LRU (Least Recently Used) cho phép xác định nhanh một phần tử đã không được sử dụng trong thời gian dài nhất bằng cách sắp xếp các mục theo thứ tự sử dụng. Để đạt được điều này, hai cấu trúc dữ liệu được sử dụng: 

- **Queue** - Triển khai này sử dụng một danh sách liên kết đôi. Kích thước tối đa của hàng đợi dựa trên kích thước bộ đệm, bằng tổng số frame khả dụng. Các trang ít được dùng gần đây nhất sẽ ở gần với phần trước của hàng đợi trong khi các trang sử dụng nhiều gần đây nhất sẽ ở cuối hàng.
- **Hashmap** - Hashmap lưu trữ số trang dưới dạng khóa cùng với địa chỉ của nút hàng đợi tương ứng dưới dạng giá trị.

![](./assets/LRU-cache.png)

### 21. Hàng đợi ưu tiên là gì ?

Hàng đợi ưu tiên là một kiểu dữ liệu trừu tượng giống như một hàng đợi bình thường nhưng có quyền ưu tiên được gán cho các phần tử.

Các phần tử có mức độ ưu tiên cao hơn được xử lý trước các phần tử có mức độ ưu tiên thấp hơn.

Để thực hiện điều này, cần có tối thiểu hai hàng đợi - một hàng cho dữ liệu và hàng còn lại để lưu trữ mức độ ưu tiên.

### 22. Có thể lưu trữ một khóa trùng lặp trong HashMap không?

**Không**, không thể chèn các khóa trùng lặp vào HashMap. Nếu bạn cố gắng chèn bất kỳ khoá nào bằng khóa hiện có, thì giá trị cũ sẽ bị ghi đè bằng giá trị mới. Và điều này sẽ không thay đổi kích thước của HashMap.

Đây là lý do tại sao phương thức `keySet()` trả về tất cả các khóa dưới dạng SET trong Java vì nó không cho phép trùng lặp.

### 23. Cấu trúc dữ liệu cây là gì ?

Cây là một cấu trúc dữ liệu đệ quy, phi tuyến tính bao gồm tập hợp một hoặc nhiều nút dữ liệu trong đó một nút được chỉ định là gốc và các nút còn lại được gọi là con của gốc.

Cây tổ chức dữ liệu theo cách phân cấp.

Cấu trúc dữ liệu cây được sử dụng phổ biến nhất là cây nhị phân và các biến thể của nó.

Một vài ứng dụng của cây:
1. Hệ thống file
2. Bình luận trên mạng xã hội
3. Cây gia phả

![](./assets/tree-data-structure.png)

### 24. Cây nhị phân là gì ?

Cây nhị phân là một kiểu câu đặc biệt trong đó mỗi nút có nhiều nhất hai nút con. Cây nhị phân thường được phân chia thành ba tập con rời rạc, tức là gốc của cây, cây con bên trái và cây con bên phải. 

![](./assets/binary-search-tree.png)

### 25. Số lượng nút tối đa của cây nhị phân có chiều dài k 

Số lượng nút tối đa lf 2^(k+1) - 1, với k >= 1.

### 26. Viết hàm đệ quy tính chiều cao cây nhị phân trong Java 

Trước hết ta tạo một lớp đại diện cho mọi nút trong cây:

```java
public class Node{
    int data;
    Node left;
    Node right;
}
```

Hàm để tính chiều cao của cây:

```java
int heightOfBinaryTree(Node node)  
    { 
        if (node == null) 
            return 0; // If node is null then height is 0 for that node.
        else 
        { 
            // compute the height of each subtree
            int leftHeight = heightOfBinaryTree(node.left); 
            int rightHeight = heightOfBinaryTree(node.right); 

            //use the larger among the left and right height and plus 1 (for the root)
            return Math.max(leftHeight, rightHeight) + 1; 
        } 
    }
```

### 27. Viết hàm Java đếm số lượng nút trong cây

```java
int countNodes(Node root)
{
    int count =  1;             //Root itself should be counted
    if (root ==null)
        return 0;
    else
    {
        count += countNodes(root.left);
        count += countNodes(root.right);
        return count;
    }
}
```

### 28. Duyệt cây là gì ?

Duyệt cây là quá trình đi qua tất cả nút trong cây. Từ gốc (root) là nút đầu tiên đến tất cả các nút được liên kết. Có 3 cách duyệt cây:

#### 1. Duyệt trung thứ tự:
- Thuật toán:
    + Bước 1: Duyệt cây con bên trái, gọi InOrder(root.left)
    + Bước 2: Duyệt root
    + Bước 3: Duyệt cây con bên phải, gọi InOrder(root.right)
- Code Java:
```java
// Print inorder traversal of given tree.
void printInorderTraversal(Node root) 
{ 
    if (root == null) 
        return; 

    //first traverse to the left subtree
    printInorderTraversal(root.left); 

    //then print the data of node
    System.out.print(root.data + " "); 

    //then traverse to the right subtree
    printInorderTraversal(root.right); 
}
```
- Dùng: cho tìm kiếm kiếm cây nhị phân.

#### 2. Duyệt tiền thứ tự:
- Thuật toán:
    + Bước 1: Duyệt root
    + Bước 2: Duyệt cây con bên trái, gọi InOrder(root.left)
    + Bước 3: Duyệt cây con bên phải, gọi InOrder(root.right)
- Code Java:
```java
// Print preorder traversal of given tree.
void printPreorderTraversal(Node root) 
{ 
    if (root == null) 
        return; 
    //first print the data of node
    System.out.print(root.data + " "); 

    //then traverse to the left subtree
    printPreorderTraversal(root.left);                    

    //then traverse to the right subtree
    printPreorderTraversal(root.right); 
}
```
- Dùng: Để tạo bản sao cây, và cũng được sử dụng để lấy biểu thức tiền tố của cây biểu thức.

#### 3. Duyệt hậu thứ tự:
- Thuật toán:
    + Bước 1: Duyệt cây con bên trái, gọi InOrder(root.left)
    + Bước 2: Duyệt cây con bên phải, gọi InOrder(root.right)
    + Bước 3: Duyệt root
- Code Java:
```java
// Print postorder traversal of given tree.
void printPostorderTraversal(Node root) 
{ 
    if (root == null) 
        return; 

    //first traverse to the left subtree
    printPostorderTraversal(root.left);                    

    //then traverse to the right subtree
    printPostorderTraversal(root.right); 

    //then print the data of node
    System.out.print(root.data + " "); 
}
```
- Dùng: Dùng để xoá cây và cũng được sử dụng để lấy biểu thức hậu tố của cây biểu thức.

Ví dụ: ta có cây nhị phân như sau:

![](./assets/postorder-traversal.png)

- Duyệt trung thứ tự => Left, Root, Right : [4, 2, 5, 1, 3]
- Duyệt tiền thứ tự => Root, Left, Right : [1, 2, 4, 5, 3]
- Duyệt hậu thứ tự => Left, Right, Root : [4, 5, 2, 3, 1]

### 29. Cây tìm kiếm nhị phân là gì ?

Cây tìm kiếm nhị phân (BST) là một biến thể của cấu trúc dữ liệu cây nhị phân, lưu trữ dữ liệu theo cách rất hiệu quả sao cho giá trị của các nút trong cây con bên trái nhỏ hơn giá trị của nút gốc và giá trị của các nút bên phải của nút gốc tương ứng cao hơn nút gốc.

Ngoài ra, từng cây con bên trái và bên phải là cây tìm kiếm nhị phân của riêng chúng tại mọi trường hợp.

![](./assets/binary-search-tree.png)

### 30. Cây AVL là gì ?

Cây AVL là cây cân bằng. Cây AVL kiểm tra chiều cao của cây con bên trái và bên phải và đảm bảo rằng sự khác biệt không quá 1. Sự khác biệt này được gọi là Hệ số Cân bằng và được tính bằng. `BalanceFactor = chiều cao (cây con bên trái) - chiều cao (cây con bên phải)`.

### 31. In Chế độ xem bên trái của bất kỳ cây nhị phân nào 

Ý tưởng chính để giải quyết vấn đề này là duyệt cây theo tiền thứ tự và truyền thông tin về cấp đi cùng với nó. Nếu cấp được truy cập lần đầu tiên, thì chúng ta lưu trữ thông tin của nút hiện tại và cấp hiện tại trong hashmap. Về cơ bản, thì ta đang có được chế độ xem bên trái bằng cách quan tâm đến nút đầu tiên của mọi cấp độ.
Khi kết thúc quá trình duyệt, chúng ta có thể tìm ra giải pháp bằng cách duyệt qua map
.
Hãy xem xét cây sau đây làm ví dụ để tìm chế độ xem bên trái:

![](./assets/left-view-binary-tree.png)

Code Java:

```java
import java.util.HashMap;

//to store a Binary Tree node
class Node
{
    int data;
    Node left = null, right = null;

    Node(int data) {
        this.data = data;
    }
}
public class InterviewBit
{
    // traverse nodes in pre-order way
    public static void leftViewUtil(Node root, int level, HashMap<Integer, Integer> map)
    {
        if (root == null) {
            return;
        }

        // if you are visiting the level for the first time
        // insert the current node and level info to the map
        if (!map.containsKey(level)) {
            map.put(level, root.data);
        }

        leftViewUtil(root.left, level + 1, map);
        leftViewUtil(root.right, level + 1, map);
    }

    // to print left view of binary tree
    public static void leftView(Node root)
    {
        // create an empty HashMap to store first node of each level
        HashMap<Integer, Integer> map = new HashMap<>();

        // traverse the tree and find out the first nodes of each level
        leftViewUtil(root, 1, map);

        // iterate through the HashMap and print the left view
        for (int i = 0; i <map.size(); i++) {
            System.out.print(map.get(i) + " ");
        }
    }

    public static void main(String[] args)
    {
        Node root = new Node(4);
        root.left = new Node(2);
        root.right = new Node(6);
        root.left.left = new Node(1);
        root.left.left = new Node(3);
        root.right.left = new Node(5);
        root.right.right = new Node(7);
        root.right.left.left = new Node(9);

        leftView(root);
    }
}
```

### 32. Cấu trúc dữ liệu đồ thị là gì ?

Đồ thị là một loại cấu trúc dữ liệu phi tuyến tính bao gồm các đỉnh hoặc nút được kết nối bằng các cạnh hoặc liên kết để lưu trữ dữ liệu. Đồ thị có thể là có hướng hoặc vô hướng.

![](./assets/graph-data-structure.png)

### 33. Ứng dụng của đồ thị ?

Đồ thị được sử dụng trong nhiều ứng dụng khác nhau. Một số trong số chúng như sau:

- Đồ thị mạng xã hội để xác định luồng thông tin trong các trang web mạng xã hội như facebook, linkedin, v.v.
- Đồ thị mạng neural trong đó các nút đại diện cho các neuron và cạnh biểu thị các khớp thần kinh giữa chúng
- Lưới giao thông trong đó các trạm là các nút và các tuyến là các cạnh của biểu đồ.
- Đồ thị tiện ích điện hoặc nước trong đó các đỉnh là điểm kết nối và cạnh của dây hoặc đường ống kết nối chúng.
- Thuật toán tìm đường đi ngắn nhất giữa hai điểm.
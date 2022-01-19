# Thuật toán

![](./assets/algo.jpg)


## Thuật toán là gì ?

Cấu trúc dữ liệu và giải thuật là những khái niệm cốt lõi trong mọi buổi phỏng vấn dev, bất kể bạn là dev C, Java, Web hay Mobile. Dù là ở lĩnh vực nào trong công nghệ thông tin thì bạn cũng cần phải biết về giải thuật.

![](./assets/What_is_an_Algorithm.png)

Một lập trình viên cần hiểu kỹ lưởng về cả hai khái niệm là cấu trúc dữ liệu (mảng, danh sách liên kết, cây, ngăn xếp, hàng đợi,..) và các thuật toán như Tìm kiếm nhị phân, Quy Hoạch động,... Do đó, bài viết này chủ yếu tập trung vào thuật toán - giới thiệu về thuật toán, với 30 câu hỏi phỏng vấn về thuật toán.

Trước hết, câu hỏi đầu tiên và phổ biến nhất với hầu hết mọi người "Thuật toán là gì?". Câu trả lời đầy đủ có thể là: **Thuật toán là một tập hợp hữu hạn các hướng dẫn được xác định rõ ràng, có thể thực hiện được bằng máy tính, thường để giải quyết một lớp vấn đề hoặc để thực hiện một phép tính.**

Thuật toán thường được sử dụng để chỉ định cách tính toán, xử lý dữ liệu, suy luận tự động, ra quyết định tự động và các tác vụ khác nên được thực hiện. Thuật toán là một phương pháp hiệu quả, có thể được biểu diễn trong một khoảng không gian và thời gian hữu hạn, và bằng một ngôn ngữ hình thức được xác định rõ ràng để tính toán một hàm số. Bắt đầu từ trạng thái ban đầu và đầu vào ban đầu (input - có thể trống), khi được thực thi, sẽ tiến hành một hữu hạn các trạng thái kế tiếp được xác định rõ ràng, và cuối cùng là tạo ra đầu ra(output) và dừng ở trạng thái kết thúc. Sự chuyển đổi từ trạng thái này sang trạng thái khác không nhất thiết phải mang tính xác định, một số thuật toán được gọi là thuật toán ngẫu nhiên, kết hợp đầu vào ngẫu nhiên.

### Lợi ích của thuật toán

* Gia tăng sự hiệu quả của một giải pháp đã tồn tại.
* Dễ dàng sử dụng để so sánh hiệu suất của các thuật toán khác nhau cho cùng một vấn đề bằng cách dùng các phương pháp như độ phức tạp thời gian, độ phức tạp không gian,...
* Thuật toán cung cấp một bản thiết kế với các mô tả chi tiết cốt lõi để giải quyết vấn đề.
* Giúp hiểu đúng về luồng hoạt động của chương trình.
* Các thuật toán đánh giá mức độ hoạt động của các phương pháp tiếp cận trong các tình huống khác nhau (Trường hợp tốt nhất, trường hợp xấu nhất, trường hợp trung bình).
* Một thuật toán cũng xác định tài nguyên nào (input/output) là cần thiết.
* Ta có thể định lượng và đánh giá độ phức tạp của vấn đề về thời gian và không gian bằng cách sử dụng thuật toán.
* Chí phí thiết kế sẽ giảm nếu dùng các thuật toán thích hợp.

![](./assets/Need_For_Algorithms.png)

## Câu hỏi phỏng vấn cho Fresher

### 1. Làm thế nào để so sánh hai thuật toán trên cùng một vấn đề ?

Độ phức tạp của một thuật toán là một kỹ thuật được sử dụng để phân loại mức độ hiệu quả của một thuật toán so với các thuật toán khác. Nó tập trung vào kích thước của tập dữ liệu được xử lý ảnh hưởng đến thời gian thực thi như thế nào. Trong lập trình, tính toán độ phức tạp của thuật toán là rất quan trọng. Bạn nên phân loại các thuật toán theo lượng thời gian hoặc không gian mà chúng chiếm dụng và mô tả thời gian hoặc không gian mà chúng chiếm dưới dạng một hàm của kích thước đầu vào.

* **Độ phức tạp thời gian (Complex of Time)**: thời gian chạy của một chương trình được xem như một hàm phụ thuộc vào kích thước đầu vào được gọi là độ phức tạp thời gian.
* **Độ phức tạp không gian (Complex of Space)**: dựa trên không gian mà chương trình yêu cầu để xử lý hoàn tất một tác vụ.

> Trước đây, bộ nhớ phần cứng bị hạn chế nên độ phức tạp không gian là rất quan trong, nhưng ngày nay bộ nhớ máy tính rất lớn, nên khi đề cập đến độ phức tạp người ta chủ yếu tập trung vào độ phức tạp thời gian.

### 2. Trường hợp tốt nhất, xấu nhất và trung bình?

Nền tảng toán học cho hiệu suất thực thi thuật toán được xác định bằng tiệm cận. Ta có thể quyết định trường hợp tốt nhất, xấu nhất và trung bình của một thuật toán bằng cách dùng tiệm cận.

* **Trường hợp tốt nhất:** là tập dữ liệu được sắp xếp sao cho thuật toán hoạt động nhanh nhất hay tốn ít không gian nhất. Ví dụ như trong tìm kiếm nhị phân, trường hợp tốt nhất là khi giá trị cần tìm ở giữa mảng dữ liệu, lúc đó thuật toán có độ phức tạp thời gian là `O(1)`.
* **Trường hợp xấu nhất:** ngược lại với trường hợp tốt nhất, là khi tập dữ liệu khiến thuật toán mất nhiều thời gian và không gian thực thi nhất. Ví dụ, trong quicksort trường hợp xấu nhất là khi giá trị `pivot` là phần tử lớn nhất hoặc nhỏ nhất của `sublist`, lúc này sẽ có độ phức tạp thời gian là `O(n^2)` với n là kích thước của tập dữ liệu cần sắp xếp.
* **Trường hợp trung bình:** theo lý thuyết về độ phức tạp, thì trường hợp trung bình là lượng tài nguyên mà chương trình cần dùng, được tính trung bình trên tất cả đầu vào có thể. Vd, độ phức tạp trung bình của quicksort là `O(n*log(n))`, với n là kích thước của tập dữ liệu cần sắp xếp.

### 3. Bạn hiểu gì về ký hiệu tiệm cận ?

Phân tích tiệm cận là một kỹ thuật được dùng để xác định hiệu quả của một thuật toán mà không dựa vào các thông số kỹ thuật phần cứng và tránh để thuật toán so sánh chính nó với cách tiếp cận lãng phí thời gian. Với hân tích tiệm cận, ký hiệu tiệm cận một kỹ thuật toán học được dùng để chỉ ra độc phức tạp thời gian của thuật toán.

Ta có 3 ký hiệu tiệm cận phổ biến như sau:

- **Ký hiệu theta (θ)**: dùng để xác định chính xác dáng điệu tiệm cận. Nó liên kết các hàm từ bên trên và bên dưới để xác định dáng điệu tiệm cận. Bỏ qua các số hạng bậc thấp và các hằng số đứng đầu là một cách đơn giản để lấy ký hiệu theta cho một biểu thức.

![](./assets/The_Theta_Notation.png)

- **Ký hiệu O lớn**: dùng để xác định cận trên của một thuật toán. Xem xét thuật toán Insert Sort: trong trường hợp tốt nhất nó cần thời gian tuyến tính và trường hợp xấu nhất cần thời gian bậc hai. Insert Sort có độ phức tạp thời gian là (O(n^2)). Nó hữu ích khi ta chỉ có cận trên về độ phức tạp thời gian của thuật toán.

![](./assets/Big_O.png)

- **Ký hiệu omega (Ω)**: dùng để cung cấp cận dưới cho một hàm, ngược với ký hiệu O lớn. Nó hữu ích khi ta chỉ có cận dưới của độ phức tạp thời gian của thuật toán.

![](./assets/Omega.png)

### 4. Viết chương trình đổi giá trị hai số mà không dùng biến tạm

Đây là một câu hỏi thường gặp trong các cuộc phỏng vấn ở nhiều công ty khác nhau. Có nhiều cách để đổi giá trị cho hai số, tuy nhiên ở đây điều kiệu là không được dùng biến tạm. Đối với bài toán này, nếu bạn có thể giải quyết tình huống overflow bạn sẽ để lại ấn tượng tốt với người phỏng vấn.

Giả sử ta có hai số nguyên a và b, với `a=5` và `b=6` ta cần hoán đổi hai số này mà không cần dùng biến tạm, ta có thể làm như sau:

```java
a = a + b;
b = a - b; // this will act like (a+b) - b, and now b equals a.
a = a - b; // this will act like (a+b) - a, and now an equals b.
```

Đã xong, nhưng nó có một vấn đề là nếu phép cộng vượt quá giá trị lớn nhất của kiểu int (như `Integer.MAX_VALUE` trong Java) hoặc nếu phép trừ nhỏ hơn giá trị nhỏ nhất (`Integer.MIN_VALUE`) thì nó sẽ gây ra hiện tượng overflow.

#### Phương thức XOR

Để khắc phục vấn đề trên ta có thể dùng XOR, trong các ngôn ngữ như C, C++ hay Java có một toán tử bit là XOR (`^`).

```java
x = x ^ y; 
y = x ^ y; 
x = x ^ y;
```

### 5. Giải thích về mô hình Chia Để Trị. Liệt kê  các thuật toán sử dụng mô hình này ?

Chia để trị là một mô hình thuật toán, không phải thuật toán. Nó được xây dựng để xử lý một lượng lớn dữ liệu, bằng cách chia nhỏ nó thành từng phần nhỏ hơn và xác định giải pháp cho các phần nhỏ. Nó kết hợp giải pháp của tất cả phần nhỏ thành một giải pháp toàn cục duy nhất. Dưới đây là mô hình của chia để trị:

* **Devider**: Tách bài toán ban đầu thành một tập các bài toán con.
* **Conquer**: Giải quyết từng bài toán con đơn lẻ.
* **Combiner**: Kết hợp giải pháp của các bài toán con thành một giải pháp tổng thể.

![](./assets/Divide_and_Conquer.png)

Các thuật toán dùng mô hình chia để trị:

* Binary Search
* Merge Sort
* Strassen's Matrix Multiplication
* Quick Sort
* Closest pair of points

### 6. Giải thích về thuật toán tham lam và liệt kê các ví dụ sử dụng nó ?

Thuật toán tham lam là một phương pháp nhằm mục địch chọn ra quyết định tối ưu nhất ở mỗi bước con, cuối cùng dẫn đến giải pháp tối ưu tổng thể. Tức là, tại mỗi thời điểm thuật toán sẽ chọn ra câu trả lời tốt nhất hiện có, bất kể hậu quả là gì. Cũng có thể nói, thuật toán luôn chọn câu trả lời tốt nhất ngay lập tức mà không cần cân nhắc tương lai. Các thuật toán tham lam có thể tìm ra câu trả lời không phải là tối ưu nhất trong một số trường hợp.

Các ví dụ sử dụng thuật toán tham lam:

* Prim's Minimal Spanning Tree Algorithm
* Kruskal's Minimal Spanning Tree Algorithm
* Travelling Salesman Problem
* Fractional Knapsack Problem
* Dijkstra's Algorithm
* Job Scheduling Problem
* Graph Map Coloring
* Graph Vertex Cover

### 7. Bạn hiểu gì về thuật toán tìm kiếm ? Liệt kê vài thuật toán tìm kiếm ?

Thuật toán tìm kiếm được sử dụng để tìm kiếm một phần tử hoặc lấy nó ra từ một cấu trúc dữ liệu (thường là một danh sách các phần tử). Các thuật toán này được chia thành hai loại dựa trên loại hoạt động tìm kiếm:

* **Tìm kiếm tuần tự**: Phương pháp này duyệt qua danh sách các phần tử liên tục, kiểm tra từng phần tử và báo cáo nếu phần tử cần tìm có được tìm thấy hay không. Tìm kiếm tuyến tính là một ví dụ về Thuật toán tìm kiếm tuần tự.
* **Tìm kiếm theo khoảng**: các thuật toán này được tạo đặc biệt cho tìm kiếm trên các cấu trúc dữ liệu đã sắp xếp. Vì nó hướng đến tìm kiếm ở trung tâm cấu trúc và chia ra thành các khoảng nhỏ, để tìm kiếm mục tiêu. Các loại thuật toán này hiệu quả hơn nhiều so với tìm kiếm tuần tự. Tìm kiếm Nhị phân là một ví dụ về tìm kiếm theo khoảng

### 8. Mô tả thuật toán tìm kiếm tuyến tính

Để tìm kiếm một phần tử trong một tập hợp phần tử, có thể sử dụng tìm kiếm tuyến tính. Nó hoạt động bằng cách duyệt qua tập phần tử từ đầu đến cuối và quan sát thuộc tính của tất cả phần tử đã đi qua. Giả sử ta có trường hợp với mảng chỉ toàn số nguyên, ta muốn tìm và in tất cả vị trí của phần tử trùng với một giá trị cụ thể (còn gọi là `key` trong tìm kiếm tuyến tính). Tìm kiếm tuyến tính hoạt động như sau:

1. Dùng vòng lặp duyệt qua danh sách phần tử đã cho.
2. Với mỗi lần lặp, so sánh giá trị hiện tại với key.
3. Nếu trùng in ra vị trí của phần tử hiện tại.
4. Chuyển đến phần tử kế tiếp nếu giá trị không trùng.
5. Lặp lại từ 1 đến 4 cho đến khi hết danh sách.

![](./assets/Linear_Search_Algorithm.png)

Độ phức tạp thời gian của thuật toán tìm kiếm tuyến tính là `O(n)` trong đó n là kích thước của danh sách các phần tử và độ phức tạp không gian của nó là không đổi, nghĩa là `O(1)`.

### 9. Mô tả thuật toán tìm kiếm nhị phân

Để áp dụng tìm kiếm nhị phân trên danh sách các phần tử, điều kiện tiên quyết là danh sách các phần tử phải được sắp xếp. Nó dựa trên mô hình thuật toán Chia để Trị. Trong tìm kiếm nhị phân, ta chia khoảng tìm kiếm thành một hai phần để tìm trong danh sách đã sắp xếp. Ta bắt đầu bằng cách tạo khoảng trên toàn bộ danh sách. Nếu giá trị của khoá tìm kiếm nhỏ hơn phần tử ở giữa khoảng, thì khoảng đó được thu hẹp về trước, còn không nó sẽ được thu hẹp về sau. Ta tiếp tục thực hiện chia trên các khoảng nhỏ cho đến khi thu được kết quả. Dưới đây là mô tả thuật toán tìm kiếm nhỉ phân.

1. `x` sẽ được so sánh với phần tử ở giữa
2. Trả về nếu `x` trùng với phần tử ở giữa
3. Ngược lại nếu `x` lớn hơn, `x` chỉ có thể ở nữa phía sau của mảng vì mảng được sắp xếp theo thứ tự tăng dần. Ta lặp lại với nữa mảng con phía sau.
4. Nếu như `x` bé hơn, `x` chỉ có thể ở nữa phía trước của mảng, ta lặp lại với nữa mảng con phía trước.
5. Nếu các khoảng được chia chỉ còn một phần tử(không thể chia nữa), ta dừng tìm kiếm nhị phân.

Độ phức tạp thời gian của tìm kiếm nhị phân là `O(log(n))` với n là kích thước của danh sách phần tử và độ phức tạp không gian là `O(1)`

### 10. Viết ra một thuật toán để thêm một nút vào danh sách liên kết được sắp xếp theo thứ tự tăng dần (duy trì thuộc tính sắp xếp)

Dưới đây là một thuật toán để thêm một nút vào danh sách liên kết được sắp xếp:

1. Kiểm tra danh sách liên kết có rỗng hay không. Nếu có tạo nút `head` và trả về.
2. Kiểm tra giá trị của nút thêm vào có nhỏ hơn nút đầu vào hay không. Nếu có, đặt nó ở đầu và biến nó thành `head`.
3. Nếu không thì thì sử dụng vào lặp để thêm nút đầu vào vào vị trí thích hợp. Bắng cách bắt đầu duyệt từ nút `head` trỏ đến phần tử kế tiếp cho đến khi tìm được nút có giá trị lớn hơn nút đầu vào.
4. Sau khi tìm được vị trí cần chèn thì thực hiện chèn nút.

### 11. Viết thuật toán đếm số nút lá trong cây nhị phân.

Dưới đây là một thuật toán để đếm số lượng nút lá trong cây nhị phân:

1. Nếu nút hiện tại là null, trả về giá trị 0.
2. Nếu gặp phải nút lá, nghĩa là nếu nút trái và nút phải của nút hiện tại đều rỗng, thì trả về 1.
3. Tính đệ quy số nút lá bằng cách cộng số nút lá trong cây con bên trái với số nút lá trong cây con bên phải.

### 12. Quy hoạch động là gì ? Liệt kê các vấn đề sử dụng quy hoạch động ?

![](./assets/Dynamic_Programming.png)

Quy hoạch động chủ yếu là tối ưu hoá đệ quy. Ta có thể sử dụng Quy hoạch động để tối ưu hoá bất kỳ giải pháp đệ quy nào các lời gọi lặp lại cho cùng một đầu vào. Mục đích đơn giản là để lưu trữ kết quả các vấn đề con cho lần tính toán tiếp theo. Độ phức tạp thời gian của sự tối ưu hoá này là làm giảm theo cấp số nhân. Ví dụ: nếu  ta tạo một giải pháp đệ quy đơn giản cho số Fibonacci, thì độ phức tạp về thời gian là cấp số nhân, nhưng nếu ta tối ưu hóa nó bằng cách lưu trữ các câu trả lời cho các bài toán con bằng Quy hoạch động, thì độ phức tạp về thời gian là tuyến tính. 

Code minh hoạ như sau:

**Với đệ quy (không QHĐ)**: Độ phức tạp về thời gian của code đã cho sẽ theo cấp số nhân.

```cpp
int nFibonacci(int n){
   if(n == 0 || n == 1) return n;
   else return nFibonacci(n - 1) + nFibonacci(n - 2);
}
```

**Với đệ quy (dùng QHĐ)**: Độ phức tạp về thời gian của code đã cho sẽ là tuyến tính.

```cpp
int nFibonacci(int n){
   vector<int> fib(n + 1);
    fib[0] = 0;
    fib[1] = 1;
    for(int i = 2;i <= n;i ++){
         fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n]; 
}
```

Một vài vấn đề cần dùng Quy Hoạch động:
- Tìm số Fibonacci thứ n
- Tìm chuỗi con chung dài nhất giữa hai chuỗi.
- Tìm chuỗi con Palindromic dài nhất trong một chuỗi.
- Vấn đề Knapsack (hoặc 0-1) rời rạc.
- Đường đi ngắn nhất giữa hai nút bất kỳ trong biểu đồ (Thuật toán Floyd Warshall).

### 13. Viết thuật toán đảo chuỗi. Ví dụ như nhập vào Hello đảo thành Olleh.

Thuật toán cho đảo chuỗi như sau:

1. Ta có hai biến là `l` và `r`.
2. Gán giá trị cho `l` là 0 và `r` là chiều dãi chuỗi - 1.
3. Hoán đổi giá trị của các ký tự ở vị trí `l` và `r` trong chuỗi.
4. Tăng `l` lên một đơn vị.
5. Giảm `r` xuống một đơn vị.
6. Nếu giá trị `r` lớn hơn `l`, trở về bước 3.
7. Dừng.

### 14. Bạn hiểu gì về thuật toán BFS (Breadth First Search) ?

BFS hoặc Breadth-First Search là một kỹ thuật duyệt đồ thị. Nó bắt đầu bằng cách duyệt qua đồ thị từ nút gốc và đi đến tất cả các nút trong lân cận. Nó chọn nút gần nhất và sau đó truy cập tất cả các nút chưa được truy cập. Cho đến khi nó đến nút mục tiêu, thuật toán lặp lại cùng một phương pháp cho mỗi nút gần nhất.

Thuật toán BFS được đưa ra dưới đây:

1. Đặt `status = 1` làm bước đầu tiên cho tất cả các nút (trạng thái sẵn sàng).
2. Đặt `status` của nút ban đầu A là `2`, tức là trạng thái chờ.
3. Lặp lại các bước 4 và 5 cho đến khi đầy hàng đợi.
4. Dequeue và xử lý nút N từ hàng đợi, thiết lập `status` của nó thành 3, nghĩa là trạng thái đã xử lý.
5. Đặt tất cả nút lân cận của N ở trạng thái sẵn sàng (`status = 1`) vào hàng đợi và chuyển `status` của chúng thành 2 (trạng thái chờ)
6. Thoát.

### 15. Bạn hiểu gì về thuật toán DFS (Depth First Search) ?

Tìm kiếm đầu tiên theo chiều sâu hoặc DFS là một kỹ thuật để duyệt qua hoặc các cấu trúc dữ liệu như cây và đồ thị. Thuật toán bắt đầu ở nút gốc (trong trường hợp đồ thị, bất kỳ nút ngẫu nhiên nào cũng có thể được sử dụng làm nút gốc) và kiểm tra từng nhánh càng xa càng tốt trước khi kiểm tra lại. Vì vậy, ý tưởng cơ bản là bắt đầu tại gốc hoặc bất kỳ nút nào tùy ý và đánh dấu nó, sau đó tiến tới nút không được đánh dấu tiếp theo và lặp lại cho đến khi không còn nút nào chưa được đánh dấu. Sau đó, quay lại và kiểm tra xem có bất kỳ nút nào chưa được đánh dấu để vượt qua không. Cuối cùng, in các nút của đường đi. Thuật toán DFS được đưa ra dưới đây:

1. Tạo một hàm đệ quy lấy chỉ mục của nút và một mảng đã đi qua làm đầu vào.
2. Đặt nút hiện tại thành nút đã truy cập và hiển thị nó.
3. Gọi hàm đệ quy với chỉ mục của nút liền kề sau khi đi ngang qua tất cả các nút lân cận và không được đánh dấu.

## Câu hỏi phỏng vấn cho Experienced

### 16. Cách mà thuật toán mã hoá hoạt động ?

Quá trình chuyển đổi từ văn bản thuần (plaintext) thành một dạng mã bí mật "ciphertext" được gọi là quá trình mã hoá. Trong mật mã học, kỹ thuật này sử dụng một chuỗi còn gọi là "khoá" để chuyển đổi văn bản. Khoá càng lớn càng có nhiều bản tiềm năng để tạo thành bản mã hoá - ciphertext. Phần lớn các thuật toán mã hóa sử dụng các khối đầu vào cố định với độ dài từ 64 đến 128 bit, trong khi các thuật toán khác sử dụng kỹ thuật dòng.

### 17. Các thuật toán mã hoá phổ biến hiện nay 

Một số thuật toán mật mã được sử dụng rộng rãi nhất như sau:

- IDEA
- CAST
- CMEA
- 3-way
- Blowfish
- GOST
- LOKI
- DES and Triple DES.

### 18. Mô tả thuật toán merge sort

Merge sort (tạm dịch là sắp xếp trộn) là một thuật toán sắp xếp đa dụng có hiệu quả rất cao. Nó được xếp vào thể loại sắp xếp so sánh. Năm 1945, John von Neumann đã phát minh ra phương pháp sắp xếp trộn, dựa trên mô hình thuật toán chia để trị. Sau đây là cách sắp xếp trộn hoạt động:
- Chia danh sách chưa được sắp xếp thành n danh sách con,  mỗi danh sách có một phần tử (danh sách một phần tử được coi là đã sắp xếp).
- Gộp các danh sách con nhiều lần để tạo ra danh sách con được sắp xếp mới cho đến khi chỉ còn lại một danh sách con. Danh sách con cuối cùng chính là danh sách đã sắp xếp.

Độ phức tạp thời gian của sắp xếp trộn là `O(n*log(n))` với n là kích thước của danh sách phần tử cần sắp xếp, còn độ phức tạp không gian là `O(n)`.

![](./assets/merga_sort_algorithm.png)

### 19. Mô tả thuật toán quick sort

Quicksort (tạm dịch là sắp xếp nhanh) là một thuật toán sắp xếp tại chỗ (có nghĩa là một thuật toán biến đổi đầu vào không sử dụng cấu trúc dữ liệu phụ trợ). Nó được tạo ra bởi nhà khoa học máy tính người Anh Tony Hoare vào năm 1959 và được công bố vào năm 1961, đến nay nó vẫn là một thuật toán sắp xếp phổ biến. Nó có thể nhanh hơn một chút so với merge sort và nhanh hơn hai hoặc ba lần so với heap sort khi được thực hiện đúng cách. 

Quicksort dựa trên mô hình thuật toán chia để trị. Nó thực hiện bằng cách chọn một phần tử "pivot" từ mảng và tách mảng thành hai mảng con dựa trên việc các phần tử còn lại lớn hơn hay bé hơn pivot. Do đó, nó còn được gọi là sắp xếp trao đổi phân vùng. Mảng con sau đó sẽ được sắp xếp với đệ quy.Điều này có thể được thực hiện tại chỗ, chỉ cần một ít RAM bổ sung để sắp xếp.

Sau đây là các bước cho quicksort in-place:

- Nếu có ít hơn hai phần tử trong phạm vi, hãy trả lại ngay lập tức vì không thể làm gì khác. 

- Nếu không, hãy chọn giá trị `pivot`, là giá trị xuất hiện trong phạm vi (cách lựa chọn phụ thuộc vào quy trình phân vùng và có thể liên quan đến tính ngẫu nhiên).

- Phân vùng phạm vi bằng cách sắp xếp lại thứ tự các phần tử của nó trong khi xác định điểm phân chia sao cho tất cả các phần tử có giá trị nhỏ hơn `pivot` đều xuất hiện trước và tất cả các phần tử có giá trị lớn hơn `pivot` sẽ xuất hiện sau nó; các phần tử có giá trị bằng `pivot` có thể xuất hiện theo một trong hai hướng. Hầu hết các thủ tục phân vùng đảm bảo rằng giá trị kết thúc tại điểm phân chia bằng với `pivot` và hiện đang ở vị trí cuối cùng của nó vì có ít nhất một phiên bản của `pivot` (nhưng việc kết thúc nhanh chóng không phụ thuộc vào điều này, miễn là phạm vi phụ nhỏ hơn so với phạm vi ban đầu được tạo ra).

- Áp dụng quicksort đệ quy lên phạm vi con cho trước và sau điểm phân chia, loại bỏ phần tử bằng `pivot` tại điểm phân chia khỏi cả hai phạm vi. (Nếu phân vùng tạo ra một phạm vi con có khả năng lớn hơn ranh giới với tất cả các phần tử được biết là bằng với `pivot`, thì chúng cũng có thể bị bỏ qua.)

Phân tích toán học của Quicksort cho thấy rằng, trường hợp trung bình sẽ mất độ phức tạp thời gian `O(n * log(n))` để sắp xếp n mục. Trong trường hợp xấu nhất, nó phải thực hiện với độ phức tạp thời gian là `O(n ^ 2)`.

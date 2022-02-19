# Câu hỏi phỏng vấn Kubernetes

![](./assets/kubernetes.jpg)

## Kubernetes là gì?

Kubernetes là công nghệ phân phối mã nguồn mở giúp ta lên lịch và thực thi container ứng dụng trên nhiều cụm. Kubernetes bao gồm hai kiểu tài nguyên:

**Master** => Điều phối tất cả các hoạt động trong cụm, ví dụ, => lập lịch ứng dụng, duy trì trạng thái của ứng dụng, mở rộng ứng dụng và phát hành ra các bản cập nhật mới

**Node** => Một nút là một phiên bản của hệ điều hành đóng vai trò là một worker trong cụm Kubernetes.

Ngoài ra, Node có hai thành phần:

- Kubelet => Tác nhân quản lý và giao tiếp với master
- Tool (Docker/container) => Công cụ để chạy các hoạt động container

![](./assets/Kubernetes_Cluster.jpg)

Nó được thiết kế dựa trên cơ sở là một tập hợp các container được kết hợp lỏng lẻo, tập trung vào việc triển khai, duy trì và mở rộng khối lượng công việc. Hoạt động như một động cơ để giải quyết trạng thái bằng cách hội tụ trạng thái thực tế và trạng thái mong muốn của hệ thống (tự phục hồi). Ẩn khỏi phần cứng bên dưới của các nút và cung cấp giao diện thống nhất cho khối lượng công việc được triển khai và sử dụng nhóm tài nguyên (phần cứng) được chia sẻ để đơn giản hóa việc triển khai.

Pod là đơn vị nhỏ nhất của các đối tượng có thể được triển khai trên Kubernetes, Kubernetes đóng gói một hoặc nhiều container vào một cấu trúc cấp cao hơn được gọi là pod.

**POD** luôn chạy trên một nút nhưng chúng chia sẻ một số tài nguyên có thể là volume chung, IP duy nhất của cụm, thông tin về cách chạy từng container. Tất cả các container chứa trong pod sẽ được lập lịch trên một nút tương đương.

Các Service là cách thống nhất để truy cập khối lượng công việc trên các nhóm, Control plane là cốt lõi của Kubernetes, là một máy chủ API cho phép bạn truy vấn, thao tác trạng thái của một đối tượng trong Kubernetes.

![](./assets/Pod_Network.jpg)

Hình ảnh sau đây mô tả luồng công việc của Kubernetes từ cấp độ cao, trong đó file YAML dùng để mô tả ứng dụng, còn được gọi là file cấu hình hoặc thông số kỹ thuật để có thể triển khai các ứng dụng được đóng gói dưới dạng pod trong cụm hoặc nút.

![](./assets/Kubernetes_Workflow.jpg)

## Câu hỏi phỏng vấn Kubernetes cho Fresher?

### 1. Làm thế nào để thực hiện bảo trì trên nút K8?

Bất cứ khi nào có sẵn các bản vá bảo mật, quản trị viên Kubernetes phải thực hiện nhiệm vụ bảo trì để áp dụng bản vá bảo mật cho container đang chạy nhằm ngăn nó khỏi lỗ hổng bảo mật, đây thường là một phần không thể tránh khỏi trong quản trị. Hai lệnh sau rất hữu ích để thoát nút K8s một cách an toàn.

```
kubectl cordon
kubectl drain –ignore-daemon set
```

Lệnh đầu tiên chuyển node sang chế độ bảo trì hoặc làm cho node không khả dụng, tiếp theo là lệnh `kubectl drain` sẽ loại bỏ pod khỏi node. Sau khi lệnh thoát thành công, bạn có thể thực hiện bảo trì.

Lưu ý nếu bạn muốn thực hiện bảo trì trên một pod đơn, có thể dùng hai lệnh sau:

- `kubectl get nodes`: hiển thị tất cả node
- `kubectl drain <node name>`: thoát một node cụ thể

### 2. Làm cách nào để kiểm soát việc sử dụng tài nguyên của POD?

Ta có thể dùng limit và request:

- **Request:** Số lượng tài nguyên đang được yêu cầu cho một container. Nếu một container vượt quá yêu cầu tài nguyên của nó, nó sẽ được điều chỉnh trở lại.
- **Limit:** Giới hạn trên đối với các tài nguyên mà một container duy nhất có thể sử dụng. Nếu nó cố gắng vượt quá giới hạn được xác định trước này, nó có thể bị chấm dứt nếu K8 quyết định rằng một container khác cần những tài nguyên này. Nếu bạn nhạy cảm với việc khởi động lại pod, bạn nên đặt tổng tất cả các giới hạn tài nguyên container nhỏ hơn hoặc bằng tổng dung lượng tài nguyên cho cụm của bạn.

Ví dụ:

```
apiVersion: v1
kind: Pod
metadata:
 name: demo
spec:
 containers:
 - name: example1
 image:example/example1
 resources:
   requests:
     memory: "_Mi"
     cpu: "_m"
   limits:
     memory: "_Mi"
     cpu: "_m"
```

### 3. Các dịch vụ K8 khác nhau chạy trên một node?

Cụm K8 bao gồm hai kiểu nút là executor node và dịch vụ master.

**Executor node:**

- Kube-proxy: dịch vụ này có trách nhiệm giao tiếp của pods trong cụm và đến bên ngoài mạng, nó chạy trên mọi nút. Dịch vụ này chịu trách nhiệm duy trì giao thức mạng khi pod của bạn thiết lập một giao tiếp mạng.

- kubelet: Mỗi nút chạy một dịch vụ kubelet để cập nhật nút đang chạy tương ứng với file cấu hình (YAML hay JSON).

*Lưu ý*: dịch vụ kubelet chỉ dành cho các container được tạo bởi Kubernetes.

**Dịch vụ master**

- Kube-apiserver: Dịch vụ master API hành động như một entry point đến cụm K8.
- Kube-scheduler: Lập lịch POD theo các tài nguyên có sẵn trên các executor node.
- Kube-controller-manager: là một vòng điều khiển theo dõi trạng thái được chia sẻ của cụm thông qua apiserver và thực hiện các thay đổi cố gắng di chuyển trạng thái hiện tại sang trạng thái ổn định mong muốn.

### 4. PBD là gì?

Quản trị viên Kubernetes có thể tạo một loại triển khai: PodDisruptBudget (PBD) để ứng dụng có tính khả dụng cao, nó đảm bảo rằng số lượng tối thiểu các pods đang chạy được thừa nhận như đã đề cập trong thuộc tính `minAvailable`. Điều này rất hữu ích khi thực hiện thoát, nơi thoát sẽ tạm dừng cho đến khi PDB được thừa nhận để đảm bảo tính sẵn sàng cao (High Availability) của ứng dụng. Spec sau đây cũng hiển thị minAvailable là 2 ngụ ý số lượng tối thiểu của một pods có sẵn (ngay cả sau cuộc bầu cử).

```
apiVersion: policy/v1beta1
kind: PodDisruptionBudget
metadata:
 name: zk-pdb
spec:
 minAvailable: 2
 selector:
   matchLabels:
     app: zookeeper
```

### 5. Init container là gì?

Init Containers là các container chạy trước khi container chính chạy với ứng dụng được container hóa của bạn. Chúng thường chứa các script thiết lập chuẩn bị môi trường cho ứng dụng được chứa trong container của bạn. Init Containers cũng đảm bảo môi trường máy chủ rộng hơn đã sẵn sàng để ứng dụng của bạn bắt đầu chạy.

### 6. Vai trò của cân bằng tải trong Kubernetes?

Load balancer (cân bằng tải) là một cách để phân phối lưu lượng trên nhiều server, nó hữu ích cho việc đảm bảo ứng dụng luôn khả dụng với người dùng.

![](./assets/Load_Balancer.jpg)

Trong Kubernetes, như hình trên tất cả lưu lượng truy cập đến một địa chỉ IP đơn trên bộ cân bằng tải, để lộ dịch vụ của bạn với internet bên ngoài, nó định tuyến các lưu lượng truy cập đến một pod (thông qua dịch vụ) cụ thể bằng thuật toán Round-Robin. Ngay cả khi bất kỳ pod nào gặp sự cố, cân bằng tải cũng được thông báo để không chuyển lưu lượng truy cập đến nút không khả dụng đó. Do đó, bộ cân bằng tải trong Kubernetes chịu trách nhiệm phân phối một tập hợp các tác vụ (lưu lượng) đến các nhóm.

### 7. Các điều cần biết để bảo mật Kubernetes?

Mặc định, POD có thể giao tiếp với bất kỳ POD nào khác, ta có thể thiết lập chính sách mạng để giới hạn các giao tiếp đó.
- RBAC (Role-based access control) để thu hẹp các quyền.
- Dùng namespace để thiết lập ranh giới bảo mật.
- Thiết lập chính sách điều khiển quản trị để tránh chạy các container đặc quyền.
- Bật logging kiểm tra.

### 8. Cách giám sát cụm Kubernetes?

Prometheus dùng cho giám sát Kubernetes. Hệ sinh thái Prometheus bao gồm các thành phần sau:
- Server chính Prometheus nơi scrape và lưu trữ dữ liệu thời gian
- Thư viện client cho các lệnh code ứng dụng.
- Cổng push cho hỗ trợ công việc ngắn hạn.
- Exporter đặc biệt cho dịch vụ như StatsD, HAProxy, Graphite,...
- Quản lý cảnh báo để xử lý cảnh báo trên các công cụ hỗ trợ khác nhau.

### 9. Lấy logs trung tâm của POD?

Kiến trúc này phụ thuộc vào ứng dụng và nhiều yếu tố khác. Sau đây là các mẫu logging phổ biến

- Node level logging agent.
- Streaming sidecar container.
- Sidecar container với logging agent.
- Xuất trực tiếp logs từ ứng dụng.

Trong quá trình thiết lập, journalbeat và filebeat đang chạy dưới dạng daemonset. Các logs được thu thập bởi những thứ này được chuyển sang kafka, cuối cùng được chuyển vào ngăn xếp ELK.

Điều tương tự cũng có thể thực hiện được bằng cách sử dụng ngăn xếp EFK và fluentd-bit.
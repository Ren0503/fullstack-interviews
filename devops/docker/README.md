# Câu hỏi phỏng vấn Docker

![](./assets/docker.jpg)

## Giới thiệu Docker

Docker là một nền tảng mã nguồn mở rất phổ biến và mạnh mẽ được sử dụng để xây dựng, triển khai và chạy các ứng dụng. Docker cho phép bạn tách ứng dụng/phần mềm khỏi cơ sở hạ tầng bên dưới.

## Container là gì?

Container là một đơn vị tiêu chuẩn của phần mềm đi kèm với các phần phụ thuộc để các ứng dụng có thể được triển khai nhanh chóng và đáng tin cậy trên các nền tảng tính toán khác nhau.

Docker có thể được hình dung như một con tàu lớn (docker) chở những thùng sản phẩm (container) khổng lồ.

Docker container không yêu cầu cài đặt một hệ điều hành riêng biệt. Docker chỉ dựa vào hoặc sử dụng các tài nguyên của nhân và chức năng của nó để phân bổ chúng cho CPU và bộ nhớ, nó dựa vào chức năng của nhân và sử dụng cách ly tài nguyên cho CPU và bộ nhớ, đồng thời các namespace riêng biệt để tách biệt chế độ xem của ứng dụng đối với OS (hệ điều hành ).

![](./assets/docker-container.png)

## Tại sao học Docker

Phát triển ứng dụng không chỉ đơn thuần là viết code! Chúng liên quan đến rất nhiều việc hậu trường như sử dụng nhiều framework và kiến ​​trúc cho mọi giai đoạn trong vòng đời của nó, điều này làm cho quá trình trở nên phức tạp và đầy thử thách. Sử dụng bản chất của container hóa giúp các nhà phát triển đơn giản hóa và tăng tốc hiệu quả quy trình làm việc của ứng dụng, đồng thời cho phép họ tự do phát triển bằng cách sử dụng lựa chọn công nghệ và môi trường phát triển của riêng họ.

- Tất cả những khía cạnh này tạo thành phần cốt lõi của DevOps, điều này càng trở nên quan trọng hơn đối với bất kỳ nhà phát triển nào cũng cần biết những điều này để cải thiện năng suất, thúc đẩy sự phát triển nhanh chóng cùng với việc ghi nhớ các yếu tố về khả năng mở rộng ứng dụng và quản lý tài nguyên hiệu quả hơn.
- Hãy tưởng tượng container như một hộp rất nhẹ được cài đặt sẵn với tất cả các package, phần phụ thuộc, phần mềm theo yêu cầu của ứng dụng của bạn, chỉ cần triển khai production với những thay đổi cấu hình tối thiểu.
- Rất nhiều tổ chức như PayPal, Spotify, Uber, v.v. sử dụng Docker để đơn giản hóa các hoạt động và đưa cơ sở hạ tầng và bảo mật đến gần hơn để tạo ra các ứng dụng an toàn hơn.
- Mang tính di động, Container có thể được triển khai trên nhiều nền tảng như máy ảo, nền tảng Kubernetes, v.v. theo yêu cầu của quy mô hoặc nền tảng mong muốn.

## Câu hỏi phỏng vấn Docker cho Fresher

### 1. Giải thích về container trong Docker?

- Nói một cách đơn giản nhất, container bao gồm các ứng dụng và tất cả các phụ thuộc của chúng.
- Chúng chia sẻ nhân và tài nguyên hệ thống với các container khác và chạy như các hệ thống biệt lập trong hệ điều hành chủ.
- Mục đích chính của container là loại bỏ sự phụ thuộc vào cơ sở hạ tầng trong khi triển khai và chạy các ứng dụng. Điều này có nghĩa là bất kỳ ứng dụng được chứa trong container nào cũng có thể chạy trên bất kỳ nền tảng nào bất kể cơ sở hạ tầng đang được sử dụng bên dưới.
- Về mặt kỹ thuật, chúng chỉ là các phiên bản runtime của docker image.

### 2. Docker image là gì?

Chúng là các gói thực thi (được đóng gói với code ứng dụng và phần phụ thuộc, gói phần mềm, v.v.) nhằm mục đích tạo container. Docker image có thể được triển khai cho bất kỳ môi trường docker nào và các container có thể được xoay ở đó để chạy ứng dụng.

### 3. DockerFile là gì?

Nó là một file văn bản có tất cả các lệnh cần được chạy để xây dựng một image nhất định.

![](./assets/Docker_File.png)

### 4. Chức năng của hypervisor là gì?

Hypervisor là một phần mềm giúp cho quá trình ảo hóa diễn ra vì nó đôi khi được gọi là Virtual Machine Monitor. Điều này phân chia tài nguyên của hệ thống máy chủ và phân bổ chúng cho từng môi trường khách được cài đặt.

![](./assets/Hypervisor.png)

Điều này có nghĩa là nhiều hệ điều hành có thể được cài đặt trên một hệ thống máy chủ duy nhất. Hypervisor có 2 loại:

1. Native Hypervisor: Loại này còn được gọi là Bare-metal Hypervisor và chạy trực tiếp trên hệ thống máy chủ bên dưới, điều này cũng đảm bảo quyền truy cập trực tiếp vào phần cứng máy chủ, đó là lý do tại sao nó không yêu cầu hệ điều hành cơ bản.
2. Hosted Hypervisor: Loại này sử dụng hệ điều hành máy chủ cơ bản đã được cài đặt hệ điều hành hiện có.

### 5. Docker compose là gì?

Nó là một file YAML bao gồm tất cả các chi tiết liên quan đến các dịch vụ, mạng và khối lượng khác nhau cần thiết để thiết lập ứng dụng dựa trên Docker. Vì vậy, docker-compose được sử dụng để tạo nhiều container, lưu trữ chúng và thiết lập giao tiếp giữa chúng. Với mục đích giao tiếp giữa các container, các cổng được tiếp xúc bởi từng container.

### 6. Docker namespace là gì?

Namespace về cơ bản là một tính năng của Linux đảm bảo phân vùng tài nguyên hệ điều hành theo cách loại trừ lẫn nhau. Điều này hình thành khái niệm cốt lõi đằng sau quá trình container hóa khi namespace giới thiệu một lớp cách ly giữa các container. Trong docker, namespace đảm bảo rằng các container có thể di động và chúng không ảnh hưởng đến máy chủ bên dưới. Ví dụ về các loại namespace hiện đang được Docker hỗ trợ - PID, Mount, User, Network, IPC.

### 7. Cách hiển thị trạng thái của tất cả docker container bằng dòng lệnh?

```
docker ps -a
```

### 8. Dữ liệu được lưu trữ trong container sẽ bị mất trong những trường hợp nào?

Dữ liệu của container vẫn ở trong đó cho đế khi bạn xóa container.

### 9. Docker image registry?

Theo thuật ngữ đơn giản, Docker image registry là một khu vực lưu trữ các docker image. Thay vì chuyển đổi các ứng dụng thành container mỗi lần, một nhà phát triển có thể sử dụng trực tiếp các iamge được lưu trữ trong registry.
Docker image registry có thể là công khai hoặc riêng tư và DockerHub là tổ chức đăng ký công khai phổ biến và nổi tiếng nhất hiện có.

### 10. Các thành phần trong Docker?

Có 3 thành phần Docker là:

Docker Client: This component performs “build” and “run” operations for the purpose of opening communication with the docker host.
Docker Host: This component has the main docker daemon and hosts containers and their associated images. The daemon establishes a connection with the docker registry.
Docker Registry: This component stores the docker images. There can be a public registry or a private one. The most famous public registries are Docker Hub and Docker Cloud.

![](./assets/docker_components.png)

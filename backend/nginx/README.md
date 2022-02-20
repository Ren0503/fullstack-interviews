# Câu hỏi phỏng vấn Nginx

![](./assets/nginx.jpg)

## Nginx là gì?

NGINX là một web server mạnh mẽ mã nguồn mở. Nginx sử dụng kiến trúc đơn luồng, hướng sự kiện vì thế nó hiệu quả hơn Apache server. Nó cũng có thể làm những thứ quan trọng khác, chẳng hạn như load balancing, HTTP caching, hay sử dụng như một reverse proxy.

Những công ty lớn sử dụng NGINX bao gồm: Autodesk, Atlassian, Intuit, T-Mobile, GitLab, DuckDuckGo, Microsoft, IBM, Google, Adobe, Salesforce, VMWare, Xerox, LinkedIn, Cisco, Facebook, Target, Citrix Systems, Twitter, Apple, Intel và nhiều công ty khác.

NGINX được phát triển bởi Igor Sysoev năm 2002, với phiên bản phát hành công khai đầu tiên vào tháng 10 năm 2004. Igor xem phần mềm này ban đầu như một câu trả lời cho vấn đề C10k (là một vấn đề liên quan đến vấn đề hiệu suất xử lý 10.000 kết nối cùng lúc).

Với mục tiêu của NGINX là tối ưu hóa hiệu xuất, nên nó thường vượt mặt các máy chủ web phổ biến khác trong các bài kiểm tra benchmark. Đặc biệt trong các trường hợp cần phục vụ nội dung tĩnh (file hình ảnh, css, js, text,..) và/hoặc các yêu cầu truy vấn đồng thời số lượng lớn (high concurrent request).

## Mục lục

[### 1. Nginx hoạt động như thế nào?](#1-nginx-ho%E1%BA%A1t-%C4%91%E1%BB%99ng-nh%C6%B0-th%E1%BA%BF-n%C3%A0o)

[### 2. Các tính năng của Nginx Server?](#2-c%C3%A1c-t%C3%ADnh-n%C4%83ng-c%E1%BB%A7a-nginx-server)

[3. Sự khác biệt giữa Nginx và Apache?](#3-s%E1%BB%B1-kh%C3%A1c-bi%E1%BB%87t-gi%E1%BB%AFa-nginx-v%C3%A0-apache)

[4. Nginx xử lý yêu cầu HTTP như thế nào?](#4-nginx-x%E1%BB%AD-l%C3%BD-y%C3%AAu-c%E1%BA%A7u-http-nh%C6%B0-th%E1%BA%BF-n%C3%A0o)

[5. Trong Nginx, làm cách nào để ngăn chặn các yêu cầu xử lý với tên server không xác định?](#5-trong-nginx-l%C3%A0m-c%C3%A1ch-n%C3%A0o-%C4%91%E1%BB%83-ng%C4%83n-ch%E1%BA%B7n-c%C3%A1c-y%C3%AAu-c%E1%BA%A7u-x%E1%BB%AD-l%C3%BD-v%E1%BB%9Bi-t%C3%AAn-server-kh%C3%B4ng-x%C3%A1c-%C4%91%E1%BB%8Bnh)

[6. Ưu điểm của "reverse proxy server"?](#6-%C6%B0u-%C4%91i%E1%BB%83m-c%E1%BB%A7a-%22reverse-proxy-server%22)

[7. Cách dùng Nginx tốt nhất?](#7-c%C3%A1ch-d%C3%B9ng-nginx-t%E1%BB%91t-nh%E1%BA%A5t)

[8. Tiến trình master và worker trong Nginx?](#8-ti%E1%BA%BFn-tr%C3%ACnh-master-v%C3%A0-worker-trong-nginx)

[9. Giải thích cách khởi động Nginx ở cổng khác 80?](#9-gi%E1%BA%A3i-th%C3%ADch-c%C3%A1ch-kh%E1%BB%9Fi-%C4%91%E1%BB%99ng-nginx-%E1%BB%9F-c%E1%BB%95ng-kh%C3%A1c-80)

[10. Có thể thay thế lỗi 502 thành 503 trong Nginx không?](#10-c%C3%B3-th%E1%BB%83-thay-th%E1%BA%BF-l%E1%BB%97i-502-th%C3%A0nh-503-trong-nginx-kh%C3%B4ng)

[11. Trong Nginx, làm thế nào giữ dấu gạch chéo trong URLs?](#11-trong-nginx-l%C3%A0m-th%E1%BA%BF-n%C3%A0o-gi%E1%BB%AF-d%E1%BA%A5u-g%E1%BA%A1ch-ch%C3%A9o-trong-urls)

[12. ngx_http_upstream_module là gì?](#12-ngxhttpupstreammodule-l%C3%A0-g%C3%AC)

[13. Vấn đề C10K là gì?](#13-v%E1%BA%A5n-%C4%91%E1%BB%81-c10k-l%C3%A0-g%C3%AC)

[14. Cách dùng stub_status và sub_filter directives?](#14-c%C3%A1ch-d%C3%B9ng-stubstatus-v%C3%A0-subfilter-directives)

[15. Giải thích Nginx có hỗ trợ nén yêu cầu lên upstream không?](#15-gi%E1%BA%A3i-th%C3%ADch-nginx-c%C3%B3-h%E1%BB%97-tr%E1%BB%A3-n%C3%A9n-y%C3%AAu-c%E1%BA%A7u-l%C3%AAn-upstream-kh%C3%B4ng)

[16. Cách lấy thời gian hiện tại trong Nginx?](#16-c%C3%A1ch-l%E1%BA%A5y-th%E1%BB%9Di-gian-hi%E1%BB%87n-t%E1%BA%A1i-trong-nginx)

[17. Giải thích -s trong Nginx server?](#17-gi%E1%BA%A3i-th%C3%ADch--s-trong-nginx-server)

[18. Cách thêm module vào Nginx server?](#18-c%C3%A1ch-th%C3%AAm-module-v%C3%A0o-nginx-server)

## Câu hỏi phỏng vấn Nginx

### 1. Nginx hoạt động như thế nào?

Nginx được phát triển cho các mục đích tối ưu việc sử dụng (RAM) bộ nhớ thấp nhưng phục vụ được nhiều kết nối đồng thời cao hơn. Nginx sử dụng kiến trúc hướng sự kiện (event-driven) bất đồng bộ (asynchronous) và có khả năng mở rộng. Ngay cả khi bạn không cần phải xử lý hàng ngàn truy vấn đồng thời, thì bạn vẫn nên sử dụng Nginx do hiệu suất cao và yêu cầu bộ nhớ thấp của Nginx so với Apache.

### 2. Các tính năng của Nginx Server?

- Có khả năng xử lý hơn 10.000 kết nối cùng lúc với bộ nhớ thấp.
- Phục vụ tập tin tĩnh (static files) và lập chỉ mục tập tin.
- Tăng tốc reverse proxy bằng bộ nhớ đệm (cache), cân bằng tải đơn giản và khả năng chịu lỗi.
- Hỗ trợ tăng tốc với bộ nhớ đệm của FastCGI, uwsgi, SCGI, và các máy chủ memcached.
- Kiến trúc modular, tăng tốc độ nạp trang bằng nén gzip tự động.
- Hỗ trợ mã hoá SSL và TLS.
- Cấu hình linh hoạt; lưu lại nhật ký truy vấn
- Chuyển hướng lỗi 3XX-5XX
- Rewrite URL (URL rewriting) dùng regular expressions
- Hạn chế tỷ lệ đáp ứng truy vấn
- Giới hạn số kết nối đồng thời hoặc truy vấn từ 1 địa chỉ
- Khả năng nhúng mã PERL
- Hỗ trợ và tương thích với IPv6
- Hỗ trợ WebSockets
- Hỗ trợ truyền tải file FLV và MP4

### 3. Sự khác biệt giữa Nginx và Apache?

| Nginx | Apache |
|-|-|
| Là web server dựa trên sự kiện | Là web server dựa trên tiến trình |
| Tất cả yêu cầu được xử lý đơn luồng | Mỗi luồng xử lý một yêu cầu đơn |
| Nginx tránh ý tượng tiến trình con | Apache dựa trên tiến trình con |
| Nginx thiên về tốc độ | Apache thiên về sức mạnh |
| Nginx tốt hơn khi nói đến mức tiêu thụ bộ nhớ và kết nối | Apache không đạt chuẩn khi nói đến mức tiêu thụ bộ nhớ và kết nối |
| Nginx tốt hơn khi muốn cân bằng tải | Apache sẽ từ chối các kết nối mới khi lưu lượng đạt đến giới hạn của các tiến trình |
| Nginx không hỗ trợ hệ điều hành như IBMi và OpenVMS | Apache hỗ trợ nhiều hệ điều hành hơn |
| Nginx chỉ đi kèm tính năng cốt lỗi | Apache cung cấp nhiều hàm hơn Nginx |
| Hiệu suất và khả năng mở rộng không phụ thuộc phần cứng | Phụ thuộc phần cứng như CPU hay bộ nhớ |

### 4. Nginx xử lý yêu cầu HTTP như thế nào?

Nginx sử dụng react pattern. Event loop chính đợi hệ điều hành báo hiệu một sự kiện sẵn sàng - sao cho dữ liệu có thể truy cập để đọc từ một socket, tại thời điểm đó, nó được đọc vào bộ đệm và được xử lý. Một luồng đơn có thể phục vụ hàng chục nghìn kết nối đồng thời.  

### 5. Trong Nginx, làm cách nào để ngăn chặn các yêu cầu xử lý với tên server không xác định?

```
Server {
    listen 80;

    server_name "";

    return 444;
}
```

Ở đây, tên server được giữ dưới dạng một chuỗi trống sẽ khớp với yêu cầu mà không có trường tiêu đề **Host** và code không chuẩn 444 của Nginx đặc biệt được trả về sẽ chấm dứt kết nối.

### 6. Ưu điểm của "reverse proxy server"?

Reverse proxy server có thể ẩn sự hiện diện và đặc điểm của server gốc. Nó hoạt động như một trung gian giữa internet cloud và web server. Nó tốt cho lý do bảo mật, đặc biệt là khi bạn đang sử dụng các dịch vụ lưu trữ web.

### 7. Cách dùng Nginx tốt nhất?

Cách sử dụng tốt nhất Nginx server là triển khai nội dung HTTP động trên mạng bằng cách sử dụng server ứng dụng SCGI, WSGI, trình xử lý FastCGI cho script. Nó cũng có thể hoạt động như một bộ cân bằng tải.

### 8. Tiến trình master và worker trong Nginx?

- **Tiến trình master:** nó đọc cũng như đánh giá cấu hình và duy trì tiến trình worker.
- **Tiến trình worker:** nó xử lý yêu cầu thực.

### 9. Giải thích cách khởi động Nginx ở cổng khác 80?

Để khởi động Nginx ở các công khác, ta đi đến `/etc/Nginx/sites-enabled/` và nếu đây là file mặc định, thì bạn phải mở file có tên là "default". Chỉnh sửa file và sửa cổng mà bạn muốn

### 10. Có thể thay thế lỗi 502 thành 503 trong Nginx không?

- 502= Bad gateway
- 503= Server overloaded

Có thể, nhưng phải đảm bảo rằng `fastcgi_intercept_errors` được đặt ON, và sử dụng điều hướng lỗi trang.

```
Location / {

fastcgi_pass 127.0.01:9001;

fastcgi_intercept_errors on;

error_page 502 =503/error_page.html;

#...

}
```

### 11. Trong Nginx, làm thế nào giữ dấu gạch chéo trong URLs?

Để giữ dấu gạch chéo (/) trong URL, ta có thể dùng `merge_slashes_off;`

Cú pháp: `merge_slashes [on/off]`

Mặc định: `merge_slashes_on`

Ngữ cảnh: http, server

### 12. ngx_http_upstream_module là gì?

ngx_http_upstream_module được dùng để xác định nhóm server có thể tham chiếu bằng pass fastcgi, pass proxy, pass uwsgi, pass memcached và scgi pass directives.

### 13. Vấn đề C10K là gì?

Vấn đề C10K là do socket mạng không thể xử lý một số lượng lớn máy khách (10.000 người dùng) cùng một lúc.

### 14. Cách dùng stub_status và sub_filter directives?

* **Stub_status directive:** Chỉ thị này được sử dụng để biết trạng thái hiện tại của Nginx như kết nối đang hoạt động hiện tại, tổng số kết nối được chấp nhận và số lượng kết nối đọc/ghi/ chờ hiện tại được xử lý
* **Sub_filter directive:** Nó được sử dụng để tìm kiếm và thay thế nội dung theo phản hồi và khắc phục nhanh chóng dữ liệu cũ.

### 15. Giải thích Nginx có hỗ trợ nén yêu cầu lên upstream không?

Bạn có thể nén yêu cầu vào upstream bằng cách sử dụng `gunzip` của module Nginx. Module gunzip là một bộ lọc giải nén các phản hồi có `Content Encoding: gzip` cho các client hoặc server không hỗ trợ phương pháp mã hóa **gzip**.

### 16. Cách lấy thời gian hiện tại trong Nginx?

Để lấy thời gian hiện tại trong Nginx, ta sử dụng biến từ module SSI, `$date_gmt` và `$date_local`.

```
Proxy_set_header THE-TIME $date_gmt;
```

### 17. Giải thích -s trong Nginx server?

Để thực thi file trong Nginx, tham số -s được sử dụng.

### 18. Cách thêm module vào Nginx server?

Trong quá trình biên dịch, module Nginx phải được chọn vì lựa chọn thời gian chạy của module như vậy không được Nginx hỗ trợ.
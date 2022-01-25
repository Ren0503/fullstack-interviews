# Câu hỏi phỏng vấn HTML

Trước khi bắt đầu với loạt câu hỏi phỏng vấn HTML, ta sẽ nói về HTML.

HTML là viết tắt của HyperText Markup Language. Nó là ngôn ngữ định dạng tiêu chuẩn cho phát triển trang web được phát hành vào năm 1993. HTML là ngôn ngữ thông dịch trên trình duyệt, nó nói cho trình duyệt biết cách hiển thị và hiển thị như thế nào.

HTML là ngôn ngữ quan trọng cho bất cứ ai muốn học về phát triển web. HTML độc lập là không đủ với các web dev vì nó chỉ xác định cấu trúc dữ liệu được render trên trình duyệt cho trang web, để làm cho nó đẹp và linh động hơn, ta cần dùng CSS và JavaScript đi cùng.

Phiên bản mới nhất của HTML là HTML5. Trong nó có hai thành phần chính là thẻ(Tag) và thuộc tính(attributes). Ảnh dưới mô tả cơ bản HTML tag và attributes.

![](./assets/html-intro.png)

## Câu hỏi phỏng vấn cho Fresher

### 1. HTML tag và element là một?

Không. HTML element tạm dịch phần tử HTML được xác định bằng cách bắt đầu thẻ, bao gồm tất cả nội dung cho đến khi đóng thẻ. Ví dụ, `<h1>Heading</h1>` là một phần tử HTML, còn tag chỉ là <h1> và </h1>.

### 2. Thẻ và thuộc tính trong HTML

Thẻ là thành phần quan trọng trong HTML xác định cách nội dung sẽ được định dạng, trong khi thuộc tính đi cùng với thẻ HTML để xác định đặc trưng của phần tử HTML. Ví dụ: `<p align="center">HTML Question</p>`, thì `algin` là thuộc tính để xác định đoạn văn bản sẽ hiển thị ở giữa.

### 3. Phần tử void trong HTML.

Trong HTML sẽ có các phần tử không cần thẻ đóng. Ví dụ: `<br />`, `<img />`, `<hr />`,...

### 4. Ưu điểm của khoảng trắng 

Trong HTML, một chuỗi ký tự khoảng trắng trống được coi là một ký tự khoảng trắng. Vì trình duyệt thu gọn nhiều khoảng trắng thành một ký tự khoảng trắng duy nhất và điều này giúp dev thụt lề các dòng văn bản mà không phải lo lắng về nhiều khoảng trắng và duy trì tính dễ đọc và dễ hiểu của code HTML.

### 5. HTML Entities

Trong HTML một vài ký tự dành riêng như `<`, `>`, `/`,... Để sử dụng các ký tự trong trang web, ta cần dùng các ký tự đặc biệt gọi là HTML entities. Dưới đây là một số ánh xạ giữa ký tự dành riêng và ký tự entities tương ứng sẽ được sử dụng. 

| Character | Entity Name | Entity Number |
|-----------|-------------|---------------|
| <         | &lt;        | &#60;         |
| >         | &gt;        | &#62;         |
| &         | &amp;        | &#38;         |

### 6. Các kiểu danh sách trong HTML

![](./assets/Image_List.png)

### 7. Thuộc tính `class` trong HTML

Thuộc tính class được sử dụng để chỉ định tên lớp cho một phần tử HTML. Nhiều phần tử trong HTML có thể có cùng giá trị lớp. Ngoài ra, nó chủ yếu được sử dụng để liên kết các style được viết trong CSS.

### 8. Sự khác nhau của thuộc tính `id` và `class` trong phần tử HTML?

Nhiều phần tử trong HTML có thể có cùng giá trị lớp, trong khi giá trị thuộc tính id của một phần tử này không thể được liên kết với phần tử HTML khác.

### 9. Xác định dữ liệu form nhiều phần?

Dữ liệu form đa phần là một trong những giá trị của thuộc tính `enctype`. Nó được sử dụng để gửi dữ liệu file đến phía server xử lý. Các giá trị hợp lệ khác của thuộc tính `enctype` là `text/plain` and `application/x-www-form-urlencoded`.

### 10. Mô tả cấu trúc của HTML

Mỗi trang web đều có các thành phần khác nhau để hiển thị nội dung dự định và một giao diện người dùng cụ thể. Tuy nhiên, có một số kiểu mẫu được chấp nhận trên toàn cầu để cấu trúc trang web, chẳng hạn như:

- **<header>**: Lưu trữ thông tin bắt đầu về trang web.
- **<footer>**: Biểu diễn phần cuối cùng của trang.
- **<nav>**: Menu điều hướng của trang HTML.
- **<article>**: Nó là một tập hợp thông tin.
- **<section>**: Nó được sử dụng bên trong `article` để xác định cấu trúc cơ bản của một trang.
- **<aside>**: Nội dung menu dọc của trang.

### 11. Cách để tối ưu tải tài nguyên website?

Để tối ưu thời gian tải web ta cần tối ưu việc tải các tài nguyên:

- **CDN hosting** - CDN hoặc mạng phân phối nội dung là các server được phân phối theo địa lý để giúp giảm độ trễ.
- **File compression** - Đây là một phương pháp giúp giảm kích thước của nội dung để giảm việc truyền dữ liệu.
- **File concatenation** - Điều này làm giảm số lượng cuộc gọi HTTP.
- **Minify scripts** - Điều này làm giảm kích thước tổng thể của file js và CSS
- **Parallel downloads** - Lưu trữ nội dung trong nhiều miền phụ để giúp vượt qua giới hạn tải xuống là 6 nội dung trên mỗi miền của tất cả các trình duyệt hiện nay. Điều này có thể được cấu hình nhưng hầu hết người dùng thông thường không bao giờ sửa đổi các cài đặt này.
- **Lazy Loading** - Thay vì tải tất cả các nội dung cùng một lúc, các nội dung không quan trọng có thể được tải trên cơ sở cần thiết.

### 12. Thẻ định dạng khác nhau trong HTML

HTML có các thẻ định dạng khác nhau:

* <b> - in đậm văn bản
* <i> - in nghiêng văn bản
* <em> - làm cho văn bản nghiêng nhưng có thêm tầm quan trọng về ngữ nghĩa
* <big> - tăng kích cỡ chữ lên một đơn vị 
* <small> - giảm kích cỡ chữ lên một đơn vị 
* <sub> - biến văn bản thành chỉ số dưới
* <sup> - biến văn bản thành chỉ số trên
* <del> - hiển thị dưới dạng văn bản gạch bỏ
* <strong> - đánh dấu văn bản là quan trọng
* <mark> - highlights văn bản
* <ins> - hiển thị dưới dạng văn bản đã thêm

### 13. Các thể loại Doctypes khả dụng 

Có ba thể loại Doctypes khả dung:

- Strict Doctype 
- Transitional Doctype
- Frameset Doctype

### 14. Hãy giải thích cách hiển thị tập ký tự đang được sử dụng trong HTML?

Tập ký tự được xác định bởi thẻ <meta> trong phần tử <head>

```html
<!DOCTYPE html>
<html>
 <head>
   <meta charset="UTF-8">
   ...
   ...
 </head>
 ...
</html>
```

### 15. Sự khác nhau giữa thẻ <strong> và <b>, thẻ <em> và <i>?

Hiệu ứng trên trang web bình thường của các thẻ <strong>, <b> và <em>, <i> là như nhau. Thẻ <b> và <i> là viết tắt của chữ in đậm và chữ nghiêng. Hai thẻ này chỉ áp dụng font chữ và thẻ in đậm <b>, chỉ thêm mực vào chữ, các thẻ này không nói lên điều gì về văn bản.

Trong khi đó, các thẻ <strong> và <em> thể hiện rằng đoạn văn bản có tầm quan trọng cao và nhấn mạnh hơn so với phần còn lại của văn bản. Các thẻ này có ý nghĩa ngữ nghĩa.

### 16. Đặc trưng của thẻ <head> và <body> trong HTML?

Thẻ <head> cung cấp thông tin về tài liệu. Nó phải luôn được đặt trong thẻ <html>. Thẻ này chứa siêu dữ liệu (metadata) về trang web và các thẻ nằm trong thẻ head như <link>, <meta>, <style>, <script>, v.v. không được hiển thị trên trang web. Ngoài ra, chỉ có thể có 1 thẻ <head> trong toàn bộ tài liệu html và sẽ luôn ở trước thẻ <body>.

Thẻ <body> xác định phần nội dung của tài liệu HTML. Nó phải luôn được đặt trong thẻ <html>. Tất cả nội dung cần được hiển thị trên trang web như hình ảnh, văn bản, âm thanh, video, nội dung, sử dụng các phần tử như <p>, <img>, <audio>, <heading>, <video>, <div>, v.v ... sẽ luôn nằm trong thẻ <body>. Ngoài ra, chỉ có 1 phần tử body trong tài liệu HTML và sẽ luôn ở sau thẻ <head>.

### 17. Chúng ta có thể hiển thị một trang bên trong một trang web hoặc lồng các trang web vào nhau có được không?

Có, chúng tôi có thể hiển thị một trang web bên trong một trang web HTML khác. HTML cung cấp thẻ <iframe> để có thể thực hiện chức năng này.

```html
<iframe src="url of the web page to embed" />
```

### 18. Cell Padding khác với Cell Spacing như thế nào?

Cell Spacing là khoảng trống giữa hai ô liên tiếp. Trong khi, Cell Padding là khoảng trống giữa văn bản/nội dung của ô và cạnh/đường viền của ô. Xem hình bên dưới.

![](./assets/cell-padding-vs-cell-spacing.png)

### 19. Làm thế nào chúng ta có thể ghép hai hoặc nhiều hàng hoặc nhiều cột thành một hàng hoặc cột duy nhất trong một bảng HTML?

HTML cung cấp hai thuộc tính cho bảng là `rowspan` và `colspan` để tạo một ô kéo dài tới nhiều hàng và cột tương ứng.

### 20. Có thể thay đổi một phần tử inline thành một phần tử block không?

Có, có thể sử dụng thuộc tính `display` với giá trị của nó là `block`, để thay đổi phần tử inline thành phần tử block.
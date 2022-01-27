# Câu hỏi phỏng vấn HTML

![](./assets/html.jpg)

Trước khi bắt đầu với loạt câu hỏi phỏng vấn HTML, ta sẽ nói về HTML.

HTML là viết tắt của HyperText Markup Language. Nó là ngôn ngữ định dạng tiêu chuẩn cho phát triển trang web được phát hành vào năm 1993. HTML là ngôn ngữ thông dịch trên trình duyệt, nó nói cho trình duyệt biết cách hiển thị và hiển thị như thế nào.

HTML là ngôn ngữ quan trọng cho bất cứ ai muốn học về phát triển web. HTML độc lập là không đủ với các nhà phát triển web vì nó chỉ xác định cấu trúc dữ liệu được hiển thị trên trình duyệt cho trang web, để làm cho nó đẹp và linh động hơn, ta cần dùng CSS và JavaScript đi cùng.

Phiên bản mới nhất của HTML là HTML5. Trong nó có hai thành phần chính là thẻ(tag) và thuộc tính(attributes). Ảnh dưới mô tả cơ bản về cấu trúc HTML.

![](./assets/html-intro.png)

## Câu hỏi phỏng vấn cho Fresher

### 1. Thẻ HTML và phần tử là một?

Không. Phần tử (element) HTML được xác định bằng cách bắt đầu thẻ, bao gồm tất cả nội dung cho đến khi đóng thẻ. Ví dụ, `<h1>Heading</h1>` là một phần tử HTML, còn tag chỉ là `<h1>` và `</h1>`.

### 2. Thẻ và thuộc tính trong HTML là gì?

Thẻ là thành phần quan trọng trong HTML xác định cách nội dung sẽ được định dạng, trong khi thuộc tính đi cùng với thẻ HTML để xác định đặc trưng của phần tử HTML. Ví dụ: `<p align="center">HTML Question</p>`, thì `algin` là thuộc tính để xác định đoạn văn bản sẽ hiển thị ở giữa.

### 3. Phần tử void trong HTML là gì?

Trong HTML sẽ có các phần tử không cần thẻ đóng. Ví dụ: `<br />`, `<img />`, `<hr />`,...

### 4. Ưu điểm của khoảng trắng?

Trong HTML, một chuỗi ký tự khoảng trắng trống được coi là một ký tự khoảng trắng. Vì trình duyệt thu gọn nhiều khoảng trắng thành một ký tự khoảng trắng duy nhất và điều này giúp dev thụt lề các dòng văn bản mà không phải lo lắng về nhiều khoảng trắng và duy trì tính dễ đọc và dễ hiểu của code HTML.

### 5. HTML Entities là gì?

Trong HTML một vài ký tự dành riêng như `<`, `>`, `/`,... Để sử dụng các ký tự trong trang web, ta cần dùng các ký tự đặc biệt gọi là HTML entities. Dưới đây là một số ánh xạ giữa ký tự dành riêng và ký tự entities tương ứng sẽ được sử dụng. 

| Character | Entity Name | Entity Number |
|-----------|-------------|---------------|
| <         | &lt;        | &#60;         |
| >         | &gt;        | &#62;         |
| &         | &amp;        | &#38;         |

### 6. Các kiểu danh sách trong HTML?

![](./assets/Image_List.png)

### 7. Thuộc tính `class` trong HTML là gì?

Thuộc tính class được sử dụng để chỉ định tên lớp cho một phần tử HTML. Nhiều phần tử trong HTML có thể có cùng giá trị lớp. Ngoài ra, nó chủ yếu được sử dụng để liên kết các style được viết trong CSS.

### 8. Sự khác nhau của thuộc tính `id` và `class` trong phần tử HTML?

Nhiều phần tử trong HTML có thể có cùng giá trị lớp, trong khi giá trị thuộc tính id của một phần tử này không thể được liên kết với phần tử HTML khác.

### 9. multipart/form-data là gì?

`multipart/form-data` là một trong những giá trị của thuộc tính `enctype`. Nó được sử dụng để gửi dữ liệu file cho phía server xử lý. Các giá trị hợp lệ khác của thuộc tính `enctype` là `text/plain` and `application/x-www-form-urlencoded`.

### 10. Mô tả cấu trúc của HTML

Mỗi trang web đều có các thành phần khác nhau để hiển thị nội dung dự định và một giao diện người dùng cụ thể. Tuy nhiên, có một số kiểu mẫu được chấp nhận trên toàn cầu để cấu trúc trang web, chẳng hạn như:

- **`<header>`**: Lưu trữ thông tin bắt đầu về trang web.
- **`<footer>`**: Biểu diễn phần cuối cùng của trang.
- **`<nav>`**: Menu điều hướng của trang HTML.
- **`<article>`**: Nó là một tập hợp thông tin.
- **`<section>`**: Nó được sử dụng bên trong `article` để xác định cấu trúc cơ bản của một trang.
- **`<aside>`**: Nội dung menu dọc của trang.

### 11. Cách để tối ưu tải tài nguyên website?

Để tối ưu thời gian tải web ta cần tối ưu việc tải các tài nguyên:

- **CDN hosting** - CDN hoặc mạng phân phối nội dung là các server được phân phối theo địa lý để giúp giảm độ trễ.
- **File compression** - Đây là một phương pháp giúp giảm kích thước của nội dung để giảm việc truyền dữ liệu.
- **File concatenation** - làm giảm số lượng cuộc gọi HTTP.
- **Minify scripts** - làm giảm kích thước tổng thể của file js và CSS
- **Parallel downloads** - Lưu trữ nội dung trong nhiều miền phụ để vượt qua giới hạn tải xuống là 6 nội dung trên mỗi miền của tất cả các trình duyệt hiện nay. Điều này có thể được cấu hình nhưng hầu hết người dùng thông thường không bao giờ sửa đổi các cài đặt này.
- **Lazy Loading** - Thay vì tải tất cả các nội dung cùng một lúc, các nội dung không quan trọng chỉ được tải trên khi cần thiết.

### 12. Thẻ định dạng khác nhau trong HTML

HTML có các thẻ định dạng khác nhau:

* `<b>` - in đậm văn bản
* `<i>` - in nghiêng văn bản
* `<em>` - làm cho văn bản nghiêng nhưng có thêm tầm quan trọng về ngữ nghĩa
* `<big>` - tăng kích cỡ chữ lên một đơn vị 
* `<small>`- giảm kích cỡ chữ lên một đơn vị 
* `<sub>` - biến văn bản thành chỉ số dưới
* `<sup>` - biến văn bản thành chỉ số trên
* `<del>` - hiển thị dưới dạng văn bản gạch bỏ
* `<strong>` - đánh dấu văn bản là quan trọng
* `<mark>` - highlights văn bản
* `<ins>` - hiển thị dưới dạng văn bản đã thêm

### 13. Các thể loại Doctypes khả dụng 

Có ba thể loại Doctypes khả dung:

- Strict Doctype 
- Transitional Doctype
- Frameset Doctype

### 14. Hãy giải thích cách hiển thị tập ký tự đang được sử dụng trong HTML?

Tập ký tự được xác định bởi thẻ `<meta>` trong phần tử `<head>`

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

### 15. Sự khác nhau giữa thẻ `<strong>` và `<b>`, thẻ `<em>` và `<i>`?

Hiệu ứng trên trang web bình thường của các thẻ `<strong>`, `<b>` và `<em>`, `<i>` là như nhau. Thẻ `<b>` và `<i>` là viết tắt của chữ in đậm và chữ nghiêng. Hai thẻ này chỉ áp dụng font chữ và thẻ in đậm `<b>`, chỉ thêm mực vào chữ, các thẻ này không nói lên điều gì về văn bản.

Trong khi đó, các thẻ `<strong>` và `<em>` thể hiện rằng đoạn văn bản có tầm quan trọng cao và nhấn mạnh hơn so với phần còn lại của văn bản. Các thẻ này có ý nghĩa ngữ nghĩa.

### 16. Đặc trưng của thẻ `<head>` và `<body>` trong HTML?

Thẻ `<head>` cung cấp thông tin về tài liệu. Nó phải luôn được đặt trong thẻ `<html>`. Thẻ này chứa siêu dữ liệu (metadata) về trang web và các thẻ nằm trong thẻ head như` <link>`, `<meta>`, `<style>`, `<script>` v.v. không được hiển thị trên trang web. Ngoài ra, chỉ có thể có 1 thẻ `<head>` trong toàn bộ tài liệu html và sẽ luôn ở trước thẻ `<body>`.

Thẻ `<body>` xác định phần nội dung của tài liệu HTML. Nó phải luôn được đặt trong thẻ `<html>`. Tất cả nội dung cần được hiển thị trên trang web như hình ảnh, văn bản, âm thanh, video, nội dung, sử dụng các phần tử như `<p>`, `<img>`, `<audio>`, `<heading>`, `<video>`, `<div>`, v.v ... sẽ luôn nằm trong thẻ `<body>`. Ngoài ra, chỉ có 1 phần tử body trong tài liệu HTML và sẽ luôn ở sau thẻ `<head>`.

### 17. Chúng ta có thể hiển thị một trang bên trong một trang web hoặc lồng các trang web vào nhau có được không?

Có, chúng tôi có thể hiển thị một trang web bên trong một trang web HTML khác. HTML cung cấp thẻ `<iframe>` để có thể thực hiện chức năng này.

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

### 21. Chúng ta có thể định vị một phần tử HTML bằng bao nhiêu cách?

Có 6 giá trị thuộc tính có thể dùng cho định vị phần tử HTML

- **static**: phần tử sẽ xuất hiện ở vị trí mặc định dựa theo thứ tự khai báo, ta không thể sử dụng các thuộc tính `top`, `right`, `bottom`, `left` để thiết lập lại vị trí cho phần tử.
- **absolute**: dùng để thiết lập vị trí cho một phần tử dựa theo vị trí của phần tử cha nằm gần với nó nhất, nếu không có phần tử cha nào được thiết lập thuộc tính `position` với một trong ba giá trị (relative, fixed, absolute) thì vị trí của phần tử sẽ được xác định dựa theo khung trang web.
- **fixed**: dùng để thiết lập phần tử nằm tại một vị trí cố định trên màn hình trình duyệt mặc cho người dùng có scroll trang lên xuống hay trái phải.
- **relative**: cũng gần giống với phương thức định vị static, đó chính là phần tử sẽ xuất hiện ở vị trí mặc định dựa theo thứ tự khai báo. Tuy nhiên, đối với phương thức định vị relative thì chúng ta có thể sử dụng các thuộc tính top, right, bottom, left để thiết lập lại vị trí cho phần tử.
- **initial**: Reset giá trị thuộc tính về giá trị mặc định.
- **inherit**: Kế thừa giá trị từ phần tử cha.

### 22. Có bao nhiêu cách để hiển thị phần tử HTML?

1. **inline**: ta có thể hiển thị bất kỳ phần tử dạng block nào thành dạng inline. Giá trị thuộc tính `height` và `width` sẽ không ảnh hưởng.
2. **block**: ta có thể hiển thị bất kỳ phần tử dạng inline nào thành dạng block.
3. **inline-block**: Thuộc tính này tương tự như inline, ngoại trừ việc hiển thị dưới dạng inline-block, chúng ta có thể định dạng phần tử bằng cách sử dụng các giá trị `height` và `width`.
4. **flex**: hiển thị phần tử container một cách linh hoạt. Nó theo sau thuộc tính `flexbox`.
5. **inline-flex**: hiển thị container như một phần tử inline trong khi nội dung của nó vẫn tuân theo thuộc tính `flexbox`.
6. **grid**: hiển thị nội dung phần tử như một grid container.
7. **none**: Using this property we can hide the HTML element.

Một vài kiểu hiển thị khác nhưng ít khi dùng là:

* table
* inline-table
* table-cell
* table-column
* table-row
* inline-grid
* list-item
* inherit
* initial
* table-caption

### 23. Sự khác biệt giữa `dislay: none` và `visibility: hidden`?

Khi sử dụng thuộc tính `visibility: hidden` cho một phần tử HTML thì phần tử đó sẽ bị ẩn khỏi trang web nhưng vẫn chiếm không gian. Trong khi đó, nếu sử dụng thuộc tính `display: none` cho một phần tử HTML thì phần tử đó sẽ bị ẩn và không chiếm bất kỳ không gian nào trên trang web.

### 24. Làm sao để chỉ định liên kết trong HTML và giải thích thuộc tính `target`?

HTML cung cấp thẻ `<a>` để chỉ định liên kết trên web. Thuộc tính `href` được dùng để chỉ định liên kết và thuộc tính `target` được dùng để chỉ định cách mở liên kết. Thuộc tính `target` có các giá trị sau:

* **_self**: là giá trị mặc định. Mở liên kết cùng tab hay cửa sổ với trang web.
* **_blank**: mở ở tab mới.
* **_parent**: mở ở frame cha.
* **_top**: mở ở toàn cửa sổ.

### 25. Có bao nhiêu cách để dùng CSS cùng với HTML?

Có 3 cách là:
- **Inline:** sử dụng thuộc tính `style` trong phần tử HTML.
- **Internal:** sử dụng thẻ `<style>` trong thẻ `<head>`. 
- **External:** sử dụng thẻ `<link>` trong thẻ `<head>` để liên kết đến file CSS vào code HTML. 

![](./assets/css-styles-for-html5-element.png)

### 26. Sự khác biệt giữa thẻ `<link>` và thẻ `<a>`?

Thẻ `<a>` được dùng để mở liên kết đến trang web khác hay một phần nào đó ở web hiện tại nên nó có thể click vào. Trong khi thẻ `<link>` xác định một liên kết đến một nguồn tài nguyên bên ngoài, nó không thể click.

### 27. Cách để thêm code javascript vào HTML?

HTML cung cấp thẻ `<script>` để chạy code javascript cho trang web thêm sinh động.

```html
<!DOCTYPE html>
<html>
    <body>
        <h1>
            <span>This is a demo for </span>
            <u><span id="demo"></span></u>
        </h1>
    <script>
        document.getElementById("demo").innerHTML = "script Tag"
    </script>
    </body>
</html>
```

### 28. Thẻ script dùng ở head hay body?

Nếu các script chứa các hàm event-trigger hoặc thư viện jquery thì nên đặt ở head. Nếu script viết nội dung hoặc không nằm trong hàm thì nên đặt ở cuối body. Nói tóm lại có 3 điểm cần nhớ sau:
- Đặt thư viện hoặc sự kiện script ở head.
- Đặt script thông thường ở head cho đến khi có vấn đề gì đó về hiệu suất.
- Đặt script hiển thị nội dung ở cuối body.

### 29. Form là gì và cách tạo form trong HTML?

Form được dùng cho người dùng nhập thông tin. HTML cung cấp thẻ `<form>` cho tạo form. Để lấy thông tin từ người dùng ta có thể dùng thẻ `<input>` trong form để lưu lại dữ liệu người dùng và gửi về server xử lý. Thẻ input hỗ trợ các kiểu khác nhau như button, checkbox, number, text, password,...

```html
<form action="/submit_data.php">
   <label>Enter your name: </label>
   <input type="text" name="name" /> 
   <label>Enter Mobile number </label>
   <input type="number" name="mobile_no"/>
   <input type="submit" value="Submit">
</form>
```

### 30. Xử lý sự kiện trong HTML?

HTML cho phép thực hiện kích hoạt sự kiện trong trình duyệt sử dụng javascript hoặc JQuery. Có rất nhiều sự kiện như `onClick`, `onDrag`, `onChange`, v.v. 

```html
<!DOCTYPE html>
<html>
    <body style="padding-top:50px">
        <h3 id="event_demo">0</h3>
        <input type="button" onclick="myFunction()" value="Click Me" />
        <input type="reset" onclick="reset()" value="Reset" />
    </body>
    
    <script>
        function myFunction() {
            var value = document.getElementById("event_demo").innerHTML
            value = parseInt(value) + 1;
            document.getElementById("event_demo").innerHTML = value;
        }
        function reset() {
            document.getElementById("event_demo").innerHTML = 0;
        }
    </script>
</html>
```

### 31. Các ưu điểm của HTML5 so với các phiên bản trước?

- Hỗ trợ đa phương tiện.
- Nó có khả năng lưu trữ dữ liệu ngoại tuyến bằng cách sử dụng cơ sở dữ liệu SQL và bộ đệm ứng dụng.
- Javascript có thể được chạy ở chế độ nền.
- HTML5 cũng cho phép người dùng vẽ nhiều hình dạng khác nhau như hình chữ nhật, hình tròn, hình tam giác, v.v.
- Bao gồm các thẻ Sematic mới và các thẻ điều khiển biểu form.

### 32. Cách để thêm nhạc và video vào web?

HTML5 cung cấp hai thẻ là `<audio>` và `<video>` để ta thêm nhạc và video trực tiếp vào web.

### 33. Phần tử inline và block trong HTML5?

| Inline | Block |
|--------|-------|
| Các phần tử inline chỉ chiếm không gian cần thiết cho nội dung và không bắt đầu một dòng mới | Các phần tử block bắt đầu trên một dòng mới và chiếm toàn bộ chiều rộng của trang có sẵn |
| `<span>`, `<a>`, `<strong>`, `<img>`, `<button>`, `<em>`, `<select>`, `<abbr>`, `<label>`, `<sub>`, `<cite>`, `<abbr>`, `<script>`, `<label>`, `<i>`, `<input>`, `<output>`, `<q>,` ... | `<div>`, `<p>`, `<header>`, `<footer>`, `<h1>`...`<h6>`, `<form>`, `<table>`, `<canvas>`, `<video>`, `<blockquote>`, `<pre>`, `<ul>`, `<ol>`, `<figcaption>`, `<figure>`, `<hr>`, `<article>`, `<section>` ... |

![](./assets/Inline_and_block_elements_in_HTML5.png)

### 34. Sự khác biệt giữa thẻ img và thẻ figure?

Thẻ `<figure>` chỉ định nội dung như ảnh, sơ đồ, code snippets,... Thẻ `<figure>` được dùng để tổ chức các nội dung như ảnh, tiêu đề ảnh trong khi thẻ `<img>` dùng để nhúng một ảnh vào tài liệu HTML5.

### 35. Làm thế nào để chỉ định metadata trong HTML5?

Để chỉ định, ta có thể sử dụng thẻ `<meta>` (là một thẻ void, tức là nó không có thẻ đóng). Một số thuộc tính được sử dụng với thẻ meta là name, content, http-equiv, v.v. Hình ảnh dưới đây cho biết cách chỉ định metadata.

![](./assets/How_to_specify_the_metadata_in_HTML5.png)

### 36. Thẻ `<datalist>` và thẻ `<select>` là giống nhau?

Không. Thẻ `<datalist>` và thẻ `<select>` là khác nhau. Trong thẻ `<select>`, người dùng sẽ chọn từ một danh sách tuỳ chọn (options), trong khi `<datalist>` được sử dụng để cung cấp chức năng "autocomplete" cho các phần tử `<input>`, người dùng sẽ thấy một danh sách thả xuống các tùy chọn trước khi họ nhập dữ liệu.

![](./assets/is-datalist-and-select-tag-same.png)

### 37. Image Map là gì?

Bản đồ ảnh (image map) có thể tạm hiểu là một loại hình ảnh đặc biệt, trên tấm hình sẽ có các vùng được xác định, mỗi vùng đó được gán với một cái liên kết.

```html
<img  src=”image_url” ,  usemap=”#workspace” />
<map  name=”workspace”>
    <area shape=”rect”  coords=”34, 44, 270, 350” ,  href=”xyz.html” />
    <area shape=”rect”  coords=”10, 120, 250, 360” ,  href=”xyz.html” />
</map>
```

### 38. Phần tử Sematic là gì?

Phần tử semantic mô tả ý nghĩa cụ thể đối với trình duyệt và nhà phát triển. Các phần tử như `<form>`, `<table>`, `<article>`, `<figure>`, ... là phần tử semantic.

### 39. Sự khác biệt giữa thẻ `<meter>` và thẻ `<process>`?

Thẻ `<progress>` được sử dụng khi ta muốn hiển thị tiến độ hoàn thành của một nhiệm vụ, trong khi thẻ `<meter>` xác định một phép đo vô hướng trong một phạm vi biết trước hoặc một giá trị phân số.

### 40. Có thể kéo và thả trong HTML5 không?

Có, trong HTML5, chúng ta có thể kéo và thả một phần tử. Điều này có thể thực hiện bằng cách sử dụng các sự kiện liên quan đến kéo và thả được sử dụng với phần tử mà chúng ta muốn kéo và thả.

### 41. Sự khác biệt giữa phần tử SVG và Canvas trong HTML5?

| SVG | Canvas |
|-----|--------|
| SVG là dựa trên vector, để tạo hình dạng | Dựa trên Raster, tức là bao gồm pixel |
| Hoạt động tốt hơn với surface lớn | Hoạt động tốt hơn với surface nhỏ |
| Có thể chỉnh sửa với script và css | Chỉ có thể chỉnh sửa với script |
| Khả năng mở rộng cao. Có thể in ở độ phân giải cao. | Khả năng mở rộng thấp |

### 42. Các kiểu file audio có thể dùng trong HTML5?

HTML5 hỗ trợ các định dạng audio như sau:
1. Mp3
2. Wav
3. Ogg

### 43. Thông số kỹ thuật trong HTML5 là gì?

Thông số kỹ thuật trong HTML5 nhằm mục đích là:
- Giới thiệu thẻ phần tử mới để cấu trúc trang tốt hơn.
- Hình thành một tiêu chuẩn hành vi trên nhiều trình duyệt và hỗ trợ cho các thiết bị và nền tảng khác nhau.
- Tương thích ngược với các trang web HTML phiên bản cũ hơn.
- Giới thiệu các phần tử tương tác cơ bản mà không phụ thuộc vào các plugin, chẳng hạn như thẻ `<video>` thay vì plugin flash.

### 44. Các khái niệm về web storage trong HTML5?

Web storage này giúp lưu trữ một số dữ liệu tĩnh trong bộ local storage của trình duyệt để hạn chế việc tìm nạp dữ liệu từ máy chủ quá thường xuyên. Có giới hạn kích thước dựa trên các trình duyệt khác nhau. Điều này giúp giảm thời gian tải và trải nghiệm người dùng mượt mà. Có hai loại web storage được sử dụng để lưu trữ dữ liệu cục bộ trong HTML5:
* **Local Storage** - giúp dữ liệu được lưu trữ ngay cả khi người dùng đóng trình duyệt. Nó được lưu trữ cho từng ứng dựng web trên các trình duyệt khác nhau.
* **Session Storage** - chỉ lưu trữ trong phiên làm việc. Nếu người dùng đóng trình duyệt nó sẽ bị xoá.

### 45. Microdata là gì?

Microdata là một phương thức đơn giản để phân loại các nội dung trong website. Microdata hiểu một cách đơn giản là để thêm dữ liệu có cấu trúc vào website. Microdata nó định nghĩa thuộc tính, có thể đặt vào trong HTML để cho biết trang web đó viết về mục đích gì.

```html
<div itemscope itemtype="http://schema.org/SoftwareApplication">
    <span itemprop="name">Interviewbit Games</span> -
    REQUIRES <span itemprop="operatingSystem">ANDROID</span><br>
    <link itemprop="applicationCategory" href="http://schema.org/GameApplication"/>
    <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
        RATING:
        <span itemprop="ratingValue">4.6</span> (
        <span itemprop="ratingCount">8864</span> ratings )
    </div>
    <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
    Price: Rs.<span itemprop="price">1.00</span>
        <meta itemprop="priceCurrency" content="INR" />
    </div>
</div>
```

* **itemid** – Thuộc tính này là bộ nhận diện global cho item
* **itemprop** – Thuộc tính này định nghĩa một thuộc tính của item
* **itemref** – Thuộc tính này cung cấp một danh sách các phần tử bổ sung để tìm các cặp tên-giá trị của item.
* **itemscope** – Được sử dụng để tạo một item. Thuộc tính này là một thuộc tính logic mà nói rằng có Microdata trên trang này, và đây là nơi nó bắt đầu.
* **itemtype** – Thuộc tính này là một URL hợp lệ mà định nghĩa item và cung cấp ngữ cảnh cho các thuộc tính.

Ví dụ về microdata bởi Google:

![](./assets/Microdata_in_HTML5.png)

### 46. Thẻ nào được dùng để biểu diễn kết quả tính toán? 

Thẻ `<output>` được dùng để biểu diễn kết quả tính toán. Nó có các thuộc tính sau:
- **for** - Nó xác định mối quan hệ giữa các phần tử được sử dụng trong tính toán và kết quả.
- **form** - được sử dụng để xác định hình thức mà phần tử đầu ra thuộc về.
- **name** - Tên của phần tử output

```html
<form oninput = "result.value=parseInt(n1.value)+parseInt(n2.value)">
    <input type = "number" name = "n1" value = "1" /> +
    <input type = "number" name = "n2" value = "2" /><br />
    The output is: <output name = "result"></output>
</form>
```

Kết quả trông như:

![](./assets/html-output-tag.png)

### 47. Mối quan hệ giữa thẻ `<h1>` và `<header>` trong HTML5?

Trong HTML5 thẻ `<header>` chỉ định phần tiêu đề của trang web. Không giống như các phiên bản trước có một phần tử `<h1>` cho toàn bộ trang web, bây giờ đây chỉ có header cho một phần như `<article>` hoặc `<section>`. Theo đặc tả HTML5, mỗi phần tử `<header>` phải có ít nhất một thẻ `<h1>`.

### 48. Giải thích về đồ hoạ trong HTML5?

HTML 5 hỗ trợ hai loại đồ hoạ:

- **Canvas:** Nó giống như vẽ trên một tờ giấy trắng hoặc một trang web trống. Ta có thể thêm các thiết kế đồ họa khác nhau trên các trang web với các phương pháp có sẵn để vẽ các hình dạng hình học khác nhau.

```html
<!DOCTYPE HTML>
<html>
    <head>
    </head>
    <body>
        <canvas width="300" height="100" style="border:2px solid;"></canvas>  
    </body>
</html>
```

- **SVG:** Scalable Vector Graphics được sử dụng hầu hết cho các sơ đồ hoặc biểu tượng. Nó tuân theo định dạng XML.

```html
<!DOCTYPE html>
<html>
    <body>
    <svg width="400" height="110">
        <rect width="300" height="100" style="fill:#FFF;stroke-width:2;stroke:#000" />
    </svg>
    </body>
</html>
```
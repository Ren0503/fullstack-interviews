# Câu hỏi phỏng vấn CSS

## CSS là gì?

CSS là chữ viết tắt của Cascading Style Sheets, nó là một ngôn ngữ được sử dụng để tìm và định dạng lại các phần tử được tạo ra bởi các ngôn ngữ đánh dấu (HTML). Nói ngắn gọn hơn là ngôn ngữ tạo phong cách cho trang web. Bạn có thể hiểu đơn giản rằng, nếu HTML đóng vai trò định dạng các phần tử trên website như việc tạo ra các đoạn văn bản, các tiêu đề, bảng,…thì CSS sẽ giúp chúng ta có thể thêm style vào các phần tử HTML đó như đổi bố cục, màu sắc trang, đổi màu chữ, font chữ, thay đổi cấu trúc…

CSS được phát triển bởi W3C (World Wide Web Consortium) vào năm 1996, vì HTML không được thiết kế để gắn tag để giúp định dạng trang web.

Phương thức hoạt động của CSS là nó sẽ tìm dựa vào các vùng chọn, vùng chọn có thể là tên một thẻ HTML, tên một ID, class hay nhiều kiểu khác. Sau đó là nó sẽ áp dụng các thuộc tính cần thay đổi lên vùng chọn đó.

CSS3 là bản nâng cấp mới nhất của CSS với mục đích mở rộng CSS2.1 . CSS3 bổ sung, mang đến nhiều tính năng mới như bo tròn góc, tạo độ bóng, gradient, transitions hay animations cũng như các bố cục mới như multiple-column, flexbox hay grid layout.

## Câu hỏi phỏng vấn CSS cho Fresher
### 1. Mô hình hộp trong CSS là gì? Thuộc tính CSS nào là một phần của nó?

Các phần tử trong HTML có thể được coi là những chiếc hộp. Trong CSS, thuật ngữ “mô hình hộp” được dùng để nói về việc thiết kế, dàn layout.

Về cơ bản mô hình hộp CSS là một chiếc hộp bao xung quanh phần tử HTML, gồm lề, đường viền, padding và nội dung bên trong. Hình ảnh dưới đây cho thấy vị trí và mối liên hệ giữa các thành phần này.

![](./assets/Box_Model_in_CSS.png)

* **Content** - nội dung trong hộp, nơi hiển thị văn bản và hình ảnh
* **Padding** - phần khoảng trắng xung quanh nội dung, trong suốt
* **Border** - đường viền xung quanh nội dung và padding
* **Margin** - phần lề bên ngoài đường viền, trong suốt

### 2. Ưu điểm của CSS?

- CSS giúp bạn thực hiện định kiểu mọi thứ mình muốn lên một file khác. Nhờ vậy, bạn có thể tạo ra được những phong cách phù hợp rồi mới tích hợp các file CSS lên trên cùng file của HTML. Điều này sẽ giúp cho HTML được makup rõ ràng nhất và người dùng có thể quản lý website dễ dàng hơn. 
- Sử dụng CSS sẽ giúp bạn không cần thực hiện lặp lại các mô tả cho từng thành phần. Từ đó, bạn có thể tiết kiệm được tối đa thời gian làm việc với nó, làm code ngắn lại giúp kiểm soát dễ dàng hơn các lỗi không đáng có. 
- CSS giúp người dùng nhiều styles trên một trang web HTML nên khả năng điều chỉnh trang của bạn trở nên vô hạn. 
- Nhờ CSS mà mã nguồn của trang Web sẽ được tổ chức gọn gàng hơn, trật tự hơn, nội dung trang ư web sẽ được tách bạch hơn trong việc định dạng hiển thị. Từ đó, quá trình cập nhập nội dung sẽ dễ dàng hơn và có thể hạn chế tối thiểu làm rối cho mã HTML. 
- CSS tạo ra nhiều kiểu dáng nên có thể được áp dụng với nhiều trang web, từ đó giảm tránh việc lặp lại các định dạng của các trang web giống nhau. 

### 3. Hạn chế của CSS?

#### CSS hoạt động khác biệt cho từng trình duyệt

Với những thay đổi ban đầu của CSS trên một website rất dễ dàng. Tuy nhiên, khi thay đổi đã được thực hiện đòi hỏi chúng ta phải xác nhận được tính tương thích khi CSS hiển thị hiệu ứng thay đổi tương tự cho từng trình duyệt. Điều này xuất hiện do CSS sẽ hoạt động khác biệt cho từng trình duyệt cụ thể.

#### Khá khó khăn cho người mới
Ngôn ngữ lập trình phát triển đa dạng và vô cùng phúc tạp, đặc biệt là khó khăn với những người mới bắt đầu. Bởi thế, với nhiều cấp độ của CSS thì việc tìm hiểu, có thể nắm bắt để sử dụng càng trở nên khó khăn hơn.

#### Định dạng của web có khả năng gặp rủi ro
CSS là hệ thống dựa trên văn bản mở nên việc truy cập khá dễ dàng. Điều này khiến định dạng toàn bộ của web hoàn toàn có thể chịu tổn thương, gặp gián đoạn khi có hành động, hoặc tai nạn nào xảy ra với tệp. Lúc này nó sẽ yêu cầu truy cập đọc hoặc ghi vào web dự định để có thể ghi đè lên được các thay đổi.

### 4. Làm thế nào để đưa CSS vào trang web?

Có nhiều cách để thêm CSS vào trang web.

#### Dẫn link từ file bên ngoài

```html
<link rel="stylesheet" type="text/css" href="mystyles.css" />
```

#### Nhúng với thẻ `<style>`

```html
<style type="text/css">

/*Add style rules here*/

</style>
```

#### Thêm trực tiếp vào phần tử HTML nhờ thuộc tính `style`

```html
<h2 style="color:red;background:black">Inline Style</h2>
```

### 5. Các loại selector khác nhau trong CSS?

CSS Selector giống như là đường đẫn, chỉ định để cho CSS biết bạn đang muốn điều chỉnh, tạo kiểu cho phần tử HTML nào vậy.

**Universal Selector:** hoạt động như một ký tự đại diện cho tất cả phần tử trong trang. Trong ví dụ này, các style được cung cấp sẽ được áp dụng cho tất cả các phần tử trên trang.

```css
* {
    color: "green";
    font-size: 20px;
    line-height: 25px;
}
```

**Element Type Selector:** selector loại này ứng với một hoặc nhiều phần tử HTML cùng tên. Trong ví dụ này, các style được cung cấp sẽ được áp dụng cho tất cả các phần tử ul trên trang.

```css
ul {
    line-style: none;
    border: solid 1px #ccc;
}
```

**ID Selector:** selector này ứng với bất kỳ phần tử HTML nào có thuộc tính ID có cùng giá trị với giá trị của selector. Trong ví dụ này, các style được cung cấp sẽ được áp dụng cho tất cả các phần tử có ID trùng trên trang.

```css
#container {
    width: 960px;
    margin: 0 auto;
}
```

```html
<div id="container"></div>
```

**Class Selector:** tương tự như ID Selector nhưng thay vì ứng với ID thì nó ứng với thuộc tính class. Trong ví dụ này, các style được cung cấp sẽ áp dụng cho tất cả phần tử có cùng tên lớp.

```css
.box {
    padding: 10px;
    margin: 10px;
    width: 240px;
}
```

```html
<div class="box"></div>
```

**Descendant Combinator:** giúp bạn kết hợp hai hoặc nhiều selector để có thể chỉ định phần tử cụ thể.

```css
#container .box {
	float: left;
	padding-bottom: 15px;
} 
```

```html
<div id="container">
	<div class="box"></div>
	
	<div class="box-2"></div>
</div>

<div class="box"></div>
```

Khối khai báo này sẽ áp dụng cho tất cả các phần tử có lớp `box` nằm bên trong phần tử có ID là `container`. Cần lưu ý rằng phần tử `.box` không nhất thiết phải là phần tử con, nó có thể có một phần tử khác bao bọc `.box` và các style vẫn sẽ áp dụng.

**Child Combinator:** selector sử dụng bộ child combinator tương tự như descendant combinator, ngoại trừ việc nó chỉ nhắm đến các phần tử con.

```css
#container> .box {
	float: left;
	padding-bottom: 15px;
}
```

```html
<div id="container">
	<div class="box"></div>
	
	<div>
		<div class="box"></div>
	</div>
</div>
```

Selector sẽ ứng với tất cả phần tử có lớp `box` và là phần tử con của phần tử có id là `container`. Điều đó có nghĩa là các phần tử lớp `box` không phải là phần tử con của `container` sẽ không được áp dụng.

**General Sibling Combinator:** selector này so với các phần tử có quan hệ anh chị em với phần tử tương ứng.

```css
h2 ~ p {
	margin-bottom: 20px;
}
```

```html
<h2>Title</h2>
<p>Paragraph example.</p>
<p>Paragraph example.</p>
<p>Paragraph example.</p>
<div class="box">
	<p>Paragraph example.</p>
</div>
```

Trong ví dụ này, tất cả các phần tử văn bản (`<p>`) sẽ được áp dụng style với các quy tắc đã chỉ định, nhưng chỉ khi chúng là anh chị em của các phần tử `<h2>`. Có thể có các phần tử khác ở giữa `<h2>` và `<p>` và các style sẽ vẫn áp dụng.

**Adjacent Sibling Combinator:**: selector sử dụng ký tự `+` và gần giống với General Sibling Combinator. Sự khác biệt là phần tử được nhắm phải là anh chị ruột thịt chứ không phải enh chị em chung chung.

```css
p + p {
	text-indent: 1.Sem;
	margin-bottom: 0;
}
```
```html
<h2>Title</h2>
<p>Paragraph example.</p>
<p>Paragraph example.</p>
<p>Paragraph example.</p>

<div class=”box”>
	<p>Paragraph example.</p>
	<p>Paragraph example.</p>
</div>
```

Ví dụ trên sẽ chỉ áp dụng các style được chỉ định cho các phần tử văn bản ngay sau các phần tử văn bản khác. Điều này có nghĩa là phần tử văn bản đầu tiên trên một trang sẽ không nhận được các style này. Ngoài ra, nếu một phần tử khác xuất hiện giữa hai đoạn văn, thì đoạn thứ hai của cả hai sẽ không được áp dụng style.

**Attribute Selector:** nhắm đến các phần tử dựa trên sự xuất hiện và giá trị của thuộc tính HTML. Được khai báo bằng dấu ngoặc vuông.

```css
input [type=”text”] {
	background-color: #444;
	width: 200px;
}
```
```html
<input type="text">
```

### 6. CSS Preprocessor là gì? SASS vs LESS vs Stylus?

CSS Preprocessor là các phiên bản mở rộng của ngôn ngữ CSS (ngôn ngữ tiền xử lý CSS) được viết xử lý trước sau đó sẽ biên dịch ra các đoạn mã CSS thông thường. Nhiệm vụ của các CSS Preprocessor là giúp bạn logic hóa và cấu trúc các đoạn mã CSS, từ đó đưa CSS trở nên gần hơn với 1 ngôn ngữ lập trình. Bạn có thể viết CSS theo thứ tự rõ ràng, quản lý các biến đã được định nghĩa sẵn, có thể tự động nén tập tin CSS lại để bạn tiết kiệm dung lượng. Hiện tại có thể có rất nhiều CSS Preprocessor nhưng có phỗ biến nhất trong số đó là SASS, LESS và Stylus.

#### SASS

Là viết tắt của Syntactically Awesome Style Sheets. SASS có thể được viết theo hai cú pháp là SASS và SCSS.

- SASS dựa trên thụt lề còn SCSS (Sassy CSS) thì không.
- SASS sử dụng phần mở rộng .sass trong khi SCSS sử dụng phần mở rộng .scss.
- SASS không sử dụng dấu ngoặc nhọn hoặc dấu chấm phẩy. SCSS sử dụng nó, giống như CSS.

Cú pháp SASS

```css
$font-color: #fff 
$bg-color: #00f

#box
	color: $font-color
	background: $bg-color
```

Cú pháp SCSS

```css
$font-color: #fff;
$bg-color: #00f;

#box{
	color: $font-color;
	background: $bg-color;
}
```

#### LESS

Là viết tắt của Leaner Stylesheets. LESS có thể được thêm dễ dàng vào bất kỳ dự án javascript nào bằng cách sử dụng NPM hoặc file less.js. Nó sử dụng phần mở rộng `.less`.

Cú pháp LESS giống như SCSS với một số ngoại lệ. LESS sử dụng @ để xác định các biến.

```css
@font-color: #fff;
@bg-color: #00f

#box{
	color: @font-color;
	background: @bg-color;
}
```

#### Stylus

Stylus cung cấp rất nhiều tính linh hoạt trong việc viết cú pháp, hỗ trợ CSS thuần cũng như cho phép bỏ qua dấu ngoặc, dấu hai chấm và dấu chấm phẩy. Nó không sử dụng @ hoặc $ để xác định các biến.

```css
/* STYLUS SYNTAX WRITTEN LIKE NATIVE CSS */
font-color= #fff;
bg-color = #00f;

#box {
	color: font-color;
	background: bg-color;
}

/* OR */

/* STYLUS SYNTAX WITHOUT CURLY BRACES */
font-color= #fff;
bg-color = #00f;

#box
	color: font-color;
	background: bg-color;
```

### 7. VH/VM trong CSS là gì?

Đây là một đơn vị CSS được sử dụng để đo chiều cao và chiều rộng theo tỷ lệ phần trăm đối với viewport. Nó được sử dụng chủ yếu trong các kỹ thuật thiết kế reponsive. Số đo VH bằng 1/100 chiều cao của viewport. Nếu chiều cao của trình duyệt là 1000px, thì 1vh bằng 10px. Tương tự, nếu chiều rộng là 1000px, thì 1 vw bằng 10px.

### 8. Sự khác biệt giữa reset và normalize CSS?

Reset CSS: nhằm mục đích xoá tất cả thiết lập style mặc định từ trình duyệt. Ví dụ như margin, padding, font-size của tất cả phần tử đó được reset lại giống nhau.

Normalize CSS: nhằm mục đích làm cho các style mặc định nhất quán trên trình duyệt. Nó cũng sửa các lỗi phổ biến trên trình duyệt.

### 9. Sự khác biệt giữa inline, block và inline-block?

**Block**: Các phần tử block luôn bắt đầu trên một dòng mới. Chúng cũng sẽ chiếm không gian trên toàn bộ hàng hay chiều rộng. Danh sách các phần tử block là `<div>`, `<p>`.

**Inline**: Các phần tử inline không bắt đầu trên dòng mới, mà nó xuất hiện cùng dòng với các thẻ bên cạnh chúng. Ví dụ các phần tử inline là `<span>`, `<strong>` và `<img>`.

**Inline Block**: Các phần tử inline-block tương tự inline, ngoại trừ chúng có thể có phần padding và margin và đặt các giá trị height và width.

### 10. Việc kiểm tra trang web trên các trình duyệt khác nhau có quan trọng không?

Điều quan trọng nhất là kiểm tra một trang web trong các trình duyệt khác nhau khi bạn thiết kế lần đầu tiên hoặc khi thực hiện các thay đổi lớn. Tuy nhiên, điều quan trọng là phải lặp lại các kiểm tra này theo định kỳ, vì các trình duyệt trải qua rất nhiều bản cập nhật và thay đổi.

### 11. Phần tử Pseudo và các lớp Pseudo là gì?

**Phần tử pseudo** cho phép ta tạo các mục thường không tồn tại trong DOM.

- ::before
- ::after
- ::first-letter
- ::first-line
- ::selection

Trong ví dụ bên dưới, màu sẽ xuất hiện ở dòng đầu tiên trong đoạn văn

```css
p: :first-line {
	color: #ffOOOO;
	font-variant: small-caps;
}
```

**Lớp pseudo**  chọn các phần tử thông thường nhưng trong các điều kiện nhất định như khi người dùng di chuột qua liên kết.

- :link
- :visited
- :hover
- :active
- :focus

Trong ví dụ này, màu xuất hiện khi bạn di chuyển chuột qua thẻ liên kết.

```css
/* mouse over link */
a:hover {
	color: #FFOOFF;
}
```

### 12. Làm thế nào để chỉ định các đơn vị trong CSS? Những cách khác nhau để làm điều đó là gì?

Có nhiều cách khác nhau để chỉ định các đơn vị trong CSS như px, em, pt, phần trăm (%). px (Pixel) cung cấp khả năng kiểm soát chi tiết và duy trì căn chỉnh vì 1 px hoặc nhiều của 1 px được đảm bảo trông sắc nét. px không phải là tầng. em duy trì kích thước tương đối. bạn có thể có phông chữ đáp ứng. Em, sẽ xếp tầng 1em bằng kích thước phông chữ hiện tại của phần tử hoặc mặc định của trình duyệt. Nếu bạn để font-size thành 16px thì 1em = 16px. Thực tế phổ biến là đặt kích thước phông chữ nội dung mặc định thành 62,5% (bằng 10px).

pt (điểm) thường được sử dụng trong in ấn. 1pt = 1/72 inch và nó là một đơn vị có kích thước cố định.

% (phần trăm) đặt kích thước phông chữ so với kích thước phông của nội dung. Do đó, bạn phải đặt kích thước phông chữ của phần nội dung thành kích thước hợp lý.

### 13. Liệu margin-top hoặc margin-bottom có ảnh hưởng đến các phần tử inline không?

Không, nó không ảnh hưởng đến các phần tử inline. Các phần tử inline ở cùng dòng với nội dung của trang.

### 14. Thuộc tính nào được sử dụng để thay đổi mặt phông chữ?

Chúng ta có thể sử dụng thuộc tính `font-family` để thực hiện được điều này. Thuộc tính font-family được sử dụng để chỉ định phông chữ nào cần được áp dụng trên phần tử DOM. Nó có thể chứa một số tên phông chữ như một phần của cơ chế “dự phòng” trong trường hợp trình duyệt không hỗ trợ phông chữ. Ví dụ, chúng ta có thể sử dụng:

```css
p {
    font-family: "Times New Roman", Times, serif;
}
```

Trong đoạn code trên, ta đang áp dụng thuộc tính font-family cho phần tử đoạn văn.

- Nó yêu cầu trình duyệt tìm kiếm phông chữ "Times New Roman" và áp dụng nó.
- Nếu phông chữ "Times New Roman" không được cài đặt hoặc hỗ trợ, thì nó sẽ yêu cầu trình duyệt sử dụng phông chữ Times.
- Nếu cả "Times New Roman" và "Times" đều không được hỗ trợ, thì nó sẽ yêu cầu trình duyệt sử dụng bất kỳ phông chữ chung nào được hỗ trợ thuộc serif.

Nếu bạn không muốn `font-face` của phần tử văn bản là phông chữ Times New Roman/ Times/serif và bạn muốn sử dụng phông chữ Arial/Helvetica/sans-serif, thì ta có thể cập nhật thuộc tính CSS của phần tử văn bản như:

```css
 p {
    font-family: Arial, Helvetica, sans-serif;
}
```
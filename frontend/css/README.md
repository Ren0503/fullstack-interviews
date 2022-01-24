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

### 15. Sự khác biệt giữa adaptive design và responsive design?

| Adaptive Design | Responsive Design |
|-----------------|-------------------|
| Tập trung vào thiết kế trang web dựa trên nhiều kích thước bố cục cố định | Tập trung vào việc hiển trị nội dung trên cơ sở không gian trình duyệt có sẵn |
| Khi một trang web được phát triển bằng cách sử dụng thiết kế adaptive được mở trên trình duyệt máy tính để bàn, trước tiên không gian có sẵn sẽ được phát hiện và sau đó bố cục có kích thước phù hợp nhất sẽ được chọn và sử dụng để hiển thị nội dung. Thay đổi kích thước của cửa sổ trình duyệt không ảnh hưởng đến thiết kế | Khi một trang web được phát triển bằng cách sử dụng thiết kế responsive được mở trên trình duyệt trên máy tính để bàn và khi chúng tôi cố gắng thay đổi kích thước cửa sổ trình duyệt, nội dung của trang web được sắp xếp động và tối ưu để phù hợp với cửa sổ |
| Thông thường, các thiết kế adaptive sử dụng sáu chiều rộng màn hình tiêu chuẩn - 320px, 480px, 760px, 960px, 1200px, 1600 . Các kích thước này được phát hiện và các bố cục thích hợp được tải | Thiết kế này sử dụng các truy vấn CSS để thay đổi kiểu tùy thuộc vào thuộc tính thiết bị mục tiêu để thích ứng với các màn hình khác nhau |
| Đầu tiên phải mất rất nhiều thời gian và nỗ lực để xem xét các lựa chọn và thực tế của người dùng cuối, sau đó thiết kế các giải pháp thích ứng tốt nhất có thể cho họ | Nói chung, thiết kế responsive cần ít công việc hơn để xây dựng và thiết kế các trang web linh hoạt có thể chứa nội dung từ màn hình tùy thuộc vào kích thước màn hình |
| Cung cấp nhiều quyền kiểm soát thiết kế để phát triển các trang web cho các màn hình cụ thể | Không có nhiều quyền kiểm soát thiết kế được cung cấp ở đây |

### 16. Làm thế nào để các CSS Selector ứng với các phần tử của trình duyệt?

Thứ tự của các selector phù hợp đi từ phải sang trái của biểu thức selector. Các phần tử trong DOM được trình duyệt lọc dựa trên các khóa selector và sau đó được chuyển đến các phần tử mẹ để xác định các kết quả phù hợp. Tốc độ xác định các phần tử phụ thuộc vào độ dài của chuỗi các selector. Hãy xem xét một ví dụ:

```css
p span{ 
    color: black;
}
```

![](./assets/CSS_selectors_matched_against_the_elements_by_the_browser.png)

Ở đây, trước tiên trình duyệt tìm tất cả các phần tử `span` trong DOM và sau đó nó chuyển đến từng phần tử cha của nó để kiểm tra xem chúng có phải là phần tử của đoạn `p` hay không.

Sau khi trình duyệt tìm thấy tất cả các thẻ `span` phù hợp có các phần tử `p` là cha và áp dụng màu đen cho nội dung, quá trình so sánh sẽ bị dừng lại.

### 17. Border-box khác với content-box như thế nào?

`content-box` là thuộc tính xác định giá trị mặc định cho kích thước hộp. Thuộc tính width và height chỉ bao gồm nội dung bằng cách loại trừ border và padding. Hãy xem xét một ví dụ như sau:

```css
div{
    width:300px;
    height:200px;
    padding:15px;
    border: 5px solid grey;
    margin:30px;
    -moz-box-sizing:content-box;
    -webkit-box-sizing:content-box;
    box-sizing:content-box;
}
```

Ở đây, kích thước hộp cho phần tử div được cung cấp dưới dạng `content-box`. Điều đó có nghĩa là height và width được xem xét cho nội dung div sẽ loại trừ padding và border. Chúng ta sẽ nhận được đầy đủ các thông số chiều cao và chiều rộng được chỉ định cho nội dung như trong hình bên dưới.

![](./assets/content_box.png)

`border-box` là thuộc tính bao gồm nội dung và padding, border trong thuộc tính height và width. Hãy xem ví dụ sau:

```css
div{
    width:300px;
    height:200px;
    padding:15px;
    border: 5px solid grey;
    margin:30px;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
}
```

Ở đây, kích thước hộp cho phần tử div được cung cấp dưới dạng `border-box`. Điều đó có nghĩa là height và width được xem xét cho nội dung div cũng sẽ bao gồm phần border và padding. Điều này có nghĩa là chiều cao thực của nội dung div sẽ là:

![](./assets/border_box.png)

### 18. Opacity được quy định như thế nào trong CSS3?

Opacity ám chỉ mức độ nội dung trong suốt hoặc không trong suốt. Chúng ta có thể sử dụng thuộc tính có tên opacity nhận các giá trị từ 0 đến 1. 0 chỉ định rằng phần tử là hoàn toàn trong suốt, trong đó 1 có nghĩa là phần tử hoàn toàn không trong suốt. Chúng ta có thể sử dụng thuộc tính opacity như sau:

```css
div { 
    opacity: 0.6;
}
```

Trong ví dụ trên, độ mờ 60% được áp dụng cho phần div. Thuộc tính opacity không được trình duyệt internet explorer hỗ trợ. Để làm cho nó hoạt động ở đó, chúng ta cần sử dụng thuộc tính filter là polyfill như ví dụ bên dưới.

```css
div { 
    opacity: 0.6;
    filter: alpha(opacity=60);
}
```

![](./assets/opacity_in_css3.png)

### 19. Tại sao chúng ta nên sử dụng thuộc tính float trong CSS?

Thuộc tính float được sử dụng để định vị các phần tử HTML theo chiều ngang về phía bên trái hoặc bên phải của container. Ví dụ,

```css
float-demo {
	float: right;
}
```

Ở đây, phần tử mà lớp được áp dụng đảm bảo rằng phần tử được định vị ở bên phải của container. Nếu bạn chỉ định giá trị của float ở bên trái, thì phần tử sẽ được đặt ở bên trái của container.

### 20. z-index là gì? Nó hoạt động như thế nào?

z-index được sử dụng để chỉ định cách xếp chồng theo chiều sâu của các phần tử chồng lên nhau xảy ra tại thời điểm định vị nó. Nó chỉ định thứ tự ngăn xếp theo chiều sâu của các phần tử được định vị giúp xác định cách hiển thị các phần tử diễn ra như thế nào trong trường hợp chồng chéo.

Giá trị mặc định của thuộc tính này là 0 và có thể là số dương hoặc số âm. Ngoài 0, các giá trị của z-index có thể là:

- Auto: Thứ tự ngăn xếp bằng với phần tử cha.
- Number: Có thể là dương hoặc âm. Nó xác định thứ tự ngăn xếp.
- Initial: Giá trị mặc định là 0.
- Inherit: Kế thừa giá trị từ phần tử cha.

Các phần tử có giá trị z-index nhỏ hơn được xếp chồng thấp hơn các phần tử có z-index cao hơn.

![](./assets/z-index.png)

Từ hình trên, chúng ta có thể thấy rằng khi giá trị của z-index tăng dọc theo trục z, thứ tự xếp chồng sẽ hướng về phía trên cùng của các phần tử khác dọc theo trục tung.

### 21. Các CSS selector sau đây có nghĩa là gì?

* div, p
* div p
* div ~ p
* div + p
* div > p

Ý nghĩa của chúng như sau:

* `div, p`: Selector này ngụ ý chọn tất cả các phần tử div và tất cả các phần tử p.

```html
<h1>Heading 1</h1>
<div>
	Division 1
	<p> paragraph 1</p> <!-- Will be selected -->
</div>
<p> paragraph 2</p> 
<p> paragraph 3</p> 
<div>
	Division 2
</div>
<span> Span 1 </span>
```

Ở đây, tất cả các phần tử div và phần tử p sẽ được trình duyệt chọn bất kể cha mẹ của chúng hay chúng được đặt ở đâu. Các thẻ còn lại như h1 và span bị bỏ qua.

* `div p`: Selector cho biết chọn tất cả các phần tử p nằm bên trong các phần tử div. Hãy xem xét một ví dụ dưới đây:

```html
<h1>Heading 1</h1>
<div>
    Division 1
    <p> paragraph 1</p> <!-- Will be selected -->
    <div>
        <p> Inner Div Paragraph </p> <!-- Will be selected -->
    </div>
</div>
<p> paragraph 2</p>
<p> paragraph 3</p>
<div>
    Division 2
</div>
<span> Span 1 </span>
```

Ở dây, `<p> paragraph 1</p>` và `<p> Inner Div Paragraph </p>` sẽ được chọn bởi trình duyệt và thuộc tính được áp dụng. Phần còn lại sẽ không được chọn.

* `div ~ p`: Selector này chọn tất cả các phần tử p có phần tử div đứng trước ở bất kỳ đâu.

```html
<h1>Heading 1</h1>
<div>
   Division 1
   <p> paragraph 1</p>
</div>
<p> paragraph 2</p> <!-- Will be selected -->
<p> paragraph 3</p> <!-- Will be selected -->
<div>
   Division 2
</div>
<span> Span 1 </span>
```

Ở đây, các phần tử của paragraph 2 và paragraph 3 sẽ được chọn như được đánh dấu trong đoạn code trên.

* `div + p`: Selector nàychọn tất cả các phần tử p được đặt ngay sau phần tử div.

```html
<h1>Heading 1</h1>
<div>
	Division 1
	<p> paragraph 1</p>
</div>
<p> paragraph 2</p> <!-- Will be selected -->
<p> paragraph 3</p> 
<div>
	Division 2
</div>
<span> Span 1 </span>
```

Trong trường hợp này, chúng ta có phần tử paragraph 2 ngay sau thẻ div. Do đó, chỉ phần tử đó sẽ được chọn.

* `div > p`: Selector này chọn tất cả các phần tử p có div là cha trực tiếp. Trong cùng một ví dụ dưới đây:

```html
<h1>Heading 1</h1>
<div>
	Division 1
	<p> paragraph 1</p> <!-- Will be selected -->
</div>
<p> paragraph 2</p> 
<p> paragraph 3</p> 
<div>
	Division 2
</div>
<span> Span 1 </span>
```

Chỉ `<p> paragraph 1</p>` được chọn trong trường hợp này vì nó có div là cha trực tiếp.

### 22. Thuộc tính flexbox là gì?

Flexbox Layout (hay còn gọi là Flexible Box) là một kiểu bố cục trang có khả năng tự cân đối kích thước, thay đổi chiều rộng/chiều cao và thứ tự phần tử bên trong để phù hợp với tất cả các loại thiết bị hiển thị và kích thước màn hình.

Với bố cục thông thường, bạn cần phải thiết lập kích thước của phần tử, thiết lập hiển thị dạng block hay inline, cho nó float, còn với Flexbox bạn chỉ cần thiết lập phần hiển thị theo chiều ngang hay chiều dọc, lúc đó các phần tử bên trong có thể hiển thị theo ý muốn..

Các thuộc tính flexbox:
- **flex-direction**: Thuộc tính này giúp xác định hướng container sẽ xếp chồng các mục cho linh hoạt. Các giá trị của thuộc tính này có thể là:
	+ row: xếp các mục theo chiều ngang từ trái sang phải trong flex container.
	+ column: xếp các mục theo chiều dọc từ trước ra sau trong flex container.
	+ row-reverse: xếp các mục theo chiều ngang từ phải sang trái trong flex container.
	+ column-reverse: xếp các mục theo chiều dọc từ sau ra trước trong flex container.
- **flex-wrap**: Thuộc tính này chỉ định các mục flex nên được bọc hay không. Giá trị có thể là:
	+ wrap: mục flex nên được bọc.
	+ nowrap: giá trị mặc định này là mục không được bọc.
	+ wrap-reverse: chỉ định này cho biết mục sẽ được bọc nếu cần nhưng theo thứ tự ngược.
- **flex-flow**: thuộc tính này thiết lập cả flex-direction và flex-wrap trong một dòng.
- **justify-content**: dùng cho căn chỉnh mục. Các giá trị có thể:
	+ center: có nghĩa là các mục hiện ở trung tâm của container.
	+ flex-start: đây là giá trị mặc định, sẽ được căn chỉnh từ điểm bắt đầu container.
	+ flex-end: các mục sẽ được căn chỉnh từ điểm cuối của container.
	+ space-around: các mục sẽ được căn chỉnh với khoảng trắng giữa, trước và xung quanh các mục.
	+ space-between: các mục sẽ được căn chỉnh với khoảng trắng giữa các mục.
- **align-items**: sử dụng cho căn chỉnh mục flex.
- **align-content**: sử dụng cho căn chỉnh dòng flex.

### 23. Xếp tầng trong CSS là gì?

Cascanding hay xếp tầng, đề cập đến quá trình xem xét các khai báo kiểu và xác định trọng lượng hoặc tầm quan trọng của các quy tắc tạo kiểu giúp trình duyệt chọn quy tắc nào phải được áp dụng trong thời gian xung đột. Xung đột ở đây đề cập đến nhiều quy tắc có thể áp dụng cho một phần tử HTML cụ thể. Trong những trường hợp như vậy, chúng ta cần cho trình duyệt biết phong cách nào cần được áp dụng cho phần tử. Điều này được thực hiện bằng cách xếp tầng danh sách các phần tử khai báo kiểu.

Ví dụ:

```css
p {
    color:white;
}
```

và chúng tôi cũng có khai báo sau bên dưới nó hoặc trong một biểu định kiểu khác đã được liên kết với trang:

```css
p {
    color:black;
}
```

Chúng tôi có xung đột về thuộc tính màu ở đây cho các phần tử của đoạn văn. Ở đây, trình duyệt chỉ cần phân tầng để xác định đâu là kiểu mới nhất và cụ thể nhất và áp dụng kiểu đó. Vì chúng tôi có `color:black;` như một khai báo cụ thể nhất, màu đen được áp dụng cho các phần tử của đoạn văn. Bây giờ nếu bạn muốn đảm bảo màu trắng được áp dụng cho đoạn văn, chúng ta có thể xác định trọng số cho kiểu đó bằng cách thêm `!important` như hình dưới đây:

```css
p {
    color:white !important;
}
```

`!important` đảm bảo rằng thuộc tính có trọng lượng tối đa khi có các thuộc tính xung đột khác.
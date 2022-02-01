# Câu hỏi phỏng vấn React

![](./assets/react.png)

React là một trong những thư viện phổ biến nhất hiện nay có chứa nhiều JavaScript mã nguồn mở dùng để xây dựng giao diện giao tiếp với người dùng. Nhờ công nghệ mới Render trang web mà nó có tốc độ phản hồi nhanh chóng với user. Người khai sinh ra ReactJS đó chính không ai khác đó chính là một tên tuổi mà ai ai cũng biết “Facebook”.

Nó được sử dụng tại các ông lớn (Netflix, American Express, Facebook, WhatsApp, Airbnb, eBay, Instagram,…) như một thư viện UL giúp 2 mạng xã hội lớn này xây dựng UI (giao diện với người dùng) thân thiện, có tính tương tác cao.

Điểm đến cuối cùng mà các nhà sáng tạo muốn ReactJS hướng tới đó chính là đáp ứng mục tiêu mỗi website khi đã sử dụng ReactJS thì phải đảm bảo có tốc độ Load nhanh, mượt, đơn giản và có khả năng mở rộng cao.

Việc lựa chọn công nghệ phù hợp để ứng dụng hoặc phát triển web đang trở nên khó khăn hơn. React đã được coi là thư viện/framework frontend phát triển nhanh nhất trong số tất cả. Sự phát triển của Javascript đang nổi lên và ổn định trên thị trường và nhu cầu tuyển dụng React đang tăng lên theo cấp số nhân. React rõ ràng là một lợi thế đối với các nhà phát triển front-end vì nó có đường cong học tập nhanh, trừu tượng rõ ràng và các thành phần có thể tái sử dụng. Hiện tại, vẫn chưa có dấu hiệu dùng cho React vì nó vẫn sẽ tiếp tục phát triển.

## Câu hỏi phỏng vấn React cho Fresher

### 1. React là gì?

React là một thư viện JavaScript mã nguồn mở và giao diện người dùng, rất hữu ích trong việc phát triển giao diện người dùng dành riêng cho các ứng dụng SPA. Nó hữu ích trong việc xây dựng các thành phần giao diện người dùng (UI) phức tạp và có thể tái sử dụng của các ứng dụng web và di động vì nó tuân theo mô hình dựa trên component.

Tính năng của React:
- Tăng hiệu suất của ứng dụng với Virtual DOM.
- JSX làm cho code dễ đọc và viết.
- Nó kết xuất cả phía máy khách và máy chủ.
- Dễ dàng tích hợp với các frameworks khác (Angular, BackboneJS) vì nó chỉ là một thư viện giao diện.
- Dễ dàng viết các trường hợp kiểm thử UI và tích hợp với các công cụ như JEST.

### 2. Lợi ích khi dùng React?

- ReactJS giúp cho việc viết các đoạn code Javascript sẽ trở nên dễ dàng hơn vì nó sử dụng một cú pháp đặc biệt đó chính là cú pháp JSX. Thông qua JSX cho phép nhúng code HTML và Javascript.
- ReactJS cho phép Developer phá vỡ những cấu tạo UI phức tạp thành những component độc lập. Dev sẽ không phải lo lắng về tổng thể ứng dụng web, giờ đây Developer dễ dàng chia nhỏ các cấu trúc UI/UX phức tạp thành từng component đơn giản hơn. 
Đi kèm với ReactJS là rất nhiều các công cụ phát triển giúp cho việc  debug code một cách dễ dàng hơn.
- Một trong những ưu điểm nữa của ReactJS đó là sự thân thiện với SEO. Hầu như các JS Frameworks không thân thiện với các tìm kiếm mặc dù đã được cải thiện nhiều nhưng dưới sự hỗ trợ của các render dữ liệu trả về dưới dạng web page giúp cho SEO chuẩn hơn.
- React cùng với React Native, Redux, Electro cùng với nhiều công cụ hữu ích khác giúp nhà phát triển xây dựng được đa dạng loại ứng dụng phù hợp với nhiều yêu cầu.

### 3. Hạn chế của React?

- React không phải một framework hoàn chỉnh mà chỉ là thư viện.
- Component trong React sẽ rất nhiều và mất nhiều thời gian để hiểu với các trang web phức tạp.
- Code sẽ trở nên phức tạp khi dùng template với JSX.
- Khá khó cho người mới bắt đầu.

### 4. useState() trong React là gì?

useState() là một hooks có sẵn trong React, cho phép bạn quản lý biến state của các function component. Nó được dùng khi DOM có thứ gì đó cần được điều khiển/quản lý.

Trong code bên dưới, `useState(0)` sẽ trả về một mảng trong đó tham số đầu tiên là state hiện tại của `counter` và tham số thứ hai là phương thức `setCounter` cho phép cập nhật state của counter.

```jsx
...
const [count, setCounter] = useState(0);
const [otherStuffs, setOtherStuffs] = useState(...);
...
const setCount = () => {
   setCounter(count + 1);
   setOtherStuffs(...);
   ...
};
```

Ta có thể sử dụng phương thức `setCounter()` cho cập nhật state của count ở bất cứ đâu. Trong ví dụ này, ta sử dụng `setCounter()` trong hàm `setCount` . Đây là một ý tưởng tuyệt với để quản lý state trong các function component, tránh sử dụng class component khi không cần thiết.

### 5. Keys trong React?

Key là một thuộc tính chuỗi đặc biệt dùng khi sử dụng danh sách phần tử.

![](./assets/What_are_keys_in_React.png)

Ví dụ:

```js
const ids = [1,2,3,4,5];
const listElements = ids.map((id)=>{
    return(
        <li key={id.toString()}>
            {id}
        </li>
    )
})
```

#### Ý nghĩa của keys

- Key giúp react định danh các phần tử được thêm, sửa hay xoá.
- Key đuọc cho bởi mảng phần tử cho cung cấp định danh duy nhất của từng phần tử.
- Không dùng key, React sẽ không hiểu thứ tự của từng phần tử.
- Với key, React sẽ phân biệt các phần tử riêng lẻ được thêm, sửa và xoá.
- Key được dùng cho hiển thị danh sách dữ liệu từ API.

### 6. JSX là gì?

JSX là viết tắt của JavaScript XML. Nó cho phép ta viết HTML trong JavaScript và đặt nó vào DOM mà không cần dùng `appendChild()` hay `createElement()`.

Theo trang chủ của React, JSX cung cấp cú pháp tuyệt vời hơn cho `React.createElement()`. Ví dụ

- Không dùng JSX:

```js
const text = React.createElement('p', {}, 'This is a text');
const container = React.createElement('div','{}',text );
ReactDOM.render(container,rootElement);
```

- Dùng JSX:

```jsx
const container = (
<div>
    <p>This is a text</p>
</div>
);
ReactDOM.render(container,rootElement);
```

### 7. Sự khác biệt giữa class component và function component?

Trước khi giới thiệu hooks ở phiên bản 16, các function component được gọi là stateless component và ít khi được dùng trong React. Sau khi hook ra đời, các function component giờ đã ngang hàng với class component.

Dù function component đang là trend hiện tại, nhưng class component vẫn còn rất quan trọng. Dưới đây là một vài so sánh cơ bản 

- **Khai báo**

Function component giống như một hàm thông thường trong JS, ta có thể tạo kiểu arrow function hoặc function:

```jsx
function card(props){
    return(
        <div className="main-container">
            <h2>Title of the card</h2>
        </div>
    )
}

const card = (props) =>{
    return(
        <div className="main-container">
            <h2>Title of the card</h2>
        </div>
    )
}
```

Class component sử dụng cú pháp tạo lớp của ES6

```jsx
class Card extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="main-container">
                <h2>Title of the card</h2>
            </div>
        )
    }
}
```

- **Xử lý props**

Ta thử render component dưới đây theo cả hai cách:

```jsx
<Student Info name="Vivek" rollNumber="23" />
```

Trong function component, xử lý props rất thẳng thắn. Bất ký props nào cũng được xem như tham số của function component có thể xử lý trực tiếp:

```jsx
function StudentInfo(props){
    return(
        <div className="main">
            <h2>{props.name}</h2>
            <h4>{props.rollNumber}</h4>
        </div>
    )
}
```

Với class component, props được xử lý bằng `this`:

```jsx
class StudentInfo extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="main">
                <h2>{this.props.name}</h2>
                <h4>{this.props.rollNumber}</h4> 
            </div>
        )
    }
}
```

- **Xử lý state**

Function component sử dụng hook để quản lý state. Hook hữu ích nhất là `useState` cho thiết lập state trong component.

```jsx
function ClassRoom(props){
    let [studentsCount,setStudentsCount] = useState(0);
    
    const addStudent = () => {
        setStudentsCount(++studentsCount);
    }
        
    return(
        <div>
            <p>Number of students in class room: {studentsCount}</p>
            <button onClick={addStudent}>Add Student</button>
        </div>
    )
}
```

Ta không thể sử dụng hook bên trong class component, thế nên ta vẫn phải xử lý state bằng `this` trong class component.

```jsx
class ClassRoom extends React.Component{
    constructor(props){
        super(props);

        this.state = {studentsCount : 0};
        this.addStudent = this.addStudent.bind(this);
    }
    
    addStudent(){
        this.setState((prevState)=>{
            return {studentsCount: prevState.studentsCount++}
        });
    }
    
    render(){
        return(
            <div>
                <p>Number of students in class room: {this.state.studentsCount}</p>
                <button onClick={this.addStudent}>Add Student</button>
            </div>
        )
    }
}
```

### 8. Virtual DOM là gì?

Virtual DOM được xây dựng như 1 lớp nằm trên DOM. Virtual DOM cung cấp một phương tiện bổ trợ cho DOM và hệ thống các sự kiện (events system), thay vì tác động trực tiếp đến DOM. Cụ thể hơn, Virtual DOM được sử dụng để tái thể hiện (re-render) hiệu quả DOM bằng cách sử dụng thuật toán tìm sự khác biệt và chỉ tái thể hiện những thành phần bị thay đổi. Việc này giúp việc thực hiện vô cùng nhanh. React giữ lại 2 phiên bản của 1 Virtual DOM: nguyên bản và bản được cập nhật.

![](./assets/virtual_DOM.png)
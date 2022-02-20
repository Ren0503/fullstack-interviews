# Câu hỏi phỏng vấn React

![](./assets/react.png)

React là một thư viện JavaScript mã nguồn mở, linh hoạt và hiệu quả cho phép các nhà phát triển tạo ra các ứng dụng web đơn giản, nhanh chóng và có thể mở rộng. Jordan Walke, một kỹ sư phần mềm làm việc cho Facebook đã tạo ra React. Nó được triển khai lần đầu tiên trên news feed của Facebook vào năm 2011 và trên Instagram vào năm 2012. Các nhà phát triển từ nền tảng Javascript có thể dễ dàng phát triển các ứng dụng web với sự trợ giúp của React.

Ở hiện tại, việc lựa chọn công nghệ phù hợp để ứng dụng hoặc phát triển web đang trở nên khó khăn hơn. React đã được coi là thư viện/framework frontend phát triển nhanh nhất trong số tất cả. Sự phát triển của Javascript đang nổi lên và ổn định trên thị trường và nhu cầu tuyển dụng React đang tăng lên theo cấp số nhân. React rõ ràng là một lợi thế đối với các nhà phát triển front-end vì nó có đường cong học tập nhanh, trừu tượng rõ ràng và các thành phần có thể tái sử dụng. Hiện tại, vẫn chưa có dấu hiệu dừng cho React vì nó vẫn sẽ tiếp tục phát triển.

## Mục lục

[1. React là gì](#1-react-là-gì)

[2. Lợi ích khi dùng React?](#2-lợi-ích-khi-dùng-react)

[3. Hạn chế của React?](#3-hạn-chế-của-react)

[4. useState() trong React là gì?](#4-usestate-trong-react-là-gì)

[5. Keys trong React?](#5-keys-trong-react)

[6. JSX là gì?](#6-jsx-l%C3%A0-g%C3%AC)

[7. Sự khác biệt giữa class component và function component?](#7-s%E1%BB%B1-kh%C3%A1c-bi%E1%BB%87t-gi%E1%BB%AFa-class-component-v%C3%A0-function-component)

[8. Virtual DOM là gì?](#8-virtual-dom-l%C3%A0-g%C3%AC)

[9. Sự khác biệt giữa controlled component và uncontrolled component?](#9-s%E1%BB%B1-kh%C3%A1c-bi%E1%BB%87t-gi%E1%BB%AFa-controlled-component-v%C3%A0-uncontrolled-component)

[10. Props trong React là gì?](#10-props-trong-react-l%C3%A0-g%C3%AC)

[11. Giải thích state và props?](#11-gi%E1%BA%A3i-th%C3%ADch-state-v%C3%A0-props)

[12. Các kiểu side effect trong React component?](#12-c%C3%A1c-ki%E1%BB%83u-side-effect-trong-react-component)

[13. Prop drilling trong React?](#13-prop-drilling-trong-react)

[14. Error boundary là gì?](#14-error-boundary-l%C3%A0-g%C3%AC)

[15. React Hooks là gì?](#15-react-hooks-l%C3%A0-g%C3%AC)

[16. Tại sao lại cần React Hook?](#16-t%E1%BA%A1i-sao-l%E1%BA%A1i-c%E1%BA%A7n-react-hook)

[17. Các quy tắc sử dụng React Hooks?](#17-c%C3%A1c-quy-t%E1%BA%AFc-s%E1%BB%AD-d%E1%BB%A5ng-react-hooks)

[18. Cách dùng useEffect?](#18-c%C3%A1ch-d%C3%B9ng-useeffect)

[19. Sử dụng refs với React Hooks?](#19-s%E1%BB%AD-d%E1%BB%A5ng-refs-v%E1%BB%9Bi-react-hooks)

[20. Hook tuỳ chỉnh là gì?](#20-hook-tu%E1%BB%B3-ch%E1%BB%89nh-l%C3%A0-g%C3%AC)

[21. Strict mode trong React là gì?](#21-strict-mode-trong-react-l%C3%A0-g%C3%AC)

[22. Ngăn chặn re-render trong React?](#22-ng%C4%83n-ch%E1%BA%B7n-re-render-trong-react)

[23. Các cách khác nhau để chỉnh style component?](#23-c%C3%A1c-c%C3%A1ch-kh%C3%A1c-nhau-%C4%91%E1%BB%83-ch%E1%BB%89nh-style-component)

[24. Các kỹ thuật tối ưu hiệu suất ứng dụng React?](#24-c%C3%A1c-k%E1%BB%B9-thu%E1%BA%ADt-t%E1%BB%91i-%C6%B0u-hi%E1%BB%87u-su%E1%BA%A5t-%E1%BB%A9ng-d%E1%BB%A5ng-react)

[25. Truyền dữ liệu giữa các component?](#25-truy%E1%BB%81n-d%E1%BB%AF-li%E1%BB%87u-gi%E1%BB%AFa-c%C3%A1c-component)

[26. High-Order Component là gì?](#26-high-order-component-l%C3%A0-g%C3%AC)

[27. Các giai đoạn trong vòng đời component?](#27-c%C3%A1c-giai-%C4%91o%E1%BA%A1n-trong-v%C3%B2ng-%C4%91%E1%BB%9Di-component)

[28. Các phương thức trong vòng đời component?](#28-c%C3%A1c-ph%C6%B0%C6%A1ng-th%E1%BB%A9c-trong-v%C3%B2ng-%C4%91%E1%BB%9Di-component)

[29. React hook có làm việc với static typing?](#29-react-hook-c%C3%B3-l%C3%A0m-vi%E1%BB%87c-v%E1%BB%9Bi-static-typing)

[30. Các kiểu Hooks trong React?](#30-c%C3%A1c-ki%E1%BB%83u-hooks-trong-react)

[31. Sự khác biệt giữa lớp và React Hook?](#31-s%E1%BB%B1-kh%C3%A1c-bi%E1%BB%87t-gi%E1%BB%AFa-l%E1%BB%9Bp-v%C3%A0-react-hook)

[32. Hiệu suất của React Hook so với lớp?](#32-hi%E1%BB%87u-su%E1%BA%A5t-c%E1%BB%A7a-react-hook-so-v%E1%BB%9Bi-l%E1%BB%9Bp)

[33. Các hook có thay thế được lớp hoàn toàn?](#33-c%C3%A1c-hook-c%C3%B3-thay-th%E1%BA%BF-%C4%91%C6%B0%E1%BB%A3c-l%E1%BB%9Bp-ho%C3%A0n-to%C3%A0n)

[34. React Router là gì?](#34-react-router-l%C3%A0-g%C3%AC)

[35. React Hook có thể thay thế Redux?](#35-react-hook-c%C3%B3-th%E1%BB%83-thay-th%E1%BA%BF-redux)

[36. Render có điều kiện trong React?](#36-render-c%C3%B3-%C4%91i%E1%BB%81u-ki%E1%BB%87n-trong-react)

[37. Sự khác biệt giữa NavLink và Link?](#37-s%E1%BB%B1-kh%C3%A1c-bi%E1%BB%87t-gi%E1%BB%AFa-navlink-v%C3%A0-link)

[38. withRouter trong react-router-dom là gì?](#38-withrouter-trong-react-router-dom-l%C3%A0-g%C3%AC)

[39. Cách hiển thị dữ liệu API với Axios?](#39-c%C3%A1ch-hi%E1%BB%83n-th%E1%BB%8B-d%E1%BB%AF-li%E1%BB%87u-api-v%E1%BB%9Bi-axios)

[40. Caching trong React?](#40-caching-trong-react)



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
- ReactJS cho phép nhà phát triển phá vỡ những cấu trúc UI phức tạp thành những component độc lập. Các nhà phát triển sẽ không phải lo lắng về tổng thể ứng dụng web, giờ đây có thể dễ dàng chia nhỏ các cấu trúc UI/UX phức tạp thành từng component đơn giản hơn. 
- Đi kèm với ReactJS là rất nhiều các công cụ phát triển giúp cho việc debug code một cách dễ dàng hơn.
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
- Key được cho bởi mảng phần tử cho cung cấp định danh duy nhất của từng phần tử.
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

Dù function component đang là trend hiện tại, nhưng class component vẫn còn rất quan trọng. Dưới đây là một vài so sánh cơ bản:

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

const card = (props) => {
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

Virtual DOM là một khái niệm trong đó biểu diễn ảo của DOM thực được lưu giữ bên trong bộ nhớ và được đồng bộ hóa với DOM thực bởi một thư viện như ReactDOM.

![](./assets/virtual_DOM.png)

#### Tại sao cần Virtual DOM

Thao tác DOM là một phần không thể thiếu của bất kỳ ứng dụng web nào, nhưng thao tác DOM khá chậm khi so sánh với các thao tác khác trong JavaScript. Hiệu quả của ứng dụng bị ảnh hưởng khi một số thao tác DOM đang được thực hiện. Hầu hết các framework JavaScript cập nhật toàn bộ DOM ngay cả khi một phần nhỏ của DOM thay đổi.

Ví dụ: hãy xem xét một danh sách đang được hiển thị bên trong DOM. Nếu một trong các mục trong danh sách thay đổi, toàn bộ danh sách sẽ được hiển thị lại thay vì chỉ hiển thị mục đã được thay đổi/cập nhật. Đây được gọi là cập nhật không hiệu quả.

Để giải quyết vấn đề cập nhật không hiệu quả, team React đã đưa ra khái niệm virtual DOM.

![](./assets/virtual_DOM-how_does_it_work.png)

Đối với mỗi đối tượng DOM, có một đối tượng DOM ảo tương ứng (bản sao), có các thuộc tính giống nhau. Sự khác biệt chính giữa đối tượng DOM thực và đối tượng DOM ảo là bất kỳ thay đổi nào trong đối tượng DOM ảo sẽ không phản ánh trực tiếp trên màn hình. Hãy coi một đối tượng DOM ảo như một bản thiết kế của đối tượng DOM thực. Bất cứ khi nào một phần tử JSX được hiển thị, mọi đối tượng DOM ảo sẽ được cập nhật.

> Lưu ý- Người ta có thể nghĩ rằng việc cập nhật mọi đối tượng DOM ảo có thể không hiệu quả, nhưng không phải vậy. Cập nhật DOM ảo nhanh hơn nhiều so với cập nhật DOM thực vì chúng tôi chỉ cập nhật bản thiết kế của DOM thực.

React sử dụng hai virtual DOM để hiển thị giao diện người dùng. Một cái được sử dụng để lưu trữ trạng thái hiện tại của các đối tượng và cái còn lại để lưu trữ trạng thái trước đó của các đối tượng. Bất cứ khi nào DOM ảo được cập nhật, React so sánh hai DOM ảo và biết về đối tượng DOM ảo nào đã được cập nhật. Sau khi biết đối tượng nào đã được cập nhật, React chỉ hiển thị các đối tượng đó bên trong DOM thực thay vì hiển thị DOM thực hoàn chỉnh. Bằng cách này, với việc sử dụng virtual DOM, react sẽ giải quyết được vấn đề cập nhật không hiệu quả.

### 9. Sự khác biệt giữa controlled component và uncontrolled component?

| Tính năng | Uncontrolled | Controlled 
|-|-|-|
| Truy xuất giá trị một lần (như khi submit) | Yes | Yes |
| Xác thực submit | Yes | Yes |
| Xác thực trường | No | Yes |
| Điều kiện cho kích hoạt nút submit | No | Yes |
| Định dạng đầu vào | No | Yes |
| Cung cấp nhiều input cho một mẫu dữ liệu | No | Yes |
| Input động | No | Yes |

**Controlled component**

Trong controlled component, giá trị của phần tử input được điều khiển bởi React. Ta lưu trữ trạng thái của phần tử input trong code, và sử dụng callback, với bất kỳ thay đổi nào đến input sẽ được phản ánh tương tự trong code.

Khi người dùng nhập dữ liệu vào phần tử input trong controlled component, hàm `onChange` kích hoạt và trong code, ta kiểm tra giá trị nhập vào là hợp lệ hay không. Nếu hợp lệ, ta thay đổi trạng thái và re-render phần tử input với giá trị mới.

```jsx
function FormValidation(props) {
    let [inputValue, setInputValue] = useState("");
    let updateInput = e => {
        setInputValue(e.target.value);
    };
    return (
        <div>
            <form>
            <input type="text" value={inputValue} onChange={updateInput} />
            </form>
        </div>
    );
}
```

Như đoạn code trên, giá trị của phần tử input được xác định bởi biến `inputValue`. Bất kỳ thay đổi nào đến phần tử input sẽ được xử lý bởi hàm `updateInput`.

**Uncontrolled component**

Trong uncontrolled component, giá trị của phần tử input được xử lý bởi chính DOM. Các phần tử input này hoạt động giống như phần tử input HTML.

Trạng thái của phần tử input được xử lý bởi DOM. Nên khi giá trị input thay đổi, callback sẽ không được gọi. Hoặc có thể nói là React không thực hiện bất cứ hàng động nào khi xảy ra thay đổi.

Khi người dùng nhập dữ liệu vào trường input, dữ liệu cập nhật được hiển thị trực tiếp. Để truy cập giá trị phần tử input, ta có thể dùng **ref**.

```jsx
function FormValidation(props) {
    let inputValue = React.createRef();
    let handleSubmit = e => {
        alert(`Input value: ${inputValue.current.value}`);
        e.preventDefault();
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" ref={inputValue} />
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}
```

### 10. Props trong React là gì?

Props trong React là dữ liệu được truyền cho các component. Nó có thể là giá trị đơn hoặc đối tượng có tập giá trị được truyền cho component trong suốt quá trình bằng cách thực hiện truyền tham số (tương tự với cú pháp thuộc tính trong HTML). Ta có thể nói props là dữ liệu kế thừa được truyền từ component cha sang component con.

Các chức năng của props:
- Truyền dữ liệu tuỳ chỉnh đến component.
- Kích hoạt thay đổi trạng thái
- Sử dụng cho render dữ liệu.

### 11. Giải thích state và props?

| Props | State |
|-|-|
| Bất biến | Có thể thay đổi |
| Hiệu suất tốt hơn | Phạm vi cục bộ |
| Truyền được cho component khác | Truyền được giống như props |
| | Có phương thức setState để đổi giá trị |
| | Đổi trạng bất đồng bộ |

**React State**

Tất cả component đều có sẵn đối tượng state, bao gồm tất cả giá trị thuộc tính cùng với component đó. Nói cách khác, đối tượng state điều khiển hành vi của component. Bất kỳ thay đổi giá trị thuộc tính nào của đối tượng state sẽ dẫn đến re-render component.

*Khai báo đối tượng state*

```jsx
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brand: "BMW",
            color: "black"
        }
    }
}
```

*Dùng và cập nhật đối tượng state*

```jsx
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "BMW",
            color: "Black"
        };
    }
    changeColor() {
        this.setState(prevState => {
            return { color: "Red" };
        });
    }
    render() {
        return (
            <div>
                <button onClick={() => this.changeColor()}>Change Color</button>
                <p>{this.state.color}</p>
            </div>
        );
    }
}
```

**React Props**

Tất cả component đều nhận vào một đối thượng tham số gọi là props (viết tắt của properties). Props có thể được truyền đi component khác và các component này nhận props như một đối số.

*Truyền props cho component*

```jsx
<Car brand="Mercedes"/>
```

*Nhận props từ component khác*

Trong class:

```jsx
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: this.props.brand,
            color: "Black"
        };
    }
}
```

Trong function:

```jsx
function Car(props) {
    let [brand, setBrand] = useState(props.brand);
}
```

### 12. Các kiểu side effect trong React component?

Có hai kiểu side effect trong React.
- **Effect không có cleanup:** Side effect này sẽ được sử dụng trong `useEffect` không hạn chế trình duyệt cập nhật màn hình. Nó cũng cải thiện khả năng phản hồi của một ứng dụng. Một vài ví dụ phổ biến là yêu cầu mạng, logging, chỉnh sửa DOM thủ công, v.v.
- **Effect có cleanup:** Một số Hook effect sẽ yêu cầu cleanup sau khi cập nhật xong DOM. Ví dụ: nếu bạn muốn thiết lập đăng ký nguồn dữ liệu bên ngoài, nó yêu cầu dọn dẹp bộ nhớ, nếu không có thể xảy ra sự cố rò rỉ bộ nhớ. Có một thực tế là React sẽ thực hiện dọn dẹp bộ nhớ khi các component unmounting. Nhưng các effect sẽ chạy mỗi phương thức `render()` hơn là cho bất kỳ phương thức cụ thể nào. Do đó, chúng ta có thể nói rằng, trước khi thực thi các hiệu ứng thời gian, React cũng sẽ dọn dẹp các hiệu ứng từ lần hiển thị trước đó.

### 13. Prop drilling trong React?

Đôi khi trong việc phát triển các ứng dụng React, cần phải truyền dữ liệu từ một thành phần cao hơn trong hệ thống phân cấp đến một thành phần được lồng sâu vào nhau. Để truyền dữ liệu giữa các thành phần như vậy, ta chuyển các props từ một thành phần nguồn và tiếp tục truyền phần hỗ trợ cho thành phần tiếp theo trong hệ thống phân cấp cho đến khi chúng ta tiếp cận thành phần được lồng sâu.

Hạn chế của sử dụng prop drilling là việc truy cập dữ liệu sẽ vô cùng phức tạp trong các ứng dụng lớn.

### 14. Error boundary là gì?

Được giới thiệu ở React v16, error boundary cung cấp một cách để xử lý lỗi xảy ra trong giai đoạn render.

Bất kỳ component nào sử dụng các phương thức lifecycle cũng được xem là một error boundary. Các vị trí mà error boundary có thể được phát hiện:

1. Giai đoạn Render
2. Trong một phương thức lifecycle
3. Trong constructor

**Không dùng error boundary**

```jsx
class CounterComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counterValue: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter(){
        this.setState(prevState => counterValue = prevState+1);
    }
    render(){
        if(this.state.counter === 2){
            throw new Error('Crashed');
        }
        return(
            <div>
                <button onClick={this.incrementCounter}>Increment Value</button>
                <p>Value of counter: {this.state.counterValue}</p>
            </div>
        )
    }
}
```

Trong đoạn code trên, khi `counterValue` bằng 2, ta có lỗi bên trong phương thức render.

Khi không dùng error boundary, ta sẽ thấy một trang trống thay vì lỗi. Bất cứ lỗi nào trong phương thức render đều dẫn đến unmounting component. Để hiển thị lỗi khi đó, ta sử dụng error boundary.

**Sử dụng error boundary**: error bounary là một component sử dụng một hoặc cả hai phương thức sau:

- `getDerivedStateFromError`
-  `componentDidCatch`

Ví dụ:

```jsx
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {     
        return { hasError: true }; 
    }
    componentDidCatch(error, errorInfo) {       
        logErrorToMyService(error, errorInfo); 
    }
    render() {
        if (this.state.hasError) {     
            return <h4>Something went wrong</h4>     
        }
        return this.props.children;
    }
}
```

Trong đoạn code trên, hàm `getDerivedStateFromError` render một fallback UI interface khi phương thực render có lỗi.

`componentDidCatch` ghi lại thông tin lỗi vào một dịch vụ theo dõi lỗi.

Bây giờ với error boundary ta có thể render CounterComponent như sau:

```jsx
<ErrorBoundary>
    <CounterComponent />
</ErrorBoundary>
```

### 15. React Hooks là gì?

React Hooks là các hàm có sẵn cho phép các nhà phát triển sử dụng các phương thức trạng thái (state) và vòng đời (lifecycle) trong các component React. Đây là những tính năng mới được bổ sung có sẵn trong phiên bản React 16.8. Mỗi lifecycle của một component có 3 giai đoạn bao gồm mount, unmount và update. Cùng với đó, các component có state và props. Hooks sẽ cho phép các nhà phát triển sử dụng các phương pháp này để cải thiện việc tái sử dụng code với tính linh hoạt cao hơn trong việc điều hướng cây component.

Sử dụng Hook, tất cả các tính năng của React có thể được sử dụng mà không cần viết các class component. Ví dụ, trước phiên bản React 16.8, nó yêu cầu một class component để quản lý trạng thái của một component. Nhưng bây giờ bằng cách sử dụng hook useState, chúng ta có thể giữ trạng thái trong một function component.

### 16. Tại sao lại cần React Hook?

React hooks đã được giới thiệu trong phiên bản 16.8 của React. Trước đây, các function component được gọi là stateless component. Chỉ các class component mới được sử dụng cho các phương thức quản lý trạng thái và vòng đời. Nhưng vì class component quá nặng nếu như chỉ cần thay đổi một vài state hay phương thức trong lifecycle. Điều đó dẫn đến sự ra đời của React Hooks.

Ví dụ: sử dụng hook useState

```jsx
function Person(props) {
// We are declaring a state variable called name.
// setName is a function to update/change the value of name
let [name, setName] = useState('');
}
```

### 17. Các quy tắc sử dụng React Hooks?

- Chỉ có thể gọi hooks trong function component (không thể dùng trong class).
- Chỉ có thể gọi ở cấp cao, không thể gọi trong hàm, vòng lặp hay điều kiện.

### 18. Cách dùng useEffect?

React Hook useEffect được dùng cho thực hiện side effect trong function component. Với useEffect, ta sẽ thông báo cho React biết các component của bạn yêu cầu phải thực hiện điều gì đó sau khi render component hoặc sau khi thay đổi trạng thái. Function đã được truyền sẽ được React nhớ và gọi sau khi quá trình cập nhật DOM kết thúc. Nhừo điều này ta có thể thực hiện các thao tác khác nhau như tìm nạp dữ liệu, thiệt lập tiêu đều, quản lý DOM trực tiếp,... mà không nhắm đến giá trị output. Hook useEffect sẽ chạy theo mặc định sau lần render đầu tiên và mỗi lần cập nhật component. React đảm bảo tằng DOM sẽ  được cập nhật vào thời điểm effect chạy bởi nó.

useEffect nhận vào hai thám số: `useEffect(callback[, dependencies]);`

Trong đó tham số calback đầu tiên biểu diễn hàm chứa logic side-effect và sẽ thực thi ngay lập tức khi ta thực hiện thay đổi lên DOM. Tham số dependencies thứ hai biểu diễn mảng các dependencies. useEffect chỉ thực thi nếu các dependencies có thay đổi khi render.

Ví dụ:

```jsx
import { useEffect } from 'react';

function WelcomeGreetings({ name }) {
    const msg = `Hi, ${name}!`;     // Calculates output

    useEffect(() => {
        document.title = `Welcome to you ${name}`;    // Side-effect!
    }, [name]);

    return <div>{msg}</div>;         // Calculates output
}
```

Đoạn code trên sẽ cập nhật tiêu đề document nó được xem như một side-effect vì nó không tính toán output trực tiếp. Đó là lý do tại sao cập nhật tiêu đề document  được đặt trong callback và cung cấp cho `useEffect()`.

Hãy cân nhắc rằng bạn không muốn thực hiện cập nhật tiêu đề document mỗi lần render component `WelcomeGreetings` và bạn muốn nó chỉ được thực thi khi prop `name` thay đổi thì bạn cần cung cấp `name` làm phụ thuộc đến `useEffect(callback, [name])`.

### 19. Sử dụng refs với React Hooks?

Trước đây, các ref chỉ giới hạn trong các class component nhưng giờ đây nó cũng có thể được truy cập trong các function component thông qua `useRef` trong React Hook.

Các refs được sử dụng cho:

- Quản lý tiêu điểm, phát lại phương tiện hoặc lựa chọn văn bản.
- Tích hợp với các thư viện DOM của bên thứ ba.
- Kích hoạt các ảnh động bắt buộc.

### 20. Hook tuỳ chỉnh là gì?

Một hook tùy chỉnh(custom hooks) là một hàm trong Javascript có tên bắt đầu bằng **use** và gọi các hook khác. Nó là một phần của bản cập nhật hook React v16.8 và cho phép bạn sử dụng lại logic trạng thái mà không cần phải cấu trúc lại cấu trúc phân cấp component.

Trong hầu hết các trường hợp, hook tùy chỉnh được coi là đủ để thay thế render props và HoC (High-Order components) và giảm số lượng lồng ghép cần thiết. Hooks  tuỳ chỉnh sẽ cho phép bạn tránh nhiều lớp trừu tượng hoặc wrapper hell có thể đi kèm với render props và HoC.

Nhược điểm của Hooks tuỳ chỉnh là nó không thể được sử dụng bên trong các lớp.

## Câu hỏi phỏng vấn React cho Experienced

### 21. Strict mode trong React là gì?

StrictMode là công cụ được thêm vào ở React v16.3 để highlight các vấn đề tiềm ẩn trong React. Nó thực hiện kiểm tra bổ sung lên ứng dụng.

```jsx
function App() {
    return (
        <React.StrictMode>
            <div classname="App">
                <Header/>
                <div>
                    Page Content
                </div>
                <Footer/>
            </div>
        </React.StrictMode>
    );
}
```

Để khởi động StrictMode, thẻ `<React.StrictMode>` được thêm vào ứng dụng:

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(
<React.StrictMode>
  <App />
</React.StrictMode>,
rootElement
);
```

StrictMode giúp giải quyết các vấn đề sau:

- **Xác định các component với phương thức lifecycle**
    - Một số phương thức lifecycle không an toàn khi dùng bất đồng bộ trong ứng dụng react. Với thư viện bên thứ 3, thật khó để đảm bảo một số phương thức lifecycle nhất định không được dùng.
    - StrictMode giúp ta bằng cách cung cấp cảnh báo với bất kỳ class component nào sử dụng phương thức lifecycle không an toàn.
- **Cảnh báo sử dụng chuỗi API kế thừa**
    - Nếu sử dụng phiên bản cũ của React, **callback ref** được đề nghị là cách để quản lý **refs** thay vì dùng **chuỗi refs**. StringMode đưa ra cảnh báo nếu bản sử dụng chuỗi ref để quản lý refs.
- **Cảnh báo sử dụng findDOMNode**
    - Phương thức `findDOMNode()` dùng để tìm cây của node DOM. Phương thức này đã không còn hỗ trợ trogn React. Do đó, StrictMode đưa ra cảnh báo khi ta dùng phương thức này.

### 22. Ngăn chặn re-render trong React?

Nguyên nhân cho re-render:
    - Re-render một component và con của nó xảy ra khi props hoặc state của component thay đổi
    - Re-render component không có cập nhật, sẽ ảnh hưởng đến hiệu suất của ứng dụng

Cách để chặn re-render:

```jsx
class Parent extends React.Component {
    state = { messageDisplayed: false };
    
    componentDidMount() {
        this.setState({ messageDisplayed: true });
    }
    
    render() {
        console.log("Parent is getting rendered");
        return (
            <div className="App">
                <Message />
            </div>
        );
    }
}
    
class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: "Hello, this is vivek" };
    }  
    
    render() {
        console.log("Message is getting rendered");
        return (
            <div>
                <p>{this.state.message}</p>
            </div>
        );
    }
}
```

Component `Parent` là cha của component `Message`. Bất kỳ thay đổi nào đến `Parent` sẽ dẫn đến re-render ở cả `Message`. Để ngăn chặn điều này, ta sử dụng phương thức `shouldComponentUpdate()`:

```jsx
class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: "Hello, this is vivek" };
    }

    shouldComponentUpdate() {
        console.log("Does not get rendered");
        return false;
    }

    render() {
        console.log("Message is getting rendered");
        return (
            <div>
                <p>{this.state.message}</p>
            </div>
        );
    }
}
```

Như đã thấy, ta trả về false cho phương thức `shouldComponentUpdate()` ngăn chặn component con bị re-render.

### 23. Các cách khác nhau để chỉnh style component?

**Inline Styling:** ta có thể chỉnh style trực tiếp lên phần tử bằng cách dùng thuộc tính `style`. Nhớ giá trị của `style` luôn là đối tượng JavaScript:

```jsx
class RandomComponent extends React.Component {
    render() {
        return (
            <div>
            <h3 style={{ color: "Yellow" }}>This is a heading</h3>
            <p style={{ fontSize: "32px" }}>This is a paragraph</p>
            </div>
        );
    }
}
```

**Javascript Object:** ta có thể tạo đối tượng JavaScript và tập mô tả thuộc tính style. Các đối tượng có thể dùng như giá trị của thuộc tính style.

```jsx
class RandomComponent extends React.Component {
    paragraphStyles = {
        color: "Red",
        fontSize: "32px"
    };

    headingStyles = {
        color: "blue",
        fontSize: "48px"
    };

    render() {
        return (
            <div>
            <h3 style={this.headingStyles}>This is a heading</h3>
            <p style={this.paragraphStyles}>This is a paragraph</p>
            </div>
        );
    }
}
```

**CSS Stylesheet:** Ta sẽ tạo một file CSS riêng và viết tất cả style cho component trong file đó. Sau đó import nó vào file React.

```jsx
import './RandomComponent.css';

class RandomComponent extends React.Component {
    render() {
        return (
            <div>
                <h3 className="heading">This is a heading</h3>
                <p className="paragraph">This is a paragraph</p>
            </div>
        );
    }
}
```

**CSS Module:** Tương tự như file CSS, nhưng ta sửa thành `.module.css`, với cách này tên lớp sẽ được mã hoá, đồng thời nó hỗ trợ kiểu viết tương tự sass.

```css
.paragraph{
    color:"red";
    border:1px solid black;
}
```

Ta có thể import file vào component như sau:

```jsx
import styles from  './styles.module.css';

class RandomComponent extends React.Component {
    render() {
        return (
            <div>
                <h3 className="heading">This is a heading</h3>
                <p className={styles.paragraph} >This is a paragraph</p>
            </div>
        );
    }
}
```

### 24. Các kỹ thuật tối ưu hiệu suất ứng dụng React?

- **useMemo()**
    - Là hook dùng cho caching CPU.
    - Đôi khi trong các ứng dụng web, các hàm đắt (tính toán nhiều, tốn bộ nhớ) được gọi liên túc do re-render đẫn đến tốc độ render chậm, hiệu suất kém.
    - useMemo() có thể sử dụng cho cache cám hàm như vậy. Bằng cách dùng useMemo() các hàm đó chỉ được gọi khi cần thiết.
- **React.PureComponent**
    - Là class component cơ sở để kiểm tra state và props của một component để biết khi nào nó nên được cập nhật.
    - Thay vì dùng React.Component, ta có sử dụng React.PureComponent để giảm việc re-render không cần thiết.
- **Duy trì vị trí state**
    - Đây là quá trình chuyển state đến nơi bạn nhất có thể.
    - Thỉnh thoảng ta có các state không cần thiết nằm trong component cha để gây khó đọc và bảo trì hơn, thậm chí là dẫn đến re-render không cần thiết.
    - Để tốt hơn, ta chuyển các state vô nghĩa ở component cha sang một component riêng biệt.
- **Lazy Loading**
    - Đây là kỹ thuật dùng để giảm thời gian tải của ứng dụng React. Lazy loading giúp tối ưu hiệu suất ứng dụng web bằng cách chỉ tải khi cần thiết.

### 25. Truyền dữ liệu giữa các component?

![](./assets/How_to_pass_data_between_react_components.png)

**Từ component cha sang component con (dùng props)**

Ta có thể làm như sau:

```jsx
import ChildComponent from "./Child";

function ParentComponent(props) {
    let [counter, setCounter] = useState(0);
    let increment = () => setCounter(++counter);
   
    return (
        <div>
            <button onClick={increment}>Increment Counter</button>
            <ChildComponent counterValue={counter} />
        </div>
    );
}
```

Như ta có thể thấy trong đoạn code trên, ta đang hiển thị component con bên trong component cha, bằng cách cung cấp một prop tên là `counterValue`. Giá trị của `counter` được chuyển từ component cha sang con.

Ta có thể sử dụng dữ liệu được chuyển đến component con như sau:

```jsx
function ChildComponent(props) {
    return (
        <div>
            <p>Value of counter: {props.counterValue}</p>
        </div>
    );
}
```

**Từ component con sang cha (dùng callback)**

Ta có các bước sau:
- Tạo một callback trong component cha nhận dữ liệu cần thiết như tham số.
- Truyền callback này như props cho component con.
- Gửi dữ liệu từ component con bằng cách dùng callback.

Ví dụ:

Tạo callback và gửi nó như prop đến component con:

```jsx
function ParentComponent(props) {
    let [counter, setCounter] = useState(0);
    let callback = valueFromChild => setCounter(valueFromChild);

    return (
        <div>
            <p>Value of counter: {counter}</p>
            <ChildComponent callbackFunc={callback} counterValue={counter} />
        </div>
    );
}
```

Sau đó ta truyền dữ liệu từ component con đến component cha:

```jsx
function ChildComponent(props) {
    let childCounterValue = props.counterValue;
    
    return (
        <div>
            <button onClick={() => props.callbackFunc(++childCounterValue)}>
                Increment Counter
            </button>
        </div>
    );
}
```

Bây giờ khi ta click vào button, ta sẽ tăng giá trị `childCounterValue` đến `props.callbackFunc`.

### 26. High-Order Component là gì?

High-Order Component (HOC) là một hàm nhận một component làm tham số và trả về một component mới.

![](./assets/Higher_Order_Components.png)

*Tại sao lại cần HOC*

Trong phát triển ứng dụng React, ta có thể phát triển component khá giống nhau với vài sự khác biệt nhỏ. Trong hầu hết trường hợp, việc phát triển các component tương tự không phải là vấn đề, nhưng khi ứng dụng lớn hơn, chúng ta cần giữ cho code mình DRY. Do đó, chúng ta muốn một sự trừu tượng cho phép chúng ta xác định logic này ở một nơi duy nhất và chia sẻ nó trên các component. HOC cho phép chúng ta tạo ra sự trừu tượng đó.

Ví dụ:

Component sau dùng để hiển thị danh sách bài viết:

```jsx
// "GlobalDataSource" is some global data source
class ArticlesList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            articles: GlobalDataSource.getArticles(),
        };
    }
    componentDidMount() {
        // Listens to the changes added
        GlobalDataSource.addChangeListener(this.handleChange);
    }
    componentWillUnmount() {
        // Listens to the changes removed
        GlobalDataSource.removeChangeListener(this.handleChange);
    }
    handleChange() {
        // States gets Update whenver data source changes
        this.setState({
            articles: GlobalDataSource.getArticles(),
        });
    }
    render() {
        return (
            <div>
                {this.state.articles.map((article) => (
                    <ArticleData article={article} key={article.id} />
                ))}
            </div>
        );  
    }
}
```

Component sau dùng để hiển thị danh sách người dùng:

```jsx
// "GlobalDataSource" is some global data source
class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            users: GlobalDataSource.getUsers(),
        };
    }
    componentDidMount() {
        // Listens to the changes added
        GlobalDataSource.addChangeListener(this.handleChange);
    }
    componentWillUnmount() {
        // Listens to the changes removed
        GlobalDataSource.removeChangeListener(this.handleChange);
    }
    handleChange() {
        // States gets Update whenver data source changes
        this.setState({
            users: GlobalDataSource.getUsers(),
        });
    }
    render() {
        return (
            <div>
            {this.state.users.map((user) => (
                <UserData user={user} key={user.id} />
            ))}
            </div>
        );
    }
}
```

Bây giờ ta có hai component có chức năng giống nhau chỉ khác về API được gọi. Ta sẽ tạo một HOC dùng chung cho cả hai:

```jsx
// Higher Order Component which takes a component
// as input and returns another component
// "GlobalDataSource" is some global data source
function HOC(WrappedComponent, selectData) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(GlobalDataSource, props),
            };
        }
        componentDidMount() {
            // Listens to the changes added
            GlobalDataSource.addChangeListener(this.handleChange);
        }
        componentWillUnmount() {
            // Listens to the changes removed
            GlobalDataSource.removeChangeListener(this.handleChange);
        }
        handleChange() {
            this.setState({
            data: selectData(GlobalDataSource, this.props),
            });
        }
        render() {
            // Rendering the wrapped component with the latest data data
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    };
}
```

Trong đoạn code trên ta tạo HOC trả về một component và thực hiện vài hành động có thể dùng chung trên cả component `ArticleList` và `UsersList`.

Tham số thứ hai là hàm gọi cho phương thức trên API.

Ta đã giảm code trùng lặp giữa `componentDidUpdate` và `componentDidMount`. Bây giờ ta có component `ArticleList` và `UsersList` như sau:

```jsx
const ArticlesListWithHOC = HOC(ArticlesList, (GlobalDataSource) => GlobalDataSource.getArticles());
const UsersListWithHOC = HOC(UsersList, (GlobalDataSource) => GlobalDataSource.getUsers());
```

### 27. Các giai đoạn trong vòng đời component?

Có 3 giai đoạn trong vòng đời component React.
- **Mounting**: đề cập đến việc đưa phần tử vào DOM của trình duyệt. Vì React dùng virtual DOM, toàn bộ DOM của trình duyệt đã render sẽ không được làm mới. Bao gồm các phương thức trong giai đoạn này bao gồm: `constructor` và `componentDidMount`.
- **Updating**: Trong giai đoạn này, component sẽ được cập nhật khi có thay đổi state hoặc props của component. Các phương thức trong giai đoạn này: `getDerivedStateFromProps`, `shouldComponentUpdate`, `render`, và `componentDidUpdate`.
- **Unmounting**: Ở giai đoạn cuối, component sẽ bị xoá khỏi DOM. Giai đoạn này  sẽ có phương thức là `componentWillUnmount`.

![](./assets/different_phases_of_the_component_lifecycle.png)

### 28. Các phương thức trong vòng đời component?

Trong vòng đời của React sẽ có các phương thức sẽ được gọi tự động ở các giai đoạn khác nhau trong vòng đời của component và do đó nó cung cấp khả năng kiểm soát tốt những gì xảy ra tại điểm được gọi. Nó cung cấp năng lực để kiểm soát và thao tác hiệu quả những gì diễn ra trong suốt vòng đời của component.

Ví dụ: nếu bạn đang phát triển ứng dụng YouTube, thì ứng dụng sẽ sử dụng mạng để đệm video và nó tiêu tốn pin (giả sử chỉ có hai mạng này). Sau khi phát video, nếu người dùng chuyển sang bất kỳ ứng dụng nào khác, thì bạn nên đảm bảo rằng các tài nguyên như mạng và pin đang được sử dụng hiệu quả nhất. Bạn có thể dừng hoặc tạm dừng tải video vào bộ đệm, do đó sẽ ngừng sử dụng pin và mạng khi người dùng chuyển sang ứng dụng khác sau khi phát video.

Vì vậy, chúng ta có thể nói rằng nhà phát triển sẽ có thể tạo ra một ứng dụng chất lượng với sự trợ giúp của các phương pháp vòng đời và nó cũng giúp các nhà phát triển đảm bảo lập kế hoạch những gì và làm như thế nào tại các thời điểm sinh, phát triển hoặc chết của giao diện người dùng.

Các phương thức trong vòng đời:
- `constructor()`: phương thức được gọi khi component được tạo trước khi thực hiện bất kỳ hành động gì. Nó giúp tạo state và props.
- `getDerivedStateFromProps()`: nó sẽ gọi trước khi phần tử được render vào DOM. Nó giúp thiết lập đối tượng state dựa trên props khởi tạo. Phương thức `getDerivedStateFromProps` sẽ có một state như đối số và trả về một đối tượng để thay đổi state. Nó sẽ là phương thức đầu tiên được gọi khi thực hiện cập nhật.
- `render()`: phương thức này sẽ render HTML từ DOM với thay đổi mới nhất. Phương thức `render` sẽ được gọi mỗi khi có thay đổi đến component.
- `componentDidMount()`: phương thức sẽ được gọi sau khi render component. Ta có thể chạy lệnh cần component đã được lưu trong DOM.
- `shouldComponentUpdate()`: trả về giá trị boolean để quyết định xem có render hay không. Mặc định sẽ là True.
- `getSnapshotBeforeUpdate()`: cung cáp truy cập cho props cung như state trước khi cập nhật. Nó dùng cho kiểm tra giá trị trước khi cập nhật.
- `componentDidUpdate()`: được gọi sau khi cập nhật component trong DOM.
- `componentWillUnmount()`: phương thức được gọi khi component bị xoá khỏi DOM.

### 29. React hook có làm việc với static typing?

Static typing đề cập đến quá trình kiểm tra code trong suốt thời gian biên dịch để đảm bảo mọi biến đề sẽ được nhập. React Hook là hàm được thiết kế để đảm bảo mọi thuộc tính sẽ được nhập tĩnh. Để thực thi nhập tĩnh chặt chẽ hơn trong code, ta có thể sử dụng API React với các Hook tùy chỉnh.

### 30. Các kiểu Hooks trong React?

**Hook có sẵn**: là các hooks được hỗ trợ sẵn trong React:
    - **Hook cơ bản**:
        + `useState()`: là component dùng cho thiết lập và chỉnh sửa state.
        + `useEffect()`: cho phép thực hiện side effect trên function component.
        + `useContext()`: dùng cho tạo dữ liệu chung có thể truy cập trong hệ phân cấp component mà không cần truyền dữ liệu theo props từ trên xuống.
    - **Hook nâng cao**:
        + `useReducer()`: dùng cho các logic state phức tạp có nhiều giá trị con khi cập nhật state phụ thuộc vào state trước đó. Nó sẽ giúp tối ưu hoá hiệu suất component khi kích hoạt các bản cập nhật sâu hơn vì nó được truyền xuống thay vì callback.
        + `useMemo()`: điều này sẽ được sử dụng để tính toán lại giá trị đã ghi nhớ khi có sự thay đổi trong một trong các phần phụ thuộc. Việc tối ưu hóa này sẽ giúp tránh các tính toán tốn kém trên mỗi lần render.
        + `useCallback()`: hữu ích khi truyền callback vào component con đã tối ưu hoá và phụ thuộc vào tham chiếu để ngăn chặn các render không cần thiết.
        + `useImperativeHandle()`: cho phép chỉnh sửa thực thể sẽ được truyền cho đối tượng ref.
        + `useDebugValue()`: dùng cho hiển thị nhãn hoặc hook tuỳ chỉnh trong React DevTools.
        + `useRef()`: Nó sẽ cho phép tạo một tham chiếu đến phần tử DOM trực tiếp trong function component.
        + `useLayoutEffect()`: dùng cho đọc bố cục từ DOM và re-render bất đồng bộ.

**Hook tuỳ chỉnh**: là một hàm JavaScript. Hoạt động giống như một hàm thông thường với "use" phía trước để React hiểu đó là một hook tuỳ chỉnh và sẽ mô tả các hàm đặc biệt theo quy tắc của Hook. Hơn thế nữa, việc phát triển hook tuỳ chỉnh cho phép bạn trích xuất logic component trong các hàm có thể tái sử dụng

![](./assets/types_of_Hooks_in_React.png)

### 31. Sự khác biệt giữa lớp và React Hook?

| React Hook | Lớp |
|-|-|
| Được dùng cho function component | Được dùng cho class component |
| Không yêu cầu khai báo constructor | Cần constructor trong các class component |
| Không yêu cầu con trỏ this cho khai báo hay chỉnh sửa | Cần dùng this cho khai báo state (this.state) và chỉnh sửa (this.setState()) |
| Dễ sử dụng với useState | Không có hàm cụ thể giúp ta truy cập state với setState tương ứng |
| Hữu dụng khi triển khai Redux và Context API | Quá trình thiết lập state lâu, nên class state sẽ không được ưu tiên |

### 32. Hiệu suất của React Hook so với lớp?

- React Hooks sẽ tránh được rất nhiều chi phí như tạo thực thể, liên kết các sự kiện, .., có trong các lớp.
- Các hook trong React sẽ dẫn đến các cây component nhỏ hơn vì chúng sẽ tránh được việc lồng nhau tồn tại trong HOC và sẽ render props dẫn đến việc React phải thực hiện ít công việc hơn.r

### 33. Các hook có thay thế được lớp hoàn toàn?

Mục đích của Hook là thay thế các chức năng được cung cấp bởi lớp. Nhưng có các phương thức mà Hook vẫn chưa thay thế được lớp:
- `getSnapshotBeforeUpdate()`
- `getDerivedStateFromError()`
- `componentDidCatch()`

### 34. React Router là gì?

React Router đề cập đến thư viện tiêu chuẩn được sử dụng để định tuyến trong React. Nó cho phép chúng tôi xây dựng một ứng dụng web trong React với điều hướng mà không cần làm mới trang khi người dùng điều hướng. Nó cũng cho phép thay đổi URL của trình duyệt và sẽ giữ cho giao diện người dùng đồng bộ với URL. React Router sẽ sử dụng cấu trúc component để gọi các component, sử dụng thông tin thích hợp có thể được hiển thị.

Cài đặt với npm:

```
npm install react-router-dom
```

### 35. React Hook có thể thay thế Redux?

React Hook không thể được coi là sự thay thế cho Redux (Nó là một thư viện JavaScript mã nguồn mở, hữu ích trong việc quản lý trạng thái ứng dụng) khi nói đến việc quản lý toàn bộ state trong các ứng dụng phức tạp lớn, mặc dù React sẽ cung cấp một hook `useReducer` quản lý các chuyển đổi trạng thái tương tự như Redux. Nhưng Redux hữu ích ở cấp độ thấp hơn của hệ thống phân cấp component để xử lý các phần của state phụ thuộc vào nhau, thay vì khai báo nhiều hook `useState`.

Trong các ứng dụng web thương mại lớn hơn, độ phức tạp sẽ cao, vì vậy chỉ sử dụng React Hook có thể không đủ. Một số nhà phát triển sẽ cố gắng giải quyết thách thức với sự trợ giúp của React Hooks và những người khác sẽ kết hợp React Hooks với Redux.

### 36. Render có điều kiện trong React?

Render có điều kiện đề cập kết quả động của giao diện người dùng dựa trên điều kiện state. Nó hoạt động tương tự điều kiện JavaScript. Sử dụng render có điều kiện, nó có thể chuyển đổi các hàm ứng dụng cụ thể, API dữ liệu, ẩn hoặc hiện các phần tử, phân quyền, xử lý xác thức,...

Các cách khác nhau cho triển khai render có điều kiện trong React:
- Sử dụng if-else phù hợp với các ứng dụng vừa và nhỏ.
- Sử dụng toán tử ba ngôi (`?:`) giúp giảm bớt câu lệnh if-else phức tạp.
- Sử dụng biến phần tử, phù hợp cho viết code sạch.

### 37. Sự khác biệt giữa NavLink và Link?

`<Link>` dùng cho điều hướng các trang khác nhau trong ứng dụng web. Còn `<NavLink>` được dùng để thêm thuộc tính cho hoạt động chuyển hướng.

**Cú pháp**
- Link:

```jsx
<Link to="/">Home</Link>
```

- NavLink:

```jsx
<NavLink to="/" activeClassName="active">Home</NavLink>
```

**Ví dụ**

index.css

```css
.active {
  color: blue;
}
```

Routes.js

```jsx
import ReactDOM from 'react-dom'
import './index.css'
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Users from './users'
import Contact from './contact'
import Notfound from './notfound'

const Routes = (
    <Router>
        <div>
            <ul>
                <li>
                <NavLink exact activeClassName="active" to="/">
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/users">
                    Users
                </NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/contact">
                    Contact
                </NavLink>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/users" component={Users} />
                <Route path="/contact" component={Contact} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Routes, document.getElementById('root'))
```

### 38. withRouter trong react-router-dom là gì?

`withRouter()` là một HOC cho phép truy cập thuộc tính đối tượng `history` ứng với `<Route>` gần nhất. Nó sẽ truyền `match`, `location` và `history` như props đến component được bọc bất cứ khi nào nó render.

Ví dụ:

```jsx
import React from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router"

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    render() {
        const { match, location, history } = this.props

        return <div>You are now at {location.pathname}</div>
    }
}

const ShowTheLocationWithRouter = withRouter(ShowTheLocation)
```

### 39. Cách hiển thị dữ liệu API với Axios?

Axios là một promise dựa trên HTTP để tạo yêu cầu HTTP đến trình duyệt hay web server.

**Tính năng**
- **Interceptors**: Truy cập cấu hình yêu cầu hoặc phản hồi (header, dữ liệu, v.v.) khi chúng gửi đến hoặc đi. Các hàm này có thể hoạt động như các cổng để kiểm tra cấu hình hoặc thêm dữ liệu.
- **Instances**: Tạo thực thể có thể tái sử dụng như baseUrl, headers, và cấu hình khác đã thiết lập.
- **Defaults**: Thiết lập giá trị chung cho header chung (như Authorization) với các yêu cầu. Nó hữu ích khi bạn cần xác thực đến server trên mọi yêu cầu.

**Cài đặt**

```
npm install axios -- save
```

Các phương thức thường dùng:

- `axios.request(config)`
- `axios.get(url[, config])`
- `axios.delete(url[, config])`
- `axios.head(url[, config])`
- `axios.options(url[, config])`
- `axios.post(url[, data[, config]])`
- `axios.put(url[, data[, config]])`
- `axios.patch(url[, data[, config]])`

Ví dụ POST:

```js

axios.post('/url',{data: 'data'})
    .then((res)=>{
        //on success
    })
    .catch((error)=>{
        //on error
    })
```

Ví dụ GET:

```js
axios.get('/url')
    .then((res)=>{
        //on success
    })
    .catch((error)=>{
        //on error
    })
```

Xử lý nhiều yêu cầu đồng thời:

```js
function getUserAccount() {
    return axios.get('/user/12345')
}

function getUserPermissions() {
    return axios.get('/user/12345/permissions')
}

axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (acct, perms) {
        // Both requests are now complete
    }))
```

POST trong Component:

```jsx
import React from 'react'
import axios from 'axios'

export default class PersonList extends React.Component {
    state = {
        name: '',
    }

    handleChange = event => {
        this.setState({ name: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        const user = {
        name: this.state.name
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Person Name:
                <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
            </form>
        </div>
        )
    }
}
```

### 40. Caching trong React?

Ta có thể caching dữ liệu trong React bằng nhiều cách như:
- Local Storage
- Redux Store
- Giữa dữ liệu giữa mounting và unmounting

Memoization là một kỹ thuật mà chúng ta sẽ sử dụng để đảm bảo rằng chúng ta không gặp phải API nếu chúng tôi đã thực hiện một số loại yêu cầu tìm nạp nó ở một số giai đoạn đầu tiên. Việc lưu trữ kết quả của các cuộc gọi tốn kém sẽ tiết kiệm thời gian tải cho người dùng, nhờ đó tăng hiệu suất tổng thể.

Ví dụ:

```jsx
const cache = {}

const useFetch = (url) => {
    const [status, setStatus] = useState('idle')
    const [data, setData] = useState([])

    useEffect(() => {
        if (!url) return

        const fetchData = async () => {
            setStatus('fetching')

            if (cache[url]) {
                const data = cache[url]
                setData(data)
                setStatus('fetched')
            } else {
                const response = await fetch(url)
                const data = await response.json()
                cache[url] = data // set response in cache
                setData(data)
                setStatus('fetched')
            }
        }

        fetchData()
    }, [url])

    return { status, data }
}
```

Ở đây ta ánh xạ URL tới dữ liệu của ta. Nếu ta thực hiện yêu cầu nạp dữ liệu hiện có, chúng ta sẽ lấy dữ liệu từ cache cục bộ của mình. Nếu không, ta tiếp tục thực hiện yêu cầu và đặt kết quả vào cache. Điều này đảm bảo tằng ta không gọi lại API khi đã có dữ liệu cục bộ.

#### Dùng `useRef()`

Với `useRef()`, ta có thể thiết lập và truy xuất dữ liệu có thể thay đổi dễ dàng và lưu giá trị suốt vòng đời component.

```jsx
const useFetch = (url) => {
   const cache = useRef({})
    const [status, setStatus] = useState('idle')
    const [data, setData] = useState([])

    useEffect(() => {
        if (!url) return

        const fetchData = async () => {
            setStatus('fetching')

            if (cache.current[url]) {
                const data = cache.current[url]
                setData(data)
                setStatus('fetched')
            } else {
                const response = await fetch(url)
                const data = await response.json()
                cache.current[url] = data // set response in cache
                setData(data)
                setStatus('fetched')
            }
        }

        fetchData()
    }, [url])

    return { status, data }
    }
```

#### Sử dụng localStorage

```jsx
const InitialState = {
   someState: 'a'
}
class App extends Component {

    constructor(props) {
        super(props)

        // Retrieve the last state
        this.state = localStorage.getItem("appState") ? JSON.parse(localStorage.getItem("appState")) : InitialState

    }

    componentWillUnmount() {
        // Remember state for the next mount
        localStorage.setItem('appState', JSON.stringify(this.state))
    }

    render() {
        ...
    }
}

export default App
```

#### Giữ dữ liệu giữa mounting và unmounting

```jsx
import React, { Component } from 'react'

// Set initial state
let state = { counter: 5 }

class Counter extends Component {

    constructor(props) {
        super(props)

        // Retrieve the last state
        this.state = state

        this.onClick = this.onClick.bind(this)
    }

    componentWillUnmount() {
        // Remember state for the next mount
        state = this.state
    }

    onClick(e) {
        e.preventDefault()
        this.setState(prev => ({ counter: prev.counter + 1 }))
    }

    render() {
        return (
            <div>
                <span>{ this.state.counter }</span>
                <button onClick={this.onClick}>Increase</button>
            </div>
        )
    }
}

export default Counter
```

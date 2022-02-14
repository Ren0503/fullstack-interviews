# Câu hỏi phỏng vấn React

![](./assets/react.png)

React là một thư viện JavaScript mã nguồn mở, linh hoạt và hiệu quả cho phép các nhà phát triển tạo ra các ứng dụng web đơn giản, nhanh chóng và có thể mở rộng. Jordan Walke, một kỹ sư phần mềm làm việc cho Facebook đã tạo ra React. Nó được triển khai lần đầu tiên trên news feed của Facebook vào năm 2011 và trên Instagram vào năm 2012. Các nhà phát triển từ nền tảng Javascript có thể dễ dàng phát triển các ứng dụng web với sự trợ giúp của React.

Ở hiện tại, việc lựa chọn công nghệ phù hợp để ứng dụng hoặc phát triển web đang trở nên khó khăn hơn. React đã được coi là thư viện/framework frontend phát triển nhanh nhất trong số tất cả. Sự phát triển của Javascript đang nổi lên và ổn định trên thị trường và nhu cầu tuyển dụng React đang tăng lên theo cấp số nhân. React rõ ràng là một lợi thế đối với các nhà phát triển front-end vì nó có đường cong học tập nhanh, trừu tượng rõ ràng và các thành phần có thể tái sử dụng. Hiện tại, vẫn chưa có dấu hiệu dừng cho React vì nó vẫn sẽ tiếp tục phát triển.

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




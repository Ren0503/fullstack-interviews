# Câu hỏi phỏng vấn Python

![](./assets/python.png)

## Python là gì?

Python được phát triển bởi Guido van Rossum và công bố vào ngày 20 tháng 2, 1991. Nó là một trong những ngôn ngữ lập trình được yêu thích và phổ biến nhất thế giới. Về bản chất nó là ngôn ngữ thông dịch do đó nó cung cấp sự linh hoạt trong việc kết hợp ngữ nghĩa động. Nó cũng là một ngôn ngữ mã nguồn mở và miễn phí với cú pháp rất đơn giản và rõ ràng. Điều này giúp mọi người dễ dàng học python. Python cũng hỗ trợ lập trình hướng đối tượng và được sử dụng rộng rãi trong giới lập trình.

Do tính chất đơn giản và khả năng đạt được nhiều chức năng trong ít dòng code hơn, nên mức độ phổ biến của python đang tăng lên rất nhiều. Python cũng được sử dụng trong Máy học, Trí tuệ nhân tạo, Phát triển Web, Web Scraping và nhiều lĩnh vực khác do khả năng hỗ trợ tính toán mạnh mẽ bằng cách sử dụng các thư viện mạnh mẽ. Vì thế, nhu cầu tuyển các nhà phát triển python là rất lớn trên toàn thế giới. Các công ty sẵn sàng cung cấp các đặc quyền và lợi ích tuyệt vời cho những dev này.

## Lợi ích của sử dụng Python

- Python là ngôn ngữ lập trình đa năng có cú pháp đơn giản, dễ học, nhấn mạnh tính dễ đọc nhờ đó giảm chi phí bảo trì chương trình. Hơn nữa, ngôn ngữ này có khả năng viết script, hoàn toàn là mã nguồn mở và có số lượng thư viện hỗ trợ dồi dào.

- Cấu trúc dữ liệu cấp cao kết hợp với tính năng kiểu động và liên kết động, thu hút một cộng đồng lớn các lập trình viên sử dụng nó để triển khai và phát triển ứng dụng nhanh chóng.

## Câu hỏi phỏng vấn cho Fresher

### 1. Thế nào là ngôn ngữ kiểu động?

Trước khi hiểu về ngôn ngữ kiểu động ta nên biết về kiểu là gì. Trong ngôn ngữ lập trình, kiểu đề cập đến việc kiểm tra kiểu dữ liệu. Nếu một ngôn ngữ kiểu mạnh, thì `"1" + 2` sẽ báo lỗi vì không thể tự động ép kiểu. Nhưng nếu là ngôn ngữ kiểu yếu thì sẽ cho về kết quả là `12`.

Kiểm tra kiểu có hai loại:
- **Static**: kiểm tra kiểu dữ liệu trước khi thực thi.
- **Dynamic**: kiểm tra kiểu dữ liệu khi đang thực thi.

Python là ngôn ngữ thông dịch, thực thi câu lệnh theo từng dòng do đó việc kiểm tra kiểu xảy ra khi đang thực thi. Python là ngôn ngữ kiểu động.

![](./assets/dynamically_typed_language.jpg)

### 2. Ngôn ngữ thông dịch là gì?

Ngôn ngữ thông dịch là ngôn ngữ thực thi từng dòng lệnh, ví dụ như Python, JavaScript, R, PHP và Ruby. Chương trình viết bằng ngôn ngữ thông dịch có thể chạy trực tiếp từ code, không cần bước biên dịch.

### 3. PEP 8 là gì và tại sao nó lại quan trọng?

PEP là viết tắt của **Python Enhancement Proposal**. Một PEP là một tài liệu thiết kế chính thống cung cấp thông tin từ cộng đồng Python hoặc mô tả tính năng mới của Python. PEP 8 đặc biệt quan trọng vì nó ghi lại các hướng dẫn về phong cách code Python. Rõ ràng là việc đóng góp cho cộng đồng nguồn mở Python đòi hỏi bạn phải tuân theo các nguyên tắc về phong cách này một cách nghiêm ngặt.

## 4. Scope trong Python

Phạm vi (scope) đề cập đến vùng code mà từ đó đối tượng trong Python có thể truy cập được. Do đó, ta không thể truy cập bất kỳ đối tượng cụ thể nào từ bất kỳ nơi nào trong code, việc truy cập phải được cho phép theo phạm vi của đối tượng.

Các kiểu phạm vi trong Python:

- Một **local scope** đề cập đến đối tượng cục bộ khả dụng trong hàm hiện tại.

- Một **global scope** đề cập đến đối tượng khả dụng trong suốt quá trình thực thi code kể từ khi chúng ra đời.

- Một **module-level scope** đề cập đến đối tượng toàn cục của module hiện tại có thể truy cập trong chương trình.

- Một **outermost scope** đề cập đến các tên built-in có thể gọi trong chương trình. 

### 5. List và Tuple là gì? Sự khác biệt giữa chúng?

List và Tuple là hai kiểu dữ liệu tuần tự cho lưu trữ tập hợp đối tượng trong Python. List được biểu diễn bằng cặp ngoặc vuông `['sara', 6, 0.19]` trong khi tuple được biểu diễn bằng dấu ngoặc đơn `('ansh', 5, 0.97)`.

Bên cạnh sự khác biệt về cú pháp, điểm khác biệt chính của cả hai là tuple chỉ lưu đối tượng *bất biến*. Có nghĩa là list có thể chỉnh sửa, thêm hay xoá trong khi tuple chỉ lưu hằng và không chỉnh sửa gì được. 

```python
my_tuple = ('sara', 6, 5, 0.97)
my_list = ['sara', 6, 5, 0.97]
print(my_tuple[0])     # output => 'sara'
print(my_list[0])     # output => 'sara'
my_tuple[0] = 'ansh'    # modifying tuple => throws an error
my_list[0] = 'ansh'    # modifying list => list modified
print(my_tuple[0])     # output => 'sara'
print(my_list[0])     # output => 'ansh'
```

### 6. Kiểu dữ liệu trong Python?

Mặc dù Python không yêu cầu kiểu dữ liệu khi khai báo biến nhưng lỗi vẫn xảy là nếu ta dùng kiểu dữ liệu khác với tương thích của nó. Python cung cấp hàm `type()` và `isinstance()` để kiểm tra kiểu của các các biến. Trong Python có các kiểu dữ liệu sau:

- **None**: từ khoá `None` biểu diễn giá trị null trong Python. Có thể thực hiện so sánh bằng với đối tượng kiểu None.

   | Tên | Mô tả |
   |------------|-------------|
   | NoneType | Biểu diễn giá trị Null |

- **Kiểu số**: có 3 kiểu số trong Python là **int**, **float** và **complex**. Bên cạnh đó boolean cũng là kiểu con của int.

   | Tên | Mô tả |
   |-----|-------|
   | int | lưu trữ kiểu số nguyên dạng thập phân, nhị phân, bát phân |
   | float | lưu trữ giá trị thập phân, phân số, số chấm động |
   | complex | lưu trữ kiểu số phức (A + Bj) với A là phần thực, B là phần ảo |
   | bool | lưu giá trị nhị nguyên (True hoặc False) |

- **Kiểu tuần tự**: có 3 kiểu tuần tự cơ bản trong Python - **list**, **tuple** và **range**. Kiểu tuần tự có thể thực hiện toán tử `in` và `not in`  để duyệt qua tất cả phần tử của chúng. Các toán tử này có cùng mức độ ưu tiên với các toán tử so sánh.

   | Tên | Mô tả |
   |-----|-------|
   | list | Dùng cho lưu tập hợp phần tử, có thể chỉnh sửa |
   | tuple | Dùng cho lưu tập hợp phần tử, bất biến |
   | range | Biểu diễn chuỗi số bất biến trong suốt quá trình thực thi |
   | str | Chuỗi bất biến Unicode cho lưu trữ dữ liệu văn bản |

   *Lưu ý*: thư viện chuẩn còn bổ sung hai kiểu là Binary data như `bytearray bytes`, `memoryview` và Text string như `str`.

- **Kiểu ánh xạ**: Trong Python, một đối tượng ánh xạ (mapping object) là một tập hợp các cặp key-value. Nó ánh xạ giá trị (value) với key tương ứng. Kiểu dữ liệu ánh xạ duy nhất trong Python là **dictionary**. 

   | Tên | Mô tả |
   |-----|-------|
   | dict | Lưu trữ tập hợp riêng biệt dạng cặp key/value |

- **Kiểu tập hợp**: hiện tại Python có hai kiểu tập hợp là **set** và **frozenset**. Kiểu set có thể thay đổi với hai phướng thức là `add()` và `remove()`, kiểu frozenset là bất biến, không thể chỉnh sửa sau khi tạo.

   | Tên | Mô tả |
   |-----|-------|
   | set | Tập hợp không thứ tự có thể chỉnh sửa |
   | frozenset | Tập hợp đối tượng riêng biệt bất biến |

- **Modules**

### 7. Pass trong Python?

Từ khoá `pass` biểu diễn toán tử null trong Python. Nó được dùng nhằm mục đích lắp đầy các khối code trống có thể thực thi trong thời gian chạy nhưng hiện tại vẫn chưa viết. Nếu không có lệnh pass, ta có thể gặp lỗi khi thực thi code.

```python
def myEmptyFunc():
   # do nothing
   pass
myEmptyFunc()    # nothing happens
## Without the pass keyword
# File "<stdin>", line 3
# IndentationError: expected an indented block
```

### 8. Module và package trong Python?

Python package và module là hai cơ chế cho phép **lập trình module** trong Python. Việc module hoá đem lại các lợi ích như:

### 30. Sự khác biệt giữa .py và .pyc?

- Các file `.py` chứa mã nguồn của một chương trình. Trong khi đó, file `.pyc` chứa mã bytecode của chương trình của bạn. Chúng tôi nhận được mã bytecode sau khi biên dịch file `.py` (mã nguồn). Các file `.pyc` không được tạo cho tất cả các file mà bạn chạy. Nó chỉ được tạo cho các file mà bạn nhập.

- Trước khi thực hiện một chương trình python, trình thông dịch python kiểm tra các file đã biên dịch. Nếu file có mặt, máy ảo sẽ thực thi file đó. Nếu không tìm thấy, nó sẽ kiểm tra file `.py`. Nếu được tìm thấy, hãy biên dịch nó thành file `.pyc` và sau đó máy ảo python thực thi nó.

Có file `.pyc` giúp bạn tiết kiệm thời gian biên dịch
### 31. Python là ngôn ngữ thông dịch?

- Python là một ngôn ngữ không được thông dịch hoặc biên dịch. Thông dịch hoặc biên dịch là thuộc tính của việc triển khai. Python là một bytecode (tập hợp các hướng dẫn có thể đọc được của trình thông dịch) được thông dịch chung.
- Mã nguồn là một file có phần mở rộng .py.
- Python biên dịch mã nguồn thành một tập hợp các hướng dẫn cho một máy ảo. Trình thông dịch Python là một triển khai của máy ảo đó. Định dạng trung gian này được gọi là "bytecode".
- Mã nguồn `.py` đầu tiên được biên dịch để cung cấp `.pyc` là mã bytecode. Bytecode này sau đó có thể được thông dịch bởi CPython chính thức hoặc JIT (trình biên dịch Just in Time) do PyPy biên dịch.

### 32. Truyền tham số bằng giá trị và bằng tham chiếu trong Python?

- Truyền bằng giá trị: Sao chép đối tượng thực được truyền. Thay đổi giá trị của đối tượng sao chép sẽ không ảnh hướng đến đối tượng gốc.
- Truyền bằng tham chiếu: Tham chiếu đến đối tượng thực được truyền. Thay đổi giá trị ở đối tượng mới sẽ thay đổi cả giá trị ở đối tượng gốc.

```py
def appendNumber(arr):
   arr.append(4)
arr = [1, 2, 3]
print(arr)  #Output: => [1, 2, 3]
appendNumber(arr)
print(arr)  #Output: => [1, 2, 3, 4]
```

### 33. Iterator trong Python?

- Một iterator là một đối tượng.
- Nó nhớ trạng thái của nó, tức là nó đang ở đâu trong vòng lặp (xem đoạn code bên dưới).
- Phương thức `__iter__()` khởi tạo một iterator.
- Nó có phương thứ `__next__()` để trả về mục tiếp theo trong lần lặp và trỏ đến phần tử tiếp theo. Khi đến cuối đối tượng có thể lặp lại `__next__()` trả về `StopIteration exception`
- Nó có thể tự lặp lại.
- Iterator là một đối tượng mà chúng ta có thể lặp qua đối tượng như list, string,..

```py
class ArrayList:
   def __init__(self, number_list):
      self.numbers = number_list
   def __iter__(self):
      self.pos = 0
      return self
   def __next__(self):
      if(self.pos < len(self.numbers)):
         self.pos += 1
         return self.numbers[self.pos - 1]
      else:
         raise StopIteration
array_obj = ArrayList([1, 2, 3])
it = iter(array_obj)
print(next(it)) #output: 2
print(next(it)) #output: 3
print(next(it))
#Throws Exception
#Traceback (most recent call last):
#...
#StopIteration
```

### 34. Cách xoá một file trong Python?

Ta có thể dùng lệnh `os.remove(file_name)`:

```py
import os
os.remove("ChangedFile.csv")
print("File Removed!")
```

### 35. Giải thích hàm split() và join() trong Python?

- Bạn có thể dùng hàm split() để tách chuỗi dựa trên một dấu phân cách trong list của chuỗi.
- Bạn có thể dùng hàm join() để kết hợp một list của chuỗi dựa trên khoảng cách đựa cho từ chuỗi đơn.

```py
string = "This is a string."
string_list = string.split(' ') #delimiter is ‘space’ character or ‘ ‘
print(string_list) #output: ['This', 'is', 'a', 'string.']
print(' '.join(string_list)) #output: This is a string.
```

### 36. *args và *kwargs là gì?

#### *args
- *args là cú pháp đặc biệt dùng trong hàm để xác định độ dài biến tham số được truyền vào.
- "*" nghĩa là độ dài biến và "args" là tên dùng theo quy ước. 

```py
def multiply(a, b, *argv):
   mul = a * b
   for num in argv:
      mul *= num
   return mul
print(multiply(1, 2, 3, 4, 5)) #output: 120
```

#### *kwargs

- *kwargs là cú pháp đặc biệt trong hàm để xác định độ dài biến tham số có từ khoá.
- Ở đâu "kwargs" được dùng theo quy ước.
- Đối số có từ khóa có nghĩa là một biến có tên khi được truyền cho một hàm.
- Nó thực sự là một dictionary về tên biến và giá trị của nó.

```py
def tellArguments(**kwargs):
   for key, value in kwargs.items():
      print(key + ": " + value)
tellArguments(arg1 = "argument 1", arg2 = "argument 2", arg3 = "argument 3")
#output:
# arg1: argument 1
# arg2: argument 2
# arg3: argument 3
```
### 37. Chỉ mục âm là gì và cách sử dụng?

- Chỉ mục âm là chỉ mục tính từ phía cuối của list, tuple hoặc string.
- Arr[-1] nghĩa là phần tử cuối cùng của mảng Arr[].

```py
arr = [1, 2, 3, 4, 5, 6]
#get the last element
print(arr[-1]) #output 6
#get the second last element
print(arr[-2]) #output 5
```
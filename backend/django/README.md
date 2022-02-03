# Câu hỏi phỏng vấn Django

![](./assets/django.png)

Django là một framework web mã nguồn mở, miễn phí trên nền tảng Python tuân theo mô hình MVT (model-view-template). Hiện tại, nó được phát triển và duy trì bởi Django Software Foundation (DSF), một tổ chức độc lập ở Hoa kỳ.

Django được tạo vào năm 2003 bởi lập trình viên Adrian Holovaty và Simon Willson. Hai năm sau, nó được phát hành công cộng theo giấy phép BSD. Sau đó đến năm 2008, DSF đảm nhận việc phát triển Django.

#### Các tổ chức lớn sử dụng Django
- PBS
- Instagram
- Mozilla
- The Washington Times
- Disqus, Bitbucket
- NextDoor

### Ưu điểm của Django:
- **Hệ sinh thái lớn**: nó đi kèm với một lượng lớn ứng dụng bên thứ 3 dễ dàng tích hợp với các yêu cầu dự án.
- **Tuổi đời**: Django đã được dùng hơn một thập kỷ. Suốt thời gian qua, rất nhiều tính năng được bổ sung và nâng cao để phát triển nó thành một framework mạnh mẽ. Ngoài ra, có rất nhiều tổ chức lớn đang sử dụng Django.
- **Admin**: django hỗ trợ sẵn trang admin cho các thao tác CRUD với các model.
- **Plugins**: cho phép lập trình viện thêm các tính năng mới vào ứng dụng.
- **Thư viện**: vì có cộng đồng lớn nên nó có một lượng lớn thư viện cho mọi tác vụ.
- **ORM**: nó giúp làm việc với dữ liệu theo cách hướng đối tượng.

## Câu hỏi phỏng vấn Django cho Fresher

### 1. Giải thích kiến trúc Django?

Django tuân theo mô hình kiến trúc MVT (Model View Template) thay vì mô hình MVC (Model View Controller) truyền thống. Nó khác với MVC ở chỗ, logic vốn của controller được xử lý ở chính view của framework. Còn template nằm ở tầng biểu diễn. HTML được kết hợp với Django Template Language (DTL). Các nhà phát triển cung cấp model, view và template sau đó ánh xạ nó vào URL, để Django phục vụ người dùng.

![](./assets/mvt.png)

### 2. Giải thích cấu trúc thư mục Django?

- `manage.py`: dùng cho các dòng lệnh cần thiết tương tác với ứng dụng Django.
- `__init__.py`: file rỗng nói với Python rằng xem thư mục hiện tại như một package Python.
- `settings.py`: thiết lập các biến môi trường cho ứng dụng như tên cơ sở dữ liệu, secret key,...
- `urls.py`: tất cả url của ứng dụng sẽ ở file này.
- `wsgi.py`: điểm vào của ứng dụng, dược dùng bởi các web server khi dự án được tạo thành ứng dụng thực.

### 3. Model trong Django là gì?

Một model trong Django là một lớp sẽ được ánh xạ thành một bảng hoặc collection của cơ sở dữ liệu. Mỗi thuộc tính của lớp trong model sẽ là một trường trong cơ sở dữ liệu, nó được định nghĩa trong `app/models.py`

Ví dụ:

```py
from django.db import models

class SampleModel(models.Model):
    field1 = models.CharField(max_length = 50)
    field2 = models.IntegerField()

    class Meta:
        db_table = "sample_model"
```

Tất cả model đều kết thừa từ `django.db.models.Model`.

Ở ví dụ trên ta có hai thuộc tính (1 char và 1 integer). Meta giúp bạn thiết lập những thứ có sẵn như quyền truy cập, phiên bản số nhiều và số ít của tên, tên bảng được liên kết, có abstract hay không,...

### 4. Template trong Django hay DTL là gì?

Template là một phần trong kiến trúc MVT của Django. Nó bao gồm HTML, CSS nơi các biến hay thông tin được nhúng vào từ view. Các biến hay tag sẽ được template engine nhận ra và thông dịch chúng. 

Template được render với một ngữ cảnh nhất định, để thay thế các biến thành giá trị của nó và biểu diễn trong ngữ cảnh đó, đồng thời xử lý các tag. Tất cả thứ khác sẽ được giữ nguyên.

Cú pháp của DTL bao gồm các cấu trsuc sau:
- Biến
- Tag
- Bộ lọc
- Comment

### 5. View trong Django là gì?

Một hàm view hay view, đơn giản là một hàm Python nhận các yêu cầu web và trả về phản hồi. Phản hồi có thể là nội dung HTML của một trang web, một redirect (điều hướng sang trang khác), lỗi 404, hình ảnh hay một XML hoặc JSON,...

Ví dụ:

```py
from django.http import HttpResponse
def sample_function(request):
    return HttpResponse("Welcome to Django")
```

Có hai loại view:
- **Function-Based Views**: ta import view như một hàm.
- **Class-based Views**: tiếp cận theo hướng đối tượng.

### 6. Django ORM là gì?

ORM (Object Relational Mapper) giúp ta tương tác với cơ sở dữ liệu theo code python thay vì viết các truy vấn sql thuần, nó giúp ta truy xuất, lưu và xoá dễ dàng hơn. Nó hoạt động ở tầng trừu tượng giữa model và cơ sở dữ liệu.

### 7. Static file là gì?

Website cần phục vụ các files như hình ảnh, js và css. Trong Django, các file này gọi là "static file". Nó được cung cấp bởi `django.contrib.staticfiles` để quản lý các file đấy.

### 8. Django Rest Framework là gì?

Django Rest Framework (DJF) là một framework mã nguồn mở dựa trên Django để tạo RESTful API.

### 9. Django-admin và manage.py là gì?

Django-admin là câu lệnh dùng cho các công việc quản trị trong Django. Bên cạnh đó, manage.py là file tự động tạo khi ta tạo dự án django. Nó không chỉ thực hiện các công việc chung như django-admin mà còn thiết lập môi trường biến `DJANGO_SETTINGS_MODULE` trỏ đến file settings.py trong dự án.
Các câu lệnh thường dùng trong django.

- `django-admin startproject` - tạo dự án Django với cấu trúc thư mục cho tên dự án nằm trong thư mục hiện tại hoặc đường dẫn.
- `django-admin startapp` - tạo ứng dụng django trong dự án django với tên dự án.
- `django-admin makemigrations` - tạo migration mới sau mỗi lần thay đổi model.
- `django-admin migrate` - thực thi lệnh SQL, đồng bộ cơ sở dữ liệu với model và migrations.
- `django-admin runserver` - chạy web server trên máy localhost. Cổng mặc định là 8000 với địa chỉ IP là 127.0.0.1. Có thể tuỳ chỉnh địa chỉ IP và port.
- `django-admin createsuperuser` - tạo tài khoản với quyền quản trị.

### 10. Jinja là gì?

Jinja là một template engine phổ biến trong Python. Các tính năng của nó:
- Sandbox Execution - Đây là một framework sa

### 11. Django URL là gì?

URL là một phần quan trọng trong ứng dụng web và Django cung cấp cách thiết kế để tuỳ chỉnh URL có tên là URLconf (URL Configuration). Chức năng cơ bản của nó là giúp bạn thiết kế URL ứng với các hàm view. Các URL này có thể là tĩnh hoặc động, được khai báo trong `urls.py` 

Cú pháp:

```py
from django.urls import path
from . import views
urlpatterns = [
   path('data/2020/', views.data_2020),
   path('data/<int:year>/', views.data_year)
]
```

### 12. Sự khác biệt giữa ứng dụng và dự án trong Django?

Trong Django, dự án (project) chỉ toàn bộ ứng dụng (app) và ứng dụng là một phần trong dự án cho xử lý một trường hợp cụ thể.
Ví dụ, hệ thống thanh toán (app) trong ứng dụng e-commerce(project).

### 13. Các kiểu kế thừa trong Django?

- **Abstract Base Class Inheritance:** dùng khi bạn cần giữ thông tin ở lớp cha để không phải ghi lại ở mỗi lớp con.
- **Multi-Table Model Inheritance:** dùng khi phân lớp một model đã có và cần bảng riêng cho mỗi model trong cơ sở dữ liệu.
- **Proxy Model Inheritance:**  dùng khi muốn giữ lại vài trường trong model trong khi chỉnh sửa model của hàm python.

## Câu hỏi phỏng vấn Django cho Experienced

### 14. Signals trong Django là gì?

Bất cứ khi nào chỉnh sửa model, ta cần kích hoạt vài hành động. Django cung cấp một cách để xử lý chúng dưới dạng tín hiệu (signal). Các tín hiệu là những tiện ích cho phép chúng ta liên kết các sự kiện với các hành động. Chúng ta có thể thực hiện những điều này bằng cách phát triển một hàm sẽ chạy khi một tín hiệu gọi nó. 

| Signals | Mô tả |
|---------|-------|
| django.db.models.pre_init & django.db.models.post_init | Gửi trước hoặc sau khi phương thức `_init_()` của model được gọi |
| django.db.models.signals.pre_save & django.db.models.signals.post_save | Gửi trước hoặc sau khi phương thức `save()` của model được gọi |
| django.db.models.signals.pre_delete & django.db.models.signals.post_delete | Gửi trước hoặc sau phương thức `delete()` của model hoặc queryset được gọi |
| django.db.models.signals.pre_delete &
django.db.models.signals.post_delete | Gửi khi `ManyToManyField` được thay đổi |
| django.core.signals.request_started & django.core.signals.request_finished | Gửi khi yêu cầu HTTP bắt đầu hoặc kết thúc |

### 15. Giải thích về caching trong Django?

Caching đề cập đến kỹ thuật lưu giữ kết quả output ở lần xử lý đầu tiên cho các lần tiếp theo nếu kết quả trùng lặp. Thay vì xử lý các yêu cầu giống nhau lại lần nữa, ta lấy kết quả cũ đã lưu, giúp truy cập nhanh hơn. Django cung cấp hệ thống cache mạnh mẽ cho lưu trữ ở các trang web động.

| Cache | Mô tả |
|-------|-------|
| Memcached | Một memory-based cache server nhanh và hiệu quả |
| FileSystem Caching | Giá trị cache được lưu từng file riêng biệt theo trật tự serialize |
| Local-memory Caching | Chiến lược cache mặc định của django. Nó xử lý từng tiến trình và thread-safe. |
| Database caching | Dữ liệu cache được lưu trong cơ sở dữ liệu và hoạt động hiệu quả nếu bạn đánh chỉ mục DB |

### 16. Giải thích về xác thực người dùng trong Django?

Django cung cấp sẵn hệ thống xác thực người dùng, với các đối tượng như `users`, `groups`, `user-permissions` và `user sesions`. Django không chỉ xác thực (authen) mà còn uỷ quyền (authorize) người dùng.

Các đối tượng trong hệ thống:

- Users
- Permissions
- Groups
- Password Hashing System
- Forms Validation
- A pluggable backend system

### 17. Cách để config file static?

Đảm bảo rằng `django.contrib.staticfiles` đã được thêm vào `INSTALLED_APP` ở file `settings.py`.

Nếu bạn muốn thiết lập url cho file static: `STATIC_URL = "/static/"`

Trong template, sử dụng thẻ template để tạo URL cho dường dẫn liên quan:

```html
{% load static %}
<img src="{% static 'my_sample/abcxy.jpg' %}" alt="ABC image">
```

Các file static được lưu trong thư mục static trong ứng dụng. Như `my_sample/static/my_sample/abcxy.jpg`.

### 18. Giải thích về vòng đời Response trong Django?

Bất cứ khi nào một yêu cầu (request) đến web, Django sẽ tạo một đối tượng HttpRequest bao gồm metadata của request. Sau đó Django tải view cụ thể, truyền HttpRequest như tham số đầu tiên cho hàm view. Mỗi view sẽ trả về một đối tượng HttpResponse.

![](./assets/lifecycle.png)

1. Đầu tiên file settings.py được tải chứa các lớp middleware khác nhau (`MIDDLEWARES`)
2. Các middleware được thực thi theo thứ tự mà chúng được thiết lập trong `MIDDLEWAREST`.
3. Từ đây, request được chuyển đến URL Router, thứ này chỉ cần lấy đường dẫn URL từ request và cố gắng ánh xạ với các đường dẫn URL tương ứng trong urls.py.
4. Ngay sau khi nó được ánh xạ, nó sẽ gọi hàm view tương đương, từ đó một responsei tương đương được tạo ra.
5. Response cũng đi qua middleware phản hồi và gửi lại cho trình duyệt.

### 19. Cơ sở dữ liệu được hỗ trợ bởi Django?

Các cơ sở dữ liệu được Django hỗ trợ sẵn như PostgreSQL, MySQL, SQLite, Oracle bên cạnh đó là ODBC, Microsoft SQL Server, IBM DB2, SAP SQL. Hiện tại Django đã hỗ trợ NoSQL với mongoengine hay django-redis-cache.

### 20. Session framework là gì?

Với session framework, ta có thể dễ dàng lưu trữ và truy xuất dữ liệu tuỳ ý dựa trên các lần truy cập trước. Nó lưu trữ dữ liệu phía server và xử lý các quá trình gửi nhận cookie. Do cookie chỉ bao gồm session ID, không có dữ liệu thực trừ khi bạn chỉ định nó.

### 21. Middleware trong Django là gì?

Middleware là một thứ gì đó nằm giữa request và response. Nói đơn giản hơn nó là một cây cầu. Trong Django, một request được chuyển đến view thông qua middleware và dữ liệu được truyền tới response thông qua middleware.

### 22. Context trong Django là gì?

Context là một tên biến mẫu ánh xạ được cấp cho các đối tượng Python trong Django. Đây là tên chung, nhưng bạn có thể đặt bất kỳ tên nào khác tùy thích nếu bạn muốn.

### 23. Hàm django.shortcuts.render là gì?

### 24. Đặc trưng của file settings.py?

Như tên gọi, file này lưu trữ cấu hình hay thiết lập cho ứng dụng Django, như kết nối cơ sở dữ liệu, backend engine, middleware, các ứng dụng bên thứ 3, URL chính, thư mục lưu file static, template engine, key bảo mật, host được phép truy cập,...

### 25. Cách xem tất cả mục trong model?

```py
ModelName.objects.all()
```

### 26. Cách lọc mục trong model?

```py
ModelName.objects.filter(field_name="term")
```

### 27
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

- `django-admin help` - hiển thị tất cả câu lệnh và các thông tin hữu ích khác.
- `django-admin version` - kiểm tra phiên bản hiện tại của Django.
- `django-admin check` - kiểm tra toàn bộ dự án Django.


### 10. Jinja là gì?

Jinja là một template engine phổ biến trong Python. Các tính năng của nó:
- Sandbox Execution - Đây là một framework sa

### 11. Django URL là gì?


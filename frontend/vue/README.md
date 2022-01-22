# Câu hỏi phỏng vấn Vue

## 1. Vue.js là gì?

Vue là một framework cấp tiến cho xây dựng giao diện người dùng nó được thiết kế có thể dễ dàng triển khai vào ứng dụng. Thư viện cốt lõi của nó tập trung vào phần view thế nên nó có thể được tích hợp với các thư viện hay dự án khác.

Trái ngược với React, Vue cung cấp các thư viện đi kèm để định tuyến và quản lý trạng thái, tất cả đều được hỗ trợ chính thức và cập nhật cùng lúc với thư viện lõi.

## 2. Các tính năng nổi bật của Vue.js?

* Virtual DOM: Vue sử dụng Virtual DOM, tương tự như React, Ember,...
* Components: Component là thành phần cơ bản cho các phần tử tái sử dụng trong ứng dụng Vue.
* Templates: Vue dùng template dựa trên HTML.
* Routing: Vue cung cấp router của nó.
* Built-in directives: Ví dụ v-if, v-for.
* Lightweight: Vue khá gọn nhẹ nếu so sánh với các framework khác.

## 3. SFC là gì?

Vue Single File Components còn gọi là file `.vue` là một định dạng file đặc biệt cho phép đóng gói template(`<template>`), logic(`<script>`) và style(`<style>`) của component trong vue vào một file duy nhất.

Vue SFC là định dạng file dành riêng cho framework và phải được `@vue/compiler` biên dịch trước thành JavaScript và CSS chuẩn. SFC đã biên dịch là một module Javascript (ES) tiêu chuẩn.

## 4. Thuộc tính computed là gì?

Computed được sử dụng để loại bỏ cảng nhiều logic càng tốt khỏi template để template không bị cồng kềnh và khó bảo trì. Nếu bạn có logic phức tạp bao gồm dữ liệu reactive trong template bạn nên sử dụng thuộc tính computed.

Computed được lưu vào bộ đêm dựa trên phụ thuộc của 
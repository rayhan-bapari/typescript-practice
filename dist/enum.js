"use strict";
// Basic Order Status
var BasicStatus;
(function (BasicStatus) {
    BasicStatus["Pending"] = "PENDING";
    BasicStatus["Processing"] = "PROCESSING";
    BasicStatus["Shipped"] = "SHIPPED";
    BasicStatus["Delivered"] = "DELIVERED";
    BasicStatus["Cancelled"] = "CANCELLED";
})(BasicStatus || (BasicStatus = {}));
function updateOrderStatus(status) {
    console.log(`Order updated to: ${status}`);
}
updateOrderStatus(BasicStatus.Shipped);
// Basic Roles
var BasicUserRole;
(function (BasicUserRole) {
    BasicUserRole["Admin"] = "ADMIN";
    BasicUserRole["Manager"] = "MANAGER";
    BasicUserRole["Customer"] = "CUSTOMER";
})(BasicUserRole || (BasicUserRole = {}));
const user = {
    name: 'Rayhan',
    role: BasicUserRole.Admin,
};
if (user.role === BasicUserRole.Admin) {
    console.log('Redirect to admin dashboard');
}
// Basic Api Req
var enumHttpsMethod;
(function (enumHttpsMethod) {
    enumHttpsMethod["GET"] = "GET";
    enumHttpsMethod["POST"] = "POST";
    enumHttpsMethod["PUT"] = "PUT";
    enumHttpsMethod["DELETE"] = "DELETE";
})(enumHttpsMethod || (enumHttpsMethod = {}));
function enumSendReq(method, url) {
    console.log(`Sending ${method} request to ${url}`);
}
enumSendReq(enumHttpsMethod.GET, 'https://jsonplaceholder.typicode.com/users/1');
// Basic Payment Method
var enumPaymentMethod;
(function (enumPaymentMethod) {
    enumPaymentMethod["Cash"] = "CASH";
    enumPaymentMethod["Sslcommerz"] = "SSLCOMMERZ";
    enumPaymentMethod["Bkash"] = "BKASH";
    enumPaymentMethod["Nagad"] = "NAGAD";
})(enumPaymentMethod || (enumPaymentMethod = {}));
function enumPaymentProccess(method) {
    switch (method) {
        case enumPaymentMethod.Bkash:
            console.log(`Processing via ${enumPaymentMethod.Bkash}...`);
            break;
        case enumPaymentMethod.Sslcommerz:
            console.log(`Processing via ${enumPaymentMethod.Sslcommerz}...`);
            break;
        default:
            console.log(`Processing via ${enumPaymentMethod.Cash}...`);
    }
}
enumPaymentProccess(enumPaymentMethod.Bkash);

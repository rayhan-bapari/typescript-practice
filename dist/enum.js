"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethod = exports.HttpsMethod = exports.Role = exports.Status = void 0;
// Order Status
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Processing"] = "PROCESSING";
    Status["Shipped"] = "SHIPPED";
    Status["Delivered"] = "DELIVERED";
    Status["Cancelled"] = "CANCELLED";
})(Status || (exports.Status = Status = {}));
// Roles
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Manager"] = "MANAGER";
    Role["Customer"] = "CUSTOMER";
})(Role || (exports.Role = Role = {}));
// Api Req
var HttpsMethod;
(function (HttpsMethod) {
    HttpsMethod["GET"] = "GET";
    HttpsMethod["POST"] = "POST";
    HttpsMethod["PUT"] = "PUT";
    HttpsMethod["DELETE"] = "DELETE";
})(HttpsMethod || (exports.HttpsMethod = HttpsMethod = {}));
// Basic Payment Method
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["Cash"] = "CASH";
    PaymentMethod["Sslcommerz"] = "SSLCOMMERZ";
    PaymentMethod["Bkash"] = "BKASH";
    PaymentMethod["Nagad"] = "NAGAD";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));

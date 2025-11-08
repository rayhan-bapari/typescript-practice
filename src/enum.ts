// Order Status
export enum Status {
	Pending = 'PENDING',
	Processing = 'PROCESSING',
	Shipped = 'SHIPPED',
	Delivered = 'DELIVERED',
	Cancelled = 'CANCELLED',
}

// Roles
export enum Role {
	Admin = 'ADMIN',
	Manager = 'MANAGER',
	Customer = 'CUSTOMER',
}

// Api Req
export enum HttpsMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

// Basic Payment Method
export enum PaymentMethod {
	Cash = 'CASH',
	Sslcommerz = 'SSLCOMMERZ',
	Bkash = 'BKASH',
	Nagad = 'NAGAD',
}

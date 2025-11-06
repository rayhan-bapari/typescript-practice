// Basic Order Status
enum BasicStatus {
	Pending = 'PENDING',
	Processing = 'PROCESSING',
	Shipped = 'SHIPPED',
	Delivered = 'DELIVERED',
	Cancelled = 'CANCELLED',
}

function updateOrderStatus(status: BasicStatus) {
	console.log(`Order updated to: ${status}`);
}

updateOrderStatus(BasicStatus.Shipped);

// Basic Roles
enum BasicUserRole {
	Admin = 'ADMIN',
	Manager = 'MANAGER',
	Customer = 'CUSTOMER',
}

const user: { name: string; role: BasicUserRole } = {
	name: 'Rayhan',
	role: BasicUserRole.Admin,
};

if (user.role === BasicUserRole.Admin) {
	console.log('Redirect to admin dashboard');
}

// Basic Api Req
enum enumHttpsMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

function enumSendReq(method: enumHttpsMethod, url: string) {
	console.log(`Sending ${method} request to ${url}`);
}

enumSendReq(enumHttpsMethod.GET, 'https://jsonplaceholder.typicode.com/users/1');

// Basic Payment Method
enum enumPaymentMethod {
	Cash = 'CASH',
	Sslcommerz = 'SSLCOMMERZ',
	Bkash = 'BKASH',
	Nagad = 'NAGAD',
}

function enumPaymentProccess(method: enumPaymentMethod) {
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

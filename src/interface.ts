interface TimeStamps {
	createdAt: string;
	updatedAt: string;
}

interface Product {
	id: number;
	name: string;
	slug: string;
	description: string;
	price: number;
	stock: number;
	categoryId: number;
	images: string[];
}

type TimeStampsProduct = Product & TimeStamps;

const product: TimeStampsProduct = {
	id: 1,
	name: 'Baby Soft Toy',
	slug: 'baby-soft-toy',
	description: 'A soft and safe toy for babies.',
	price: 599,
	stock: 50,
	categoryId: 3,
	images: ['toy1.jpg', 'toy2.jpg'],
	createdAt: '2025-11-08T10:00:00Z',
	updatedAt: '2025-11-08T10:00:00Z',
};

console.log(product);

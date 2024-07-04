// items.ts

import { MenuItem } from 'primeng/api';

export interface Product {
    image: string;
    name: string;
    category: string;
    price: number;
}

export const data: Product[] = [
    {
        image: 'blue-t-shirt.jpg',
        name: 'Blue T-Shirt',
        category: 'Clothing',
        price: 29.99
    },
    {
        image: 'black-watch.jpg',
        name: 'Green T-Shirt',
        category: 'Clothing',
        price: 24.99
    },
    {
        image: 'blue-band.jpg',
        name: 'Red T-Shirt',
        category: 'Clothing',
        price: 19.99
    },
];

export const items: MenuItem[] = [
    {
        label: 'View',
        icon: 'pi pi-fw pi-search',
        command: () => {
        }
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        command: () => {
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
        command: () => {
        }
    },
];

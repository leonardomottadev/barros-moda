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
        name: 'Camisa Azul Casual',
        category: 'Clothing',
        price: 29.99
    },
    {
        image: 'black-watch.jpg',
        name: 'Relógio Moderno Minimalista',
        category: 'Clothing',
        price: 130.99
    },
    {
        image: 'blue-band.jpg',
        name: 'Smart Band',
        category: 'Clothing',
        price: 71.99
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

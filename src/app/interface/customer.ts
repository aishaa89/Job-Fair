export interface Customer {
    id:   number;
    name: string;
   transactions: Transaction[];
}

export interface Transaction {
    id:          number;
    customer_id: number;
    date:        string;
    amount:      number;
}

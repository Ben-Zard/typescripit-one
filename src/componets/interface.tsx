import React from "react";
export interface IMealList{
    id: string;
    name: string;
    description: string;
    price: number;
 }

 export type Cart = {
    item: IMealList [];
    total: number;
 }

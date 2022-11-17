import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import ProductOnSale from './ProductOnSale';

interface Iproduct {
    count: number | undefined;
    setCount: React.Dispatch<React.SetStateAction<undefined>>;
    currentPage: number;
}

const ProductList = ({ count, setCount, currentPage }: Iproduct) => {
    const token = localStorage.getItem('token');

    interface IData {
        product_id?: string;
        image?: string;
        product_name?: string;
        stock?: number;
        price?: number;
    }

    const getProductList = async (pageNum: number) => {
        try {
            const response = await axios.get(
                BASE_URL + `/seller/?page=${pageNum}`,
                {
                    headers: {
                        Authorization: `JWT ${token}`,
                    },
                },
            );
            setCount(response.data.count);
            return response.data.results;
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getProductList(currentPage);
    }, []);

    const queryClient = useQueryClient();
    const totalPage = Math.ceil(count! / 15);

    useEffect(() => {
        if (currentPage < totalPage!) {
            const nextPage = currentPage + 1;
            queryClient.prefetchQuery(['product', nextPage], () =>
                getProductList(nextPage),
            );
        }
    }, [currentPage, queryClient]);

    const { data } = useQuery(
        ['product', currentPage],
        () => getProductList(currentPage),
        { keepPreviousData: true },
    );

    return (
        <>
            {data?.map((data: IData) => {
                return (
                    <ProductOnSale
                        key={data.product_id}
                        product_id={data.product_id}
                        image={data.image}
                        product_name={data.product_name}
                        stock={data.stock}
                        price={data.price}
                    />
                );
            })}
        </>
    );
};
export default ProductList;

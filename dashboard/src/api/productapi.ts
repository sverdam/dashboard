import api from ".";
import { AxiosError } from "axios";
import type { Product } from "my-types";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const res = await api.get("/");

    return res.data;
  } catch (error) {
    const err = error as AxiosError;

    console.error("Error fetching products:", err.message);

    throw err;
  }
};



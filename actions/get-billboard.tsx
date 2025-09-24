import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id?: string): Promise<Billboard | null> => {
  try {
    const endpoint = id ? `${URL}/${id}` : URL;
    const res = await fetch(endpoint, { cache: "no-store" });
    if (!res.ok) return null;

    const data = await res.json();

    if (!id && Array.isArray(data)) {
      return data[0] ?? null;
    }

    return data ?? null;
  } catch (error) {
    console.error("getBillboard error:", error);
    return null;
  }
};

export default getBillboard;

const url: string = `${process.env.EXPO_PUBLIC_API_URL}/cars`;

export interface CarResponse {
  id?: number;
  brand: string;
  model: string;
  variant: string;
  transmission: string;
  manufacture_year: string;
}

export async function getOneCar(id: string) {
  const headers: HeadersInit = new Headers();
  headers.set("Content-Type", "application/json");
  const option = {
    method: "GET",
    headers: headers,
  };

  try {
    // console.log("url: ", url);

    const res = await fetch(`${url}/${id}`, option);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

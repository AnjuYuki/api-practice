export async function fetchData<T>(url: string): Promise<T[]> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("APIの取得に失敗しました");
  }

  const data: T[] = await response.json();
  return data;
}

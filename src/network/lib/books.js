import { getRequest } from "../axiosClient";

export async function getBooks() {
  const res = await getRequest('books');

  if (res.status === 200) {
    return res.data?.data;
  }
}

export async function getBookDetails(bookId) {
  const res = await getRequest(`books/${bookId}?range=1-10`);

  if (res.status === 200) {
    return res.data?.data;
  }
}

export interface BookRequest {
    title: string;
    description: string;
    price: number;
}

export const getAllBooks = async () => {
    const response = await fetch("https://localhost:7220/Book");

    return response.json();
};

export const createBook = async (bookrequest: BookRequest) => {
    await fetch("https://localhost:7220/Book", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(bookrequest),
    });
};

export const updateBook = async (id: string, bookRequest: BookRequest) => {
    await fetch(`https://localhost:7220/Book/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(bookRequest),
    });
};

export const deleteBook = async (id: string) => {
    await fetch(`https://localhost:7220/Book/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
        },
    });
};

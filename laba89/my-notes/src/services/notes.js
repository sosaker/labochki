import axios from "axios";

export const fetchNotes = async (filter) => {
    try {
        var response = await axios.get("http://localhost:5253/notes", {
            params: {
                search: filter?.search,
                sortItem: filter?.sortItem,
                sortOrder: filter?.sortOrder,
            }
        });

        return response.data.notes;
    } catch (e) {
        console.error(e);
        //console.log(response);
    }
};

export const createNote = async (note) => {
    try {
        var response = await axios.post("http://localhost:5253/notes", note);

        return response.status;
    } catch (e) {
        console.error(e);
    }
}
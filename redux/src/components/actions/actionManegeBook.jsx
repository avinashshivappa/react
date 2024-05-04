
//1

export const actionAddBook = (objbook) => {
  return {
    type: "ADD_BOOK",
    payload: objbook,
  };
};

export const actionRemoveBook = (bookid) => {
    return {
      type: "REMOVE_BOOK",
      payload: {bookid: bookid},
    };
  };

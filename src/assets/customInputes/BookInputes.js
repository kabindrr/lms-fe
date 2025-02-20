export const NewBookInputes = [
  {
    label: "Title *",
    name: "title",
    type: "text",
    required: true,
    placeholder: "Scary Smart",
  },
  {
    label: "YEAR *",
    name: "year",
    type: "Number",
    min: "1901",
    max: new Date().getFullYear(),
    required: true,
    placeholder: "2021",
  },
  {
    label: "Author *",
    name: "author",
    type: "text",
    required: true,
    placeholder: " Mo Gawdat",
  },
  {
    label: "Image Url",
    name: "imgUrl",
    type: "url",

    placeholder: "https://m.media-amazon.com/images/I/61G0x98-lbL._SY342_.jpg",
  },
  {
    label: "ISBN *",
    name: "isbn",
    type: "text",
    required: true,
    placeholder: "1234567890",
    pattern: "^(?:\\d{9}X|\\d{10}|\\d{13})$", // Adds ISBN validation
    title:
      "Enter a valid ISBN-10 (10 digits, last can be X) or ISBN-13 (13 digits)",
  },
  {
    label: "Genre *",
    name: "genre",
    type: "text",
    required: true,
    placeholder: "learnings",
  },
  {
    label: "Description *",
    name: "description",
    type: "text",
    as: "textarea",
    rows: "6",
    required: true,
    placeholder:
      "Technology is putting our humanity at risk to an unprecedented degree. This book is not for engineers who write the code or the policy makers who claim they can regulate it. This is a book for you. Because, believe it or not, you are the only one that can fix it. – Mo Gawdat",
  },
];
export const EditBookInputes = [
  {
    label: "Title *",
    name: "title",
    type: "text",
    required: true,

    placeholder: "Scary Smart",
  },
  {
    label: "Slug *",
    name: "slug",
    type: "text",
    required: true,
    disabled: true,
  },
  {
    label: "YEAR *",
    name: "year",
    type: "Number",
    min: "1901",
    max: new Date().getFullYear(),
    required: true,
    placeholder: "2021",
  },
  {
    label: "Author *",
    name: "author",
    type: "text",
    required: true,
    placeholder: " Mo Gawdat",
  },
  {
    label: "Image Url",
    name: "imgUrl",
    type: "url",

    placeholder: "https://m.media-amazon.com/images/I/61G0x98-lbL._SY342_.jpg",
  },
  {
    label: "ISBN *",
    name: "isbn",
    type: "text",
    required: true,
    placeholder: "1234567890",
    disabled: true,
    pattern: "^(?:\\d{9}X|\\d{10}|\\d{13})$", // Adds ISBN validation
    title:
      "Enter a valid ISBN-10 (10 digits, last can be X) or ISBN-13 (13 digits)",
  },
  {
    label: "Genre *",
    name: "genre",
    type: "text",
    required: true,
    placeholder: "learnings",
  },
  {
    label: "Expected Available Date",
    name: "expectedAvailableDate",
    type: "date",
  },
  {
    label: "Description *",
    name: "description",
    type: "text",
    as: "textarea",
    rows: "6",
    required: true,
    placeholder:
      "Technology is putting our humanity at risk to an unprecedented degree. This book is not for engineers who write the code or the policy makers who claim they can regulate it. This is a book for you. Because, believe it or not, you are the only one that can fix it. – Mo Gawdat",
  },
];

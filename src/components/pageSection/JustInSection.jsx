import React from "react";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { CustomCard } from "../customCards/CustomCard";
import { useSelector } from "react-redux";

export const JustInSection = () => {
  const { publicBooks } = useSelector((state) => state.bookInfo);

  let books = [];

  if (publicBooks.length) {
    const sorted = [...publicBooks].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    books = sorted.slice(0, 4);
  }
  console.log(books);
  return (
    <div className="mt-5">
      <SectionTitle title="Just In " />
      <div className="d-flex gap-2 justify-content-center flex-wrap">
        {books.map((book) => (
          <CustomCard key={book._id} {...book} />
        ))}
      </div>
    </div>
  );
};

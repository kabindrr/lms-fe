import React from "react";
import { Star } from "../star/Star";
import { formatDistance, formatDistanceToNow, subDays } from "date-fns";

const reviews = [
  {
    title: "This is an Awesome Book. Must read",
    rating: 4.5,
    details:
      "Eric Matthes' Python Crash Course remains one of the most effective and accessible introductions to programming with Python. Targeted primarily at beginners, the book manages to strike a rare balance between clarity, depth, and hands-on engagement—making it a standout resource for self-learners, educators, and professionals seeking a quick yet solid foundation in Python.",
    reviewedBy: "Kabindra Ranabhat",
    createdAt: "2020-5-17",
  },
  {
    title: "This is an Awesome Book. Must read",
    rating: 4.5,
    details:
      "Eric Matthes' Python Crash Course remains one of the most effective and accessible introductions to programming with Python. Targeted primarily at beginners, the book manages to strike a rare balance between clarity, depth, and hands-on engagement—making it a standout resource for self-learners, educators, and professionals seeking a quick yet solid foundation in Python.",
    reviewedBy: "Kabindra Ranabhat",
    createdAt: "2020-5-17",
  },
  {
    title: "This is an Awesome Book. Must read",
    rating: 4.5,
    details:
      "Eric Matthes' Python Crash Course remains one of the most effective and accessible introductions to programming with Python. Targeted primarily at beginners, the book manages to strike a rare balance between clarity, depth, and hands-on engagement—making it a standout resource for self-learners, educators, and professionals seeking a quick yet solid foundation in Python.",
    reviewedBy: "Kabindra Ranabhat",
    createdAt: "2025-5-17",
  },
  {
    title: "This is an Awesome Book. Must read",
    rating: 4.5,
    details:
      "Eric Matthes' Python Crash Course remains one of the most effective and accessible introductions to programming with Python. Targeted primarily at beginners, the book manages to strike a rare balance between clarity, depth, and hands-on engagement—making it a standout resource for self-learners, educators, and professionals seeking a quick yet solid foundation in Python.",
    reviewedBy: "Kabindra Ranabhat",
    createdAt: "2020-5-17",
  },
  {
    title: "This is an Awesome Book. Must read",
    rating: 4.5,
    details:
      "Eric Matthes' Python Crash Course remains one of the most effective and accessible introductions to programming with Python. Targeted primarily at beginners, the book manages to strike a rare balance between clarity, depth, and hands-on engagement—making it a standout resource for self-learners, educators, and professionals seeking a quick yet solid foundation in Python.",
    reviewedBy: "Kabindra Ranabhat",
    createdAt: "2024-5-17",
  },
];

export const Reviews = ({}) => {
  return (
    <div className="reviews-tab">
      {reviews.map((r, i) => (
        <div
          key={i}
          className=" border rounded p-3 shadow-lg d-flex review-item gap-4"
        >
          <div className="left d-flex justify-content-center align-items-center">
            <div className="rounded-circle d-flex justify-content-center align-items-center fs-1 fw-bolder  ">
              PA
            </div>
          </div>
          <div className="right">
            {" "}
            <h3>{r.title}</h3>
            <div className="d-flex gap-2">
              <Star averageRating={r.rating} />
              <span>
                {formatDistanceToNow(new Date(r.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
            <p>{r.details}</p>
            <div className="text-end"> - {r.reviewedBy} </div>
          </div>
        </div>
      ))}
    </div>
  );
};

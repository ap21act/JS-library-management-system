import React from "react";
import BookCover from "./BookCover";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

const BookCard = ({
  id,
  title,
  genre,
  coverColor,
  coverUrl,
  isLoanedBook,
}: Book) => (
  <li className="book-card">
    <Link
      href={`/books/${id}`}
      className={cn(isLoanedBook && "w-full flex flex-col items-center")}
    >
      {/* <p className="text-white">{title}</p> */}
      <BookCover coverColor={coverColor} coverUrl={coverUrl} />
      <BookCover variant="wide" coverColor={coverColor} coverUrl={coverUrl} />
      <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40 max-w-28")}>
        <p className="book-title">{title}</p>
        <p className="book-genre">{genre}</p>
      </div>
      {isLoanedBook && (
        <div className="mt-3 w-full">
          <div className="book-loaned">
            <Image
              src="/icons/calendar.svg"
              alt="Calendar"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-light-100">11 days left to return</p>
          </div>
          <Button className="book-btn">Download Receipt</Button>
        </div>
      )}
    </Link>
  </li>
);

export default BookCard;
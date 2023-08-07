import { CardReviewType, AuthorDetailsType } from "../../../../../@types/types";

const authorDet: AuthorDetailsType[] = [
  {
    name: "Fulano",
    username: "Fulano875",
    avatar_path: "testye.img",
    rating: 5,
  },
  {
    name: "Beltrano",
    username: "Beltrano457",
    avatar_path: "testye.img",
    rating: 6,
  },
];

export const dataReview: CardReviewType[] = [
  {
    author: "Fulano",
    author_details: authorDet[0],
    content:
      'a competent effort from Ty Simpkins) and his dad "Josh" (Patrick Wilson) have a strained ',
    created_at: "2023-07-22T14:38:53.462Z",
    id: "124",
    updated_at: "2023-07-22T14:38:53.462Z",
    url: "http://",
  },
  {
    author: "Beltrano",
    author_details: authorDet[1],
    content: "relationship as they come to terms with recent family ",
    created_at: "2023-07-22T14:38:53.462Z",
    id: "126",
    updated_at: "2023-07-22T14:38:53.462Z",
    url: "http://",
  },
];

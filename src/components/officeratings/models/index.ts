export type LocationStars = {
  text: string;
  href: string;
  stars: number;
};

export type OfficeLocation = {
  continent: string;
  scores: Array<LocationStars>;
};

export type RatingResponse = {
  href: string;
  office_locations: Array<OfficeLocation>;
};

export type Launches = {
  mission_name: string;
  launch_date_local: string;
  launch_site: {
    site_name_long: string;
  };
  links: {
    article_link: string;
    flickr_images: [];
  };
  rocket: {
    rocket_name: string;
  };
};

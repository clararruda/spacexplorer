import axios from 'axios';

const api = axios.create({
  baseURL: 'http://https://api.spacex.land/graphql/',
  responseType: 'json',
});

export default api;

// interface launchesPast {
//   mission_name: string;
//   launch_date_local: string;
//   launch_site: LaunchSite;
//   links: Links;
//   rocket: Rocket;
// }
// interface LaunchSite {
//   site_name_long: string;
// }
// interface Links {
//   article_link: string;
//   flickr_images: [];
// }
// interface Rocket {
//   rocket_name: string;
// }

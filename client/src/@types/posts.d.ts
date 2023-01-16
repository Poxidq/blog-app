export interface PostsItem {
  id: number;
  title: string;
  desc: string;
  img: string;
}

export interface SinglePost {
  id: number;
  userImg: string;
  username: string;
  title: string;
  img?: string;
  cat: string;
  date: string;
  desc: string;
}

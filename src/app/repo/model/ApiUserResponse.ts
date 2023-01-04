export interface ApiUserResponse {
  name: string,
  login: string,
  avatar_url: string,
  html_url: string,
  location: string,
  bio: string,
  twitter_username: string,
  public_repos: number,
  followers: number,
  following: number,
  created_at: Date,
  company?: string,
}

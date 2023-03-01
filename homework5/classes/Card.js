export class Card {
  constructor({ user, userPost }) {
    const { name, email, id } = user;
    this.id = id;
    this.name = name;
    this.email = email;
    this.post = userPost;
  }
}

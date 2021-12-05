function generatePostClasses() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      let output = `${super.toString()}\nRating: ${this.likes - this.dislikes}`;

      if (this.comments.length > 0) {
        output += "\nComments:\n";
        for (let comment of this.comments) {
          output += ` * ${comment}\n`;
        }
      }

      return output.trim();
    }
  }

  class BlogPost extends Post {
    constructor(name, content, views) {
      super(name, content);
      this.views = views;
    }

    view() {
      this.views++;
      return this;
    }

    toString() {
      return super.toString() + `\nViews: ${this.views}`;
    }
  }

  return { Post, SocialMediaPost, BlogPost };
}

const classes = generatePostClasses();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

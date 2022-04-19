function mapErrors(error) {
  if (Array.isArray(error)) {
    return error;
  } else if (error.name == "MongoServerError") {
    if (error.code == 11000) {
      return [
        {
          msg: "Username already exists",
        },
      ];
    } else {
      return [
        {
          msg: "Request error",
        },
      ];
    }
  } else if (error.name == "ValidationError") {
    return Object.values(error.errors).map((e) => ({ msg: e.message }));
  } else if (typeof error.message == "string") {
    return [
      {
        msg: error.message,
      },
    ];
  } else {
    return [
      {
        msg: "Request error",
      },
    ];
  }
}

function postViewModel(post) {
  return {
    _id: post._id,
    title: post.title,
    description: post.description,
    category: post.category,
    imageURL: post.imageURL,
    price: post.price,
    author: authorViewModel(post.author),
    bidders: post.bidders.map(voterViewModel),
  };
}

function voterViewModel(user) {
  return {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
  };
}

function authorViewModel(user) {
  return {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
  };
}

module.exports = { mapErrors, postViewModel };

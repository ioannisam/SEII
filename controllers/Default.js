'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

// controller to delete the id of an author
// affiliated endpoint: authors/{authorId}
module.exports.authorsAuthorIdDELETE = function authorsAuthorIdDELETE (req, res, authorId) {
  void req;
  Default.authorsAuthorIdDELETE(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// controller to get the id of an author
// affiliated endpoint: authors/{authorId}
module.exports.authorsAuthorIdGET = function authorsAuthorIdGET (req, res, authorId) {
  void req;
  Default.authorsAuthorIdGET(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// controller to update the id of an author
// affiliated endpoint: authors/{authorId}
module.exports.authorsAuthorIdPUT = function authorsAuthorIdPUT (req, res, body, authorId) {
  void req;
  Default.authorsAuthorIdPUT(body, authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// controller to get an author
// affiliated endpoint: authors
module.exports.authorsGET = function authorsGET (req, res) {
  void req;
  Default.authorsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// controller to create an author
// affiliated endpoint: authors
module.exports.authorsPOST = function authorsPOST (req, res, body) {
  void req;
  Default.authorsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// controller to delete the id of a book
// affiliated endpoint: books/{bookId}
module.exports.booksBookIdDELETE = function booksBookIdDELETE (req, res, bookId) {
  void req;
  Default.booksBookIdDELETE(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// controller to get the id of a book
// affiliated endpoint: books/{bookId}
module.exports.booksBookIdGET = function booksBookIdGET (req, res, bookId) {
  void req;
  Default.booksBookIdGET(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// controller to update the id of a book
// affiliated endpoint: books/{bookId}
module.exports.booksBookIdPUT = function booksBookIdPUT (req, res, body, bookId) {
  void req;
  Default.booksBookIdPUT(body, bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// controller to get a book
// affiliated endpoint: books
module.exports.booksGET = function booksGET (req, res) {
  void req;
  Default.booksGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// controller to create a book
// affiliated endpoint: books
module.exports.booksPOST = function booksPOST (req, res, body) {
  void req;
  Default.booksPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// controller to delete the id of a category
// affiliated endpoint: categories/{categoryId}
module.exports.categoriesCategoryIdDELETE = function categoriesCategoryIdDELETE (req, res, categoryId) {
  void req;
  Default.categoriesCategoryIdDELETE(categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// controller to get the id of a category
// affiliated endpoint: categories/{categoryId}
module.exports.categoriesCategoryIdGET = function categoriesCategoryIdGET (req, res, categoryId) {
  void req;
  Default.categoriesCategoryIdGET(categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// controller to update the id of a category
// affiliated endpoint: categories/{categoryId}
module.exports.categoriesCategoryIdPUT = function categoriesCategoryIdPUT (req, res, body, categoryId) {
  void req;
  Default.categoriesCategoryIdPUT(body, categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// controller to get a category
// affiliated endpoint: categories
module.exports.categoriesGET = function categoriesGET (req, res) {
  void req;
  Default.categoriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// controller to create a category
// affiliated endpoint: categories
module.exports.categoriesPOST = function categoriesPOST (req, res, body) {
  void req;
  Default.categoriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

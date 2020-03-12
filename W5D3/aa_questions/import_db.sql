PRAGMA foreign_keys = ON;


DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  associated_author_id INTEGER NOT NULL,

  FOREIGN KEY (associated_author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_id INTEGER,
  user_id INTEGER NOT NULL,
  body TEXT NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (parent_id) REFERENCES replies(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
  question_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL, 

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO
  users (fname, lname)
VALUES
  ('Michael', 'Murry'),
  ('Isaac', 'Yoon'),
  ('Helen', 'Yu'),
  ('Michelle', 'Kim'),
  ('Sam', 'Walker'),
  ('Ronil', 'Bhatia');

INSERT INTO
  questions (title, body, associated_author_id)
VALUES
  ('SQLITE3', 'How do you import a database into SQLITE3 database?', 
  (
    SELECT
      id
    FROM
      users
    WHERE
      fname = 'Isaac' AND lname = 'Yoon'
    )
  ),

  ('Algorithms', 'How do you solve Fizz Buzz in O(n) time?', 
  (
    SELECT
      id
    FROM
      users
    WHERE
      fname = 'Michael' AND lname = 'Murry'
  )
  );

INSERT INTO
  question_follows(user_id, question_id)
VALUES
(
  (
    SELECT
      users.id
    FROM
      users
    WHERE
    fname = 'Isaac' AND lname = 'Yoon'
  ),
  (
    SELECT
      questions.id
    FROM
      questions
    WHERE
      title = 'SQLITE3'
  )
);

INSERT INTO
  replies(question_id, user_id, parent_id, body)
VALUES
  (
    (
      SELECT
        id
      FROM
        questions
      WHERE
        title = 'SQLITE3'
    ),
    (
      SELECT
        id
      FROM
        users
      WHERE
        fname = 'Sam'
    ),
    (NULL),
    ('Use the cat import_db.sql | sqlite3 filename.db ')
  ),
  (
    (
      SELECT
        id
      FROM
        questions
      WHERE
        title = 'SQLITE3'
    ),
    (
      SELECT
        id
      FROM
        users
      WHERE
        fname = 'Ronil'
    ),
    (1),
    ('What Walker said!')
  );

-- SELECT
--   r2.body
-- FROM
--   replies AS r1
-- JOIN
--   replies AS r2 ON r1.parent_id = r2.id
-- WHERE
--   r1.body = 'What Walker said!'


INSERT INTO
  question_likes(question_id, user_id)
VALUES
  (1, 3),
  (1, 6),
  (1, 1),
  (2, 2);

-- SELECT
--   fname
-- FROM
--   users
-- JOIN
--   question_likes ON users.id = question_likes.user_id
-- JOIN
--   questions ON question_likes.question_id = questions.id
-- WHERE
--   questions.title = 'SQLITE3'



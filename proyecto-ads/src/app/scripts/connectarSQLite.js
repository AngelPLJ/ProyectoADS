const sqlite3 = require("sqlite3").verbose();

// Connecting to or creating a new SQLite database file
const db = new sqlite3.Database(
  "./farmacia.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

// Serialize method ensures that database queries are executed sequentially
db.serialize(() => {
  // Create the items table if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS articulos (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        descripcion TEXT,
        img TEXT
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Se creo la tabla articulos.");

      // Clear the existing data in the products table
      db.run(`DELETE FROM articulos`, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("Se borraron todos los articulos");

        // Insert new data into the products table
        const values1 = [
          "Acarbosa",
          "Tabletas de acarbosa",
          "/collection/item1.png",
        ];
        const values2 = [
          "Aceclofenaco crema",
          "Crema de Aceclofenaco",
          "/collection/item2.png",
        ];

        const values3 = [
          "Acemetacina",
          "Capsulas de Acemetacina",
          "/collection/item3.png",
        ];

        const values4 = [
          "Acetazolamida",
          "Tabletas de Acetilcisteina",
          "/collection/item4.png",
        ];

        const insertSql = `INSERT INTO articulos(nombre, descripcion, img) VALUES(?, ?, ?)`;

        db.run(insertSql, values1, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values2, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values3, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        db.run(insertSql, values4, function (err) {
          if (err) {
            return console.error(err.message);
          }
          const id = this.lastID; // get the id of the last inserted row
          console.log(`Rows inserted, ID ${id}`);
        });

        //   Close the database connection after all insertions are done
        db.close((err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Closed the database connection.");
        });
      });
    }
  );
});
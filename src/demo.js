import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  head: {
    backgroundColor: "#fff",
    position: "sticky",
    top: 0
  },
  topLeft: {
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 10
  },
  name: {
    backgroundColor: "#fff",
    position: "sticky",
    left: 0,
    zIndex: 1
  },
  item: {
    zIndex: -1000
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <div>
      Sticky header
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.topLeft}>
              Dessert (100g serving)
            </TableCell>
            <TableCell className={classes.head} numeric>
              Calories
            </TableCell>
            <TableCell className={classes.head} numeric>
              Fat (g)
            </TableCell>
            <TableCell className={classes.head} numeric>
              Carbs (g)
            </TableCell>
            <TableCell className={classes.head} numeric>
              Protein (g)
            </TableCell>
            <TableCell className={classes.head} numeric>
              Protein (g)
            </TableCell>
            <TableCell className={classes.head} numeric>
              Protein (g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell className={classes.name}>{n.name}</TableCell>
                <TableCell className={classes.item} numeric>
                  {n.calories}
                </TableCell>
                <TableCell className={classes.item} numeric>
                  {n.fat}
                </TableCell>
                <TableCell className={classes.item} numeric>
                  {n.carbs}
                </TableCell>
                <TableCell className={classes.item} numeric>
                  {n.protein}
                </TableCell>
                <TableCell className={classes.item} numeric>
                  {n.protein}
                </TableCell>
                <TableCell className={classes.item} numeric>
                  {n.protein}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);

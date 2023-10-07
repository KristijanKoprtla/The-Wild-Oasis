import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sory by name (A-Z)" },
          { value: "name-desc", label: "Sory by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sory by price (low to high)" },
          { value: "regularPrice-desc", label: "Sory by price (high to low)" },
          { value: "maxCapacity-asc", label: "Sory by capacity (low to high)" },
          {
            value: "maxCapacity-desc",
            label: "Sory by capacity (high to low)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;

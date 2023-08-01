import Select from "react-select";

const options = [
  { value: "all", label: "Show all" },
  { value: "following", label: "Following" },
  { value: "follow", label: "Follow" },
];

export const MySelect = ({ filter, setFilter }) => {
  return (
    <Select
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          width: "300px",
          borderRadius: "10px",
          textAlign: "left",
          fontSize: "16px",
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          width: "300px",
          color: "black",
          fontSize: "14px",
        }),
      }}
      defaultValue={filter}
      onChange={setFilter}
      options={options}
    />
  );
};

import ApiIcon from "@mui/icons-material/Api";

function SideBarOptions({
  onClickOption,
  optionValue,
  thisOptionValue,
  thisOptionText,
}) {
  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        onClickOption(thisOptionValue);
      }}
      className="flex w-full h-12 border-b-2 border-ebony border-op items-center justify-start font-bold text-licorice hover:border-licorice hover:bg-tan"
    >
      <ApiIcon
        className={`ms-2 ${optionValue == thisOptionValue ? "" : "text-ebony"}`}
      />
      <p className="ms-2">{thisOptionText}</p>
    </a>
  );
}

export default SideBarOptions;

import SideBarOptions from "./SideBarOptions";

function SideBar({ onClickOption, optionValue }) {
  const options = [
    {
      id: 1,
      value: "Dashboard",
    },
    {
      id: 2,
      value: "Jobs",
    },
    {
      id: 3,
      value: "Students",
    },
    {
      id: 4,
      value: "Upload",
    },
    {
      id:5,
      value: "Calendar"
    }
  ];

  const sideBarOptionsList = options.map(({ id, value }) => {
    return <SideBarOptions
      onClickOption={onClickOption}
      optionValue={optionValue}
      thisOptionValue={id}
      key={id}
      thisOptionText={value}
    />;
  });

  return (
    <ul className="container bg-whitesmoke h-screen w-1/6 border-e-2 border-ebony border-op lg:text-md sm:text-base">
      {sideBarOptionsList}
    </ul>
  );
}

export default SideBar;

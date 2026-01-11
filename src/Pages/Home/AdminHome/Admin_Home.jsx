import LowerPart from "./LowerPart";
import UpperPart from "./UpperPart";

const Admin_Home = () => {
  return (
    <div className=" bg-[#F9FAFB] min-h-screen space-y-8 ">
      <div className="flex justify-between items-center mb-2"></div>

      <UpperPart />
      <LowerPart />
    </div>
  );
};

export default Admin_Home;

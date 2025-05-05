import { LuDatabase, LuFile, LuCodeXml, LuStar, LuInbox } from "react-icons/lu";
import { ReactNode } from "react";

function renderIcon(icon: string) {
  type IconsObjType = { [key: string]: ReactNode };
  const iconsObject: IconsObjType = {
    LuDatabase: <LuDatabase />,
    LuFile: <LuFile />,
    LuCodeXml: <LuCodeXml />,
    LuStar: <LuStar />,
    LuInbox: <LuInbox />,
  };

  return iconsObject[icon] ? iconsObject[icon] : <LuFile />;
}

export default renderIcon;

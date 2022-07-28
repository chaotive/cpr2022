import {
  ItemObject,
  CommonData,
} from "cpr2022-data/src/types/schemaShallow";
import {
  firstToUpperCase,
  getChildrenOfType,
  getItemFragmentoId,
  getItemLabel,
} from "lib/helpers";
import HashLink from "./HashLink";
import Inciso from "./Inciso";
import ItemToolbar from "./ItemToolbar"

export default function Transitoria({ item }: { item: ItemObject }) {
  const path = getItemFragmentoId(item);
  const data = item.data as CommonData;
  return (
    <div data-hash={path} className="border border-solid rounded-md p-3 mb-3">
      <ItemToolbar path={path} item={item} />
      <h3 className="my-0 rounded">
        <HashLink hash={path} anchor="disposición transitoria" />{" "}
        {getItemLabel(item)}{" "}
        {data.sobre && (
          <span className="font-sans rounded-md text-sm font-normal  bg-gray-300 text-black px-2 py-1">
            {firstToUpperCase(data.sobre)}
          </span>
        )}
      </h3>

      {getChildrenOfType(item, "inciso").map((inciso, incisoIndex) => (
        <Inciso key={incisoIndex} item={inciso} baseItem={item} />
      ))}
    </div>
  );
}

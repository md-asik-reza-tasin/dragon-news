import { useContext } from "react";
import { AuthContextApi } from "../AuthContext/AuthContext";
import Single from "./Single";

export default function SingleCategory() {
  const { singleCategory } = useContext(AuthContextApi);

  return (
    <div>
      {singleCategory.map((sc) => <Single key={sc._id} sc={sc}></Single>)}
    </div>
  );
}

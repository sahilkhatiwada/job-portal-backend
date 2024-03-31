import { MainRoutes } from "./MainRoutes";
import { guestRoutes } from "./guestRoutes";

const allRoutes = [...guestRoutes, ...MainRoutes];

export default allRoutes;

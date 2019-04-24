import { auth } from "../middleware/auth";
import { getWinCards, postWinCard } from "../controllers/winCardController";

export const winCardRoutes = (app) => {
    app.route('/wincards')
    .get(auth, getWinCards)
    .post(auth, postWinCard)
}
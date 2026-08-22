import "./assets/styles/main.css";
import "./assets/styles/app.css";

import { formUser } from "./components/Form";

const app = document.querySelector<HTMLDivElement>("#app");

app?.appendChild(formUser());

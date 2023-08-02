import { createContext, FC, useState } from "react";
// import { FinancialRecord } from "@entities/financial-record";
import { Movie } from "../../@types/types";

const Context = createContext([0, () => {}]);

export { Context };

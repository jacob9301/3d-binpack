import containerReducer from "./containerReducer";
import boxReducer from "./boxReducer";

const rootReducer = {
    container: containerReducer,
    box: boxReducer
}

export default rootReducer;
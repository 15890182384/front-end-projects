import { createAction } from "./action";
import { createRequest } from "./createServe";

const testService = createRequest({
    baseURL:"/test"
})


export default createAction(testService)
import http from "@/utils/axios/axios";
import {UserInfoFactory} from "@/services/api/user/factories/UserInfoFactory";
import {ResponseFactory} from "@/services/api/utils/factories/ResponseFactory";

export default {
  async getUserInfo() {
    const response = await http.get('/bot/user-infos')
    const parsedResponse = ResponseFactory(response)
    const fetchedUserInfo = parsedResponse.result

    const parsedUserInfo = UserInfoFactory(fetchedUserInfo);

    return parsedUserInfo;
  }
}

import http from "@/utils/axios/axios";
import {ResponseFactory} from "@/services/api/utils/factories/ResponseFactory";
import {ResearchFactory} from "@/services/api/research/factories/ResearchFactory";

export default {
  async getResearch() {
    const response = await http.get("/bot/get-research");
    const parsedResponse = ResponseFactory(response);
    const fetchedResearch = parsedResponse.result;

    const parsedResearch = ResearchFactory(fetchedResearch);

    return parsedResearch;
  }
}

import { http, HttpResponse } from "msw";
import { baseAPI } from "../utils/constants";
import GetPlaylistsMock from "@tests/mocks/get-playlists.json";

export const handlers = [
  http.get(`${baseAPI}/me/playlists?`, ({ request }) => {
    const url = new URL(request.url);
    const limit = url.searchParams.get("limit");
    console.log("limit", limit)
    return HttpResponse.json(GetPlaylistsMock, { status: 200 });
  }),
];

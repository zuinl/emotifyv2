import { http, HttpResponse } from "msw";
import { authBaseAPI, baseAPI } from "../utils/constants";
import AccessTokenResponse from "@tests/mocks/access-token-response.json";
import GetPlaylistsMock from "@tests/mocks/get-playlists.json";
import GetTopTracksMock from "@tests/mocks/get-top-tracks.json";
import GetPlaybackMock from "@tests/mocks/get-playback.json";

export const handlers = [
  http.post(authBaseAPI, () => {
    return HttpResponse.json(AccessTokenResponse, { status: 200 });
  }),
  http.get(`${baseAPI}/me/playlists`, ({ request }) => {
    const url = new URL(request.url);
    const limit = url.searchParams.get("limit");

    if (limit === "1") {
      // TODO: entender melhor mocks de erro do MSW
      return HttpResponse.error();
    }

    return HttpResponse.json(GetPlaylistsMock, { status: 200 });
  }),
  http.get(`${baseAPI}/me/top/tracks`, ({ request }) => {
    const url = new URL(request.url);
    const limit = url.searchParams.get("limit");

    if (limit === "1") {
      return HttpResponse.error();
    }

    return HttpResponse.json(GetTopTracksMock, { status: 200 });
  }),
  http.get(`${baseAPI}/me/player`, () => {
    return HttpResponse.json(GetPlaybackMock, { status: 200 });
  }),
  http.put(`${baseAPI}/me/player/pause`, () => {
    return HttpResponse.json(null, { status: 200 });
  }),
  http.put(`${baseAPI}/me/player/play`, () => {
    return HttpResponse.json(null, { status: 200 });
  }),
  http.get(`${baseAPI}/me/tracks/contains`, () => {
    return HttpResponse.json([true, false], { status: 200 });
  }),
];
